'use client';

import { Suspense, useEffect, useRef, useState } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application } from '@splinetool/runtime';

export default function PhoneModel({ scrollProgress, videoUrl }: { scrollProgress: number, videoUrl: string }) {
    const splineApp = useRef<Application | null>(null);

    function onLoad(app: Application) {
        splineApp.current = app;
        console.log('--- Spline Scene Loaded ---');

        const objects = app.getAllObjects();

        // Find the single master container of the phone to prevent inner parts from double-rotating/exploding.
        let mainObj = objects.find(o => o.name === 'Phone' || o.name === 'Mobile' || o.name === 'Group');
        if (!mainObj) {
            mainObj = objects.find(o => {
                const anyObj = o as any;
                return (anyObj.parent?.name === 'Scene' || !anyObj.parent) && !o.name.toLowerCase().includes('camera') && !o.name.toLowerCase().includes('light');
            });
        }

        if (mainObj) {
            mainObj.rotation.y = Math.PI; // Start showing the initial side
            (app as any)._phoneMasterObj = mainObj;
        }
    }

    const videoRef = useRef<HTMLVideoElement>(null);
    const wasVisibleRef = useRef(false);

    useEffect(() => {
        if (splineApp.current && (splineApp.current as any)._phoneMasterObj) {
            const mainObj = (splineApp.current as any)._phoneMasterObj;

            // Calculate rotation: start at -Math.PI (-180 deg) and flip to 0 to show the opposite side underneath the mask
            const rotationY = -Math.PI + (scrollProgress * Math.PI);
            const rotationX = (1 - scrollProgress) * 0.2;

            // Apply rotation only to the master group so the phone pieces stay together
            mainObj.rotation.y = rotationY;
            mainObj.rotation.x = rotationX;
        }

        // Manage Video Playback Reset
        const isVisible = scrollProgress > 0.95;
        if (isVisible && !wasVisibleRef.current) {
            if (videoRef.current) {
                videoRef.current.currentTime = 0;
                videoRef.current.play().catch(() => { });
            }
        } else if (!isVisible && wasVisibleRef.current) {
            if (videoRef.current) {
                videoRef.current.pause();
                videoRef.current.currentTime = 0;
            }
        }
        wasVisibleRef.current = isVisible;
    }, [scrollProgress]);

    // Show video overlay only when phone is fully facing front (progress > 0.95)
    // Scale opacity linearly from 0 to 1 between 0.95 and 1.0.
    const videoOpacity = scrollProgress > 0.95 ? (scrollProgress - 0.95) * 20 : 0;

    return (
        <div className="phone-wrapper" style={{ width: '100%', height: '100%', position: 'relative' }}>
            <Spline
                scene="https://prod.spline.design/2GoKygPJzu4khAS8/scene.splinecode"
                onLoad={onLoad}
                style={{ width: '100%', height: '100%' }}
            />

            <div className="phone-video-overlay" style={{ opacity: videoOpacity }}>
                <div className="phone-camera-notch"></div>
                <video
                    ref={videoRef}
                    src={videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            </div>
        </div>
    );
}

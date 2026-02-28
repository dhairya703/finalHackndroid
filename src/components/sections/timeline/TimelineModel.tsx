'use client';

import { useRef, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import type { Application, SPEObject } from '@splinetool/runtime';

export default function TimelineModel() {
    const loopInterval = useRef<NodeJS.Timeout | null>(null);

    function onLoad(app: Application) {
        const objects = app.getAllObjects();

        // Find all interactive or animated objects
        const animatableObjs = objects.filter(o => {
            const isCamera = o.name.toLowerCase().includes('camera');
            const isLight = o.name.toLowerCase().includes('light') || o.name.toLowerCase().includes('directional');
            return !isCamera && !isLight;
        });

        // Continuously fire the native Spline 'start' animation event
        loopInterval.current = setInterval(() => {
            animatableObjs.forEach(obj => {
                try {
                    obj.emitEvent('start');
                } catch (e) {
                    // silently bypass static items
                }
            });
        }, 6000); // Guessed ~6s loop cycle for the timeline animation
    }

    useEffect(() => {
        return () => {
            if (loopInterval.current) {
                clearInterval(loopInterval.current);
            }
        };
    }, []);

    return (
        <div className="timeline-model-wrapper" style={{ width: '100%', height: '100%', position: 'relative', pointerEvents: 'none' }}>
            <div className="spline-watermark-hider-timeline"></div>
            <Spline
                scene="https://prod.spline.design/9W-z4gPfsa4Cgm-h/scene.splinecode"
                onLoad={onLoad}
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}

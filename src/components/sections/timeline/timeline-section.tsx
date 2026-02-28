"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const TimelineModel = dynamic(() => import('./TimelineModel'), {
    ssr: false,
    loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TIMELINE...</div></div>
});

export function TimelineSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const [mountKey, setMountKey] = useState(0);

    useEffect(() => {
        const node = sectionRef.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        // Increment key to force a full remount of the Spline scene
                        setMountKey(prev => prev + 1);
                    }
                });
            },
            { threshold: 0.2 }
        );

        observer.observe(node);

        return () => {
            observer.disconnect();
        };
    }, []);

    return (
        <section id="timeline" className="timeline-section" ref={sectionRef}>
            <div className="container">
                <h2 className="timeline-title">EVENT TIMELINE</h2>
            </div>
            <div className="timeline-model-container">
                <TimelineModel key={mountKey} />
            </div>
        </section>
    );
}

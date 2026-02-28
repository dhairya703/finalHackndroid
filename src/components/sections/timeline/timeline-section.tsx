"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const TimelineModel = dynamic(() => import('./TimelineModel'), {
    ssr: false,
    loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TIMELINE...</div></div>
});

export function TimelineSection() {
    return (
        <section id="timeline" className="timeline-section">
            <div className="container">
                <h2 className="timeline-title">EVENT TIMELINE</h2>
            </div>
            <div className="timeline-model-container">
                <TimelineModel />
            </div>
        </section>
    );
}

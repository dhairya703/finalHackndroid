"use client";

import React from 'react';
import dynamic from 'next/dynamic';

const TrackModel = dynamic(() => import('./TrackModel'), {
    ssr: false,
    loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TRACKS...</div></div>
});

export function TracksSection() {
    return (
        <section id="tracks" className="tracks-section">
            <div className="arenas-title-container">
                <span className="arenas-slashes">//</span>
                <div className="arenas-text-wrapper">
                    <span className="arenas-main">ARENAS</span>
                    <span className="arenas-sub" data-text="TECH">TECH</span>
                </div>
            </div>
            <div className="track-model-container">
                <TrackModel />
            </div>
        </section>
    );
}

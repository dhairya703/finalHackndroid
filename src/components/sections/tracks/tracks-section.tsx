"use client";

import React from 'react';
import CardFlip from '@/components/flip-card';

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
                <CardFlip color='#ff2e88'/>
            </div>
        </section>
    );
}

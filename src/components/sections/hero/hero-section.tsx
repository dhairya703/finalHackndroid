"use client";

import React, { useRef } from 'react';
import dynamic from 'next/dynamic';
import { ButtonColorful } from '@/components/ui/button-colorful';
import Link from "next/link";

const RobotModel = dynamic(() => import('./RobotModel'), {
    ssr: false,
    loading: () => <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">Loading Robot...</div>
});

interface HeroSectionProps {
    onSceneReady?: () => void;
}

export function HeroSection({ onSceneReady }: HeroSectionProps) {
    const titleRef = useRef<HTMLHeadingElement>(null);

    return (
        <section id="hero" className="hero-new">

            <div className="container">
                <div className="hero-grid">

                    <div className="hero-content">
                        <div className="status-badge">
                            <div className="status-dot"></div>
                            REGISTRATIONS CLOSED
                        </div>

                        <h1 className="hero-title" ref={titleRef}>
                            <div className="title-stack">
                                <span className="text-metallic">HACK</span>
                                <div className="title-row-2">
                                    <span className="text-2-0">2.0   </span>
                                    <span className="text-metallic title-front">-N-</span>
                                </div>
                                <span className="text-purple-metallic drop-shadow-lg">DROID</span>
                            </div>
                        </h1>

                        <p className="hero-subtitle">
                            BIGGER. GRANDER. WILDER.
                        </p>
{/* 
                        <div className="cta-container mb-4" style={{ position: 'relative', zIndex: 20 }}>
                            <Link href='/leaderboard'>
                                <ButtonColorful label="VIEW LEADERBOARD" />
                            </Link>
                        </div> */}

                        <div className="cta-container" style={{ position: 'relative', zIndex: 20 }}>
                            <Link href='/certificate'>
                                <ButtonColorful label="CERTIFICATES" />
                            </Link>
                        </div>

                        <div style={{ marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.2rem', opacity: 0.6, textTransform: 'uppercase' }}>
                            SCROLL TO EXPLORE
                            <div style={{ marginTop: '0.75rem', width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
                        </div>
                    </div>

                    <div className="hero-robot-container">
                        <RobotModel onSceneReady={onSceneReady} />
                    </div>

                </div>
            </div>

            <div className="spline-watermark-hider">
                <div className="marquee-tilted-container">
                    <div className="marquee-band band-purple">
                        <div className="marquee-content" aria-hidden="true">
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                        </div>
                    </div>
                    <div className="marquee-band band-pink">
                        <div className="marquee-content" aria-hidden="true">
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                            <span>HACK-N-DROID 2.0</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

"use client";

import React, { useState, useEffect, useCallback } from 'react';
import { TubesBackground } from '@/components/ui/neon-flow';
import { SplashScreen } from '@/components/splash-screen';

function getTargetDate(): Date {
    // March 2, 2026 9:00 AM IST (UTC+5:30 = 3:30 AM UTC)
    const target1 = new Date('2026-03-02T03:30:00Z');
    // March 3, 2026 9:00 AM IST
    const target2 = new Date('2026-03-03T03:30:00Z');

    const now = new Date();
    if (now < target1) return target1;
    return target2;
}

function formatCountdown(distance: number) {
    if (distance <= 0) return { hours: '00', minutes: '00', seconds: '00' };

    const totalHours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    return {
        hours: String(totalHours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0'),
    };
}

export default function BuraSamayPage() {
    const [time, setTime] = useState({ hours: '--', minutes: '--', seconds: '--' });
    const [mounted, setMounted] = useState(false);
    const [showSplash, setShowSplash] = useState(true);
    const [isTubesReady, setIsTubesReady] = useState(false);

    const handleTubesLoaded = useCallback(() => {
        setIsTubesReady(true);
    }, []);

    const handleSplashFinished = useCallback(() => {
        setShowSplash(false);
    }, []);

    // Lock body scroll during splash
    useEffect(() => {
        if (showSplash) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => { document.body.style.overflow = ''; };
    }, [showSplash]);

    useEffect(() => {
        setMounted(true);
        const target = getTargetDate().getTime();

        const tick = () => {
            const distance = target - Date.now();
            setTime(formatCountdown(distance));
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    const units = [
        { label: 'HOURS', value: time.hours },
        { label: 'MINUTES', value: time.minutes },
        { label: 'SECONDS', value: time.seconds },
    ];

    // SVG string for the noise layer overlay
    const noiseSvg = `data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3'/%3E%3CfeColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.25 0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E`;

    return (
        <main className="main-wrapper relative min-h-screen">
            {showSplash && (
                <SplashScreen ready={isTubesReady} onFinished={handleSplashFinished} />
            )}
            <TubesBackground className="burasamay-wrapper" onLoaded={handleTubesLoaded}>
                <div
                    style={{
                        minHeight: '100vh',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        position: 'relative'
                    }}
                >
                    {/* Ambient Background Glows */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '600px',
                        height: '600px',
                        background: 'radial-gradient(circle, rgba(168, 85, 247, 0.05) 0%, transparent 70%)',
                        pointerEvents: 'none',
                        filter: 'blur(60px)',
                    }} />

                    <h1 className="burasamay-title" style={{
                        fontFamily: `'Bebas Neue', sans-serif`,
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        letterSpacing: '8px',
                        color: 'rgba(255,255,255,0.8)',
                        marginBottom: '4rem',
                        textShadow: '0 0 20px rgba(168, 85, 247, 0.4)'
                    }}>THE FINAL COUNTDOWN</h1>

                    <div className="burasamay-timer" style={{
                        display: 'flex',
                        gap: 'clamp(1rem, 4vw, 3rem)',
                        alignItems: 'center'
                    }}>
                        {units.map((unit, i) => (
                            <React.Fragment key={unit.label}>
                                {i > 0 && <span className="neu-digit-separator" style={{
                                    fontFamily: `'Outfit', sans-serif`,
                                    fontWeight: 900,
                                    fontSize: 'clamp(4rem, 10vw, 8rem)',
                                    color: '#111',
                                    textShadow: '-2px -2px 4px rgba(255,255,255,0.05), 4px 4px 8px rgba(0,0,0,0.8)',
                                    lineHeight: 1,
                                    userSelect: 'none',
                                    marginTop: '-1rem'
                                }}>:</span>}
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',
                                    zIndex: 10
                                }}>
                                    <span className="neu-digit-text" style={{
                                        fontFamily: `'Outfit', sans-serif`,
                                        fontWeight: 900,
                                        fontVariantNumeric: 'tabular-nums',
                                        fontSize: 'clamp(5rem, 14vw, 11rem)',

                                        // Beautiful Metallic Gradient mostly purple/pink
                                        backgroundImage: `url("${noiseSvg}"), linear-gradient(135deg, #fbcfe8 0%, #ec4899 25%, #7e22ce 50%, #a855f7 75%, #f3e8ff 100%)`,
                                        backgroundSize: '150px, 100% 100%',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        color: 'transparent',

                                        // Smooth Emboss via layered drop-shadow: specular highlight top-left, bevel shadow bottom-right, deep outer ambient shadow
                                        filter: 'drop-shadow(-2px -2px 2px rgba(255, 210, 255, 0.5)) drop-shadow(2px 2px 3px rgba(50, 0, 50, 0.8)) drop-shadow(10px 10px 20px rgba(0, 0, 0, 0.9))',
                                        lineHeight: 1,
                                        letterSpacing: '2px'
                                    }}>
                                        {unit.value}
                                    </span>
                                    <span style={{
                                        fontFamily: `'Outfit', sans-serif`,
                                        fontSize: 'clamp(0.6rem, 1.5vw, 1rem)',
                                        fontWeight: 600,
                                        letterSpacing: '0.3em',
                                        color: 'rgba(255,255,255,0.4)',
                                        marginTop: '1rem'
                                    }}>
                                        {unit.label}
                                    </span>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>
            </TubesBackground>
        </main>
    );
}

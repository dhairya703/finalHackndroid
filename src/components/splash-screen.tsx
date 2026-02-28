'use client';

import { useEffect, useState } from 'react';

interface SplashScreenProps {
    onFinished: () => void;
    ready: boolean;
}

export function SplashScreen({ onFinished, ready }: SplashScreenProps) {
    const [fadeOut, setFadeOut] = useState(false);
    const [minTimePassed, setMinTimePassed] = useState(false);

    // Minimum display time so the animation plays out
    useEffect(() => {
        const timer = setTimeout(() => setMinTimePassed(true), 2800);
        return () => clearTimeout(timer);
    }, []);

    // When both ready and min time passed, start exit animation
    useEffect(() => {
        if (ready && minTimePassed) {
            setFadeOut(true);
            const exitTimer = setTimeout(onFinished, 800); // match CSS exit duration
            return () => clearTimeout(exitTimer);
        }
    }, [ready, minTimePassed, onFinished]);

    return (
        <div className={`splash-overlay ${fadeOut ? 'splash-exit' : ''}`}>
            {/* Animated background particles */}
            <div className="splash-particles">
                {Array.from({ length: 30 }).map((_, i) => (
                    <div
                        key={i}
                        className="splash-particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 4}s`,
                            width: `${2 + Math.random() * 4}px`,
                            height: `${2 + Math.random() * 4}px`,
                        }}
                    />
                ))}
            </div>

            {/* Orbital rings */}
            <div className="splash-orbit splash-orbit-1" />
            <div className="splash-orbit splash-orbit-2" />
            <div className="splash-orbit splash-orbit-3" />

            {/* Center content */}
            <div className="splash-center">
                <div className="splash-logo-ring">
                    <div className="splash-logo-glow" />
                    <div className="splash-logo-text">
                        <span className="splash-hack">HACK</span>
                        <span className="splash-n">-N-</span>
                        <span className="splash-droid">DROID</span>
                    </div>
                    <div className="splash-version">2.0</div>
                </div>

                <div className="splash-tagline">
                    <span>BIGGER</span>
                    <span className="splash-dot">•</span>
                    <span>GRANDER</span>
                    <span className="splash-dot">•</span>
                    <span>WILDER</span>
                </div>

                <div className="splash-loader">
                    <div className="splash-loader-track">
                        <div className={`splash-loader-fill ${minTimePassed && ready ? 'splash-loader-done' : ''}`} />
                    </div>
                    <span className="splash-loader-text">
                        {ready ? 'LAUNCHING' : 'LOADING EXPERIENCE'}
                    </span>
                </div>
            </div>
        </div>
    );
}

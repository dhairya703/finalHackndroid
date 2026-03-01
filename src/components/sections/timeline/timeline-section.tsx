"use client";

import React, { useRef, useState, useEffect, useCallback } from 'react';
import dynamic from 'next/dynamic';

const TimelineModel = dynamic(() => import('./TimelineModel'), {
    ssr: false,
    loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TIMELINE...</div></div>
});

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

export function TimelineSection({ onLoaded }: { onLoaded?: () => void }) {
    const sectionRef = useRef<HTMLElement>(null);
    const timerRef = useRef<HTMLDivElement>(null);
    const [time, setTime] = useState({ hours: '--', minutes: '--', seconds: '--' });

    // Countdown logic
    useEffect(() => {
        const target = getTargetDate().getTime();

        const tick = () => {
            const distance = target - Date.now();
            setTime(formatCountdown(distance));
        };

        tick();
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);

    // Spotlight mouse interaction
    const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
        const cards = timerRef.current?.querySelectorAll<HTMLElement>('.neu-card');
        if (!cards) return;

        cards.forEach(card => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--spotlight-x', `${x}px`);
            card.style.setProperty('--spotlight-y', `${y}px`);
        });
    }, []);

    // Removed Spline remounting logic so it loads once during splash screen

    const units = [
        { label: 'HOURS', value: time.hours },
        { label: 'MINUTES', value: time.minutes },
        { label: 'SECONDS', value: time.seconds },
    ];

    return (
        <section id="timeline" className="timeline-section" ref={sectionRef}>
            <div className="container">
                <h2 className="timeline-title">EVENT TIMELINE</h2>

                {/* Neumorphic Countdown Timer */}
                <div className="neu-timer" ref={timerRef} onMouseMove={handleMouseMove}>
                    {units.map((unit, i) => (
                        <React.Fragment key={unit.label}>
                            {i > 0 && <span className="neu-separator">:</span>}
                            <div className="neu-card">
                                <div className="neu-card-spotlight" />
                                <span className="neu-value">{unit.value}</span>
                                <span className="neu-label">{unit.label}</span>
                            </div>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="timeline-model-container">
                <TimelineModel onLoaded={onLoaded} />
            </div>
        </section>
    );
}


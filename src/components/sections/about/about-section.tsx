"use client";

import React, { useRef, useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

const PhoneModel = dynamic(() => import('./PhoneModel'), {
    ssr: false,
    loading: () => <div className="phone-placeholder"><div className="phone-screen">PREPARING 3D...</div></div>
});

export function AboutSection() {
    const aboutRef = useRef<HTMLElement>(null);
    const aboutContentRef = useRef<HTMLDivElement>(null);
    const [scrollProgress, setScrollProgress] = useState(0);

    // Intersection Observer for About Section Visibility
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        aboutContentRef.current?.classList.add('visible');
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (aboutRef.current) {
            observer.observe(aboutRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Scroll Progress Logic for Phone Rotation
    useEffect(() => {
        const handleScroll = () => {
            const hero = document.getElementById('hero');
            if (!hero) return;

            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;

            const progress = Math.min(1, Math.max(0, scrollY / windowHeight));
            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section id="about" className="about-section" ref={aboutRef}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-content" ref={aboutContentRef}>
                        <h2 className="about-title">WHAT IS <br /> HACK-N-DROID?</h2>
                        <div className="about-card">
                            <p className="about-text">
                                <span style={{ color: 'var(--accent)', fontWeight: 'bold' }}>Hack-n-Droid</span> is a dynamic hackathon that brings together developers, ethical hackers, and tech enthusiasts to solve real-world challenges across multiple domains, including EdTech, Law, Healthcare, Public Safety, Sustainability, Modern E-Commerce Solutions, and Open Innovation.
                                <br /><br />
                                It fosters creativity, collaboration, and problem-solving, providing a platform for participants to develop cutting-edge solutions that drive meaningful impact in technology and society.
                            </p>
                        </div>
                    </div>

                    <div className="phone-container">
                        <PhoneModel
                            scrollProgress={scrollProgress}
                            videoUrl="/videos/hnd_trailer.mp4"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

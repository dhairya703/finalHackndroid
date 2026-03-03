'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { NavBar } from '@/components/ui/nav-bar';
import { SplashScreen } from '@/components/ui/splash-screen';

import { HeroSection } from '@/components/sections/hero/hero-section';
import { AboutSection } from '@/components/sections/about/about-section';
import { TracksSection } from '@/components/sections/tracks/tracks-section';
import { TimelineSection } from '@/components/sections/timeline/timeline-section';
import { PartnersSection } from '@/components/sections/partners/partners-section';
import { FaqSection } from '@/components/sections/faq/faq-section';
import Copyright from "@/components/copyright";
import { Connect, SocialConnect } from "@/components/connect";

export default function Home() {
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [showSplash, setShowSplash] = useState(true);
  const [modelsLoaded, setModelsLoaded] = useState({
    robot: false,
    phone: false,
    timeline: false
  });

  const sceneReady = modelsLoaded.robot && modelsLoaded.phone && modelsLoaded.timeline;

  const handleRobotReady = useCallback(() => setModelsLoaded(m => ({ ...m, robot: true })), []);
  const handlePhoneReady = useCallback(() => setModelsLoaded(m => ({ ...m, phone: true })), []);
  const handleTimelineReady = useCallback(() => setModelsLoaded(m => ({ ...m, timeline: true })), []);

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

  const navItems = [
    { name: 'HOME', url: '#hero' },
    { name: 'ABOUT', url: '#about' },
    { name: 'TRACKS', url: '#tracks' },
    { name: 'TIMELINE', url: '#timeline' },
    { name: 'FAQ', url: '#faq' },
    { name: 'CERTIFICATES', url: '/certificate' },
  ];

  // Float elements micro-interaction for background
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      floatRefs.current.forEach((float) => {
        if (!float) return;
        const floatRect = float.getBoundingClientRect();
        const floatX = floatRect.left + floatRect.width / 2;
        const floatY = floatRect.top + floatRect.height / 2;

        const distX = mouseX - floatX;
        const distY = mouseY - floatY;
        const distance = Math.sqrt(distX * distX + distY * distY);

        if (distance < 300) {
          const factor = (300 - distance) / 10;
          float.style.transform = `translate(${-distX / factor}px, ${-distY / factor}px)`;
        } else {
          float.style.transform = `translate(0px, 0px)`;
        }
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="main-wrapper">
      {/* Splash Screen */}
      {showSplash && (
        <SplashScreen ready={sceneReady} onFinished={handleSplashFinished} />
      )}

      {/* Background Elements */}
      <div className="background-elements">
        <div className="stars"></div>
        <div className="glow glow-1"></div>
        <div className="glow glow-2"></div>

        {/* Floating element placeholders */}
        {[1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className={`floating-element float-${i}`}
            ref={(el) => { floatRefs.current[i - 1] = el; }}
          ></div>
        ))}
      </div>

      <NavBar items={navItems} />

      <main>
        <HeroSection onSceneReady={handleRobotReady} />
        <AboutSection onLoaded={handlePhoneReady} />
        <TracksSection />
        <TimelineSection onLoaded={handleTimelineReady} />
        <PartnersSection />
        <FaqSection />
      </main>
      <footer className="bg-black border-t border-white/10 p-8 mt-auto backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <Connect />
          <SocialConnect />
          <Copyright />
        </div>
      </footer>
    </div>
  );
}


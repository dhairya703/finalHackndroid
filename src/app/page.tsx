'use client';

import { useEffect, useRef } from 'react';
import { Home as HomeIcon, User, Layers, HelpCircle, LogIn } from 'lucide-react';
import { NavBar } from '@/components/nav-bar';

import { HeroSection } from '@/components/sections/hero/hero-section';
import { AboutSection } from '@/components/sections/about/about-section';
import { TracksSection } from '@/components/sections/tracks/tracks-section';
import { TimelineSection } from '@/components/sections/timeline/timeline-section';
import { PartnersSection } from '@/components/sections/partners/partners-section';
import { FaqSection } from '@/components/sections/faq/faq-section';

export default function Home() {
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);

  const navItems = [
    { name: 'HOME', url: '#hero', icon: HomeIcon },
    { name: 'ABOUT', url: '#about', icon: User },
    { name: 'TRACKS', url: '#tracks', icon: Layers },
    { name: 'TIMELINE', url: '#timeline', icon: LogIn },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
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
        <HeroSection />
        <AboutSection />
        <TracksSection />
        <TimelineSection />
        <PartnersSection />
        <FaqSection />
      </main>
    </div>
  );
}

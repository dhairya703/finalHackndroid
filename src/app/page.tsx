'use client';

import { useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';
import { Home as HomeIcon, User, Layers, HelpCircle, LogIn, BookOpen, Scale, HeartPulse, ShieldAlert, Leaf, ShoppingCart, Lightbulb, Flag, Code, Zap, Trophy } from 'lucide-react';
import { NavBar } from '@/components/nav-bar';

// Import Spline dynamically to avoid SSR issues
const PhoneModel = dynamic(() => import('./PhoneModel'), {
  ssr: false,
  loading: () => <div className="phone-placeholder"><div className="phone-screen">PREPARING 3D...</div></div>
});

const RobotModel = dynamic(() => import('./RobotModel'), {
  ssr: false,
  loading: () => <div className="absolute inset-0 z-0 flex items-center justify-center opacity-50">Loading Robot...</div>
});

const TimelineModel = dynamic(() => import('./TimelineModel'), {
  ssr: false,
  loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TIMELINE...</div></div>
});

const TrackModel = dynamic(() => import('./TrackModel'), {
  ssr: false,
  loading: () => <div className="phone-placeholder"><div className="phone-screen">LOADING TRACKS...</div></div>
});

import { ButtonColorful } from '@/components/button-colorful';

export default function Home() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const heroContainerRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const aboutContentRef = useRef<HTMLDivElement>(null);
  const floatRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [timeLeft, setTimeLeft] = useState('00:00:00');
  const [scrollProgress, setScrollProgress] = useState(0);

  const navItems = [
    { name: 'HOME', url: '#hero', icon: HomeIcon },
    { name: 'ABOUT', url: '#about', icon: User },
    { name: 'TRACKS', url: '#tracks', icon: Layers },
    { name: 'FAQ', url: '#faq', icon: HelpCircle },
    { name: 'REGISTER', url: '#register', icon: LogIn },
  ]

  // Intersection Observer for About Section Visibility
  // (Assuming code continues here, fast forwarding to Hero section)
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


  // Float elements micro-interaction
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

  // Countdown Timer
  useEffect(() => {
    const targetDate = new Date('Mar 15, 2026 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        setTimeLeft("00:00:00");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(`${days}:${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`);
    };

    const interval = setInterval(updateCountdown, 1000);
    updateCountdown();

    return () => clearInterval(interval);
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
        {/* Hero Section */}
        <section id="hero" className="hero-new">
          <div className="timer-bg">{timeLeft}</div>

          <div className="container">
            <div className="hero-grid">

              <div className="hero-content">
                <div className="status-badge">
                  <div className="status-dot"></div>
                  LIVE REGISTRATIONS
                </div>

                <h1 className="hero-title" ref={titleRef}>
                  <div className="title-stack">
                    <span className="text-metallic">HACK</span>
                    <div className="title-row-2">
                      <span className="text-2-0">2.0</span>
                      <span className="text-metallic title-front">-N-</span>
                    </div>
                    <span className="text-purple-metallic drop-shadow-lg">DROID</span>
                  </div>
                </h1>

                <p className="hero-subtitle">
                  BIGGER. GRANDER. WILDER.
                </p>

                <div className="cta-container" style={{ position: 'relative', zIndex: 20 }}>
                  <ButtonColorful label="JOIN THE HACKATHON" />
                </div>

                <div style={{ marginTop: '3rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 500, letterSpacing: '0.2rem', opacity: 0.6, textTransform: 'uppercase' }}>
                  SCROLL TO EXPLORE
                  <div style={{ marginTop: '0.75rem', width: '1px', height: '40px', background: 'linear-gradient(to bottom, var(--accent), transparent)' }}></div>
                </div>
              </div>

              <div className="hero-robot-container">
                <RobotModel />
              </div>

            </div>
          </div>

          {/* Marquee to cover spline watermark dynamically */}
          <div className="spline-watermark-hider">
            <div className="marquee-tilted-container">
              <div className="marquee-band band-purple">
                <div className="marquee-content" aria-hidden="true">
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                </div>
              </div>
              <div className="marquee-band band-pink">
                <div className="marquee-content" aria-hidden="true">
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                  <span>HACK-N-DROID '26</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
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
                  videoUrl="/hnd_trailer.mp4"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Tracks Section */}
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

        {/* Timeline Section */}
        <section id="timeline" className="timeline-section">
          <div className="container">
            <h2 className="timeline-title">EVENT TIMELINE</h2>
          </div>
          <div className="timeline-model-container">
            <TimelineModel />
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="partners-section">
          <div className="container">
            <h2 className="partners-title">OUR PARTNERS</h2>

            <div className="sponsor-tier gold-tier">
              <h3 className="tier-title gold-text">GOLD PARTNER</h3>
              <div className="sponsor-grid single-sponsor">
                <div className="sponsor-card gold-sponsor">
                  <div className="sponsor-card-bg"></div>
                  <img src="/partner-seqato.png" alt="SEQATO" className="sponsor-logo" />
                </div>
              </div>
            </div>

            <div className="sponsor-tier silver-tier">
              <h3 className="tier-title silver-text">SILVER PARTNER</h3>
              <div className="sponsor-grid single-sponsor">
                <div className="sponsor-card silver-sponsor">
                  <div className="sponsor-card-bg"></div>
                  <img src="/partner-ndmit.png" alt="NDMIT" className="sponsor-logo" />
                </div>
              </div>
            </div>

            <div className="sponsor-tier other-tier">
              <h3 className="tier-title">OTHER PARTNERS</h3>
              <div className="sponsor-grid">
                <div className="sponsor-card other-sponsor">
                  <div className="sponsor-card-bg"></div>
                  <img src="/partner-xyz.png" alt=".xyz" className="sponsor-logo" />
                </div>
                <div className="sponsor-card other-sponsor">
                  <div className="sponsor-card-bg"></div>
                  <img src="/partner-interviewbuddy.png" alt="Interview Buddy" className="sponsor-logo" />
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import Leaderboard from "@/components/pages/leaderboard/Leaderboard";

interface Particle {
  left: string;
  top: string;
  animationDelay: string;
  animationDuration: string;
  width: string;
  height: string;
}

export default function LeaderboardLayout() {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 100 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${3 + Math.random() * 4}s`,
      width: `${2 + Math.random() * 3}px`,
      height: `${2 + Math.random() * 3}px`,
    }));

    setParticles(generated);
  }, []);
  return (
    <div className="min-h-screen min-w-full relative bg-black overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="splash-effects">
          <div className="splash-particles">
            {particles.map((style, i) => (
              <div
                key={i}
                className="splash-particle"
                style={style} // ← use generated style instead of regenerating
              />
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center w-full h-full">
          <div className="splash-orbit splash-orbit-1" />
          <div className="splash-orbit splash-orbit-2" />
          <div className="splash-orbit splash-orbit-3" />
        </div>
      </div>

      <Leaderboard />
    </div>
  );
}

"use client";

import React, { useEffect, useRef, useState } from 'react';
import { cn } from "@/lib/utils";

const randomColors = (count: number) => {
    return new Array(count)
        .fill(0)
        .map(() => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0'));
};

interface TubesBackgroundProps {
    children?: React.ReactNode;
    className?: string;
    enableClickInteraction?: boolean;
    onLoaded?: () => void;
}

export function TubesBackground({
    children,
    className,
    enableClickInteraction = true,
    onLoaded
}: TubesBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const tubesRef = useRef<any>(null);

    const [isCursorActive, setIsCursorActive] = useState(false);
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleMouseMove = () => {
            setIsCursorActive(true);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                setIsCursorActive(false);
            }, 2000);
        };

        const handleMouseOut = (e: MouseEvent) => {
            // Document mouseout with no related target indicates leaving the window entirely
            if (!e.relatedTarget) {
                setIsCursorActive(false);
                if (timeoutRef.current) clearTimeout(timeoutRef.current);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseout', handleMouseOut);

        // Bootstrap initial timeout
        handleMouseMove();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseout', handleMouseOut);
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, []);

    useEffect(() => {
        let mounted = true;
        let cleanup: (() => void) | undefined;

        const initTubes = async () => {
            if (!canvasRef.current) return;

            try {
                // @ts-ignore
                const module = (await import('threejs-components/build/cursors/tubes1.min.js')) as any;
                // Deal with CJS/ESM interop differences when consuming minified bundles
                const TubesCursor = module.default || module;

                if (!mounted) return;

                const app = TubesCursor(canvasRef.current, {
                    tubes: {
                        colors: ["#a855f7", "#ec4899", "#7e22ce"], // Purple and Pink theme
                        lights: {
                            intensity: 50,
                            colors: ["#c084fc", "#fbcfe8", "#ff008a", "#22d3ee"] // Purple, Pink, a slight hint of blue
                        }
                    }
                });

                tubesRef.current = app;
                setIsLoaded(true);
                onLoaded?.();

                const handleResize = () => { };

                window.addEventListener('resize', handleResize);

                cleanup = () => {
                    window.removeEventListener('resize', handleResize);
                };

            } catch (error) {
                console.error("Failed to load TubesCursor:", error);
            }
        };

        initTubes();

        return () => {
            mounted = false;
            if (cleanup) cleanup();
        };
    }, []);

    const handleClick = () => {
        if (!enableClickInteraction || !tubesRef.current) return;

        // Instead of random, let's keep it in theme with slightly shifted shades
        const themeColors = [
            ["#a855f7", "#ec4899", "#7e22ce"],
            ["#c084fc", "#e879f9", "#dd1bff"],
            ["#ec4899", "#a855f7", "#581c87"]
        ];

        const themeLights = [
            ["#c084fc", "#fbcfe8", "#ff008a", "#22d3ee"],
            ["#e879f9", "#f9a8d4", "#a855f7", "#67e8f9"],
            ["#fbcfe8", "#c084fc", "#ec4899", "#22d3ee"]
        ];

        const randomSetIndex = Math.floor(Math.random() * themeColors.length);

        tubesRef.current.tubes.setColors(themeColors[randomSetIndex]);
        tubesRef.current.tubes.setLightsColors(themeLights[randomSetIndex]);
    };

    return (
        <div
            className={cn("relative w-full h-full min-h-screen overflow-hidden bg-[#111111]", className)}
            onClick={handleClick}
        >
            <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full block"
                style={{
                    touchAction: 'none',
                    opacity: isCursorActive ? 1 : 0,
                    transition: 'opacity 1s ease-in-out'
                }}
            />

            {/* Content Overlay */}
            <div className="relative z-10 w-full h-full pointer-events-none">
                {children}
            </div>
        </div>
    );
}

export default TubesBackground;

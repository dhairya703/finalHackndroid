"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonColorfulProps extends HTMLMotionProps<"button"> {
    label?: string;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    ...props
}: ButtonColorfulProps) {
    const ref = useRef<HTMLButtonElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);

        // Intensity of the magnetic pull
        setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;

    return (
        <motion.button
            ref={ref}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 200, damping: 15, mass: 0.1 }}
            className={cn(
                "relative h-12 px-6 overflow-hidden rounded-md cursor-pointer outline-none border-none",
                "bg-zinc-100 text-zinc-900",
                "transition-all duration-200",
                "group",
                className
            )}
            style={{ backgroundColor: '#f4f4f5' }} // Fallback background
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className="absolute inset-0 opacity-40 group-hover:opacity-80 blur transition-opacity duration-500 button-bg-gradient"
                style={{
                    background: 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
                    transition: 'opacity 0.5s',
                }}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2 z-10">
                <span style={{ color: '#18181b', fontWeight: 600 }}>{label}</span>
                <ArrowUpRight strokeWidth={2.5} style={{ color: 'rgba(24, 24, 27, 0.9)', width: '1.2rem', height: '1.2rem' }} />
            </div>

            {/* Native fallback styles injected locally since Tailwind env is partially broken */}
            <style jsx>{`
                .button-bg-gradient {
                    background: linear-gradient(to right, #6366f1, #a855f7, #ec4899);
                }
                .group:hover .button-bg-gradient {
                    opacity: 0.8 !important;
                }
            `}</style>
        </motion.button>
    );
}

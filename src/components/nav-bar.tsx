"use client"

import React, { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
    name: string
    url: string
}

interface NavBarProps {
    items: NavItem[]
    className?: string
}

export function NavBar({ items, className }: NavBarProps) {
    const [activeTab, setActiveTab] = useState(items[0].name)
    const [isMobile, setIsMobile] = useState(false)
    // Track whether the user just clicked a nav link (to temporarily ignore scroll updates)
    const isClickNavigation = useRef(false)
    const clickTimeoutRef = useRef<NodeJS.Timeout | null>(null)

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768)
        }

        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    // IntersectionObserver to track which section is in view
    useEffect(() => {
        // Build a map from section ID -> nav item name
        const sectionToName: Record<string, string> = {}
        items.forEach((item) => {
            const id = item.url.replace("#", "")
            if (id) sectionToName[id] = item.name
        })

        // Collect all existing section elements
        const sectionIds = Object.keys(sectionToName)
        const sectionElements = sectionIds
            .map((id) => document.getElementById(id))
            .filter(Boolean) as HTMLElement[]

        if (sectionElements.length === 0) return

        // Track which sections are currently intersecting and their ratios
        const visibleSections = new Map<string, number>()

        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickNavigation.current) return

                entries.forEach((entry) => {
                    const id = entry.target.id
                    if (entry.isIntersecting) {
                        visibleSections.set(id, entry.intersectionRatio)
                    } else {
                        visibleSections.delete(id)
                    }
                })

                // Pick the section with the highest intersection ratio
                let bestId = ""
                let bestRatio = 0
                visibleSections.forEach((ratio, id) => {
                    if (ratio > bestRatio) {
                        bestRatio = ratio
                        bestId = id
                    }
                })

                if (bestId && sectionToName[bestId]) {
                    setActiveTab(sectionToName[bestId])
                }
            },
            {
                // Multiple thresholds for finer-grained ratio updates
                threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
                rootMargin: "-10% 0px -10% 0px",
            }
        )

        sectionElements.forEach((el) => observer.observe(el))

        return () => {
            observer.disconnect()
        }
    }, [items])

    const handleNavClick = (itemName: string) => {
        setActiveTab(itemName)
        // Temporarily ignore scroll-based updates so the click takes precedence
        isClickNavigation.current = true
        if (clickTimeoutRef.current) clearTimeout(clickTimeoutRef.current)
        clickTimeoutRef.current = setTimeout(() => {
            isClickNavigation.current = false
        }, 800)
    }

    return (
        <div
            className={cn(
                "fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6",
                className
            )}
        >
            <div className="flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
                {items.map((item) => {
                    const isActive = activeTab === item.name

                    return (
                        <Link
                            key={item.name}
                            href={item.url}
                            onClick={() => handleNavClick(item.name)}
                            className={cn(
                                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                                "text-white/60 hover:text-white",
                                isActive && "bg-white/10 text-white"
                            )}
                        >
                            <span className="inline-block relative z-10">{item.name}</span>
                            {isActive && (
                                <motion.div
                                    layoutId="lamp"
                                    className="navbar-lamp"
                                    initial={false}
                                    transition={{
                                        type: "spring",
                                        stiffness: 300,
                                        damping: 30,
                                    }}
                                >
                                    <div className="tubelight-glow">
                                        <div className="tubelight-flare-1" />
                                        <div className="tubelight-flare-2" />
                                    </div>
                                </motion.div>
                            )}
                        </Link>
                    )
                })}
            </div>
        </div>
    )
}

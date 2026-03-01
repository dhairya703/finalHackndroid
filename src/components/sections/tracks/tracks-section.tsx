"use client";

import React from 'react';
import CardFlip from '@/components/ui/flip-card';
import { HatGlasses, Cpu, Lightbulb, HeartPulse, Landmark, Blocks} from "lucide-react";

export function TracksSection() {
    const tracks = [
    {
        title: "Cybersecurity",
        subtext: "Safeguard digital assets and strengthen system security.",
        description: "Create robust solutions to prevent cyber threats, enhance data privacy, and ensure secure digital ecosystems for individuals and organizations.",
        features: [
        "Develop tools to detect and prevent cyber attacks in real time.",
        "Implement secure authentication and authorization mechanisms.",
        "Design systems that protect sensitive data and user privacy.",
        "Build monitoring solutions to identify and respond to vulnerabilities."
        ]
    },
    {
        title: "AR/VR",
        subtext: "Build immersive digital experiences using AR and VR technologies.",
        description: "Develop interactive and immersive applications across sectors like education, healthcare, gaming, and retail without relying on custom hardware.",
        features: [
        "Create virtual simulations for training and education.",
        "Design interactive AR applications for real-world problem solving.",
        "Enhance user engagement through immersive 3D environments.",
        "Develop cross-platform AR/VR experiences using software tools."
        ]
    },
    {
        title: "Open Innovation",
        subtext: "Solve real-world challenges through creative digital solutions.",
        description: "Leverage software-driven innovation to address problems across any domain with scalable and impactful applications.",
        features: [
        "Identify and solve pressing real-world problems creatively.",
        "Build scalable digital platforms adaptable to multiple industries.",
        "Design user-centric applications with measurable impact.",
        "Utilize emerging technologies to drive innovative solutions."
        ]
    },
    {
        title: "Healthcare",
        subtext: "Enhance patient care and healthcare accessibility with technology.",
        description: "Develop technology-driven healthcare solutions that improve diagnostics, telemedicine, and system efficiency.",
        features: [
        "Create telemedicine platforms for remote consultations.",
        "Build diagnostic tools powered by AI or data analytics.",
        "Design systems to streamline hospital management processes.",
        "Develop applications that promote accessible and affordable healthcare."
        ]
    },
    {
        title: "FinTech",
        subtext: "Innovate secure and smart financial solutions.",
        description: "Design secure payment platforms, fraud detection systems, digital banking tools, and financial management applications.",
        features: [
        "Develop secure and scalable digital payment systems.",
        "Create fraud detection and risk assessment tools.",
        "Build personal finance management applications.",
        "Design next-generation digital banking experiences."
        ]
    },
    {
        title: "Blockchain",
        subtext: "Promote transparency and trust through decentralization.",
        description: "Build decentralized applications, smart contracts, and secure digital systems that ensure transparency, trust, and data integrity.",
        features: [
        "Develop smart contracts for secure automated transactions.",
        "Create decentralized applications with transparent logic.",
        "Implement blockchain-based identity or verification systems.",
        "Design tamper-proof data storage solutions."
        ]
    }
    ];
    const icons = [HatGlasses, Cpu, Lightbulb, HeartPulse, Landmark, Blocks];
    return (
        <section id="tracks" className="tracks-section">
            <div className="arenas-title-container">
                <span className="arenas-slashes">//</span>
                <div className="arenas-text-wrapper">
                    <span className="arenas-main">ARENAS</span>
                    <span className="arenas-sub" data-text="TECH">TECH</span>
                </div>
            </div>
            <div className="track-model-container">
                {tracks.map((track, index) => (
                    <CardFlip
                        key={index}
                        title={track.title}
                        subtitle={track.subtext}
                        description={track.description}
                        features={track.features}
                        icon={icons[index]}
                    />
                    ))}
            </div>
        </section>
    );
}

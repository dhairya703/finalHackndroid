"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const questions: { question: string; answer: string }[] = [
    {
        question: "WHAT IS HACK-N-DROID?",
        answer:
            "Hack-N-Droid is not just a hackathon—it’s 24 hours of pure adrenaline-fueled innovation! Whether you're a coder, designer, or problem-solver, this is your playground to tackle real-world challenges and bring your boldest ideas to life.",
    },
    {
        question: "WHAT IS THE TEAM SIZE?",
        answer:
            "You can go solo or team up with 3 to 4 members—because the best ideas sometimes spark alone, but the greatest solutions come from collaboration!",
    },
    {
        question: "WHAT'S EXPECTED TO BE BUILT?",
        answer:
            "Your mission: Prototype. Pitch. Impress. Whether it's a sleek UI/UX design, a functional app, or a cutting-edge AI-powered tool—your solution should effectively communicate your vision and problem-solving skills to the judges.",
    },
    {
        question: "IS THERE A REGISTRATION FEE?",
        answer:
            "No, it doesn't! The hackathon is completely free to participate in. Your registration includes certificates, exciting goodies, brand coupons 🏷, and an electrifying experience like no other!",
    },
    {
        question: "HOW DO I REGISTER?",
        answer:
            "🔗 Ready to Hack? Register Now!\n💵 Payment Link: https://vitchennaievents.com\n📝 Form Link: https://forms.gle/i29zeFCjrSw5mSJ5A",
    },
    {
        question: "WHAT SHOULD I BRING?",
        answer:
            "🚀 Bring your laptop, your brain, and an extra charger—because one of them will give up! 😇",
    },
];

export function FaqSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="faq-section" style={{ padding: '8rem 0', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 10, background: 'var(--bg-color)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: '4rem' }} className="md:grid-cols-2">

                    {/* Left Column (Title/Actions) */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center' }}>
                        <div style={{
                            display: 'inline-block',
                            padding: '0.25rem 0.75rem',
                            borderRadius: '9999px',
                            border: '1px solid rgba(255,255,255,0.1)',
                            background: 'rgba(255,255,255,0.03)',
                            fontSize: '0.8rem',
                            fontWeight: 600,
                            letterSpacing: '0.05em',
                            marginBottom: '1.5rem',
                        }}>
                            FAQ
                        </div>

                        {/* Themed Title */}
                        <h2 style={{
                            fontFamily: "'Bebas Neue', sans-serif",
                            fontSize: 'clamp(3rem, 6vw, 4.5rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            background: 'linear-gradient(to right, #fff, var(--primary), var(--accent))',
                            WebkitBackgroundClip: 'text',
                            backgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            letterSpacing: '1px'
                        }}>
                            FREQUENTLY ASKED<br />QUESTIONS
                        </h2>

                        <p style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '1.1rem',
                            lineHeight: 1.6,
                            color: 'var(--text-muted)',
                            marginBottom: '2.5rem',
                            maxWidth: '85%'
                        }}>
                            Everything you need to know about Hack-N-Droid '26. Can't find your answer here? Our team is always ready to help you out.
                        </p>

                        <button style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '0.75rem 1.25rem',
                            background: 'rgba(255, 255, 255, 0.05)',
                            border: '1px solid rgba(255, 255, 255, 0.1)',
                            borderRadius: '4px',
                            color: '#fff',
                            fontFamily: "'Outfit', sans-serif",
                            fontWeight: 600,
                            fontSize: '0.95rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease'
                        }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                            }}
                        >
                            Any questions? Reach out
                            <Phone size={16} />
                        </button>
                    </div>

                    {/* Right Column (Accordion) */}
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {questions.map((q, i) => (
                            <div
                                key={i}
                                style={{
                                    borderBottom: '1px solid rgba(255,255,255,0.1)',
                                    paddingTop: i === 0 ? '0' : '1.5rem',
                                    paddingBottom: '1.5rem'
                                }}
                            >
                                <button
                                    onClick={() => toggleOpen(i)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        width: '100%',
                                        background: 'none',
                                        border: 'none',
                                        color: '#fff',
                                        textAlign: 'left',
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: '1.1rem',
                                        fontWeight: 600,
                                        cursor: 'pointer',
                                        padding: 0
                                    }}
                                >
                                    <span style={{ paddingRight: '1.5rem' }}>{q.question}</span>
                                    <motion.div
                                        animate={{ rotate: openIndex === i ? 180 : 0 }}
                                        transition={{ duration: 0.3, ease: 'anticipate' }}
                                    >
                                        <ChevronDown size={20} color="rgba(255,255,255,0.6)" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === i && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: 'easeOut' }}
                                            style={{ overflow: 'hidden' }}
                                        >
                                            <div style={{
                                                paddingTop: '1rem',
                                                color: 'var(--text-muted)',
                                                fontFamily: "'Outfit', sans-serif",
                                                lineHeight: 1.6,
                                                fontSize: '1rem',
                                                whiteSpace: 'pre-line' // Important for newlines in answers
                                            }}>
                                                {q.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

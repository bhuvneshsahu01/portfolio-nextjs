'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Telescope } from 'lucide-react';

const exploringItems = [
    {
        icon: Zap,
        title: 'Multi-Agent Orchestration',
        description: 'CrewAI and AutoGen for complex workflow automation',
        color: '#f59e0b'
    },
    {
        icon: Telescope,
        title: 'Vision-Language Models',
        description: 'CLIP, LLaVA for industrial inspection applications',
        color: '#8b5cf6'
    },
    {
        icon: Sparkles,
        title: 'Efficient Inference',
        description: 'vLLM and TensorRT for production optimization',
        color: '#22c55e'
    }
];

export function CurrentlyExploring() {
    return (
        <section style={{
            paddingTop: '60px',
            paddingBottom: '80px',
            background: 'var(--background-secondary)'
        }}>
            <div className="content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '48px' }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--accent-primary)',
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        🚀 Currently Exploring
                    </span>
                    <h2 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 700, marginBottom: '12px' }}>
                        Staying <span className="gradient-text">Current</span>
                    </h2>
                    <p style={{ fontSize: '1rem', color: 'var(--foreground-secondary)', maxWidth: '600px', margin: '0 auto' }}>
                        Actively learning and experimenting with emerging ML technologies
                    </p>
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '20px',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    {exploringItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                style={{
                                    background: 'var(--background-card)',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '16px',
                                    padding: '24px',
                                    boxShadow: 'var(--shadow-card)',
                                    transition: 'all 0.3s ease'
                                }}
                                whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
                            >
                                <div style={{
                                    width: '40px',
                                    height: '40px',
                                    borderRadius: '10px',
                                    background: `${item.color}15`,
                                    border: `1px solid ${item.color}30`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '16px'
                                }}>
                                    <Icon style={{ width: '20px', height: '20px', color: item.color }} />
                                </div>
                                <h3 style={{
                                    fontSize: '1.125rem',
                                    fontWeight: 600,
                                    marginBottom: '8px',
                                    color: 'var(--foreground)'
                                }}>
                                    {item.title}
                                </h3>
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--foreground-secondary)',
                                    lineHeight: 1.6
                                }}>
                                    {item.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

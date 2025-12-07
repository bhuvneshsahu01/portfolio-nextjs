'use client';

import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import { experiences } from '@/data';
import { Badge } from '@/components/ui';

export function ExperienceSection() {
    return (
        <section id="experience" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
            <div className="content-wrapper">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <span style={{
                        display: 'inline-block',
                        padding: '12px 24px',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--accent-primary)',
                        fontSize: '16px',
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        Experience
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Professional <span className="gradient-text">Journey</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        Building production AI systems and solving real-world challenges
                    </p>
                </motion.div>

                {/* Experience Cards */}
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)',
                                overflow: 'hidden'
                            }}>
                                {/* Header */}
                                <div style={{ marginBottom: '20px' }}>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                        <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{exp.title}</h3>
                                        {exp.current && <Badge variant="primary" size="sm">Current</Badge>}
                                    </div>
                                    <p style={{ fontSize: '1.125rem', color: 'var(--accent-primary)', fontWeight: 600 }}>{exp.company}</p>
                                </div>

                                {/* Meta */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', marginBottom: '20px', fontSize: '16px', color: 'var(--foreground-muted)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Calendar style={{ width: '16px', height: '16px' }} />
                                        {formatDate(exp.startDate)} - {exp.current ? 'Present' : formatDate(exp.endDate!)}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <MapPin style={{ width: '16px', height: '16px' }} />
                                        {exp.location}
                                    </span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                        <Briefcase style={{ width: '16px', height: '16px' }} />
                                        {exp.type === 'full-time' ? 'Full-time' : 'Internship'}
                                    </span>
                                </div>

                                {/* Description */}
                                <p style={{ color: 'var(--foreground-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
                                    {exp.description}
                                </p>

                                {/* Highlights */}
                                {exp.highlights && exp.highlights.length > 0 && (
                                    <div style={{ marginBottom: '20px' }}>
                                        <h4 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px' }}>Key Achievements:</h4>
                                        <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                            {exp.highlights.map((highlight, i) => (
                                                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '16px', color: 'var(--foreground-secondary)' }}>
                                                    <span style={{ color: 'var(--accent-primary)', marginTop: '6px' }}>▹</span>
                                                    <span style={{ lineHeight: 1.6 }}>{highlight}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                {/* Technologies */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                    {exp.technologies.map((tech) => (
                                        <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function formatDate(dateStr: string): string {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

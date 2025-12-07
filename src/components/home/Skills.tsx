'use client';

import { motion } from 'framer-motion';
import { skillCategories } from '@/data';
import { Badge } from '@/components/ui';

export function Skills() {
    const topCategories = skillCategories.filter(cat =>
        ['ml-dl', 'genai', 'cv', 'nlp', 'programming', 'mlops'].includes(cat.id)
    );

    return (
        <section id="skills" style={{ paddingTop: '100px', paddingBottom: '100px' }}>
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
                        Technical Skills
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Tools & <span className="gradient-text">Technologies</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        End-to-end capabilities from statistical modeling to production deployment
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '24px',
                    maxWidth: '1000px',
                    margin: '0 auto'
                }}>
                    {topCategories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)',
                                overflow: 'hidden'
                            }}
                        >
                            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '1.5rem',
                                    border: '1px solid rgba(99, 102, 241, 0.2)'
                                }}>
                                    {category.icon}
                                </div>
                                <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>{category.title}</h3>
                            </div>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                                {category.skills.map((skill) => (
                                    <Badge key={skill.name} variant={skill.level === 'expert' ? 'primary' : 'default'} size="sm">
                                        {skill.name}
                                    </Badge>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Summary */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{ marginTop: '48px', maxWidth: '800px', marginLeft: 'auto', marginRight: 'auto' }}
                >
                    <div style={{
                        padding: '24px 32px',
                        borderRadius: '16px',
                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05), rgba(236, 72, 153, 0.05))',
                        border: '1px solid rgba(99, 102, 241, 0.1)',
                        textAlign: 'center'
                    }}>
                        <p style={{ color: 'var(--foreground-secondary)', lineHeight: 1.7 }}>
                            <span style={{ fontWeight: 600, color: 'var(--foreground)' }}>Core Strengths: </span>
                            Statistical foundations with hands-on expertise in building production-ready Gen-AI systems,
                            Computer Vision pipelines, and NLP applications.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

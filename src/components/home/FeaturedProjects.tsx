'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, Github, ExternalLink, Sparkles } from 'lucide-react';
import { getFeaturedProjects, projectCategories, personalInfo } from '@/data';
import { Button, Badge } from '@/components/ui';

export function FeaturedProjects() {
    const featuredProjects = getFeaturedProjects();

    return (
        <section id="projects" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--background-secondary)' }}>
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
                        Featured Work
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Projects That <span className="gradient-text">Make Impact</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        End-to-end AI solutions across Gen-AI, Computer Vision, NLP, and Machine Learning
                    </p>
                </motion.div>

                {/* Projects */}
                <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px', flexWrap: 'wrap', gap: '12px' }}>
                                    <div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                                            <span style={{ fontSize: '2rem' }}>{projectCategories[project.category].icon}</span>
                                            <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>{project.title}</h3>
                                        </div>
                                        <Badge variant="primary" size="sm">{projectCategories[project.category].label}</Badge>
                                    </div>
                                    <div style={{ display: 'flex', gap: '8px' }}>
                                        {project.githubUrl !== '#' && (
                                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer"
                                                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', background: 'var(--background-tertiary)', color: 'var(--foreground-muted)' }}>
                                                <Github style={{ width: '20px', height: '20px' }} />
                                            </a>
                                        )}
                                        {project.liveUrl && (
                                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                                                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '10px', background: 'var(--background-tertiary)', color: 'var(--foreground-muted)' }}>
                                                <ExternalLink style={{ width: '20px', height: '20px' }} />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Description */}
                                <p style={{ color: 'var(--foreground-secondary)', marginBottom: '20px', lineHeight: 1.7 }}>
                                    {project.longDescription}
                                </p>

                                {/* Highlights */}
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginBottom: '20px' }}>
                                    {project.highlights.slice(0, 4).map((highlight, i) => (
                                        <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '16px', color: 'var(--foreground-secondary)' }}>
                                            <Sparkles style={{ width: '16px', height: '16px', color: 'var(--accent-primary)', marginTop: '2px', flexShrink: 0 }} />
                                            <span>{highlight}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Impact */}
                                <div style={{
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
                                    border: '1px solid rgba(99, 102, 241, 0.1)',
                                    marginBottom: '20px'
                                }}>
                                    <p style={{ fontSize: '16px', color: 'var(--foreground-secondary)', fontStyle: 'italic' }}>
                                        <span style={{ fontWeight: 600, color: 'var(--foreground)', fontStyle: 'normal' }}>Impact: </span>
                                        {project.impact}
                                    </p>
                                </div>

                                {/* Technologies */}
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}>
                                    {project.technologies.map((tech) => (
                                        <Badge key={tech} variant="default" size="sm">{tech}</Badge>
                                    ))}
                                </div>

                                {/* View Case Study Link */}
                                <a
                                    href={`/projects/${project.slug}`}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        color: 'var(--accent-primary)',
                                        fontSize: '15px',
                                        fontWeight: 600,
                                        textDecoration: 'none',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    View Full Case Study
                                    <ArrowUpRight style={{ width: '16px', height: '16px' }} />
                                </a>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{ textAlign: 'center', marginTop: '48px' }}
                >
                    <a
                        href={personalInfo.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '10px',
                            padding: '20px 40px',
                            fontSize: '1.125rem',
                            fontWeight: 600,
                            borderRadius: '16px',
                            background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                            color: 'white',
                            textDecoration: 'none',
                            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        View All on GitHub
                        <ArrowUpRight style={{ width: '22px', height: '22px' }} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}

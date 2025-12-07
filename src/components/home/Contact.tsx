'use client';

import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Github, Linkedin, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui';
import { personalInfo } from '@/data';

export function Contact() {
    return (
        <section id="contact" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--background-secondary)' }}>
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
                        Get in Touch
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Let&apos;s Work <span className="gradient-text">Together</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}>
                        I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about AI and technology.
                    </p>
                </motion.div>

                {/* Contact Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <div style={{
                        background: 'var(--background-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '24px',
                        padding: '40px',
                        boxShadow: 'var(--shadow-card)',
                        overflow: 'hidden'
                    }}>
                        {/* Contact Info */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                            <a
                                href={`mailto:${personalInfo.email}`}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '16px',
                                    padding: '16px',
                                    borderRadius: '12px',
                                    background: 'var(--background-secondary)',
                                    textDecoration: 'none'
                                }}
                            >
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'rgba(99, 102, 241, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-primary)'
                                }}>
                                    <Mail style={{ width: '24px', height: '24px' }} />
                                </div>
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginBottom: '4px' }}>Email</p>
                                    <p style={{ color: 'var(--foreground)', fontWeight: 500 }}>{personalInfo.email}</p>
                                </div>
                                <ArrowUpRight style={{ width: '20px', height: '20px', color: 'var(--foreground-muted)' }} />
                            </a>

                            <div style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                padding: '16px',
                                borderRadius: '12px',
                                background: 'var(--background-secondary)'
                            }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '12px',
                                    background: 'rgba(139, 92, 246, 0.1)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'var(--accent-secondary)'
                                }}>
                                    <MapPin style={{ width: '24px', height: '24px' }} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '12px', color: 'var(--foreground-muted)', marginBottom: '4px' }}>Location</p>
                                    <p style={{ color: 'var(--foreground)', fontWeight: 500 }}>{personalInfo.location}</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '32px' }}>
                            <a href={personalInfo.social.github} target="_blank" rel="noopener noreferrer"
                                style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'var(--background-secondary)', border: '1px solid var(--border-color)', color: 'var(--foreground-muted)' }}>
                                <Github style={{ width: '24px', height: '24px' }} />
                            </a>
                            <a href={personalInfo.social.linkedin} target="_blank" rel="noopener noreferrer"
                                style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'var(--background-secondary)', border: '1px solid var(--border-color)', color: 'var(--foreground-muted)' }}>
                                <Linkedin style={{ width: '24px', height: '24px' }} />
                            </a>
                            <a href={`mailto:${personalInfo.email}`}
                                style={{ width: '52px', height: '52px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '12px', background: 'var(--background-secondary)', border: '1px solid var(--border-color)', color: 'var(--foreground-muted)' }}>
                                <Mail style={{ width: '24px', height: '24px' }} />
                            </a>
                        </div>

                        {/* CTA */}
                        <div style={{ textAlign: 'center' }}>
                            <a
                                href={`mailto:${personalInfo.email}`}
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
                                <Send style={{ width: '22px', height: '22px' }} />
                                Send Me an Email
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

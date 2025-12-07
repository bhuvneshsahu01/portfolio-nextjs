'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui';
import { personalInfo } from '@/data';

export function Hero() {
    return (
        <section
            id="home"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '166px', paddingBottom: '80px' }}
        >
            {/* Background Effects */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div className="animate-float" style={{ position: 'absolute', top: '25%', left: '-100px', width: '400px', height: '400px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', filter: 'blur(80px)' }} />
                <div className="animate-float delay-2" style={{ position: 'absolute', bottom: '25%', right: '-100px', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '50%', filter: 'blur(80px)' }} />
            </div>

            {/* Content */}
            <div className="content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '60px', alignItems: 'center' }}>

                    {/* Profile Image - Centered on top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ position: 'relative', width: '200px', height: '200px' }}>
                            <div className="animate-pulse-slow" style={{ position: 'absolute', inset: '-20px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.3), rgba(139, 92, 246, 0.3), rgba(236, 72, 153, 0.3))', filter: 'blur(30px)' }} />
                            <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '50%', overflow: 'hidden', border: '4px solid var(--background)', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                                <Image
                                    src={personalInfo.profileImage}
                                    alt={personalInfo.name}
                                    fill
                                    style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Text Content - Centered */}
                    <div style={{ textAlign: 'center' }}>
                        {/* Availability Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            style={{ marginBottom: '24px' }}
                        >
                            <span style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '8px',
                                padding: '12px 24px',
                                borderRadius: '9999px',
                                background: 'rgba(99, 102, 241, 0.1)',
                                color: 'var(--accent-primary)',
                                fontSize: '16px',
                                fontWeight: 500,
                                border: '1px solid rgba(99, 102, 241, 0.2)'
                            }}>
                                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#22c55e' }} />
                                Available for opportunities
                            </span>
                        </motion.div>

                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '16px', lineHeight: 1.1 }}
                        >
                            Hi, I&apos;m <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ fontSize: 'clamp(1.25rem, 2.5vw, 1.75rem)', fontWeight: 600, color: 'var(--foreground)', marginBottom: '16px' }}
                        >
                            {personalInfo.subtitle}
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', marginBottom: '32px', maxWidth: '600px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}
                        >
                            {personalInfo.tagline}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '32px' }}
                        >
                            <a
                                href="#projects"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
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
                                View My Work
                            </a>
                            <a
                                href="#contact"
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                                }}
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    padding: '20px 40px',
                                    fontSize: '1.125rem',
                                    fontWeight: 600,
                                    borderRadius: '16px',
                                    background: 'transparent',
                                    color: 'var(--foreground)',
                                    textDecoration: 'none',
                                    border: '2px solid var(--border-color)',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Mail style={{ width: '22px', height: '22px' }} />
                                Get in Touch
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}
                        >
                            <span style={{ fontSize: '16px', color: 'var(--foreground-muted)', marginRight: '8px' }}>Find me on</span>
                            <SocialLink href={personalInfo.social.github} label="GitHub">
                                <Github style={{ width: '20px', height: '20px' }} />
                            </SocialLink>
                            <SocialLink href={personalInfo.social.linkedin} label="LinkedIn">
                                <Linkedin style={{ width: '20px', height: '20px' }} />
                            </SocialLink>
                            <SocialLink href={personalInfo.social.email} label="Email">
                                <Mail style={{ width: '20px', height: '20px' }} />
                            </SocialLink>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.5 }}
                style={{ position: 'absolute', bottom: '32px', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}
            >
                <span style={{ fontSize: '16px', color: 'var(--foreground-muted)' }}>Scroll to explore</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                >
                    <ArrowDown style={{ width: '20px', height: '20px', color: 'var(--foreground-muted)' }} />
                </motion.div>
            </motion.div>
        </section>
    );
}

function SocialLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
    return (
        <a
            href={href}
            target={href.startsWith('mailto') ? undefined : '_blank'}
            rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
            style={{
                width: '44px',
                height: '44px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '12px',
                background: 'var(--background-card)',
                border: '1px solid var(--border-color)',
                color: 'var(--foreground-secondary)',
                transition: 'all 0.2s ease'
            }}
            aria-label={label}
            onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent-primary)';
                e.currentTarget.style.borderColor = 'var(--accent-primary)';
                e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--foreground-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.transform = 'translateY(0)';
            }}
        >
            {children}
        </a>
    );
}

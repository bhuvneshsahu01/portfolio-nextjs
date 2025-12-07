'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '@/data';

export function Hero() {
    return (
        <section
            id="home"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '120px', paddingBottom: '80px' }}
        >
            {/* Background Effects */}
            <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
                <div className="animate-float" style={{ position: 'absolute', top: '25%', left: '-100px', width: '400px', height: '400px', background: 'rgba(99, 102, 241, 0.15)', borderRadius: '50%', filter: 'blur(80px)' }} />
                <div className="animate-float delay-2" style={{ position: 'absolute', bottom: '25%', right: '-100px', width: '400px', height: '400px', background: 'rgba(139, 92, 246, 0.15)', borderRadius: '50%', filter: 'blur(80px)' }} />
            </div>

            {/* Content */}
            <div className="content-wrapper" style={{ position: 'relative', zIndex: 10 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)', gap: '48px', alignItems: 'center' }}>

                    {/* Profile Image - Centered on top */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        style={{ display: 'flex', justifyContent: 'center' }}
                    >
                        <div style={{ position: 'relative', width: '180px', height: '180px' }}>
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
                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 700, marginBottom: '12px', lineHeight: 1.1 }}
                        >
                            <span className="gradient-text">{personalInfo.name}</span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            style={{ fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 600, color: 'var(--foreground)', marginBottom: '8px' }}
                        >
                            Machine Learning Engineer, Production GenAI & Computer Vision
                        </motion.p>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            style={{ fontSize: 'clamp(0.95rem, 1.8vw, 1.25rem)', color: 'var(--accent-primary)', marginBottom: '20px', fontWeight: 500 }}
                        >
                            Shipping production AI systems that reduce costs and automate workflows — expert in LLM orchestration, RAG, and industrial computer vision.
                        </motion.p>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ fontSize: '1rem', color: 'var(--foreground-secondary)', maxWidth: '800px', margin: '0 auto 24px', lineHeight: 1.7 }}
                        >
                            I design, build, and deploy end-to-end ML systems (LLM agents, RAG pipelines, CV) that deliver measurable business outcomes — e.g., 40% support-ticket reduction and 95%+ mAP in production deployments.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                                gap: '12px',
                                marginBottom: '24px'
                            }}
                        >
                            {[
                                'Shipped 5+ production ML systems',
                                'Reduced support costs 40%+',
                                '95% mAP on industrial CV tasks'
                            ].map((metric, index) => (
                                <span
                                    key={index}
                                    style={{
                                        display: 'inline-flex',
                                        alignItems: 'center',
                                        padding: '8px 16px',
                                        borderRadius: '9999px',
                                        background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(139, 92, 246, 0.15))',
                                        color: 'var(--accent-primary)',
                                        fontSize: '14px',
                                        fontWeight: 600,
                                        border: '1px solid rgba(99, 102, 241, 0.3)'
                                    }}
                                >
                                    {metric}
                                </span>
                            ))}
                        </motion.div>

                        {/* Tagline */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', marginBottom: '32px', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.7 }}
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
                                    padding: '18px 36px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: '14px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    color: 'white',
                                    textDecoration: 'none',
                                    boxShadow: '0 4px 20px rgba(99, 102, 241, 0.4)',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                Explore Projects
                            </a>
                            <a
                                href="/resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    padding: '18px 36px',
                                    fontSize: '1.1rem',
                                    fontWeight: 600,
                                    borderRadius: '14px',
                                    background: 'transparent',
                                    color: 'var(--foreground)',
                                    textDecoration: 'none',
                                    border: '2px solid var(--border-color)',
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Download style={{ width: '20px', height: '20px' }} />
                                Download Resume
                            </a>
                        </motion.div>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '12px' }}
                        >
                            <span style={{ fontSize: '15px', color: 'var(--foreground-muted)', marginRight: '8px' }}>Find me on</span>
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
                <span style={{ fontSize: '15px', color: 'var(--foreground-muted)' }}>Scroll to explore</span>
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

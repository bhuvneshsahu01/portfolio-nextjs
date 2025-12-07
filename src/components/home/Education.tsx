'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, MapPin, Calendar } from 'lucide-react';
import { personalInfo } from '@/data';

export function Education() {
    // Separate college and school education
    const colleges = personalInfo.education.filter(edu =>
        edu.degree.includes('M.Sc') || edu.degree.includes('B.Sc')
    );
    const schools = personalInfo.education.filter(edu =>
        edu.degree.includes('10th') || edu.degree.includes('12th')
    );

    return (
        <section id="education" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--background-secondary)' }}>
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
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--accent-primary)',
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        Education
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Academic <span className="gradient-text">Background</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        Strong foundation in Statistics and Mathematics with focus on Data Science
                    </p>
                </motion.div>

                {/* Education Grid - 3 columns */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '24px',
                    maxWidth: '1200px',
                    margin: '0 auto'
                }}>
                    {/* Column 1: M.Sc */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0 }}
                        style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '32px',
                            boxShadow: 'var(--shadow-card)',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '100%'
                        }}
                    >
                        <EducationCard edu={colleges[0]} />
                    </motion.div>

                    {/* Column 2: B.Sc */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '32px',
                            boxShadow: 'var(--shadow-card)',
                            overflow: 'hidden',
                            position: 'relative',
                            height: '100%'
                        }}
                    >
                        <EducationCard edu={colleges[1]} />
                    </motion.div>

                    {/* Column 3: 12th and 10th stacked */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-50px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            height: '100%'
                        }}
                    >
                        {/* 12th */}
                        <div style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            padding: '24px',
                            boxShadow: 'var(--shadow-card)',
                            overflow: 'hidden',
                            flex: 1
                        }}>
                            <SchoolCard edu={schools[0]} />
                        </div>
                        {/* 10th */}
                        <div style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '16px',
                            padding: '24px',
                            boxShadow: 'var(--shadow-card)',
                            overflow: 'hidden',
                            flex: 1
                        }}>
                            <SchoolCard edu={schools[1]} />
                        </div>
                    </motion.div>
                </div>

                {/* Mobile view - show all in single column */}
                <style>{`
                    @media (max-width: 900px) {
                        .education-grid {
                            grid-template-columns: 1fr !important;
                        }
                    }
                `}</style>
            </div>
        </section>
    );
}

// Full card for colleges
function EducationCard({ edu }: { edu: { degree: string; institution: string; location: string; year: string; grade: string; description: string } }) {
    return (
        <>
            {/* Icon */}
            <div style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent-primary)',
                border: '1px solid rgba(99, 102, 241, 0.2)'
            }}>
                <GraduationCap style={{ width: '24px', height: '24px' }} />
            </div>

            {/* Content */}
            <div style={{ paddingRight: '60px' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '8px', color: 'var(--foreground)' }}>
                    {edu.degree}
                </h3>
                <p style={{ fontSize: '1rem', color: 'var(--accent-primary)', fontWeight: 500, marginBottom: '12px' }}>
                    {edu.institution}
                </p>
            </div>

            {/* Meta */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginBottom: '16px', fontSize: '14px', color: 'var(--foreground-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Calendar style={{ width: '14px', height: '14px' }} />
                    {edu.year}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <MapPin style={{ width: '14px', height: '14px' }} />
                    {edu.location}
                </span>
            </div>

            {/* Grade */}
            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                marginBottom: '16px'
            }}>
                <Award style={{ width: '16px', height: '16px', color: 'var(--accent-primary)' }} />
                <span className="gradient-text" style={{ fontWeight: 600 }}>{edu.grade}</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '14px', color: 'var(--foreground-secondary)', lineHeight: 1.6 }}>
                {edu.description}
            </p>
        </>
    );
}

// Compact card for schools (10th, 12th)
function SchoolCard({ edu }: { edu: { degree: string; institution: string; location: string; year: string; grade: string; description: string } }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '4px', color: 'var(--foreground)' }}>
                        {edu.degree}
                    </h3>
                    <p style={{ fontSize: '0.9rem', color: 'var(--accent-primary)', fontWeight: 500 }}>
                        {edu.institution}
                    </p>
                </div>
                <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '10px',
                    background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-primary)',
                    flexShrink: 0
                }}>
                    <GraduationCap style={{ width: '20px', height: '20px' }} />
                </div>
            </div>

            {/* Meta */}
            <div style={{ display: 'flex', gap: '12px', marginBottom: '12px', fontSize: '13px', color: 'var(--foreground-muted)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Calendar style={{ width: '12px', height: '12px' }} />
                    {edu.year}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <MapPin style={{ width: '12px', height: '12px' }} />
                    {edu.location}
                </span>
            </div>

            {/* Grade */}
            <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '6px 12px',
                borderRadius: '6px',
                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1), rgba(139, 92, 246, 0.1))',
                border: '1px solid rgba(99, 102, 241, 0.2)',
                marginBottom: '12px',
                alignSelf: 'flex-start'
            }}>
                <Award style={{ width: '14px', height: '14px', color: 'var(--accent-primary)' }} />
                <span className="gradient-text" style={{ fontWeight: 600, fontSize: '0.95rem' }}>{edu.grade}</span>
            </div>

            {/* Description */}
            <p style={{ fontSize: '13px', color: 'var(--foreground-secondary)', lineHeight: 1.5 }}>
                {edu.description}
            </p>
        </div>
    );
}

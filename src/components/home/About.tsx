'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Code } from 'lucide-react';
import { personalInfo } from '@/data';

export function About() {
    const { stats } = personalInfo;

    return (
        <section id="about" style={{ paddingTop: '100px', paddingBottom: '100px', background: 'var(--background-secondary)' }}>
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
                        About Me
                    </span>
                    <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 700, marginBottom: '16px' }}>
                        Passionate About <span className="gradient-text">Solving Problems</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        Transforming data into actionable insights and building AI systems that make a real impact
                    </p>
                </motion.div>

                {/* Bio Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ marginBottom: '60px' }}
                >
                    <div style={{
                        background: 'var(--background-card)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '20px',
                        padding: '40px',
                        maxWidth: '900px',
                        margin: '0 auto',
                        boxShadow: 'var(--shadow-card)',
                        overflow: 'hidden'
                    }}>
                        <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                            {personalInfo.bio.short}
                        </p>
                        <p style={{ color: 'var(--foreground-secondary)', lineHeight: 1.8 }}>
                            My professional journey includes building system-agnostic AI assistants at{' '}
                            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>Coriolis Technologies</span> and
                            developing industrial-grade crack detection systems at{' '}
                            <span style={{ color: 'var(--foreground)', fontWeight: 600 }}>AlgoLabs</span>.
                            I focus on creating solutions that translate messy business problems into structured analytical pipelines.
                        </p>
                    </div>
                </motion.div>

                {/* Stats Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px',
                    maxWidth: '900px',
                    margin: '0 auto'
                }}>
                    <StatCard value={stats.experience} label="Professional Experience" icon={<Briefcase style={{ width: '24px', height: '24px' }} />} delay={0.2} />
                    <StatCard value={stats.projectsCompleted} label="Major Projects" icon={<Code style={{ width: '24px', height: '24px' }} />} delay={0.3} />
                    <StatCard value={stats.cgpa} label="CGPA (M.Sc.)" icon={<GraduationCap style={{ width: '24px', height: '24px' }} />} delay={0.4} />
                    <StatCard value={stats.awards} label="DST Scholarship" icon={<Award style={{ width: '24px', height: '24px' }} />} delay={0.5} />
                </div>
            </div>
        </section>
    );
}

function StatCard({ value, label, icon, delay }: { value: string; label: string; icon: React.ReactNode; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay }}
            style={{
                background: 'var(--background-card)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '32px',
                textAlign: 'center',
                boxShadow: 'var(--shadow-card)',
                transition: 'all 0.3s ease'
            }}
            whileHover={{ y: -4, boxShadow: 'var(--shadow-card-hover)' }}
        >
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px', color: 'var(--accent-primary)' }}>
                {icon}
            </div>
            <h3 className="gradient-text" style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '8px' }}>
                {value}
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--foreground-secondary)' }}>{label}</p>
        </motion.div>
    );
}

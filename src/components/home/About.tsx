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
                        From Physics to <span className="gradient-text">Production AI</span>
                    </h2>
                    <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', maxWidth: '700px', margin: '0 auto', lineHeight: 1.7 }}>
                        Building AI systems that actually work in production—not science experiments in Jupyter notebooks
                    </p>
                </motion.div>

                {/* Bio Card - Updated with storytelling */}
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
                            I'm an ML engineer with a strong statistical foundation and track record of shipping production AI systems that deliver measurable business value. My background in statistics and data science (M.Sc., Chennai Mathematical Institute) taught me rigorous experimental design and inference; my production experience taught me to design systems that are robust, observable, and maintainable in real-world environments.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                            I've led end-to-end projects across GenAI, RAG pipelines, and industrial computer vision. Highlights include architecting an agentic AI assistant that reduced support ticket volume by 40% for an enterprise client and building a real-time crack-detection pipeline that achieved 95.3% mAP and processes 10K+ images/day in production. In every project I drive the full lifecycle: problem framing, dataset engineering, model selection and tuning, CI/CD and containerized deployment, and post-deploy monitoring and iteration.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--foreground-secondary)', lineHeight: 1.8, marginBottom: '20px' }}>
                            My technical approach emphasizes measurable outcomes: if a model isn't improving the business metric, it isn't the right model. I combine principled statistics with practical software engineering — production latency targets, model versioning, drift detection, and retraining pipelines — to bridge research and reliable delivery.
                        </p>
                        <p style={{ fontSize: '1.125rem', color: 'var(--foreground)', lineHeight: 1.8, fontWeight: 500 }}>
                            I'm seeking roles where I can own core ML systems (LLM orchestration, RAG, vision pipelines) and scale them for real customers. If you want someone who can go from prototype to production and measure impact, let's talk.
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
                    <StatCard value={stats.projectsCompleted} label="Production Systems" icon={<Code style={{ width: '24px', height: '24px' }} />} delay={0.3} />
                    <StatCard value={stats.cgpa} label="CGPA (M.Sc. CMI)" icon={<GraduationCap style={{ width: '24px', height: '24px' }} />} delay={0.4} />
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

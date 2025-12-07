'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, ChevronRight, Download } from 'lucide-react';
import Link from 'next/link';
import type { Project } from '@/data/projects';
import { projectCategories } from '@/data/projects';

interface ProjectCaseStudyProps {
    project: Project;
}

export function ProjectCaseStudy({ project }: ProjectCaseStudyProps) {
    const category = projectCategories[project.category];

    return (
        <div style={{ minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px' }}>
            <div className="content-wrapper">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{ marginBottom: '32px' }}
                >
                    <Link
                        href="/#projects"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '10px 16px',
                            borderRadius: '10px',
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--foreground-secondary)',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: 500,
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <ArrowLeft style={{ width: '16px', height: '16px' }} />
                        Back to Projects
                    </Link>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{ marginBottom: '48px' }}
                >
                    {/* Category Badge */}
                    <span style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        padding: '8px 16px',
                        borderRadius: '9999px',
                        background: 'rgba(99, 102, 241, 0.1)',
                        color: 'var(--accent-primary)',
                        fontSize: '14px',
                        fontWeight: 500,
                        marginBottom: '16px'
                    }}>
                        <span>{category.icon}</span>
                        {category.label}
                    </span>

                    {/* Title */}
                    <h1 style={{
                        fontSize: 'clamp(2rem, 4vw, 3rem)',
                        fontWeight: 700,
                        marginBottom: '16px',
                        lineHeight: 1.2
                    }}>
                        {project.title}
                    </h1>

                    {/* Short Description */}
                    <p style={{
                        fontSize: '1.25rem',
                        color: 'var(--foreground-secondary)',
                        marginBottom: '24px',
                        maxWidth: '800px',
                        lineHeight: 1.7
                    }}>
                        {project.shortDescription}
                    </p>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                        {project.githubUrl && project.githubUrl !== '#' && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    background: 'var(--background-card)',
                                    border: '1px solid var(--border-color)',
                                    color: 'var(--foreground)',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Github style={{ width: '18px', height: '18px' }} />
                                View on GitHub
                            </a>
                        )}
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    background: 'linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))',
                                    color: 'white',
                                    textDecoration: 'none',
                                    fontWeight: 500,
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <ExternalLink style={{ width: '18px', height: '18px' }} />
                                Live Demo
                            </a>
                        )}
                        {/* Download Report */}
                        {(project.slug === 'real-time-crack-detection' || project.slug === 'api-assistant-system') && (
                            <a
                                href={project.slug === 'real-time-crack-detection' ? '/reports/crack-detection-report.pdf' : '/reports/coriolis-report.pdf'}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '8px',
                                    padding: '12px 24px',
                                    borderRadius: '12px',
                                    background: 'var(--background-card)',
                                    border: '2px solid var(--accent-primary)',
                                    color: 'var(--accent-primary)',
                                    textDecoration: 'none',
                                    fontWeight: 600,
                                    transition: 'all 0.2s ease'
                                }}
                            >
                                <Download style={{ width: '18px', height: '18px' }} />
                                Download Full Report
                            </a>
                        )}
                    </div>
                </motion.div>

                {/* Main Content Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr',
                    gap: '32px'
                }}>
                    {/* Overview */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '32px',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>🎯</span>
                            Overview
                        </h2>
                        <p style={{
                            fontSize: '1rem',
                            color: 'var(--foreground-secondary)',
                            lineHeight: 1.8
                        }}>
                            {project.longDescription}
                        </p>
                    </motion.div>

                    {/* My Role */}
                    {project.myRole && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.05), rgba(139, 92, 246, 0.05))',
                                border: '1px solid rgba(99, 102, 241, 0.2)',
                                borderRadius: '20px',
                                padding: '24px 32px',
                            }}
                        >
                            <h3 style={{
                                fontSize: '1rem',
                                fontWeight: 600,
                                marginBottom: '8px',
                                color: 'var(--accent-primary)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                My Role
                            </h3>
                            <p style={{
                                fontSize: '1.125rem',
                                color: 'var(--foreground)',
                                lineHeight: 1.7,
                                fontWeight: 500
                            }}>
                                {project.myRole}
                            </p>
                        </motion.div>
                    )}

                    {/* Deployment & Operations */}
                    {project.productionization && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.28 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '24px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>🚀</span>
                                Deployment & Operations
                            </h2>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                                gap: '20px'
                            }}>
                                {project.productionization.cicd && (
                                    <ProductionCard
                                        title="CI/CD Pipeline"
                                        icon="🔄"
                                        content={project.productionization.cicd}
                                    />
                                )}
                                {project.productionization.monitoring && (
                                    <ProductionCard
                                        title="Monitoring & Metrics"
                                        icon="📊"
                                        content={project.productionization.monitoring}
                                    />
                                )}
                                {project.productionization.rollback && (
                                    <ProductionCard
                                        title="Rollback Strategy"
                                        icon="⏪"
                                        content={project.productionization.rollback}
                                    />
                                )}
                                {project.productionization.optimization && (
                                    <ProductionCard
                                        title="Optimization"
                                        icon="⚡"
                                        content={project.productionization.optimization}
                                    />
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Problem Statement */}
                    {project.problem && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>❗</span>
                                The Problem
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                color: 'var(--foreground-secondary)',
                                lineHeight: 1.8
                            }}>
                                {project.problem}
                            </p>
                        </motion.div>
                    )}

                    {/* Technical Approach */}
                    {project.technicalApproach && project.technicalApproach.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>⚙️</span>
                                Technical Approach
                            </h2>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}>
                                {project.technicalApproach.map((item, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            fontSize: '1rem',
                                            color: 'var(--foreground-secondary)',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        <span style={{
                                            minWidth: '28px',
                                            height: '28px',
                                            borderRadius: '50%',
                                            background: 'rgba(99, 102, 241, 0.1)',
                                            border: '2px solid var(--accent-primary)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: 'var(--accent-primary)',
                                            fontWeight: 600,
                                            fontSize: '14px',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }}>
                                            {index + 1}
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Architecture & Visual Proof */}
                    {(project.slug === 'crack-detection' || project.slug === 'coriolis-ai-assistant') && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.45 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>📊</span>
                                Architecture & Visual Proof
                            </h2>
                            <p style={{
                                fontSize: '1rem',
                                color: 'var(--foreground-secondary)',
                                marginBottom: '24px',
                                lineHeight: 1.7
                            }}>
                                {project.slug === 'crack-detection'
                                    ? 'System architecture, performance metrics, and detection results from production deployment.'
                                    : 'LLM orchestration flow, workflow diagrams, and success metrics from enterprise deployment.'}
                            </p>
                            <div style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                                gap: '20px'
                            }}>
                                {project.slug === 'crack-detection' ? (
                                    <>
                                        <ImageCard
                                            src="/images/projects/crack-detection/curated/report_page5_img1.png"
                                            alt="System Architecture Diagram"
                                            caption="End-to-end pipeline architecture"
                                        />
                                        <ImageCard
                                            src="/images/projects/crack-detection/curated/report_page39_img1.png"
                                            alt="Performance Results"
                                            caption="Model performance metrics (95.3% mAP)"
                                        />
                                        <ImageCard
                                            src="/images/projects/crack-detection/curated/report_page41_img2.png"
                                            alt="Detection Results"
                                            caption="Real-world crack detection results"
                                        />
                                    </>
                                ) : (
                                    <>
                                        <ImageCard
                                            src="/images/projects/coriolis/curated/presentation_page3_img2.png"
                                            alt="System Architecture"
                                            caption="LLM orchestration architecture"
                                        />
                                        <ImageCard
                                            src="/images/projects/coriolis/curated/report_page7_img1.png"
                                            alt="Workflow Diagram"
                                            caption="Multi-step API workflow execution"
                                        />
                                        <ImageCard
                                            src="/images/projects/coriolis/curated/slides_page4_img3.jpeg"
                                            alt="System Flow"
                                            caption="Agentic AI workflow orchestration"
                                        />
                                    </>
                                )}
                            </div>
                        </motion.div>
                    )}

                    {/* Results */}
                    {project.results && project.results.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.05), rgba(16, 185, 129, 0.05))',
                                border: '1px solid rgba(34, 197, 94, 0.2)',
                                borderRadius: '20px',
                                padding: '32px',
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>✅</span>
                                Quantified Results
                            </h2>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '12px'
                            }}>
                                {project.results.map((result, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: '12px',
                                            fontSize: '1.05rem',
                                            color: 'var(--foreground)',
                                            lineHeight: 1.6,
                                            fontWeight: 500
                                        }}
                                    >
                                        <ChevronRight style={{
                                            width: '20px',
                                            height: '20px',
                                            color: '#22c55e',
                                            flexShrink: 0,
                                            marginTop: '2px'
                                        }} />
                                        {result}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Challenges */}
                    {project.challenges && project.challenges.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            style={{
                                background: 'var(--background-card)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '20px',
                                padding: '32px',
                                boxShadow: 'var(--shadow-card)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>⚠️</span>
                                Challenges & Solutions
                            </h2>
                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '16px'
                            }}>
                                {project.challenges.map((challenge, index) => (
                                    <li
                                        key={index}
                                        style={{
                                            padding: '16px',
                                            borderRadius: '12px',
                                            background: 'rgba(239, 68, 68, 0.05)',
                                            border: '1px solid rgba(239, 68, 68, 0.1)',
                                            fontSize: '1rem',
                                            color: 'var(--foreground-secondary)',
                                            lineHeight: 1.7
                                        }}
                                    >
                                        {challenge}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}

                    {/* Learnings */}
                    {project.learnings && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.7 }}
                            style={{
                                background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.05), rgba(139, 92, 246, 0.05))',
                                border: '1px solid rgba(168, 85, 247, 0.2)',
                                borderRadius: '20px',
                                padding: '32px',
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.5rem',
                                fontWeight: 600,
                                marginBottom: '16px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '12px'
                            }}>
                                <span style={{ fontSize: '1.5rem' }}>💡</span>
                                Key Learnings
                            </h2>
                            <p style={{
                                fontSize: '1.05rem',
                                color: 'var(--foreground)',
                                lineHeight: 1.8,
                                fontStyle: 'italic'
                            }}>
                                {project.learnings}
                            </p>
                        </motion.div>
                    )}

                    {/* Technologies */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        style={{
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '20px',
                            padding: '32px',
                            boxShadow: 'var(--shadow-card)'
                        }}
                    >
                        <h2 style={{
                            fontSize: '1.5rem',
                            fontWeight: 600,
                            marginBottom: '20px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px'
                        }}>
                            <span style={{ fontSize: '1.5rem' }}>🛠️</span>
                            Technologies Used
                        </h2>
                        <div style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '10px'
                        }}>
                            {project.technologies.map((tech, index) => (
                                <span
                                    key={index}
                                    style={{
                                        padding: '8px 16px',
                                        borderRadius: '8px',
                                        background: 'rgba(99, 102, 241, 0.1)',
                                        color: 'var(--accent-primary)',
                                        fontSize: '14px',
                                        fontWeight: 500,
                                        border: '1px solid rgba(99, 102, 241, 0.2)'
                                    }}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Navigation to other projects */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                    style={{
                        marginTop: '60px',
                        textAlign: 'center'
                    }}
                >
                    <Link
                        href="/#projects"
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            padding: '16px 32px',
                            borderRadius: '14px',
                            background: 'var(--background-card)',
                            border: '1px solid var(--border-color)',
                            color: 'var(--foreground)',
                            textDecoration: 'none',
                            fontWeight: 600,
                            fontSize: '1rem',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        <ArrowLeft style={{ width: '18px', height: '18px' }} />
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}

// Helper component for productionization cards
function ProductionCard({ title, icon, content }: { title: string; icon: string; content: string }) {
    return (
        <div style={{
            padding: '20px',
            borderRadius: '12px',
            background: 'var(--background-secondary)',
            border: '1px solid var(--border-color)',
        }}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '12px'
            }}>
                <span style={{ fontSize: '1.25rem' }}>{icon}</span>
                <h4 style={{
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--foreground)',
                    margin: 0
                }}>
                    {title}
                </h4>
            </div>
            <p style={{
                fontSize: '0.95rem',
                color: 'var(--foreground-secondary)',
                lineHeight: 1.7,
                margin: 0
            }}>
                {content}
            </p>
        </div>
    );
}

// Helper component for displaying architecture diagrams and charts
function ImageCard({ src, alt, caption }: { src: string; alt: string; caption?: string }) {
    return (
        <div style={{
            borderRadius: '12px',
            overflow: 'hidden',
            border: '1px solid var(--border-color)',
            background: 'var(--background)',
        }}>
            <div style={{
                width: '100%',
                aspectRatio: '4/3',
                position: 'relative',
                background: 'var(--background-secondary)'
            }}>
                <img
                    src={src}
                    alt={alt}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        padding: '12px'
                    }}
                    loading="lazy"
                />
            </div>
            {caption && (
                <div style={{
                    padding: '12px 16px',
                    fontSize: '14px',
                    color: 'var(--foreground-secondary)',
                    textAlign: 'center',
                    borderTop: '1px solid var(--border-color)',
                    background: 'var(--background-card)'
                }}>
                    {caption}
                </div>
            )}
        </div>
    );
}

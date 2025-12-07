'use client';

import { motion } from 'framer-motion';
import { Rocket, TrendingDown, Target, Users } from 'lucide-react';

const achievements = [
    { label: '5+ Production ML Systems', icon: Rocket, color: '#6366f1' },
    { label: '40% Cost Reduction', icon: TrendingDown, color: '#22c55e' },
    { label: '95% mAP on CV Tasks', icon: Target, color: '#f59e0b' },
    { label: '500+ Users Served', icon: Users, color: '#ec4899' },
];

export function AchievementsBanner() {
    return (
        <section style={{
            paddingTop: '0',
            paddingBottom: '60px',
            background: 'var(--background)'
        }}>
            <div className="content-wrapper">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '16px',
                        padding: '24px',
                        background: 'var(--background-card)',
                        borderRadius: '16px',
                        border: '1px solid var(--border-color)',
                        boxShadow: 'var(--shadow-card)'
                    }}
                >
                    {achievements.map((achievement, index) => {
                        const Icon = achievement.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '12px 20px',
                                    background: `${achievement.color}10`,
                                    borderRadius: '12px',
                                    border: `1px solid ${achievement.color}30`
                                }}
                            >
                                <Icon
                                    style={{
                                        width: '20px',
                                        height: '20px',
                                        color: achievement.color
                                    }}
                                />
                                <span style={{
                                    fontSize: '14px',
                                    fontWeight: 600,
                                    color: 'var(--foreground)'
                                }}>
                                    {achievement.label}
                                </span>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}

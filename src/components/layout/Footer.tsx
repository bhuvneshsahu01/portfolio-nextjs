'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { personalInfo } from '@/data';

const footerLinks = [
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export function Footer() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const targetId = href.substring(1);
        const element = document.getElementById(targetId);

        if (element) {
            const navbarHeight = 100;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <footer className="pt-24 pb-16 bg-background-secondary border-t border-border">
            <div
                className="content-wrapper"
                style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}
            >
                <div className="grid md:grid-cols-3 gap-16 mb-16">
                    {/* Brand */}
                    <div style={{ paddingTop: '8px' }}>
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-heading text-xl">
                                BS
                            </div>
                            <span className="text-2xl font-bold font-heading text-foreground">
                                Bhuvnesh Sahu
                            </span>
                        </div>
                        <p className="text-foreground-secondary text-base leading-relaxed mb-6">
                            Data Scientist passionate about building AI systems that make a real-world impact.
                        </p>
                        <div className="flex items-center gap-4">
                            <a
                                href={personalInfo.social.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                                aria-label="GitHub"
                            >
                                <Github className="w-6 h-6" />
                            </a>
                            <a
                                href={personalInfo.social.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-6 h-6" />
                            </a>
                            <a
                                href={personalInfo.social.email}
                                className="w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border text-foreground-muted hover:text-accent-primary hover:border-accent-primary transition-all"
                                aria-label="Email"
                            >
                                <Mail className="w-6 h-6" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div style={{ paddingTop: '8px' }}>
                        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider mb-8">
                            Quick Links
                        </h3>
                        <ul className="space-y-5">
                            {footerLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        className="text-foreground-secondary hover:text-accent-primary transition-colors text-lg"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div style={{ paddingTop: '8px' }}>
                        <h3 className="text-lg font-semibold text-foreground uppercase tracking-wider mb-8">
                            Get in Touch
                        </h3>
                        <ul className="space-y-5 text-lg text-foreground-secondary">
                            <li>
                                <a
                                    href={`mailto:${personalInfo.email}`}
                                    className="hover:text-accent-primary transition-colors"
                                >
                                    {personalInfo.email}
                                </a>
                            </li>
                            <li>{personalInfo.location}</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-foreground-muted">
                        © {new Date().getFullYear()} Bhuvnesh Sahu. All rights reserved.
                    </p>
                    <p className="text-sm text-foreground-muted flex items-center gap-1">
                        Built with <Heart className="w-4 h-4 text-accent-tertiary" /> using Next.js
                    </p>
                </div>
            </div>
        </footer>
    );
}

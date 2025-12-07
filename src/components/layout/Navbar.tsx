'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#experience', label: 'Experience' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Update active section based on scroll position
            const sections = navLinks.map(link => link.href.substring(1));
            for (const section of sections.reverse()) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);

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
        <nav
            className={cn(
                'fixed top-[46px] left-0 right-0 z-50',
                'transition-all duration-300',
                scrolled
                    ? 'bg-background/80 backdrop-blur-xl border-b border-border shadow-sm'
                    : 'bg-transparent'
            )}
        >
            <div
                className="content-wrapper"
                style={{ width: '100%', maxWidth: '1280px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}
            >
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="flex items-center gap-2 group"
                    >
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent-primary to-accent-secondary flex items-center justify-center text-white font-bold font-heading text-lg shadow-lg shadow-accent-primary/25">
                            BS
                        </div>
                        <span className="hidden sm:block text-lg font-semibold font-heading text-foreground group-hover:text-accent-primary transition-colors">
                            Bhuvnesh Sahu
                        </span>
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-3">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={cn(
                                        'px-5 py-2.5 rounded-lg text-base font-medium transition-all duration-200',
                                        isActive
                                            ? 'text-accent-primary bg-accent-primary/10'
                                            : 'text-foreground-secondary hover:text-foreground hover:bg-background-tertiary'
                                    )}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>

                    {/* Right side */}
                    <div className="flex items-center gap-3">
                        <ThemeToggle />

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className={cn(
                                'lg:hidden w-10 h-10 flex items-center justify-center',
                                'rounded-lg bg-background-card border border-border',
                                'text-foreground-secondary hover:text-foreground',
                                'transition-all duration-200'
                            )}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? (
                                <X className="w-5 h-5" />
                            ) : (
                                <Menu className="w-5 h-5" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={cn(
                        'lg:hidden overflow-hidden transition-all duration-300',
                        mobileMenuOpen ? 'max-h-[400px] opacity-100 pb-6' : 'max-h-0 opacity-0'
                    )}
                >
                    <div className="pt-4 space-y-1 border-t border-border">
                        {navLinks.map((link) => {
                            const isActive = activeSection === link.href.substring(1);

                            return (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link.href)}
                                    className={cn(
                                        'block py-3 px-4 rounded-lg text-base font-medium transition-all duration-200',
                                        isActive
                                            ? 'bg-accent-primary/10 text-accent-primary'
                                            : 'text-foreground-secondary hover:bg-background-tertiary hover:text-foreground'
                                    )}
                                >
                                    {link.label}
                                </a>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}

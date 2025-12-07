'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Avoid hydration mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <button
                className="w-12 h-12 flex items-center justify-center rounded-lg bg-background-card border border-border"
                aria-label="Toggle theme"
            >
                <div className="w-6 h-6" />
            </button>
        );
    }

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <button
            onClick={toggleTheme}
            className={cn(
                'relative w-12 h-12 flex items-center justify-center',
                'rounded-lg glass cursor-pointer',
                'transition-all duration-300',
                'hover:border-accent-primary hover:-translate-y-0.5',
                'hover:shadow-md overflow-hidden'
            )}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
            <Sun
                className={cn(
                    'absolute w-6 h-6 transition-all duration-300',
                    'text-foreground-secondary hover:text-accent-primary',
                    theme === 'light'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 -rotate-90 scale-0'
                )}
            />
            <Moon
                className={cn(
                    'absolute w-6 h-6 transition-all duration-300',
                    'text-foreground-secondary hover:text-accent-primary',
                    theme === 'dark'
                        ? 'opacity-100 rotate-0 scale-100'
                        : 'opacity-0 rotate-90 scale-0'
                )}
            />
        </button>
    );
}

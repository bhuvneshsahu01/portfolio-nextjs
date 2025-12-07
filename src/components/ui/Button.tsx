import { forwardRef } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    href?: string;
    external?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = 'primary', size = 'md', href, external, children, ...props }, ref) => {
        const baseStyles = cn(
            // Base styles
            'inline-flex items-center justify-center gap-2',
            'font-semibold font-sans',
            'rounded-xl',
            'transition-all duration-200 ease-out',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-primary focus-visible:ring-offset-2',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none',
            // Variants
            {
                // Primary - gradient with glow
                'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-[0_4px_14px_rgba(99,102,241,0.4)] hover:shadow-[0_6px_20px_rgba(99,102,241,0.5)] hover:-translate-y-0.5 active:translate-y-0':
                    variant === 'primary',
                // Secondary - solid dark
                'bg-foreground text-background shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0':
                    variant === 'secondary',
                // Outline - bordered
                'bg-transparent border-2 border-border text-foreground hover:border-accent-primary hover:bg-accent-primary/5 hover:-translate-y-0.5':
                    variant === 'outline',
                // Ghost - minimal
                'bg-transparent text-foreground-secondary hover:text-foreground hover:bg-background-tertiary':
                    variant === 'ghost',
            },
            // Sizes - MUCH LARGER for better visibility
            {
                'px-6 py-3 text-sm': size === 'sm',
                'px-10 py-5 text-base font-medium': size === 'md',
                'px-12 py-6 text-lg font-semibold': size === 'lg',
            },
            className
        );

        if (href) {
            // Handle hash links for smooth scrolling
            if (href.startsWith('#')) {
                return (
                    <a
                        href={href}
                        className={baseStyles}
                        onClick={(e) => {
                            e.preventDefault();
                            const target = document.querySelector(href);
                            if (target) {
                                target.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                    >
                        {children}
                    </a>
                );
            }

            if (external) {
                return (
                    <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={baseStyles}
                    >
                        {children}
                    </a>
                );
            }
            return (
                <Link href={href} className={baseStyles}>
                    {children}
                </Link>
            );
        }

        return (
            <button ref={ref} className={baseStyles} {...props}>
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';

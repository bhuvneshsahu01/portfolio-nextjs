import { cn } from '@/lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
    variant?: 'default' | 'primary' | 'secondary' | 'outline';
    size?: 'sm' | 'md';
}

export function Badge({
    className,
    variant = 'default',
    size = 'sm',
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={cn(
                // Base styles
                'inline-flex items-center justify-center',
                'font-medium',
                'rounded-full',
                'transition-all duration-200',
                'whitespace-nowrap',
                // Variants
                {
                    // Default - subtle gray
                    'bg-background-tertiary text-foreground-secondary':
                        variant === 'default',
                    // Primary - accent colored
                    'bg-accent-primary/10 text-accent-primary border border-accent-primary/20':
                        variant === 'primary',
                    // Secondary - purple accent
                    'bg-accent-secondary/10 text-accent-secondary border border-accent-secondary/20':
                        variant === 'secondary',
                    // Outline - bordered only
                    'bg-transparent border border-border text-foreground-secondary':
                        variant === 'outline',
                },
                // Sizes
                {
                    'px-2.5 py-1 text-xs': size === 'sm',
                    'px-3.5 py-1.5 text-sm': size === 'md',
                },
                className
            )}
            {...props}
        >
            {children}
        </span>
    );
}

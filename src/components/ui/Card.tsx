import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: 'default' | 'glass' | 'bordered';
    hover?: boolean;
}

export function Card({
    className,
    variant = 'default',
    hover = true,
    children,
    ...props
}: CardProps) {
    return (
        <div
            className={cn(
                // Base styles
                'relative rounded-2xl overflow-hidden',
                'transition-all duration-300 ease-out',
                // Shadow and background based on variant
                {
                    // Default card with solid background
                    'bg-background-card border border-border shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]':
                        variant === 'default',
                    // Glass card with blur
                    'bg-background-card/80 backdrop-blur-xl border border-border shadow-[0_1px_3px_rgba(0,0,0,0.08),0_4px_12px_rgba(0,0,0,0.05)]':
                        variant === 'glass',
                    // Bordered card
                    'bg-background border-2 border-border':
                        variant === 'bordered',
                },
                // Hover effects
                hover && [
                    'hover:shadow-[0_8px_30px_rgba(0,0,0,0.12)]',
                    'hover:border-accent-primary/50',
                    'hover:-translate-y-1',
                ],
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardHeader({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'px-6 pt-6 pb-4 md:px-8 md:pt-8 md:pb-5',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardContent({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'px-6 py-6 md:px-8 md:py-8',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

export function CardFooter({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'px-6 pb-6 pt-4 md:px-8 md:pb-8 md:pt-5',
                'flex items-center gap-4',
                className
            )}
            {...props}
        >
            {children}
        </div>
    );
}

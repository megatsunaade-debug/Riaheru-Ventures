import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'accent' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {
    const variantClass =
        variant === 'outline'
            ? 'btn btn-outline'
            : variant === 'ghost'
                ? 'btn btn-ghost'
                : variant === 'accent'
                    ? 'btn btn-accent'
                    : 'btn btn-primary';

    const sizeClass =
        size === 'sm'
            ? 'min-h-10 px-4 py-2 text-sm'
            : size === 'lg'
                ? 'min-h-14 px-7 py-4 text-base'
                : 'min-h-12 px-6 py-3 text-sm';

    return (
        <button
            className={`${variantClass} ${sizeClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

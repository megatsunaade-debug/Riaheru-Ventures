import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'outline';
}

export function Button({
    children,
    variant = 'primary',
    className = '',
    ...props
}: ButtonProps) {
    const baseClass = variant === 'outline' ? 'btn btn-outline' : 'btn';

    return (
        <button
            className={`${baseClass} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}

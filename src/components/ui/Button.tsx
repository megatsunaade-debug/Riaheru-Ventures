import { motion, type HTMLMotionProps } from 'framer-motion';
import type { ReactNode } from 'react';

interface ButtonProps extends HTMLMotionProps<"button"> {
    children: ReactNode;
    variant?: 'primary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    variant = 'primary',
    size = 'md',
    className = '',
    ...props
}: ButtonProps) {

    const baseStyles = `
        relative inline-flex items-center justify-center gap-2
        font-bold transition-all duration-300 cursor-pointer
        disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap
        rounded-full text-center shrink-0
    `;

    const sizeStyles = {
        sm: 'px-8 py-2.5 text-sm min-w-[140px]',
        md: 'px-10 py-3.5 text-base min-w-[200px]',
        lg: 'px-14 py-4.5 text-lg min-w-[280px]',
    };

    const variantStyles = {
        primary: `
            bg-[var(--accent-primary)] text-white
            hover:bg-[var(--accent-secondary)]
            shadow-[0_20px_40px_-12px_rgba(14,165,233,0.35)]
            hover:shadow-[0_25px_50px_-12px_rgba(14,165,233,0.45)]
            hover:-translate-y-1
        `,
        outline: `
            bg-transparent border-2 border-white/40 text-white
            hover:bg-white/10 hover:border-white/60
            hover:-translate-y-1
        `,
        ghost: `
            bg-transparent text-[var(--text-secondary)]
            hover:bg-gray-100 hover:text-[var(--text-dark)]
        `,
    };

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
            {...props}
        >
            {children}
        </motion.button>
    );
}

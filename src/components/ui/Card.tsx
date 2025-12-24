import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface CardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
    glowColor?: 'purple' | 'orange' | 'green' | 'none';
    delay?: number;
}

export function Card({
    children,
    className = '',
    hover = true,
    glowColor = 'none',
    delay = 0
}: CardProps) {
    const glowStyles = {
        purple: 'hover:border-gray-200/30 hover:shadow-[0_0_40px_rgba(255,255,255,0.1)]',
        orange: 'hover:border-orange-500/30 hover:shadow-[0_0_40px_rgba(249,115,22,0.1)]',
        green: 'hover:border-cyan-400/30 hover:shadow-[0_0_40px_rgba(34,211,238,0.1)]',
        none: 'hover:border-white/10',
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay }}
            whileHover={hover ? { y: -5 } : undefined}
            className={`
        relative p-6 md:p-8 rounded-2xl
        bg-[#111111] border border-white/[0.06]
        transition-all duration-500
        ${glowStyles[glowColor]}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
}

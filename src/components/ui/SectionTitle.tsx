import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionTitleProps {
    tag?: string;
    title: ReactNode;
    description?: string;
    align?: 'left' | 'center';
    dark?: boolean;
}

export function SectionTitle({
    tag,
    title,
    description,
    align = 'center',
    dark = false
}: SectionTitleProps) {
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass}`}
        >
            {tag && (
                <span className={`
                    font-mono text-xs tracking-widest uppercase
                    px-3 py-1.5 rounded-full border w-fit font-medium
                    ${dark
                        ? 'bg-white/5 border-white/10 text-[var(--accent-light)]'
                        : 'bg-[var(--accent-primary)]/10 border-[var(--accent-primary)]/20 text-[var(--accent-primary)]'
                    }
                `}>
                    {tag}
                </span>
            )}
            <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[var(--text-dark)]'
                }`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${dark ? 'text-white/60' : 'text-[var(--text-secondary)]'
                    }`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}

import type { ReactNode } from 'react';

import { m } from '@/lib/motion';

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
    align = 'left',
    dark = false
}: SectionTitleProps) {
    const alignClass = align === 'center' ? 'text-center items-center' : 'text-left items-start';

    return (
        <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col gap-4 mb-12 md:mb-16 ${alignClass}`}
        >
            {tag && (
                <span className={`
                    label w-fit rounded-full border px-4 py-2 font-semibold
                    ${dark
                        ? 'bg-white/8 border-white/10 text-[var(--accent-light)]'
                        : 'bg-[var(--accent-primary)]/8 border-[var(--accent-primary)]/14 text-[var(--accent-primary)]'
                    }
                `}>
                    {tag}
                </span>
            )}
            <h2 className={`max-w-3xl text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${dark ? 'text-white' : 'text-[var(--text-dark)]'
                }`}>
                {title}
            </h2>
            {description && (
                <p className={`text-lg md:text-xl max-w-3xl leading-relaxed ${dark ? 'text-white/60' : 'text-[var(--text-secondary)]'
                    }`}>
                    {description}
                </p>
            )}
        </m.div>
    );
}

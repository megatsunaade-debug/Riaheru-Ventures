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
    dark = false,
}: SectionTitleProps) {
    const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';
    const titleClass = dark ? 'text-white' : 'text-[var(--text)]';
    const descriptionClass = dark ? 'text-white/60' : 'text-[var(--text-muted)]';

    return (
        <m.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className={`mb-12 flex flex-col gap-5 md:mb-16 ${alignClass}`}
        >
            {tag && (
                <span className={`mono-label mono-label--accent ${align === 'center' ? 'justify-center' : ''}`}>
                    {tag}
                </span>
            )}
            <h2 className={`max-w-3xl text-pretty text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl ${titleClass}`}>
                {title}
            </h2>
            {description && (
                <p className={`max-w-3xl text-lg leading-relaxed md:text-xl ${descriptionClass}`}>
                    {description}
                </p>
            )}
        </m.div>
    );
}

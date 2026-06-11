import type { ReactNode } from 'react';

import { m } from '@/lib/motion';

interface SectionTitleProps {
    tag?: string;
    title: ReactNode;
    description?: string;
    align?: 'left' | 'center';
}

export function SectionTitle({
    tag,
    title,
    description,
    align = 'left',
}: SectionTitleProps) {
    const alignClass = align === 'center' ? 'items-center text-center' : 'items-start text-left';

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
            <h2 className="max-w-3xl text-pretty text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl lg:text-5xl">
                {title}
            </h2>
            {description && (
                <p className="max-w-3xl text-lg leading-relaxed text-[var(--text-muted)] md:text-xl">
                    {description}
                </p>
            )}
        </m.div>
    );
}

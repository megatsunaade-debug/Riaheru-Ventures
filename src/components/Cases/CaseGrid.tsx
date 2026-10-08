import { ExternalLink } from 'lucide-react';

import { CASE_STUDIES } from '@/data/cases';
import { m } from '@/lib/motion';
import { CasePreview } from './CasePreview';

export function CaseGrid() {
    return (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {CASE_STUDIES.map((caseStudy, index) => (
                <m.article
                    key={caseStudy.id}
                    data-case-id={caseStudy.id}
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: 'easeOut' }}
                    className="flex min-w-0 flex-col rounded-lg border border-[var(--border-subtle)] bg-white p-3 shadow-[var(--shadow-sm)]"
                >
                    <CasePreview
                        caseStudy={caseStudy}
                        className={`${caseStudy.kind === 'confidential' ? 'aspect-[1600/1140]' : 'aspect-[16/10]'} w-full`}
                    />
                    <div className="flex flex-1 flex-col px-2 pb-3 pt-5">
                        {caseStudy.kind === 'site' && (
                            <span className="label label-accent block">Site</span>
                        )}
                        <h3 className="mt-2 text-xl font-semibold tracking-normal text-[var(--text-dark)] md:text-2xl">
                            {caseStudy.title}
                        </h3>
                        {caseStudy.kind === 'confidential' ? (
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                {caseStudy.subtitle}
                            </p>
                        ) : caseStudy.summary ? (
                            <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                {caseStudy.summary}
                            </p>
                        ) : null}
                        {caseStudy.kind === 'site' && caseStudy.url && (
                            <a
                                href={caseStudy.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Visitar site ${caseStudy.title} (abre em nova aba)`}
                                className="mt-auto inline-flex min-h-10 w-fit items-center gap-2 rounded-lg border border-[var(--border-subtle)] px-4 py-2 text-sm font-semibold text-[var(--text-dark)] transition-colors hover:border-[var(--accent-primary)]/30 hover:bg-[var(--accent-primary)]/5 hover:text-[var(--accent-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-primary)]"
                            >
                                Visitar site
                                <ExternalLink size={15} aria-hidden="true" />
                            </a>
                        )}
                    </div>
                </m.article>
            ))}
        </div>
    );
}

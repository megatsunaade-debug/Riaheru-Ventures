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
                    <CasePreview caseStudy={caseStudy} className="aspect-[16/10] w-full" />
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
                    </div>
                </m.article>
            ))}
        </div>
    );
}

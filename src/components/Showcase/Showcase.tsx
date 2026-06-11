import { ArrowUpRight, LockKeyhole } from 'lucide-react';

import { CASE_STUDIES, type CaseStudy } from '@/data/cases';
import { m } from '@/lib/motion';

const confidentialPoints = [
    'Controle de permissões por área',
    'Documentos técnicos com revisão e emissão',
    'Planejamento de capacidade, lead time e risco',
    'Publicação protegida e operação conteinerizada',
];

function CaseVisual({ caseStudy }: { caseStudy: CaseStudy }) {
    if (caseStudy.image) {
        const image = (
            <div className="group relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-3)] transition-colors hover:border-[var(--border-strong)]">
                <div className="overflow-hidden">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.imageAlt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                </div>
                <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" aria-hidden="true" />
            </div>
        );

        if (!caseStudy.link) {
            return image;
        }

        return (
            <a href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="block">
                {image}
            </a>
        );
    }

    return (
        <div className="relative overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-3)] p-7 md:p-9">
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
                <div className="flex items-center gap-3 border-b border-[var(--border)] pb-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-md border border-[var(--border)] bg-[var(--surface)] text-[var(--accent)]">
                        <LockKeyhole size={20} strokeWidth={1.6} />
                    </div>
                    <div>
                        <span className="font-mono text-[0.65rem] uppercase tracking-[0.18em] text-[var(--text-dim)]">
                            Ambiente protegido
                        </span>
                        <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--text)]">
                            Case confidencial
                        </h3>
                    </div>
                </div>

                <div className="mt-7 grid gap-4">
                    {confidentialPoints.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-[var(--text-muted)]">
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 bg-[var(--accent)]" aria-hidden="true" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function Showcase() {
    return (
        <section id="trabalhos" className="border-b border-[var(--border)] bg-[var(--bg-2)] py-24 md:py-32">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="max-w-3xl"
                >
                    <span className="mono-label mono-label--accent">Cases &amp; sistemas entregues</span>
                    <h2 className="mt-6 text-pretty text-4xl font-semibold tracking-tight text-[var(--text)] md:text-5xl">
                        Prova real em produto, operação e presença digital.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-[var(--text-muted)]">
                        A mesma régua técnica aparece em contextos diferentes: SaaS jurídico,
                        site institucional de engenharia e plataforma interna para operação
                        industrial.
                    </p>
                </m.div>

                <div className="mt-20 space-y-24 md:space-y-32">
                    {CASE_STUDIES.map((caseStudy, index) => (
                        <m.article
                            key={caseStudy.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-90px' }}
                            transition={{ duration: 0.58, delay: index * 0.06, ease: 'easeOut' }}
                            className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16"
                        >
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} lg:col-span-7`}>
                                <div className="mb-5 flex items-center gap-3 lg:hidden">
                                    <span className="font-mono text-xs text-[var(--text-dim)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="h-px flex-1 bg-[var(--border)]" />
                                </div>
                                <CaseVisual caseStudy={caseStudy} />
                            </div>

                            <div className="lg:col-span-5">
                                <div className="hidden items-center gap-3 lg:flex">
                                    <span className="font-mono text-xs text-[var(--text-dim)]">
                                        {String(index + 1).padStart(2, '0')}
                                    </span>
                                    <span className="mono-label">
                                        {caseStudy.confidential ? 'Confidencial' : caseStudy.eyebrow}
                                    </span>
                                </div>

                                {caseStudy.logo ? (
                                    <div className="mt-6 inline-flex max-w-full items-center rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3">
                                        <img
                                            src={caseStudy.logo}
                                            alt={`${caseStudy.title} logo`}
                                            loading="lazy"
                                            className="h-7 w-auto max-w-[200px] object-contain brightness-0 invert"
                                        />
                                    </div>
                                ) : (
                                    <h3 className="mt-6 text-3xl font-semibold tracking-tight text-[var(--text)] md:text-4xl">
                                        {caseStudy.title}
                                    </h3>
                                )}

                                <p className="mt-5 text-lg leading-relaxed text-[var(--text-muted)]">
                                    {caseStudy.description}
                                </p>

                                <dl className="mt-8 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                                    {[
                                        ['Desafio', caseStudy.challenge],
                                        ['Entrega', caseStudy.delivery],
                                        ['Resultado', caseStudy.outcome],
                                    ].map(([label, text]) => (
                                        <div key={label} className="grid grid-cols-[88px_1fr] gap-4 py-4">
                                            <dt className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-[var(--text-dim)]">
                                                {label}
                                            </dt>
                                            <dd className="text-sm leading-relaxed text-[var(--text)]">
                                                {text}
                                            </dd>
                                        </div>
                                    ))}
                                </dl>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {caseStudy.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded border border-[var(--border)] bg-[var(--surface)] px-2.5 py-1 font-mono text-xs text-[var(--text-muted)]"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {caseStudy.link && (
                                    <a
                                        href={caseStudy.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-arrow mt-8"
                                    >
                                        Abrir projeto
                                        <ArrowUpRight size={17} />
                                    </a>
                                )}
                            </div>
                        </m.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

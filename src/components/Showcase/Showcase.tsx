import { ArrowUpRight, LockKeyhole } from 'lucide-react';

import { CASE_STUDIES, type CaseStudy } from '@/data/cases';
import { m } from '@/lib/motion';

function CaseVisual({ caseStudy }: { caseStudy: CaseStudy }) {
    if (caseStudy.image) {
        const image = (
            <div className="group overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-white p-2 shadow-[var(--shadow-lg)]">
                <div className="overflow-hidden rounded-md bg-[var(--gray-100)]">
                    <img
                        src={caseStudy.image}
                        alt={caseStudy.imageAlt}
                        loading="lazy"
                        className="aspect-[16/10] w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.025]"
                    />
                </div>
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
        <div className="rounded-lg border border-white/10 bg-[#080b12] p-6 text-white shadow-[var(--shadow-lg)] md:p-8">
            <div className="flex items-center gap-3 border-b border-white/10 pb-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8 text-[var(--accent-light)]">
                    <LockKeyhole size={22} strokeWidth={1.7} />
                </div>
                <div>
                    <span className="text-xs font-semibold uppercase tracking-normal text-white/48">
                        Ambiente protegido
                    </span>
                    <h3 className="on-dark-heading mt-1 text-xl font-semibold tracking-normal">
                        Case confidencial
                    </h3>
                </div>
            </div>

            <div className="mt-7 grid gap-4">
                {[
                    'Controle de permissões por área',
                    'Documentos técnicos com revisão e emissão',
                    'Planejamento de capacidade, lead time e risco',
                    'Publicação protegida e operação conteinerizada',
                ].map((item) => (
                    <div key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/72">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--highlight)]" />
                        <span>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export function Showcase() {
    return (
        <section id="trabalhos" className="bg-[var(--gray-50)] py-20 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mb-14 max-w-3xl md:mb-18"
                >
                    <span className="label label-accent block">Cases e sistemas entregues</span>
                    <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-6xl">
                        Prova real em produto, operação e presença digital.
                    </h2>
                    <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                        A mesma régua técnica aparece em contextos diferentes: SaaS jurídico, site institucional de engenharia e plataforma interna para operação industrial.
                    </p>
                </m.div>

                <div className="space-y-20 md:space-y-28">
                    {CASE_STUDIES.map((caseStudy, index) => (
                        <m.article
                            key={caseStudy.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-90px' }}
                            transition={{ duration: 0.58, delay: index * 0.08, ease: 'easeOut' }}
                            className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14"
                        >
                            <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} lg:col-span-7`}>
                                <CaseVisual caseStudy={caseStudy} />
                            </div>

                            <div className="lg:col-span-5">
                                <span className="label label-accent block">
                                    {caseStudy.confidential ? 'Confidencial' : caseStudy.eyebrow}
                                </span>

                                {caseStudy.logo ? (
                                    <div className="mt-5 inline-flex max-w-full items-center rounded-lg border border-[var(--border-subtle)] bg-white px-4 py-3">
                                        <img
                                            src={caseStudy.logo}
                                            alt={`${caseStudy.title} logo`}
                                            loading="lazy"
                                            className="h-8 w-auto max-w-[210px] object-contain"
                                        />
                                    </div>
                                ) : (
                                    <h3 className="mt-5 text-3xl font-semibold tracking-normal text-[var(--text-dark)] md:text-4xl">
                                        {caseStudy.title}
                                    </h3>
                                )}

                                <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                                    {caseStudy.description}
                                </p>

                                <div className="mt-8 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                                    {[
                                        ['Desafio', caseStudy.challenge],
                                        ['Entrega', caseStudy.delivery],
                                        ['Resultado', caseStudy.outcome],
                                    ].map(([label, text]) => (
                                        <div key={label} className="py-4">
                                            <span className="text-xs font-bold uppercase tracking-normal text-[var(--gray-400)]">
                                                {label}
                                            </span>
                                            <p className="mt-2 text-sm leading-relaxed text-[var(--text-dark)]">
                                                {text}
                                            </p>
                                        </div>
                                    ))}
                                </div>

                                <div className="mt-7 flex flex-wrap gap-2">
                                    {caseStudy.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-md border border-[var(--border-subtle)] bg-white px-3 py-1.5 text-xs font-semibold text-[var(--gray-600)]"
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
                                        <ArrowUpRight size={18} />
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

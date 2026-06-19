import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CASE_STUDIES, type CaseStudy } from '@/data/cases';
import { m } from '@/lib/motion';

function CasePreview({ caseStudy, featured = false }: { caseStudy: CaseStudy; featured?: boolean }) {
    if (!caseStudy.image) {
        return (
            <div className="h-full min-h-[280px] rounded-lg border border-white/10 bg-[#080b12] p-6 text-white shadow-[var(--shadow-lg)]">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/8 text-[var(--accent-light)]">
                    <LockKeyhole size={22} strokeWidth={1.7} />
                </div>
                <span className="mt-7 block text-xs font-semibold uppercase tracking-normal text-white/48">
                    Case confidencial
                </span>
                <h3 className="on-dark-heading mt-3 text-3xl font-semibold tracking-normal">
                    {caseStudy.title}
                </h3>
                <p className="on-dark-copy mt-4 text-sm leading-relaxed">
                    {caseStudy.outcome}
                </p>
            </div>
        );
    }

    const image = (
        <picture>
            {caseStudy.imageAvif && <source srcSet={caseStudy.imageAvif} type="image/avif" />}
            <img
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                loading={featured ? 'eager' : 'lazy'}
                width={1280}
                height={featured ? 720 : 800}
                className={`${featured ? 'aspect-[16/9]' : 'aspect-[16/10]'} w-full object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.025]`}
            />
        </picture>
    );

    return (
        <div className="group overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-white p-2 shadow-[var(--shadow-lg)]">
            {caseStudy.link ? (
                <a href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md bg-[var(--gray-100)]">
                    {image}
                </a>
            ) : (
                <div className="overflow-hidden rounded-md bg-[var(--gray-100)]">{image}</div>
            )}
        </div>
    );
}

export function Showcase() {
    const [featuredCase, ...supportCases] = CASE_STUDIES;

    return (
        <section id="trabalhos" className="bg-[var(--gray-50)] py-20 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="mb-14 flex flex-col gap-6 md:mb-18 lg:flex-row lg:items-end lg:justify-between"
                >
                    <div className="max-w-3xl">
                        <span className="label label-accent block">Cases e ativos digitais</span>
                        <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-6xl">
                            Prova de construção, não promessa de apresentação.
                        </h2>
                        <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
                            A mesma assinatura aparece em SaaS, aquisição digital e operação crítica: clareza de produto, base técnica e continuidade.
                        </p>
                    </div>
                    <Link to="/cases" className="link-arrow">
                        Ver todos os cases
                        <ArrowRight size={18} />
                    </Link>
                </m.div>

                {featuredCase && (
                    <m.article
                        initial={false}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-90px' }}
                        transition={{ duration: 0.58, ease: 'easeOut' }}
                        className="grid gap-9 lg:grid-cols-12 lg:items-center lg:gap-14"
                    >
                        <div className="lg:col-span-7">
                            <CasePreview caseStudy={featuredCase} featured />
                        </div>
                        <div className="lg:col-span-5">
                            {featuredCase.logo ? (
                                <div className="inline-flex max-w-full items-center rounded-lg border border-[var(--border-subtle)] bg-white px-4 py-3">
                                    <img
                                        src={featuredCase.logo}
                                        alt={`${featuredCase.title} logo`}
                                        loading="lazy"
                                        width={210}
                                        height={32}
                                        className="h-8 w-auto max-w-[210px] object-contain"
                                    />
                                </div>
                            ) : (
                                <span className="label label-accent block">{featuredCase.eyebrow}</span>
                            )}
                            <h3 className="mt-6 text-4xl font-bold tracking-normal text-[var(--text-dark)] md:text-5xl">
                                {featuredCase.title}
                            </h3>
                            <p className="mt-5 text-lg leading-relaxed text-[var(--text-secondary)]">
                                {featuredCase.description}
                            </p>
                            <div className="mt-8 border-y border-[var(--border-subtle)] py-5">
                                <span className="text-xs font-bold uppercase tracking-normal text-[var(--gray-400)]">
                                    Resultado
                                </span>
                                <p className="mt-2 text-sm leading-relaxed text-[var(--text-dark)]">
                                    {featuredCase.outcome}
                                </p>
                            </div>
                            {featuredCase.link && (
                                <a
                                    href={featuredCase.link}
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
                )}

                <div className="mt-16 grid gap-8 md:grid-cols-2">
                    {supportCases.map((caseStudy, index) => (
                        <m.article
                            key={caseStudy.id}
                            initial={false}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-80px' }}
                            transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                            className="grid gap-6"
                        >
                            <CasePreview caseStudy={caseStudy} />
                            <div>
                                <span className="label label-accent block">
                                    {caseStudy.confidential ? 'Confidencial' : caseStudy.eyebrow}
                                </span>
                                <h3 className="mt-4 text-2xl font-semibold tracking-normal text-[var(--text-dark)]">
                                    {caseStudy.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                                    {caseStudy.outcome}
                                </p>
                            </div>
                        </m.article>
                    ))}
                </div>
            </div>
        </section>
    );
}

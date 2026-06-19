import { Helmet } from 'react-helmet-async';
import { ArrowRight, ArrowUpRight, LockKeyhole } from 'lucide-react';

import { CASE_STUDIES, type CaseStudy } from '@/data/cases';
import { m } from '@/lib/motion';
import { Button } from '../components/ui/Button';
import { useCanonical } from '../hooks/useCanonical';
import { useModal } from '../hooks/useModal';

function CaseImage({ caseStudy }: { caseStudy: CaseStudy }) {
    if (!caseStudy.image) {
        return (
            <div className="h-full min-h-[320px] rounded-lg border border-white/10 bg-[#080b12] p-6 text-white shadow-[var(--shadow-lg)] md:p-8">
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
                        'Permissões por área e publicação protegida',
                        'Documentos técnicos com emissão rastreável',
                        'Planejamento de capacidade, prazo e risco',
                        'Indicadores de pessoas, estoque e execução',
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

    const image = (
        <picture>
            {caseStudy.imageAvif && <source srcSet={caseStudy.imageAvif} type="image/avif" />}
            <img
                src={caseStudy.image}
                alt={caseStudy.imageAlt}
                loading="lazy"
                width={1280}
                height={800}
                className="aspect-[16/10] w-full rounded-md object-cover object-left-top"
            />
        </picture>
    );

    return (
        <div className="overflow-hidden rounded-lg border border-[var(--border-subtle)] bg-white p-2 shadow-[var(--shadow-lg)]">
            {caseStudy.link ? (
                <a href={caseStudy.link} target="_blank" rel="noopener noreferrer" className="block overflow-hidden rounded-md">
                    {image}
                </a>
            ) : (
                <div className="overflow-hidden rounded-md">{image}</div>
            )}
        </div>
    );
}

export function CasesPage() {
    const { openContactModal } = useModal();
    useCanonical('https://riaheru.com/cases');

    return (
        <div className="bg-[var(--off-white)]">
            <Helmet>
                <title>Cases de Produto, Engenharia e Operação | Riaheru</title>
                <meta
                    name="description"
                    content="Conheça cases da Riaheru em venture building, SaaS jurídico, presença digital de engenharia e plataforma operacional industrial."
                />
                <link rel="canonical" href="https://riaheru.com/cases" />
                <meta property="og:title" content="Cases de Produto, Engenharia e Operação | Riaheru" />
                <meta
                    property="og:description"
                    content="Projetos reais em produto B2B, SaaS, engenharia dedicada, arquitetura e operação crítica."
                />
                <meta property="og:url" content="https://riaheru.com/cases" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://riaheru.com/LOGO.png" />
            </Helmet>

            <section className="relative overflow-hidden bg-[#070a12] pb-20 pt-32 text-white md:pb-28 md:pt-36">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)`,
                        backgroundSize: '44px 44px',
                    }}
                />
                <div className="container relative">
                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="max-w-5xl"
                    >
                        <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                            Cases Riaheru
                        </span>
                        <h1 className="on-dark-heading mt-7 text-5xl font-black leading-[0.94] tracking-normal md:text-7xl">
                            Produto, operação e presença digital com lastro técnico.
                        </h1>
                        <p className="on-dark-copy mt-7 max-w-3xl text-lg leading-relaxed md:text-xl">
                            Trabalhos que mostram a mesma assinatura em contextos diferentes: criar produto, vender melhor, organizar sistemas e sustentar operação crítica.
                        </p>
                    </m.div>
                </div>
            </section>

            <section className="py-20 md:py-28">
                <div className="container">
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
                                    <CaseImage caseStudy={caseStudy} />
                                </div>

                                <div className="lg:col-span-5">
                                    <span className="label label-accent block">
                                        {caseStudy.confidential ? 'Confidencial' : caseStudy.eyebrow}
                                    </span>
                                    <h2 className="mt-5 text-4xl font-bold tracking-normal text-[var(--text-dark)] md:text-5xl">
                                        {caseStudy.title}
                                    </h2>
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

            <section className="bg-[#070a12] py-20 text-white md:py-24">
                <div className="container">
                    <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
                        <div>
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Próximo projeto
                            </span>
                            <h2 className="on-dark-heading mt-6 max-w-3xl text-4xl font-bold tracking-normal md:text-5xl">
                                Se o problema mistura produto, dados e operação, vale uma conversa técnica.
                            </h2>
                        </div>
                        <Button
                            size="lg"
                            onClick={() => openContactModal({ source: 'cases_bottom', page: '/cases' })}
                        >
                            Iniciar conversa
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CasesPage;

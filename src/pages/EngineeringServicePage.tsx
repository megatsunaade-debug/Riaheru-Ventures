import { Helmet } from 'react-helmet-async';
import type { PointerEvent as ReactPointerEvent } from 'react';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES } from '@/data/cases';
import type { ServiceOffering } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { Button } from '@/components/ui/Button';
import engineeringArtwork from '../../Engenharia de software bordada em azul.png';
import './EngineeringServicePage.css';

type EngineeringServicePageProps = {
    service: ServiceOffering;
    onContact: (source: string) => void;
};

function moveMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    if (
        event.pointerType !== 'mouse'
        || window.matchMedia('(prefers-reduced-motion: reduce)').matches
        || !window.matchMedia('(hover: hover) and (pointer: fine)').matches
    ) return;

    const bounds = event.currentTarget.getBoundingClientRect();
    const offsetX = (event.clientX - (bounds.left + bounds.width / 2)) * 0.12;
    const offsetY = (event.clientY - (bounds.top + bounds.height / 2)) * 0.12;
    event.currentTarget.style.setProperty('--engineering-magnet-x', `${Math.max(-4, Math.min(4, offsetX))}px`);
    event.currentTarget.style.setProperty('--engineering-magnet-y', `${Math.max(-4, Math.min(4, offsetY))}px`);
}

function resetMagneticControl(event: ReactPointerEvent<HTMLElement>) {
    event.currentTarget.style.setProperty('--engineering-magnet-x', '0px');
    event.currentTarget.style.setProperty('--engineering-magnet-y', '0px');
}

export function EngineeringServicePage({ service, onContact }: EngineeringServicePageProps) {
    const relatedCases = CASE_STUDIES.filter((caseStudy) => service.relatedCaseIds.includes(caseStudy.id));

    return (
        <div className="engineering-service-page bg-[var(--off-white)]">
            <Helmet>
                <title>{service.metaTitle}</title>
                <meta name="description" content={service.metaDescription} />
                <link rel="canonical" href={`https://riaheru.com${service.route}`} />
                <meta property="og:title" content={service.metaTitle} />
                <meta property="og:description" content={service.metaDescription} />
                <meta property="og:url" content={`https://riaheru.com${service.route}`} />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://riaheru.com/LOGO.png" />
            </Helmet>

            <section className="engineering-service-hero relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-[#070a12] pb-4 pt-20 text-white md:pb-5 md:pt-24">
                <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 opacity-[0.07]"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)',
                        backgroundSize: '44px 44px',
                    }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(76,154,255,0.2),transparent_32%),linear-gradient(120deg,rgba(7,10,18,0.98),rgba(7,10,18,0.88))]" />

                <div className="engineering-service-hero__container container relative z-10 flex w-full min-w-0 flex-1 items-center py-5 md:py-0">
                    <m.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.42, ease: 'easeOut' }}
                        className="engineering-service-hero__grid min-w-0 w-full"
                    >
                        <div
                            className="engineering-service-copy min-w-0 max-w-3xl lg:self-stretch lg:justify-between"
                            style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.1rem, 2.3vh, 1.5rem)' }}
                        >
                            <span className="engineering-service-badge on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                <span className="engineering-service-badge__dot" aria-hidden="true" />
                                <span>{service.eyebrow}</span>
                            </span>
                            <h1
                                className="on-dark-heading text-4xl font-black leading-[0.98] tracking-normal sm:text-5xl lg:text-[clamp(2.55rem,4.1vw,4.5rem)]"
                                style={{ fontSize: 'clamp(2.55rem, 4.1vw, 4.5rem)', lineHeight: 0.98 }}
                            >
                                {service.headline}
                            </h1>
                            <p
                                className="on-dark-copy max-w-2xl text-lg leading-relaxed md:text-xl"
                                style={{ fontSize: 'clamp(1.2rem, 1.55vw, 1.35rem)', lineHeight: 1.65 }}
                            >
                                {service.description}
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => onContact('service_hero')}
                                    onPointerMove={moveMagneticControl}
                                    onPointerLeave={resetMagneticControl}
                                    onPointerCancel={resetMagneticControl}
                                    className="engineering-service-magnetic shadow-lg shadow-[var(--accent-primary)]/20"
                                    style={{ minHeight: 68, padding: '1.25rem 2.25rem', fontSize: '1.2rem' }}
                                >
                                    {service.primaryCta}
                                    <ArrowRight size={22} />
                                </Button>
                                <Link
                                    to="/cases"
                                    onPointerMove={moveMagneticControl}
                                    onPointerLeave={resetMagneticControl}
                                    onPointerCancel={resetMagneticControl}
                                    className="engineering-service-magnetic btn btn-outline on-dark-outline-button min-h-14 px-8 py-4 text-base"
                                >
                                    Ver cases
                                </Link>
                            </div>
                        </div>

                        <figure className="engineering-art-figure">
                            <img
                                src={engineeringArtwork}
                                alt="Arte bordada com o título Engenharia de Software e notebook exibindo código, ao lado de símbolos de arquitetura, dados, integrações, testes, implantação e manutenção."
                                width={1188}
                                height={1324}
                                fetchPriority="high"
                                decoding="async"
                                className="engineering-art-image"
                            />
                        </figure>
                    </m.div>
                </div>
            </section>

            <section className="bg-white py-18 md:py-24">
                <div className="container">
                    <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
                        <div>
                            <span className="label label-accent block">Quando faz sentido</span>
                            <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                                {service.title} para problemas que já pedem decisão técnica.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                                {service.proof}
                            </p>
                        </div>

                        <div className="engineering-service-list engineering-service-best-for grid gap-3">
                            {service.bestFor.map((item, index) => (
                                <div key={item} className="engineering-service-row engineering-scroll-item py-5" style={{ animationDelay: `${index * 55}ms` }}>
                                    <p className="text-lg font-semibold leading-snug text-[var(--text-dark)]">{item}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 border-t border-[var(--border-subtle)] pt-8">
                        <span className="label label-accent block">Resultado esperado</span>
                        <div className="mt-5 grid gap-3 md:grid-cols-3">
                            {service.outcomes.map((outcome, index) => (
                                <div key={outcome} className="engineering-service-outcome engineering-scroll-item flex gap-3 text-sm leading-relaxed text-[var(--text-secondary)]" style={{ animationDelay: `${index * 65}ms` }}>
                                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" color="#ff6b35" strokeWidth={1.8} aria-hidden="true" />
                                    <span>{outcome}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[var(--gray-50)] py-18 md:py-24">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div>
                            <span className="label label-accent block">Entregáveis</span>
                            <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                                O que fica pronto para operar.
                            </h2>
                            <div className="engineering-service-list engineering-service-deliverables mt-8 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                                {service.deliverables.map((item, index) => (
                                    <p key={item} className="engineering-service-row engineering-scroll-item py-4 text-base font-semibold text-[var(--text-dark)]" style={{ animationDelay: `${index * 55}ms` }}>
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <div>
                            <span className="label label-accent block">Modelo de trabalho</span>
                            <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                                Ciclos curtos, decisão explícita e handoff real.
                            </h2>
                            <div className="mt-8 grid gap-4">
                                {service.operatingModel.map((item, index) => (
                                    <div key={item} className="engineering-service-step engineering-scroll-item border-l-2 pl-5" style={{ borderColor: '#ff6b35', animationDelay: `${index * 65}ms` }}>
                                        <span className="engineering-service-step__number font-mono text-xs text-[var(--gray-400)]">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <p className="mt-2 text-base leading-relaxed text-[var(--text-secondary)]">
                                            {item}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-[#070a12] py-20 text-white md:py-28">
                <div className="container">
                    <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
                        <div className="max-w-3xl">
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Prova conectada
                            </span>
                            <h2 className="on-dark-heading mt-6 text-4xl font-bold tracking-normal md:text-6xl">
                                Cases relacionados ao tipo de problema.
                            </h2>
                        </div>
                        <Link to="/cases" className="engineering-service-cases-link link-arrow text-[var(--accent-light)]">
                            Ver todos os cases
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="engineering-service-cases grid gap-0 border-y border-white/10 md:grid-cols-2">
                        {relatedCases.map((caseStudy, index) => (
                            <article key={caseStudy.id} className="engineering-service-case engineering-scroll-item border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0" style={{ animationDelay: `${index * 75}ms` }}>
                                {caseStudy.kind === 'site' && (
                                    <span className="text-xs font-semibold uppercase tracking-normal text-white/44">Site</span>
                                )}
                                <h3 className="on-dark-heading mt-4 text-2xl font-semibold tracking-normal">
                                    {caseStudy.title}
                                </h3>
                                {caseStudy.kind === 'site' && caseStudy.url && (
                                    <a
                                        href={caseStudy.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={`Visitar site ${caseStudy.title} (abre em nova aba)`}
                                        className="engineering-service-case-visit mt-6 inline-flex min-h-11 w-fit items-center gap-2 px-4 py-2 text-sm font-semibold"
                                    >
                                        Visitar site
                                        <ExternalLink size={15} aria-hidden="true" />
                                    </a>
                                )}
                                {caseStudy.kind === 'confidential' && (
                                    <p className="on-dark-copy mt-4 text-sm leading-relaxed">
                                        {caseStudy.subtitle}
                                    </p>
                                )}
                            </article>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Button
                            size="lg"
                            onClick={() => onContact('service_bottom')}
                            onPointerMove={moveMagneticControl}
                            onPointerLeave={resetMagneticControl}
                            onPointerCancel={resetMagneticControl}
                            className="engineering-service-magnetic engineering-service-contact-button"
                        >
                            Conversar sobre {service.shortTitle.toLowerCase()}
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default EngineeringServicePage;

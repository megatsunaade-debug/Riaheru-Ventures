import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle2, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CASE_STUDIES } from '@/data/cases';
import type { ServiceOffering } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { Button } from '../components/ui/Button';
import { useCanonical } from '../hooks/useCanonical';
import { useModal } from '../hooks/useModal';

const accentByService: Record<ServiceOffering['accent'], string> = {
    blue: '#4c9aff',
    orange: '#ff6b35',
    emerald: '#22c55e',
};

interface ServicePageProps {
    service: ServiceOffering;
}

export function ServicePage({ service }: ServicePageProps) {
    const { openContactModal } = useModal();
    useCanonical(`https://riaheru.com${service.route}`);

    const accent = accentByService[service.accent];
    const relatedCases = CASE_STUDIES.filter((caseStudy) => service.relatedCaseIds.includes(caseStudy.id));

    const openServiceContact = (source: string) => {
        openContactModal({
            source,
            serviceId: service.id,
            serviceLabel: service.title,
            page: service.route,
        });
    };

    return (
        <div className="bg-[var(--off-white)]">
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

            <section className="relative isolate overflow-hidden bg-[#070a12] pt-32 text-white md:pt-36">
                <div
                    className="pointer-events-none absolute inset-0 opacity-[0.08]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255,255,255,0.42) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.42) 1px, transparent 1px)`,
                        backgroundSize: '44px 44px',
                    }}
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_20%,rgba(76,154,255,0.22),transparent_28%),linear-gradient(120deg,rgba(7,10,18,0.98),rgba(7,10,18,0.88))]" />

                <div className="container relative z-10 pb-20 md:pb-28">
                    <m.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: 'easeOut' }}
                        className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.74fr)] lg:items-end"
                    >
                        <div className="max-w-5xl">
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                {service.eyebrow}
                            </span>
                            <h1 className="on-dark-heading mt-7 max-w-5xl text-5xl font-black leading-[0.94] tracking-normal md:text-7xl">
                                {service.headline}
                            </h1>
                            <p className="on-dark-copy mt-7 max-w-3xl text-lg leading-relaxed md:text-xl">
                                {service.description}
                            </p>
                            <div className="mt-9 flex flex-wrap gap-4">
                                <Button
                                    size="lg"
                                    onClick={() => openServiceContact('service_hero')}
                                    className="shadow-lg shadow-[var(--accent-primary)]/20"
                                >
                                    {service.primaryCta}
                                    <ArrowRight size={19} />
                                </Button>
                                <Link to="/cases" className="btn btn-outline on-dark-outline-button min-h-14 px-8 py-4 text-base">
                                    Ver cases
                                </Link>
                            </div>
                        </div>

                        <div className="border-y border-white/10 py-6 lg:border-y-0 lg:border-l lg:py-0 lg:pl-8">
                            <span className="block text-xs font-semibold uppercase tracking-normal text-white/42">
                                Resultado esperado
                            </span>
                            <div className="mt-5 space-y-5">
                                {service.outcomes.map((outcome) => (
                                    <div key={outcome} className="flex gap-3 text-sm leading-relaxed text-white/82">
                                        <CheckCircle2 size={18} className="mt-0.5 shrink-0" color={accent} strokeWidth={1.8} />
                                        <span>{outcome}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </m.div>
                </div>
            </section>

            <section className="bg-white py-18 md:py-24">
                <div className="container">
                    <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                        <div>
                            <span className="label label-accent block">Quando faz sentido</span>
                            <h2 className="mt-5 text-4xl font-bold tracking-normal md:text-5xl">
                                {service.title} para problemas que já pedem decisão técnica.
                            </h2>
                            <p className="mt-6 text-lg leading-relaxed text-[var(--text-secondary)]">
                                {service.proof}
                            </p>
                        </div>

                        <div className="grid gap-0 border-y border-[var(--border-subtle)]">
                            {service.bestFor.map((item) => (
                                <div key={item} className="border-b border-[var(--border-subtle)] py-5 last:border-b-0">
                                    <p className="text-lg font-semibold leading-snug text-[var(--text-dark)]">{item}</p>
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
                            <div className="mt-8 divide-y divide-[var(--border-subtle)] border-y border-[var(--border-subtle)]">
                                {service.deliverables.map((item) => (
                                    <p key={item} className="py-4 text-base font-semibold text-[var(--text-dark)]">
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
                                    <div key={item} className="border-l-2 pl-5" style={{ borderColor: accent }}>
                                        <span className="font-mono text-xs text-[var(--gray-400)]">
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
                        <Link to="/cases" className="link-arrow text-[var(--accent-light)]">
                            Ver todos os cases
                            <ArrowRight size={18} />
                        </Link>
                    </div>

                    <div className="grid gap-0 border-y border-white/10 md:grid-cols-2">
                        {relatedCases.map((caseStudy) => (
                            <article key={caseStudy.id} className="border-b border-white/10 py-8 md:border-b-0 md:border-r md:px-8 md:last:border-r-0">
                                <span className="text-xs font-semibold uppercase tracking-normal text-white/44">
                                    {caseStudy.confidential ? 'Confidencial' : caseStudy.eyebrow}
                                </span>
                                <h3 className="on-dark-heading mt-4 text-2xl font-semibold tracking-normal">
                                    {caseStudy.title}
                                </h3>
                                <p className="on-dark-copy mt-4 text-sm leading-relaxed">
                                    {caseStudy.outcome}
                                </p>
                                {caseStudy.link && (
                                    <a
                                        href={caseStudy.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="link-arrow mt-6 text-[var(--accent-light)]"
                                    >
                                        Abrir projeto
                                        <ExternalLink size={16} />
                                    </a>
                                )}
                            </article>
                        ))}
                    </div>

                    <div className="mt-12">
                        <Button size="lg" onClick={() => openServiceContact('service_bottom')}>
                            Conversar sobre {service.shortTitle.toLowerCase()}
                            <ArrowRight size={18} />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ServicePage;

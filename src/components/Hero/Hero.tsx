import { ArrowRight, CheckCircle2, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';

import { CASE_STUDIES } from '@/data/cases';
import { SERVICE_OFFERINGS } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const marqletCase = CASE_STUDIES.find((caseStudy) => caseStudy.id === 'marqlet');
const nimetCase = CASE_STUDIES.find((caseStudy) => caseStudy.id === 'nimet');

const proofSignals = [
    'Venture build com produto real',
    'Arquitetura para operação crítica',
    'Governança, LGPD e handoff útil',
];

export function Hero() {
    const { openContactModal } = useModal();

    return (
        <section className="relative isolate flex min-h-[100svh] overflow-hidden bg-[#070a12] text-white">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.075]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)`,
                    backgroundSize: '44px 44px',
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_76%_18%,rgba(76,154,255,0.28),transparent_28%),radial-gradient(circle_at_12%_80%,rgba(255,107,53,0.12),transparent_24%),linear-gradient(120deg,rgba(7,10,18,0.98)_0%,rgba(7,10,18,0.88)_55%,rgba(0,38,86,0.78)_100%)]" />

            <div className="container relative z-10 grid w-full gap-12 pb-12 pt-32 md:pb-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(460px,1.1fr)] lg:items-center">
                <m.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="max-w-3xl"
                >
                    <span className="on-dark-kicker inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Venture studio técnico para B2B
                    </span>

                    <h1 className="on-dark-heading mt-7 text-[clamp(4rem,11vw,8rem)] font-black leading-[0.86] tracking-normal">
                        Riaheru
                    </h1>

                    <p className="on-dark-heading mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
                        Construímos produtos, sistemas e operações digitais que viram ativos de negócio.
                    </p>

                    <p className="on-dark-copy mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
                        Produto, engenharia e governança no mesmo ciclo para empresas que precisam lançar, modernizar ou escalar tecnologia sem improviso.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={() => openContactModal({ source: 'home_hero_primary', page: '/' })}
                            className="btn min-h-14 px-7 py-4 text-base shadow-lg shadow-[var(--accent)]/20"
                        >
                            Iniciar conversa estratégica
                            <ArrowRight size={19} />
                        </button>
                        <Link to="/cases" className="btn btn-outline on-dark-outline-button min-h-14 px-7 py-4 text-base">
                            Ver cases
                        </Link>
                    </div>

                    <div className="mt-10 grid gap-3 text-sm text-white/76 sm:grid-cols-3">
                        {proofSignals.map((signal) => (
                            <div key={signal} className="flex items-start gap-2">
                                <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-[var(--accent-light)]" strokeWidth={1.8} />
                                <span>{signal}</span>
                            </div>
                        ))}
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
                    className="relative"
                    aria-label="Produtos e sistemas construídos pela Riaheru"
                >
                    <div className="relative rounded-lg border border-white/10 bg-white/[0.045] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.36)] backdrop-blur">
                        <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3 text-xs text-white/50">
                            <span className="inline-flex items-center gap-2">
                                <Workflow size={15} className="text-[var(--accent-light)]" />
                                Product lab
                            </span>
                            <span>Build / Operate / Scale</span>
                        </div>

                        {marqletCase?.image && (
                            <a
                                href={marqletCase.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group mt-3 block overflow-hidden rounded-lg border border-white/10 bg-white"
                            >
                                <img
                                    src={marqletCase.image}
                                    alt={marqletCase.imageAlt}
                                    width={1280}
                                    height={720}
                                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                    fetchPriority="high"
                                />
                            </a>
                        )}

                        <div className="mt-3 grid gap-3 md:grid-cols-[0.92fr_1.08fr]">
                            {nimetCase?.image && (
                                <a
                                    href={nimetCase.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group overflow-hidden rounded-lg border border-white/10 bg-[#0d111b]"
                                >
                                    <picture>
                                        {nimetCase.imageAvif && <source srcSet={nimetCase.imageAvif} type="image/avif" />}
                                        <img
                                            src={nimetCase.image}
                                            alt={nimetCase.imageAlt}
                                            width={1280}
                                            height={800}
                                            className="h-full min-h-48 w-full object-cover object-left-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                                            loading="lazy"
                                        />
                                    </picture>
                                </a>
                            )}

                            <div className="rounded-lg border border-white/10 bg-[#0b1020] p-5">
                                <span className="text-xs font-semibold uppercase tracking-normal text-[var(--accent-light)]">
                                    Rotas de atuação
                                </span>
                                <div className="mt-4 divide-y divide-white/10">
                                    {SERVICE_OFFERINGS.map((service) => (
                                        <Link
                                            key={service.id}
                                            to={service.route}
                                            className="group flex items-center justify-between gap-4 py-3 text-sm text-white/76 hover:text-white"
                                        >
                                            <span>{service.shortTitle}</span>
                                            <ArrowRight size={15} className="shrink-0 text-white/34 transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-light)]" />
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

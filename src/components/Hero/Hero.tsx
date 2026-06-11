import { ArrowRight, CheckCircle2, LockKeyhole, Workflow } from 'lucide-react';

import { CASE_STUDIES } from '@/data/cases';
import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const heroSignals = [
    { icon: Workflow, text: 'Produto, arquitetura e operação no mesmo plano' },
    { icon: LockKeyhole, text: 'Segurança, LGPD e governança desde a fundação' },
    { icon: CheckCircle2, text: 'Entrega sênior com documentação e continuidade' },
];

const marqletCase = CASE_STUDIES.find((caseStudy) => caseStudy.id === 'marqlet');
const nimetCase = CASE_STUDIES.find((caseStudy) => caseStudy.id === 'nimet');
const industrialCase = CASE_STUDIES.find((caseStudy) => caseStudy.id === 'industrial-platform');

export function Hero() {
    const { openContactModal } = useModal();

    return (
        <section className="relative isolate flex min-h-[calc(100svh-76px)] flex-col overflow-hidden bg-[#070a12] text-white">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.07]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.45) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.45) 1px, transparent 1px)`,
                    backgroundSize: '44px 44px',
                }}
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(7,10,18,0.96)_0%,rgba(7,10,18,0.88)_44%,rgba(0,82,204,0.18)_100%)]" />

            <div className="container relative z-10 grid flex-1 gap-12 py-16 md:py-20 lg:grid-cols-[minmax(0,0.95fr)_minmax(420px,1.05fr)] lg:items-center">
                <m.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="max-w-3xl"
                >
                    <span className="on-dark-kicker inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Elite Engineering & Venture Building
                    </span>

                    <h1 className="on-dark-heading mt-7 text-[clamp(4rem,12vw,8.25rem)] font-black leading-[0.86] tracking-normal">
                        Riaheru
                    </h1>

                    <p className="on-dark-heading mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl">
                        Engenharia B2B para produtos digitais, sistemas críticos e operações que precisam escalar.
                    </p>

                    <p className="on-dark-copy mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
                        Unimos estratégia de produto, arquitetura robusta e execução sênior para construir ativos digitais com segurança, clareza operacional e visão de negócio.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4">
                        <button
                            type="button"
                            onClick={openContactModal}
                            className="btn min-h-14 px-7 py-4 text-base shadow-lg shadow-[var(--accent)]/20"
                        >
                            Iniciar conversa estratégica
                            <ArrowRight size={19} />
                        </button>
                        <a href="#trabalhos" className="btn btn-outline on-dark-outline-button min-h-14 px-7 py-4 text-base">
                            Ver cases
                        </a>
                    </div>
                </m.div>

                <m.div
                    initial={{ opacity: 0, x: 28 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.12, ease: 'easeOut' }}
                    className="relative"
                    aria-label="Cases de produto da Riaheru"
                >
                    <div className="relative overflow-hidden rounded-lg border border-white/10 bg-white/[0.04] p-3 shadow-[0_34px_90px_rgba(0,0,0,0.35)] backdrop-blur">
                        {marqletCase?.image && (
                            <a
                                href={marqletCase.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group block overflow-hidden rounded-lg border border-white/10 bg-white"
                            >
                                <img
                                    src={marqletCase.image}
                                    alt={marqletCase.imageAlt}
                                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
                                    fetchPriority="high"
                                />
                            </a>
                        )}

                        <div className="mt-3 grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
                            {nimetCase?.image && (
                                <a
                                    href={nimetCase.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group overflow-hidden rounded-lg border border-white/10 bg-[#0d111b]"
                                >
                                    <img
                                        src={nimetCase.image}
                                        alt={nimetCase.imageAlt}
                                        className="h-full min-h-48 w-full object-cover object-left-top opacity-90 transition-transform duration-700 group-hover:scale-[1.03]"
                                        loading="lazy"
                                    />
                                </a>
                            )}

                            <div className="rounded-lg border border-white/10 bg-[#0b1020] p-5">
                                <span className="text-xs font-semibold uppercase tracking-normal text-[var(--accent-light)]">
                                    Case confidencial
                                </span>
                                <h2 className="on-dark-heading mt-4 text-2xl font-semibold tracking-normal">
                                    {industrialCase?.title}
                                </h2>
                                <p className="on-dark-copy mt-3 text-sm leading-relaxed">
                                    {industrialCase?.description}
                                </p>
                                <div className="mt-5 space-y-3">
                                    {industrialCase?.tags.slice(0, 4).map((tag) => (
                                        <div key={tag} className="flex items-center gap-2 text-sm text-white/72">
                                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--highlight)]" />
                                            {tag}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>

            <m.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.35, ease: 'easeOut' }}
                className="relative z-10 border-t border-white/10 bg-white/[0.02]"
            >
                <div className="container grid gap-4 py-6 md:grid-cols-3">
                    {heroSignals.map((signal) => (
                        <div key={signal.text} className="flex items-center gap-3 text-sm text-white/76">
                            <signal.icon size={18} className="shrink-0 text-[var(--accent-light)]" strokeWidth={1.8} />
                            <span>{signal.text}</span>
                        </div>
                    ))}
                </div>
            </m.div>
        </section>
    );
}

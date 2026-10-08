import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

import { SERVICE_OFFERINGS } from '@/data/serviceOfferings';
import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

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
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
                <div className="absolute right-[-4%] top-[48%] aspect-[250/220] w-[48vw] overflow-hidden opacity-[0.04] lg:left-[8%] lg:right-auto lg:top-[14%] lg:w-[min(50vw,900px)] lg:opacity-[0.045]">
                    <img
                        src="/LOGO header.png"
                        alt=""
                        width={877}
                        height={220}
                        className="block h-full w-auto max-w-none brightness-0 invert"
                    />
                </div>
            </div>

            <div className="container relative z-10 grid w-full grid-cols-1 gap-10 pb-8 pt-24 lg:grid-cols-[minmax(0,1.04fr)_minmax(0,0.96fr)] lg:items-start lg:gap-6 lg:pb-0">
                <m.div
                    initial={{ opacity: 0, y: 22 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="max-w-3xl lg:relative xl:top-2 2xl:top-0"
                >
                    <span className="on-dark-kicker inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Venture studio técnico para B2B
                    </span>

                    <h1 className="on-dark-heading mt-7 text-[clamp(4rem,11vw,8rem)] font-black leading-[0.86] tracking-normal 2xl:mt-2!">
                        Riaheru
                    </h1>

                    <p className="on-dark-heading mt-7 max-w-2xl text-3xl font-semibold leading-tight tracking-normal md:text-5xl 2xl:mt-2!">
                        Construímos produtos, sistemas e operações digitais que viram ativos de negócio.
                    </p>

                    <p className="on-dark-copy mt-6 max-w-2xl text-lg leading-relaxed md:text-xl 2xl:mt-2!">
                        Produto, engenharia e governança no mesmo ciclo para empresas que precisam lançar, modernizar ou escalar tecnologia sem improviso.
                    </p>

                    <p className="on-dark-copy mt-4 max-w-2xl text-base leading-relaxed md:text-lg 2xl:mt-2!">
                        Da presença digital à operação, desenvolvemos sites, plataformas, sistemas sob medida e integrações. Cada solução parte de um desafio real e é pensada para funcionar na rotina da empresa.
                    </p>

                    <p className="on-dark-copy mt-4 max-w-2xl text-base leading-relaxed md:text-lg 2xl:mt-2!">
                        Também conectamos ferramentas e organizamos a entrega para que a equipe consiga usar, manter e ampliar cada solução. O trabalho considera os objetivos e a rotina real da empresa.
                    </p>

                    <div className="mt-9 flex flex-wrap gap-4 2xl:mt-10">
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

                    <div className="mt-10 grid gap-3 text-sm text-white/76 sm:grid-cols-3 2xl:mt-10">
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
                    className="relative w-full lg:-mt-4"
                    aria-label="Produtos e sistemas construídos pela Riaheru"
                >
                    <div className="relative">
                        <div className="relative isolate flex justify-center lg:justify-start lg:translate-x-6">
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-x-[-8%] inset-y-[8%] z-0 blur-[48px]"
                                style={{ background: 'radial-gradient(ellipse at center, rgba(42, 113, 212, 0.15) 0%, rgba(25, 85, 176, 0.07) 48%, transparent 78%)' }}
                            />
                            <img
                                src="/images/riaheru-product-lab.png"
                                alt="Arte bordada da Riaheru com a logo na fachada, mensagem sobre presença de marca e botão Construa sua presença."
                                loading="eager"
                                decoding="async"
                                width={1122}
                                height={1402}
                                className="relative z-10 block h-auto w-auto max-h-[min(92svh,920px)] max-w-full lg:max-h-[clamp(36rem,calc(100svh-180px),920px)]"
                                style={{
                                    maskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)',
                                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 2%, black 98%, transparent 100%)',
                                }}
                            />
                        </div>

                        <div className="mt-3 flex flex-col gap-3 rounded-lg border border-white/10 bg-[#0b1020] px-4 py-3 sm:flex-row sm:items-center sm:justify-between lg:mt-2">
                            <span className="shrink-0 text-xs font-semibold uppercase tracking-normal text-[var(--accent-light)]">
                                Rotas de atuação
                            </span>
                            <div className="flex flex-wrap gap-x-4 gap-y-2">
                                {SERVICE_OFFERINGS.map((service) => (
                                    <Link
                                        key={service.id}
                                        to={service.route}
                                        className="group inline-flex items-center gap-1.5 text-xs font-medium text-white/76 hover:text-white"
                                    >
                                        <span>{service.shortTitle}</span>
                                        <ArrowRight size={13} className="shrink-0 text-white/34 transition-transform group-hover:translate-x-1 group-hover:text-[var(--accent-light)]" />
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

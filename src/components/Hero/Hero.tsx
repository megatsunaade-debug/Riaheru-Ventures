import { ArrowRight, Cpu, ShieldCheck, Zap } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const metrics = [
    { value: '+R$ 20M', label: 'Transacionados em infraestruturas' },
    { value: '99.99%', label: 'Uptime em operações core' },
    { value: 'SLA Alta', label: 'Disponibilidade e latência' },
    { value: 'Tier-Bank', label: 'Segurança de dados padrão' },
];

const highlights = [
    { icon: Cpu, text: 'Arquitetura Sustentável' },
    { icon: ShieldCheck, text: 'Segurança Nível Bancário' },
    { icon: Zap, text: 'Alta Performance' },
];

export function Hero() {
    const { openContactModal } = useModal();

    return (
        <section className="relative flex min-h-[90vh] flex-col justify-center overflow-hidden bg-[var(--bg-dark)]">
            <div className="absolute inset-0 pointer-events-none">
                <div
                    className="absolute right-[-10%] top-[-20%] h-[600px] w-[600px] rounded-full opacity-[0.03]"
                    style={{
                        background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)',
                    }}
                />
                <div
                    className="absolute bottom-[-10%] left-[-5%] h-[400px] w-[400px] rounded-full opacity-[0.02]"
                    style={{
                        background: 'radial-gradient(circle, var(--highlight) 0%, transparent 70%)',
                    }}
                />
                {/* Visual tech grid to suggest architecture/structure */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.4) 1px, transparent 1px),
                                          linear-gradient(90deg, rgba(255, 255, 255, 0.4) 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                    }}
                />
            </div>

            <div className="container relative z-10 pt-20">
                <div className="max-w-3xl">
                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6"
                    >
                        <span className="on-dark-kicker inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-widest">
                            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent-light)] animate-pulse" />
                            Venture Builder & Elite Engineering
                        </span>
                    </m.div>

                    <m.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="on-dark-heading mb-6"
                    >
                        Arquitetura robusta para produtos em{' '}
                        <span className="text-[var(--accent-light)]">escala</span>
                    </m.h1>

                    <m.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="on-dark-copy mb-8 max-w-xl text-xl leading-relaxed"
                    >
                        Engenharia de software nível enterprise, consultoria estratégica e venture building. Construímos e protegemos ecossistemas digitais para negócios que não podem falhar.
                    </m.p>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="mb-10 flex flex-wrap gap-4"
                    >
                        {highlights.map((item) => (
                            <div key={item.text} className="on-dark-meta flex items-center gap-2 text-sm">
                                <item.icon size={16} className="text-[var(--accent-light)]" strokeWidth={2} />
                                <span className="font-medium">{item.text}</span>
                            </div>
                        ))}
                    </m.div>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-wrap gap-4"
                    >
                        <button
                            onClick={openContactModal}
                            className="btn shadow-lg shadow-[var(--accent)]/20 hover:shadow-xl hover:shadow-[var(--accent)]/30"
                        >
                            Iniciar projeto corporativo
                            <ArrowRight size={18} />
                        </button>
                        <a href="#trabalhos" className="btn btn-outline on-dark-outline-button">
                            Nossas arquiteturas
                        </a>
                    </m.div>
                </div>
            </div>

            <m.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="relative z-10 mt-auto"
            >
                {/* Logo Wall / Trust Signals */}
                <div className="border-t border-white/5 bg-white/[0.01] overflow-hidden">
                    <div className="container py-8">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60">
                            <span className="text-xs font-semibold tracking-widest uppercase text-white/50">
                                Powered by
                            </span>
                            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                                {/* Placeholders for Trust Sigals. For real production, use explicit SVG logos. */}
                                <div className="text-sm font-bold tracking-widest text-[#f8fbff] uppercase">PostgreSQL</div>
                                <div className="text-sm font-bold tracking-widest text-[#f8fbff] uppercase">AWS / Cloud</div>
                                <div className="text-sm font-bold tracking-widest text-[#f8fbff] uppercase">TypeScript</div>
                                <div className="text-sm font-bold tracking-widest text-[#f8fbff] uppercase">tRPC / GraphQL</div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="border-t border-white/5 py-8">
                        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                            {metrics.map((metric, index) => (
                                <m.div
                                    key={metric.label}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="text-center md:text-left"
                                >
                                    <div className="on-dark-heading mb-1 text-2xl font-bold md:text-3xl">
                                        {metric.value}
                                    </div>
                                    <div className="on-dark-meta text-xs md:text-sm font-medium">
                                        {metric.label}
                                    </div>
                                </m.div>
                            ))}
                        </div>
                    </div>
                </div>
            </m.div>
        </section>
    );
}

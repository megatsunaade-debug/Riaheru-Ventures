import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

const commitments = ['Resposta objetiva', 'Contexto protegido', 'Próximo passo claro'];

export function PreFooterCTA() {
    const { openContactModal } = useModal();
    const location = useLocation();

    return (
        <section className="relative overflow-hidden bg-[#070a12] py-16 text-white md:py-20">
            <div
                className="pointer-events-none absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(rgba(231,235,240,0.1) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(231,235,240,0.1) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container relative z-10">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto max-w-6xl text-center"
                >
                    <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Próximo passo
                    </span>

                    <h2 className="on-dark-heading mx-auto mt-6 max-w-6xl text-4xl font-bold leading-tight tracking-normal md:text-6xl">
                        Traga o desafio. Vamos definir o <span className="text-[var(--accent-light)]">caminho técnico</span>.
                    </h2>

                    <p className="on-dark-copy mx-auto mt-6 max-w-4xl text-lg leading-relaxed md:text-xl">
                        Em uma conversa objetiva, entendemos o estágio, o risco e a urgência para indicar se faz sentido Venture Build, squad dedicado ou arquitetura aplicada.
                    </p>

                    <div className="mt-9">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={() => openContactModal({ source: 'final_cta', page: location.pathname })}
                            className="btn-shimmer text-base"
                        >
                            Iniciar conversa
                            <ArrowRight size={20} />
                        </Button>
                    </div>

                    <div className="on-dark-meta mt-9 flex flex-wrap items-center justify-center gap-5 text-sm">
                        {commitments.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 size={17} className="text-emerald-400" strokeWidth={1.8} />
                                {item}
                            </div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}

import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

const commitments = ['Resposta objetiva', 'Contexto protegido', 'Próximo passo claro'];

export function PreFooterCTA() {
    const { openContactModal } = useModal();

    return (
        <section className="relative overflow-hidden bg-[#070a12] py-20 text-white md:py-28">
            <div
                className="pointer-events-none absolute inset-0 opacity-[0.06]"
                style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.48) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.48) 1px, transparent 1px)`,
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="container relative z-10">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                        Próximo passo
                    </span>

                    <h2 className="on-dark-heading mt-6 text-4xl font-bold leading-tight tracking-normal md:text-6xl">
                        Traga o problema. A gente organiza o caminho técnico.
                    </h2>

                    <p className="on-dark-copy mx-auto mt-6 max-w-2xl text-lg leading-relaxed md:text-xl">
                        Em uma primeira conversa, entendemos o estágio do negócio, os riscos do sistema e qual formato de parceria faz sentido para avançar com segurança.
                    </p>

                    <div className="mt-9">
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={openContactModal}
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

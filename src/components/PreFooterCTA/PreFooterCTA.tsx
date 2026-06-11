import { ArrowRight, CheckCircle2 } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';

const commitments = ['Resposta objetiva', 'Contexto protegido', 'Próximo passo claro'];

export function PreFooterCTA() {
    const { openContactModal } = useModal();

    return (
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--bg)] py-24 md:py-32">
            <div className="grid-texture pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
            <div
                className="pointer-events-none absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-[var(--accent)]/40 to-transparent"
                aria-hidden="true"
            />

            <div className="container relative z-10">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="mono-label mono-label--accent justify-center">Próximo passo</span>

                    <h2 className="mt-7 text-pretty text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--text)] md:text-6xl">
                        Traga o problema.{' '}
                        <span className="text-[var(--text-dim)]">A gente organiza o caminho técnico.</span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
                        Em uma primeira conversa, entendemos o estágio do negócio, os riscos
                        do sistema e qual formato de parceria faz sentido para avançar com
                        segurança.
                    </p>

                    <div className="mt-9">
                        <button
                            type="button"
                            onClick={openContactModal}
                            className="btn btn-primary min-h-14 px-8 py-4 text-base"
                        >
                            Iniciar conversa
                            <ArrowRight size={19} />
                        </button>
                    </div>

                    <div className="mt-9 flex flex-wrap items-center justify-center gap-6 text-sm text-[var(--text-muted)]">
                        {commitments.map((item) => (
                            <div key={item} className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[var(--accent)]" strokeWidth={1.8} />
                                {item}
                            </div>
                        ))}
                    </div>
                </m.div>
            </div>
        </section>
    );
}

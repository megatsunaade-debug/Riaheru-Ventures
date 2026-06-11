import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

import { m } from '@/lib/motion';
import { CONTACT_INFO } from '../../constants';
import { useModal } from '../../hooks/useModal';

const signals = [
    'Seu produto depende de planilhas, retrabalho ou decisões manuais demais.',
    'A stack atual cresceu sem governança e agora limita velocidade, segurança ou clareza.',
    'A empresa precisa lançar, modernizar ou escalar um sistema sem montar uma área técnica inteira do zero.',
];

export function Newsletter() {
    const { openContactModal } = useModal();

    return (
        <section className="border-b border-[var(--border)] bg-[var(--bg-2)] py-24 md:py-28">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--bg-3)]"
                >
                    <div className="grid gap-px bg-[var(--border)] lg:grid-cols-[1.1fr_0.9fr]">
                        <div className="bg-[var(--bg-3)] p-8 md:p-12">
                            <span className="mono-label mono-label--accent">Quando chamar a Riaheru</span>
                            <h2 className="mt-6 max-w-2xl text-pretty text-3xl font-semibold leading-tight tracking-tight text-[var(--text)] md:text-[2.6rem]">
                                Se a operação já depende do software, ele precisa ser tratado
                                como ativo estratégico.
                            </h2>
                            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[var(--text-muted)]">
                                A conversa inicial serve para entender risco, urgência,
                                maturidade técnica e o melhor formato de parceria: produto,
                                squad, arquitetura ou sustentação evolutiva.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <button
                                    type="button"
                                    onClick={openContactModal}
                                    className="btn btn-primary min-h-13 px-7 py-3.5 text-base"
                                >
                                    Abrir diagnóstico
                                    <ArrowRight size={18} />
                                </button>
                                <a
                                    href={CONTACT_INFO.LINKEDIN}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline min-h-13 px-7 py-3.5 text-base"
                                >
                                    LinkedIn
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="bg-[var(--bg-2)] p-8 md:p-12">
                            <div className="flex items-center gap-3">
                                <MessageCircle size={20} className="text-[var(--accent)]" strokeWidth={1.7} />
                                <h3 className="text-lg font-semibold tracking-tight text-[var(--text)]">
                                    Sinais de prioridade
                                </h3>
                            </div>

                            <div className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
                                {signals.map((signal, index) => (
                                    <div key={signal} className="flex gap-4 py-5">
                                        <span className="font-mono text-xs text-[var(--text-dim)]">
                                            {String(index + 1).padStart(2, '0')}
                                        </span>
                                        <p className="text-sm leading-relaxed text-[var(--text-muted)]">
                                            {signal}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

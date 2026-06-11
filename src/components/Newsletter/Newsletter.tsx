import { ArrowRight, ArrowUpRight, MessageCircle } from 'lucide-react';

import { m } from '@/lib/motion';
import { CONTACT_INFO } from '../../constants';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

const signals = [
    'Seu produto depende de planilhas, retrabalho ou decisões manuais demais.',
    'A stack atual cresceu sem governança e agora limita velocidade, segurança ou clareza.',
    'A empresa precisa lançar, modernizar ou escalar um sistema sem montar uma área técnica inteira do zero.',
];

export function Newsletter() {
    const { openContactModal } = useModal();

    return (
        <section className="bg-[var(--off-white)] py-20 md:py-24">
            <div className="container">
                <m.div
                    initial={false}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55, ease: 'easeOut' }}
                    className="overflow-hidden rounded-lg border border-[color:rgba(12,18,34,0.08)] bg-[#0c1222] shadow-[var(--shadow-lg)]"
                >
                    <div className="grid gap-0 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
                        <div className="p-8 md:p-12">
                            <span className="on-dark-kicker inline-flex rounded-lg border px-4 py-2 text-xs font-semibold uppercase tracking-normal">
                                Quando chamar a Riaheru
                            </span>
                            <h2 className="on-dark-heading mt-6 max-w-2xl text-4xl font-bold leading-tight tracking-normal md:text-5xl">
                                Se a operação já depende do software, ele precisa ser tratado como ativo estratégico.
                            </h2>
                            <p className="on-dark-copy mt-5 max-w-2xl text-lg leading-relaxed">
                                A conversa inicial serve para entender risco, urgência, maturidade técnica e o melhor formato de parceria: produto, squad, arquitetura ou sustentação evolutiva.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-4">
                                <Button
                                    variant="primary"
                                    onClick={openContactModal}
                                    className="min-h-14 px-7 py-4 text-base"
                                >
                                    Abrir diagnóstico
                                    <ArrowRight size={18} />
                                </Button>
                                <a
                                    href={CONTACT_INFO.LINKEDIN}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn btn-outline on-dark-outline-button min-h-14 px-7 py-4 text-base"
                                >
                                    LinkedIn
                                    <ArrowUpRight size={18} />
                                </a>
                            </div>
                        </div>

                        <div className="border-t border-white/10 bg-white/[0.03] p-8 md:p-12 lg:border-l lg:border-t-0">
                            <div className="flex items-center gap-3 text-white">
                                <MessageCircle size={22} className="text-[var(--accent-light)]" strokeWidth={1.8} />
                                <h3 className="on-dark-heading text-xl font-semibold tracking-normal">
                                    Sinais de prioridade
                                </h3>
                            </div>

                            <div className="mt-7 divide-y divide-white/10 border-y border-white/10">
                                {signals.map((signal) => (
                                    <p key={signal} className="on-dark-copy py-5 text-sm leading-relaxed">
                                        {signal}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

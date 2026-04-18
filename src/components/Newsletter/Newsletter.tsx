import { ArrowUpRight, MessageCircle, Sparkles } from 'lucide-react';

import { m } from '@/lib/motion';
import { CONTACT_INFO } from '../../constants';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

export function Newsletter() {
    const { openContactModal } = useModal();

    return (
        <section className="bg-[var(--off-white)] py-20 md:py-24">
            <div className="container">
                <m.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.55 }}
                    className="overflow-hidden rounded-[32px] border border-[color:rgba(12,18,34,0.08)] bg-[linear-gradient(135deg,#0c1222_0%,#102541_55%,#163154_100%)] p-8 shadow-[var(--shadow-lg)] md:p-12"
                >
                    <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(280px,0.7fr)] lg:items-center">
                        <div>
                            <span className="on-dark-kicker inline-flex items-center gap-2 rounded-full px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em]">
                                <Sparkles size={14} />
                                Radar Riaheru
                            </span>
                            <h2 className="on-dark-heading mt-6 max-w-2xl text-4xl font-bold leading-[1.05] md:text-5xl">
                                Atualizações reais,
                                <span className="text-[var(--accent-light)]"> sem captura fake.</span>
                            </h2>
                            <p className="on-dark-copy mt-5 max-w-2xl text-lg leading-relaxed">
                                Enquanto a newsletter ainda não está integrada, concentramos novidades em conversas diretas e no LinkedIn. Sem formulário ilusório, sem promessa vazia.
                            </p>
                            <div className="mt-8 flex flex-wrap gap-4">
                                <a
                                    href={CONTACT_INFO.LINKEDIN}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn"
                                >
                                    Acompanhar no LinkedIn
                                    <ArrowUpRight size={18} />
                                </a>
                                <Button
                                    variant="outline"
                                    onClick={openContactModal}
                                    className="on-dark-outline-button"
                                >
                                    Abrir conversa
                                    <MessageCircle size={18} />
                                </Button>
                            </div>
                        </div>

                        <div className="grid gap-4">
                            {[
                                'Atualizações de cases e bastidores de produto.',
                                'Pontos de vista sobre arquitetura, IA aplicada e integrações.',
                                'Contato direto quando fizer mais sentido conversar do que capturar lead.',
                            ].map((item) => (
                                <div
                                    key={item}
                                    className="on-dark-panel rounded-3xl px-5 py-5 text-sm leading-relaxed backdrop-blur-sm"
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

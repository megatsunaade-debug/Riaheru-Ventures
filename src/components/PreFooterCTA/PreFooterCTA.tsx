import { ArrowRight } from 'lucide-react';

import { m } from '@/lib/motion';
import { useModal } from '../../hooks/useModal';
import { Button } from '../ui/Button';

export function PreFooterCTA() {
    const { openContactModal } = useModal();

    return (
        <section className="relative overflow-hidden bg-[var(--bg-dark)] py-24 md:py-32">
            <div
                className="absolute inset-0 opacity-35"
                style={{
                    backgroundImage: `
                        radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0),
                        linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))
                    `,
                    backgroundSize: '22px 22px, 100% 100%',
                }}
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(76,154,255,0.22),transparent_35%),radial-gradient(circle_at_bottom,rgba(255,107,53,0.16),transparent_32%)]" />

            <div className="container relative z-10 max-w-4xl text-center">
                <m.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    <span className="on-dark-kicker inline-block rounded-full px-4 py-2 text-sm font-medium uppercase tracking-wider">
                        Pronto para começar?
                    </span>

                    <h2 className="on-dark-heading text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                        Transforme sua ideia em{' '}
                        <span className="text-[var(--accent-light)]">
                            realidade
                        </span>
                    </h2>

                    <p className="on-dark-copy mx-auto max-w-2xl text-lg leading-relaxed md:text-xl">
                        Agende uma conversa sem compromisso e descubra como podemos acelerar o desenvolvimento do seu próximo projeto.
                    </p>

                    <m.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="pt-4"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={openContactModal}
                            className="btn-shimmer text-lg"
                        >
                            Iniciar projeto
                            <ArrowRight size={20} />
                        </Button>
                    </m.div>

                    <div className="on-dark-meta flex flex-wrap items-center justify-center gap-8 pt-8 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            Resposta em 24h
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            Sem compromisso
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-2 w-2 rounded-full bg-emerald-400" />
                            100% confidencial
                        </div>
                    </div>
                </m.div>
            </div>
        </section>
    );
}

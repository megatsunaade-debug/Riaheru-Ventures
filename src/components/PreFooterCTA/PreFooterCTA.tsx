import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export function PreFooterCTA() {
    const { openContactModal } = useModal();

    return (
        <section className="relative py-24 md:py-32 bg-[var(--bg-dark)] overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-dot-pattern opacity-40" />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-dark)] via-transparent to-[var(--bg-dark)]" />

            {/* Content */}
            <div className="container relative z-10 max-w-4xl text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8"
                >
                    {/* Tag */}
                    <span className="inline-block px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/60 text-sm font-medium tracking-wider uppercase">
                        Pronto para começar?
                    </span>

                    {/* Headline */}
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Transforme sua ideia em{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                            realidade
                        </span>
                    </h2>

                    {/* Subtext */}
                    <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
                        Agende uma conversa sem compromisso e descubra como podemos
                        acelerar o desenvolvimento do seu próximo projeto.
                    </p>

                    {/* CTA Button */}
                    <motion.div
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
                            Iniciar Projeto
                            <ArrowRight size={20} />
                        </Button>
                    </motion.div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap justify-center items-center gap-8 pt-8 text-white/40 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            Resposta em 24h
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            Sem Compromisso
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-emerald-400" />
                            100% Confidencial
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

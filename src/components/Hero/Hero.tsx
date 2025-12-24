import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '../ui/Button';
import { useModal } from '../../context/ModalContext';

export function Hero() {
    const { openContactModal } = useModal();
    const handlePortfolioClick = () => {
        const section = document.getElementById('ventures');
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-[var(--bg-dark)] py-20">
            {/* Background Gradient Elements - Clean & Symmetrical without Grid */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Main gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#0c1929] via-[#132238] to-[#0c1929]" />

                {/* Central Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--accent-primary)]/10 rounded-full blur-[120px] animate-pulse-glow" />

                {/* Corner Glows */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[var(--accent-primary)]/5 rounded-full blur-[100px]" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[var(--accent-secondary)]/5 rounded-full blur-[100px]" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4">
                <div className="max-w-7xl mx-auto text-center flex flex-col items-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-10 inline-flex items-center gap-4 px-16 py-8 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-light)] text-sm font-bold tracking-[0.2em] uppercase shadow-2xl shadow-[var(--accent-primary)]/20 hover:border-[var(--accent-primary)]/50 transition-all duration-500 cursor-default"
                    >
                        <Sparkles size={16} className="text-[var(--accent-primary)]" />
                        Software House & Venture Builder
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tighter text-white mb-8 leading-[1.1]"
                    >
                        Soluções de Software{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent-primary)]">
                            Inovadoras
                        </span>
                    </motion.h1>

                    {/* Subheadline - Vertically aligned items */}
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-xl md:text-2xl text-[var(--text-muted-light)] mb-12 leading-relaxed max-w-2xl mx-auto font-light"
                    >
                        Unimos <strong className="text-white font-semibold">Engenharia de Software</strong>,<br className="hidden md:block" />
                        Consultoria Estratégica e Venture Building<br className="hidden md:block" />
                        para transformar ideias em ativos digitais de alto valor.
                    </motion.p>

                    {/* Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-24"
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            onClick={openContactModal}
                            className="text-lg min-w-[200px]"
                        >
                            Iniciar Projeto
                            <ArrowRight size={20} />
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            type="button"
                            onClick={handlePortfolioClick}
                            className="text-lg min-w-[200px]"
                        >
                            Conhecer Portfólio
                        </Button>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                        className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 pt-12 border-t border-white/10"
                    >
                        {[
                            { label: 'Projeto Entregue', value: '1' },
                            { label: 'Projetos em Andamento', value: '3' },
                            { label: 'Retorno Gerado', value: 'R$ 800k+' },
                            { label: 'Satisfação', value: '100%' },
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center">
                                {/* Fixed height container aligned to bottom for perfect text baseline */}
                                <div className="h-20 flex items-end justify-center pb-2">
                                    <div className="text-4xl lg:text-5xl font-bold text-white whitespace-nowrap leading-none tracking-tight">{item.value}</div>
                                </div>
                                <div className="text-sm text-white/50 uppercase tracking-widest font-semibold">{item.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

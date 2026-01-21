import { motion } from 'framer-motion';
import { Mail, Send, Sparkles, CheckCircle2 } from 'lucide-react';
import { useState, type FormEvent } from 'react';

export function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const validateEmail = (email: string) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setErrorMessage('');

        if (!email || !validateEmail(email)) {
            setStatus('error');
            setErrorMessage('Por favor, insira um e-mail válido');
            return;
        }

        setStatus('loading');

        try {
            // TODO: Integrar com serviço de newsletter (Mailchimp, SendGrid, etc)
            // Simulando chamada de API
            await new Promise((resolve) => setTimeout(resolve, 1500));

            // Log para desenvolvimento
            console.log('Newsletter subscription:', email);

            setStatus('success');
            setEmail('');

            // Reset status após 3 segundos
            setTimeout(() => {
                setStatus('idle');
            }, 3000);
        } catch (error) {
            setStatus('error');
            setErrorMessage('Erro ao processar inscrição. Tente novamente.');
            console.error('Newsletter error:', error);
        }
    };

    return (
        <section className="relative w-full bg-gradient-to-br from-[#0c1929] via-[#132238] to-[#0c1929] overflow-hidden flex flex-col justify-center items-center py-24 md:py-32">
            {/* Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Glows */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--accent-primary)]/10 rounded-full blur-[120px] animate-pulse-glow" />
            </div>

            <div className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
                <div className="w-full max-w-4xl text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-12"
                    >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full border border-[var(--accent-primary)]/30 bg-[var(--accent-primary)]/10 text-[var(--accent-light)] text-xs font-bold tracking-[0.15em] uppercase shadow-lg shadow-[var(--accent-primary)]/10 mb-8">
                            <Sparkles size={14} className="text-[var(--accent-primary)]" />
                            Newsletter
                        </div>

                        {/* Headline */}
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter text-white mb-6 leading-[1.1]">
                            Fique por dentro das{' '}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-light)] to-[var(--accent-primary)]">
                                Inovações
                            </span>
                        </h2>

                        {/* Description */}
                        <p className="text-lg md:text-xl text-[var(--text-muted-light)] leading-relaxed max-w-2xl mx-auto">
                            Receba insights exclusivos sobre tecnologia, desenvolvimento de software e tendências do mercado diretamente no seu e-mail.
                        </p>
                    </motion.div>

                    {/* Newsletter Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative w-full"
                    >
                        <form onSubmit={handleSubmit} className="relative w-full">
                            <div className="relative flex flex-col sm:flex-row gap-4 p-2 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl w-full">
                                {/* Input Wrapper */}
                                <div className="relative flex-1 min-w-0">
                                    <Mail
                                        className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40 pointer-events-none"
                                        size={20}
                                    />
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value);
                                            if (status === 'error') {
                                                setStatus('idle');
                                                setErrorMessage('');
                                            }
                                        }}
                                        placeholder="seu@email.com"
                                        disabled={status === 'loading' || status === 'success'}
                                        className="w-full pl-12 pr-4 py-4 bg-transparent text-white placeholder:text-white/40 outline-none text-base disabled:opacity-50 disabled:cursor-not-allowed"
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={status === 'loading' || status === 'success'}
                                    whileHover={status === 'idle' || status === 'error' ? { scale: 1.02 } : {}}
                                    whileTap={status === 'idle' || status === 'error' ? { scale: 0.98 } : {}}
                                    className={`
                                        inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-semibold text-base
                                        transition-all duration-300 whitespace-nowrap min-w-[160px] shrink-0
                                        ${status === 'success'
                                            ? 'bg-emerald-500 text-white cursor-default'
                                            : 'bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] text-white hover:shadow-lg hover:shadow-[var(--accent-primary)]/30'
                                        }
                                        ${status === 'loading' ? 'opacity-80 cursor-wait' : ''}
                                        ${status === 'idle' || status === 'error' ? 'hover:brightness-110' : ''}
                                        disabled:cursor-not-allowed
                                    `}
                                >
                                    {status === 'loading' && (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Enviando...
                                        </>
                                    )}
                                    {status === 'success' && (
                                        <>
                                            <CheckCircle2 size={20} />
                                            Inscrito!
                                        </>
                                    )}
                                    {(status === 'idle' || status === 'error') && (
                                        <>
                                            Inscrever-se
                                            <Send size={18} />
                                        </>
                                    )}
                                </motion.button>
                            </div>

                            {/* Error Message */}
                            {status === 'error' && errorMessage && (
                                <motion.p
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="text-red-400 text-sm mt-3 text-center"
                                >
                                    {errorMessage}
                                </motion.p>
                            )}
                        </form>

                        {/* Trust Indicators */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-8 text-sm text-white/40"
                        >
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[var(--accent-primary)] shrink-0" />
                                <span>Sem spam</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[var(--accent-primary)] shrink-0" />
                                <span>Conteúdo exclusivo</span>
                            </div>
                            <div className="hidden sm:block w-1 h-1 rounded-full bg-white/20" />
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={16} className="text-[var(--accent-primary)] shrink-0" />
                                <span>Cancele a qualquer momento</span>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

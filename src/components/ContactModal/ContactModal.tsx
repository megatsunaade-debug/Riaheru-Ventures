import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle } from 'lucide-react';
import { useModal } from '../../context/ModalContext';
import { useEffect, useRef, useState } from 'react';
import { CONTACT_INFO } from '../../constants';

export function ContactModal() {
    const { isContactOpen, closeContactModal } = useModal();
    const [isLoading, setIsLoading] = useState(false);
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [consentError, setConsentError] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFieldRef = useRef<HTMLInputElement>(null);
    const lastActiveRef = useRef<HTMLElement | null>(null);


    const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? CONTACT_INFO.EMAIL;

    useEffect(() => {
        if (!isContactOpen) {
            return;
        }

        lastActiveRef.current = document.activeElement as HTMLElement | null;
        const focusTimer = window.setTimeout(() => {
            firstFieldRef.current?.focus();
        }, 0);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                event.preventDefault();
                closeContactModal();
                return;
            }

            if (event.key !== 'Tab') {
                return;
            }

            const focusable = modalRef.current?.querySelectorAll<HTMLElement>(
                'button, [href], input, textarea, select, [tabindex]:not([tabindex="-1"])'
            );

            if (!focusable || focusable.length === 0) {
                return;
            }

            const first = focusable[0];
            const last = focusable[focusable.length - 1];

            if (event.shiftKey && document.activeElement === first) {
                event.preventDefault();
                last.focus();
            } else if (!event.shiftKey && document.activeElement === last) {
                event.preventDefault();
                first.focus();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';

        return () => {
            window.clearTimeout(focusTimer);
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = previousOverflow;
            lastActiveRef.current?.focus();
        };
    }, [isContactOpen, closeContactModal]);

    const buildMailto = (name: string, email: string, message: string) => {
        const subject = encodeURIComponent('Novo contato - Riaheru');
        const body = encodeURIComponent(
            `Nome: ${name}\nEmail: ${email}\n\nMensagem:\n${message}`
        );
        return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validar consentimento
        if (!privacyConsent) {
            setConsentError(true);
            return;
        }
        setConsentError(false);
        setIsLoading(true);

        const formData = new FormData(e.currentTarget);
        const name = String(formData.get('nome') ?? '').trim();
        const email = String(formData.get('email') ?? '').trim();
        const empresa = String(formData.get('empresa') ?? '').trim();
        const telefone = String(formData.get('telefone') ?? '').trim();
        const message = String(formData.get('mensagem') ?? '').trim();

        try {
            if (contactEndpoint) {
                const response = await fetch(contactEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                    },
                    body: JSON.stringify({ name, email, empresa, telefone, message, privacyConsent: true }),
                });

                if (!response.ok) {
                    throw new Error('Falha ao enviar o contato.');
                }
            } else {
                window.location.href = buildMailto(name, email, message);
            }

            e.currentTarget.reset();
            setPrivacyConsent(false);
            closeContactModal();
            alert('Obrigado! Recebemos sua mensagem e entraremos em contato em breve.');
        } catch (error) {
            console.error(error);
            alert('Não conseguimos enviar sua mensagem agora. Tente novamente em instantes.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isContactOpen && (
                <div className="fixed inset-0 z-[100]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContactModal}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    {/* Modal Container */}
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                ref={modalRef}
                                className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={closeContactModal}
                                    className="absolute top-5 right-5 z-10 p-2 rounded-full text-gray-400 hover:bg-gray-100 hover:text-gray-600 transition-colors"
                                    aria-label="Fechar"
                                >
                                    <X size={22} strokeWidth={2} />
                                </button>

                                {/* Content */}
                                <div style={{ padding: '3.5rem 2.5rem 2.5rem 2.5rem' }}>
                                    {/* Header */}
                                    <div className="mb-8">
                                        <h3 className="text-2xl md:text-3xl font-bold text-gray-900" id="modal-title">
                                            Vamos Conversar?
                                        </h3>
                                        <p className="mt-3 text-gray-500 text-base">
                                            Transforme sua ideia em software de alta performance.
                                        </p>
                                    </div>

                                    {/* Form */}
                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Nome
                                                </label>
                                                <input
                                                    id="nome"
                                                    name="nome"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    ref={firstFieldRef}
                                                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 focus:bg-white"
                                                    placeholder="Seu nome completo"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Email Corporativo
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 focus:bg-white"
                                                    placeholder="voce@empresa.com"
                                                />
                                            </div>

                                            {/* Campos opcionais */}
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="empresa" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        Empresa <span className="text-gray-400 font-normal">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="empresa"
                                                        name="empresa"
                                                        type="text"
                                                        autoComplete="organization"
                                                        className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 focus:bg-white"
                                                        placeholder="Nome da empresa"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                        Telefone <span className="text-gray-400 font-normal">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="telefone"
                                                        name="telefone"
                                                        type="tel"
                                                        autoComplete="tel"
                                                        className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 focus:bg-white"
                                                        placeholder="(11) 99999-9999"
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1.5">
                                                    Como podemos ajudar?
                                                </label>
                                                <textarea
                                                    id="mensagem"
                                                    name="mensagem"
                                                    required
                                                    rows={4}
                                                    className="w-full px-4 py-3 text-gray-900 bg-gray-50 border border-gray-200 rounded-xl outline-none transition-all focus:border-[var(--accent-primary)] focus:ring-2 focus:ring-[var(--accent-primary)]/20 focus:bg-white resize-none"
                                                    placeholder="Descreva brevemente seu projeto..."
                                                />
                                            </div>

                                            {/* Checkbox de consentimento */}
                                            <div className="pt-2">
                                                <label className="flex items-start gap-3 cursor-pointer group">
                                                    <div className="relative flex-shrink-0 mt-0.5">
                                                        <input
                                                            type="checkbox"
                                                            data-testid="privacy-consent"
                                                            checked={privacyConsent}
                                                            onChange={(e) => {
                                                                setPrivacyConsent(e.target.checked);
                                                                if (e.target.checked) setConsentError(false);
                                                            }}
                                                            className="sr-only peer"
                                                        />
                                                        <div className={`w-5 h-5 rounded border-2 transition-all duration-200 flex items-center justify-center
                                                            ${privacyConsent
                                                                ? 'bg-[var(--accent-primary)] border-[var(--accent-primary)]'
                                                                : consentError
                                                                    ? 'border-red-400 bg-red-50'
                                                                    : 'border-gray-300 bg-white group-hover:border-gray-400'
                                                            }`}
                                                        >
                                                            {privacyConsent && (
                                                                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className={`text-sm leading-relaxed ${consentError ? 'text-red-600' : 'text-gray-600'}`}>
                                                        Li e concordo com a{' '}
                                                        <a
                                                            href="/Politica-de-Privacidade-Riaheru-Ventures TESTE.docx"
                                                            download
                                                            className="text-[var(--accent-primary)] hover:underline font-medium"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            Política de Privacidade
                                                        </a>
                                                        {' '}e autorizo o tratamento dos meus dados pessoais para fins de contato comercial.
                                                    </span>
                                                </label>
                                                {consentError && (
                                                    <p data-testid="consent-error" className="mt-2 text-sm text-red-500 flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                                        </svg>
                                                        É necessário concordar com a Política de Privacidade para continuar.
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isLoading}
                                            aria-busy={isLoading}
                                            className="w-full mt-8 flex items-center justify-center gap-2 rounded-xl bg-[var(--accent-primary)] hover:bg-[var(--accent-secondary)] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--accent-primary)]/20 transition-all duration-200 disabled:opacity-70"
                                        >
                                            {isLoading ? 'Enviando...' : 'Iniciar Projeto'}
                                            {!isLoading && <Send size={18} />}
                                        </button>
                                    </form>

                                    {/* Divider */}
                                    <div className="relative my-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-white px-3 text-sm text-gray-500">
                                                Ou prefere WhatsApp?
                                            </span>
                                        </div>
                                    </div>

                                    {/* WhatsApp Button */}
                                    <button
                                        type="button"
                                        onClick={() => window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP}`, '_blank')}
                                        className="w-full flex items-center justify-center gap-2 px-6 py-3 text-gray-600 bg-white border-2 border-gray-200 rounded-xl font-medium hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700 transition-all"
                                    >
                                        <MessageCircle size={20} />
                                        Chamar no WhatsApp
                                    </button>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}

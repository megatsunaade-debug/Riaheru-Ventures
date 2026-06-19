import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { AnimatePresence, m } from '@/lib/motion';
import { CONTACT_INFO } from '../../constants';
import { useModal } from '../../hooks/useModal';

type SubmitState =
    | { tone: 'idle'; message: '' }
    | { tone: 'success' | 'error' | 'info'; message: string };

export function ContactModal() {
    const { isContactOpen, closeContactModal, contactIntent } = useModal();
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const [privacyConsent, setPrivacyConsent] = useState(false);
    const [consentError, setConsentError] = useState(false);
    const [submitState, setSubmitState] = useState<SubmitState>({ tone: 'idle', message: '' });
    const modalRef = useRef<HTMLDivElement>(null);
    const firstFieldRef = useRef<HTMLInputElement>(null);
    const lastActiveRef = useRef<HTMLElement | null>(null);

    const contactEndpoint = import.meta.env.VITE_CONTACT_ENDPOINT as string | undefined;
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL ?? CONTACT_INFO.EMAIL;
    const hasDirectEndpoint = Boolean(contactEndpoint);

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

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            window.clearTimeout(focusTimer);
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
            lastActiveRef.current?.focus();
        };
    }, [isContactOpen, closeContactModal]);

    useEffect(() => {
        if (isContactOpen) {
            return;
        }

        setIsLoading(false);
        setPrivacyConsent(false);
        setConsentError(false);
        setSubmitState({ tone: 'idle', message: '' });
    }, [isContactOpen]);

    const buildMailto = (
        name: string,
        email: string,
        empresa: string,
        telefone: string,
        message: string,
    ) => {
        const subject = encodeURIComponent(`Novo projeto - ${name}`);
        const contextLines = [
            contactIntent?.serviceLabel ? `Serviço de interesse: ${contactIntent.serviceLabel}` : '',
            contactIntent?.source ? `Origem do CTA: ${contactIntent.source}` : '',
            `Página: ${contactIntent?.page ?? location.pathname}`,
        ].filter(Boolean);
        const body = encodeURIComponent(
            [
                `Nome: ${name}`,
                `Email: ${email}`,
                empresa ? `Empresa: ${empresa}` : '',
                telefone ? `Telefone: ${telefone}` : '',
                ...contextLines,
                '',
                'Contexto do projeto:',
                message,
            ].filter(Boolean).join('\n')
        );

        return `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!privacyConsent) {
            setConsentError(true);
            return;
        }

        setConsentError(false);
        setSubmitState({ tone: 'idle', message: '' });
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
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        empresa,
                        telefone,
                        message,
                        privacyConsent: true,
                        context: {
                            ...contactIntent,
                            page: contactIntent?.page ?? location.pathname,
                        },
                    }),
                });

                if (!response.ok) {
                    throw new Error('Falha ao enviar o contato.');
                }

                e.currentTarget.reset();
                setPrivacyConsent(false);
                setSubmitState({
                    tone: 'success',
                    message: 'Briefing enviado. Nossa equipe retorna em até 24h úteis.',
                });
            } else {
                window.location.href = buildMailto(name, email, empresa, telefone, message);
                setSubmitState({
                    tone: 'info',
                    message: `Abrimos seu cliente de email com o briefing preenchido para ${contactEmail}. Se preferir, continue pelo WhatsApp.`,
                });
            }
        } catch (error) {
            console.error(error);
            setSubmitState({
                tone: 'error',
                message: 'Não conseguimos concluir agora. Tente novamente em instantes ou siga pelo WhatsApp.',
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AnimatePresence>
            {isContactOpen && (
                <div className="fixed inset-0 z-[100]" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    <m.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeContactModal}
                        className="fixed inset-0 bg-black/70 backdrop-blur-sm"
                    />

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <m.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                ref={modalRef}
                                className="relative w-full max-w-xl rounded-[32px] border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-lg)]"
                            >
                                <button
                                    onClick={closeContactModal}
                                    className="absolute right-5 top-5 z-10 inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--gray-600)] transition-colors hover:bg-[var(--gray-50)] hover:text-[var(--text-dark)]"
                                    aria-label="Fechar"
                                >
                                    <X size={22} strokeWidth={2} />
                                </button>

                                <div className="px-6 pb-6 pt-14 md:px-8 md:pb-8">
                                    <div className="mb-8">
                                        <span className="label label-accent block mb-4">Iniciar projeto</span>
                                        <h3 className="text-2xl font-bold text-gray-900 md:text-3xl" id="modal-title">
                                            Traga o contexto.
                                        </h3>
                                        <p className="mt-3 text-base leading-relaxed text-gray-500">
                                            Compartilhe o cenário, o momento do produto e o que precisa avançar. Responderemos com objetividade.
                                        </p>
                                    </div>

                                    {contactIntent?.serviceLabel && (
                                        <div
                                            data-testid="contact-context"
                                            className="mb-6 rounded-2xl border border-[var(--accent-primary)]/12 bg-[var(--accent-primary)]/6 px-4 py-3 text-sm font-semibold text-[var(--text-dark)]"
                                        >
                                            Serviço de interesse: {contactIntent.serviceLabel}
                                        </div>
                                    )}

                                    {!hasDirectEndpoint && (
                                        <div className="mb-6 rounded-2xl border border-[var(--accent-primary)]/12 bg-[var(--accent-primary)]/6 px-4 py-4 text-sm leading-relaxed text-[var(--text-dark)]">
                                            Ao enviar, abrimos seu cliente de email com o briefing preenchido. É um hand-off explícito, sem simular envio por um backend que ainda não existe.
                                        </div>
                                    )}

                                    {submitState.tone !== 'idle' && (
                                        <div
                                            data-testid="contact-feedback"
                                            role={submitState.tone === 'error' ? 'alert' : 'status'}
                                            className={`mb-6 rounded-2xl px-4 py-4 text-sm leading-relaxed ${submitState.tone === 'error'
                                                ? 'border border-red-200 bg-red-50 text-red-700'
                                                : submitState.tone === 'success'
                                                    ? 'border border-emerald-200 bg-emerald-50 text-emerald-700'
                                                    : 'border border-[var(--accent-primary)]/12 bg-[var(--accent-primary)]/6 text-[var(--text-dark)]'
                                                }`}
                                        >
                                            {submitState.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="nome" className="mb-1.5 block text-sm font-medium text-gray-700">
                                                    Nome
                                                </label>
                                                <input
                                                    id="nome"
                                                    name="nome"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    ref={firstFieldRef}
                                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[var(--accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                                                    placeholder="Seu nome completo"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-gray-700">
                                                    Email corporativo
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[var(--accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                                                    placeholder="voce@empresa.com"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="empresa" className="mb-1.5 block text-sm font-medium text-gray-700">
                                                        Empresa <span className="font-normal text-gray-400">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="empresa"
                                                        name="empresa"
                                                        type="text"
                                                        autoComplete="organization"
                                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[var(--accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                                                        placeholder="Nome da empresa"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="telefone" className="mb-1.5 block text-sm font-medium text-gray-700">
                                                        Telefone <span className="font-normal text-gray-400">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="telefone"
                                                        name="telefone"
                                                        type="tel"
                                                        autoComplete="tel"
                                                        className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[var(--accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                                                        placeholder={CONTACT_INFO.WHATSAPP_DISPLAY}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="mensagem" className="mb-1.5 block text-sm font-medium text-gray-700">
                                                    Como podemos ajudar?
                                                </label>
                                                <textarea
                                                    id="mensagem"
                                                    name="mensagem"
                                                    required
                                                    rows={4}
                                                    className="w-full resize-none rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none transition-all focus:border-[var(--accent-primary)] focus:bg-white focus:ring-2 focus:ring-[var(--accent-primary)]/20"
                                                    placeholder="Descreva brevemente seu projeto..."
                                                />
                                            </div>

                                            <div className="pt-2">
                                                <label className="group flex cursor-pointer items-start gap-3">
                                                    <div className="relative mt-0.5 shrink-0">
                                                        <input
                                                            type="checkbox"
                                                            data-testid="privacy-consent"
                                                            checked={privacyConsent}
                                                            onChange={(event) => {
                                                                setPrivacyConsent(event.target.checked);
                                                                if (event.target.checked) {
                                                                    setConsentError(false);
                                                                }
                                                            }}
                                                            className="sr-only peer"
                                                        />
                                                        <div
                                                            className={`flex h-5 w-5 items-center justify-center rounded border-2 transition-all duration-200 ${privacyConsent
                                                                ? 'border-[var(--accent-primary)] bg-[var(--accent-primary)]'
                                                                : consentError
                                                                    ? 'border-red-400 bg-red-50'
                                                                    : 'border-gray-300 bg-white group-hover:border-gray-400'
                                                                }`}
                                                        >
                                                            {privacyConsent && (
                                                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className={`text-sm leading-relaxed ${consentError ? 'text-red-600' : 'text-gray-600'}`}>
                                                        Li e concordo com a{' '}
                                                        <a
                                                            href="/politica-privacidade-riaheru-ventures.pdf"
                                                            download
                                                            className="font-medium text-[var(--accent-primary)] hover:underline"
                                                            onClick={(event) => event.stopPropagation()}
                                                        >
                                                            Política de Privacidade
                                                        </a>
                                                        {' '}e autorizo o tratamento dos meus dados pessoais para fins de contato comercial.
                                                    </span>
                                                </label>
                                                {consentError && (
                                                    <p data-testid="consent-error" className="mt-2 flex items-center gap-1 text-sm text-red-500">
                                                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
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
                                            className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-[var(--accent-primary)] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[var(--accent-primary)]/20 transition-all duration-200 hover:bg-[var(--accent-secondary)] disabled:opacity-70"
                                        >
                                            {isLoading
                                                ? 'Processando...'
                                                : hasDirectEndpoint
                                                    ? 'Enviar briefing'
                                                    : 'Abrir email com briefing'}
                                            {!isLoading && <Send size={18} />}
                                        </button>
                                    </form>

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

                                    <button
                                        type="button"
                                        onClick={() => window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP}`, '_blank')}
                                        className="flex w-full items-center justify-center gap-2 rounded-2xl border-2 border-gray-200 bg-white px-6 py-3 font-medium text-gray-600 transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-700"
                                    >
                                        <MessageCircle size={20} />
                                        Chamar no WhatsApp
                                    </button>
                                </div>
                            </m.div>
                        </div>
                    </div>
                </div>
            )}
        </AnimatePresence>
    );
}

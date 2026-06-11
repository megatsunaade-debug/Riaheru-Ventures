import { MessageCircle, Send, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { AnimatePresence, m } from '@/lib/motion';
import { CONTACT_INFO } from '../../constants';
import { useModal } from '../../hooks/useModal';

type SubmitState =
    | { tone: 'idle'; message: '' }
    | { tone: 'success' | 'error' | 'info'; message: string };

const fieldClass =
    'w-full rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-[var(--text)] outline-none transition-all placeholder:text-[var(--text-dim)] focus:border-[var(--accent)] focus:bg-[var(--surface-2)] focus:ring-2 focus:ring-[var(--accent)]/20';
const labelClass = 'mb-1.5 block text-sm font-medium text-[var(--text-muted)]';

export function ContactModal() {
    const { isContactOpen, closeContactModal } = useModal();
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
        const body = encodeURIComponent(
            [
                `Nome: ${name}`,
                `Email: ${email}`,
                empresa ? `Empresa: ${empresa}` : '',
                telefone ? `Telefone: ${telefone}` : '',
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
                    body: JSON.stringify({ name, email, empresa, telefone, message, privacyConsent: true }),
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
                        className="fixed inset-0 bg-[color:rgba(3,5,10,0.8)] backdrop-blur-sm"
                    />

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4">
                            <m.div
                                initial={{ opacity: 0, scale: 0.96, y: 18 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.96, y: 18 }}
                                transition={{ duration: 0.2, ease: 'easeOut' }}
                                ref={modalRef}
                                className="relative w-full max-w-xl overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] shadow-[var(--shadow-lg)]"
                            >
                                <div className="grid-texture pointer-events-none absolute inset-0 opacity-40" aria-hidden="true" />
                                <button
                                    onClick={closeContactModal}
                                    className="absolute right-5 top-5 z-10 inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--text-muted)] transition-colors hover:border-[var(--border-strong)] hover:text-[var(--text)]"
                                    aria-label="Fechar"
                                >
                                    <X size={20} strokeWidth={2} />
                                </button>

                                <div className="relative px-6 pb-6 pt-14 md:px-8 md:pb-8">
                                    <div className="mb-8">
                                        <span className="mono-label mono-label--accent">Iniciar projeto</span>
                                        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text)] md:text-3xl" id="modal-title">
                                            Traga o contexto.
                                        </h3>
                                        <p className="mt-3 text-base leading-relaxed text-[var(--text-muted)]">
                                            Compartilhe o cenário, o momento do produto e o que precisa avançar. Responderemos com objetividade.
                                        </p>
                                    </div>

                                    {!hasDirectEndpoint && (
                                        <div className="mb-6 rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-4 text-sm leading-relaxed text-[var(--text-muted)]">
                                            Ao enviar, abrimos seu cliente de email com o briefing preenchido. É um hand-off explícito, sem simular envio por um backend que ainda não existe.
                                        </div>
                                    )}

                                    {submitState.tone !== 'idle' && (
                                        <div
                                            data-testid="contact-feedback"
                                            role={submitState.tone === 'error' ? 'alert' : 'status'}
                                            className={`mb-6 rounded-lg px-4 py-4 text-sm leading-relaxed ${submitState.tone === 'error'
                                                ? 'border border-red-500/30 bg-red-500/10 text-red-300'
                                                : submitState.tone === 'success'
                                                    ? 'border border-emerald-500/30 bg-emerald-500/10 text-emerald-300'
                                                    : 'border border-[var(--accent)]/30 bg-[var(--accent-soft)] text-[var(--text)]'
                                                }`}
                                        >
                                            {submitState.message}
                                        </div>
                                    )}

                                    <form onSubmit={handleSubmit}>
                                        <div className="space-y-5">
                                            <div>
                                                <label htmlFor="nome" className={labelClass}>
                                                    Nome
                                                </label>
                                                <input
                                                    id="nome"
                                                    name="nome"
                                                    type="text"
                                                    required
                                                    autoComplete="name"
                                                    ref={firstFieldRef}
                                                    className={fieldClass}
                                                    placeholder="Seu nome completo"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="email" className={labelClass}>
                                                    Email corporativo
                                                </label>
                                                <input
                                                    id="email"
                                                    name="email"
                                                    type="email"
                                                    required
                                                    autoComplete="email"
                                                    className={fieldClass}
                                                    placeholder="voce@empresa.com"
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                                <div>
                                                    <label htmlFor="empresa" className={labelClass}>
                                                        Empresa <span className="font-normal text-[var(--text-dim)]">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="empresa"
                                                        name="empresa"
                                                        type="text"
                                                        autoComplete="organization"
                                                        className={fieldClass}
                                                        placeholder="Nome da empresa"
                                                    />
                                                </div>
                                                <div>
                                                    <label htmlFor="telefone" className={labelClass}>
                                                        Telefone <span className="font-normal text-[var(--text-dim)]">(opcional)</span>
                                                    </label>
                                                    <input
                                                        id="telefone"
                                                        name="telefone"
                                                        type="tel"
                                                        autoComplete="tel"
                                                        className={fieldClass}
                                                        placeholder={CONTACT_INFO.WHATSAPP_DISPLAY}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="mensagem" className={labelClass}>
                                                    Como podemos ajudar?
                                                </label>
                                                <textarea
                                                    id="mensagem"
                                                    name="mensagem"
                                                    required
                                                    rows={4}
                                                    className={`${fieldClass} resize-none`}
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
                                                                ? 'border-[var(--accent)] bg-[var(--accent)]'
                                                                : consentError
                                                                    ? 'border-red-400 bg-red-500/10'
                                                                    : 'border-[var(--border-strong)] bg-transparent group-hover:border-[var(--text-dim)]'
                                                                }`}
                                                        >
                                                            {privacyConsent && (
                                                                <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                    <span className={`text-sm leading-relaxed ${consentError ? 'text-red-400' : 'text-[var(--text-muted)]'}`}>
                                                        Li e concordo com a{' '}
                                                        <a
                                                            href="/politica-privacidade-riaheru-ventures.pdf"
                                                            download
                                                            className="font-medium text-[var(--accent)] hover:underline"
                                                            onClick={(event) => event.stopPropagation()}
                                                        >
                                                            Política de Privacidade
                                                        </a>
                                                        {' '}e autorizo o tratamento dos meus dados pessoais para fins de contato comercial.
                                                    </span>
                                                </label>
                                                {consentError && (
                                                    <p data-testid="consent-error" className="mt-2 flex items-center gap-1 text-sm text-red-400">
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
                                            className="btn btn-accent mt-8 min-h-13 w-full px-6 py-4 text-base"
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
                                            <div className="w-full border-t border-[var(--border)]"></div>
                                        </div>
                                        <div className="relative flex justify-center">
                                            <span className="bg-[var(--bg-2)] px-3 text-sm text-[var(--text-dim)]">
                                                Ou prefere WhatsApp?
                                            </span>
                                        </div>
                                    </div>

                                    <button
                                        type="button"
                                        onClick={() => window.open(`https://wa.me/${CONTACT_INFO.WHATSAPP}`, '_blank')}
                                        className="btn btn-outline min-h-12 w-full px-6 py-3"
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

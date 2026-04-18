import { useEffect, useRef, useState } from 'react';
import { X } from 'lucide-react';

import { m } from '@/lib/motion';
import { type CookiePreferences } from '../../context/cookie-consent-context';
import { useCookieConsent } from '../../hooks/useCookieConsent';

interface CookieSettingsProps {
    onClose: () => void;
}

export function CookieSettings({ onClose }: CookieSettingsProps) {
    const { preferences, savePreferences, acceptAll } = useCookieConsent();
    const [prefs, setPrefs] = useState<CookiePreferences>(preferences);
    const closeButtonRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.body.style.overflow = 'hidden';
        closeButtonRef.current?.focus();
        document.addEventListener('keydown', handleKeyDown);

        return () => {
            document.body.style.overflow = previousOverflow;
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    const toggle = (id: keyof CookiePreferences) => {
        if (id === 'essential') {
            return;
        }

        setPrefs((current) => ({ ...current, [id]: !current[id] }));
    };

    const save = () => {
        savePreferences(prefs);
        onClose();
    };

    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4"
        >
            <button
                type="button"
                aria-label="Fechar preferências de cookies"
                onClick={onClose}
                className="absolute inset-0 bg-black/35"
            />

            <m.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                role="dialog"
                aria-modal="true"
                aria-labelledby="cookie-settings-title"
                className="relative w-full max-w-lg rounded-[28px] border border-[var(--border-subtle)] bg-white p-6 shadow-[var(--shadow-lg)]"
            >
                <div className="mb-5 flex items-start justify-between gap-4">
                    <div>
                        <h2 id="cookie-settings-title" className="text-xl font-semibold text-[var(--text-dark)]">
                            Preferências de Cookies
                        </h2>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">
                            Controle quais categorias opcionais podem ser ativadas nesta experiência.
                        </p>
                    </div>
                    <button
                        ref={closeButtonRef}
                        onClick={onClose}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border-subtle)] text-[var(--gray-600)] transition-colors hover:bg-[var(--gray-50)] hover:text-[var(--text-dark)]"
                        aria-label="Fechar"
                    >
                        <X size={18} />
                    </button>
                </div>

                <div className="space-y-4">
                    {[
                        {
                            id: 'essential' as const,
                            title: 'Cookies Essenciais',
                            description: 'Necessários para navegação básica, segurança e armazenamento das suas preferências.',
                        },
                        {
                            id: 'functional' as const,
                            title: 'Cookies Funcionais',
                            description: 'Ativam recursos de conveniência, personalização e recordação de contexto.',
                        },
                        {
                            id: 'marketing' as const,
                            title: 'Cookies de Marketing',
                            description: 'Reservados para medições e ações de conversão futuras, sempre com consentimento explícito.',
                        },
                    ].map((item) => (
                        <div key={item.id} className="rounded-3xl border border-[var(--border-subtle)] bg-[var(--gray-50)] p-4">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-sm font-semibold text-[var(--text-dark)]">{item.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">{item.description}</p>
                                </div>

                                <button
                                    type="button"
                                    onClick={() => toggle(item.id)}
                                    disabled={item.id === 'essential'}
                                    aria-pressed={prefs[item.id]}
                                    className={`relative inline-flex h-8 w-14 shrink-0 rounded-full transition-colors ${prefs[item.id] ? 'bg-[var(--accent-primary)]' : 'bg-[var(--gray-200)]'
                                        } ${item.id === 'essential' ? 'opacity-60' : ''}`}
                                >
                                    <m.span
                                        animate={{ x: prefs[item.id] ? 28 : 4 }}
                                        className="absolute top-1 h-6 w-6 rounded-full bg-white shadow-sm"
                                    />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <button
                        onClick={() => {
                            acceptAll();
                            onClose();
                        }}
                        className="btn flex-1 justify-center"
                    >
                        Aceitar tudo
                    </button>
                    <button
                        onClick={save}
                        className="btn btn-outline flex-1 justify-center"
                    >
                        Salvar preferências
                    </button>
                </div>
            </m.div>
        </m.div>
    );
}

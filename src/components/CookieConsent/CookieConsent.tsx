import { Suspense, lazy } from 'react';

import { useCookieConsent } from '../../hooks/useCookieConsent';
import { AnimatePresence, m } from '@/lib/motion';

const LazyCookieSettings = lazy(() => import('./CookieSettings').then((module) => ({ default: module.CookieSettings })));

export function CookieConsent() {
    const {
        showBanner,
        showSettings,
        acceptAll,
        rejectNonEssential,
        openSettings,
        closeSettings,
    } = useCookieConsent();

    return (
        <>
            <AnimatePresence>
                {showBanner && !showSettings && (
                    <m.div
                        data-testid="cookie-banner"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed inset-x-4 bottom-4 z-[200] md:left-4 md:right-auto md:max-w-xl"
                    >
                        <div className="rounded-[28px] border border-[var(--border-subtle)] bg-white/95 p-5 shadow-[var(--shadow-lg)] backdrop-blur-xl">
                            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                                <div className="max-w-md">
                                    <p className="text-sm font-semibold text-[var(--text-dark)]">Usamos cookies com critério</p>
                                    <p className="mt-2 text-sm leading-relaxed text-[var(--gray-600)]">
                                        Guardamos preferências essenciais agora e só ativamos recursos adicionais com o seu consentimento.
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    <button
                                        data-testid="reject-non-essential"
                                        onClick={rejectNonEssential}
                                        className="btn btn-ghost min-h-10 px-4 py-2 text-xs"
                                    >
                                        Apenas essenciais
                                    </button>
                                    <button
                                        data-testid="customize-cookies"
                                        onClick={openSettings}
                                        className="btn btn-outline min-h-10 px-4 py-2 text-xs"
                                    >
                                        Configurar
                                    </button>
                                    <button
                                        data-testid="accept-all-cookies"
                                        onClick={acceptAll}
                                        className="btn min-h-10 px-4 py-2 text-xs"
                                    >
                                        Aceitar
                                    </button>
                                </div>
                            </div>
                        </div>
                    </m.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSettings && (
                    <Suspense
                        fallback={(
                            <div className="fixed inset-0 z-[250] flex items-center justify-center p-4" aria-hidden="true">
                                <div className="absolute inset-0 bg-black/25" />
                                <div className="relative h-[320px] w-full max-w-lg animate-pulse rounded-[28px] border border-[var(--border-subtle)] bg-white shadow-[var(--shadow-lg)]" />
                            </div>
                        )}
                    >
                        <LazyCookieSettings onClose={closeSettings} />
                    </Suspense>
                )}
            </AnimatePresence>
        </>
    );
}

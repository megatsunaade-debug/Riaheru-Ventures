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
                        className="fixed inset-x-3 bottom-3 z-[200] md:bottom-4 md:left-4 md:right-auto md:max-w-xl"
                    >
                        <div className="rounded-2xl border border-[var(--border-subtle)] bg-white/95 p-4 shadow-[var(--shadow-lg)] backdrop-blur-xl md:rounded-[28px] md:p-5">
                            <div className="grid gap-3 md:flex md:items-end md:justify-between md:gap-4">
                                <div className="max-w-md">
                                    <p className="text-sm font-semibold text-[var(--text-dark)]">Cookies com critério</p>
                                    <p className="mt-1 text-xs leading-relaxed text-[var(--gray-600)] md:mt-2 md:text-sm">
                                        Essenciais agora; recursos adicionais só com consentimento.
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-2 md:flex md:flex-wrap">
                                    <button
                                        data-testid="reject-non-essential"
                                        onClick={rejectNonEssential}
                                        className="btn btn-ghost min-h-10 px-3 py-2 text-xs"
                                    >
                                        Essenciais
                                    </button>
                                    <button
                                        data-testid="customize-cookies"
                                        onClick={openSettings}
                                        className="btn btn-outline min-h-10 px-3 py-2 text-xs"
                                    >
                                        Configurar
                                    </button>
                                    <button
                                        data-testid="accept-all-cookies"
                                        onClick={acceptAll}
                                        className="btn min-h-10 px-3 py-2 text-xs"
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

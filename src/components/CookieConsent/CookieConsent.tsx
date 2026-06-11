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
                        className="fixed inset-x-3 bottom-3 z-[200] sm:inset-x-auto sm:left-4 sm:max-w-md"
                    >
                        <div className="rounded-xl border border-[var(--border)] bg-[color:rgba(8,11,20,0.94)] p-4 shadow-[var(--shadow-lg)] backdrop-blur-xl">
                            <div className="grid gap-3">
                                <div>
                                    <p className="text-sm font-semibold leading-tight text-[var(--text)]">Cookies com critério</p>
                                    <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-muted)]">
                                        Usamos o essencial e só ativamos recursos opcionais com consentimento.
                                    </p>
                                </div>
                                <div className="grid grid-cols-3 gap-2">
                                    <button
                                        data-testid="reject-non-essential"
                                        onClick={rejectNonEssential}
                                        className="btn btn-ghost min-h-9 px-2 py-2 text-[0.68rem] sm:px-3 sm:text-xs"
                                    >
                                        Essenciais
                                    </button>
                                    <button
                                        data-testid="customize-cookies"
                                        onClick={openSettings}
                                        className="btn btn-outline min-h-9 px-2 py-2 text-[0.68rem] sm:px-3 sm:text-xs"
                                    >
                                        Configurar
                                    </button>
                                    <button
                                        data-testid="accept-all-cookies"
                                        onClick={acceptAll}
                                        className="btn btn-primary min-h-9 px-2 py-2 text-[0.68rem] sm:px-3 sm:text-xs"
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
                                <div className="absolute inset-0 bg-black/40" />
                                <div className="relative h-[320px] w-full max-w-lg animate-pulse rounded-2xl border border-[var(--border)] bg-[var(--bg-2)] shadow-[var(--shadow-lg)]" />
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

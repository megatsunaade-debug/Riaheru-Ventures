import { motion, AnimatePresence } from 'framer-motion';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { CookieSettings } from './CookieSettings';

export function CookieConsent() {
    const { showBanner, showSettings, acceptAll, openSettings, closeSettings } = useCookieConsent();

    return (
        <>
            <AnimatePresence>
                {showBanner && !showSettings && (
                    <motion.div
                        data-testid="cookie-banner"
                        initial={{ y: 50, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 50, opacity: 0 }}
                        className="fixed bottom-4 left-4 z-[200]"
                    >
                        <div className="bg-white border border-gray-200 rounded-lg shadow-md px-4 py-3 flex items-center gap-4">
                            <span className="text-sm text-gray-600">Usamos cookies</span>
                            <div className="flex gap-2">
                                <button
                                    data-testid="accept-all-cookies"
                                    onClick={acceptAll}
                                    className="text-xs px-3 py-1.5 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent-dark)]"
                                >
                                    OK
                                </button>
                                <button
                                    data-testid="customize-cookies"
                                    onClick={openSettings}
                                    className="text-xs text-gray-400 hover:text-gray-600"
                                >
                                    Configurar
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {showSettings && <CookieSettings onClose={closeSettings} />}
            </AnimatePresence>
        </>
    );
}

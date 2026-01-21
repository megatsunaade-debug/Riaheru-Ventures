import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, Settings, Shield } from 'lucide-react';
import { useCookieConsent } from '../../hooks/useCookieConsent';
import { CookieSettings } from './CookieSettings';

export function CookieConsent() {
    const { showBanner, showSettings, acceptAll, rejectNonEssential, openSettings, closeSettings } = useCookieConsent();

    return (
        <>
            {/* Cookie Banner */}
            <AnimatePresence>
                {showBanner && !showSettings && (
                    <motion.div
                        data-testid="cookie-banner"
                        initial={{ y: 100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                        className="fixed bottom-0 left-0 right-0 z-[200] p-4 md:p-6"
                    >
                        <div className="max-w-4xl mx-auto">
                            <div className="relative bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
                                {/* Gradient border effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-orange-500/10 pointer-events-none" />

                                <div className="relative p-6 md:p-8">
                                    {/* Header */}
                                    <div className="flex items-start gap-4 mb-6">
                                        <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                                            <Cookie className="w-6 h-6 text-amber-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                                                Utilizamos Cookies
                                            </h3>
                                            <p className="text-sm md:text-base text-white/60 leading-relaxed">
                                                Usamos cookies para melhorar sua experiência, personalizar conteúdo e analisar o tráfego do site.
                                                Você pode escolher quais cookies aceitar.{' '}
                                                <a
                                                    href="/Politica-de-Privacidade-Riaheru-Ventures TESTE.docx"
                                                    download
                                                    className="text-amber-400 hover:text-amber-300 underline underline-offset-2 transition-colors"
                                                >
                                                    Política de Privacidade
                                                </a>
                                            </p>
                                        </div>
                                    </div>

                                    {/* Cookie Types Preview */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-6">
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                            <Shield className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                            <div>
                                                <span className="text-sm font-medium text-white">Essenciais</span>
                                                <span className="text-xs text-emerald-400 ml-2">Sempre ativos</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                            <Settings className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                            <span className="text-sm font-medium text-white">Funcionais</span>
                                        </div>
                                        <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/10">
                                            <Cookie className="w-4 h-4 text-purple-400 flex-shrink-0" />
                                            <span className="text-sm font-medium text-white">Marketing</span>
                                        </div>
                                    </div>

                                    {/* Actions */}
                                    <div className="flex flex-col sm:flex-row gap-3">
                                        <button
                                            data-testid="accept-all-cookies"
                                            onClick={acceptAll}
                                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm 
                                                     hover:from-amber-400 hover:to-orange-400 transition-all duration-300 
                                                     shadow-lg shadow-amber-500/20 hover:shadow-amber-500/30"
                                        >
                                            Aceitar Todos
                                        </button>
                                        <button
                                            data-testid="reject-non-essential"
                                            onClick={rejectNonEssential}
                                            className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm
                                                     hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                                        >
                                            Apenas Essenciais
                                        </button>
                                        <button
                                            data-testid="customize-cookies"
                                            onClick={openSettings}
                                            className="px-6 py-3 rounded-xl border border-white/20 text-white/70 font-medium text-sm
                                                     hover:bg-white/5 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                                        >
                                            <Settings className="w-4 h-4" />
                                            <span className="hidden sm:inline">Personalizar</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Cookie Settings Modal */}
            <AnimatePresence>
                {showSettings && (
                    <CookieSettings onClose={closeSettings} />
                )}
            </AnimatePresence>
        </>
    );
}

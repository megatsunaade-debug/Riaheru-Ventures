import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Shield, Settings, BarChart3, Cookie, Check } from 'lucide-react';
import { useCookieConsent, type CookiePreferences } from '../../hooks/useCookieConsent';

interface CookieSettingsProps {
    onClose: () => void;
}

interface CookieCategory {
    id: keyof CookiePreferences;
    name: string;
    description: string;
    icon: typeof Shield;
    iconColor: string;
    bgColor: string;
    required?: boolean;
}

const cookieCategories: CookieCategory[] = [
    {
        id: 'essential',
        name: 'Cookies Essenciais',
        description: 'Necessários para o funcionamento básico do site. Incluem cookies de sessão e preferências fundamentais.',
        icon: Shield,
        iconColor: 'text-emerald-400',
        bgColor: 'from-emerald-500/20 to-emerald-600/10',
        required: true,
    },
    {
        id: 'functional',
        name: 'Cookies Funcionais',
        description: 'Permitem funcionalidades avançadas como chat ao vivo, vídeos e mapas interativos. Melhoram sua experiência de navegação.',
        icon: Settings,
        iconColor: 'text-blue-400',
        bgColor: 'from-blue-500/20 to-blue-600/10',
    },
    {
        id: 'marketing',
        name: 'Cookies de Marketing',
        description: 'Utilizados para rastrear visitantes e exibir anúncios relevantes. Inclui ferramentas como Google Analytics e Meta Pixel.',
        icon: BarChart3,
        iconColor: 'text-purple-400',
        bgColor: 'from-purple-500/20 to-purple-600/10',
    },
];

export function CookieSettings({ onClose }: CookieSettingsProps) {
    const { preferences, savePreferences } = useCookieConsent();
    const [tempPrefs, setTempPrefs] = useState<CookiePreferences>(preferences);

    const toggleCategory = (id: keyof CookiePreferences) => {
        if (id === 'essential') return; // Não pode desativar essenciais
        setTempPrefs(prev => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const handleSave = () => {
        savePreferences(tempPrefs);
        onClose();
    };

    const handleAcceptAll = () => {
        savePreferences({
            essential: true,
            functional: true,
            marketing: true,
        });
        onClose();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4"
        >
            {/* Backdrop */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal */}
            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative w-full max-w-xl max-h-[90vh] overflow-hidden bg-[#1a1a1a] border border-white/10 rounded-2xl shadow-2xl"
            >
                {/* Header */}
                <div className="sticky top-0 z-10 bg-[#1a1a1a] border-b border-white/10 p-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="p-2 rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30">
                                <Cookie className="w-5 h-5 text-amber-400" />
                            </div>
                            <h2 className="text-xl font-bold text-white">Preferências de Cookies</h2>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-all"
                            aria-label="Fechar"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                    <p className="mt-3 text-sm text-white/50">
                        Gerencie suas preferências de cookies. Os cookies essenciais não podem ser desativados.
                    </p>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4 overflow-y-auto max-h-[50vh]">
                    {cookieCategories.map((category) => {
                        const Icon = category.icon;
                        const isEnabled = tempPrefs[category.id];
                        const isRequired = category.required;

                        return (
                            <div
                                key={category.id}
                                className={`relative p-4 rounded-xl border transition-all duration-300 ${isEnabled
                                    ? 'bg-white/5 border-white/20'
                                    : 'bg-white/[0.02] border-white/10'
                                    }`}
                            >
                                <div className="flex items-start gap-4">
                                    {/* Icon */}
                                    <div className={`p-2.5 rounded-lg bg-gradient-to-br ${category.bgColor} flex-shrink-0`}>
                                        <Icon className={`w-5 h-5 ${category.iconColor}`} />
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="font-semibold text-white">{category.name}</h3>
                                            {isRequired && (
                                                <span className="px-2 py-0.5 text-xs font-medium text-emerald-400 bg-emerald-500/10 rounded-full">
                                                    Obrigatório
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-sm text-white/50 leading-relaxed">
                                            {category.description}
                                        </p>
                                    </div>

                                    {/* Toggle */}
                                    <button
                                        onClick={() => toggleCategory(category.id)}
                                        disabled={isRequired}
                                        className={`relative flex-shrink-0 w-12 h-7 rounded-full transition-all duration-300 ${isEnabled
                                            ? 'bg-gradient-to-r from-amber-500 to-orange-500'
                                            : 'bg-white/10'
                                            } ${isRequired ? 'cursor-not-allowed opacity-70' : 'cursor-pointer hover:opacity-90'}`}
                                        aria-label={`${isEnabled ? 'Desativar' : 'Ativar'} ${category.name}`}
                                    >
                                        <motion.div
                                            animate={{ x: isEnabled ? 22 : 2 }}
                                            transition={{ duration: 0.2, ease: 'easeOut' }}
                                            className="absolute top-1 w-5 h-5 rounded-full bg-white shadow-sm flex items-center justify-center"
                                        >
                                            {isEnabled && <Check className="w-3 h-3 text-amber-500" />}
                                        </motion.div>
                                    </button>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Footer */}
                <div className="sticky bottom-0 bg-[#1a1a1a] border-t border-white/10 p-6">
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button
                            onClick={handleAcceptAll}
                            className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-semibold text-sm 
                                     hover:from-amber-400 hover:to-orange-400 transition-all duration-300 
                                     shadow-lg shadow-amber-500/20"
                        >
                            Aceitar Todos
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex-1 px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-semibold text-sm
                                     hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                        >
                            Salvar Preferências
                        </button>
                    </div>
                    <p className="mt-4 text-center text-xs text-white/40">
                        Saiba mais em nossa{' '}
                        <a
                            href="/Politica-de-Privacidade-Riaheru-Ventures TESTE.docx"
                            download
                            className="text-amber-400 hover:text-amber-300 underline underline-offset-2"
                        >
                            Política de Privacidade
                        </a>
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );
}

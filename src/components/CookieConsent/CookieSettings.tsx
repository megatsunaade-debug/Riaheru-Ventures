import { useState } from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { useCookieConsent, type CookiePreferences } from '../../hooks/useCookieConsent';

interface CookieSettingsProps {
    onClose: () => void;
}

export function CookieSettings({ onClose }: CookieSettingsProps) {
    const { preferences, savePreferences } = useCookieConsent();
    const [prefs, setPrefs] = useState<CookiePreferences>(preferences);

    const toggle = (id: keyof CookiePreferences) => {
        if (id === 'essential') return;
        setPrefs(p => ({ ...p, [id]: !p[id] }));
    };

    const save = () => { savePreferences(prefs); onClose(); };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[250] flex items-center justify-center p-4"
        >
            <div onClick={onClose} className="absolute inset-0 bg-black/20" />

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative bg-white rounded-lg shadow-lg w-full max-w-xs p-4"
            >
                <div className="flex items-center justify-between mb-4">
                    <span className="font-medium text-sm">Cookies</span>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        <X size={16} />
                    </button>
                </div>

                <div className="space-y-3 mb-4">
                    {(['essential', 'functional', 'marketing'] as const).map(id => (
                        <div key={id} className="flex items-center justify-between text-sm">
                            <span className="text-gray-600 capitalize">
                                {id === 'essential' ? 'Essenciais' : id === 'functional' ? 'Funcionais' : 'Marketing'}
                            </span>
                            <button
                                onClick={() => toggle(id)}
                                disabled={id === 'essential'}
                                className={`w-8 h-4 rounded-full transition-colors ${prefs[id] ? 'bg-[var(--accent)]' : 'bg-gray-200'
                                    } ${id === 'essential' ? 'opacity-50' : ''}`}
                            >
                                <motion.div
                                    animate={{ x: prefs[id] ? 16 : 2 }}
                                    className="w-3 h-3 bg-white rounded-full shadow-sm"
                                />
                            </button>
                        </div>
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={() => { savePreferences({ essential: true, functional: true, marketing: true }); onClose(); }}
                        className="flex-1 text-xs py-2 bg-[var(--accent)] text-white rounded-md hover:bg-[var(--accent-dark)]"
                    >
                        Aceitar
                    </button>
                    <button
                        onClick={save}
                        className="flex-1 text-xs py-2 border border-gray-200 rounded-md hover:bg-gray-50"
                    >
                        Salvar
                    </button>
                </div>
            </motion.div>
        </motion.div>
    );
}

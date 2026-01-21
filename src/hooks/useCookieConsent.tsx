import { useState, useEffect, useCallback, createContext, useContext, type ReactNode } from 'react';

export interface CookiePreferences {
    essential: boolean;
    functional: boolean;
    marketing: boolean;
}

interface CookieConsentContextType {
    preferences: CookiePreferences;
    hasConsented: boolean;
    showBanner: boolean;
    showSettings: boolean;
    acceptAll: () => void;
    rejectNonEssential: () => void;
    savePreferences: (prefs: Partial<CookiePreferences>) => void;
    openSettings: () => void;
    closeSettings: () => void;
    resetConsent: () => void;
}

const STORAGE_KEY = 'riaheru_cookie_consent';

const defaultPreferences: CookiePreferences = {
    essential: true,
    functional: false,
    marketing: false,
};

const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    const [preferences, setPreferences] = useState<CookiePreferences>(defaultPreferences);
    const [hasConsented, setHasConsented] = useState(false);
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            try {
                const parsed = JSON.parse(stored);
                setPreferences({
                    essential: true,
                    functional: parsed.functional ?? false,
                    marketing: parsed.marketing ?? false,
                });
                setHasConsented(true);
                setShowBanner(false);
            } catch {
                setShowBanner(true);
            }
        } else {
            setShowBanner(true);
        }
    }, []);

    const saveToStorage = useCallback((prefs: CookiePreferences) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
        setPreferences(prefs);
        setHasConsented(true);
        setShowBanner(false);
        setShowSettings(false);
    }, []);

    const acceptAll = useCallback(() => {
        saveToStorage({
            essential: true,
            functional: true,
            marketing: true,
        });
    }, [saveToStorage]);

    const rejectNonEssential = useCallback(() => {
        saveToStorage({
            essential: true,
            functional: false,
            marketing: false,
        });
    }, [saveToStorage]);

    const savePreferences = useCallback((prefs: Partial<CookiePreferences>) => {
        saveToStorage({
            essential: true,
            functional: prefs.functional ?? preferences.functional,
            marketing: prefs.marketing ?? preferences.marketing,
        });
    }, [saveToStorage, preferences]);

    const openSettings = useCallback(() => {
        setShowSettings(true);
    }, []);

    const closeSettings = useCallback(() => {
        setShowSettings(false);
    }, []);

    const resetConsent = useCallback(() => {
        localStorage.removeItem(STORAGE_KEY);
        setPreferences(defaultPreferences);
        setHasConsented(false);
        setShowBanner(true);
    }, []);

    return (
        <CookieConsentContext.Provider
            value={{
                preferences,
                hasConsented,
                showBanner,
                showSettings,
                acceptAll,
                rejectNonEssential,
                savePreferences,
                openSettings,
                closeSettings,
                resetConsent,
            }}
        >
            {children}
        </CookieConsentContext.Provider>
    );
}

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
}

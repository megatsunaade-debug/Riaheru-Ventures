import { useCallback, useState, type ReactNode } from 'react';

import {
    CookieConsentContext,
    defaultPreferences,
    readStoredCookieConsent,
    STORAGE_KEY,
    type CookiePreferences,
} from '@/context/cookie-consent-context';

export function CookieConsentProvider({ children }: { children: ReactNode }) {
    const initialState = readStoredCookieConsent();
    const [preferences, setPreferences] = useState<CookiePreferences>(initialState.preferences);
    const [hasConsented, setHasConsented] = useState(initialState.hasConsented);
    const [showBanner, setShowBanner] = useState(initialState.showBanner);
    const [showSettings, setShowSettings] = useState(false);

    const saveToStorage = useCallback((prefs: CookiePreferences) => {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs));
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
    }, [preferences.functional, preferences.marketing, saveToStorage]);

    const openSettings = useCallback(() => {
        setShowSettings(true);
    }, []);

    const closeSettings = useCallback(() => {
        setShowSettings(false);
    }, []);

    const resetConsent = useCallback(() => {
        window.localStorage.removeItem(STORAGE_KEY);
        setPreferences(defaultPreferences);
        setHasConsented(false);
        setShowBanner(true);
        setShowSettings(false);
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

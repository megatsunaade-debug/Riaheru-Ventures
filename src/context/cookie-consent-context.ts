import { createContext } from 'react';

export interface CookiePreferences {
    essential: boolean;
    functional: boolean;
    marketing: boolean;
}

export interface CookieConsentContextType {
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

export const STORAGE_KEY = 'riaheru_cookie_consent';

export const defaultPreferences: CookiePreferences = {
    essential: true,
    functional: false,
    marketing: false,
};

export interface CookieConsentSnapshot {
    preferences: CookiePreferences;
    hasConsented: boolean;
    showBanner: boolean;
}

export function readStoredCookieConsent(): CookieConsentSnapshot {
    if (typeof window === 'undefined') {
        return {
            preferences: defaultPreferences,
            hasConsented: false,
            showBanner: false,
        };
    }

    const stored = window.localStorage.getItem(STORAGE_KEY);

    if (!stored) {
        return {
            preferences: defaultPreferences,
            hasConsented: false,
            showBanner: true,
        };
    }

    try {
        const parsed = JSON.parse(stored);
        return {
            preferences: {
                essential: true,
                functional: parsed.functional ?? false,
                marketing: parsed.marketing ?? false,
            },
            hasConsented: true,
            showBanner: false,
        };
    } catch {
        return {
            preferences: defaultPreferences,
            hasConsented: false,
            showBanner: true,
        };
    }
}

export const CookieConsentContext = createContext<CookieConsentContextType | null>(null);

import { useContext } from 'react';

import { CookieConsentContext } from '@/context/cookie-consent-context';

export function useCookieConsent() {
    const context = useContext(CookieConsentContext);
    if (!context) {
        throw new Error('useCookieConsent must be used within a CookieConsentProvider');
    }
    return context;
}

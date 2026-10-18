const GOOGLE_ADS_ID = 'AW-18063522051';
const GOOGLE_TAG_SCRIPT_ID = 'riaheru-google-ads-tag';

type Gtag = (...args: unknown[]) => void;

declare global {
    interface Window {
        dataLayer?: IArguments[];
        gtag?: Gtag;
    }
}

const deniedConsent = {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
};

const grantedMarketingConsent = {
    ...deniedConsent,
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
};

let tagConfigured = false;
let marketingConsentGranted = false;

function configureGoogleAdsTag() {
    if (tagConfigured) return;

    const existingGtag = Boolean(window.gtag);
    window.dataLayer ??= [];
    window.gtag ??= function gtag() {
        // eslint-disable-next-line prefer-rest-params -- Keep Google's documented Arguments-based dataLayer queue.
        window.dataLayer?.push(arguments);
    };

    window.gtag('consent', 'default', deniedConsent);
    window.gtag('consent', 'update', grantedMarketingConsent);
    if (!existingGtag) window.gtag('js', new Date());
    window.gtag('config', GOOGLE_ADS_ID, { send_page_view: false });

    if (!document.querySelector('script[src*="googletagmanager.com/gtag/js"]')) {
        const script = document.createElement('script');
        script.id = GOOGLE_TAG_SCRIPT_ID;
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`;
        document.head.appendChild(script);
    }

    tagConfigured = true;
    marketingConsentGranted = true;
}

export function syncGoogleAdsConsent(granted: boolean) {
    if (typeof window === 'undefined') return;

    if (granted) {
        if (!tagConfigured) {
            configureGoogleAdsTag();
        } else if (!marketingConsentGranted) {
            window.gtag?.('consent', 'update', grantedMarketingConsent);
            marketingConsentGranted = true;
        }
    } else if (tagConfigured && marketingConsentGranted) {
        window.gtag?.('consent', 'update', deniedConsent);
        marketingConsentGranted = false;
    }
}

export function trackWhatsAppConversion(marketingConsent: boolean) {
    if (!marketingConsent || typeof window === 'undefined') return;

    syncGoogleAdsConsent(true);
    window.gtag?.('event', 'conversion', {
        'send_to': 'AW-18063522051/xBSFCIj0_JUdEIPyraVD',
    });
}

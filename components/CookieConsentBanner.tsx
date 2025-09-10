import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { initializeAnalytics } from '../utils/analytics';

// List of country codes (lowercase) from ISO 3166-1 alpha-2 where cookie consent is generally required.
// This is a representative list and not exhaustive.
const REGIONS_REQUIRING_CONSENT = [
    // EU/EEA countries
    'at', 'be', 'bg', 'hr', 'cy', 'cz', 'dk', 'ee', 'fi', 'fr', 'de', 'gr', 'hu', 'ie', 'it', 'lv', 'lt', 'lu', 'mt', 'nl', 'pl', 'pt', 'ro', 'sk', 'si', 'es', 'se',
    'is', 'li', 'no',
    // UK
    'gb', 'uk',
    // Brazil
    'br'
];

/**
 * Checks if the user is likely in a region that requires cookie consent.
 * It uses the browser's language settings as a proxy for the user's location.
 * @returns {boolean} True if consent is likely required, false otherwise.
 */
const needsCookieConsent = (): boolean => {
    // Use `navigator.languages` for a more accurate list, fallback to `navigator.language`.
    const userLangs = navigator.languages || [navigator.language];
    for (const lang of userLangs) {
        // The language tag can be complex (e.g., 'en-US', 'fr-CA', 'de').
        // We are interested in the region subtag if it exists.
        const region = lang.split('-')[1]?.toLowerCase();
        if (region && REGIONS_REQUIRING_CONSENT.includes(region)) {
            return true;
        }
    }
    return false;
};

const CookieConsentBanner: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const { t } = useLanguage();

    // Check for consent on component mount
    useEffect(() => {
        // Timeout to prevent layout shift while the page is loading
        setTimeout(() => {
            const consent = localStorage.getItem('cookieConsent');
            if (!consent && needsCookieConsent()) {
                setIsVisible(true);
            }
        }, 1000);
    }, []);

    // Add ESC key listener to decline consent
    useEffect(() => {
        const handleEsc = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                handleDecline();
            }
        };
        if (isVisible) {
          window.addEventListener('keydown', handleEsc);
        }
        return () => {
          window.removeEventListener('keydown', handleEsc);
        };
    }, [isVisible]);

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        setIsVisible(false);
        initializeAnalytics();
    };

    const handleDecline = () => {
        localStorage.setItem('cookieConsent', 'declined');
        setIsVisible(false);
    };

    if (!isVisible) {
        return null;
    }

    return (
        <div
            role="dialog"
            aria-label="Cookie Consent"
            className="fixed bottom-0 right-0 left-0 md:left-auto md:bottom-4 md:right-4 z-[200] p-4 flex justify-center md:justify-end"
        >
            <div className="bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-4 md:p-6 max-w-lg w-full border border-gray-200/50">
                <p className="text-sm text-gray-700/90 mb-4">
                    {t.cookieConsent.message}
                    {' '}
                    <button onClick={() => { /* Navigate to privacy policy page */ }} className="underline text-emerald-600/90 hover:text-emerald-800/90" aria-label="Learn more about our cookie policy">{t.cookieConsent.learnMore}</button>
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                    <button
                        onClick={handleAccept}
                        className="w-full sm:w-auto flex-1 bg-emerald-600/90 text-white/90 px-5 py-2 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
                        aria-label="Accept the use of cookies"
                    >
                        {t.cookieConsent.accept}
                    </button>
                    <button
                        onClick={handleDecline}
                        className="w-full sm:w-auto flex-1 bg-gray-200/90 text-gray-700/90 px-5 py-2 rounded-md font-semibold hover:bg-gray-300 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
                        aria-label="Decline the use of cookies"
                    >
                        {t.cookieConsent.decline}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CookieConsentBanner;
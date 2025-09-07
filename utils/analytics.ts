// A simple flag to prevent re-initialization
let isAnalyticsInitialized = false;

declare global {
    interface Window {
        dataLayer: any[];
        gtag: (...args: any[]) => void;
    }
}

/**
 * Injects and initializes the Google Analytics (gtag.js) script.
 * This function is designed to be called only when the user has
 * consented to the use of analytics cookies.
 */
export const initializeAnalytics = () => {
    // Ensure this runs only once and only in the browser
    if (isAnalyticsInitialized || typeof window === 'undefined') {
        return;
    }

    // This is your Google Analytics Measurement ID
    const gaId = 'G-ZQ3GX1ZZ54';

    // Check if the script already exists
    if (document.querySelector(`script[src*="${gaId}"]`)) {
        isAnalyticsInitialized = true;
        return;
    }

    // Create the main script tag
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize the dataLayer and gtag function
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
        window.dataLayer.push(args);
    }
    
    // Make gtag available globally
    window.gtag = gtag;

    // Send the initial configuration to Google Analytics
    gtag('js', new Date());
    gtag('config', gaId);
    
    isAnalyticsInitialized = true;
    console.log('Analytics Initialized');
};

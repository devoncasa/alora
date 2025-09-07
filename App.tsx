import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProductDetailPage from './components/ProductDetailPage';
import ScienceBehindPage from './components/ScienceBehindPage';
import InnovationPage from './components/InnovationPage';
import FAQPage from './components/FAQPage';
import BackgroundImage from './components/BackgroundImage';
import ContactModal from './components/ContactModal';
import CookieConsentBanner from './components/CookieConsentBanner';
import { BACKGROUND_IMAGES, HERO_SECTION_BANNERS } from './constants';
import { ProductDetailData } from './types';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import { initializeAnalytics } from './utils/analytics';

const updateJsonLd = (data: object | null) => {
    const scriptId = 'json-ld-structured-data';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement | null;

    if (!data) {
        if (scriptTag) {
            scriptTag.remove();
        }
        return;
    }

    if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = scriptId;
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
    }
    
    scriptTag.textContent = JSON.stringify(data);
};

const AppContent: React.FC = () => {
    const [page, setPage] = useState('landing');
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
    const [heroBannerUrl, setHeroBannerUrl] = useState('');
    const { t, language } = useLanguage();

    useEffect(() => {
        if (localStorage.getItem('cookieConsent') === 'accepted') {
            initializeAnalytics();
        }
    }, []);

    useEffect(() => {
        setBackgroundImageUrl(BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)]);
        setHeroBannerUrl(HERO_SECTION_BANNERS[Math.floor(Math.random() * HERO_SECTION_BANNERS.length)]);
    }, []);

    const productDetailData: ProductDetailData | undefined = selectedProduct ? t.data.productDetails.find(p => p.name === selectedProduct) : undefined;

    useEffect(() => {
        const metaDescTag = document.querySelector('meta[name="description"]');
        const metaKeywordsTag = document.querySelector('meta[name="keywords"]');
        
        const getSeoData = (): { title: string; description: string; keywords: string; } => {
            if (productDetailData?.seo) {
                return productDetailData.seo;
            }
            switch (page) {
                case 'science':
                    return t.seo.science;
                case 'innovation':
                    return t.seo.innovation;
                case 'faq':
                    return t.seo.faq;
                case 'landing':
                default:
                    return t.seo.landing;
            }
        };

        const { title, description, keywords } = getSeoData();

        document.title = title;
        if (metaDescTag) {
            metaDescTag.setAttribute('content', description);
        }
        if (metaKeywordsTag) {
            metaKeywordsTag.setAttribute('content', keywords);
        }
        
        const getJsonLdData = () => {
            if (productDetailData) {
                return {
                    '@context': 'https://schema.org',
                    '@type': productDetailData.schemaType,
                    name: productDetailData.name,
                    description: productDetailData.seo.description,
                    brand: {
                        '@type': 'Brand',
                        name: 'Alora Biofilm'
                    },
                };
            }

            const commonData = {
                '@context': 'https://schema.org',
                '@type': 'WebSite',
                name: 'Alora Biofilm',
            };

            switch (page) {
                case 'science':
                    return { ...commonData, name: t.seo.science.title };
                case 'innovation':
                     return { ...commonData, name: t.seo.innovation.title };
                case 'faq':
                    return { ...commonData, name: t.seo.faq.title };
                case 'landing':
                default:
                    return { ...commonData, name: t.seo.landing.title };
            }
        };
        
        updateJsonLd(getJsonLdData());
        
    }, [page, productDetailData, t]); // Dependencies cover changes in page, product, and language

    const renderPage = () => {
        if (productDetailData) {
            return <ProductDetailPage product={productDetailData} setSelectedProduct={setSelectedProduct} heroBannerUrl={heroBannerUrl} />;
        }
        switch (page) {
            case 'science':
                return <ScienceBehindPage heroBannerUrl={heroBannerUrl} />;
            case 'innovation':
                return <InnovationPage heroBannerUrl={heroBannerUrl} />;
            case 'faq':
                return <FAQPage heroBannerUrl={heroBannerUrl} />;
            case 'landing':
            default:
                return <MainContent setPage={setPage} setSelectedProduct={setSelectedProduct} heroBannerUrl={heroBannerUrl} />;
        }
    };

    return (
        <div className={language === 'th' ? 'lang-th' : 'lang-en'}>
            <BackgroundImage imageUrl={backgroundImageUrl} altText={t.imageAlts.backgroundImage} />
            <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
            <div className="relative z-10">
                <Header setPage={setPage} setSelectedProduct={setSelectedProduct} openContactModal={() => setIsContactModalOpen(true)} />
                <main>
                    {renderPage()}
                </main>
                <Footer setPage={setPage} openContactModal={() => setIsContactModalOpen(true)} />
            </div>
            <CookieConsentBanner />
        </div>
    );
};

const App: React.FC = () => (
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
);

export default App;
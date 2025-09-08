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
import { ProductDetailData, PageSeoData, SeoData } from './types';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './hooks/useLanguage';
import { initializeAnalytics } from './utils/analytics';

// --- SEO & Structured Data Configuration ---
const SITE_URL = 'https://alora.bio';
const SITE_HANDLE = '@AloraBio';
const DEFAULT_OG_IMAGE = 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-og-image.webp';
const ORGANIZATION_DATA = {
    '@type': 'Organization',
    name: 'Alora Biotechnology',
    url: SITE_URL,
    logo: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-logo-header.webp',
    sameAs: [
        'https://www.linkedin.com/company/alora-biotechnology',
        'https://twitter.com/AloraBio'
    ]
};

/**
 * Manages all head tags for SEO, Open Graph, Twitter Cards, and JSON-LD.
 * Creates, updates, or removes tags based on the provided data.
 */
const updateHeadTags = (
    title: string,
    canonicalPath: string,
    hreflang: { en: string; th: string },
    metaTags: { [key: string]: string },
    jsonLdData: object
) => {
    // 1. Update Title
    document.title = title;

    // 2. Manage <link> tags (canonical, hreflang)
    const updateLink = (rel: string, href: string, hreflangAttr?: string) => {
        const selector = hreflangAttr ? `link[rel="${rel}"][hreflang="${hreflangAttr}"]` : `link[rel="${rel}"]`;
        let link = document.head.querySelector(selector) as HTMLLinkElement | null;
        if (!link) {
            link = document.createElement('link');
            link.rel = rel;
            if (hreflangAttr) link.setAttribute('hreflang', hreflangAttr);
            document.head.appendChild(link);
        }
        link.href = href;
    };

    updateLink('canonical', `${SITE_URL}${canonicalPath}`);
    updateLink('alternate', `${SITE_URL}${hreflang.en}`, 'en');
    updateLink('alternate', `${SITE_URL}${hreflang.th}`, 'th');
    updateLink('alternate', `${SITE_URL}${hreflang.en}`, 'x-default');

    // 3. Manage <meta> tags
    Object.entries(metaTags).forEach(([key, content]) => {
        const isOgOrTwitter = key.startsWith('og:') || key.startsWith('twitter:');
        const selector = isOgOrTwitter ? `meta[property="${key}"]` : `meta[name="${key}"]`;
        let meta = document.head.querySelector(selector) as HTMLMetaElement | null;
        if (!meta) {
            meta = document.createElement('meta');
            if (isOgOrTwitter) meta.setAttribute('property', key);
            else meta.name = key;
            document.head.appendChild(meta);
        }
        meta.content = content;
    });

    // 4. Manage JSON-LD
    let scriptTag = document.getElementById('json-ld-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
        scriptTag = document.createElement('script');
        scriptTag.id = 'json-ld-structured-data';
        scriptTag.type = 'application/ld+json';
        document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLdData, null, 2);
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
        // --- 1. Get SEO Data ---
        const getSeoData = (): { seo: SeoData | PageSeoData; path: string; ogType: 'website' | 'product' } => {
            if (productDetailData) {
                const path = language === 'th' ? `/th/products/${productDetailData.slug}` : `/products/${productDetailData.slug}`;
                return { seo: productDetailData.seo, path, ogType: 'product' };
            }
            let pageSeoData: PageSeoData;
            let path: string;
            switch (page) {
                case 'science':
                    pageSeoData = t.seo.science;
                    path = language === 'th' ? '/th/science' : '/science';
                    break;
                case 'innovation':
                    pageSeoData = t.seo.innovation;
                    path = language === 'th' ? '/th/innovation' : '/innovation';
                    break;
                case 'faq':
                    pageSeoData = t.seo.faq;
                    path = language === 'th' ? '/th/faq' : '/faq';
                    break;
                case 'landing':
                default:
                    pageSeoData = t.seo.landing;
                    path = language === 'th' ? '/th' : '/';
                    break;
            }
            return { seo: pageSeoData, path, ogType: 'website' };
        };

        const { seo, path, ogType } = getSeoData();

        // --- 2. Process Keywords ---
        const processKeywords = (arr: string[] = [], maxLength: number = 100): string[] => {
            const cleaned = arr.map(k => k.toLowerCase().trim()).filter(Boolean);
            return [...new Set(cleaned)].slice(0, maxLength);
        };
        
        const allKeywords = processKeywords(seo.keywords);
        const aiKeywords = processKeywords(seo.aiKeywords);
        const aboutKeywords = processKeywords(seo.about);
        const mentionsKeywords = processKeywords(seo.mentions);

        // --- 3. Construct Meta Tags ---
        const metaTags: { [key: string]: string } = {
            'description': seo.description,
            'keywords': allKeywords.join(', '),
            'robots': seo.robots || 'index, follow',
            // AI-driven tags
            'ai-keywords': aiKeywords.slice(0, 20).join(', '),
            'about': aboutKeywords.slice(0, 20).join(', '),
            'mentions': mentionsKeywords.slice(0, 20).join(', '),
            // Open Graph
            'og:title': seo.title,
            'og:description': seo.description,
            'og:type': ogType,
            'og:url': `${SITE_URL}${path}`,
            'og:image': seo.image || productDetailData?.images.hero || DEFAULT_OG_IMAGE,
            'og:site_name': 'Alora Biofilm',
            'og:locale': language === 'th' ? 'th_TH' : 'en_US',
            // Twitter Card
            'twitter:card': 'summary_large_image',
            'twitter:site': SITE_HANDLE,
            'twitter:title': seo.title,
            'twitter:description': seo.description,
            'twitter:image': seo.image || productDetailData?.images.hero || DEFAULT_OG_IMAGE,
        };

        // --- 4. Get JSON-LD Data ---
        const getJsonLdData = () => {
            if (productDetailData) {
                return {
                    '@context': 'https://schema.org',
                    '@type': 'Product',
                    '@id': `${SITE_URL}${path}`,
                    name: productDetailData.name,
                    description: productDetailData.seo.description,
                    sku: productDetailData.sku,
                    gtin12: productDetailData.gtin,
                    brand: productDetailData.brand,
                    image: productDetailData.images.hero,
                    offers: productDetailData.offers,
                    aggregateRating: productDetailData.aggregateRating,
                    ...(productDetailData.faqs.length > 0 && {
                        mainEntity: productDetailData.faqs.map(faq => ({
                            '@type': 'Question',
                            name: faq.q,
                            acceptedAnswer: {
                                '@type': 'Answer',
                                text: faq.a
                            }
                        }))
                    })
                };
            }
            // Fallback to Organization + Website schema
            return {
                '@context': 'https://schema.org',
                '@graph': [
                    ORGANIZATION_DATA,
                    {
                        '@type': 'WebSite',
                        url: SITE_URL,
                        name: 'Alora Biofilm',
                        publisher: { '@id': ORGANIZATION_DATA.url },
                        potentialAction: {
                            '@type': 'SearchAction',
                            target: `${SITE_URL}/search?q={search_term_string}`,
                            'query-input': 'required name=search_term_string',
                        },
                    },
                ],
            };
        };

        const jsonLdData = getJsonLdData();
        const hreflang = 'hreflang' in seo ? seo.hreflang : { en: '/', th: '/th' };
        
        // --- 5. Update Head ---
        updateHeadTags(seo.title, path, hreflang, metaTags, jsonLdData);

    }, [page, productDetailData, t, language]);


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
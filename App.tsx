import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
import ProductDetailPage from './components/ProductDetailPage';
import ScienceBehindPage from './components/ScienceBehindPage';
import InnovationPage from './components/InnovationPage';
import BackgroundImage from './components/BackgroundImage';
import { BACKGROUND_IMAGES, HERO_SECTION_BANNERS } from './constants';
import { ProductDetailData } from './types';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './hooks/useLanguage';

const AppContent: React.FC = () => {
    const [page, setPage] = useState('landing');
    const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
    const [backgroundImageUrl, setBackgroundImageUrl] = useState('');
    const [heroBannerUrl, setHeroBannerUrl] = useState('');
    const { t, language } = useLanguage();

    useEffect(() => {
        setBackgroundImageUrl(BACKGROUND_IMAGES[Math.floor(Math.random() * BACKGROUND_IMAGES.length)]);
        setHeroBannerUrl(HERO_SECTION_BANNERS[Math.floor(Math.random() * HERO_SECTION_BANNERS.length)]);
    }, []);

    const productDetailData: ProductDetailData | undefined = selectedProduct ? t.data.productDetails.find(p => p.name === selectedProduct) : undefined;

    useEffect(() => {
        const metaDescTag = document.querySelector('meta[name="description"]');
        let newTitle: string;
        let newDescription: string;

        if (productDetailData) {
            // For product detail pages, use product-specific info
            newTitle = `${productDetailData.name} | Alora Biofilm`;
            newDescription = productDetailData.hero; // This is the translated hero text
        } else {
            // For main content pages, use page-specific SEO from translations
            switch (page) {
                case 'science':
                    newTitle = t.seo.science.title;
                    newDescription = t.seo.science.description;
                    break;
                case 'innovation':
                    newTitle = t.seo.innovation.title;
                    newDescription = t.seo.innovation.description;
                    break;
                case 'landing':
                default:
                    newTitle = t.seo.landing.title;
                    newDescription = t.seo.landing.description;
                    break;
            }
        }

        // Apply the new metadata to the document
        document.title = newTitle;
        if (metaDescTag) {
            metaDescTag.setAttribute('content', newDescription);
        }
        
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
            case 'landing':
            default:
                return <MainContent setPage={setPage} setSelectedProduct={setSelectedProduct} heroBannerUrl={heroBannerUrl} />;
        }
    };

    return (
        <div className={language === 'th' ? 'lang-th' : 'lang-en'}>
            <BackgroundImage imageUrl={backgroundImageUrl} altText={t.imageAlts.backgroundImage} />
            <div className="relative z-10">
                <Header setPage={setPage} setSelectedProduct={setSelectedProduct} />
                <main>
                    {renderPage()}
                </main>
                <Footer setPage={setPage} />
            </div>
        </div>
    );
};

const App: React.FC = () => (
    <LanguageProvider>
        <AppContent />
    </LanguageProvider>
);

export default App;
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
        const metaDesc = document.querySelector('meta[name="description"]');
        
        let title = t.seo.landing.title;
        let description = t.seo.landing.description;

        if (productDetailData) {
            title = `${productDetailData.name} | Alora Biofilm`;
            description = productDetailData.hero;
        } else {
            switch (page) {
                case 'science':
                    title = t.seo.science.title;
                    description = t.seo.science.description;
                    break;
                case 'innovation':
                    title = t.seo.innovation.title;
                    description = t.seo.innovation.description;
                    break;
                case 'landing':
                default:
                    title = t.seo.landing.title;
                    description = t.seo.landing.description;
                    break;
            }
        }
        
        document.title = title;
        if (metaDesc) metaDesc.setAttribute('content', description);
        
    }, [selectedProduct, productDetailData, page, language, t]);

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
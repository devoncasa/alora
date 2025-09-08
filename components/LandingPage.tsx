import React from 'react';
import ProductCard from './ProductCard';
import PersuasionCard from './PersuasionCard';
import { useLanguage } from '../hooks/useLanguage';
import ImagePlaceholder from './ImagePlaceholder';

interface LandingPageProps {
  setPage: (page: string) => void;
  setSelectedProduct: (productName: string) => void;
  heroBannerUrl: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ setPage, setSelectedProduct, heroBannerUrl }) => {
    const { t } = useLanguage();

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="hero-section relative flex items-center justify-center min-h-[70vh] text-center text-emerald-900 pt-32 pb-16">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${heroBannerUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-green-50/70"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 w-full">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 text-on-image-hero">
                        <img 
                            src="https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-logo-hero-banner.webp" 
                            alt={t.imageAlts.aloraLogo}
                            className="w-96 mx-auto mb-8"
                        />
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-emerald-900/90 brand-font">
                            {t.landingPageContent.hero.title}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 mx-auto text-gray-700/90">
                            {t.landingPageContent.hero.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="#products" className="bg-emerald-600/90 text-white/90 px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto" aria-label="Explore Alora Biofilm products">
                                {t.landingPageContent.hero.exploreButton}
                            </a>
                            <button onClick={() => setPage('science')} className="bg-white/70 text-emerald-700/90 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 hover:text-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto border border-emerald-200/50" aria-label="Learn about the science behind Alora Biofilm">
                                {t.landingPageContent.hero.scienceButton}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Introduction Paragraph */}
            <section className="py-16 bg-white/70">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-start-2 lg:col-span-3 px-6">
                         <div className="grid md:grid-cols-5 gap-12 items-center">
                            <div className="md:col-span-3">
                                <p className="text-lg md:text-xl text-gray-700/90 leading-relaxed whitespace-pre-line">
                                    {t.landingPageContent.intro}
                                </p>
                            </div>
                            <div className="md:col-span-2 grid grid-cols-2 gap-4">
                                <div className="pt-8">
                                    <ImagePlaceholder 
                                        src="/assets/infographic-aloe-pectin.jpg" 
                                        alt={t.imageAlts.introVisual1} 
                                        className="aspect-square rounded-lg shadow-lg transform rotate-3"
                                    />
                                </div>
                                <div>
                                     <ImagePlaceholder 
                                        src="/assets/microscope-biofilm.jpg" 
                                        alt={t.imageAlts.introVisual2} 
                                        className="aspect-square rounded-lg shadow-lg transform -rotate-2" 
                                    />
                                     <ImagePlaceholder 
                                        src="/assets/skincare-mask-model.jpg" 
                                        alt={t.imageAlts.introVisual3} 
                                        className="aspect-square rounded-lg shadow-lg mt-4 transform rotate-1" 
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Persuasion Sections */}
            <section className="py-16 bg-green-50/70">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-start-2 lg:col-span-3 px-6">
                        <div className="grid md:grid-cols-2 gap-12">
                            <PersuasionCard cardData={t.landingPageContent.persuasion.clinical} imageAlt={t.imageAlts.clinicalChart} />
                            <PersuasionCard cardData={t.landingPageContent.persuasion.beauty} imageAlt={t.imageAlts.skincareModel} />
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Products Grid */}
            <section id="products" className="py-20 bg-white/70">
                 <h2 className="text-3xl md:text-4xl font-bold text-emerald-800/90 text-center mb-12">{t.landingPageContent.products.title}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-start-2 lg:col-span-3 px-6">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {t.data.productCards.map((product) => (
                                 <ProductCard key={product.name} product={product} onViewDetails={setSelectedProduct} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Proof & Trust Strip */}
            <section className="py-16 bg-green-50/70">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 text-center">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-6">
                            {t.data.trustIcons.map(item => (
                                <div key={item.name} className="flex flex-col items-center">
                                    {item.icon}
                                    <p className="mt-2 text-sm text-gray-600/90 font-medium">{item.name}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mx-auto text-gray-700/90 text-center italic">
                            {t.landingPageContent.trust.quote}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Band */}
            <section id="contact" className="py-20 bg-emerald-700/70 text-white">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                     <div className="lg:col-start-2 lg:col-span-3 px-6 text-center">
                         <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white/90">{t.landingPageContent.cta.title}</h3>
                         <a href="mailto:medical.affairs@alora.bio" className="bg-white/70 text-emerald-700/90 px-8 py-3 rounded-md font-semibold hover:bg-emerald-100 hover:text-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1" aria-label={t.landingPageContent.cta.button}>
                            {t.landingPageContent.cta.button}
                         </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default LandingPage;
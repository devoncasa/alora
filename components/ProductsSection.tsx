import React from 'react';
import ProductCard from './ProductCard';
// FIX: Removed direct import of static data.
import { useLanguage } from '../hooks/useLanguage';

interface ProductsSectionProps {
  setPage: (page: string) => void;
  setSelectedProduct: (productName: string) => void;
}

const ProductsSection: React.FC<ProductsSectionProps> = ({ setPage, setSelectedProduct }) => {
    // FIX: Use the useLanguage hook to get translated content.
    const { t } = useLanguage();

    return (
        <>
            {/* Hero Section */}
            <section id="hero" className="relative flex items-center justify-center min-h-[70vh] bg-green-50 text-center text-emerald-900 pt-32 pb-16">
                <div className="relative z-10 container mx-auto px-6">
                    <div className="max-w-4xl mx-auto">
                        {/* FIX: Use translated strings. */}
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4 text-emerald-900 brand-font">
                            {t.heroSection.title}
                        </h1>
                        <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-gray-700">
                            {t.heroSection.subtitle}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                            <a href="#products" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto">
                                {t.heroSection.exploreButton}
                            </a>
                            <button onClick={() => setPage('science')} className="bg-white text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-emerald-50 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 w-full sm:w-auto border border-emerald-200">
                                {t.heroSection.scienceButton}
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            
            <section id="products" className="py-20 bg-white">
                <div className="container mx-auto px-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* FIX: Use product cards from the translated content object. */}
                        {t.data.productCards.map((product) => (
                             <ProductCard key={product.name} product={product} onViewDetails={setSelectedProduct} />
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Proof & Trust Strip */}
            <section className="py-16 bg-green-50">
                <div className="container mx-auto px-6 text-center">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-6">
                        {/* FIX: Use trust icons from the translated content object. */}
                        {t.data.trustIcons.map(item => (
                            <div key={item.name} className="flex flex-col items-center">
                                {item.icon}
                                <p className="mt-2 text-sm text-gray-600 font-medium">{item.name}</p>
                            </div>
                        ))}
                    </div>
                    {/* FIX: Use translated string for the quote. */}
                    <p className="max-w-3xl mx-auto text-gray-700 text-center italic">
                        {t.productsSection.trustQuote}
                    </p>
                </div>
            </section>

            {/* CTA Band */}
            <section id="contact" className="py-20 bg-emerald-700 text-white">
                <div className="container mx-auto px-6 text-center">
                     {/* FIX: Use translated strings for CTA. */}
                     <h3 className="text-3xl md:text-4xl font-bold mb-4">{t.productsSection.ctaTitle}</h3>
                     <a href="mailto:medical.affairs@alora.bio" className="bg-white text-emerald-700 px-8 py-3 rounded-md font-semibold hover:bg-emerald-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                        {t.productsSection.ctaButton}
                     </a>
                </div>
            </section>
        </>
    );
};

export default ProductsSection;
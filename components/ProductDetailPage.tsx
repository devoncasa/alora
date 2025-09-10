import React, { useEffect } from 'react';
import type { ProductDetailData, ClinicalSpec } from '../types';
import { CheckCircleIcon } from '../constants';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '../hooks/useLanguage';

// --- Reusable Sub-Components for the Detail Page ---

const DetailSection: React.FC<{ title: string; children: React.ReactNode; }> = ({ title, children }) => (
    <section>
        <h2 className="text-2xl font-bold text-emerald-800/90 mb-4 pb-2 border-b-2 border-emerald-200/50">{title}</h2>
        {children}
    </section>
);

const SpecTable: React.FC<{ specs: ClinicalSpec[] }> = ({ specs }) => (
    <div className="bg-green-50/70 rounded-lg border border-emerald-100/50">
        <dl className="divide-y divide-emerald-100/50">
            {specs.map((spec, index) => (
                <div key={index} className="px-4 py-3 grid grid-cols-3 gap-4">
                    <dt className="text-sm font-medium text-gray-600/90">{spec.label}</dt>
                    <dd className="text-sm text-gray-800/90 col-span-2">{spec.value}</dd>
                </div>
            ))}
        </dl>
    </div>
);

// --- Main Product Detail Page Component ---

interface ProductDetailPageProps {
    product: ProductDetailData;
    setSelectedProduct: (productName: string | null) => void;
    heroBannerUrl: string;
}

const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ product, setSelectedProduct, heroBannerUrl }) => {
    const { t } = useLanguage();
    const { name, hero, whatItIs, howItWorks, clinicalSpecs, indications, howToUse, options, safety, faqs, downloads, images } = product;
    const { titles } = t.productDetailPageContent;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [product]);

    return (
        <div className="bg-white/70">
            {/* Product Hero */}
            <section className="hero-section relative py-24 pt-32 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ 
                        backgroundImage: `url(${heroBannerUrl})`,
                        filter: 'blur(1px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-green-50/70"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 w-full">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 text-on-image-hero text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-emerald-900/90 brand-font mb-4">{name}</h1>
                        <p className="text-lg md:text-xl text-gray-700/90">{hero}</p>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-start-2 lg:col-span-3 px-6 py-16">
                    <div className="grid lg:grid-cols-3 gap-12">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-12">
                            <DetailSection title={titles.whatItIs}>
                                <p className="text-gray-700/90">{whatItIs}</p>
                            </DetailSection>

                            <DetailSection title={titles.howItWorks}>
                                <ul className="space-y-3 text-gray-800/90">
                                    {howItWorks.map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="flex-shrink-0 mr-3 mt-1"><CheckCircleIcon /></span>
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </DetailSection>

                             <DetailSection title={titles.indications}>
                                <ul className="list-disc list-inside text-gray-700/90 space-y-1">
                                    {indications.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </DetailSection>

                            <DetailSection title={titles.howToUse}>
                                <p className="p-4 bg-gray-50/70 border border-gray-200/50 rounded-md text-gray-700/90 font-mono text-sm">{howToUse}</p>
                            </DetailSection>
                            
                            {faqs && faqs.length > 0 && (
                                <DetailSection title={titles.faq}>
                                   <div className="space-y-4">
                                        {faqs.map((faq, index) => (
                                            <div key={index}>
                                                <h4 className="font-semibold text-gray-800/90">{faq.q}</h4>
                                                <p className="text-gray-700/90">{faq.a}</p>
                                            </div>
                                        ))}
                                    </div>
                                </DetailSection>
                            )}

                             <div className="text-center mt-12 pt-8 border-t border-gray-200/80">
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="bg-gray-100/80 text-gray-800/90 px-8 py-3 rounded-md font-semibold hover:bg-gray-200/80 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1"
                                    aria-label={t.productDetailPageContent.backButton}
                                >
                                    {t.productDetailPageContent.backButton}
                                </button>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <aside className="space-y-8">
                            <div>
                                 <h3 className="text-xl font-semibold text-emerald-800/90 mb-3">{titles.specs}</h3>
                                 <SpecTable specs={clinicalSpecs} />
                            </div>
                            
                            {options && options.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800/90 mb-3">{titles.options}</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {options.map(opt => <span key={opt} className="bg-emerald-100/70 text-emerald-800/90 text-xs font-medium px-2.5 py-1 rounded-full">{opt}</span>)}
                                    </div>
                                </div>
                            )}

                            {safety && safety.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800/90 mb-3">{titles.safety}</h3>
                                     <ul className="list-disc list-inside text-gray-700/90 space-y-1 text-sm">
                                        {safety.map(item => <li key={item}>{item}</li>)}
                                    </ul>
                                </div>
                            )}

                            {downloads && downloads.length > 0 && (
                                <div>
                                    <h3 className="text-xl font-semibold text-emerald-800/90 mb-3">{titles.downloads}</h3>
                                    <div className="space-y-3">
                                        {downloads.map(item => (
                                            <a key={item.name} href={item.link} className="block w-full text-center bg-emerald-600/90 text-white/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all text-sm shadow-md hover:shadow-lg transform hover:-translate-y-1" aria-label={`Download ${item.name}`}>
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}

                             <div className="space-y-4">
                                <ImagePlaceholder src={images.hero} alt={t.imageAlts.productHero(name)} />
                                <ImagePlaceholder src={images.macro} alt={t.imageAlts.productMacro(name)} className="h-48" />
                            </div>
                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;
import React from 'react';
import FAQItem from './FAQItem';
import { useLanguage } from '../hooks/useLanguage';

interface FAQPageProps {
    heroBannerUrl: string;
}

const FAQPage: React.FC<FAQPageProps> = ({ heroBannerUrl }) => {
    const { t } = useLanguage();
    const { hero, sections } = t.faqPageContent;

    return (
        <div className="bg-white/70">
            {/* Hero */}
            <section className="hero-section relative py-32 overflow-hidden">
                <div 
                    className="absolute inset-0 bg-cover bg-center bg-fixed" 
                    style={{ 
                        backgroundImage: `url(${heroBannerUrl})`,
                        filter: 'blur(1px)',
                    }}
                ></div>
                <div className="absolute inset-0 bg-green-50/70"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 w-full">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 text-center text-on-image-hero">
                        <h1 className="text-4xl md:text-6xl font-bold text-emerald-900/90 brand-font mb-4">{hero.title}</h1>
                        <p className="text-lg md:text-xl mx-auto text-gray-700/90">{hero.subtitle}</p>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-start-2 lg:col-span-3 px-6 py-20">
                    <div className="space-y-12">
                        {sections.map(section => (
                            <div key={section.title}>
                                <h2 className="text-3xl font-bold text-emerald-800/90 mb-6 pb-2 border-b-2 border-emerald-200/50">{section.title}</h2>
                                <div>
                                    {section.faqs.map((faq, index) => (
                                        <FAQItem key={index} faq={faq} />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQPage;
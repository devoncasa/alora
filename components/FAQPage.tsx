import React, { useState, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface FAQItemProps {
    faq: { q: string; a: string };
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
    const [isOpen, setIsOpen] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const contentId = `faq-answer-${faq.q.replace(/\s+/g, '-').toLowerCase().slice(0, 30)}`;

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="border-b border-gray-200/80">
            <button
                onClick={toggleOpen}
                className="flex justify-between items-center w-full py-5 text-left"
                aria-expanded={isOpen}
                aria-controls={contentId}
            >
                <h3 className="text-lg font-medium text-gray-800/90">{faq.q}</h3>
                <svg
                    className={`w-6 h-6 text-emerald-600/90 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </button>
            <div
                id={contentId}
                ref={contentRef}
                className="overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isOpen ? `${contentRef.current?.scrollHeight}px` : '0px' }}
                hidden={!isOpen}
            >
                <div className="pb-5 pr-6">
                    <p className="text-gray-600/90">{faq.a}</p>
                </div>
            </div>
        </div>
    );
};

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
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ 
                        backgroundImage: `url(${heroBannerUrl})`,
                        filter: 'blur(1px)',
                        transform: 'scale(1.02)'
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
                                <div className="space-y-2">
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
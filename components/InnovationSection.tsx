
import React from 'react';
import FeatureCard from './FeatureCard';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../hooks/useLanguage';

const InnovationSection: React.FC = () => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    // FIX: Use the useLanguage hook to get translated content.
    const { t } = useLanguage();
    return (
        <section id="innovation" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <div 
                    ref={ref}
                    className={`text-center mb-16 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
                >
                    {/* FIX: Use translated strings for title and subtitle. */}
                    <h2 className="text-3xl md:text-4xl font-bold text-emerald-800">{t.innovationSection.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">{t.innovationSection.subtitle}</p>
                </div>
                <div className="grid md:grid-cols-2 gap-8">
                    {/* FIX: Use feature cards from the translated content object. */}
                    {t.data.featureCards.map((feature, index) => (
                        <FeatureCard key={feature.title} feature={feature} delay={index * 100} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InnovationSection;
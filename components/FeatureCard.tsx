import React, { useState, useRef } from 'react';
import type { FeatureCardData } from '../types';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useLanguage } from '../hooks/useLanguage';

interface FeatureCardProps {
    feature: FeatureCardData;
    delay: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ feature, delay }) => {
    const { title, description, icon, longDescription, imageSrc, imageAlt } = feature;
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
    const { t } = useLanguage();
    const contentId = `feature-card-content-${delay}`;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div 
            ref={ref}
            className={`p-6 bg-green-50 rounded-xl transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            <div className="flex items-center">
                <div className="flex-shrink-0 flex items-center justify-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600">
                    {icon}
                </div>
                <div className="ml-4">
                    <h3 className="text-xl font-semibold text-emerald-800">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
            </div>
            <div
                id={contentId}
                ref={contentRef}
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px' }}
                hidden={!isExpanded}
            >
                <div className="mt-4 pt-4 border-t border-emerald-200">
                    <img src={imageSrc} alt={imageAlt} className="rounded-lg mb-4 w-full object-cover shadow-md" />
                    <p className="text-gray-600 text-left">{longDescription}</p>
                </div>
            </div>
            <button 
                onClick={toggleExpand} 
                className="read-more-btn mt-4 text-emerald-700 font-semibold"
                aria-expanded={isExpanded}
                aria-controls={contentId}
                aria-label={`Learn more about ${title}`}
            >
                {isExpanded ? t.featureCard.readLess : t.featureCard.readMore}
            </button>
        </div>
    );
};

export default FeatureCard;
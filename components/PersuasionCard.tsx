import React, { useState, useRef } from 'react';
import { CheckCircleIcon } from '../constants';

interface PersuasionCardProps {
    cardData: {
        title: string;
        text: string;
        bullets: string[];
        expandLink: string;
        collapseLink: string;
        expandedContent: {
            longDescription: string;
            imageSrc: string;
        }
    };
    imageAlt: string;
}

const PersuasionCard: React.FC<PersuasionCardProps> = ({ cardData, imageAlt }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const contentRef = useRef<HTMLDivElement>(null);
    const contentId = `persuasion-card-content-${cardData.title.replace(/\s+/g, '-').toLowerCase()}`;

    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="bg-white/70 p-8 rounded-lg shadow-md flex flex-col">
            <h2 className="text-2xl md:text-3xl font-bold text-emerald-800/90 mb-4">{cardData.title}</h2>
            <p className="text-gray-700/90 mb-6">{cardData.text}</p>
            <ul className="space-y-3 mb-6 text-gray-800/90">
                {cardData.bullets.map(bullet => (
                    <li key={bullet} className="flex items-start">
                        <span className="flex-shrink-0 mr-2 mt-1"><CheckCircleIcon /></span>
                        {bullet}
                    </li>
                ))}
            </ul>
            
            <div
                id={contentId}
                ref={contentRef}
                className="overflow-hidden transition-all duration-700 ease-in-out"
                style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : '0px' }}
                hidden={!isExpanded}
            >
                <div className="mt-4 pt-4 border-t border-emerald-200/50">
                    <img src={cardData.expandedContent.imageSrc} alt={imageAlt} className="rounded-lg mb-4 w-full object-cover shadow-md" />
                    <p className="text-gray-700/90 text-left">{cardData.expandedContent.longDescription}</p>
                </div>
            </div>

            <button 
                onClick={toggleExpand} 
                className="font-semibold text-emerald-600/90 hover:text-emerald-800 transition-colors mt-auto pt-4 text-left"
                aria-expanded={isExpanded}
                aria-controls={contentId}
                aria-label={`${isExpanded ? 'Collapse' : 'Expand'} details about ${cardData.title}`}
            >
                {isExpanded ? cardData.collapseLink : cardData.expandLink}
            </button>
        </div>
    );
};

export default PersuasionCard;
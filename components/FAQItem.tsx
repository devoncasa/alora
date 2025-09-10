import React, { useState, useRef, useLayoutEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface FAQItemProps {
    faq: { q: string; a: string };
}

const FAQItem: React.FC<FAQItemProps> = ({ faq }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLongText, setIsLongText] = useState(false);
    const contentRef = useRef<HTMLParagraphElement>(null);
    const { t } = useLanguage();

    const COLLAPSED_HEIGHT_PX = 120; // Approx 4-5 lines of text

    useLayoutEffect(() => {
        const checkTextLength = () => {
            if (contentRef.current) {
                // If the scrollable height is greater than the collapsed height, we need a toggle.
                setIsLongText(contentRef.current.scrollHeight > COLLAPSED_HEIGHT_PX);
            }
        };

        // Check on mount, after the content is rendered, and on window resize.
        checkTextLength();
        window.addEventListener('resize', checkTextLength);
        return () => window.removeEventListener('resize', checkTextLength);
    }, [faq.a]);

    return (
        <div className="border-b border-gray-200/80 py-5">
            <h3 className="text-lg font-medium text-gray-800/90 mb-3">{faq.q}</h3>
            <div 
                className="relative overflow-hidden transition-all duration-500 ease-in-out"
                style={{ maxHeight: isExpanded ? `${contentRef.current?.scrollHeight}px` : `${COLLAPSED_HEIGHT_PX}px` }}
            >
                <p ref={contentRef} className="text-gray-600/90 whitespace-pre-line pb-2">{faq.a}</p>
                {!isExpanded && isLongText && (
                    <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white/70 via-white/70 to-transparent pointer-events-none" aria-hidden="true" />
                )}
            </div>
            {isLongText && (
                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-2 font-semibold text-emerald-600/90 hover:text-emerald-800/90 transition-colors"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? t.featureCard.readLess : t.featureCard.readMore}
                </button>
            )}
        </div>
    );
};

export default FAQItem;

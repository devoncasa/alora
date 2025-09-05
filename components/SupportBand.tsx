import React from 'react';
// FIX: Removed direct import of static data.
import { useLanguage } from '../hooks/useLanguage';

const SupportBand: React.FC = () => {
    // FIX: Use the useLanguage hook to get translated content.
    const { t } = useLanguage();
    
    return (
        <section id="contact" className="py-20 bg-white text-center">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-center mb-10">
                    {/* FIX: Use support icons from the translated content object. */}
                    {t.data.supportIcons.map(item => (
                        <div key={item.name} className="flex flex-col items-center">
                            {item.icon}
                            <p className="mt-2 text-xs text-gray-600 font-medium text-center">{item.name}</p>
                        </div>
                    ))}
                </div>
                {/* FIX: Use translated strings for the title and CTA button. */}
                <h3 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">{t.supportBand.title}</h3>
                <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block">
                    {t.supportBand.cta}
                </a>
            </div>
        </section>
    );
};

export default SupportBand;
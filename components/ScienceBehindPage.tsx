import React, { useState } from 'react';
import { CheckCircleIcon } from '../constants';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '../hooks/useLanguage';
import type { AloraDataType } from '../types';

const StickyCTA = () => {
    const { t } = useLanguage();
    return (
        <div className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
            <div className="bg-white/70 p-6 rounded-lg shadow-xl border border-gray-200/50 w-64">
                <h4 className="font-bold text-lg text-emerald-800/90 mb-4">{t.sciencePageContent.stickyCta.title}</h4>
                <div className="space-y-3">
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Data Sheet" className="block w-full text-center bg-emerald-600/90 text-white/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1" aria-label={t.sciencePageContent.stickyCta.dataSheetButton}>
                        {t.sciencePageContent.stickyCta.dataSheetButton}
                    </a>
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Demo" className="block w-full text-center bg-transparent border border-emerald-600 text-emerald-600/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-600 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1" aria-label={t.sciencePageContent.stickyCta.demoButton}>
                        {t.sciencePageContent.stickyCta.demoButton}
                    </a>
                </div>
            </div>
        </div>
    )
};

const InteractiveSynergyDiagram: React.FC<{ data: AloraDataType['sciencePageContent']['sections']['synergy'] }> = ({ data }) => {
    const [activeSection, setActiveSection] = useState<'aloe' | 'pectin' | 'synergy'>('synergy');

    const sections = {
        aloe: data.aloe,
        pectin: data.pectin,
        synergy: data.synergy,
    };
    
    const activeData = sections[activeSection];

    const getButtonClass = (section: 'aloe' | 'pectin' | 'synergy') => {
        const baseClass = "absolute rounded-full border-4 flex items-center justify-center text-center font-bold transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-emerald-500";
        const activeClass = "bg-emerald-100/80 border-emerald-500 text-emerald-800 scale-105 shadow-lg z-20";
        const inactiveClass = "bg-white/50 border-gray-300 hover:border-emerald-400 text-gray-700 hover:scale-105 hover:shadow-md z-10";
        return `${baseClass} ${activeSection === section ? activeClass : inactiveClass}`;
    };

    return (
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 items-center">
            {/* Diagram */}
            <div className="relative h-64 md:h-80 w-full flex justify-center items-center">
                <button
                    onClick={() => setActiveSection('aloe')}
                    aria-pressed={activeSection === 'aloe'}
                    className={`${getButtonClass('aloe')} w-40 h-40 md:w-48 md:h-48 left-0 md:left-4`}
                >
                    <span className="p-2">{data.aloe.title}</span>
                </button>
                <button
                    onClick={() => setActiveSection('pectin')}
                    aria-pressed={activeSection === 'pectin'}
                    className={`${getButtonClass('pectin')} w-40 h-40 md:w-48 md:h-48 right-0 md:right-4`}
                >
                     <span className="p-2">{data.pectin.title}</span>
                </button>
                 <button
                    onClick={() => setActiveSection('synergy')}
                    aria-pressed={activeSection === 'synergy'}
                    className={`${getButtonClass('synergy')} w-28 h-28 md:w-32 md:h-32 z-30`}
                >
                    Synergy
                </button>
            </div>
            {/* Content */}
            <div className="min-h-[280px]">
                <h3 className="text-xl font-bold text-emerald-700/90 mb-3">{activeData.title}</h3>
                <ul className="space-y-3 text-gray-700/90">
                    {activeData.items.map(item => (
                        <li key={item} className="flex items-start p-3 bg-green-50/70 rounded-md animate-fade-in-sm">
                            <span className="flex-shrink-0 mt-0.5"><CheckCircleIcon /></span>
                            <span className="ml-3">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
             <style>{`
                @keyframes fade-in-sm {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in-sm { animation: fade-in-sm 0.4s ease-out forwards; }
            `}</style>
        </div>
    );
};

interface ScienceBehindPageProps {
    heroBannerUrl: string;
}

const ScienceBehindPage: React.FC<ScienceBehindPageProps> = ({ heroBannerUrl }) => {
    const { t } = useLanguage();
    const { hero, sections } = t.sciencePageContent;

    return (
        <div className="bg-white/70">
            <StickyCTA />
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
                    <div className="space-y-16">
                        {/* Section A — Materials & Mechanisms */}
                        <section>
                            <div className="grid md:grid-cols-2 gap-12 items-center">
                                <div>
                                    <h2 className="text-3xl font-bold text-emerald-800/90 mb-4">{sections.materials.title1}</h2>
                                    <p className="text-gray-700/90 mb-6">{sections.materials.text1}</p>
                                    
                                    <h2 className="text-3xl font-bold text-emerald-800/90 mb-4">{sections.materials.title2}</h2>
                                    <p className="text-gray-700/90">{sections.materials.text2}</p>
                                </div>
                                <div className="space-y-4">
                                    <ImagePlaceholder src="/assets/science-micrograph.jpg" alt={t.imageAlts.scienceMicrograph} />
                                    <ImagePlaceholder src="/assets/crosslink-diagram.jpg" alt={t.imageAlts.crosslinkDiagram} className="h-48" />
                                </div>
                            </div>
                             <div className="mt-8 p-6 bg-gray-50/70 rounded-lg border border-gray-200/50">
                                <h3 className="font-semibold text-emerald-700/90 mb-3">{sections.materials.tunableTitle}</h3>
                                <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2 text-sm text-gray-600/90 list-disc list-inside">
                                    {sections.materials.tunableItems.map(item => <li key={item}>{item}</li>)}
                                </ul>
                            </div>
                        </section>

                        {/* Section B — Synergy Map */}
                        <section>
                             <h2 className="text-3xl font-bold text-emerald-800/90 mb-8 text-center">{sections.synergy.title}</h2>
                             <InteractiveSynergyDiagram data={sections.synergy} />
                        </section>

                        {/* Section C — Evidence Highlights */}
                        <section>
                             <h2 className="text-3xl font-bold text-emerald-800/90 mb-8 text-center">{sections.evidence.title}</h2>
                             <div className="grid md:grid-cols-3 gap-8">
                                <div className="flex flex-col space-y-4">
                                    <ImagePlaceholder src="/assets/wound-film.jpg" alt={t.imageAlts.woundFilm} />
                                    <p className="text-gray-700/90"><strong className="text-emerald-700/90">{sections.evidence.wound.title}</strong> {sections.evidence.wound.text}</p>
                                </div>
                                 <div className="flex flex-col space-y-4">
                                    <ImagePlaceholder src="/assets/oral-film.jpg" alt={t.imageAlts.oralFilm} />
                                    <p className="text-gray-700/90"><strong className="text-emerald-700/90">{sections.evidence.oral.title}</strong> {sections.evidence.oral.text}</p>
                                </div>
                                 <div className="flex flex-col space-y-4">
                                    <ImagePlaceholder src="/assets/sheet-mask.jpg" alt={t.imageAlts.sheetMask} />
                                    <p className="text-gray-700/90"><strong className="text-emerald-700/90">{sections.evidence.skin.title}</strong> {sections.evidence.skin.text}</p>
                                </div>
                             </div>
                             <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                                {sections.evidence.kpis.map(kpi => (
                                    <div key={kpi} className="p-4 bg-emerald-50/70 border border-emerald-200/50 rounded-lg">
                                        <p className="font-bold text-emerald-800/90">{kpi}</p>
                                    </div>
                                ))}
                             </div>
                        </section>

                         {/* Section D — Safety, Quality & Pathways */}
                        <section>
                             <h2 className="text-3xl font-bold text-emerald-800/90 mb-6">{sections.safety.title}</h2>
                            <ul className="space-y-3 mb-6 list-disc list-inside text-gray-700/90">
                                 {sections.safety.items.map(item => <li key={item}>{item}</li>)}
                             </ul>
                             <p className="text-sm text-gray-600/90 p-4 bg-gray-50/70 rounded-md border border-gray-200/50">
                                {sections.safety.disclaimer}
                             </p>
                        </section>
                        
                        {/* Section E — FAQs */}
                        <section>
                            <h2 className="text-3xl font-bold text-emerald-800/90 mb-6">{sections.faq.title}</h2>
                            <div className="space-y-4">
                                {sections.faq.items.map(faq => (
                                    <div key={faq.q}>
                                        <h4 className="font-semibold text-gray-800/90">{faq.q}</h4>
                                        <p className="text-gray-700/90">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScienceBehindPage;
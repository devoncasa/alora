import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '../hooks/useLanguage';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const StickyCTA = () => {
    const { t } = useLanguage();
    return (
        <div className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
            <div className="bg-white/50 backdrop-blur-md p-6 rounded-lg shadow-xl border border-white/20 w-64 transition-all duration-300 hover:shadow-2xl">
                <h4 className="font-bold text-lg text-emerald-800/90 mb-4">{t.innovationPageContent.stickyCta.title}</h4>
                <div className="space-y-3">
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Tech Dossier" className="block w-full text-center bg-emerald-600/90 text-white/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1" aria-label={t.innovationPageContent.stickyCta.dossierButton}>
                        {t.innovationPageContent.stickyCta.dossierButton}
                    </a>
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Clinical Samples" className="block w-full text-center bg-transparent border border-emerald-600 text-emerald-600/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-600 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1" aria-label={t.innovationPageContent.stickyCta.samplesButton}>
                        {t.innovationPageContent.stickyCta.samplesButton}
                    </a>
                </div>
            </div>
        </div>
    )
};

const EnablesCard: React.FC<{ item: { title: string; text: string; icon: React.ReactNode }, index: number }> = ({ item, index }) => {
    const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });
    return (
        <div ref={ref} className={`p-6 bg-white/10 rounded-lg border border-white/20 backdrop-blur-sm transition-all duration-500 hover:bg-white/20 hover:-translate-y-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="flex justify-center mb-4">{item.icon}</div>
            <h3 className="font-bold text-white/90 text-lg mb-2">{item.title}</h3>
            <p className="text-gray-300 text-sm">{item.text}</p>
        </div>
    )
}

interface InnovationPageProps {
    heroBannerUrl: string;
}

const InnovationPage: React.FC<InnovationPageProps> = ({ heroBannerUrl }) => {
    const { t } = useLanguage();
    const { hero, sections } = t.innovationPageContent;

    return (
        <div className="bg-gray-50">
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
                <div className="absolute inset-0 bg-green-50/80"></div>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-5 w-full">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 text-center text-on-image-hero">
                        <h1 className="text-4xl md:text-6xl font-bold text-emerald-900/90 brand-font mb-4">{hero.title}</h1>
                        <p className="text-lg md:text-xl mx-auto text-gray-700/90 font-light">{hero.subtitle}</p>
                    </div>
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-start-2 lg:col-span-3 px-6 py-10 sm:py-20 space-y-10 sm:space-y-20">

                    {/* Section 1 — The Platform */}
                    <section>
                        <h2 className="text-3xl font-thin uppercase tracking-wider text-emerald-800/90 mb-4 text-center">{sections.platform.title}</h2>
                        <p className="text-center text-gray-700/90 max-w-3xl mx-auto mb-10">
                           {sections.platform.text}
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="space-y-4">
                                <ImagePlaceholder src="/assets/synergy-map-venn.jpg" alt={t.imageAlts.innovationVennDiagram} />
                                <ImagePlaceholder src="/assets/molecular-render-1.jpg" alt={t.imageAlts.molecularRender1} className="h-48" />
                            </div>
                            <ul className="space-y-4 text-gray-700/90 list-disc list-inside">
                                {sections.platform.items.map(item => <li key={item} className="pl-2">{item}</li>)}
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 — What It Enables */}
                    <section className="p-8 bg-gradient-to-br from-emerald-800 to-green-800 rounded-lg shadow-lg">
                        <h2 className="text-3xl font-thin uppercase tracking-wider text-white/90 mb-8 text-center">{sections.enables.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {sections.enables.items.map((item, index) => (
                                <EnablesCard item={item} index={index} key={item.title} />
                            ))}
                        </div>
                    </section>
                    
                    {/* Section 3 — Evidence-Led Engineering */}
                    <section>
                        <h2 className="text-3xl font-thin uppercase tracking-wider text-emerald-800/90 mb-4 text-center">{sections.performance.title}</h2>
                        <p className="text-gray-700/90 mb-8 text-center max-w-3xl mx-auto">{sections.performance.text}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            {sections.performance.kpis.map(kpi => (
                                <div 
                                    key={kpi.title} 
                                    className="p-6 bg-white border border-gray-200/50 rounded-lg shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-default flex flex-col"
                                    tabIndex={0}
                                    aria-label={`${kpi.title}: ${kpi.description}`}
                                >
                                    <p className="font-semibold text-emerald-800/90 text-sm md:text-base mb-2" aria-hidden="true">{kpi.title}</p>
                                    <p className="text-gray-600/90 text-xs flex-grow" aria-hidden="true">{kpi.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Section 4 — Customization Pathways */}
                    <section className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white rounded-lg shadow-lg">
                         <h2 className="text-3xl font-thin uppercase tracking-wider text-white/90 mb-4 text-center">{sections.customization.title}</h2>
                         <p className="text-gray-300/90 mb-10 text-center max-w-3xl mx-auto">{sections.customization.text}</p>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                            <div className="space-y-4">
                               <ImagePlaceholder src="/assets/custom-thickness.jpg" alt={t.imageAlts.customThickness} />
                               <ImagePlaceholder src="/assets/molecular-render-2.jpg" alt={t.imageAlts.molecularRender2} />
                            </div>
                            <ul className="space-y-3 text-gray-300/90 list-disc list-inside text-lg">
                                 {sections.customization.items.map(item => <li key={item} className="pl-2">{item}</li>)}
                             </ul>
                        </div>
                         <div className="text-center mt-12">
                             <a href="mailto:medical.affairs@alora.bio?subject=Innovation Session Inquiry" className="bg-emerald-600/90 text-white/90 px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block" aria-label={sections.customization.button}>
                                {sections.customization.button}
                             </a>
                         </div>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default InnovationPage;
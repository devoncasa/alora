import React from 'react';
import ImagePlaceholder from './ImagePlaceholder';
import { useLanguage } from '../hooks/useLanguage';

const StickyCTA = () => {
    const { t } = useLanguage();
    return (
        <div className="hidden lg:block fixed top-1/2 right-8 transform -translate-y-1/2 z-40">
            <div className="bg-white/70 p-6 rounded-lg shadow-xl border border-gray-200/50 w-64">
                <h4 className="font-bold text-lg text-emerald-800/90 mb-4">{t.innovationPageContent.stickyCta.title}</h4>
                <div className="space-y-3">
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Tech Dossier" className="block w-full text-center bg-emerald-600/90 text-white/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all">
                        {t.innovationPageContent.stickyCta.dossierButton}
                    </a>
                    <a href="mailto:medical.affairs@alora.bio?subject=Request for Clinical Samples" className="block w-full text-center bg-transparent border border-emerald-600 text-emerald-600/90 px-4 py-2 rounded-md font-semibold hover:bg-emerald-600 hover:text-white transition-all">
                        {t.innovationPageContent.stickyCta.samplesButton}
                    </a>
                </div>
            </div>
        </div>
    )
};

interface InnovationPageProps {
    heroBannerUrl: string;
}

const InnovationPage: React.FC<InnovationPageProps> = ({ heroBannerUrl }) => {
    const { t } = useLanguage();
    const { hero, sections } = t.innovationPageContent;

    return (
        <div className="bg-white/70">
            <StickyCTA />
            {/* Hero */}
            <section className="relative py-32">
                <div 
                    className="absolute inset-0 bg-cover bg-center" 
                    style={{ backgroundImage: `url(${heroBannerUrl})` }}
                ></div>
                <div className="absolute inset-0 bg-green-50/70"></div>
                <div className="relative z-10 container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold text-emerald-900/90 brand-font mb-4">{hero.title}</h1>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700/90">{hero.subtitle}</p>
                </div>
            </section>

            <div className="container mx-auto px-6 py-20 max-w-5xl">
                <div className="space-y-20">

                    {/* Section 1 — The Platform */}
                    <section>
                        <h2 className="text-3xl font-bold text-emerald-800/90 mb-4 text-center">{sections.platform.title}</h2>
                        <p className="text-center text-gray-700/90 max-w-3xl mx-auto mb-10">
                           {sections.platform.text}
                        </p>
                        <div className="grid md:grid-cols-2 gap-12 items-center">
                             <div className="space-y-4">
                                <ImagePlaceholder src="/assets/innovation-platform.jpg" alt={t.imageAlts.innovationPlatform} />
                                <ImagePlaceholder src="/assets/innovation-micrograph.jpg" alt={t.imageAlts.innovationMicrograph} className="h-48" />
                            </div>
                            <ul className="space-y-3 text-gray-700/90 list-disc list-inside">
                                {sections.platform.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </div>
                    </section>

                    {/* Section 2 — What It Enables */}
                    <section>
                        <h2 className="text-3xl font-bold text-emerald-800/90 mb-8 text-center">{sections.enables.title}</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-center">
                            {sections.enables.items.map(item => (
                                <div key={item.title} className="p-6 bg-gray-50/70 rounded-lg border border-gray-200/50">
                                    <h3 className="font-bold text-emerald-700/90 text-lg mb-2">{item.title}</h3>
                                    <p className="text-gray-600/90">{item.text}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Section 3 — Evidence-Led Engineering */}
                    <section>
                        <h2 className="text-3xl font-bold text-emerald-800/90 mb-4">{sections.performance.title}</h2>
                        <p className="text-gray-700/90 mb-8">{sections.performance.text}</p>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            {sections.performance.kpis.map(kpi => (
                                <div key={kpi} className="p-4 bg-emerald-50/70 border border-emerald-200/50 rounded-lg">
                                    <p className="font-bold text-emerald-800/90">{kpi}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                    
                    {/* Section 4 — Customization Pathways */}
                     <section className="p-8 bg-green-50/70 rounded-lg">
                         <h2 className="text-3xl font-bold text-emerald-800/90 mb-6">{sections.customization.title}</h2>
                        <ul className="space-y-3 mb-6 list-disc list-inside text-gray-700/90 columns-2">
                             {sections.customization.items.map(item => <li key={item}>{item}</li>)}
                         </ul>
                         <a href="mailto:medical.affairs@alora.bio?subject=Innovation Session Inquiry" className="bg-emerald-600/90 text-white/90 px-6 py-3 rounded-md font-semibold hover:bg-emerald-700 hover:text-white transition-all shadow-md hover:shadow-lg transform hover:-translate-y-1 inline-block">
                            {sections.customization.button}
                         </a>
                    </section>

                </div>
            </div>
        </div>
    );
};

export default InnovationPage;
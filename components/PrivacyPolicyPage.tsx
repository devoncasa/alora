import React from 'react';
import { useLanguage } from '../hooks/useLanguage';

const LegalSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <section>
        <h2 className="text-2xl font-bold text-emerald-800/90 mb-4 pb-2 border-b-2 border-emerald-200/50">{title}</h2>
        <div className="space-y-4 text-gray-700/90">
            {children}
        </div>
    </section>
);

interface PrivacyPolicyPageProps {
    heroBannerUrl: string;
}

const PrivacyPolicyPage: React.FC<PrivacyPolicyPageProps> = ({ heroBannerUrl }) => {
    const { t } = useLanguage();
    const { hero, introduction, informationWeCollect, howWeUseYourInformation, dataSharing, dataSecurity, yourRights } = t.privacyPageContent;

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
                        <LegalSection title={introduction.title}>
                            <p>{introduction.text}</p>
                        </LegalSection>

                        <LegalSection title={informationWeCollect.title}>
                            <ul className="list-disc list-inside space-y-2">
                                {informationWeCollect.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </LegalSection>

                        <LegalSection title={howWeUseYourInformation.title}>
                            <ul className="list-disc list-inside space-y-2">
                                {howWeUseYourInformation.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </LegalSection>

                        <LegalSection title={dataSharing.title}>
                            <p>{dataSharing.text}</p>
                            <ul className="list-disc list-inside space-y-2">
                                {dataSharing.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </LegalSection>

                        <LegalSection title={dataSecurity.title}>
                            <p>{dataSecurity.text}</p>
                        </LegalSection>

                        <LegalSection title={yourRights.title}>
                             <ul className="list-disc list-inside space-y-2">
                                {yourRights.items.map(item => <li key={item}>{item}</li>)}
                            </ul>
                        </LegalSection>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
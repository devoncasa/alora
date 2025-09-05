import React from 'react';

export type Language = 'en' | 'th';

export type ProductCardData = {
    name: string;
    value: string;
};

export type FeatureCardData = {
    title: string;
    description: string;
    icon: React.ReactNode;
    longDescription: string;
    imageSrc: string;
    imageAlt: string;
};

export type ClinicalSpec = {
    label: string;
    value: string;
};

export type ProductDetailData = {
    name: string;
    hero: string;
    whatItIs: string;
    howItWorks: string[];
    clinicalSpecs: ClinicalSpec[];
    indications: string[];
    howToUse: string;
    options: string[];
    safety: string[];
    faqs: { q: string; a: string }[];
    downloads: { name: string; link: string }[];
    images: { hero: string; macro: string; };
};

export interface AloraDataType {
    imageAlts: {
        aloraLogo: string;
        clinicalChart: string;
        skincareModel: string;
        scienceMicrograph: string;
        crosslinkDiagram: string;
        vennDiagram: string;
        woundFilm: string;
        oralFilm: string;
        sheetMask: string;
        innovationPlatform: string;
        innovationMicrograph: string;
        productHero: (name: string) => string;
        productMacro: (name: string) => string;
        heroBanner: string;
        backgroundImage: string;
        aloraPlantation: string;
        featureHealing: string;
        featureDelivery: string;
    };
    data: {
        productCards: ProductCardData[];
        featureCards: FeatureCardData[];
        trustIcons: { name: string; icon: React.ReactNode; }[];
        supportIcons: { name: string; icon: React.ReactNode; }[];
        productDetails: ProductDetailData[];
    };
    navigation: {
        products: string;
        science: string;
        innovation: string;
        contact: string;
        requestSamples: string;
    };
    footer: {
        about: { title: string; text: string; };
        explore: string;
        legal: string;
        privacy: string;
        terms: string;
        connect: string;
        copyright: string;
        disclaimer: string;
    };
    productCardContent: {
        viewDetails: string;
    };
    landingPageContent: {
        hero: {
            title: string;
            subtitle: string;
            exploreButton: string;
            scienceButton: string;
        };
        intro: string;
        persuasion: {
            clinical: {
                title: string;
                text: string;
                bullets: string[];
                expandLink: string;
                collapseLink: string;
                expandedContent: { longDescription: string; imageSrc: string; };
            };
            beauty: {
                title: string;
                text: string;
                bullets: string[];
                expandLink: string;
                collapseLink: string;
                expandedContent: { longDescription: string; imageSrc: string; };
            };
        };
        products: {
            title: string;
        };
        trust: {
            quote: string;
        };
        cta: {
            title: string;
            button: string;
        };
    };
    sciencePageContent: {
        stickyCta: {
            title: string;
            dataSheetButton: string;
            demoButton: string;
        };
        hero: {
            title: string;
            subtitle: string;
        };
        sections: {
            materials: {
                title1: string; text1: string; title2: string; text2: string;
                tunableTitle: string; tunableItems: string[];
            };
            synergy: { title: string; items: string[]; };
            evidence: {
                title: string;
                wound: { title: string; text: string; };
                oral: { title: string; text: string; };
                skin: { title: string; text: string; };
                kpis: string[];
            };
            safety: { title: string; items: string[]; disclaimer: string; };
            faq: { title: string; items: { q: string; a: string; }[]; };
        };
    };
    innovationPageContent: {
        stickyCta: { title: string; dossierButton: string; samplesButton: string; };
        hero: { title: string; subtitle: string; };
        sections: {
            platform: { title: string; text: string; items: string[]; };
            enables: { title: string; items: { title: string; text: string; }[]; };
            performance: { title: string; text: string; kpis: string[]; };
            customization: { title: string; items: string[]; button: string; };
        };
    };
    productDetailPageContent: {
        backButton: string;
        titles: {
            whatItIs: string;
            howItWorks: string;
            specs: string;
            indications: string;
            howToUse: string;
            options: string;
            safety: string;
            faq: string;
            downloads: string;
        };
    };
    featureCard: { readMore: string; readLess: string; };
    heroSection: { title: string; subtitle: string; exploreButton: string; scienceButton: string; };
    innovationSection: { title: string; subtitle: string; };
    introParagraph: { text: string; };
    persuasionSection: {
        clinical: { title: string; text: string; cta: string; };
        beauty: { title: string; text: string; cta: string; };
    };
    productsSection: { trustQuote: string; ctaTitle: string; ctaButton: string; };
    sustainabilitySection: { title: string; text: string; cta: string; };
    supportBand: { title: string; cta: string; };
    seo: {
        landing: { title: string; description: string; };
        science: { title: string; description: string; };
        innovation: { title: string; description: string; };
    };
}


export interface LanguageContextType {
    language: Language;
    setLanguage: (language: Language) => void;
    t: AloraDataType;
}
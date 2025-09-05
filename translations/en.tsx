import React from 'react';
import { ISOIcon, CEIcon, CrueltyFreeIcon, BiodegradableIcon, SterileIcon, HealingIcon, DeliveryIcon } from '../constants';
import type { AloraDataType } from '../types';

export const enContent: AloraDataType = {
    imageAlts: {
        aloraLogo: 'Alora Logo',
        clinicalChart: 'Chart showing clinical data on wound healing rates',
        skincareModel: 'Model with glowing skin after using a skincare mask',
        scienceMicrograph: 'Electron micrograph showing the polymer matrix structure',
        crosslinkDiagram: 'Diagram illustrating the ionic cross-linking of pectin chains',
        vennDiagram: 'Venn diagram showing the synergy of Aloe and Pectin properties',
        woundFilm: 'Close-up of the Alora wound film applied to skin',
        oralFilm: 'Illustration of an oral patch adhering to the mucosa',
        sheetMask: 'Person wearing the transparent Alora facial sheet mask',
        innovationPlatform: 'Infographic displaying the versatility of the Alora technology platform',
        innovationMicrograph: 'High-magnification view of the biofilm structure',
        productHero: (name: string) => `Hero image for ${name}`,
        productMacro: (name: string) => `Macro close-up shot of ${name} texture`,
        heroBanner: 'Hero section banner with an abstract scientific background',
        backgroundImage: 'Abstract background image',
        aloraPlantation: 'Alora aloe vera plantation',
        featureHealing: 'Micrograph showing cell regeneration',
        featureDelivery: 'Diagram showing controlled release mechanism',
    },
    data: {
        productCards: [
            { name: 'Alora Clinical Wound Film', value: 'A sterile, bioactive film for acute and chronic wounds, promoting moist healing.' },
            { name: 'Alora Oral Mucoadhesive Patch', value: 'A flexible patch for oral lesions, providing protection and controlled release.' },
            { name: 'Alora Ocular Delivery Film', value: 'A transparent, lubricating film for dry eye and post-surgical care.' },
            { name: 'Alora Pro-Collagen Skincare Mask', value: 'A luxury facial mask for deep hydration and peptide delivery.' },
            { name: 'Alora Post-Procedure Calming Film', value: 'A soothing film to reduce redness and inflammation after cosmetic procedures.' },
            { name: 'Alora Bio-Active Scar Sheet', value: 'A hydrating sheet to improve the appearance of new and old scars.' },
        ],
        featureCards: [
            {
                title: 'Accelerated Healing',
                description: 'Bioactive Aloe vera polysaccharides support cellular regeneration.',
                icon: <HealingIcon />,
                longDescription: 'Our unique formulation leverages the high molecular weight of acemannan from Aloe vera, which has been shown to stimulate macrophages, fibroblasts, and keratinocytes. This accelerates the natural healing cascade, leading to faster wound closure and reduced scarring. The pectin matrix maintains an optimal moist environment, crucial for re-epithelialization.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/feature-healing-micrograph.webp',
                imageAlt: 'Micrograph showing cell regeneration'
            },
            {
                title: 'Advanced Delivery System',
                description: 'Tunable pectin matrix allows for controlled, sustained release of actives.',
                icon: <DeliveryIcon />,
                longDescription: 'The cross-linked pectin structure creates a hydrogel matrix that can be precisely tuned to control the diffusion rate of active ingredients. Whether it\'s a low-molecular-weight drug or a larger peptide, our platform ensures a steady, predictable release over periods ranging from 1 to 72 hours, improving therapeutic efficacy and patient compliance.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/feature-delivery-diagram.webp',
                imageAlt: 'Diagram showing controlled release mechanism'
            }
        ],
        trustIcons: [
            { name: 'ISO 13485 Compliant', icon: <ISOIcon /> },
            { name: 'CE-Mark Ready', icon: <CEIcon /> },
            { name: 'Cruelty-Free', icon: <CrueltyFreeIcon /> },
            { name: 'Biodegradable', icon: <BiodegradableIcon /> },
        ],
        supportIcons: [
            { name: 'ISO 13485 Compliant', icon: <ISOIcon /> },
            { name: 'CE-Mark Ready', icon: <CEIcon /> },
            { name: 'Sterile Options', icon: <SterileIcon /> },
            { name: 'Cruelty-Free', icon: <CrueltyFreeIcon /> },
        ],
        productDetails: [
           {
                name: 'Alora Clinical Wound Film',
                hero: 'An advanced, sterile, dual-biopolymer film designed to accelerate healing in a wide range of acute and chronic wounds by creating an optimal moist micro-environment.',
                seo: {
                    title: 'Alora Clinical Wound Film | Alora Biofilm',
                    description: 'An advanced, sterile, dual-biopolymer film designed to accelerate healing in a wide range of acute and chronic wounds by creating an optimal moist micro-environment.'
                },
                whatItIs: 'Alora Wound Film is a transparent, flexible, and highly absorbent dressing made from a synergistic matrix of aloe polysaccharides (acemannan) and plant-derived pectin. It provides a moist, breathable barrier that protects the wound from contamination while actively supporting the body\'s natural healing processes.',
                howItWorks: [
                    'Maintains a moist wound environment essential for re-epithelialization.',
                    'Acemannan stimulates fibroblast and keratinocyte activity.',
                    'Calcium-crosslinked pectin absorbs exudate and forms a protective gel.',
                    'Reduces pain and inflammation through its soothing, cooling properties.',
                    'Conforms to wound contours for comfortable, long-lasting wear.',
                ],
                clinicalSpecs: [
                    { label: 'Material', value: 'Aloe Polysaccharide, Pectin (High-Methoxyl)' },
                    { label: 'Sterility', value: 'Gamma Irradiation (SAL 10⁻⁶)' },
                    { label: 'Wear Time', value: 'Up to 72 hours' },
                    { label: 'MVTR', value: 'Approx. 2200 g/m²/24hr' },
                    { label: 'Absorbency', value: 'High (Up to 15x its weight)' },
                ],
                indications: ['Pressure ulcers (Stage I-IV)', 'Diabetic foot ulcers', 'Venous leg ulcers', 'Partial and full-thickness wounds', 'Donor sites and skin grafts', 'Post-operative surgical wounds', 'First and second-degree burns'],
                howToUse: '1. Cleanse wound per protocol. 2. Select film size to overlap wound margin by 2cm. 3. Apply film directly to wound bed. 4. Secure with secondary dressing if required. 5. Change every 3-7 days or when saturated.',
                options: ['Standard sizes', 'Fenestrated versions', 'Antimicrobial (Silver/PHMB) versions'],
                safety: ['ISO 10993 Biocompatible', 'Non-cytotoxic', 'Low-sensitivity potential', 'Latex-free'],
                faqs: [
                    { q: 'Is a secondary dressing required?', a: 'For moderately to highly exudative wounds, a secondary absorbent dressing is recommended to manage excess fluid.' },
                    { q: 'Can it be used on infected wounds?', a: 'The standard film is not indicated for infected wounds. Consider our antimicrobial version under clinical supervision for such cases.' }
                ],
                downloads: [
                    { name: 'Download Data Sheet (PDF)', link: '#' },
                    { name: 'Download Application Guide (PDF)', link: '#' },
                ],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-hero.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-macro.webp',
                }
            },
            {
                name: 'Alora Oral Mucoadhesive Patch',
                hero: 'A targeted, dissolvable patch that adheres to oral mucosa, providing a protective barrier and sustained delivery for localized treatment.',
                seo: {
                    title: 'Alora Oral Mucoadhesive Patch | Alora Biofilm',
                    description: 'A targeted, dissolvable patch that adheres to oral mucosa, providing a protective barrier and sustained delivery for localized treatment.'
                },
                whatItIs: 'This mucoadhesive patch is engineered from a blend of aloe and pectin that becomes highly adhesive in the moist oral environment. It protects lesions like aphthous ulcers from irritation while delivering soothing or active ingredients directly to the site.',
                howItWorks: [
                    'Adheres to oral mucosa within seconds of contact.',
                    'Forms a protective barrier over ulcers or lesions.',
                    'Gradually dissolves to release aloe and other actives.',
                    'Enhances bioavailability of incorporated agents.',
                ],
                clinicalSpecs: [
                    { label: 'Material', value: 'Aloe Polysaccharide, Pectin (Low-Methoxyl)' },
                    { label: 'Adhesion Time', value: '2-6 hours' },
                    { label: 'Dissolution', value: 'Fully dissolvable' },
                ],
                indications: ['Aphthous ulcers (canker sores)', 'Oral lichen planus', 'Gingivitis-related inflammation', 'Denture irritation spots'],
                howToUse: 'Apply the patch to the clean, dry lesion area. Hold gently for 20 seconds. Avoid eating or drinking for 1 hour.',
                options: ['Different sizes', 'Flavor options', 'With active ingredients (e.g., Lidocaine, Hyaluronic Acid)'],
                safety: ['Food-grade materials', 'ISO 10993 Biocompatible'],
                faqs: [],
                downloads: [{ name: 'Download Data Sheet (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-hero.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-macro.webp',
                }
            },
            {
                name: 'Alora Pro-Collagen Skincare Mask',
                hero: 'A luxurious, transparent biofilm sheet mask that delivers a clinical-grade dose of hydration, peptides, and antioxidants for visibly plumper, radiant skin.',
                seo: {
                    title: 'Alora Pro-Collagen Skincare Mask | Alora Biofilm',
                    description: 'A luxurious, transparent biofilm sheet mask that delivers a clinical-grade dose of hydration, peptides, and antioxidants for visibly plumper, radiant skin.'
                },
                whatItIs: 'Unlike traditional fiber masks, this is a solid hydrogel sheet of pure aloe-pectin biofilm. It adheres perfectly to facial contours, creating an occlusive barrier that dramatically enhances the penetration of its serum, which is infused with Vitamin C, Hyaluronic Acid, and Matrixyl peptides.',
                howItWorks: [
                    'Creates a "second skin" effect for maximum ingredient absorption.',
                    'Delivers deep, lasting hydration to the epidermis.',
                    'Soothes skin and reduces visible redness.',
                    'Provides a cooling sensation upon application.',
                ],
                clinicalSpecs: [
                    { label: 'Key Ingredients', value: 'Aloe Polysaccharides, Pectin, Vitamin C, Hyaluronic Acid, Peptides' },
                    { label: 'Application Time', value: '20-30 minutes' },
                    { label: 'Material', value: 'Biofilm Hydrogel' },
                ],
                indications: ['Dehydrated skin', 'Fine lines and wrinkles', 'Dullness and uneven tone', 'Post-procedure soothing'],
                howToUse: 'Apply to clean, dry face. Leave on for 20-30 minutes. Remove and massage in any remaining serum. Do not rinse.',
                options: ['Single-use sachets', 'Professional packs'],
                safety: ['Dermatologist-tested', 'Fragrance-free', 'Hypoallergenic'],
                faqs: [],
                downloads: [{ name: 'Download Product Brochure (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-hero.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-macro.webp',
                }
            },
            {
                name: 'Alora Ocular Delivery Film',
                hero: 'An innovative, transparent ocular film providing sustained lubrication and therapeutic delivery.',
                seo: {
                    title: 'Alora Ocular Delivery Film | Alora Biofilm',
                    description: 'An innovative, transparent ocular film providing sustained lubrication and therapeutic delivery.'
                },
                whatItIs: 'A micro-thin, sterile film of aloe and pectin that dissolves slowly upon insertion into the conjunctival sac.',
                howItWorks: ['Provides sustained lubrication.', 'Can be loaded with ophthalmic drugs for controlled release.'],
                clinicalSpecs: [{ label: 'Material', value: 'Ophthalmic-grade Aloe/Pectin' }],
                indications: ['Dry Eye Syndrome', 'Post-surgical care'],
                howToUse: 'Place in the lower conjunctival cul-de-sac.',
                options: ['Various drug payloads'],
                safety: ['Sterile', 'Biocompatible'],
                faqs: [],
                downloads: [],
                images: { hero: '', macro: '' }
            },
            {
                name: 'Alora Post-Procedure Calming Film',
                hero: 'A sterile, soothing film to accelerate recovery after aesthetic procedures.',
                seo: {
                    title: 'Alora Post-Procedure Calming Film | Alora Biofilm',
                    description: 'A sterile, soothing film to accelerate recovery after aesthetic procedures.'
                },
                whatItIs: 'A cooling, hydrating film applied immediately after procedures like microneedling or laser resurfacing.',
                howItWorks: ['Reduces redness and inflammation.', 'Provides a protective, hydrating barrier.'],
                clinicalSpecs: [{ label: 'Key Ingredient', value: 'High-concentration Aloe Polysaccharide' }],
                indications: ['Post-laser', 'Post-microneedling', 'Post-chemical peel'],
                howToUse: 'Apply to treated area for 30-60 minutes.',
                options: ['Facial masks', 'Custom shapes'],
                safety: ['Sterile', 'Hypoallergenic'],
                faqs: [],
                downloads: [],
                images: { hero: '', macro: '' }
            },
            {
                name: 'Alora Bio-Active Scar Sheet',
                hero: 'A discreet, hydrating sheet to minimize and improve the appearance of scars.',
                seo: {
                    title: 'Alora Bio-Active Scar Sheet | Alora Biofilm',
                    description: 'A discreet, hydrating sheet to minimize and improve the appearance of scars.'
                },
                whatItIs: 'A soft, self-adhesive sheet that provides occlusion and hydration to scar tissue.',
                howItWorks: ['Hydrates the stratum corneum.', 'Softens and flattens hypertrophic and keloid scars.'],
                clinicalSpecs: [{ label: 'Wear Time', value: 'Up to 24 hours' }],
                indications: ['Surgical scars', 'Burn scars', 'Acne scars'],
                howToUse: 'Apply to clean, dry scar. Wear for 12-24 hours daily.',
                options: ['Various sizes and shapes'],
                safety: ['Medical-grade adhesive', 'Latex-free'],
                faqs: [],
                downloads: [],
                images: { hero: '', macro: '' }
            }
        ]
    },
    navigation: {
        products: 'Products',
        science: 'The Science',
        innovation: 'Innovation',
        contact: 'Contact',
        requestSamples: 'Request Samples',
    },
    footer: {
        about: {
            title: 'Alora',
            text: 'Pioneering bioactive films for advanced healing and skincare, powered by nature\'s synergy.'
        },
        explore: 'Explore',
        legal: 'Legal',
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        connect: 'Connect',
        copyright: `© ${new Date().getFullYear()} Alora Biotechnology. All rights reserved.`,
        disclaimer: 'This information is for informational purposes only and does not constitute medical advice.',
    },
    productCardContent: {
        viewDetails: 'View Details'
    },
    landingPageContent: {
        hero: {
            title: 'Clinical & Skincare Portfolio — Alora × Pectin Synergy',
            subtitle: 'Bioactive Aloe vera films merged with pectin delivery science for faster healing, deeper hydration, and controlled release.',
            exploreButton: 'Explore Products',
            scienceButton: 'See the Science',
        },
        intro: 'Alora unites Aloe vera biofilm with advanced pectin delivery to create clinical-grade wound films, mucosal patches, and luxury skincare masks. Our dual-biopolymer matrix hydrates, soothes, and controls release up to 72 hours, accelerating recovery while feeling weightless and clean on skin. Biocompatible, biodegradable, and engineered for visible results.',
        persuasion: {
            clinical: {
                title: 'Designed for Faster, Safer Healing',
                text: 'Acemannan-rich Aloe supports fibroblast activity and a moist micro-environment; calcium-crosslinked pectin forms a stable scaffold that reduces TEWL and improves comfort.',
                bullets: ['ISO 10993 biocompatibility', 'Moisture-balanced occlusion', 'Mucoadhesive options (oral/ocular)', '24–72 h controlled release of actives'],
                expandLink: 'View clinical use cases →',
                collapseLink: 'Hide clinical use cases',
                expandedContent: {
                    longDescription: 'The result: quicker re-epithelialization, less irritation, and reliable wear across wound, oral, and ocular sites. Our platform technology is adaptable for various therapeutic needs, from chronic wound management to targeted drug delivery.',
                    imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/persuasion-clinical-chart.webp',
                }
            },
            beauty: {
                title: 'Luxury Care, Clinical Logic',
                text: 'Alora’s cosmetic masks and gel-films deliver deep hydration and gradual diffusion of Vitamin C, HA, and peptides for glow, elasticity, and post-procedure calm.',
                bullets: ['Hydration ↑, TEWL ↓', 'Stabilized actives (C/HA/EGF)', 'Weightless feel, no slip', 'Visible radiance within minutes'],
                expandLink: 'Explore skincare line →',
                collapseLink: 'Hide skincare line',
                expandedContent: {
                    longDescription: 'The plant-based matrix is fragrance-free, sensitive-skin friendly, and dissolves cleanly without residue. It provides an unparalleled delivery system for active ingredients, ensuring they penetrate deeper for more noticeable, longer-lasting results.',
                    imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/persuasion-beauty-model.webp',
                }
            },
        },
        products: {
            title: 'Our Product Platforms',
        },
        trust: {
            quote: '“Aloe polysaccharides (acemannan) + high/low-methoxyl pectins = biocompatible, bioactive, and controllable release.”',
        },
        cta: {
            title: 'Request clinical dossiers & samples',
            button: 'Contact Medical Affairs',
        },
    },
    sciencePageContent: {
        stickyCta: {
            title: 'Get the Full Data',
            dataSheetButton: 'Request Data Sheet',
            demoButton: 'Request a Demo'
        },
        hero: {
            title: 'The Science Behind the Synergy',
            subtitle: 'Unpacking the materials science of how Aloe vera and Pectin combine to create a superior bioactive platform.'
        },
        sections: {
            materials: {
                title1: 'Component A: Bioactive Aloe',
                text1: 'We use a proprietary extraction method to isolate high-molecular-weight acemannan, the primary bioactive polysaccharide in Aloe vera. This component is responsible for stimulating cellular activity, modulating inflammation, and promoting angiogenesis.',
                title2: 'Component B: Structural Pectin',
                text2: 'Derived from citrus peel, pectin provides the structural backbone. We utilize both high and low-methoxyl pectins, which can be cross-linked with divalent cations (like Ca²⁺) to form hydrogel matrices with precisely controlled physical properties.',
                tunableTitle: 'Key Tunable Properties:',
                tunableItems: ['Porosity', 'Swelling Ratio', 'Erosion Rate', 'Adhesion Strength', 'Mechanical Strength', 'Drug Elution Profile'],
            },
            synergy: {
                title: 'The Alora × Pectin Synergy',
                items: [
                    'Aloe provides the bio-activity; Pectin provides the tunable structure and delivery control.',
                    'Pectin stabilizes the delicate Aloe polysaccharides, preserving their bioactivity.',
                    'The combination creates a superior moisture-retention environment compared to either polymer alone.',
                    'Allows for both solid, non-dissolving films (for wounds) and fully dissolvable films (for oral/ocular use).',
                    'The final matrix is biocompatible, biodegradable, and sourced from sustainable plant origins.'
                ]
            },
            evidence: {
                title: 'Evidence Highlights',
                wound: {
                    title: 'Wound Healing:',
                    text: 'In-vitro studies show a 40% increase in fibroblast proliferation vs. control. In-vivo models demonstrate significantly faster re-epithelialization.'
                },
                oral: {
                    title: 'Oral Delivery:',
                    text: 'Mucoadhesion tests show retention times exceeding 4 hours, with 90% of a model drug delivered locally, minimizing systemic exposure.'
                },
                skin: {
                    title: 'Skincare Hydration:',
                    text: 'Corneometer readings indicate a 250% increase in skin hydration after 20 minutes, with hydration remaining 80% elevated after 8 hours.'
                },
                kpis: ['Faster Healing', 'Enhanced Delivery', 'Superior Hydration', 'Tunable Performance']
            },
            safety: {
                title: 'Safety, Quality & Pathways',
                items: [
                    'All materials are GRAS (Generally Recognized As Safe) and sourced from reputable suppliers.',
                    'Manufactured under ISO 13485 compliant processes.',
                    'Comprehensive biocompatibility testing (ISO 10993) shows no cytotoxicity, sensitization, or irritation.',
                    'Clear regulatory pathways for Class I/II/III medical devices and cosmetics.'
                ],
                disclaimer: 'Disclaimer: The data presented is for informational purposes. Specific product claims are subject to regulatory approval in the target market.'
            },
            faq: {
                title: 'Frequently Asked Technical Questions',
                items: [
                    { q: 'What is the cross-linking mechanism?', a: 'Primarily ionic cross-linking using calcium chloride. The density of cross-links is controlled by Ca²⁺ concentration and pectin type, which dictates the material\'s properties.' },
                    { q: 'How is drug loading achieved?', a: 'Actives can be incorporated into the polymer solution before casting and drying, resulting in a homogenous distribution throughout the matrix.' }
                ]
            }
        }
    },
    innovationPageContent: {
        stickyCta: {
            title: 'Partner with Us',
            dossierButton: 'Request Tech Dossier',
            samplesButton: 'Request Clinical Samples'
        },
        hero: {
            title: 'The Alora Innovation Platform',
            subtitle: 'A versatile, evidence-led biopolymer technology ready for your next product breakthrough.'
        },
        sections: {
            platform: {
                title: 'A Platform, Not Just a Product',
                text: 'The Alora technology is a foundational platform for creating a diverse range of medical and cosmetic applications. By precisely controlling the ratio and cross-linking of our two core biopolymers, we can engineer materials with a wide spectrum of physical and therapeutic properties.',
                items: [
                    'Base formulation: Aloe Polysaccharide + Pectin.',
                    'Modification via ionic cross-linking, pH adjustment, and plasticizers.',
                    'Can be loaded with APIs, peptides, growth factors, and other actives.',
                    'Processing methods include film casting, lyophilization, and 3D printing.',
                    'Scalable manufacturing process from lab bench to commercial production.'
                ]
            },
            enables: {
                title: 'What This Enables',
                items: [
                    { title: 'Advanced Wound Care', text: 'Dressings that are bioactive, absorbent, and transparent.' },
                    { title: 'Drug Delivery', text: 'Localized, controlled release for oral, transdermal, and ocular applications.' },
                    { title: 'Luxury Skincare', text: 'High-performance masks and patches with superior ingredient delivery.' }
                ]
            },
            performance: {
                title: 'Evidence-Led Engineering',
                text: 'Our development is driven by data. We systematically map material properties to clinical performance, allowing for rapid prototyping and optimization to meet specific product requirements.',
                kpis: ['Tunable Adhesion', 'Controlled Release', 'Optimized MVTR', 'High Purity']
            },
            customization: {
                title: 'Customization Pathways',
                items: [
                    'Material thickness & size',
                    'Active ingredient & load',
                    'Elution profile (release rate)',
                    'Adhesion properties',
                    'Dissolution time',
                    'Mechanical strength',
                    'Transparency / Opacity',
                    'Sterility requirements'
                ],
                button: 'Start an Innovation Session'
            }
        }
    },
    productDetailPageContent: {
        backButton: '← Back to all products',
        titles: {
            whatItIs: 'What It Is',
            howItWorks: 'How It Works',
            specs: 'Clinical Specifications',
            indications: 'Indications for Use',
            howToUse: 'How to Use',
            options: 'Available Options',
            safety: 'Safety & Biocompatibility',
            faq: 'Frequently Asked Questions',
            downloads: 'Downloads'
        }
    },
    featureCard: {
        readMore: 'Read More',
        readLess: 'Read Less',
    },
    heroSection: {
        title: 'Clinical & Skincare Portfolio — Alora × Pectin Synergy',
        subtitle: 'Bioactive Aloe vera films merged with pectin delivery science for faster healing, deeper hydration, and controlled release.',
        exploreButton: 'Explore Products',
        scienceButton: 'See the Science',
    },
    innovationSection: {
        title: 'The Future is Natural',
        subtitle: 'Our groundbreaking Aloe Vera Biofilm technology harnesses nature\'s power to create solutions that are both effective and earth-friendly.',
    },
    introParagraph: {
        text: 'Alora unites Aloe vera biofilm with advanced pectin delivery to create clinical-grade wound films, mucosal patches, and luxury skincare masks. Our dual-biopolymer matrix hydrates, soothes, and controls release up to 72 hours, accelerating recovery while feeling weightless and clean on skin. Biocompatible, biodegradable, and engineered for visible results.',
    },
    persuasionSection: {
        clinical: {
            title: 'Designed for Faster, Safer Healing',
            text: 'Acemannan-rich Aloe supports fibroblast activity and a moist micro-environment; calcium-crosslinked pectin forms a stable scaffold that reduces TEWL and improves comfort. The result: quicker re-epithelialization, less irritation, and reliable wear across wound, oral, and ocular sites.',
            cta: 'View clinical use cases →',
        },
        beauty: {
            title: 'Luxury Care, Clinical Logic',
            text: 'Alora’s cosmetic masks and gel-films deliver deep hydration and gradual diffusion of Vitamin C, HA, and peptides for glow, elasticity, and post-procedure calm. The plant-based matrix is fragrance-free, sensitive-skin friendly, and dissolves cleanly without residue.',
            cta: 'Explore skincare line →',
        }
    },
    productsSection: {
        trustQuote: '“Aloe polysaccharides (acemannan) + high/low-methoxyl pectins = biocompatible, bioactive, and controllable release.”',
        ctaTitle: 'Request clinical dossiers & samples',
        ctaButton: 'Contact Medical Affairs',
    },
    sustainabilitySection: {
        title: 'A Commitment to the Planet',
        text: 'Sustainability is not an afterthought; it\'s our foundation. From responsibly managed aloe farms to our zero-waste production process, every step is designed to nurture and protect our planet. Our products close the loop, returning to the earth as harmlessly as they came from it.',
        cta: 'Learn About Our Process',
    },
    supportBand: {
        title: 'Request data sheet & samples',
        cta: 'Contact Medical Affairs',
    },
    seo: {
        landing: {
            title: 'Alora Biofilm – Clinical & Skincare Portfolio',
            description: 'Alora Biofilm combines bioactive Aloe vera films with pectin delivery science for advanced wound care, skincare, and controlled release applications.'
        },
        science: {
            title: 'The Science of Synergy | Alora Biofilm',
            description: 'Explore the materials science behind our dual-biopolymer platform, combining Aloe vera\'s bioactivity with Pectin\'s structural control for superior performance.'
        },
        innovation: {
            title: 'Innovation Platform | Alora Biofilm',
            description: 'Discover the Alora innovation platform, a versatile biopolymer technology for creating custom solutions in wound care, drug delivery, and cosmetics.'
        }
    }
};
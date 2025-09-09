import React from 'react';
import { ISOIcon, CEIcon, CrueltyFreeIcon, BiodegradableIcon, SterileIcon, HealingIcon, DeliveryIcon, WoundCareIcon, DrugDeliveryIcon, SkincareIcon } from '../constants';
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
        innovationPlatform: 'Dynamic 3D infographic showing the Aloe × Pectin dual-helix structure',
        innovationMicrograph: 'Animated GIF of pectin cross-linking under Ca²⁺ ions',
        customThickness: 'Diagram showing custom thickness options for Alora films',
        drugElutionGraph: 'Graph showing tunable drug elution profiles over time',
        innovationVennDiagram: 'Venn Diagram illustrating the synergy between Aloe and Pectin properties for the innovation platform',
        molecularRender1: '3D molecular render of the Alora biopolymer structure',
        molecularRender2: '3D render illustrating API integration within the Alora polymer matrix',
        productHero: (name: string) => `Hero image for ${name}`,
        productMacro: (name: string) => `Macro close-up shot of ${name} texture`,
        heroBanner: 'Hero section banner with an abstract scientific background',
        backgroundImage: 'Abstract background image',
        aloraPlantation: 'Alora aloe vera plantation',
        featureHealing: 'Micrograph showing cell regeneration',
        featureDelivery: 'Diagram showing controlled release mechanism',
        introVisual1: 'Infographic showing Aloe × Pectin synergy',
        introVisual2: 'High-magnification image of biofilm structure',
        introVisual3: 'Model applying transparent biofilm skincare mask',
    },
    data: {
        productCards: [
            { 
                name: 'Alora Clinical Wound Film', 
                description1: 'A sterile, transparent wound dressing engineered from Aloe polysaccharides and citrus pectin. Provides a moist healing environment while protecting against external contaminants.',
                description2: 'Clinically proven to accelerate closure, reduce scarring, and minimize pain. Designed for hospitals, clinics, and home wound care.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-film-4x3.webp'
            },
            { 
                name: 'Alora Oral Mucoadhesive Patch', 
                description1: 'A dissolvable patch that adheres to oral mucosa, forming a protective barrier over ulcers and lesions. Aloe vera soothes while pectin provides adhesion.',
                description2: 'Ideal for aphthous ulcers, denture irritation, and oral inflammation. Ensures targeted delivery and comfort.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-patch-4x3.webp'
            },
            { 
                name: 'Alora Ocular Delivery Film',
                description1: 'A micro-thin, sterile ocular film designed for sustained hydration and controlled release of ophthalmic actives.',
                description2: 'Supports patients with dry eye, post-LASIK recovery, and corneal protection. Transparent, comfortable, and easy to apply.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-film-4x3.webp'
            },
            { 
                name: 'Alora Pro-Collagen Skincare Mask',
                description1: 'A luxury hydrogel mask infused with Vitamin C, HA, and peptides. Designed as a “second skin” for maximum absorption.',
                description2: 'Provides deep hydration, brightening, and post-procedure soothing. Dermatologist-tested, fragrance-free, and sensitive-skin friendly.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-collagen-mask-4x3.webp'
            },
            { 
                name: 'Alora Post-Procedure Calming Film',
                description1: 'A cooling, hydrating film to be applied immediately after procedures like microneedling or laser therapy.',
                description2: 'Reduces redness, restores comfort, and accelerates skin recovery. Suitable for clinics and professional cosmetic care.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-film-4x3.webp'
            },
            { 
                name: 'Alora Bio-Active Scar Sheet',
                description1: 'A discreet, self-adhesive sheet that hydrates and softens scar tissue. Designed to reduce hypertrophy and improve texture.',
                description2: 'Effective for surgical scars, burns, and acne marks. Comfortable to wear up to 24 hours daily.',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-sheet-4x3.webp'
            },
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
            { name: 'ISO 1345 Compliant', icon: <ISOIcon /> },
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
                slug: 'clinical-wound-film',
                schemaType: 'MedicalDevice',
                hero: 'An advanced, sterile, dual-biopolymer film designed to accelerate healing in a wide range of acute and chronic wounds by creating an optimal moist micro-environment.',
                seo: {
                    title: 'Alora Clinical Wound Film | Advanced Biopolymer Dressing for Healing',
                    description: "A sterile, transparent biopolymer dressing for acute and chronic wounds. Alora's aloe and pectin film accelerates moist wound healing for diabetic ulcers, pressure sores, and post-operative care.",
                    keywords: ['wound film', 'sterile dressing', 'chronic wounds', 'acemannan', 'pectin dressing', 'diabetic ulcer treatment', 'advanced wound care', 'biopolymer dressing', 'pressure ulcer', 'venous leg ulcer', 'moist wound healing', 'faster re-epithelialization', 'skin graft dressing', 'post-operative care'],
                    aiKeywords: ['medical supplies for wound management', 'innovative healing technologies', 'plant-based wound dressings', 'bioactive materials for skin repair', 'clinical wound care solutions'],
                    about: ['Acemannan benefits for skin', 'pectin hydrogels in medicine', 'moisture balance for wound healing', 'biocompatible medical devices'],
                    mentions: ['ISO 10993', 'Gamma Irradiation', 'MVTR', 'Fibroblast stimulation', 'Keratinocyte activity']
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
                howToUse: '1. Cleanse wound area according to standard clinical protocol and pat surrounding skin dry. 2. Select a film size that provides at least a 2cm (1-inch) overlap onto the healthy skin around the wound margin. 3. Remove the film from the sterile pouch. Apply the film directly to the wound bed, ensuring smooth contact. 4. If required, secure the film with a secondary dressing like a transparent film, tape, or light bandage, especially on high-friction areas. 5. The film can be left in place for up to 7 days, or changed when the exudate reaches the film edge.',
                options: ['Available in various standard sizes (e.g., 5x5cm, 10x10cm, 15x15cm). Fenestrated versions are available for draining wounds. Custom formulations with antimicrobial agents (Silver, PHMB) can be developed for specific clinical needs.'],
                safety: ['Fully biocompatible per ISO 10993 testing standards for cytotoxicity, sensitization, and intracutaneous reactivity. Terminally sterilized using gamma irradiation. Formulated without latex, parabens, or fragrances to minimize sensitivity potential.'],
                faqs: [
                    { q: 'Is a secondary dressing required?', a: 'For moderately to highly exudative wounds, a secondary absorbent dressing is recommended to manage excess fluid.' },
                    { q: 'Can it be used on infected wounds?', a: 'The standard film is not indicated for infected wounds. Consider our antimicrobial version under clinical supervision for such cases.' }
                ],
                downloads: [
                    { name: 'Download Data Sheet (PDF)', link: '#' },
                    { name: 'Download Application Guide (PDF)', link: '#' },
                ],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-macro-4x3.webp',
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-WND-001',
                gtin: '012345678912',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '15.00',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                },
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '4.9',
                    reviewCount: '88'
                }
            },
            {
                name: 'Alora Oral Mucoadhesive Patch',
                slug: 'oral-mucoadhesive-patch',
                schemaType: 'MedicalDevice',
                hero: 'A targeted, dissolvable patch that adheres to oral mucosa, providing a protective barrier and sustained delivery for localized treatment.',
                seo: {
                    title: 'Alora Oral Mucoadhesive Patch | Fast Relief for Canker Sores & Oral Lesions',
                    description: 'A targeted, dissolvable patch providing a protective barrier and sustained drug delivery for canker sores, mouth ulcers, and oral lesions. Offers fast, soothing pain relief.',
                    keywords: ['mucoadhesive patch', 'oral lesion treatment', 'canker sore patch', 'oral mucosa patch', 'dissolvable film', 'oral drug delivery', 'aphthous ulcer', 'denture sore relief', 'targeted drug delivery', 'oral pain relief', 'mouth ulcer treatment', 'stomatitis patch', 'aloe vera for mouth sores']
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
                indications: ['For the management of pain and discomfort associated with aphthous ulcers (canker sores), minor oral injuries, denture friction sores, and other non-infected inflammatory lesions of the oral mucosa.'],
                howToUse: '1. Identify the lesion area. 2. With clean, dry hands, remove a patch from its packaging. 3. Gently dry the lesion with a sterile swab. 4. Apply the patch directly over the lesion and hold gently for 20-30 seconds to ensure adhesion. The patch will absorb moisture and adhere firmly. 5. Avoid eating, drinking, or disturbing the patch for at least 1 hour to allow full adhesion and initial release of soothing agents. The patch will dissolve naturally over several hours.',
                options: ['Offered in discreet 8mm and 12mm circular shapes. Custom shapes and flavor profiles (e.g., mild mint) are available for partnership opportunities. Formulations can be loaded with active ingredients such as local anesthetics (Lidocaine) or healing promoters (Hyaluronic Acid).'],
                safety: ['Manufactured with food-grade (Generally Recognized As Safe) materials. Free from common allergens. Undergoes rigorous biocompatibility testing to ensure safety for use on mucosal tissues.'],
                faqs: [],
                downloads: [{ name: 'Download Data Sheet (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-macro-4x3.webp',
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-ORL-001',
                gtin: '012345678929',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '12.50',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Pro-Collagen Skincare Mask',
                slug: 'pro-collagen-skincare-mask',
                schemaType: 'Product',
                hero: 'A luxurious, transparent biofilm sheet mask that delivers a clinical-grade dose of hydration, peptides, and antioxidants for visibly plumper, radiant skin.',
                seo: {
                    title: 'Alora Pro-Collagen Hydrogel Mask | Vitamin C, HA & Peptides',
                    description: 'A luxury biofilm sheet mask infused with Vitamin C, Hyaluronic Acid, and peptides for deep hydration, enhanced radiance, and anti-aging benefits. Ideal for post-procedure soothing.',
                    keywords: ['hydrogel face mask', 'pro-collagen mask', 'peptide mask', 'deep hydration', 'post-procedure skincare', 'vitamin c mask', 'biofilm mask', 'luxury skincare', 'sensitive skin', 'anti-aging face mask', 'skin radiance', 'facial treatment', 'soothing mask', 'microneedling aftercare', 'hyaluronic acid mask']
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
                indications: ['For anyone seeking an intensive hydration boost, improved skin radiance, and a reduction in the appearance of fine lines. Ideal for use before a special event, as a weekly replenishing treatment, or for calming skin after non-invasive cosmetic procedures.'],
                howToUse: '1. Begin with a thoroughly cleansed and toned face. 2. Carefully remove the hydrogel mask from its sachet and unfold it. 3. Apply the mask to your face, aligning the cutouts for eyes, nose, and mouth. Smooth out any air bubbles to ensure full contact. 4. Relax for 20-30 minutes. 5. Remove the mask and gently pat any remaining serum into the skin. Do not rinse. Follow with your favorite moisturizer.',
                options: ['Packaged in convenient, hygienic single-use sachets for home use. Also available in professional back-bar packs for use in clinics and spas as part of facial treatments.'],
                safety: ['Dermatologist-tested and non-comedogenic. Formulated without parabens, sulfates, phthalates, or artificial fragrances. Suitable for all skin types, including sensitive skin.'],
                faqs: [],
                downloads: [{ name: 'Download Product Brochure (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-macro-4x3.webp',
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-SKN-001',
                gtin: '012345678936',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '45.00',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Ocular Delivery Film',
                slug: 'ocular-delivery-film',
                schemaType: 'MedicalDevice',
                hero: 'An innovative, transparent ocular film providing sustained lubrication and therapeutic delivery.',
                seo: {
                    title: 'Alora Ocular Delivery Film | Sustained Relief for Dry Eye Syndrome',
                    description: 'A sterile, preservative-free ocular film for sustained lubrication and therapeutic drug delivery. A revolutionary alternative for Dry Eye Syndrome, post-LASIK care, and corneal protection.',
                    keywords: ['ocular drug delivery', 'dry eye treatment', 'dissolvable eye film', 'ophthalmic drug delivery', 'sustained lubrication', 'ophthalmic film', 'post-LASIK care', 'preservative-free eye drops', 'Dry Eye Syndrome (DED)', 'corneal protection', 'cyclosporine delivery', 'sustained release eye insert', 'artificial tears alternative']
                },
                whatItIs: 'A micro-thin, sterile film of aloe and pectin that dissolves slowly upon insertion into the conjunctival sac.',
                howItWorks: ['Provides sustained lubrication.', 'Can be loaded with ophthalmic drugs for controlled release.'],
                clinicalSpecs: [{ label: 'Material', value: 'Ophthalmic-grade Aloe/Pectin' }],
                indications: ['Indicated for patients with moderate to severe Dry Eye Syndrome (DED), post-operative lubrication following procedures like LASIK or cataract surgery, and for protecting the corneal surface in cases of exposure keratitis.'],
                howToUse: '1. Wash hands thoroughly. 2. Using a clean finger, gently pull down the lower eyelid to create a small pocket (the inferior cul-de-sac). 3. Place the thin film into this pocket. 4. Release the eyelid and blink a few times. The film will begin to dissolve, providing a lubricating tear film over several hours.',
                options: ['Available as a lubricant-only film for general hydration. Can be pre-loaded with a range of ophthalmic APIs (e.g., cyclosporine, antibiotics, anti-inflammatory agents) for targeted, sustained therapeutic delivery, reducing the need for frequent eye drops.'],
                safety: ['Terminally sterilized to ensure ophthalmic safety. Polymers are ophthalmic-grade and extensively tested for non-irritation. The film is preservative-free, reducing the risk of ocular surface toxicity with long-term use.'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-macro-4x3.webp' 
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-OCU-001',
                gtin: '012345678943',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '35.00',
                    availability: 'https://schema.org/PrescriptionOnly',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Post-Procedure Calming Film',
                slug: 'post-procedure-calming-film',
                schemaType: 'Product',
                hero: 'A sterile, soothing film to accelerate recovery after aesthetic procedures.',
                seo: {
                    title: 'Alora Post-Procedure Calming Film | Professional Aesthetic Aftercare',
                    description: 'A sterile, soothing hydrogel film for rapid recovery and redness reduction after microneedling, laser resurfacing, or chemical peels. Professional skincare for compromised skin barriers.',
                    keywords: ['post-procedure calming', 'microneedling aftercare', 'laser resurfacing recovery', 'professional skincare', 'soothing hydrogel', 'anti-inflammatory film', 'aesthetic procedure aftercare', 'reduce redness after laser', 'chemical peel aftercare', 'IPL therapy soothing', 'clinical skincare', 'compromised skin barrier']
                },
                whatItIs: 'A cooling, hydrating film applied immediately after procedures like microneedling or laser resurfacing.',
                howItWorks: ['Reduces redness and inflammation.', 'Provides a protective, hydrating barrier.'],
                clinicalSpecs: [{ label: 'Key Ingredient', value: 'High-concentration Aloe Polysaccharide' }],
                indications: ['Specifically designed for immediate application after aesthetic procedures such as microneedling, fractional laser resurfacing, chemical peels, or IPL therapy. Helps to rapidly reduce procedure-related redness, heat, and discomfort.'],
                howToUse: 'For professional use. 1. Immediately following the procedure, gently cleanse the treated area as per protocol. 2. Apply the sterile film, ensuring it fully covers the treated zone. 3. The cooling hydrogel provides immediate relief. Leave in place for 30-60 minutes to significantly reduce inflammation and hydrate the compromised skin barrier.',
                options: ['Available as sterile, single-use facial masks to fit standard facial contours. Custom shapes for body areas (e.g., décolletage, back) can be developed for specific treatment protocols and device partnerships.'],
                safety: ['Provided sterile (gamma irradiated) to prevent post-procedure infection risk. The minimalist formulation is designed for compromised skin barriers, free of potential irritants like fragrances, alcohol, and essential oils.'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-macro-4x3.webp' 
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-PPC-001',
                gtin: '012345678950',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '95.00',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Bio-Active Scar Sheet',
                slug: 'bio-active-scar-sheet',
                schemaType: 'MedicalDevice',
                hero: 'A discreet, hydrating sheet to minimize and improve the appearance of scars.',
                seo: {
                    title: 'Alora Bio-Active Scar Sheet | Advanced Scar Management Therapy',
                    description: 'A hydrating, self-adhesive bio-active sheet to soften, flatten, and fade keloid and hypertrophic scars from surgery, C-sections, burns, or acne. A reusable, gentle alternative to silicone sheets.',
                    keywords: ['scar treatment', 'scar reduction', 'silicone sheet alternative', 'keloid scar', 'scar management', 'hypertrophic scar', 'surgical scar', 'reusable scar sheet', 'bio-active treatment', 'c-section scar sheet', 'burn scar treatment', 'acne scar sheet', 'flatten scars', 'fade scars', 'medical-grade adhesive']
                },
                whatItIs: 'A soft, self-adhesive sheet that provides occlusion and hydration to scar tissue.',
                howItWorks: ['Hydrates the stratum corneum.', 'Softens and flattens hypertrophic and keloid scars.'],
                clinicalSpecs: [{ label: 'Wear Time', value: 'Up to 24 hours' }],
                indications: ['For the management and prevention of new and old hypertrophic or keloid scars resulting from surgery, injuries, burns, or acne. Helps to soften, flatten, and fade the scar\'s appearance.'],
                howToUse: '1. Ensure the scar is fully healed and the skin is clean and dry. 2. Cut the sheet to fit the scar size, allowing a small overlap onto the surrounding skin. 3. Peel off the backing and apply the adhesive side to the scar. 4. For best results, wear the sheet for at least 12-24 hours per day. The sheet is reusable; gently wash it with mild soap and water daily and allow to air dry before reapplying. With consistent use over 8-12 weeks, significant improvement can be observed.',
                options: ['Available in various pre-cut shapes (strips, circles, anchors for breast surgery) and as larger sheets (e.g., 12x15cm) that can be cut to any desired size for maximum versatility.'],
                safety: ['Utilizes a gentle, medical-grade silicone adhesive that minimizes skin irritation and is suitable for sensitive skin. The sheet is breathable and flexible, providing comfortable wear even on joints or mobile areas.'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-macro-4x3.webp' 
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-SCR-001',
                gtin: '012345678967',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'USD',
                    price: '25.00',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            }
        ]
    },
    navigation: {
        products: 'Products',
        science: 'The Science',
        innovation: 'Innovation',
        faq: 'FAQ',
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
        address: '919/1 JTC Building, Silom 19, Silom Road, Bangrak, Bangkok 10500 TH',
        tel: '+66(0)81 851 9922',
        email: 'info.alora@gmail.com'
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
        intro: "Alora unites Aloe vera biofilm — rich in acemannan and soothing phytochemicals — with advanced pectin delivery science to create a new generation of clinical-grade wound films, mucoadhesive patches, and luxury skincare masks. This dual-biopolymer matrix is meticulously engineered to do more than protect: it provides continuous hydration, anti-inflammatory relief, and a controlled, sustained diffusion of actives for up to 72 hours.\n\nThe result is a material that accelerates tissue repair, supports re-epithelialization, and enhances comfort, all while maintaining a weightless, breathable feel that disappears into the skin. Unlike synthetic polymers, Alora is entirely biocompatible and biodegradable, offering both safety and sustainability. Designed through evidence-led innovation, it delivers visible results that inspire clinical trust and consumer confidence alike — bridging the worlds of medicine and modern skincare with elegance and proof-backed performance.",
        persuasion: {
            clinical: {
                title: 'Designed for Faster, Safer Healing',
                text: 'Acemannan-rich Aloe supports fibroblast activity and a moist micro-environment; calcium-crosslinked pectin forms a stable scaffold that reduces TEWL and improves comfort.',
                bullets: ['ISO 10993 biocompatibility', 'Moisture-balanced occlusion', 'Mucoadhesive options (oral/ocular)', '24–72 h controlled release of actives'],
                expandLink: 'View clinical use cases →',
                collapseLink: 'Hide clinical use cases',
                expandedContent: {
                    longDescription: `The clinical efficacy of the Alora platform is rooted in a dual-action mechanism that addresses key barriers to healing:

■ Bioactive Modulation: High-purity acemannan polysaccharides directly interact with macrophages, promoting a shift from a pro-inflammatory (M1) to a pro-reparative (M2) phenotype. This accelerates the transition from the inflammatory to the proliferative phase of healing and stimulates orderly collagen deposition, leading to reduced scarring.

■ Optimized Micro-environment: The calcium-crosslinked pectin matrix creates a hydrogel with a precisely engineered Moisture Vapor Transmission Rate (MVTR). This maintains optimal hydration at the wound bed, preventing eschar formation while avoiding maceration of surrounding tissue, a critical factor for rapid re-epithelialization.

■ Protective Scaffolding: The film acts as a flexible, biocompatible barrier (per ISO 10993) against external contaminants, reducing infection risk. Its structure absorbs exudate, trapping proteases and bacteria away from the wound bed, supporting an undisturbed healing trajectory.`,
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
                    longDescription: `The Alora cosmetic-grade biofilm functions as an advanced topical delivery system, enhancing ingredient efficacy through several key principles:

■ Enhanced Penetration via Occlusion: The hydrogel forms a 'second skin' that creates a highly occlusive barrier. This minimizes Transepidermal Water Loss (TEWL) and hyper-hydrates the stratum corneum, significantly increasing skin permeability and allowing for up to 250% greater penetration of loaded actives like Vitamin C and peptides.

■ Sustained Release for Prolonged Action: Unlike liquid serums, actives are integrated within the biofilm matrix and are released gradually as the mask transfers moisture to the skin. This ensures a sustained, stable delivery over the 20-30 minute application, which is particularly beneficial for stabilizing volatile molecules like L-Ascorbic Acid (Vitamin C).

■ Anti-Inflammatory Soothing: For post-procedure applications, the film's high water content and inherent cooling properties, combined with aloe's natural anti-inflammatory compounds, actively down-regulate redness and discomfort. It provides immediate calming while protecting the compromised skin barrier.`,
                    imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/persuasion-beauty-model.webp',
                }
            },
        },
        products: {
            title: 'Our Products',
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
                text: 'The Alora innovation platform is not just a material — it is an engineered biopolymer matrix designed to bridge clinical rigor and consumer trust. By combining acemannan-rich Aloe vera with citrus-derived pectin, the platform achieves a unique balance: Aloe provides bioactivity, hydration, and immunomodulation, while pectin contributes mechanical stability, mucoadhesion, and controlled diffusion of actives.',
                items: [
                    'Clinically, this synergy allows tailoring of cross-link density for optimized moisture vapor transmission rate (MVTR), porosity for targeted fluid absorption, and dissolution profiles from fast-dissolving films to long-wear dressings.',
                    'For partners, this platform offers flexibility to create wound dressings that heal faster, skincare masks with visible glow, and oral/ocular delivery films that are convenient, discreet, and vegan-friendly.',
                    'Base formulation: Acemannan-rich Aloe Polysaccharide + Citrus Pectin.',
                    'Can be loaded with APIs, peptides, growth factors, and other actives.',
                    'Scalable manufacturing process from lab bench to commercial production.'
                ]
            },
            enables: {
                title: 'What This Enables',
                items: [
                    { title: 'Advanced Wound Care', text: 'Films that stimulate fibroblast migration, reduce infection risk, and promote faster healing without synthetic chemicals. Message: “Next-gen wound care: nature-powered, clinically proven.”', icon: <WoundCareIcon /> },
                    { title: 'Drug Delivery', text: 'Site-specific, controlled diffusion for oral, ocular, and dermal applications (4-72 hrs), minimizing systemic side effects. Message: “Precise, patient-friendly delivery.”', icon: <DrugDeliveryIcon /> },
                    { title: 'Luxury Skincare', text: 'Second-skin hydrogel films enhancing uptake of actives by up to 250% for superior results. Message: “Clinical logic meets cosmetic luxury.”', icon: <SkincareIcon /> }
                ]
            },
            performance: {
                title: 'Evidence-Led Engineering',
                text: 'Every property of the platform is mapped to measurable outcomes. This data-driven approach means every specification translates into a patient benefit and a market advantage.',
                kpis: [
                    {
                        title: 'Tunable Adhesion → Better Compliance',
                        description: 'We adjust adhesion from gentle for sensitive skin to strong mucoadhesion for oral patches, ensuring comfort and efficacy.'
                    },
                    {
                        title: 'Controlled Release → Reduced Dosing',
                        description: 'We dictate how quickly actives are released, from hours to days, ensuring a steady, therapeutic dose.'
                    },
                    {
                        title: 'Optimized MVTR → Faster Healing',
                        description: 'We control film breathability to create the perfect moist environment, preventing maceration while speeding up healing.'
                    },
                    {
                        title: 'High Purity → Stronger Regulatory Acceptance',
                        description: 'Our materials are processed to remove impurities, resulting in a clean, biocompatible product with a strong safety profile.'
                    }
                ]
            },
            customization: {
                title: 'Customization Pathways',
                text: 'Alora is not a one-size-fits-all solution. By adjusting formulation, partners can design products with custom elution curves for antibiotics, thin ocular films (<50 μm) for comfort, or thicker wound dressings (>500 μm) for high exudate. Think of Alora as your material playground — scalable, modifiable, and market-ready.',
                items: [
                    'Material thickness & size',
                    'Active ingredient & load',
                    'Elution profile (release rate)',
                    'Adhesion properties',
                    'Dissolution time',
                    'Mechanical strength',
                    'Transparency / Opacity',
                    'Packaging & Sterility'
                ],
                button: 'Start an Innovation Session'
            }
        }
    },
    faqPageContent: {
        hero: {
            title: 'Frequently Asked Questions',
            subtitle: 'Find answers to common questions about our technology, products, and applications.'
        },
        sections: [
            {
                title: 'About the Technology',
                faqs: [
                    {
                        q: 'What exactly is Alora Biofilm?',
                        a: 'Alora Biofilm is an advanced, flexible hydrogel platform engineered from a synergistic matrix of two plant-based biopolymers: high-purity Aloe vera polysaccharides (acemannan) and structural pectin from citrus. It is not simply a mixture, but a cross-linked material where aloe provides clinically-proven bioactive properties (like reduced inflammation and cellular stimulation), while pectin forms a tunable scaffold that controls moisture, adhesion, and the sustained release of active ingredients. This results in a versatile, high-performance material that can be precisely tailored for medical dressings, drug delivery systems, and professional skincare.'
                    },
                    {
                        q: 'What are the main active components?',
                        a: `The platform's efficacy comes from its two core components working in synergy:
1. **Bioactive Aloe Vera:** We use a purified extract rich in acemannan, a high-molecular-weight polysaccharide known to stimulate fibroblasts and macrophages, key cells in the tissue repair process. It also provides natural anti-inflammatory and soothing properties.
2. **Structural Pectin:** This citrus-derived polysaccharide forms the hydrogel's backbone. Through ionic cross-linking, we can precisely control its physical properties, turning it into a smart scaffold that manages wound exudate, adheres gently to tissues, or delivers active ingredients over a programmed period.`
                    },
                    {
                        q: 'How is this different from other hydrogels or dressings?',
                        a: `Alora Biofilm differs in three key ways:
1. **Bioactivity & Biocompatibility:** Unlike inert synthetic dressings (e.g., polyurethanes, silicones), Alora actively participates in the healing process via acemannan. It is also fully biocompatible and biodegradable.
2. **Superior Tunability:** Compared to single-polymer natural dressings (e.g., alginates), our dual-polymer system offers a much wider range of customizable properties. We can independently tune bioactivity, adhesion, moisture vapor transmission rate (MVTR), and drug release profiles to match specific clinical needs.
3. **Elegant Feel & Performance:** For cosmetic applications, the biofilm forms a true 'second skin' that is transparent, weightless, and non-sticky, offering superior comfort and ingredient delivery compared to traditional paper or biocellulose masks.`
                    },
                    {
                        q: 'Is the technology patented?',
                        a: 'Yes, we have a portfolio of patents and pending applications covering our core formulation, manufacturing processes, and specific applications of the technology. This intellectual property protects the unique synergy and engineering principles of the Alora platform.'
                    },
                    {
                        q: 'Is the biofilm biodegradable and sustainable?',
                        a: 'Absolutely. Both Aloe vera and pectin are from renewable plant sources. Our manufacturing process is optimized for minimal waste, and the final product is fully biodegradable, breaking down into harmless organic matter. Sustainability is a core principle of our technology.'
                    }
                ]
            },
            {
                title: 'Applications & Usage',
                faqs: [
                    {
                        q: 'What are the primary applications for Alora technology?',
                        a: 'Our platform is highly versatile. Key application areas include:\n- **Advanced Wound Care:** For chronic ulcers, burns, and post-operative sites.\n- **Localized Drug Delivery:** Mucoadhesive patches for oral health, ocular films for eye conditions, and transdermal patches.\n- **High-Performance Skincare:** Hydrating and treatment masks, calming post-procedure films, and scar management sheets.'
                    },
                    {
                        q: 'Can Alora products be used on sensitive skin?',
                        a: 'Yes. The materials are derived from natural sources and have undergone extensive biocompatibility testing (ISO 10993) to ensure they are non-irritating and non-sensitizing. Our cosmetic products are specifically formulated to be hypoallergenic and fragrance-free, making them suitable for even very sensitive skin.'
                    },
                    {
                        q: 'How long does a film or patch last when applied?',
                        a: 'Wear time is an engineered property that we can tune. For example:\n- Wound care films can be designed for up to 7 days of wear, depending on wound conditions.\n- Oral mucoadhesive patches typically last for 2-6 hours before dissolving completely.\n- Skincare masks are designed for short-duration (20-30 minute) high-impact treatments.'
                    },
                    {
                        q: 'Can active pharmaceutical ingredients (APIs) be added?',
                        a: 'Yes, the platform is an excellent vehicle for controlled drug delivery. APIs can be homogenously incorporated into the biofilm matrix before it is dried. This allows us to load a wide range of APIs—from small molecules to large peptides and growth factors—and then tune the release profile for sustained, localized therapeutic effect, which can improve efficacy and reduce systemic side effects.'
                    }
                ]
            },
            {
                title: 'Products & Partnership',
                faqs: [
                    {
                        q: 'Are your medical products sterile?',
                        a: 'Yes, all products intended for medical use, such as our wound films and post-procedure films, are terminally sterilized, typically using gamma irradiation, to meet the stringent sterility assurance level (SAL 10⁻⁶) required for clinical applications.'
                    },
                    {
                        q: 'Where are the products manufactured?',
                        a: 'Our products are manufactured in state-of-the-art facilities that are compliant with ISO 13485 standards for medical device manufacturing. This ensures the highest level of quality control, process validation, and traceability from raw materials to the final product.'
                    },
                    {
                        q: 'Can I get samples of your products?',
                        a: 'Yes, we provide evaluation samples to qualified clinical and commercial partners who are exploring co-development, licensing, or distribution opportunities. Please use the "Request Samples" button or our contact form to submit your inquiry with details about your project.'
                    },
                    {
                        q: 'Are the skincare masks single-use?',
                        a: 'Yes, for hygiene and performance reasons, our skincare masks are designed for a single application. This ensures that a fresh, potent, and uncontaminated dose of active ingredients is delivered to the skin each time, providing the best possible results.'
                    },
                    {
                        q: 'How does the oral mucoadhesive patch stay in place?',
                        a: 'The patch is engineered with a specific grade of pectin that exhibits strong mucoadhesive properties. When it comes in contact with saliva in the mouth, the polymer chains hydrate and form a strong but flexible bond with the mucosal tissue. This allows it to adhere firmly for several hours before dissolving naturally.'
                    },
                    {
                        q: 'Is this technology available for licensing or white-label partnerships?',
                        a: 'Yes, we actively seek commercial partners for a range of collaborations, including technology licensing, co-development of new products, and private label manufacturing for established brands. Please contact our business development team through the contact form to discuss your project.'
                    }
                ]
            }
        ]
    },
    privacyPageContent: {
        hero: {
            title: 'Privacy Policy',
            subtitle: 'Your privacy and trust are central to how we operate.'
        },
        introduction: {
            title: 'Introduction',
            text: "This Privacy Policy explains how Alora Biofilm (the ‘Company’) collects, uses, stores, and protects personal information from patients, healthcare professionals, research partners, and customers."
        },
        informationWeCollect: {
            title: 'Information We Collect',
            items: [
                'Contact details (name, email, phone)',
                'Professional affiliations (hospital, clinic, academic institution)',
                'Purchase and order details (for product logistics)',
                'Technical data (cookies, browser type, IP address)'
            ]
        },
        howWeUseYourInformation: {
            title: 'How We Use Your Information',
            items: [
                'Provide product samples, technical dossiers, and clinical support',
                'Improve our products, services, and research collaborations',
                'Comply with regulatory requirements for clinical data and product use',
                'Secure digital experience through analytics and fraud prevention'
            ]
        },
        dataSharing: {
            title: 'Data Sharing',
            text: 'We do not sell personal data. Limited sharing occurs with:',
            items: [
                'Regulatory authorities (for compliance)',
                'Logistics partners (for shipping samples/products)',
                'Research collaborators (with consent)'
            ]
        },
        dataSecurity: {
            title: 'Data Security & Retention',
            text: 'We implement ISO 27001-level safeguards, encryption, and access controls. Personal data is stored only as long as necessary for regulatory and clinical compliance.'
        },
        yourRights: {
            title: 'Your Rights',
            items: [
                'Access and correction of your data',
                'Request data deletion',
                'Opt-out from marketing communications'
            ]
        }
    },
    termsPageContent: {
        hero: {
            title: 'Terms of Service',
            subtitle: 'Clear guidelines for safe and responsible use of Alora Biofilm products and services.'
        },
        introduction: {
            title: 'Introduction',
            text: "These Terms of Service (‘Terms’) govern your use of our website, products, and services. By accessing or purchasing from Alora Biofilm, you agree to these Terms."
        },
        eligibility: {
            title: 'Eligibility',
            items: [
                'Products intended for use by clinicians, healthcare providers, and informed consumers.',
                'Users must comply with local regulations and clinical guidance.'
            ]
        },
        productInformation: {
            title: 'Product Information',
            items: [
                'Alora Biofilm provides wound films, skincare masks, mucoadhesive patches, and related biopolymer products.',
                'Information provided is for educational and marketing purposes only, not as a substitute for professional medical advice.'
            ]
        },
        orderingAndPayment: {
            title: 'Ordering & Payment',
            items: [
                'Orders processed via secure third-party payment gateways.',
                'International orders may be subject to customs duties, taxes, and regulations.'
            ]
        },
        intellectualProperty: {
            title: 'Intellectual Property',
            text: 'All trademarks, product names, and biofilm technologies are proprietary to Alora Biofilm.'
        },
        limitationOfLiability: {
            title: 'Limitation of Liability',
            items: [
                'Alora Biofilm is not responsible for misuse of products outside indicated use-cases.',
                'Clinical outcomes may vary by patient and condition.'
            ]
        },
        governingLaw: {
            title: 'Governing Law & Jurisdiction',
            text: 'These Terms are governed by Thai law and applicable international regulations.'
        },
        contactInformation: {
            title: 'Contact Information',
            text: 'For questions: legal@alora.bio'
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
            description: 'Alora Biofilm combines bioactive Aloe vera films with pectin delivery science for advanced wound care, skincare, and controlled release applications.',
            keywords: ['Alora Biofilm', 'Aloe vera biofilm', 'pectin delivery', 'wound care', 'skincare', 'controlled release', 'mucoadhesive', 'hydrogel', 'biotechnology'],
            hreflang: { en: '/', th: '/th' }
        },
        science: {
            title: 'The Science of Bioactive Aloe Vera & Pectin Synergy | Alora Biofilm Technology',
            description: "Explore the materials science behind our dual-biopolymer platform, combining Aloe vera's acemannan bioactivity with Pectin's structural control for superior performance in wound healing and drug delivery.",
            keywords: ['biopolymer science', 'acemannan', 'pectin hydrogel', 'material science', 'drug delivery mechanism', 'wound healing science', 'biocompatibility', 'fibroblast proliferation', 'mucoadhesion', 'MVTR', 'ionic cross-linking', 'aloe vera'],
            hreflang: { en: '/science', th: '/th/science' }
        },
        innovation: {
            title: 'Alora Innovation Platform | Custom Biopolymer Solutions for Medical & Skincare',
            description: 'Discover the Alora innovation platform—a versatile biopolymer technology for creating custom, evidence-led solutions in advanced wound care, controlled drug delivery, and luxury skincare. Partner with us.',
            keywords: ['biopolymer platform', 'medical device innovation', 'cosmetic technology', 'custom formulation', 'drug delivery systems', 'white-label skincare', 'tunable adhesion', 'controlled release', 'API loading', 'co-development', 'aloe vera'],
            hreflang: { en: '/innovation', th: '/th/innovation' }
        },
        faq: {
            title: 'FAQ | Alora Biofilm',
            description: 'Find answers to frequently asked questions about Alora\'s biofilm technology, products, applications, and partnership opportunities.',
            keywords: ['Alora Biofilm FAQ', 'biofilm technology', 'wound care questions', 'skincare application', 'mucoadhesive patch info', 'biopolymer'],
            hreflang: { en: '/faq', th: '/th/faq' }
        },
        privacy: {
            title: 'Privacy Policy | Alora Biofilm',
            description: 'Learn how Alora Biofilm protects your data, privacy, and rights when engaging with our clinical and skincare innovations.',
            keywords: ['privacy policy', 'data protection', 'biotechnology privacy', 'clinical data', 'patient privacy', 'skincare data', 'pectin delivery', 'alora biofilm'],
            hreflang: { en: '/privacy', th: '/th/privacy' }
        },
        terms: {
            title: 'Terms of Service | Alora Biofilm',
            description: 'Review the terms of using Alora Biofilm products, services, and website, covering clinical biofilm, wound care, and skincare applications.',
            keywords: ['terms of service', 'product use terms', 'clinical biofilm', 'wound care terms', 'skincare policy', 'biotechnology', 'alora biofilm'],
            hreflang: { en: '/terms', th: '/th/terms' }
        }
    },
    contactModal: {
        title: 'Contact Us',
        subtitle: "Have a question? We'd love to hear from you.",
        nameLabel: 'Name',
        emailLabel: 'Email',
        messageLabel: 'Message',
        submitButton: 'Send Message',
        submittingButton: 'Sending...',
        successTitle: 'Thank You!',
        successMessage: 'Your message has been sent successfully. We will get back to you shortly.',
        closeAlt: 'Close contact form',
        errors: {
            nameRequired: 'Name is required.',
            emailRequired: 'Email is required.',
            emailInvalid: 'Please enter a valid email address.',
            messageRequired: 'Message is required.',
        },
        address: 'Address: 919/1 JTC Building, Silom 19, Silom Road, Bangrak, Bangkok 10500 TH.',
        tel: 'Tel: +66(0)81 851 9922',
        email: 'Email: info.alora@gmail.com'
    },
    cookieConsent: {
        message: 'We use cookies to improve your experience. You can accept or decline.',
        accept: 'Accept',
        decline: 'Decline',
        learnMore: 'Learn More'
    }
};
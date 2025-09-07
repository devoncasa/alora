import React from 'react';
import { ISOIcon, CEIcon, CrueltyFreeIcon, BiodegradableIcon, SterileIcon, HealingIcon, DeliveryIcon, WoundCareIcon, DrugDeliveryIcon, SkincareIcon } from '../constants';
import type { AloraDataType } from '../types';

export const thContent: AloraDataType = {
    imageAlts: {
        aloraLogo: 'Alora Logo',
        clinicalChart: 'กราฟแสดงข้อมูลอัตราการสมานแผลเชิงคลินิก',
        skincareModel: 'โมเดลที่มีผิวกระจ่างใสหลังใช้มาสก์สกินแคร์',
        scienceMicrograph: 'ภาพกล้องอิเล็กตรอนแสดงโครงสร้างเมทริกซ์พอลิเมอร์',
        crosslinkDiagram: 'แผนภาพอธิบายการเชื่อมโยงข้ามสายของเพกทินด้วยไอออน',
        vennDiagram: 'แผนภาพเวนน์แสดงคุณสมบัติที่เสริมกันของว่านหางจระเข้และเพกทิน',
        woundFilm: 'ภาพระยะใกล้ของฟิล์ม Alora ที่วางบนผิว',
        oralFilm: 'ภาพแสดงแผ่นฟิล์มช่องปากยึดติดกับเยื่อบุ',
        sheetMask: 'บุคคลที่สวมมาสก์ใส Alora บนใบหน้า',
        innovationPlatform: 'อินโฟกราฟิก 3 มิติแสดงโครงสร้างเกลียวคู่ของว่านหางจระเข้และเพกทิน',
        innovationMicrograph: 'ภาพ GIF เคลื่อนไหวแสดงการเชื่อมโยงข้ามสายของเพกทินด้วยไอออน Ca²',
        customThickness: 'ไดอะแกรมแสดงความหนาที่ปรับได้ของฟิล์ม Alora',
        drugElutionGraph: 'กราฟแสดงโปรไฟล์การปลดปล่อยยาที่ปรับได้ตามเวลา',
        innovationVennDiagram: 'ไดอะแกรมเวนน์แสดงการทำงานร่วมกันระหว่าง Aloe และ Pectin',
        molecularRender1: 'ภาพเรนเดอร์สามมิติของโครงสร้างชีวพอลิเมอร์ Alora',
        molecularRender2: 'ภาพเรนเดอร์สามมิติแสดงการบรรจุ API ในโครงสร้าง Alora',
        productHero: (name: string) => `ภาพฮีโร่ของ ${name}`,
        productMacro: (name: string) => `ภาพระยะใกล้ของผิวสัมผัส ${name}`,
        heroBanner: 'แบนเนอร์พื้นหลังเชิงวิทยาศาสตร์แบบนามธรรม',
        backgroundImage: 'ภาพพื้นหลังนามธรรม',
        aloraPlantation: 'ไร่ว่านหางจระเข้ของ Alora',
        featureHealing: 'ภาพไมโครกราฟแสดงการฟื้นฟูเซลล์',
        featureDelivery: 'แผนภาพแสดงกลไกการปลดปล่อยตัวยาแบบควบคุม',
        introVisual1: 'อินโฟกราฟิกแสดงการทำงานร่วมกันระหว่าง Aloe × Pectin',
        introVisual2: 'ภาพขยายกำลังสูงของโครงสร้าง biofilm',
        introVisual3: 'โมเดลสวมมาสก์ใส biofilm ดูแลผิว',
    },
    data: {
        productCards: [
            { 
                name: 'Alora Clinical Wound Film', 
                description1: 'ฟิล์มใส ปลอดเชื้อ ผลิตจาก Aloe polysaccharides และ Pectin จากส้มตระกูล citrus สร้างสภาพแวดล้อมที่เอื้อต่อการสมานแผลและป้องกันการปนเปื้อน',
                description2: 'ผ่านการพิสูจน์ทางคลินิกว่าช่วยเร่งการปิดแผล ลดรอยแผลเป็น และลดความเจ็บปวด เหมาะสำหรับโรงพยาบาล คลินิก และการดูแลที่บ้าน',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-film-4x3.webp'
            },
            { 
                name: 'Alora Oral Mucoadhesive Patch', 
                description1: 'แผ่นแปะที่ละลายในช่องปาก ยึดเกาะกับเยื่อบุในช่องปาก ป้องกันการระคายเคืองของแผลร้อนในหรือจุดกดทับจากฟันปลอม',
                description2: 'มี Aloe ช่วยปลอบประโลมและ Pectin ช่วยยึดเกาะ เหมาะสำหรับแผลร้อนใน การอักเสบเหงือก และแผลในช่องปากต่างๆ',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-patch-4x3.webp'
            },
            { 
                name: 'Alora Ocular Delivery Film',
                description1: 'ฟิล์มใส ขนาดบางพิเศษ ปลอดเชื้อ สำหรับดวงตา ให้ความชุ่มชื้นต่อเนื่องและถ่ายเทตัวยาเฉพาะที่แบบควบคุมได้',
                description2: 'เหมาะสำหรับผู้ที่มีตาแห้ง การฟื้นฟูหลังผ่าตัดเลสิค และการปกป้องกระจกตา',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-film-4x3.webp'
            },
            { 
                name: 'Alora Pro-Collagen Skincare Mask',
                description1: 'มาสก์ไฮโดรเจลหรูหรา อุดมด้วย Vitamin C, HA และ Peptides ทำหน้าที่เหมือน “ผิวชั้นที่สอง” เพื่อการดูดซึมสูงสุด',
                description2: 'ช่วยเติมความชุ่มชื้น ลดความหมองคล้ำ และบรรเทาผิวหลังทำหัตถการ ปลอดภัยต่อผิวแพ้ง่าย',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-collagen-mask-4x3.webp'
            },
            { 
                name: 'Alora Post-Procedure Calming Film',
                description1: 'ฟิล์มปลอบประโลม ให้ความเย็นและชุ่มชื้น ใช้ทันทีหลังการทำหัตถการ เช่น microneedling หรือเลเซอร์',
                description2: 'ลดรอยแดง เพิ่มความสบาย และเร่งการฟื้นฟูผิว เหมาะสำหรับคลินิกความงาม',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-film-4x3.webp'
            },
            { 
                name: 'Alora Bio-Active Scar Sheet',
                description1: 'แผ่นใส ชุ่มชื้น ติดแนบกับผิว ใช้เพื่อลดและปรับปรุงลักษณะของแผลเป็น',
                description2: 'เหมาะสำหรับแผลผ่าตัด แผลไฟไหม้ และรอยสิว ให้ความสบายในการสวมใส่นานถึง 24 ชั่วโมง',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-sheet-4x3.webp'
            },
        ],
        featureCards: [
            {
                title: 'เร่งการสมานแผล',
                description: 'สารพอลิแซ็กคาไรด์ออกฤทธิ์ทางชีวภาพจากว่านหางจระเข้สนับสนุนการสร้างเซลล์ใหม่',
                icon: <HealingIcon />,
                longDescription: 'สูตรเฉพาะของเราใช้ประโยชน์จากอะซีแมนแนนที่มีน้ำหนักโมเลกุลสูงจากว่านหางจระเข้ ซึ่งแสดงให้เห็นว่าสามารถกระตุ้นมาโครฟาจ, ไฟโบรบลาสต์ และเคราติโนไซต์ได้ ซึ่งจะช่วยเร่งกระบวนการสมานแผลตามธรรมชาติ นำไปสู่การปิดของแผลที่เร็วขึ้นและลดการเกิดแผลเป็น เมทริกซ์เพกทินจะรักษาสภาพแวดล้อมที่ชุ่มชื้นอย่างเหมาะสม ซึ่งมีความสำคัญต่อการสร้างเยื่อบุผิวใหม่',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/feature-healing-micrograph.webp',
                imageAlt: 'ภาพไมโครกราฟแสดงการฟื้นฟูเซลล์'
            },
            {
                title: 'ระบบนำส่งขั้นสูง',
                description: 'เมทริกซ์เพกทินที่ปรับได้ช่วยให้สามารถปลดปล่อยสารออกฤทธิ์ได้อย่างต่อเนื่องและควบคุมได้',
                icon: <DeliveryIcon />,
                longDescription: 'โครงสร้างเพกทินที่เชื่อมขวางกันสร้างเมทริกซ์ไฮโดรเจลที่สามารถปรับแต่งได้อย่างแม่นยำเพื่อควบคุมอัตราการแพร่ของสารออกฤทธิ์ ไม่ว่าจะเป็นยาที่มีโมเลกุลเล็กหรือเปปไทด์ขนาดใหญ่ แพลตฟอร์มของเรารับประกันการปลดปล่อยที่สม่ำเสมอและคาดการณ์ได้ในช่วงตั้งแต่ 1 ถึง 72 ชั่วโมง ซึ่งช่วยเพิ่มประสิทธิภาพในการรักษาและการปฏิบัติตามของผู้ป่วย',
                imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/feature-delivery-diagram.webp',
                imageAlt: 'แผนภาพแสดงกลไกการปลดปล่อยตัวยาแบบควบคุม'
            }
        ],
        trustIcons: [
            { name: 'สอดคล้องมาตรฐานการผลิตเครื่องมือแพทย์', icon: <ISOIcon /> },
            { name: 'พร้อมสำหรับมาตรฐานยุโรป', icon: <CEIcon /> },
            { name: 'ไม่ทดลองกับสัตว์', icon: <CrueltyFreeIcon /> },
            { name: 'ย่อยสลายได้', icon: <BiodegradableIcon /> },
        ],
        supportIcons: [
            { name: 'ตามมาตรฐาน ISO 13485', icon: <ISOIcon /> },
            { name: 'พร้อมสำหรับ CE-Mark', icon: <CEIcon /> },
            { name: 'มีแบบปราศจากเชื้อ', icon: <SterileIcon /> },
            { name: 'ไม่ทดลองในสัตว์', icon: <CrueltyFreeIcon /> },
        ],
        productDetails: [
           {
                name: 'Alora Clinical Wound Film',
                slug: 'clinical-wound-film',
                schemaType: 'MedicalDevice',
                hero: 'ฟิล์มชีวพอลิเมอร์ปลอดเชื้อระดับก้าวหน้า ออกแบบเพื่อเร่งการสมานในกลุ่มแผลเฉียบพลันและเรื้อรัง ด้วยการสร้างสภาวะแผลชุ่มชื้นที่เหมาะสม',
                seo: {
                    title: 'Alora Clinical Wound Film | แผ่นปิดแผลไบโอพอลิเมอร์เพื่อการสมานแผล',
                    description: 'แผ่นปิดแผลไบโอพอลิเมอร์ปลอดเชื้อสำหรับแผลเฉียบพลันและเรื้อรัง ฟิล์มว่านหางจระเข้และเพกทินของ Alora ช่วยเร่งการสมานแผลแบบชุ่มชื้นสำหรับแผลเบาหวาน แผลกดทับ และการดูแลหลังผ่าตัด',
                    keywords: ['ฟิล์มปิดแผล', 'แผ่นปิดแผลปลอดเชื้อ', 'แผลเรื้อรัง', 'แผลเฉียบพลัน', 'การสมานแผลแบบชุ่มชื้น', 'แผลเบาหวาน', 'แผ่นแปะแผลกดทับ', 'แผลหลอดเลือดดำ', 'ดูแลแผลขั้นสูง', 'แผ่นปิดแผลชีวภาพ', 'สมานแผลเร็ว', 'แผ่นแปะแผลผ่าตัด', 'แผลไฟไหม้']
                },
                whatItIs: 'แผ่นปิดแผลใส ยืดหยุ่น และมีความสามารถในการดูดซับสูง ผลิตจากเมทริกซ์ประสานระหว่าง aloe polysaccharides (acemannan) และ pectin จากพืช ช่วยคงสภาพความชุ่มชื้นที่หายใจได้ (moist, breathable barrier) เพื่อปกป้องแผลจากการปนเปื้อน พร้อมสนับสนุนกระบวนการฟื้นฟูของร่างกายอย่างต่อเนื่อง',
                howItWorks: [
                    'คงสภาพแผลให้ชุ่มชื้น ซึ่งจำเป็นต่อการสร้างผิวใหม่ (re-epithelialization)',
                    'Acemannan กระตุ้นการทำงานของ fibroblast และ keratinocyte',
                    'Pectin ที่ถูก cross-link ด้วยแคลเซียมช่วยดูดซับ exudate และก่อตัวเป็นเจลปกป้อง',
                    'ลดปวดและลดการอักเสบด้วยคุณสมบัติเย็นสบายและปลอบประโลม',
                    'แนบกระชับตามรูปทรงบาดแผล สวมใส่สบายและติดทนนาน',
                ],
                clinicalSpecs: [
                    { label: 'วัสดุ', value: 'Aloe Polysaccharide, Pectin (High-Methoxyl)' },
                    { label: 'สภาวะปลอดเชื้อ', value: 'Gamma Irradiation (SAL 10⁻⁶)' },
                    { label: 'ระยะเวลาสวมใส่', value: 'สูงสุด 72 ชั่วโมง' },
                    { label: 'ค่า MVTR', value: 'ประมาณ 2200 g/m²/24hr' },
                    { label: 'การดูดซับ', value: 'สูง (ได้ถึง 15 เท่าของน้ำหนักตนเอง)' },
                ],
                indications: ['แผลกดทับ (Stage I–IV)', 'แผลเบาหวานที่เท้า', 'แผลหลอดเลือดดำเรื้อรัง', 'แผลบางส่วนและเต็มความหนาของผิว', 'บริเวณผู้บริจาคผิวหนัง/ปลูกถ่ายผิว', 'แผลผ่าตัด', 'แผลไฟไหม้น้ำร้อนลวกระดับ 1–2'],
                howToUse: '1. ทำความสะอาดบาดแผลตามแนวทางมาตรฐานและซับผิวรอบแผลให้แห้ง 2. เลือกขนาดฟิล์มให้ ซ้อนทับผิวสุขภาพดีอย่างน้อย 2 ซม. รอบขอบแผล 3. นำฟิล์มออกจากซองปลอดเชื้อ วางแนบกับแผลให้แนบสนิท 4. หากจำเป็น ให้เสริมด้วยแผ่นปิดทับใส เทป หรือผ้าพันเบาๆ โดยเฉพาะตำแหน่งที่มีแรงเสียดทานสูง 5. ฟิล์มสามารถคงอยู่ได้ สูงสุด 7 วัน หรือเปลี่ยนเมื่อของเหลวซึมถึงขอบฟิล์ม',
                options: ['มีหลายขนาดมาตรฐาน (เช่น 5×5 ซม., 10×10 ซม., 15×15 ซม.) รุ่นเจาะรู (fenestrated) สำหรับแผลที่ต้องระบาย และสามารถพัฒนาสูตรเฉพาะที่มี สารต้านจุลชีพ (Silver, PHMB) เพื่อตอบโจทย์การรักษาเฉพาะทาง'],
                safety: ['ผ่านมาตรฐาน ISO 10993 (cytotoxicity, sensitization, intracutaneous reactivity) ฆ่าเชื้อขั้นสุดท้ายด้วยรังสีแกมมา ปราศจาก latex, parabens และน้ำหอม เพื่อลดความเสี่ยงการระคายเคือง'],
                faqs: [
                    { q: 'ต้องใช้แผ่นปิดทับรองเพิ่มเติมหรือไม่?', a: 'สำหรับแผลที่มีของเหลวปานกลางถึงมาก แนะนำใช้แผ่นดูดซับรองเพื่อจัดการของเหลว' },
                    { q: 'ใช้กับแผลติดเชื้อได้หรือไม่?', a: 'รุ่นมาตรฐาน ไม่แนะนำ สำหรับแผลติดเชื้อ พิจารณาใช้สูตรต้านจุลชีพภายใต้การดูแลของแพทย์' }
                ],
                downloads: [
                    { name: 'ดาวน์โหลดเอกสารข้อมูลผลิตภัณฑ์ (PDF)', link: '#' },
                    { name: 'ดาวน์โหลดคู่มือการใช้งาน (PDF)', link: '#' },
                ],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-wound-macro-4x3.webp',
                },
                 brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-WND-001-TH',
                gtin: '012345678912',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '500',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Oral Mucoadhesive Patch',
                slug: 'oral-mucoadhesive-patch',
                schemaType: 'MedicalDevice',
                hero: 'แผ่นแปะเฉพาะจุดแบบละลายได้ ยึดติดเยื่อบุช่องปาก เพื่อสร้างชั้นปกป้องและ ค่อยๆ ปล่อยตัวยาในเนื้อเจลอย่างช้าๆ สำหรับการรักษาเฉพาะที่',
                seo: {
                    title: 'Alora Oral Mucoadhesive Patch | บรรเทาแผลร้อนในและแผลในช่องปาก',
                    description: 'แผ่นแปะละลายได้เฉพาะจุด สร้างเกราะป้องกันและนำส่งยาสำหรับแผลร้อนใน แผลในปาก และแผลในช่องปาก ให้การบรรเทาปวดที่ปลอบประโลมและรวดเร็ว',
                    keywords: ['แผ่นแปะในช่องปาก', 'แผลร้อนใน', 'แผ่นฟิล์มละลายได้', 'แผ่นแปะเยื่อบุช่องปาก', 'ยาใช้ในช่องปาก', 'แผ่นแปะแก้ร้อนใน', 'บรรเทาแผลฟันปลอม', 'ส่งยาเฉพาะที่', 'ลดปวดในปาก', 'แผลในปาก', 'แผ่นแปะแผลร้อนใน']
                },
                whatItIs: 'แผ่น mucoadhesive ที่พัฒนาจากส่วนผสมของ aloe และ pectin ซึ่งเมื่ออยู่ในสภาพชื้นของช่องปากจะมีแรงยึดเกาะสูง ปกป้องรอยโรค เช่น แผลร้อนใน พร้อมปล่อยสารปลอบประโลมหรือสารออกฤทธิ์โดยตรง ณ ตำแหน่งที่ต้องการ',
                howItWorks: [
                    'ยึดติดกับเยื่อบุช่องปากภายในไม่กี่วินาที',
                    'ก่อรูปชั้นปกป้องเหนือแผลหรือรอยโรค',
                    'ค่อยๆ ละลายเพื่อ ปล่อย aloe และสารออกฤทธิ์อื่น อย่างสม่ำเสมอ',
                    'เพิ่มการออกฤทธิ์เฉพาะที่ (bioavailability) ของสารที่บรรจุในแผ่น',
                ],
                clinicalSpecs: [
                    { label: 'วัสดุ', value: 'Aloe Polysaccharide, Pectin (Low-Methoxyl)' },
                    { label: 'ระยะเวลาการยึดเกาะ', value: '2–6 ชั่วโมง' },
                    { label: 'การละลาย', value: 'ละลายได้สมบูรณ์' },
                ],
                indications: ['ใช้บรรเทาอาการปวด/ไม่สบายจาก แผลร้อนใน (canker sores), แผลเล็กน้อยในช่องปาก, จุดเสียดสีจากฟันปลอม และรอยโรคอักเสบที่ไม่ติดเชื้อของเยื่อบุช่องปาก'],
                howToUse: '1. ระบุตำแหน่งรอยโรค 2. ล้างมือให้สะอาดและแห้ง เปิดซองหยิบแผ่นออกมา 3. ซับรอยโรคให้แห้งด้วยไม้กดปลายสำลีปราศจากเชื้อ 4. วางแผ่นทับรอยโรค กดเบาๆ 20–30 วินาทีให้ยึดแน่น แผ่นจะดูดซับความชื้นและติดแน่นเอง 5. งดรับประทาน/ดื่ม อย่างน้อย 1 ชั่วโมง เพื่อให้ยึดเกาะเต็มที่และเริ่มการปล่อยสารบรรเทา แผ่นจะละลายเองภายในหลายชั่วโมง',
                options: ['มีรูปทรงกลมขนาด 8 มม. และ 12 มม. แบบแนบเนียน พัฒนารูปทรง/รสชาติ (เช่น มินต์อ่อน) ภายใต้ความร่วมมือเชิงพาณิชย์ได้ สูตรสามารถบรรจุสารออกฤทธิ์ เช่น Lidocaine, Hyaluronic Acid เป็นต้น'],
                safety: ['ผลิตด้วยวัตถุดิบเกรดอาหาร (GRAS) ปราศจากสารก่อแพ้ที่พบบ่อย ผ่านการทดสอบความเข้ากันได้ทางชีวภาพอย่างเข้มงวดเพื่อความปลอดภัยบนเยื่อบุ'],
                faqs: [],
                downloads: [{ name: 'ดาวน์โหลดเอกสารข้อมูลผลิตภัณฑ์ (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-oral-macro-4x3.webp',
                },
                brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-ORL-001-TH',
                gtin: '012345678929',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '420',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Pro-Collagen Skincare Mask',
                slug: 'pro-collagen-skincare-mask',
                schemaType: 'Product',
                hero: 'มาสก์ชีทไบโอฟิล์มโปร่งใสระดับลักชัวรี มอบความชุ่มชื้น เปปไทด์ และสารต้านอนุมูลอิสระในระดับคลินิก เพื่อผิวอิ่มฟู กระจ่างใสอย่างเห็นได้ชัด',
                seo: {
                    title: 'Alora Pro-Collagen Hydrogel Mask | วิตามินซี, HA และเปปไทด์',
                    description: 'มาสก์ชีทไบโอฟิล์มหรูหรา อุดมด้วยวิตามินซี, กรดไฮยาลูรอนิก และเปปไทด์ เพื่อความชุ่มชื้นล้ำลึก เพิ่มความกระจ่างใส และคุณสมบัติต้านริ้วรอย เหมาะสำหรับปลอบประโลมผิวหลังทำหัตถการ',
                    keywords: ['มาสก์หน้าไฮโดรเจล', 'มาสก์คอลลาเจน', 'มาสก์เปปไทด์', 'ให้ความชุ่มชื้นล้ำลึก', 'ดูแลผิวหลังทำเลเซอร์', 'มาสก์วิตามินซี', 'มาสก์ไบโอฟิล์ม', 'สกินแคร์หรูหรา', 'ผิวแพ้ง่าย', 'มาสก์หน้าลดริ้วรอย', 'มาสก์หน้ากระจ่างใส', 'มาสก์ปลอบประโลมผิว', 'มาสก์ไฮยาลูรอน']
                },
                whatItIs: 'แตกต่างจากมาสก์ใยทั่วไป ผลิตภัณฑ์นี้คือ ไฮโดรเจลชีท ที่ขึ้นรูปจากไบโอฟิล์ม aloe-pectin บริสุทธิ์ เกาะแนบผิวหน้าอย่างพอดี สร้างชั้นปิดกั้น (occlusive barrier) ที่ ช่วยเพิ่มการซึมผ่านของซีรั่ม ซึ่งเสริมด้วย Vitamin C, Hyaluronic Acid และ Matrixyl peptides',
                howItWorks: [
                    'สร้างเอฟเฟกต์ “second skin” เพื่อการดูดซึมสารบำรุงสูงสุด',
                    'มอบความชุ่มชื้นลึกและยาวนานสู่ชั้น epidermis',
                    'ปลอบประโลมและลดรอยแดงที่มองเห็นได้',
                    'ให้สัมผัสเย็นสบายขณะใช้งาน',
                ],
                clinicalSpecs: [
                    { label: 'ส่วนผสมหลัก', value: 'Aloe Polysaccharides, Pectin, Vitamin C, Hyaluronic Acid, Peptides' },
                    { label: 'เวลาในการใช้', value: '20–30 นาที' },
                    { label: 'วัสดุ', value: 'Biofilm Hydrogel' },
                ],
                indications: ['เหมาะสำหรับผู้ที่ต้องการ เติมความชุ่มชื้นแบบเข้มข้น เพิ่มความโกลว์ และลดเลือนริ้วรอยเล็กๆ เหมาะใช้ก่อนออกงาน เป็นการบำรุงสัปดาห์ละครั้ง หรือเพื่อปลอบประโลมหลังหัตถการความงามที่ไม่รบกวนลึก'],
                howToUse: '1. ทำความสะอาดและเตรียมผิวให้พร้อม 2. เปิดซองและคลี่มาสก์อย่างระมัดระวัง 3. วางมาสก์แนบใบหน้าให้พอดีตำแหน่งดวงตา จมูก ปาก ไล่อากาศให้แนบสนิท 4. พักผ่อน 20–30 นาที 5. ลอกออกและ ตบซีรั่มส่วนที่เหลือให้ซึม โดยไม่ล้างออก แล้วจบด้วยมอยส์เจอไรเซอร์',
                options: ['บรรจุในซอง single-use สำหรับใช้งานที่บ้าน และมีแพ็กแบบ back-bar สำหรับคลินิก/สปาเพื่อใช้ในทรีตเมนต์ระดับมืออาชีพ'],
                safety: ['ผ่านการทดสอบโดยแพทย์ผิวหนัง (dermatologist-tested) ไม่อุดตันรูขุมขน (non-comedogenic) ปราศจาก parabens, sulfates, phthalates และน้ำหอมสังเคราะห์ เหมาะกับทุกสภาพผิวรวมถึงผิวบอบบาง'],
                faqs: [],
                downloads: [{ name: 'ดาวน์โหลดโบรชัวร์ผลิตภัณฑ์ (PDF)', link: '#' }],
                images: {
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-hero-16x9.webp',
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-mask-macro-4x3.webp',
                },
                 brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-SKN-001-TH',
                gtin: '012345678936',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '1500',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Ocular Delivery Film',
                slug: 'ocular-delivery-film',
                schemaType: 'MedicalDevice',
                hero: 'ฟิล์มใสทางจักษุแบบล้ำสมัย มอบการหล่อลื่นอย่างต่อเนื่องและ ค่อยๆ ปล่อยตัวยาในเนื้อเจลอย่างช้าๆ เพื่อการรักษาเฉพาะที่',
                seo: {
                    title: 'Alora Ocular Delivery Film | บรรเทาภาวะตาแห้งอย่างต่อเนื่อง',
                    description: 'ฟิล์มสำหรับดวงตาปลอดเชื้อและไร้สารกันบูด สำหรับการหล่อลื่นและนำส่งยาอย่างต่อเนื่อง เป็นทางเลือกใหม่สำหรับภาวะตาแห้ง การดูแลหลังทำเลสิค และปกป้องกระจกตา',
                    keywords: ['ยาหยอดตา', 'รักษาตาแห้ง', 'ฟิล์มละลายในตา', 'นำส่งยาทางตา', 'หล่อลื่นดวงตา', 'ดูแลหลังทำเลสิค', 'ยาหยอดตาไร้สารกันบูด', 'ฟิล์มตาแห้ง', 'ปกป้องกระจกตา', 'น้ำตาเทียมทางเลือก', 'ฟิล์มในตา']
                },
                whatItIs: 'ฟิล์มปลอดเชื้อบางระดับไมโคร จาก aloe และ pectin ที่จะค่อยๆ ละลายเมื่อวางใน conjunctival sac (ถุงเยื่อบุตา) เพื่อการหล่อลื่นยาวนาน',
                howItWorks: ['ให้ความชุ่มชื้น/หล่อลื่นต่อเนื่องหลายชั่วโมง', 'สามารถบรรจุยาทางจักษุวิทยาเพื่อ การปล่อยตัวยาแบบควบคุมในเนื้อเจลอย่างช้าๆ'],
                clinicalSpecs: [{ label: 'วัสดุ', value: 'Ophthalmic-grade Aloe/Pectin' }],
                indications: ['แนะนำสำหรับผู้ป่วย Dry Eye Syndrome (DED) ระดับปานกลาง–รุนแรง, การหล่อลื่นหลังทำหัตถการตา (เช่น LASIK, ผ่าตัดต้อกระจก), และการปกป้องกระจกตาในกรณี exposure keratitis'],
                howToUse: '1. ล้างมือให้สะอาด 2. ใช้นิ้วที่สะอาดดึงเปลือกตาล่างลงเล็กน้อยให้เกิดช่อง (inferior cul-de-sac) 3. วางฟิล์มบางลงในช่องดังกล่าว 4. ปล่อยเปลือกตาและกระพริบสองสามครั้ง ฟิล์มจะเริ่มละลายและสร้างชั้นน้ำตาหล่อลื่นต่อเนื่อง',
                options: ['มีรุ่น ให้ความชุ่มชื้นอย่างเดียว และรุ่นที่บรรจุ API ทางจักษุ (เช่น cyclosporine, antibiotics, ต้านอักเสบ) เพื่อการรักษาแบบเจาะจงและยาวนาน ลดความจำเป็นต้องหยอดตาบ่อย'],
                safety: ['ผ่านการฆ่าเชื้อขั้นสุดท้ายเพื่อความปลอดภัยทางจักษุ วัสดุเป็น ophthalmic-grade ทดสอบไม่ก่อการระคายเคือง ปราศจากสารกันเสีย เพื่อลดความเสี่ยงต่อพิษบนผิวตาเมื่อใช้ระยะยาว'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-ocular-macro-4x3.webp' 
                },
                 brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-OCU-001-TH',
                gtin: '012345678943',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '1200',
                    availability: 'https://schema.org/PrescriptionOnly',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Post-Procedure Calming Film',
                slug: 'post-procedure-calming-film',
                schemaType: 'Product',
                hero: 'ฟิล์มปลอบประโลมปลอดเชื้อ ช่วยเร่งการฟื้นฟูหลังทำหัตถการความงาม',
                seo: {
                    title: 'Alora Post-Procedure Calming Film | การดูแลผิวหลังหัตถการสำหรับมืออาชีพ',
                    description: 'ฟิล์มไฮโดรเจลปลอดเชื้อสำหรับฟื้นฟูผิวและลดรอยแดงอย่างรวดเร็วหลังทำ microneedling, laser resurfacing หรือ chemical peels สกินแคร์สำหรับคลินิกเพื่อดูแลเกราะป้องกันผิวที่ถูกทำลาย',
                    keywords: ['ปลอบประโลมผิว', 'ดูแลผิวหลังทำเลเซอร์', 'ลดรอยแดง', 'สกินแคร์สำหรับคลินิก', 'ฟิล์มลดการอักเสบ', 'ไฮโดรเจลปลอบประโลม', 'ดูแลหลังหัตถการ', 'ลดรอยแดงหลังเลเซอร์', 'ดูแลผิวหลังทำเคมีคอลพีล', 'ดูแลผิวหลังทำ IPL', 'ฟื้นฟูเกราะป้องกันผิว']
                },
                whatItIs: 'ฟิล์มเย็นและเติมความชุ่มชื้น ใช้ทันทีหลังการทำหัตถการ เช่น microneedling หรือ laser resurfacing เพื่อบรรเทาอาการระคายและฟื้นฟูผิว',
                howItWorks: ['ลดรอยแดงและการอักเสบอย่างรวดเร็ว', 'สร้างชั้นป้องกันให้ความชุ่มชื้นกับผิวที่ถูกทำหัตถการ'],
                clinicalSpecs: [{ label: 'ส่วนผสมหลัก', value: 'Aloe Polysaccharide ความเข้มข้นสูง' }],
                indications: ['พัฒนาสำหรับใช้ ทันทีหลังหัตถการ เช่น microneedling, fractional laser resurfacing, chemical peels, หรือ IPL เพื่อช่วยลดอาการแดง ความร้อน และความไม่สบายที่เกิดจากหัตถการอย่างรวดเร็ว'],
                howToUse: 'สำหรับผู้เชี่ยวชาญ: 1. หลังทำหัตถการ ให้ทำความสะอาดบริเวณที่ทำตามแนวทาง 2. วางฟิล์มปลอดเชื้อให้คลุมทั่วบริเวณ 3. ไฮโดรเจลที่ให้ความเย็นจะช่วยบรรเทาทันที เว้นไว้ 30–60 นาที เพื่อลดการอักเสบและเติมน้ำให้เกราะป้องกันผิว',
                options: ['มีแบบ หน้ากากปลอดเชื้อใช้ครั้งเดียว ให้พอดีกับสัดส่วนใบหน้าทั่วไป และสามารถพัฒนารูปทรงเฉพาะส่วนของร่างกาย (เช่น เดรคอลเลอเทจ แผ่นหลัง) ตามโปรโตคอลคลินิก/พันธมิตรอุปกรณ์'],
                safety: ['มาพร้อมสภาวะปลอดเชื้อ (gamma irradiated) ลดความเสี่ยงการติดเชื้อหลังหัตถการ สูตรเรียบง่ายเหมาะกับผิวที่ถูกทำลาย ปราศจาก น้ำหอม แอลกอฮอล์ และ essential oils'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-calming-macro-4x3.webp' 
                },
                 brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-PPC-001-TH',
                gtin: '012345678950',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '3200',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            },
            {
                name: 'Alora Bio-Active Scar Sheet',
                slug: 'bio-active-scar-sheet',
                schemaType: 'MedicalDevice',
                hero: 'แผ่นเจลชุ่มชื้นแบบแนบเนียน เพื่อช่วยลดและปรับลุคแผลเป็นให้ดีขึ้น',
                seo: {
                    title: 'Alora Bio-Active Scar Sheet | เทคโนโลยีจัดการรอยแผลเป็นขั้นสูง',
                    description: 'แผ่นแปะ bio-active ให้ความชุ่มชื้นและยึดติดได้เอง เพื่อทำให้แผลเป็นคีลอยด์และแผลเป็นนูนนุ่มลง เรียบเนียนขึ้น และจางลง เหมาะสำหรับแผลผ่าตัด แผลผ่าคลอด แผลไฟไหม้ หรือสิว เป็นทางเลือกที่อ่อนโยนและใช้ซ้ำได้',
                    keywords: ['แผ่นแปะรอยแผลเป็น', 'ลดรอยแผลเป็น', 'แผลเป็นคีลอยด์', 'แผลเป็นนูน', 'จัดการรอยแผลเป็น', 'แผลผ่าตัด', 'แผ่นแปะรอยแผลเป็นใช้ซ้ำได้', 'ทรีตเมนต์ชีวภาพ', 'แผ่นแปะแผลผ่าคลอด', 'รักษารอยแผลไฟไหม้', 'แผ่นแปะรอยสิว', 'ทำให้แผลเป็นเรียบเนียน', 'แผลเป็นจางลง']
                },
                whatItIs: 'แผ่นนุ่ม ยึดเกาะได้ด้วยตนเอง ให้สภาพแวดล้อมแบบปิด (occlusion) และความชุ่มชื้นต่อเนื่องแก่เนื้อเยื่อแผลเป็น',
                howItWorks: ['เติมความชุ่มชื้นให้ stratum corneum', 'ทำให้แผลเป็นชนิด hypertrophic/keloid นุ่มและราบเรียบขึ้น'],
                clinicalSpecs: [{ label: 'ระยะเวลาสวมใส่', value: 'สูงสุด 24 ชั่วโมง' }],
                indications: ['ใช้ดูแลและป้องกันแผลเป็นใหม่–เก่าประเภท hypertrophic/keloid จากการผ่าตัด อุบัติเหตุ แผลไฟไหม้ หรือสิว ช่วยให้แผลอ่อนนุ่ม เรียบขึ้น และสีจางลง'],
                howToUse: '1. แน่ใจว่าแผลหายดีแล้ว และผิวสะอาดแห้ง 2. ตัดแผ่นให้พอดี โดยให้ซ้อนทับผิวปกติเล็กน้อย 3. ลอกแผ่นรองและแปะด้านกาวลงบนแผลเป็น 4. เพื่อผลลัพธ์ที่ดี ควรสวม 12–24 ชม./วัน แผ่นสามารถนำกลับมาใช้ซ้ำได้ ให้ล้างด้วยสบู่อ่อนและน้ำ แล้วผึ่งให้แห้งก่อนแปะใหม่ เมื่อใช้ต่อเนื่อง 8–12 สัปดาห์ มักเห็นการเปลี่ยนแปลงที่ชัดเจน',
                options: ['มีหลายรูปทรงสำเร็จ (เส้นยาว วงกลม แบบสมอสำหรับผ่าตัดเต้านม) และแบบแผ่นใหญ่ (เช่น 12×15 ซม.) เพื่อตัดได้ตามต้องการ'],
                safety: ['ใช้ กาวซิลิโคนระดับการแพทย์ ที่อ่อนโยนต่อผิว ลดการระคายเคือง เหมาะสำหรับผิวบอบบาง แผ่น ระบายอากาศและยืดหยุ่น ใส่สบายแม้บริเวณข้อต่อหรือส่วนที่มีการเคลื่อนไหวมาก'],
                faqs: [],
                downloads: [],
                images: { 
                    hero: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-hero-16x9.webp', 
                    macro: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/product-scar-macro-4x3.webp' 
                },
                 brand: { '@type': 'Brand', name: 'Alora' },
                sku: 'ALR-SCR-001-TH',
                gtin: '012345678967',
                offers: {
                    '@type': 'Offer',
                    priceCurrency: 'THB',
                    price: '850',
                    availability: 'https://schema.org/InStock',
                    seller: { '@type': 'Organization', name: 'Alora Biotechnology' }
                }
            }
        ]
    },
    navigation: {
        products: 'ผลิตภัณฑ์',
        science: 'วิทยาศาสตร์เบื้องหลัง',
        innovation: 'นวัตกรรม',
        faq: 'คำถามที่พบบ่อย',
        contact: 'ติดต่อเรา',
        requestSamples: 'ขอตัวอย่างผลิตภัณฑ์',
    },
    footer: {
        about: {
            title: 'Alora',
            text: 'บุกเบิกนวัตกรรม bioactive films สำหรับการรักษาและการดูแลผิวขั้นสูง ด้วยพลังจากธรรมชาติ'
        },
        explore: 'สำรวจ',
        legal: 'กฎหมาย',
        privacy: 'นโยบายความเป็นส่วนตัว',
        terms: 'ข้อกำหนดการให้บริการ',
        connect: 'ติดต่อ',
        copyright: `© ${new Date().getFullYear()} Alora Biotechnology. สงวนลิขสิทธิ์`,
        disclaimer: 'ข้อมูลนี้ใช้เพื่อการให้ความรู้เท่านั้น ไม่ถือเป็นคำแนะนำทางการแพทย์',
    },
    productCardContent: {
        viewDetails: 'ดูรายละเอียด'
    },
    landingPageContent: {
        hero: {
            title: 'Clinical & Skincare Portfolio — Alora × Pectin Synergy',
            subtitle: 'ฟิล์มจาก Aloe vera ที่อุดมด้วยสารออกฤทธิ์ชีวภาพ (Bioactive) ผสานเข้ากับเทคโนโลยีการถ่ายเทตัวยาอย่างควบคุม (Pectin delivery science) เพื่อการสมานแผลที่เร็วขึ้น เติมความชุ่มชื้นล้ำลึก และปลดปล่อยสารออกฤทธิ์อย่างต่อเนื่อง',
            exploreButton: 'ดูผลิตภัณฑ์',
            scienceButton: 'ดูข้อมูลวิทยาศาสตร์',
        },
        intro: "Alora ผสาน Aloe vera biofilm — อุดมด้วย acemannan และสารพฤกษเคมีที่ช่วยปลอบประโลม — เข้ากับ เทคโนโลยี Pectin delivery อันล้ำสมัย เพื่อสร้างนวัตกรรมรุ่นใหม่ของ ฟิล์มทางการแพทย์ (clinical-grade wound films), แผ่นแปะมิวโคแอดฮีซีฟ (mucoadhesive patches), และมาสก์ดูแลผิวระดับลักซ์ชัวรี\n\nเมทริกซ์ชีวพอลิเมอร์คู่ (dual-biopolymer matrix) นี้ได้รับการออกแบบเชิงวิศวกรรมอย่างพิถีพิถันเพื่อ มากกว่าการปกป้อง — มันช่วยเติมความชุ่มชื้นต่อเนื่อง ลดการอักเสบ และค่อยๆ ถ่ายเทตัวยาให้ซึมผ่านช้าๆ (controlled sustained diffusion) ได้นานสูงสุด 72 ชั่วโมง\n\nผลลัพธ์ที่ได้คือวัสดุที่ช่วยเร่งการซ่อมแซมเนื้อเยื่อ สนับสนุนการสร้างผิวใหม่ (re-epithelialization) และเพิ่มความสบาย ในขณะที่ยังคงความรู้สึกเบาสบาย ระบายอากาศได้ดี และกลมกลืนกับผิวโดยไม่ทิ้งคราบหรือความเหนอะหนะ แตกต่างจากพอลิเมอร์สังเคราะห์ทั่วไป Alora ใช้วัสดุที่ biocompatible (เข้ากันได้ทางชีวภาพ) และ biodegradable (ย่อยสลายได้ตามธรรมชาติ) ซึ่งปลอดภัยต่อผู้ใช้และดีต่อสิ่งแวดล้อม ออกแบบโดยอิงหลักฐานทางวิทยาศาสตร์และข้อมูลเชิงคลินิก ทำให้มั่นใจได้ว่า เห็นผลลัพธ์จริง ทั้งในด้านการรักษาและด้านความงาม — เป็นสะพานเชื่อมระหว่าง เวชภัณฑ์และสกินแคร์สมัยใหม่ อย่างแท้จริง",
        persuasion: {
            clinical: {
                title: 'ออกแบบเพื่อการสมานแผลที่เร็วขึ้นและปลอดภัยขึ้น',
                text: 'Aloe ที่อุดมด้วย acemannan สนับสนุนการทำงานของไฟโบรบลาสต์ สร้างสภาพแวดล้อมที่ชุ่มชื้น; Pectin ที่ cross-linked ด้วยแคลเซียมสร้างโครงสร้างที่มั่นคง ลดการสูญเสียความชื้นผ่านผิวหนัง (Transepidermal Water Loss, TEWL) และเพิ่มความสบายแก่ผู้ป่วย',
                bullets: ['Biocompatibility ตามมาตรฐาน ISO 10993', 'การปิดแผลแบบสมดุลความชื้น', 'ทางเลือกแบบ Mucoadhesive (สำหรับช่องปาก/ตา)', 'ควบคุมการถ่ายเทตัวยาได้ 24–72 ชั่วโมง'],
                expandLink: 'ดูตัวอย่างการใช้ทางคลินิก →',
                collapseLink: 'ซ่อนตัวอย่างการใช้ทางคลินิก',
                expandedContent: {
                    longDescription: 'ผลลัพธ์คือการเกิดผิวใหม่เร็วขึ้น ระคายเคืองน้อยลง และการสวมใส่ที่เชื่อถือได้ทั้งในบาดแผล แผลในช่องปาก และแผลที่ดวงตา เทคโนโลยีนี้สามารถปรับใช้กับความต้องการทางการแพทย์ที่หลากหลาย ตั้งแต่การจัดการแผลเรื้อรังไปจนถึงการถ่ายเทตัวยาเฉพาะจุด',
                    imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/persuasion-clinical-chart.webp',
                }
            },
            beauty: {
                title: 'การดูแลผิวหรูหรา ด้วยตรรกะทางคลินิก',
                text: 'มาสก์และเจลฟิล์มของ Alora มอบความชุ่มชื้นล้ำลึก พร้อมการถ่ายเทสาร Vitamin C, Hyaluronic Acid (HA) และ peptides แบบค่อยเป็นค่อยไป เพื่อมอบผิวที่เปล่งประกาย ยืดหยุ่น และผ่อนคลายหลังการทำหัตถการ',
                bullets: ['เพิ่มความชุ่มชื้น ลด TEWL', 'เสถียรภาพของสารออกฤทธิ์ (Vitamin C / HA / EGF)', 'เนื้อสัมผัสเบาสบาย ไม่ลื่นไหล', 'เห็นความกระจ่างใสในเวลาไม่กี่นาที'],
                expandLink: 'สำรวจสายผลิตภัณฑ์ดูแลผิว →',
                collapseLink: 'ซ่อนสายผลิตภัณฑ์ดูแลผิว',
                expandedContent: {
                    longDescription: 'เมทริกซ์จากพืชนี้ปราศจากน้ำหอม อ่อนโยนแม้ผิวแพ้ง่าย และละลายโดยไม่ทิ้งคราบ ทำให้เป็นระบบส่งสารออกฤทธิ์ (delivery system) ที่ไม่มีใครเทียบได้ ช่วยให้สารซึมลึกกว่าเดิม เห็นผลชัดเจนและยาวนานกว่า',
                    imageSrc: 'https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-assets/persuasion-beauty-model.webp',
                }
            },
        },
        products: {
            title: 'ผลิตภัณฑ์ของเรา',
        },
        trust: {
            quote: '“Aloe polysaccharides (acemannan) + high/low-methoxyl pectins = biocompatible, bioactive, and controllable release.”',
        },
        cta: {
            title: 'ขอรับข้อมูลทางคลินิกและตัวอย่างผลิตภัณฑ์',
            button: 'ติดต่อฝ่าย Medical Affairs',
        },
    },
    sciencePageContent: {
        stickyCta: {
            title: 'รับข้อมูลเชิงลึกเพิ่มเติม',
            dataSheetButton: 'ขอรับเอกสารข้อมูลเชิงเทคนิค',
            demoButton: 'ขอรับการสาธิตผลิตภัณฑ์'
        },
        hero: {
            title: 'วิทยาศาสตร์เบื้องหลังการทำงานร่วมกัน',
            subtitle: 'เปิดเผยกลไกทางวัสดุศาสตร์ (materials science) ที่ทำให้ Aloe vera และ Pectin รวมตัวกันเพื่อสร้างแพลตฟอร์มชีวภาพ (bioactive platform) ที่เหนือกว่า'
        },
        sections: {
            materials: {
                title1: 'Component A: Bioactive Aloe',
                text1: 'เรานำเสนอเทคโนโลยีการสกัดเฉพาะ (proprietary extraction method) เพื่อแยก acemannan ที่มีน้ำหนักโมเลกุลสูง ซึ่งเป็นโพลีแซ็กคาไรด์ (polysaccharide) หลักที่ออกฤทธิ์ทางชีวภาพใน Aloe vera ส่วนประกอบนี้มีบทบาทสำคัญในการ กระตุ้นการทำงานของเซลล์, ควบคุมการอักเสบ, และส่งเสริมกระบวนการสร้างเส้นเลือดใหม่ (angiogenesis)',
                title2: 'Component B: Structural Pectin',
                text2: 'Pectin ที่สกัดจากเปลือกส้มตระกูล citrus ทำหน้าที่เป็น โครงสร้างหลัก (structural backbone) เราใช้ทั้งชนิด High-methoxyl และ Low-methoxyl ซึ่งสามารถทำ cross-link กับไอออนประจุบวกสอง (divalent cations เช่น Ca²⁺) เพื่อสร้าง hydrogel matrix ที่ควบคุมคุณสมบัติทางกายภาพได้อย่างแม่นยำ',
                tunableTitle: 'คุณสมบัติที่ปรับแต่งได้ (Key Tunable Properties):',
                tunableItems: ['ความพรุน (Porosity)', 'อัตราการพองตัว (Swelling Ratio)', 'อัตราการสลายตัว (Erosion Rate)', 'ความแข็งแรงในการยึดเกาะ (Adhesion Strength)', 'ความแข็งแรงเชิงกล (Mechanical Strength)', 'โปรไฟล์การถ่ายเทตัวยา (Drug Elution Profile)'],
            },
            synergy: {
                title: 'การทำงานร่วมกันของ Alora และ Pectin',
                items: [
                    'Aloe ทำหน้าที่ด้าน bioactivity ส่วน Pectin ให้ โครงสร้างที่ปรับแต่งได้และควบคุมการถ่ายเทตัวยา',
                    'Pectin ช่วยคงความเสถียรของโพลีแซ็กคาไรด์จาก Aloe ทำให้ bioactivity ไม่สูญเสีย',
                    'การรวมกันนี้สร้าง สภาพแวดล้อมที่กักเก็บความชื้นได้เหนือกว่า เมื่อเทียบกับการใช้เพียงสารใดสารหนึ่ง',
                    'สามารถพัฒนาได้ทั้งรูปแบบฟิล์มแข็งที่ไม่ละลาย (ใช้กับบาดแผล) และฟิล์มที่ละลายได้ (ใช้กับช่องปาก/ตา)',
                    'เมทริกซ์สุดท้ายมีคุณสมบัติ biocompatible, biodegradable และยั่งยืนจากพืช'
                ]
            },
            evidence: {
                title: 'หลักฐานวิจัยสำคัญ',
                wound: {
                    title: 'Wound Healing (การสมานแผล):',
                    text: 'การทดสอบในห้องปฏิบัติการ (in-vitro) แสดงให้เห็นการเพิ่มขึ้นของการแบ่งตัวของไฟโบรบลาสต์ถึง 40% เมื่อเทียบกับกลุ่มควบคุม การทดสอบในสิ่งมีชีวิต (in-vivo) แสดงการเกิดผิวใหม่ (re-epithelialization) ที่เร็วกว่าอย่างมีนัยสำคัญ'
                },
                oral: {
                    title: 'Oral Delivery (การใช้ในช่องปาก):',
                    text: 'การทดสอบการยึดเกาะกับเยื่อบุ (mucoadhesion) พบว่าสามารถคงอยู่ได้นานกว่า 4 ชั่วโมง ส่งตัวยาเฉพาะที่ได้ถึง 90% ลดการกระจายเข้าสู่ระบบโดยรวม (systemic exposure)'
                },
                skin: {
                    title: 'Skincare Hydration (การเพิ่มความชุ่มชื้นผิว):',
                    text: 'เครื่อง Corneometer แสดงการเพิ่มความชุ่มชื้นของผิวถึง 250% ภายใน 20 นาที ระดับความชุ่มชื้นยังคงสูงกว่าปกติถึง 80% แม้ผ่านไป 8 ชั่วโมง'
                },
                kpis: ['สมานแผลเร็วขึ้น (Faster Healing)', 'การถ่ายเทตัวยาที่ดีขึ้น (Enhanced Delivery)', 'ความชุ่มชื้นเหนือกว่า (Superior Hydration)', 'คุณสมบัติที่ปรับแต่งได้ (Tunable Performance)']
            },
            safety: {
                title: 'ความปลอดภัย คุณภาพ และเส้นทางการขึ้นทะเบียน',
                items: [
                    'วัสดุทั้งหมดได้รับการจัดเป็น GRAS (Generally Recognized As Safe) และมาจากซัพพลายเออร์ที่เชื่อถือได้',
                    'ผลิตภายใต้มาตรฐานการผลิตที่สอดคล้อง ISO 13485',
                    'ผ่านการทดสอบ biocompatibility ตาม ISO 10993 ครอบคลุมทั้ง cytotoxicity, sensitization และ irritation → ไม่มีผลกระทบเชิงลบ',
                    'มีเส้นทางการกำกับดูแลที่ชัดเจนสำหรับผลิตภัณฑ์เครื่องมือแพทย์ Class I/II/III และเวชสำาง'
                ],
                disclaimer: 'Disclaimer: ข้อมูลทั้งหมดนี้จัดทำขึ้นเพื่อการให้ความรู้ ข้ออ้างอิงทางการตลาดจำเป็นต้องได้รับการอนุมัติจากหน่วยงานกำกับดูแลในประเทศที่จัดจำหน่าย'
            },
            faq: {
                title: 'คำถามที่พบบ่อยทางเทคนิค',
                items: [
                    { q: 'กลไกการ cross-linking เป็นอย่างไร?', a: 'ส่วนใหญ่เกิดจากการ cross-link เชิงไอออนิก โดยใช้ calcium chloride ความหนาแน่นของ cross-link ถูกควบคุมด้วยความเข้มข้นของ Ca²⁺ และชนิดของ pectin ซึ่งเป็นตัวกำหนดคุณสมบัติของวัสดุ' },
                    { q: 'การบรรจุตัวยา (drug loading) ทำได้อย่างไร?', a: 'สารออกฤทธิ์ (actives) สามารถผสมลงในสารละลายพอลิเมอร์ก่อนเข้าสู่กระบวนการขึ้นรูป (casting และ drying) ทำให้สารกระจายตัวสม่ำเสมอทั่วทั้งเมทริกซ์' }
                ]
            }
        }
    },
    innovationPageContent: {
        stickyCta: {
            title: 'ร่วมเป็นพันธมิตรกับเรา',
            dossierButton: 'ขอรับแฟ้มข้อมูลเชิงเทคนิค',
            samplesButton: 'ขอตัวอย่างทางคลินิก'
        },
        hero: {
            title: 'The Alora Innovation Platform',
            subtitle: 'เทคโนโลยีชีวพอลิเมอร์ (biopolymer) อเนกประสงค์ ที่พัฒนาบนพื้นฐานข้อมูลเชิงหลักฐาน พร้อมสำหรับการสร้างสรรค์ผลิตภัณฑ์ทางการแพทย์และความงามรุ่นใหม่'
        },
        sections: {
            platform: {
                title: 'แพลตฟอร์ม ไม่ใช่แค่ผลิตภัณฑ์',
                text: 'แพลตฟอร์ม Alora ไม่ได้เป็นเพียงวัสดุหนึ่งชิ้น แต่เป็น เมทริกซ์ชีวพอลิเมอร์ที่ออกแบบเชิงวิศวกรรม เพื่อเชื่อมระหว่าง ความเข้มงวดทางคลินิก และ ความเชื่อมั่นของผู้บริโภค โดยผสาน Aloe vera ที่อุดมด้วย acemannan เข้ากับ Pectin ที่ได้จาก citrus Aloe มอบคุณสมบัติ bioactivity, hydration และ immunomodulation (ปรับสมดุลภูมิคุ้มกัน) Pectin มอบ ความแข็งแรงเชิงกล, ความสามารถในการยึดเกาะ (mucoadhesion), และการถ่ายเทสารออกฤทธิ์อย่างควบคุม (controlled diffusion)',
                items: [
                    'สำหรับการใช้งานเชิงคลินิก: สามารถปรับความหนาแน่นของ cross-link เพื่อควบคุมอัตราการส่งผ่านไอน้ำ (MVTR) กำหนดค่าความพรุนเพื่อการดูดซับสารคัดหลั่งอย่างเจาะจง ปรับโปรไฟล์การละลายได้ตั้งแต่ฟิล์มที่ละลายเร็วไปจนถึงฟิล์มที่สวมใส่ได้นาน',
                    'สำหรับพันธมิตรทางธุรกิจ: แพลตฟอร์มนี้เปิดโอกาสให้สร้างผลิตภัณฑ์ที่หลากหลาย เช่น ฟิล์มปิดแผลที่สมานเร็วขึ้น มาสก์ดูแลผิวที่ให้ผลลัพธ์เปล่งประกาย ฟิล์มสำหรับช่องปากและดวงตาที่สะดวก ละมุน และเป็นมิตรต่อวีแกน',
                    'สูตรหลัก: Acemannan-rich Aloe Polysaccharide + Citrus Pectin',
                    'สามารถบรรจุ APIs (Active Pharmaceutical Ingredients), เปปไทด์, growth factors และสารออกฤทธิ์อื่นๆ',
                    'รองรับกระบวนการผลิตที่ปรับขนาดได้ ตั้งแต่ห้องแล็บจนถึงการผลิตเชิงพาณิชย์'
                ]
            },
            enables: {
                title: 'ความเป็นไปได้ใหม่ที่ Alora สร้างขึ้น',
                items: [
                    { title: 'Advanced Wound Care', text: 'ฟิล์มที่กระตุ้นการเคลื่อนที่ของไฟโบรบลาสต์ ลดความเสี่ยงการติดเชื้อ และเร่งการสมานแผลโดยไม่ต้องพึ่งสารสังเคราะห์ ข้อความเสริม: “การดูแลแผลยุคใหม่ พลังจากธรรมชาติ พิสูจน์แล้วทางคลินิก”', icon: <WoundCareIcon /> },
                    { title: 'Drug Delivery', text: 'การถ่ายเทสารออกฤทธิ์เฉพาะที่แบบควบคุม (4–72 ชั่วโมง) สำหรับช่องปาก ดวงตา และผิวหนัง ลดผลข้างเคียงจากการกระจายตัวในระบบ ข้อความเสริม: “แม่นยำ เป็นมิตรต่อผู้ป่วย”', icon: <DrugDeliveryIcon /> },
                    { title: 'Luxury Skincare', text: 'ฟิล์มไฮโดรเจลแบบผิวที่สอง ช่วยเพิ่มการซึมซับของสารสำคัญได้มากถึง 250% ให้ผลลัพธ์ที่ชัดเจนและยาวนาน ข้อความเสริม: “เหตุผลทางคลินิก ผสานความหรูหราในเครื่องสำาง”', icon: <SkincareIcon /> }
                ]
            },
            performance: {
                title: 'วิศวกรรมที่ขับเคลื่อนด้วยหลักฐาน',
                text: 'ทุกคุณสมบัติของแพลตฟอร์มถูกเชื่อมโยงกับผลลัพธ์ที่วัดได้อย่างชัดเจน แนวทางที่ขับเคลื่อนด้วยข้อมูลนี้ทำให้ ทุกสเปคกลายเป็นประโยชน์ต่อผู้ป่วยและข้อได้เปรียบทางการตลาด',
                kpis: [
                    {
                        title: 'Tunable Adhesion → การยึดเกาะที่ปรับแต่งได้ = การใช้ที่สบายขึ้น',
                        description: 'จากการยึดเบาสำหรับผิวแพ้ง่าย ไปจนถึง mucoadhesion ที่แข็งแรงสำหรับแผ่นแปะในช่องปาก'
                    },
                    {
                        title: 'Controlled Release → การถ่ายเทสารอย่างควบคุม = ลดความถี่การใช้ยา',
                        description: 'กำหนดความเร็วในการปลดปล่อยสารออกฤทธิ์ ตั้งแต่ชั่วโมงจนถึงวัน'
                    },
                    {
                        title: 'Optimized MVTR → อัตราการส่งผ่านไอน้ำที่เหมาะสม = แผลหายเร็วขึ้น',
                        description: 'สร้างสมดุลระหว่างความชื้นและการหายใจของผิว'
                    },
                    {
                        title: 'High Purity → ความบริสุทธิ์สูง = การยอมรับด้านกฎระเบียบที่แข็งแรงกว่า',
                        description: 'กำจัดสิ่งปนเปื้อน ผลิตภัณฑ์สะอาดและปลอดภัยต่อผู้ใช้'
                    }
                ]
            },
            customization: {
                title: 'ปรับแต่งได้ตามความต้องการ',
                text: 'Alora ไม่ใช่คำตอบแบบ “one-size-fits-all” แต่คือ สนามทดลองวัสดุ (material playground) ที่สามารถออกแบบตามความต้องการเฉพาะทาง เช่น โค้งการปลดปล่อยตัวยาเฉพาะ (custom elution curves) ฟิล์มสำหรับดวงตาบางพิเศษ <50 μm ที่สวมใส่สบาย ฟิล์มสำหรับบาดแผลหนามาก >500 μm สำหรับการดูดซับสารคัดหลั่งสูง',
                items: [
                    'ความหนาและขนาดของวัสดุ',
                    'ส่วนผสมและปริมาณสารออกฤทธิ์',
                    'โปรไฟล์การถ่ายเทยา (elution profile)',
                    'คุณสมบัติการยึดเกาะ',
                    'เวลาการละลาย',
                    'ความแข็งแรงเชิงกล',
                    'ความโปร่งใส/ทึบแสง',
                    'บรรจุภัณฑ์และความปลอดเชื้อ'
                ],
                button: 'Start an Innovation Session (เริ่มการพัฒนานวัตกรรมร่วมกัน)'
            }
        }
    },
    faqPageContent: {
        hero: {
            title: 'คำถามที่พบบ่อย (Frequently Asked Questions)',
            subtitle: 'รวมคำตอบสำหรับข้อสงสัยที่พบบ่อยเกี่ยวกับเทคโนโลยี ผลิตภัณฑ์ และการใช้งาน',
        },
        sections: [
            {
                title: 'เกี่ยวกับเทคโนโลยี',
                faqs: [
                    {
                        q: 'Alora Biofilm คืออะไร?',
                        a: 'Alora Biofilm คือแพลตฟอร์มชีวพอลิเมอร์ (biopolymer) ขั้นสูง ที่สร้างจากการทำงานร่วมกันของ Aloe vera polysaccharides (acemannan) ที่ผ่านการทำให้บริสุทธิ์ และ pectin จากพืช โครงสร้างนี้สามารถนำไปพัฒนาเป็น ฟิล์ม แผ่นแปะ หรือมาสก์ สำหรับการแพทย์และการดูแลผิว',
                    },
                    {
                        q: 'ส่วนประกอบสำคัญคืออะไร?',
                        a: 'มี 2 ส่วนหลัก คือ\n\nAloe vera: มอบคุณสมบัติทางชีวภาพ สนับสนุนการสมานแผล ลดการอักเสบ\n\nPectin: ทำหน้าที่เป็นโครงสร้างที่ปรับแต่งได้ ช่วยควบคุมการถ่ายเทตัวยา และรักษาสมดุลความชื้น',
                    },
                    {
                        q: 'เทคโนโลยีนี้แตกต่างจาก hydrogel หรือ dressing อื่นๆ อย่างไร?',
                        a: 'จุดเด่นคือ การทำงานร่วมกันของ Aloe และ Pectin ซึ่งทำให้สามารถปรับแต่งคุณสมบัติทางกายภาพ (เช่น การยึดเกาะ, การละลาย, ความแข็งแรง) ได้เหนือกว่าวัสดุทั่วไป และยังผสาน bioactivity ของ acemannan ที่ hydrogel สังเคราะห์ทั่วไปไม่สามารถทำได้',
                    },
                    {
                        q: 'เทคโนโลยีนี้จดสิทธิบัตรหรือไม่?',
                        a: 'ใช่ เรามีพอร์ตโฟลิโอสิทธิบัตรและคำขอที่ครอบคลุมทั้งสูตรหลัก กระบวนการผลิต และการประยุกต์ใช้เฉพาะด้าน',
                    },
                    {
                        q: 'Biofilm นี้ย่อยสลายได้และเป็นมิตรต่อสิ่งแวดล้อมหรือไม่?',
                        a: 'แน่นอน ส่วนผสมทั้งหมดได้มาจากพืชที่ยั่งยืน และผลิตภัณฑ์สุดท้ายสามารถย่อยสลายได้ทางชีวภาพเต็มรูปแบบ ความยั่งยืนเป็นหัวใจสำคัญของเทคโนโลยีนี้',
                    },
                ],
            },
            {
                title: 'การประยุกต์ใช้และการใช้งาน',
                faqs: [
                    {
                        q: 'Alora ใช้หลักๆ ในด้านใดบ้าง?',
                        a: 'แพลตฟอร์มนี้มีความยืดหยุ่นสูง โดยใช้ได้ในหลายด้าน เช่น\n\n- การดูแลแผลขั้นสูง (ทั้งแผลเรื้อรังและเฉียบพลัน)\n- การนำส่งยาเฉพาะที่ (Localized drug delivery) สำหรับช่องปาก ดวงตา และผ่านผิวหนัง\n- เวชสำอางสมรรถนะสูง เช่น มาสก์เพิ่มความชุ่มชื้น ฟิล์มลดการระคายเคือง ฟิล์มรักษารอยแผลเป็น',
                    },
                    {
                        q: 'สามารถใช้กับผิวแพ้ง่ายได้หรือไม่?',
                        a: 'ได้ เนื่องจากใช้วัตถุดิบจากธรรมชาติทั้งหมด และผ่านการทดสอบความเข้ากันได้ทางชีวภาพ (ISO 10993) อย่างเข้มงวด ผลิตภัณฑ์เวชสำอางของเราออกแบบให้ hypoallergenic และไม่ผสมน้ำหอม จึงปลอดภัยต่อผิวแพ้ง่าย',
                    },
                    {
                        q: 'ฟิล์มหรือแผ่นแปะอยู่ได้นานแค่ไหนเมื่อใช้?',
                        a: 'ระยะเวลาการใช้งานสามารถปรับได้:\n\n- ฟิล์มปิดแผล → ใช้ได้สูงสุดถึง 7 วัน ขึ้นกับสภาพแผล\n- แผ่นแปะช่องปาก → อยู่ได้หลายชั่วโมง\n- มาสก์บำรุงผิว → ใช้ในระยะสั้น 20–30 นาที',
                    },
                    {
                        q: 'สามารถบรรจุตัวยา (API) ได้หรือไม่?',
                        a: 'ได้ แพลตฟอร์มนี้เป็นตัวกลางที่ยอดเยี่ยมสำหรับ การถ่ายเทตัวยาแบบควบคุม สามารถผสม API ได้ตั้งแต่โมเลกุลขนาดเล็กไปจนถึงเปปไทด์และ growth factors พร้อมปรับโปรไฟล์การปลดปล่อยให้ตรงตามการรักษาเฉพาะด้าน',
                    },
                ],
            },
            {
                title: 'ผลิตภัณฑ์และความร่วมมือ',
                faqs: [
                    {
                        q: 'ผลิตภัณฑ์ทางการแพทย์เป็นแบบปราศจากเชื้อหรือไม่?',
                        a: 'ใช่ ผลิตภัณฑ์สำหรับการแพทย์ เช่น ฟิล์มปิดแผลและฟิล์มหลังหัตถการ ผ่านการฆ่าเชื้อด้วย gamma irradiation ตามมาตรฐาน SAL 10⁻⁶',
                    },
                    {
                        q: 'ผลิตภัณฑ์ผลิตที่ไหน?',
                        a: 'ผลิตในโรงงานที่ได้รับมาตรฐาน ISO 13485 สำหรับการผลิตเครื่องมือแพทย์ พร้อมระบบควบคุมคุณภาพและการตรวจสอบย้อนกลับที่เข้มงวด',
                    },
                    {
                        q: 'สามารถขอรับตัวอย่างผลิตภัณฑ์ได้หรือไม่?',
                        a: 'ได้ เรามีการจัดส่งตัวอย่างให้แก่พันธมิตรทางคลินิกและเชิงพาณิชย์ที่ผ่านการคัดเลือก โดยสามารถใช้ปุ่ม “Request Samples” หรือแบบฟอร์มติดต่อเพื่อยื่นคำขอ',
                    },
                    {
                        q: 'มาสก์บำรุงผิวใช้ซ้ำได้หรือไม่?',
                        a: 'ไม่ได้ มาสก์ถูกออกแบบมาให้ใช้เพียงครั้งเดียว เพื่อให้มั่นใจว่าผู้ใช้จะได้รับสารออกฤทธิ์ที่สดใหม่และเข้มข้นทุกครั้ง',
                    },
                    {
                        q: 'แผ่นแปะช่องปากติดอยู่ได้อย่างไร?',
                        a: 'แผ่นแปะถูกออกแบบด้วย pectin ชนิดพิเศษ ที่จะยึดเกาะได้ดีเมื่อสัมผัสกับน้ำลายในช่องปาก ทำให้สามารถติดแน่นแต่ยังคงอ่อนโยน และจะค่อยๆ ละลายภายในไม่กี่ชั่วโมง',
                    },
                    {
                        q: 'เทคโนโลยีนี้สามารถให้สิทธิ์การใช้ (licensing) หรือทำ white-label ได้หรือไม่?',
                        a: 'ได้ เรากำลังมองหาพันธมิตรเชิงพาณิชย์สำหรับ การให้สิทธิ์การใช้ (licensing), การพัฒนาร่วม (co-development), และการทำแบรนด์ส่วนตัว (private label) หากสนใจสามารถติดต่อทีมพัฒนาธุรกิจของเราได้โดยตรง',
                    },
                ],
            },
        ],
    },
    productDetailPageContent: {
        backButton: '← กลับไปยังหน้าผลิตภัณฑ์ทั้งหมด',
        titles: {
            whatItIs: 'คืออะไร',
            howItWorks: 'กลไกการทำงาน',
            specs: 'ข้อกำหนดทางคลินิก',
            indications: 'ข้อบ่งใช้',
            howToUse: 'วิธีใช้',
            options: 'ทางเลือกที่มี',
            safety: 'ความปลอดภัยและความเข้ากันได้ทางชีวภาพ',
            faq: 'คำถามที่พบบ่อย',
            downloads: 'ดาวน์โหลด'
        }
    },
    featureCard: {
        readMore: 'อ่านเพิ่มเติม',
        readLess: 'อ่านน้อยลง',
    },
    heroSection: {
        title: 'กลุ่มผลิตภัณฑ์ทางการแพทย์และสกินแคร์ — Alora × Pectin Synergy',
        subtitle: 'ฟิล์มชีวภาพจากว่านหางจระเข้ผสานกับวิทยาการนำส่งด้วยเพกทิน เพื่อการรักษาที่เร็วขึ้น การให้ความชุ่มชื้นที่ล้ำลึกกว่า และการปลดปล่อยตัวยาแบบควบคุม',
        exploreButton: 'สำรวจผลิตภัณฑ์',
        scienceButton: 'ดูข้อมูลวิทยาศาสตร์',
    },
    innovationSection: {
        title: 'อนาคตคือธรรมชาติ',
        subtitle: 'เทคโนโลยีเยื่อชีวภาพจากว่านหางจระเข้ที่ก้าวล้ำของเราใช้พลังของธรรมชาติเพื่อสร้างโซลูชันที่มีทั้งประสิทธิภาพและเป็นมิตรต่อโลก',
    },
    introParagraph: {
        text: 'Alora ผสานเยื่อชีวภาพจากว่านหางจระเข้เข้ากับการนำส่งขั้นสูงด้วยเพกทิน เพื่อสร้างฟิล์มปิดแผลเกรดคลินิก แผ่นแปะเยื่อเมือก และมาส์กบำรุงผิวสุดหรู เมทริกซ์พอลิเมอร์คู่ของเราให้ความชุ่มชื้น ปลอบประโลม และควบคุมการปลดปล่อยสารได้นานถึง 72 ชั่วโมง ช่วยเร่งการฟื้นตัวพร้อมให้ความรู้สึกเบาสบายและสะอาดบนผิว เข้ากันได้ทางชีวภาพ ย่อยสลายได้ และออกแบบมาเพื่อผลลัพธ์ที่มองเห็นได้',
    },
    persuasionSection: {
        clinical: {
            title: 'ออกแบบมาเพื่อการรักษาที่เร็วและปลอดภัยยิ่งขึ้น',
            text: 'ว่านหางจระเข้ที่อุดมด้วยอะซีแมนแนนสนับสนุนการทำงานของไฟโบรบลาสต์และสร้างสภาวะแวดล้อมขนาดเล็กที่ชุ่มชื้น เพกทินที่เชื่อมขวางด้วยแคลเซียมสร้างโครงสร้างที่มั่นคงซึ่งช่วยลด TEWL และเพิ่มความสบาย ผลลัพธ์: การสร้างเยื่อบุผิวใหม่ที่เร็วขึ้น การระคายเคืองน้อยลง และการใช้งานที่เชื่อถือได้ทั้งในบริเวณแผล ช่องปาก และดวงตา',
            cta: 'ดูกรณีศึกษาทางคลินิก →',
        },
        beauty: {
            title: 'ความงามหรูหรา ด้วยเหตุผลทางคลินิก',
            text: 'มาส์กและเจล-ฟิล์มเพื่อความงามของ Alora มอบความชุ่มชื้นล้ำลึกและการแพร่กระจายของวิตามินซี, HA และเปปไทด์อย่างค่อยเป็นค่อยไป เพื่อความเปล่งปลั่ง, ความยืดหยุ่น และการปลอบประโลมหลังทำหัตถการ เมทริกซ์จากพืชปราศจากน้ำหอม เป็นมิตรต่อผิวแพ้ง่าย และละลายหมดจดโดยไม่ทิ้งสารตกค้าง',
            cta: 'สำรวจกลุ่มผลิตภัณฑ์สกินแคร์ →',
        }
    },
    productsSection: {
        trustQuote: '“พอลิแซ็กคาไรด์จากว่านหางจระเข้ (อะซีแมนแนน) + เพกทินชนิดเมทอกซิลสูง/ต่ำ = เข้ากันได้ทางชีวภาพ ออกฤทธิ์ทางชีวภาพ และควบคุมการปลดปล่อยได้”',
        ctaTitle: 'ขอเอกสารทางคลินิกและตัวอย่าง',
        ctaButton: 'ติดต่อฝ่ายการแพทย์',
    },
    sustainabilitySection: {
        title: 'ความมุ่งมั่นต่อโลกของเรา',
        text: 'ความยั่งยืนไม่ใช่สิ่งที่คิดทีหลัง แต่เป็นรากฐานของเรา ตั้งแต่ฟาร์มว่านหางจระเข้ที่จัดการอย่างรับผิดชอบไปจนถึงกระบวนการผลิตที่ไม่มีของเสีย ทุกขั้นตอนถูกออกแบบมาเพื่อบำรุงและปกป้องโลกของเรา ผลิตภัณฑ์ของเราปิดวงจรโดยกลับคืนสู่โลกอย่างไม่เป็นอันตรายเช่นเดียวกับที่มาจากโลก',
        cta: 'เรียนรู้เกี่ยวกับกระบวนการของเรา',
    },
    supportBand: {
        title: 'ขอเอกสารข้อมูลและตัวอย่าง',
        cta: 'ติดต่อฝ่ายการแพทย์',
    },
    seo: {
        landing: {
            title: 'Alora Biofilm – พอร์ตโฟลิโอด้านการรักษาและการดูแลผิว',
            description: 'Alora Biofilm ผสานฟิล์มว่านหางจระเข้ชีวภาพเข้ากับเพกทิน เพื่อการรักษาบาดแผล การดูแลผิว และการค่อยๆถ่ายเทตัวยาให้ซึมผ่านช้าๆ อย่างก้าวหน้า',
            keywords: ['อลอร่าไบโอฟิล์ม', 'ฟิล์มว่านหางจระเข้', 'เพคติน', 'การดูแลแผล', 'สกินแคร์', 'ควบคุมการปลดปล่อย', 'มิวโคแอดฮีซีฟ', 'ไฮโดรเจล'],
            hreflang: { en: '/', th: '/th' }
        },
        science: {
            title: 'วิทยาศาสตร์แห่งการเสริมพลัง | Alora Biofilm',
            description: 'สำรวจวิทยาศาสตร์วัสดุของแพลตฟอร์มไบโอพอลิเมอร์คู่ ที่ผสานความมีฤทธิ์ทางชีวภาพของว่านหางจระเข้เข้ากับการควบคุมโครงสร้างของเพกทิน เพื่อประสิทธิภาพที่เหนือกว่า',
            keywords: ['วิทยาศาสตร์ไบโอพอลิเมอร์', 'อะซีแมนแนน', 'เพคตินไฮโดรเจล', 'วัสดุศาสตร์', 'กลไกการนำส่งยา', 'การสมานแผล'],
            hreflang: { en: '/science', th: '/th/science' }
        },
        innovation: {
            title: 'แพลตฟอร์มนวัตกรรม | Alora Biofilm',
            description: 'ค้นพบแพลตฟอร์มนวัตกรรม Alora เทคโนโลยีไบโอพอลิเมอร์อเนกประสงค์สำหรับสร้างโซลูชันที่ปรับแต่งได้ในการดูแลแผล การนำส่งยา และเครื่องสำาง',
            keywords: ['แพลตฟอร์มไบโอพอลิเมอร์', 'นวัตกรรมเครื่องมือแพทย์', 'เทคโนโลยีเครื่องสำาง', 'สูตรเฉพาะ', 'ระบบนำส่งยา'],
            hreflang: { en: '/innovation', th: '/th/innovation' }
        },
        faq: {
            title: 'คำถามที่พบบ่อย | Alora Biofilm',
            description: 'ค้นหาคำตอบสำหรับคำถามที่พบบ่อยเกี่ยวกับเทคโนโลยีไบโอฟิล์มของ Alora ผลิตภัณฑ์ การใช้งาน และโอกาสในการเป็นพันธมิตร',
            keywords: ['คำถามที่พบบ่อย Alora', 'เทคโนโลยีไบโอฟิล์ม', 'การดูแลแผล', 'การใช้สกินแคร์', 'ไบโอพอลิเมอร์'],
            hreflang: { en: '/faq', th: '/th/faq' }
        }
    },
    contactModal: {
        title: 'ติดต่อเรา',
        subtitle: 'หากมีคำถาม เรายินดีรับฟังและตอบกลับ',
        nameLabel: 'ชื่อ',
        emailLabel: 'อีเมล',
        messageLabel: 'ข้อความ',
        submitButton: 'ส่งข้อความ',
        submittingButton: 'กำลังส่ง...',
        successTitle: 'ขอบคุณ!',
        successMessage: 'ข้อความถูกส่งเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด',
        closeAlt: 'ปิดแบบฟอร์ม',
        errors: {
            nameRequired: 'กรุณากรอกชื่อ',
            emailRequired: 'กรุณากรอกอีเมล',
            emailInvalid: 'กรุณากรอกที่อยู่อีเมลที่ถูกต้อง',
            messageRequired: 'กรุณากรอกข้อความ',
        },
    },
    cookieConsent: {
        message: 'เราใช้คุกกี้เพื่อปรับปรุงประสบการณ์ของคุณ คุณสามารถยอมรับหรือปฏิเสธได้',
        accept: 'ยอมรับ',
        decline: 'ปฏิเสธ',
        learnMore: 'เรียนรู้เพิ่มเติม'
    }
};
import React from 'react';
import { LinkedInIcon, TwitterIcon } from '../constants';
import { useLanguage } from '../hooks/useLanguage';

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657l-5.657 5.657a1 1 0 01-1.414 0l-5.657-5.657A8 8 0 1118 8a8 8 0 01-1.343 4.343" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
);

const EmailIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
);

interface FooterProps {
    setPage: (page: string) => void;
    openContactModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ setPage, openContactModal }) => {
    const { t } = useLanguage();

    const handleGoHome = () => {
        setPage('landing');
        window.scrollTo(0, 0);
    }
    
    const handleNav = (page: string) => {
        setPage(page);
        window.scrollTo(0, 0);
    }

    return (
        <footer className="bg-gray-800/80 text-white/80">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-start-2 lg:col-span-3 px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <div
                                className="cursor-pointer mb-4"
                                onClick={handleGoHome}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { handleGoHome(); } }}
                                aria-label="Go to homepage"
                            >
                                <img
                                    src="https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-logo-header.webp"
                                    alt={t.imageAlts.aloraLogo}
                                    className="h-10"
                                />
                            </div>
                            <p className="text-sm text-gray-400">{t.footer.about.text}</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.explore}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#products" onClick={() => setPage('landing')} className="text-gray-400 hover:text-white transition-colors" aria-label={`Navigate to ${t.navigation.products} section`}>{t.navigation.products}</a></li>
                                <li><button onClick={() => handleNav('science')} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`Navigate to ${t.navigation.science} page`}>{t.navigation.science}</button></li>
                                <li><button onClick={() => handleNav('innovation')} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`Navigate to ${t.navigation.innovation} page`}>{t.navigation.innovation}</button></li>
                                <li><button onClick={() => handleNav('faq')} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`Navigate to ${t.navigation.faq} page`}>{t.navigation.faq}</button></li>
                                 <li><button onClick={openContactModal} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`Open ${t.navigation.contact} form`}>{t.navigation.contact}</button></li>
                            </ul>
                        </div>
                        
                        {/* Legal */}
                         <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.legal}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><button onClick={() => handleNav('privacy')} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`View our ${t.footer.privacy}`}>{t.footer.privacy}</button></li>
                                <li><button onClick={() => handleNav('terms')} className="text-gray-400 hover:text-white transition-colors text-left" aria-label={`View our ${t.footer.terms}`}>{t.footer.terms}</button></li>
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.connect}</h4>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
                                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                            </div>
                            <div className="space-y-3 text-sm text-gray-400">
                                <div className="flex items-start">
                                    <LocationIcon />
                                    <p className="ml-2">{t.footer.address}</p>
                                </div>
                                <div className="flex items-start">
                                    <PhoneIcon />
                                    <a href={`tel:${t.footer.tel.replace(/\(0\)| /g, '')}`} className="ml-2 hover:text-white transition-colors">{t.footer.tel}</a>
                                </div>
                                <div className="flex items-start">
                                    <EmailIcon />
                                    <a href={`mailto:${t.footer.email}`} className="ml-2 hover:text-white transition-colors">{t.footer.email}</a>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="mt-12 pt-8 border-t border-gray-700 text-center text-sm text-gray-500">
                        <p>{t.footer.copyright}</p>
                        <p className="mt-1">{t.footer.disclaimer}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
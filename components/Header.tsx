import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
    setPage: (page: string) => void;
    setSelectedProduct: (product: string | null) => void;
}

const LanguageSwitcher: React.FC<{className?: string}> = ({className}) => {
    const { language, setLanguage } = useLanguage();
    
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'en' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
            >
                EN
            </button>
            <span className="text-gray-300">|</span>
            <button 
                onClick={() => setLanguage('th')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'th' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
            >
                TH
            </button>
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ setPage, setSelectedProduct }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const handleNav = (page: string) => {
        setSelectedProduct(null);
        setPage(page);
        setIsMenuOpen(false);
        if (page === 'landing') {
            window.scrollTo(0, 0);
        }
    };
    
    const handleLinkNav = (page: string, anchor: string) => {
        setSelectedProduct(null);
        setPage(page);
        setIsMenuOpen(false);
        // We need a slight delay for the page to render before scrolling to the anchor
        setTimeout(() => {
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            } else if (page === 'landing') {
                 window.scrollTo(0, 0);
            }
        }, 100);
    }

    const MobileMenu = () => (
        <div className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="container mx-auto px-6 py-4 h-full flex flex-col">
                <div className="flex justify-between items-center pt-16">
                     <LanguageSwitcher />
                </div>
                <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-center">
                    <a href="#products" onClick={() => handleLinkNav('landing', '#products')} className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.products}</a>
                    <button onClick={() => handleNav('science')} className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.science}</button>
                    <button onClick={() => handleNav('innovation')} className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.innovation}</button>
                    <a href="#contact" onClick={() => handleLinkNav('landing', '#contact')} className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.contact}</a>
                    <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm text-lg mt-8">
                        {t.navigation.requestSamples}
                    </a>
                </nav>
            </div>
        </div>
    );
    
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
                <div className="container mx-auto px-6 py-4">
                    <div className="flex justify-between items-center">
                        <div 
                            className="cursor-pointer"
                            onClick={() => handleNav('landing')}
                        >
                            <img 
                                src="https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-logo.webp" 
                                alt={t.imageAlts.aloraLogo} 
                                className="h-8"
                            />
                        </div>

                        {/* Desktop Nav */}
                        <nav className="hidden md:flex items-center space-x-8">
                            <a href="#products" onClick={() => handleLinkNav('landing', '#products')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.products}</a>
                            <button onClick={() => handleNav('science')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.science}</button>
                            <button onClick={() => handleNav('innovation')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.innovation}</button>
                            <a href="#contact" onClick={() => handleLinkNav('landing', '#contact')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.contact}</a>
                        </nav>
                        <div className="hidden md:flex items-center space-x-4">
                            <LanguageSwitcher />
                             <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                                {t.navigation.requestSamples}
                             </a>
                        </div>
                        
                        {/* Mobile Menu Button */}
                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative w-8 h-8 text-gray-700 focus:outline-none">
                                <span className="sr-only">Open main menu</span>
                                <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'rotate-45' : '-translate-y-1.5'}`}></span>
                                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                                    <span aria-hidden="true" className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${isMenuOpen ? '-rotate-45' : 'translate-y-1.5'}`}></span>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
            <MobileMenu />
        </>
    );
};

export default Header;
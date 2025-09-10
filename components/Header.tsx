import React, { useState, useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
    setPage: (page: string) => void;
    setSelectedProduct: (product: string | null) => void;
    openContactModal: () => void;
    currentPage: string;
}

const LanguageSwitcher: React.FC<{className?: string}> = ({className}) => {
    const { language, setLanguage } = useLanguage();
    
    return (
        <div className={`flex items-center space-x-2 ${className}`}>
            <button 
                onClick={() => setLanguage('en')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'en' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
                aria-label="Switch to English language"
                aria-pressed={language === 'en'}
            >
                EN
            </button>
            <span className="text-gray-300" aria-hidden="true">|</span>
            <button 
                onClick={() => setLanguage('th')}
                className={`px-2 py-1 text-sm font-semibold rounded-md transition-colors ${language === 'th' ? 'text-emerald-600' : 'text-gray-500 hover:text-emerald-600'}`}
                aria-label="Switch to Thai language"
                aria-pressed={language === 'th'}
            >
                TH
            </button>
        </div>
    );
};

const Header: React.FC<HeaderProps> = ({ setPage, setSelectedProduct, openContactModal, currentPage }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { t } = useLanguage();
    const mobileMenuRef = useRef<HTMLDivElement>(null);

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

    // Focus trapping for mobile menu
    useEffect(() => {
        if (!isMenuOpen) return;

        const menuElement = mobileMenuRef.current;
        if (!menuElement) return;

        const focusableElements = menuElement.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        const handleTabKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift+Tab
                    if (document.activeElement === firstElement) {
                        lastElement.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastElement) {
                        firstElement.focus();
                        e.preventDefault();
                    }
                }
            }
        };
        
        const firstFocusableElement = menuElement.querySelector('button'); // First button in the language switcher
        firstFocusableElement?.focus();
        menuElement.addEventListener('keydown', handleTabKeyPress);

        return () => {
            menuElement.removeEventListener('keydown', handleTabKeyPress);
        };

    }, [isMenuOpen]);

    const handleNav = (page: string) => {
        setSelectedProduct(null);
        setPage(page);
        setIsMenuOpen(false);
        if (page === 'landing') {
            window.scrollTo(0, 0);
        }
    };
    
    const handleAnchorLink = (anchor: string) => {
        handleNav('landing');
        setTimeout(() => { // ensure landing page is rendered
            const element = document.querySelector(anchor);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }

    const handleContactClick = () => {
        setIsMenuOpen(false);
        openContactModal();
    };

    const getNavLinkClass = (page: string, isMobile: boolean = false): string => {
        const active = currentPage === page;
        const mobileClass = isMobile ? 'text-2xl ' : '';
        return `${mobileClass}font-semibold transition-colors ${active ? 'text-emerald-600' : 'text-gray-700 hover:text-emerald-600'}`;
    };

    const MobileMenu = () => (
        <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Main menu"
            className={`fixed inset-0 z-40 bg-white transition-opacity duration-300 ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
            <div className="container mx-auto px-6 py-4 h-full flex flex-col">
                <div className="flex justify-between items-center pt-16">
                     <LanguageSwitcher />
                </div>
                <nav className="flex flex-col items-center justify-center flex-grow space-y-8 text-center" aria-label="Mobile main navigation">
                    <button onClick={() => handleAnchorLink('#products')} className={getNavLinkClass('landing', true)} aria-label={`Navigate to ${t.navigation.products} section`}>{t.navigation.products}</button>
                    <button onClick={() => handleNav('science')} className={getNavLinkClass('science', true)} aria-label={`Navigate to ${t.navigation.science} page`}>{t.navigation.science}</button>
                    <button onClick={() => handleNav('innovation')} className={getNavLinkClass('innovation', true)} aria-label={`Navigate to ${t.navigation.innovation} page`}>{t.navigation.innovation}</button>
                    <button onClick={() => handleNav('faq')} className={getNavLinkClass('faq', true)} aria-label={`Navigate to ${t.navigation.faq} page`}>{t.navigation.faq}</button>
                    <button onClick={handleContactClick} className="text-2xl text-gray-700 hover:text-emerald-600 transition-colors font-semibold" aria-label={`Open ${t.navigation.contact} form`}>{t.navigation.contact}</button>
                    <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-8 py-3 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-lg transform hover:-translate-y-1 text-lg mt-8" aria-label={t.navigation.requestSamples}>
                        {t.navigation.requestSamples}
                    </a>
                </nav>
            </div>
        </div>
    );
    
    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-start-2 lg:col-span-3 px-6 py-4">
                        <div className="flex justify-between items-center">
                            <div 
                                className="cursor-pointer"
                                onClick={() => handleNav('landing')}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && handleNav('landing')}
                                aria-label="Go to homepage"
                            >
                                <img 
                                    src="https://cdn.jsdelivr.net/gh/devoncasa/alora-assets@main/alora-logo-header.webp" 
                                    alt={t.imageAlts.aloraLogo} 
                                    className="h-8"
                                    style={{ filter: 'brightness(0.95) saturate(1.15) contrast(1.1)' }}
                                />
                            </div>

                            {/* Desktop Nav */}
                            <nav className="hidden md:flex items-center space-x-8" aria-label="Main navigation">
                                <button onClick={() => handleAnchorLink('#products')} className={getNavLinkClass('landing')} aria-label={`Navigate to ${t.navigation.products} section`}>{t.navigation.products}</button>
                                <button onClick={() => handleNav('science')} className={getNavLinkClass('science')} aria-label={`Navigate to ${t.navigation.science} page`}>{t.navigation.science}</button>
                                <button onClick={() => handleNav('innovation')} className={getNavLinkClass('innovation')} aria-label={`Navigate to ${t.navigation.innovation} page`}>{t.navigation.innovation}</button>
                                <button onClick={() => handleNav('faq')} className={getNavLinkClass('faq')} aria-label={`Navigate to ${t.navigation.faq} page`}>{t.navigation.faq}</button>
                                <button onClick={handleContactClick} className="text-gray-700 hover:text-emerald-600 transition-colors font-semibold" aria-label={`Open ${t.navigation.contact} form`}>{t.navigation.contact}</button>
                            </nav>
                            <div className="hidden md:flex items-center space-x-4">
                                <LanguageSwitcher />
                                 <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md transform hover:-translate-y-1" aria-label={t.navigation.requestSamples}>
                                    {t.navigation.requestSamples}
                                 </a>
                            </div>
                            
                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="z-50 relative w-8 h-8 text-gray-700" aria-controls="mobile-menu" aria-expanded={isMenuOpen}>
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
                </div>
            </header>
            <MobileMenu />
        </>
    );
};

export default Header;
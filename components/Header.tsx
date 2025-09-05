import React, { useState, useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';

interface HeaderProps {
    setPage: (page: string) => void;
    setSelectedProduct: (product: string | null) => void;
}

const LanguageSwitcher: React.FC = () => {
    const { language, setLanguage } = useLanguage();
    
    return (
        <div className="flex items-center space-x-2">
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
    const { t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNav = (page: string) => {
        setSelectedProduct(null);
        setPage(page);
        if (page === 'landing') {
            window.scrollTo(0, 0);
        }
    };
    
    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
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
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#products" onClick={() => handleNav('landing')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.products}</a>
                        <button onClick={() => handleNav('science')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.science}</button>
                        <button onClick={() => handleNav('innovation')} className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.innovation}</button>
                        <a href="#contact" className="text-gray-700 hover:text-emerald-600 transition-colors font-medium">{t.navigation.contact}</a>
                    </nav>
                    <div className="hidden md:flex items-center space-x-4">
                        <LanguageSwitcher />
                         <a href="mailto:medical.affairs@alora.bio" className="bg-emerald-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-emerald-700 transition-all shadow-sm hover:shadow-md">
                            {t.navigation.requestSamples}
                         </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
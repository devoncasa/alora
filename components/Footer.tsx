import React from 'react';
import { LinkedInIcon, TwitterIcon } from '../constants';
import { useLanguage } from '../hooks/useLanguage';

interface FooterProps {
    setPage: (page: string) => void;
    openContactModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ setPage, openContactModal }) => {
    const { t } = useLanguage();

    return (
        <footer className="bg-gray-800/80 text-white/80">
            <div className="grid grid-cols-1 lg:grid-cols-5">
                <div className="lg:col-start-2 lg:col-span-3 px-6 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* About Section */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.about.title}</h4>
                            <p className="text-sm text-gray-400">{t.footer.about.text}</p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.explore}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#products" onClick={() => setPage('landing')} className="text-gray-400 hover:text-white transition-colors">{t.navigation.products}</a></li>
                                <li><button onClick={() => setPage('science')} className="text-gray-400 hover:text-white transition-colors text-left">{t.navigation.science}</button></li>
                                <li><button onClick={() => setPage('innovation')} className="text-gray-400 hover:text-white transition-colors text-left">{t.navigation.innovation}</button></li>
                                <li><button onClick={() => setPage('faq')} className="text-gray-400 hover:text-white transition-colors text-left">{t.navigation.faq}</button></li>
                                 <li><button onClick={openContactModal} className="text-gray-400 hover:text-white transition-colors text-left">{t.navigation.contact}</button></li>
                            </ul>
                        </div>
                        
                        {/* Legal */}
                         <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.legal}</h4>
                            <ul className="space-y-2 text-sm">
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.privacy}</a></li>
                                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">{t.footer.terms}</a></li>
                            </ul>
                        </div>

                        {/* Social & Contact */}
                        <div>
                            <h4 className="font-bold text-lg mb-4 text-white">{t.footer.connect}</h4>
                            <div className="flex space-x-4 mb-4">
                                <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition-colors"><LinkedInIcon /></a>
                                <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
                            </div>
                             <a href="mailto:medical.affairs@alora.bio" className="text-sm text-gray-400 hover:text-white">medical.affairs@alora.bio</a>
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
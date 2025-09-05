import React, { createContext, useState, useEffect, useMemo } from 'react';
import { translations } from '../translations';
import type { LanguageContextType, AloraDataType } from '../types';

export const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<'en' | 'th'>(() => {
        const storedLang = localStorage.getItem('alora-lang');
        return (storedLang === 'th' || storedLang === 'en') ? storedLang : 'en';
    });

    useEffect(() => {
        localStorage.setItem('alora-lang', language);
        document.documentElement.lang = language;
    }, [language]);

    const t = useMemo(() => translations[language], [language]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

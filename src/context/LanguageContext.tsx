import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, getProducts, getBlogPosts } from '../translations';
import { Language } from '../types';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: any;
  dir: 'ltr' | 'rtl';
  products: any[];
  blogPosts: any[];
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === 'en' ? 'ltr' : 'rtl';
  }, [language]);

  const t = translations[language];
  const dir = language === 'en' ? 'ltr' : 'rtl';
  const products = getProducts(language);
  const blogPosts = getBlogPosts(language);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir, products, blogPosts }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
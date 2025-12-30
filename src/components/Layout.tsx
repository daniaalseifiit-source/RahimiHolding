import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe, ChevronRight, Phone, Mail, MapPin, Linkedin, MessageCircle, Send, ChevronLeft, Sun, Moon } from 'lucide-react';
import { COMPANY_INFO, SITE_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t, dir } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change and set default page meta
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsLangMenuOpen(false);
    window.scrollTo(0, 0);

    // set default title/description for pages that don't set their own meta
    import('../utils/seo').then(({ setMeta }) => {
      setMeta({
        title: `Rahimi Holding | Energy, Trading & Services`,
        description: `Rahimi Investment & Business S.P.C. — Trading, services, and consulting for oil, gas, and petrochemicals across GCC & international markets.`,
        image: SITE_IMAGES.heroSlider1,
        url: typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://rahimiholding.com/' ,
        locales: [
          { hreflang: 'en', href: (typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://rahimiholding.com/') },
          { hreflang: 'fa', href: `${typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://rahimiholding.com/'}?lang=fa` },
          { hreflang: 'ar', href: `${typeof window !== 'undefined' ? window.location.href.split('?')[0] : 'https://rahimiholding.com/'}?lang=ar` }
        ]
      });
    });
  }, [location]);

  const navLinks = [
    { label: t.nav.home, path: '/' },
    { label: t.nav.about, path: '/about' },
    { label: t.nav.products, path: '/products' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.contact, path: '/contact' },
  ];

  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <div className={`flex flex-col min-h-screen font-sans text-rahimi-darkGrey dark:text-gray-200 dark:bg-slate-900 transition-colors duration-500 ${dir === 'rtl' ? 'text-right' : 'text-left'}`} dir={dir}>
      
      {/* Sticky Header Wrapper */}
      <header className={`fixed top-0 left-0 right-0 z-50 flex flex-col w-full transition-all duration-500 ${isScrolled ? 'shadow-lg backdrop-blur-md bg-white/90 dark:bg-slate-900/90' : 'bg-transparent'}`}>
        
        {/* Top Bar - Collapses on Scroll */}
        <div className={`bg-rahimi-blue text-white text-xs px-6 hidden md:flex justify-between items-center transition-all duration-500 ease-in-out overflow-hidden border-b border-white/10 ${
          isScrolled ? 'max-h-0 py-0 opacity-0' : 'max-h-12 py-2 opacity-100'
        }`}>
          <div className="flex space-x-6 rtl:space-x-reverse">
            <a href={`tel:${COMPANY_INFO.phone[0].replace(/-/g, '')}`} className="flex items-center gap-2 hover:text-rahimi-red transition-colors">
              <Phone size={12} /> {COMPANY_INFO.phone[0]}
            </a>
            <a href={`mailto:${COMPANY_INFO.email[0]}`} className="flex items-center gap-2 hover:text-rahimi-red transition-colors">
              <Mail size={12} /> {COMPANY_INFO.email[0]}
            </a>
          </div>
          <div className="flex space-x-4 rtl:space-x-reverse uppercase tracking-widest opacity-80 text-[10px]">
            <span>Oman</span>
            <span>|</span>
            <span>International</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className={`w-full transition-all duration-300 ${isScrolled ? 'py-3' : 'py-6'}`}>
          <div className="container mx-auto px-6 flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex flex-col group items-start">
               <img 
                 src={SITE_IMAGES.logo} 
                 alt="Rahimi Holding" 
                 className={`h-12 w-auto object-contain transition-all duration-300 ${isScrolled ? 'brightness-100' : 'brightness-0 invert'}`}
               />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-bold uppercase tracking-widest hover:text-rahimi-red transition-colors duration-300 relative group ${
                    isScrolled ? 'text-rahimi-blue dark:text-gray-200' : 'text-white'
                  }`}
                >
                  {link.label}
                  <span className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-rahimi-red transition-all duration-300 group-hover:w-full ${location.pathname === link.path ? 'w-full' : ''}`}></span>
                </Link>
              ))}
              
              <div className="flex items-center gap-3 border-l pl-6 rtl:border-l-0 rtl:border-r rtl:pr-6 border-gray-300/30">
                {/* Theme Toggle */}
                <button
                  onClick={toggleTheme}
                  className={`p-2 rounded-full transition-colors ${
                    isScrolled ? 'text-rahimi-blue dark:text-white hover:bg-gray-100 dark:hover:bg-slate-800' : 'text-white hover:bg-white/10'
                  }`}
                  aria-label="Toggle Theme"
                >
                  {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                </button>

                {/* Language Switcher */}
                <div className="relative">
                  <button 
                    onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border border-opacity-30 hover:border-opacity-100 transition-all duration-300 font-bold text-xs uppercase tracking-wider ${
                      isScrolled 
                        ? 'border-rahimi-blue text-rahimi-blue dark:text-white dark:border-white hover:bg-rahimi-blue hover:text-white dark:hover:bg-white dark:hover:text-rahimi-blue' 
                        : 'border-white text-white hover:bg-white hover:text-rahimi-blue'
                    }`}
                  >
                    <Globe size={14} /> {language}
                  </button>
                  
                  <AnimatePresence>
                    {isLangMenuOpen && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute top-full mt-3 right-0 rtl:right-auto rtl:left-0 bg-white dark:bg-slate-800 rounded-xl shadow-xl py-2 w-32 overflow-hidden text-rahimi-blue dark:text-white z-50 border border-gray-100 dark:border-slate-700"
                      >
                        <button onClick={() => setLanguage('en')} className="block w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 font-bold text-xs uppercase">English</button>
                        <button onClick={() => setLanguage('fa')} className="block w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 font-bold text-xs uppercase font-vazir">فارسی</button>
                        <button onClick={() => setLanguage('ar')} className="block w-full text-left rtl:text-right px-4 py-2 hover:bg-gray-50 dark:hover:bg-slate-700 font-bold text-xs uppercase font-vazir">العربية</button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* Mobile Toggle */}
            <button
              className="md:hidden z-50 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X size={28} className="text-rahimi-blue dark:text-white" />
              ) : (
                <Menu size={28} className={isScrolled ? 'text-rahimi-blue dark:text-white' : 'text-white'} />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col space-y-8 text-center w-full px-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-3xl font-serif font-bold text-rahimi-blue dark:text-white hover:text-rahimi-red transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              
              <div className="h-px bg-gray-200 dark:bg-slate-700 w-full max-w-xs mx-auto my-8"></div>

              <div className="flex items-center justify-center gap-6">
                 <button onClick={toggleTheme} className="p-4 bg-gray-100 dark:bg-slate-800 rounded-full text-rahimi-blue dark:text-white shadow-sm">
                    {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
                 </button>
              </div>

              <div className="flex justify-center gap-4 mt-4">
                 <button onClick={() => setLanguage('en')} className={`px-6 py-2 rounded-full border font-bold text-sm ${language === 'en' ? 'bg-rahimi-blue text-white' : 'border-rahimi-blue dark:border-white text-rahimi-blue dark:text-white'}`}>EN</button>
                 <button onClick={() => setLanguage('fa')} className={`px-6 py-2 rounded-full border font-bold text-sm ${language === 'fa' ? 'bg-rahimi-blue text-white' : 'border-rahimi-blue dark:border-white text-rahimi-blue dark:text-white'}`}>FA</button>
                 <button onClick={() => setLanguage('ar')} className={`px-6 py-2 rounded-full border font-bold text-sm ${language === 'ar' ? 'bg-rahimi-blue text-white' : 'border-rahimi-blue dark:border-white text-rahimi-blue dark:text-white'}`}>AR</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="flex-grow bg-white dark:bg-slate-900 transition-colors duration-500">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-rahimi-blue text-white pt-24 pb-10 border-t border-white/5 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-rahimi-red/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-2">
              <div className="mb-8">
                <img src={SITE_IMAGES.logo} alt="Rahimi Holding" className="h-20 w-auto brightness-0 invert opacity-90" />
              </div>
              <p className="text-gray-400 max-w-md mb-8 leading-relaxed font-light">
                {t.footer.desc}
              </p>
              <div className="flex space-x-4 rtl:space-x-reverse">
                <a 
                  href="https://www.linkedin.com/company/rahimi-investment-business-spc/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-rahimi-red hover:border-rahimi-red transition-all cursor-pointer shadow-lg hover:shadow-rahimi-red/50 hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                </a>
                <a href="https://wa.me/96891239037" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-rahimi-red hover:border-rahimi-red transition-all cursor-pointer shadow-lg hover:shadow-rahimi-red/50 hover:-translate-y-1">
                  <MessageCircle size={20} />
                </a>
                <a href="https://t.me/Rahimiholdingco" target="_blank" rel="noopener noreferrer" className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center hover:bg-rahimi-red hover:border-rahimi-red transition-all cursor-pointer shadow-lg hover:shadow-rahimi-red/50 hover:-translate-y-1">
                  <Send size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-8 tracking-wider border-b border-rahimi-red inline-block pb-2">{t.footer.links}</h4>
              <ul className="space-y-4 text-gray-400 text-sm font-medium">
                <li><Link to="/about" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-rahimi-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.nav.about}</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-rahimi-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.nav.products}</Link></li>
                <li><Link to="/blog" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-rahimi-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.nav.blog}</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors flex items-center gap-2 group"><span className="w-1.5 h-1.5 bg-rahimi-red rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span> {t.nav.contact}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-serif font-bold mb-8 tracking-wider border-b border-rahimi-red inline-block pb-2">{t.footer.contact}</h4>
              <ul className="space-y-6 text-gray-400 text-sm">
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-rahimi-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Muscat, Oman</p>
                    <p className="mt-1">{COMPANY_INFO.address}</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <MapPin size={14} className="text-rahimi-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">Tehran, Iran</p>
                    <p className="mt-1">Subsidiary Office</p>
                  </div>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Phone size={14} className="text-rahimi-red" />
                  </div>
                  <a href={`tel:${COMPANY_INFO.phone[0].replace(/-/g, '')}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.phone[0]}
                  </a>
                </li>
                <li className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                    <Mail size={14} className="text-rahimi-red" />
                  </div>
                  <a href={`mailto:${COMPANY_INFO.email[0]}`} className="hover:text-white transition-colors">
                    {COMPANY_INFO.email[0]}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 font-medium tracking-wide">
            <p>{t.footer.rights}</p>
            <div className="mt-2 md:mt-0 flex gap-4">
              <Link to="/contact" className="hover:text-white transition-colors">Contact Rahimi Holding</Link>
              <span>•</span>
              <Link to="/terms" className="hover:text-white transition-colors">Privacy Policy | Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';
import { TERMS_POLICIES } from '../termsandpolicie';

const Terms: React.FC = () => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms'>('privacy');

  const content = TERMS_POLICIES[language as keyof typeof TERMS_POLICIES];
  if (!content) return null;

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={headerVariants}
        className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url("${SITE_IMAGES.contactHeader}")` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/95 to-slate-900/90" />
        
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
            {content.title}
          </h1>
          <p className="text-xl text-slate-300">
            {language === 'en'
              ? 'Transparency, Trust, and Protection'
              : language === 'fa'
              ? 'شفافیت، اعتماد و حفاظت'
              : 'الشفافية والثقة والحماية'}
          </p>
        </div>
      </motion.section>

      {/* Tabs Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="bg-white/10 backdrop-blur-md rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
        >
          {/* Tab Buttons */}
          <div className="flex border-b border-white/20">
            <button
              onClick={() => setActiveTab('privacy')}
              className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                activeTab === 'privacy'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {language === 'en'
                ? 'Privacy Policy'
                : language === 'fa'
                ? 'سیاست حریم خصوصی'
                : 'سياسة الخصوصية'}
            </button>
            <button
              onClick={() => setActiveTab('terms')}
              className={`flex-1 px-6 py-4 font-semibold transition-all duration-300 ${
                activeTab === 'terms'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/5 text-slate-300 hover:bg-white/10'
              }`}
            >
              {language === 'en'
                ? 'Terms of Service'
                : language === 'fa'
                ? 'شرایط استفاده'
                : 'شروط الاستخدام'}
            </button>
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="p-8 sm:p-12"
          >
            <div
              className="prose prose-invert max-w-none prose-headings:text-white prose-p:text-slate-300 prose-strong:text-blue-400"
              dangerouslySetInnerHTML={{
                __html: activeTab === 'privacy' ? content.privacy : content.terms
              }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={contentVariants}
          className="bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-blue-500/30 rounded-2xl p-8 sm:p-12 text-center"
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            {language === 'en'
              ? 'Questions or Concerns?'
              : language === 'fa'
              ? 'سوالات یا نگرانی‌ها؟'
              : 'لديك أسئلة أو مخاوف؟'}
          </h3>
          <p className="text-slate-300 mb-6">
            {language === 'en'
              ? 'Contact us directly for any inquiries regarding our policies and practices.'
              : language === 'fa'
              ? 'برای سوالات درباره سیاست‌ها و شیوه‌های ما با ما تماس بگیرید.'
              : 'اتصل بنا مباشرة لأي استفسارات حول سياساتنا وممارساتنا.'}
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            {language === 'en'
              ? 'Contact Rahimi Holding'
              : language === 'fa'
              ? 'تماس با رحیمی هولدینگ'
              : 'اتصل برحيمي هولدينج'}
          </a>
        </motion.div>
      </section>

      {/* Footer Links */}
      <section className="bg-slate-950/50 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8 mt-16">
        <div className="max-w-4xl mx-auto">
          <h4 className="text-white font-bold mb-4">
            {language === 'en'
              ? 'Company Information'
              : language === 'fa'
              ? 'اطلاعات شرکت'
              : 'معلومات الشركة'}
          </h4>
          <p className="text-slate-400 text-sm">
            <strong>{COMPANY_INFO.name}</strong>
            <br />
            {COMPANY_INFO.address}
            <br />
            {language === 'en' ? 'Phone:' : language === 'fa' ? 'تلفن:' : 'الهاتف:'}{' '}
            {COMPANY_INFO.phone[0]}
            <br />
            {language === 'en' ? 'Email:' : language === 'fa' ? 'ایمیل:' : 'البريد الإلكتروني:'}{' '}
            <a href={`mailto:${COMPANY_INFO.email[0]}`} className="text-blue-400 hover:text-blue-300">
              {COMPANY_INFO.email[0]}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Terms;

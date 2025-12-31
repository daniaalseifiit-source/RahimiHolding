import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES } from '../constants';

const About: React.FC = () => {
  const { t } = useLanguage();

  // Helper to highlight company name
  const renderText = (text: string) => {
    const companyName = "RAHIMI INVESTMENT & BUSINESS";
    if (text.includes(companyName)) {
      const parts = text.split(companyName);
      // Handles simple case of one occurrence. If multiple, a regex split would be better, 
      // but for this specific text, split is safe.
      return (
        <>
          {parts[0]}
          <strong className="text-rahimi-blue dark:text-blue-200 font-bold">{companyName}</strong>
          {parts[1]}
        </>
      );
    }
    return text;
  };

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      {/* Header */}
      <div className="bg-rahimi-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${SITE_IMAGES.aboutHeader}")` }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rahimi-red font-bold tracking-widest uppercase mb-4 block">{t.about.profile}</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.about.title}</h1>
            <div className="h-1.5 w-24 bg-white mb-8 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      {/* Corporate Overview */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            <div className="md:w-1/2">
              <h2 className="text-4xl font-serif text-rahimi-blue dark:text-white font-bold mb-8">{t.about.heading}</h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed text-justify">
                {t.about.paragraphs && t.about.paragraphs.map((paragraph: string, index: number) => (
                    <p key={index}>{renderText(paragraph)}</p>
                ))}
              </div>
            </div>
            <div className="md:w-1/2 flex flex-col gap-4">
              <img src={SITE_IMAGES.galleryImage1} className="rounded-2xl shadow-xl w-full h-80 object-cover" alt="Gallery 1" />
              <img src={SITE_IMAGES.galleryImage3} className="rounded-2xl shadow-xl w-full h-80 object-cover" alt="Gallery 2" />
              <img src={SITE_IMAGES.galleryImage2} className="rounded-2xl shadow-xl w-full h-80 object-cover" alt="Facility" />
            </div>
          </div>
        </div>
      </section>

      {/* M/V/V Grid - Vertical Stacked Tiles */}
      <section className="py-24 bg-gray-50 dark:bg-slate-950 transition-colors duration-300">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-12">
            {/* Mission Tile */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl rounded-3xl border-l-4 border-rahimi-red transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-80 md:h-auto">
                  <img src={SITE_IMAGES.heroSlider1} className="w-full h-full object-cover" alt="Mission" />
                </div>
                <div className="md:w-3/5 p-12 flex flex-col justify-center">
                  <div className="bg-rahimi-blue/10 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <Target className="text-rahimi-blue dark:text-blue-200" size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-rahimi-blue dark:text-white mb-6">{t.about.mission}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {t.about.missionDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision Tile */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl rounded-3xl border-l-4 border-rahimi-blue transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-2/5 h-80 md:h-auto">
                  <img src={SITE_IMAGES.heroSlider2} className="w-full h-full object-cover" alt="Vision" />
                </div>
                <div className="md:w-3/5 p-12 flex flex-col justify-center">
                  <div className="bg-rahimi-blue/10 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <Eye className="text-rahimi-blue dark:text-blue-200" size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-rahimi-blue dark:text-white mb-6">{t.about.vision}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {t.about.visionDesc}
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Values Tile */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl rounded-3xl border-l-4 border-rahimi-red transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-2/5 h-80 md:h-auto">
                  <img src={SITE_IMAGES.heroSlider3} className="w-full h-full object-cover" alt="Values" />
                </div>
                <div className="md:w-3/5 p-12 flex flex-col justify-center">
                  <div className="bg-rahimi-blue/10 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <Award className="text-rahimi-blue dark:text-blue-200" size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-rahimi-blue dark:text-white mb-6">{t.about.values}</h3>
                  <ul className="text-gray-600 dark:text-gray-400 leading-relaxed space-y-3 list-disc ps-5 text-lg">
                    {(t.about.valuesList as string[]).map((val: string, idx: number) => (
                        <li key={idx}>{val}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Excellence Tile */}
            <motion.div 
              whileHover={{ y: -10 }}
              className="bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl rounded-3xl border-l-4 border-rahimi-blue transition-all overflow-hidden"
            >
              <div className="flex flex-col md:flex-row-reverse">
                <div className="md:w-2/5 h-80 md:h-auto">
                  <img src={SITE_IMAGES.heroSlider4 || SITE_IMAGES.heroSlider1} className="w-full h-full object-cover" alt="Excellence" />
                </div>
                <div className="md:w-3/5 p-12 flex flex-col justify-center">
                  <div className="bg-rahimi-blue/10 dark:bg-slate-800 w-20 h-20 rounded-2xl flex items-center justify-center mb-8">
                    <Target className="text-rahimi-blue dark:text-blue-200" size={40} />
                  </div>
                  <h3 className="text-3xl font-serif font-bold text-rahimi-blue dark:text-white mb-6">{t.about.excellence}</h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
                    {t.about.excellenceDesc}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Facilities Banner */}
      <section className="py-20 bg-rahimi-blue text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-serif font-bold mb-8">{t.about.facilities}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h4 className="font-bold text-xl mb-2 text-rahimi-red">Muscat, Oman</h4>
              <p className="text-sm text-gray-300">{t.about.officeOman}</p>
            </div>
            <div className="p-6 border border-white/20 rounded-2xl bg-white/5 backdrop-blur-sm">
              <h4 className="font-bold text-xl mb-2 text-rahimi-red">Tehran, Iran</h4>
              <p className="text-sm text-gray-300">{t.about.officeIran}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { HERO_IMAGES } from '../constants';
import { useLanguage } from '../context/LanguageContext';

const HeroSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t, dir } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen w-full overflow-hidden bg-rahimi-blue">
      <AnimatePresence mode='wait'>
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${HERO_IMAGES[currentIndex]})` }}
        >
          {/* Dark Overlay with RTL Gradient support */}
          <div className={`absolute inset-0 bg-gradient-to-r ${dir === 'rtl' ? 'from-transparent via-rahimi-blue/40 to-rahimi-blue/90' : 'from-rahimi-blue/90 via-rahimi-blue/40 to-transparent'}`} />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full container mx-auto px-6 flex flex-col justify-center">
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="text-rahimi-red font-bold tracking-[0.2em] uppercase mb-4 block">
            {t.hero.tagline}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif text-white font-bold mb-6 leading-tight">
            {t.hero.title}
          </h1>
          <p className="text-gray-200 text-lg md:text-xl max-w-xl mb-10 font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/products" className="bg-rahimi-red text-white px-8 py-4 rounded-full uppercase tracking-widest font-bold hover:bg-white hover:text-rahimi-red hover:shadow-lg transition-all duration-300 text-center">
              {t.hero.ctaProducts}
            </Link>
            <Link to="/contact" className="border border-white text-white px-8 py-4 rounded-full uppercase tracking-widest font-bold hover:bg-white hover:text-rahimi-blue hover:shadow-lg transition-all duration-300 text-center">
              {t.hero.ctaPartner}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Slide Indicators */}
      <div className={`absolute bottom-10 ${dir === 'rtl' ? 'left-10' : 'right-10'} flex gap-2 z-20`}>
        {HERO_IMAGES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-rahimi-red' : 'w-4 bg-white/50'}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
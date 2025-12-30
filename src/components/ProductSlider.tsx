import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const ProductSlider: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 3;
  const { products, t, dir } = useLanguage();

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const getVisibleProducts = () => {
    const visible = [];
    for (let i = 0; i < itemsPerPage; i++) {
      visible.push(products[(startIndex + i) % products.length]);
    }
    return visible;
  };

  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <div className="py-20 bg-white dark:bg-slate-950 relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-4xl font-serif text-rahimi-blue dark:text-white font-bold mb-2">{t.home.capabilities}</h2>
            <div className="h-1.5 w-20 bg-rahimi-red rounded-full"></div>
          </div>
          <Link to="/products" className="hidden md:flex items-center gap-2 text-rahimi-red font-bold uppercase tracking-wide hover:gap-4 transition-all">
            {t.home.viewAll} <ArrowIcon size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {getVisibleProducts().map((product, idx) => (
            <motion.div
              key={`${product.id}-${startIndex}-${idx}`}
              initial={{ opacity: 0, x: dir === 'rtl' ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative h-[400px] overflow-hidden cursor-pointer shadow-lg rounded-3xl hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${product.image})` }}
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-rahimi-blue/90 via-rahimi-blue/20 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <span className="text-rahimi-red text-xs font-bold uppercase tracking-widest mb-2 block">
                  {product.category}
                </span>
                <h3 className="text-2xl font-serif font-bold mb-3">{product.title}</h3>
                <p className="text-gray-300 text-sm line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {product.description}
                </p>
                <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                  <span className="text-white border-b border-rahimi-red pb-1 text-sm uppercase tracking-wider">{t.home.learnMore}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Mobile View All button */}
        <div className="mt-8 text-center md:hidden">
           <Link to="/products" className="inline-flex items-center gap-2 text-rahimi-red font-bold uppercase tracking-wide">
            {t.home.viewAll} <ArrowIcon size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;
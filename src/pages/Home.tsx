import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ProductSlider from '../components/ProductSlider';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, TrendingUp, Globe, Users, ArrowRight, ArrowLeft, Send, Factory, FlaskConical, Droplets, Flame, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES, CONTENT_BASE } from '../constants';

const Home: React.FC = () => {
  const { t, dir, products } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  React.useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://rahimiholding.com';
    const url = `${origin}/`;
    import('../utils/seo').then(({ setMeta, addJsonLd }) => {
      setMeta({
        title: `Home | Rahimi Holding`,
        description: `Rahimi Holding — trading, services and consulting for energy and petrochemical markets across GCC and internationally.`,
        image: SITE_IMAGES.heroSlider1,
        url,
        locales: [
          { hreflang: 'en', href: url },
          { hreflang: 'fa', href: `${url}?lang=fa` },
          { hreflang: 'ar', href: `${url}?lang=ar` }
        ]
      });

      addJsonLd({
        '@context': 'https://schema.org',
        '@type': 'Organization',
        name: 'Rahimi Holding',
        url: origin,
        logo: SITE_IMAGES.logo
      });
    });
  }, []);

  return (
    <>
      <HeroSlider />

      {/* --- WHO WE ARE / ABOUT SECTION --- */}
      <section className="py-24 bg-gray-50 dark:bg-slate-900 overflow-hidden relative transition-colors duration-500">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            
            {/* Left: Text Content */}
            <motion.div 
              className="lg:w-1/2"
              initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-white dark:bg-slate-800 rounded-full mb-8 shadow-sm border border-gray-100 dark:border-slate-700">
                <span className="w-2 h-2 rounded-full bg-rahimi-red animate-pulse"></span>
                <span className="text-rahimi-blue dark:text-blue-200 font-bold uppercase tracking-widest text-[10px]">{t.home.aboutTag}</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-rahimi-blue dark:text-white font-bold mb-8 leading-tight">
                {t.home.aboutTitle}
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 leading-relaxed mb-10">
                <p className="text-xl text-rahimi-darkGrey dark:text-gray-100 font-medium font-serif">{t.home.aboutDesc1}</p>
                <p className="text-base font-light">{t.home.aboutDesc2}</p>
                
                {/* Mission & Vision Mini-Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10">
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 border-l-4 dark:border-l-4 border-l-rahimi-red dark:border-l-rahimi-red">
                    <h4 className="font-serif font-bold text-rahimi-blue dark:text-white mb-2 text-lg">{t.home.missionTitle}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t.home.missionDesc}</p>
                  </div>
                  <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-slate-700 border-l-4 dark:border-l-4 border-l-rahimi-blue dark:border-l-rahimi-blue">
                    <h4 className="font-serif font-bold text-rahimi-blue dark:text-white mb-2 text-lg">{t.home.visionTitle}</h4>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{t.home.visionDesc}</p>
                  </div>
                </div>
              </div>
              
              <Link 
                to="/about" 
                className="inline-flex items-center gap-3 bg-rahimi-blue text-white px-10 py-4 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-rahimi-red transition-all duration-300 shadow-lg hover:shadow-rahimi-red/30 hover:-translate-y-1"
              >
                {t.home.readMore} <ArrowIcon size={16} />
              </Link>
            </motion.div>

            {/* Right: Visuals */}
            <motion.div 
              className="lg:w-1/2 relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group">
                 <video
                   src={`${CONTENT_BASE}/about-video.mp4`}
                   poster={`${CONTENT_BASE}/about-header-1200x750.jpg`}
                   autoPlay
                   muted
                   loop
                   playsInline
                   controls
                   className="w-full object-cover h-[600px]"
                 >
                   Your browser does not support the video tag.
                 </video>
                 <div className="absolute inset-0 bg-gradient-to-t from-rahimi-blue/80 to-transparent"></div>
              </div>

              {/* Floating Stat Card */}
              <div className={`absolute -bottom-10 ${dir === 'rtl' ? 'right-10' : 'left-10'} bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-xl max-w-xs hidden md:block border border-gray-100 dark:border-slate-700`}>
                 <div className="flex items-center gap-5">
                    <div className="w-14 h-14 bg-rahimi-blue dark:bg-slate-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">10+</div>
                    <div>
                       <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Years of</p>
                       <p className="font-serif font-bold text-rahimi-blue dark:text-white text-lg">Global Excellence</p>
                    </div>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- BUSINESS DIVISIONS SECTION --- */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
              <span className="text-rahimi-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{t.home.divisionsTag}</span>
              <h2 className="text-4xl md:text-5xl font-serif text-rahimi-blue dark:text-white font-bold">{t.home.divisionsTitle}</h2>
              <div className="h-1 w-20 bg-gray-200 dark:bg-slate-800 mx-auto mt-6 rounded-full"></div>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* 1. Refinery Products */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-rahimi-blue text-white rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
            >
              <Factory className="absolute -bottom-12 -right-12 w-80 h-80 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-12" />
              
              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-inner">
                  <Flame className="text-rahimi-red" size={36} />
                </div>
                
                <h3 className="text-4xl font-serif font-bold mb-3">{t.home.refinery.title}</h3>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{t.home.refinery.subtitle}</h4>
                
                <p className="text-gray-300 leading-relaxed mb-10 text-lg font-light">
                  {t.home.refinery.desc}
                </p>

                <div className="bg-black/20 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                  <h5 className="font-bold text-xs uppercase tracking-wider mb-6 text-rahimi-red border-b border-white/10 pb-2 inline-block">{t.home.refinery.productsTitle}</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 font-medium">
                    {(t.home.refinery.list as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-rahimi-red rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* 2. Petrochemical Products */}
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="bg-rahimi-blue text-white rounded-[2.5rem] p-12 shadow-2xl relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
            >
              <FlaskConical className="absolute -bottom-12 -right-12 w-80 h-80 text-white/5 group-hover:text-white/10 transition-colors duration-500 rotate-12" />

              <div className="relative z-10">
                <div className="w-20 h-20 bg-white/10 rounded-3xl flex items-center justify-center mb-8 backdrop-blur-md border border-white/20 shadow-inner">
                  <FlaskConical className="text-rahimi-red" size={36} />
                </div>
                
                <h3 className="text-4xl font-serif font-bold mb-3 text-white">{t.home.petro.title}</h3>
                <h4 className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-8">{t.home.petro.subtitle}</h4>
                
                <p className="text-gray-300 leading-relaxed mb-10 text-lg font-light">
                  {t.home.petro.desc}
                </p>

                <div className="bg-black/20 rounded-3xl p-8 border border-white/5 backdrop-blur-sm">
                  <h5 className="font-bold text-xs uppercase tracking-wider mb-6 text-rahimi-red border-b border-white/10 pb-2 inline-block">{t.home.petro.productsTitle}</h5>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-300 font-medium">
                    {(t.home.petro.list as string[]).map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 bg-rahimi-red rounded-full"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- NEW: OUR WORKS / PRODUCTS GALLERY SECTION --- */}
      <section className="py-32 bg-gray-50 dark:bg-slate-900 relative overflow-hidden transition-colors duration-500">
         <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
               <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
               >
                  <span className="text-rahimi-red font-bold uppercase tracking-[0.2em] text-xs block mb-3">
                     {t.home.worksTag}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-serif font-bold text-rahimi-blue dark:text-white">
                     {t.home.worksTitle}
                  </h2>
               </motion.div>
               
               <Link 
                  to="/products" 
                  className="hidden md:inline-flex items-center gap-2 text-rahimi-darkGrey dark:text-gray-300 font-bold uppercase tracking-widest text-xs hover:text-rahimi-red transition-colors group"
               >
                  {t.home.viewWorks} <ArrowIcon size={16} className="group-hover:translate-x-1 transition-transform rtl:group-hover:-translate-x-1" />
               </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {products.slice(0, 4).map((product, idx) => (
                  <motion.div
                     key={product.id}
                     initial={{ opacity: 0, y: 40 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     transition={{ delay: idx * 0.1, duration: 0.6 }}
                     viewport={{ once: true }}
                     className="group relative h-[400px] rounded-[2rem] overflow-hidden cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500"
                  >
                     <img 
                        src={product.image} 
                        alt={product.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     />
                     
                     <div className={`absolute top-6 ${dir === 'rtl' ? 'right-6' : 'left-6'} bg-white/90 dark:bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl shadow-sm z-20`}>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-rahimi-blue dark:text-white">{product.category}</span>
                     </div>

                     <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-rahimi-blue/95 via-rahimi-blue/80 to-transparent translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="text-xl font-serif font-bold text-white mb-2">{product.title}</h3>
                        <p className="text-gray-300 text-xs line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 leading-relaxed">{product.description}</p>
                     </div>
                  </motion.div>
               ))}
            </div>

            <div className="mt-12 text-center md:hidden">
               <Link 
                  to="/products" 
                  className="inline-flex items-center gap-2 text-rahimi-blue dark:text-white font-bold uppercase tracking-widest text-xs"
               >
                  {t.home.viewWorks} <ArrowIcon size={16} />
               </Link>
            </div>
         </div>
      </section>

      {/* --- WHY CHOOSE US --- */}
      <section className="py-32 bg-white dark:bg-slate-950 transition-colors duration-500">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
             <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }}>
               <span className="text-rahimi-red font-bold uppercase tracking-[0.2em] text-xs mb-3 block">{t.home.whyTag}</span>
               <h2 className="text-4xl md:text-5xl font-serif text-rahimi-blue dark:text-white font-bold mb-6">{t.home.whyTitle}</h2>
               <p className="text-gray-500 dark:text-gray-400 text-lg font-light">{t.home.whyDesc}</p>
             </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
             {[
               { icon: ShieldCheck, key: 'safety' },
               { icon: TrendingUp, key: 'quality' },
               { icon: Globe, key: 'global' },
               { icon: Users, key: 'support' }
             ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10 }}
                  className="p-10 rounded-[2rem] bg-gray-50 dark:bg-slate-900 border border-gray-100 dark:border-slate-800 shadow-lg hover:shadow-2xl hover:border-rahimi-blue/20 dark:hover:border-rahimi-blue/20 transition-all duration-300 group text-center"
                >
                    <div className="w-20 h-20 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center mb-8 group-hover:bg-rahimi-blue group-hover:text-white transition-all duration-300 mx-auto shadow-sm">
                      <item.icon size={36} className="text-rahimi-blue dark:text-blue-200 group-hover:text-white transition-colors" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-rahimi-blue dark:text-white mb-4">
                      {t.home.features[item.key as keyof typeof t.home.features].title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                      {t.home.features[item.key as keyof typeof t.home.features].desc}
                    </p>
                </motion.div>
             ))}
          </div>
        </div>
      </section>

      {/* --- STATS SECTION (Parallax) --- */}
      <section className="py-32 bg-fixed bg-cover bg-center relative" style={{ backgroundImage: `url("${SITE_IMAGES.statsBackground}")` }}>
        <div className="absolute inset-0 bg-rahimi-blue/90 mix-blend-multiply" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center text-white">
            {[
              { val: '2024', label: t.home.stats.founded },
              { val: '70+', label: t.home.stats.employees },
              { val: '9', label: t.home.stats.products },
              { val: '2', label: t.home.stats.offices }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-sm border border-white/10 group-hover:bg-white/10 transition-colors">
                  <h4 className="text-5xl md:text-6xl font-serif font-bold mb-4 text-white group-hover:text-rahimi-red transition-colors">{stat.val}</h4>
                  <p className="uppercase tracking-[0.2em] text-xs font-bold text-gray-300">{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TRUSTED BY --- */}
      <section className="py-24 bg-white dark:bg-slate-900 transition-colors duration-500 border-b border-gray-100 dark:border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl font-serif text-rahimi-darkGrey dark:text-gray-300 font-bold mb-12 opacity-80">{t.home.trustedBy}</h2>
          <div className="flex flex-wrap justify-center gap-16 opacity-40 hover:opacity-100 transition-opacity duration-500">
             {['N.I.O.C'].map((brand, idx) => (
               <h3 key={idx} className="text-3xl font-bold font-serif text-rahimi-blue dark:text-white cursor-default">{brand}</h3>
             ))}
          </div>
        </div>
      </section>

      {/* --- GET IN TOUCH --- */}
      <section className="py-32 bg-rahimi-blue relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${SITE_IMAGES.contactBackground}")` }}></div>
        <div className="absolute inset-0 bg-gradient-to-r from-rahimi-blue via-rahimi-blue/95 to-rahimi-blue/90"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-white/5 backdrop-blur-xl rounded-[3rem] p-12 md:p-20 border border-white/10 shadow-2xl flex flex-col xl:flex-row items-center justify-between gap-16">
            <div className="xl:w-1/2">
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6">
                {t.home.ctaTitle}
              </h2>
              <p className="text-gray-300 text-lg font-light leading-relaxed max-w-xl">
                {t.home.ctaDesc}
              </p>
            </div>
            <div className="xl:w-auto w-full">
               <div className="flex flex-col sm:flex-row gap-4 w-full">
                 <div className="relative flex-grow sm:flex-grow-0">
                    <input 
                      type="email" 
                      placeholder={t.products.emailPlaceholder} 
                      className="w-full sm:w-80 px-8 py-5 rounded-2xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:bg-white/20 focus:border-rahimi-red transition-all"
                    />
                 </div>
                 <Link 
                   to="/contact" 
                   className="px-10 py-5 bg-rahimi-red text-white rounded-2xl font-bold uppercase tracking-widest hover:bg-red-800 hover:shadow-lg hover:shadow-red-900/20 transition-all flex items-center justify-center gap-3 whitespace-nowrap"
                 >
                   {t.home.ctaBtn} <Send size={18} />
                 </Link>
               </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
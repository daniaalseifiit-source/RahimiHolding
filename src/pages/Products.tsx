import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES, COMPANY_INFO } from '../constants';
import { ArrowRight, ArrowLeft, X } from 'lucide-react';
import { setMeta, addJsonLd, processContent } from '../utils/seo';

const Products: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, t, dir } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [filter, setFilter] = useState<'Trading' | 'Services'>('Trading');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [requestStatus, setRequestStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const isRTL = dir === 'rtl';
  const filteredProducts = products.filter(p => p.category === filter);
  const displayedProducts = filteredProducts.slice(0, 9);
  const ArrowIcon = isRTL ? ArrowLeft : ArrowRight;

  // Responsive columns to calculate placeholders when rows are incomplete
  const [columns, setColumns] = useState(3);
  useEffect(() => {
    const updateColumns = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      if (w < 768) setColumns(1); // mobile (grid-cols-1)
      else if (w < 1024) setColumns(2); // md (grid-cols-2)
      else setColumns(3); // lg (grid-cols-3)
    };
    updateColumns();
    window.addEventListener('resize', updateColumns);
    return () => window.removeEventListener('resize', updateColumns);
  }, []);

  // Number of invisible placeholders to add at the end of the grid
  const placeholdersCount = (columns - (displayedProducts.length % columns)) % columns;

  // Initialize selected product from URL parameter
  useEffect(() => {
    if (id && products.length > 0) {
      const product = products.find(p => p.id === parseInt(id));
      if (product) {
        setSelectedProduct(product);
      }
    } else if (!id) {
      setSelectedProduct(null);
    }
  }, [id, products]);

  // Scroll to top when switching between list and detail view
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedProduct]);

  const handleOpenModal = (product: any) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
    setRequestStatus('idle');
    setEmail('');
    setName('');
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setRequestStatus('loading');
    
    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name || 'Product Request',
          email: email,
          subject: `Specs Request: ${selectedProduct?.title}`,
          message: `Name: ${name}\nEmail: ${email}\n\nI would like to request the specifications for ${selectedProduct?.title} (Category: ${selectedProduct?.category}).`
        }),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setRequestStatus('success');
        setEmail('');
        setName('');
      } else {
        console.error('Server Error:', result.message);
        setRequestStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setRequestStatus('error');
    }
  };

  // SEO: set products listing meta and a simple ItemList JSON-LD
  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://rahimiholding.com';
    const url = `${origin}/products`;

    setMeta({
      title: `Products | ${COMPANY_INFO.name}`,
      description: `Explore Rahimi Holding's trading and services products covering base oils, fuels, bitumen and industrial solutions for GCC & international partners.`,
      image: SITE_IMAGES.productHeader,
      url,
      locales: [
        { hreflang: 'en', href: url },
        { hreflang: 'fa', href: `${url}?lang=fa` },
        { hreflang: 'ar', href: `${url}?lang=ar` }
      ]
    });

    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: products.map((p: any, i: number) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `${origin}/products/${p.id}`
      }))
    });
  }, [products]);

  // RENDER CONTENT (detail or grid based on selectedProduct)
  const content = selectedProduct ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      dir={isRTL ? 'rtl' : 'ltr'}
    >
      <button
        onClick={() => navigate('/products')}
        className="mb-8 flex items-center text-rahimi-red font-bold hover:text-red-700 transition-colors group"
      >
        <span className={`transform transition-transform group-hover:${isRTL ? 'translate-x-1' : '-translate-x-1'}`}>
          {isRTL ? '→' : '←'}
        </span>
        <span className="mx-2 uppercase text-sm tracking-wider">← Back to Products</span>
      </button>

      <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-100 dark:border-slate-700">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Picture Column */}
          <div className="lg:col-span-5 relative overflow-hidden bg-gray-100 h-96 lg:h-auto">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/5 pointer-events-none"></div>
          </div>

          {/* Content Column */}
          <div className="lg:col-span-7 p-8 md:p-12 flex flex-col justify-center bg-white dark:bg-slate-800">
            <div className="mb-8">
              <span
                className={`inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4 ${
                  selectedProduct.category === 'Trading'
                    ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    : 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
                }`}
              >
                {selectedProduct.category === 'Trading' ? t.products.filterTrading : t.products.filterServices}
              </span>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-rahimi-blue dark:text-white tracking-tight leading-tight">
                {selectedProduct.title}
              </h1>
            </div>

            <div className="space-y-6 mb-12">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-medium italic border-l-4 border-rahimi-red pl-6">
                {selectedProduct.description}
              </p>
              <div
                className="text-gray-600 dark:text-gray-400 leading-relaxed text-base whitespace-pre-wrap prose-sm"
                dangerouslySetInnerHTML={{ __html: processContent(selectedProduct.content || '') }}
              />
            </div>

            <div className="pt-8 border-t border-gray-200 dark:border-slate-700">
              <button 
                onClick={() => handleOpenModal(selectedProduct)}
                className="w-full md:w-auto px-8 py-4 bg-rahimi-red text-white rounded-xl font-bold text-lg hover:bg-red-700 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-rahimi-red/30"
              >
                {t.products.requestSpecs}
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ) : (
    <div className="bg-gray-50 dark:bg-slate-900 min-h-screen transition-colors duration-500">
      {/* Header */}
      <div className="bg-rahimi-blue text-white py-32 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url("${SITE_IMAGES.productHeader}")` }}
        />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            <span className="text-rahimi-red font-bold tracking-widest uppercase mb-4 block">{t.products.category}</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.products.title}</h1>
            <div className="h-1.5 w-24 bg-white mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl text-lg">{t.products.subtitle}</p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20" dir={isRTL ? 'rtl' : 'ltr'}>
        {/* Filters */}
        <div className="flex justify-center mb-16 gap-6">
          {[
            { key: 'Trading', label: t.products.filterTrading },
            { key: 'Services', label: t.products.filterServices }
          ].map((cat) => (
            <button
              key={cat.key}
              onClick={() => setFilter(cat.key as any)}
              className={`px-8 py-3 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-300 ${
                filter === cat.key
                  ? 'bg-rahimi-red text-white shadow-lg shadow-rahimi-red/30 transform -translate-y-1'
                  : 'bg-white dark:bg-slate-800 text-rahimi-blue dark:text-white border border-gray-200 dark:border-slate-700 hover:border-rahimi-red hover:text-rahimi-red'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <AnimatePresence>
            {displayedProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                onClick={() => navigate(`/products/${product.id}`)}
                className="group flex flex-col bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 dark:border-slate-700 cursor-pointer"
              >
                {/* Image Header */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <span
                    className={`absolute top-4 ${isRTL ? 'right-4' : 'left-4'} text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-lg z-10 ${
                      product.category === 'Trading'
                        ? 'bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 border border-blue-100 dark:border-blue-900'
                        : 'bg-orange-50 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400 border border-orange-100 dark:border-orange-900'
                    }`}
                  >
                    {product.category === 'Trading' ? t.products.filterTrading : t.products.filterServices}
                  </span>
                </div>

                {/* Content Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-serif font-bold text-rahimi-blue dark:text-white mb-3 group-hover:text-rahimi-red transition-colors">
                    {product.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {product.description}
                  </p>

                  {/* Actions Footer */}
                  <div className="pt-4 border-t border-gray-100 dark:border-slate-700">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/products/${product.id}`);
                      }}
                      className="text-rahimi-red font-bold text-sm uppercase tracking-widest hover:text-red-700 transition-colors flex items-center group/btn"
                    >
                      {t.products.readMore}
                      <ArrowIcon size={14} className={`mx-2 transition-transform group-hover/btn:${isRTL ? '-translate-x-1' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {Array.from({ length: placeholdersCount }).map((_, idx) => (
              <div
                key={`placeholder-${idx}`}
                className="group flex flex-col rounded-2xl overflow-hidden opacity-0 pointer-events-none"
                aria-hidden="true"
              >
                <div className="h-64 bg-transparent"></div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="h-6 mb-3"></div>
                  <div className="h-12 mb-6"></div>
                  <div className="pt-4 border-t border-transparent"></div>
                </div>
              </div>
            ))}

          </AnimatePresence>
        </div>
      </div>
    </div>
  );

  // RETURN FINAL LAYOUT (grid or detail + modal overlay)
  return (
    <>
      {content}
      
      {/* Request Specs Modal - Always available */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="absolute inset-0 bg-rahimi-blue/60 backdrop-blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-full max-w-md overflow-hidden z-10 border border-white/20"
              dir={isRTL ? 'rtl' : 'ltr'}
            >
              <div className="bg-rahimi-blue p-8 text-white flex justify-between items-center">
                <h3 className="text-2xl font-serif font-bold">{t.products.modalTitle}</h3>
                <button 
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              <div className="p-8">
                {requestStatus === 'success' ? (
                  <div className="text-center py-6">
                    <motion.div 
                      initial={{ scale: 0 }} animate={{ scale: 1 }} 
                      className="w-16 h-16 bg-green-50 dark:bg-green-900/30 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4"
                    >
                      ✓
                    </motion.div>
                    <h4 className="text-xl font-bold text-rahimi-blue dark:text-white mb-2">{t.products.success}</h4>
                    <p className="text-gray-600 dark:text-gray-400 mb-6 font-light text-sm">{t.products.successDesc}</p>
                    <button 
                      onClick={handleCloseModal}
                      className="bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 text-gray-800 dark:text-white px-8 py-2 rounded-lg font-bold transition-colors uppercase text-xs tracking-wide"
                    >
                      {t.products.close}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <p className="text-gray-600 dark:text-gray-300 mb-6 font-light text-sm leading-relaxed">
                      {t.products.modalDesc} <span className="font-bold text-rahimi-blue dark:text-white">{selectedProduct?.title}</span>.
                    </p>
                    <div className="mb-6 space-y-4">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          {t.contact.name}
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder={t.contact.name}
                          className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">
                          {t.contact.email}
                        </label>
                        <input 
                          type="email" 
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={t.products.emailPlaceholder}
                          className="w-full bg-gray-50 dark:bg-slate-800 border border-gray-200 dark:border-slate-700 p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red text-sm" 
                        />
                      </div>
                    </div>
                    
                    {requestStatus === 'error' && (
                       <div className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-xs mb-4">
                          Error sending request. Please try again.
                       </div>
                    )}

                    <button 
                      type="submit"
                      disabled={requestStatus === 'loading'}
                      className="w-full bg-rahimi-red text-white py-3 rounded-lg font-bold uppercase tracking-wider hover:bg-red-700 transition-colors shadow-lg disabled:opacity-70 disabled:cursor-not-allowed text-sm"
                    >
                      {requestStatus === 'loading' ? `${t.products.processing}...` : t.products.submit}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );

};

export default Products;
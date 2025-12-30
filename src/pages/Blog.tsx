import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMeta, addJsonLd } from '../utils/seo';

const Blog: React.FC = () => {
  const { blogPosts, t, dir } = useLanguage();
  const ArrowIcon = dir === 'rtl' ? ArrowLeft : ArrowRight;

  // SEO: listing meta + BlogPosting list
  React.useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://rahimiholding.com';
    const url = `${origin}/blog`;

    setMeta({
      title: `Blog | ${COMPANY_INFO.name}`,
      description: `Insights on the oil, gas, and petrochemical markets in the GCC and global regions — Rahimi Holding blog.`,
      image: SITE_IMAGES.blogHeader,
      url,
      locales: [
        { hreflang: 'en', href: url },
        { hreflang: 'fa', href: `${url}?lang=fa` },
        { hreflang: 'ar', href: `${url}?lang=ar` }
      ]
    });

    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Blog',
      url,
      name: `${COMPANY_INFO.name} Blog`,
      description: `Insights on the oil, gas, and petrochemical markets in the GCC and global regions.`,
      blogPost: blogPosts.map(p => ({ '@type': 'BlogPosting', headline: p.title, url: `${origin}/blog/${p.id}` }))
    });
  }, [blogPosts]);

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      
      {/* Header Section */}
      <div className="bg-rahimi-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${SITE_IMAGES.blogHeader}")` }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rahimi-red font-bold tracking-widest uppercase mb-4 block">{t.blog.tag}</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.blog.title}</h1>
            <div className="h-1.5 w-24 bg-white mb-8 rounded-full"></div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogPosts.map((post) => (
            <Link to={`/blog/${post.id}`} key={post.id} className="no-underline">
              <article className="flex flex-col group cursor-pointer bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-slate-700">
                <div className="h-64 overflow-hidden mb-6 relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className={`absolute top-4 ${dir === 'rtl' ? 'right-4' : 'left-4'} bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm`}>
                    <span className="text-xs font-bold text-rahimi-blue dark:text-blue-200 uppercase tracking-wide">{post.date}</span>
                  </div>
                </div>
                <div className="flex-grow px-8 pb-4">
                  <h3 className="text-2xl font-serif font-bold text-rahimi-blue dark:text-white mb-3 group-hover:text-rahimi-red dark:group-hover:text-rahimi-red transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto px-8 pb-8 pt-4 border-t border-gray-100 dark:border-slate-700 flex justify-between items-center text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-bold text-rahimi-darkGrey dark:text-gray-300">{post.author}</span>
                  <span className={`flex items-center gap-2 ${dir === 'rtl' ? 'group-hover:-translate-x-2' : 'group-hover:translate-x-2'} transition-transform duration-300 text-rahimi-red font-bold`}>
                    {t.blog.readArticle} <ArrowIcon size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { SITE_IMAGES, COMPANY_INFO } from '../constants';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { setMeta, addJsonLd, processContent } from '../utils/seo';

const BlogPost: React.FC = () => {
  const { id } = useParams();
  const { blogPosts, t, dir } = useLanguage();
  const postId = Number(id);
  const post = blogPosts.find((p) => p.id === postId);

  // Debugging: log and show a small banner in dev to verify the found post
  // Remove this in production if you don't need it
  // (Visible only when running Vite in dev mode)
  // Example output will appear in browser console and on-page banner
  // Helps track whether params/id matching or data is missing
  // ------------------------------------------
  // eslint-disable-next-line no-console
  console.log('BlogPost debug:', { id, postId, post });
  // Vite provides import.meta.env, but some TS configs do not include the type; cast to any to avoid a compile error
  const showDebug = !!(import.meta as any).env?.DEV;
  const debugMessage = `id=${id} postExists=${!!post}`;

  useEffect(() => {
    if (!post) return;
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://rahimiholding.com';
    const url = `${origin}/blog/${post.id}`;

    setMeta({
      title: `${post.title} | ${COMPANY_INFO.name}`,
      description: post.excerpt,
      image: post.image,
      url,
      locales: [
        { hreflang: 'en', href: url },
        { hreflang: 'fa', href: `${url}?lang=fa` },
        { hreflang: 'ar', href: `${url}?lang=ar` }
      ]
    });

    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      image: post.image,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author || COMPANY_INFO.name },
      description: post.excerpt,
      mainEntityOfPage: url
    });
  }, [post]);

  if (!post) {
    return (
      <div className="container mx-auto px-6 py-24 text-center">
        {showDebug && <div className="mb-6 inline-block bg-yellow-100 text-rahimi-blue px-4 py-2 rounded">Debug: {debugMessage}</div>}
        <h2 className="text-2xl font-bold mb-4">{t.blog.notFound || 'Article not found'}</h2>
        <Link to="/blog" className="text-rahimi-red font-bold">{t.blog.backToList || 'Back to Blog'}</Link>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen transition-colors duration-300">
      <div className="bg-rahimi-blue text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${SITE_IMAGES.blogHeader}")` }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">{post.title}</h1>
            <div className="flex items-center gap-4 text-sm text-white/80">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.author}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <img src={post.image} alt={post.title} className="w-full h-96 object-cover rounded-2xl shadow-lg mb-8" />
          <div
            className="prose dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: processContent(post.content || post.excerpt) }}
          />
          <div className="mt-12">
            <Link to="/blog" className="inline-flex items-center gap-2 text-rahimi-red font-bold">
              <ArrowLeft size={16} /> {t.blog.backToList || 'Back to Blog'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

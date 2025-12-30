import React, { useEffect } from 'react';
import { Product } from '../types';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { setMeta, addJsonLd } from '../utils/seo';
import { COMPANY_INFO } from '../constants';
import { useLanguage } from '../context/LanguageContext';

interface Props {
  product: Product;
  onClose?: () => void;
  onRequest?: (product: Product) => void;
}

const ProductDetail: React.FC<Props> = ({ product, onClose, onRequest }) => {
  const { t } = useLanguage();
  if (!product) return null;

  useEffect(() => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://rahimiholding.com';
    const url = `${origin}/products/${product.id}`;

    setMeta({
      title: `${product.title} | ${COMPANY_INFO.name}`,
      description: product.description,
      image: product.image && (product.image.startsWith('http') ? product.image : `${origin}${product.image}`),
      url,
      locales: [
        { hreflang: 'en', href: url },
        { hreflang: 'fa', href: `${url}?lang=fa` },
        { hreflang: 'ar', href: `${url}?lang=ar` }
      ]
    });

    addJsonLd({
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.title,
      description: product.description,
      image: product.image && (product.image.startsWith('http') ? product.image : `${origin}${product.image}`),
      url,
      brand: { '@type': 'Organization', name: COMPANY_INFO.name },
      offers: { '@type': 'Offer', availability: 'https://schema.org/InStock' }
    });
  }, [product]);

  return (
    <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg p-6 h-full">
      <div className="flex items-start justify-between mb-6">
        <h3 className="text-2xl font-serif font-bold text-rahimi-blue dark:text-white">{product.title}</h3>
        <div className="flex items-center gap-2">
          {onClose ? (
            <button onClick={onClose} className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300">
              Close
            </button>
          ) : (
            <Link to="/products" className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-300">
              <ArrowLeft size={16} /> Back
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <img src={product.image} alt={product.title} className="w-full h-72 object-cover rounded-xl shadow-md" />
          {product.gallery && product.gallery.length > 1 && (
            <div className="mt-4 grid grid-cols-3 gap-2">
              {product.gallery.map((g, idx) => (
                <img key={idx} src={g} alt={`${product.title} ${idx+1}`} className="w-full h-20 object-cover rounded-md" />
              ))}
            </div>
          )}
        </div>
        <div>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">{product.content || product.description}</p>

          <div className="mt-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gray-500">Category</span>
              <span className="text-sm text-rahimi-blue">{product.category}</span>
            </div>

            <button
              onClick={() => onRequest?.(product)}
              className="inline-block w-full text-center bg-rahimi-red hover:bg-red-800 text-white py-3 rounded-xl font-bold transition-colors"
            >
              {t.products.requestSpecs}
            </button>

            <Link
              to={`/contact?product=${encodeURIComponent(product.title)}`}
              className="block mt-3 text-center text-rahimi-red font-bold hover:underline"
            >
              Or send via Contact page
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

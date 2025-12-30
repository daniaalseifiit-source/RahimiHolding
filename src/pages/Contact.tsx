import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { COMPANY_INFO, SITE_IMAGES } from '../constants';
import { motion, AnimatePresence } from 'framer-motion';
import { useSearchParams } from 'react-router-dom';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
    hp: '' // honeypot field (should remain empty)
  });

  const [searchParams] = useSearchParams();
  const formRef = useRef<HTMLFormElement | null>(null);
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok && result.status === 'success') {
        setStatus('success');
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '', hp: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        console.error('Server Error:', result.message);
        setStatus('error');
      }
    } catch (error) {
      console.error('Network Error:', error);
      setStatus('error');
    }
  };

  // Prefill behavior: if ?product= is provided, prefill subject/message and scroll to form
  useEffect(() => {
    const productParam = searchParams.get('product');
    if (!productParam) return;
    const productName = decodeURIComponent(productParam);

    setFormData(prev => ({
      ...prev,
      subject: `Product Inquiry: ${productName}`,
      message: `I would like to request the specifications for ${productName}.`
    }));

    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      const firstInput = formRef.current?.querySelector('input[name="name"]') as HTMLInputElement | null;
      firstInput?.focus();
    }, 260);
  }, [searchParams]);

  return (
    <div className="bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="bg-rahimi-blue text-white py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: `url("${SITE_IMAGES.contactHeader}")` }} />
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-rahimi-red font-bold tracking-widest uppercase mb-4 block">{t.contact.tag || "Get in Touch"}</span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">{t.contact.title}</h1>
            <div className="h-1.5 w-24 bg-white mb-8 rounded-full"></div>
            <p className="text-gray-300 max-w-2xl text-lg">
              {t.contact.subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info Side */}
          <div>
            <h2 className="text-3xl font-serif text-rahimi-blue dark:text-white font-bold mb-8">{t.contact.hq}</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rahimi-red/10 dark:bg-slate-800 flex items-center justify-center rounded-2xl flex-shrink-0">
                  <MapPin className="text-rahimi-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rahimi-blue dark:text-white text-lg mb-2">{t.contact.addressLabel}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.addressValue}</p>
                  {t.contact.addressSub && (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{t.contact.addressSub}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rahimi-red/10 dark:bg-slate-800 flex items-center justify-center rounded-2xl flex-shrink-0">
                  <MapPin className="text-rahimi-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rahimi-blue dark:text-white text-lg mb-2">{t.contact.addressLabel2 || 'Office in Iran'}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.addressValue2 || 'Tehran, Iran'}</p>
                  {t.contact.addressSub2 && (
                    <p className="text-gray-600 dark:text-gray-400 mt-2">{t.contact.addressSub2}</p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rahimi-red/10 dark:bg-slate-800 flex items-center justify-center rounded-2xl flex-shrink-0">
                  <Phone className="text-rahimi-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rahimi-blue dark:text-white text-lg mb-2">{t.contact.phone}</h4>
                  {COMPANY_INFO.phone.map((phone, idx) => (
                    <a 
                      key={idx}
                      href={`tel:${phone.replace(/-/g, '')}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-rahimi-red dark:hover:text-rahimi-red transition-colors block"
                    >
                      {phone}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rahimi-red/10 dark:bg-slate-800 flex items-center justify-center rounded-2xl flex-shrink-0">
                  <Mail className="text-rahimi-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rahimi-blue dark:text-white text-lg mb-2">{t.contact.email}</h4>
                  {COMPANY_INFO.email.map((email, idx) => (
                    <a 
                      key={idx}
                      href={`mailto:${email}`} 
                      className="text-gray-600 dark:text-gray-400 hover:text-rahimi-red dark:hover:text-rahimi-red transition-colors block"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 bg-rahimi-red/10 dark:bg-slate-800 flex items-center justify-center rounded-2xl flex-shrink-0">
                  <Clock className="text-rahimi-red" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rahimi-blue dark:text-white text-lg mb-2">{t.contact.hours}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.hoursValue1}</p>
                  <p className="text-gray-600 dark:text-gray-400">{t.contact.hoursValue2}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-gray-50 dark:bg-slate-800 p-10 border border-gray-200 dark:border-slate-700 shadow-xl rounded-3xl transition-colors">
            <h3 className="text-2xl font-serif text-rahimi-blue dark:text-white font-bold mb-6">{t.contact.formTitle}</h3>
            
            <AnimatePresence mode="wait">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-8 text-center"
                >
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-green-800 dark:text-green-300 mb-2">Message Sent!</h4>
                  <p className="text-green-700 dark:text-green-400">Thank you for contacting us. We will respond shortly.</p>
                  <button 
                    onClick={() => setStatus('idle')}
                    className="mt-6 text-sm font-bold text-green-700 dark:text-green-300 underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.form 
                  ref={formRef}
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="space-y-6" 
                  onSubmit={handleSubmit}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{t.contact.name}</label>
                      <input 
                        type="text" 
                        name="name"
                        required
                        maxLength={100}
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-rahimi-darkGrey dark:text-white p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red transition-all" 
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{t.contact.email}</label>
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-rahimi-darkGrey dark:text-white p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red transition-all" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{t.contact.subject}</label>
                    <select 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-rahimi-darkGrey dark:text-white p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red transition-all"
                    >
                      <option>General Inquiry</option>
                      <option>Trading Proposal</option>
                      <option>Safety Services</option>
                      <option>Investor Relations</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-2">{t.contact.message}</label>
                    <textarea 
                      rows={4} 
                      name="message"
                      required
                      maxLength={2000}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-slate-700 border border-gray-300 dark:border-slate-600 text-rahimi-darkGrey dark:text-white p-3 rounded-lg focus:outline-none focus:border-rahimi-red focus:ring-1 focus:ring-rahimi-red transition-all"
                    ></textarea>
                  </div>

                  {status === 'error' && (
                     <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-3 rounded-lg text-sm">
                        <AlertCircle size={16} />
                        <span>There was an error sending your message. Please try again.</span>
                     </div>
                  )}

                  {/* Honeypot field (hidden from users) to catch bots that auto-fill every field */}
                  <input type="text" name="hp" value={formData.hp} onChange={handleChange} autoComplete="off" tabIndex={-1} style={{display:'none'}} />

                  <button 
                    type="submit" 
                    disabled={status === 'loading'}
                    className="w-full bg-rahimi-red text-white font-bold uppercase tracking-widest py-4 rounded-full hover:bg-red-800 hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="animate-spin" size={20} /> Sending...
                      </>
                    ) : (
                      <>
                         {t.contact.send} <Send size={18} />
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      
      {/* Map Placeholder */}
      <div className="w-full h-96 bg-gray-200 dark:bg-slate-800 flex items-center justify-center relative">
        <div className="absolute inset-0 bg-cover bg-center grayscale opacity-50" style={{ backgroundImage: `url("${SITE_IMAGES.mapPlaceholder}")` }}></div>
        <span className="text-gray-500 font-bold text-xl relative z-10 bg-white dark:bg-slate-900 dark:text-gray-200 px-6 py-2 shadow-lg rounded-full">Interactive Map Loading...</span>
      </div>
    </div>
  );
};

export default Contact;
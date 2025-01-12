import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export default function Contact() {
  const { t } = useTranslation();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className="min-h-screen pt-20 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('contact.description')}
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-xl mx-auto"
          onSubmit={handleSubmit}
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) => setFormState(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-borealis-200 dark:border-borealis-700 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-borealis-500 focus:border-transparent
                         hover:border-borealis-300 dark:hover:border-borealis-600
                         transition-colors duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) => setFormState(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-borealis-200 dark:border-borealis-700 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-borealis-500 focus:border-transparent
                         hover:border-borealis-300 dark:hover:border-borealis-600
                         transition-colors duration-200"
                required
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                value={formState.message}
                onChange={(e) => setFormState(prev => ({ ...prev, message: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-borealis-200 dark:border-borealis-700 
                         bg-white dark:bg-gray-800 text-gray-900 dark:text-white
                         focus:ring-2 focus:ring-borealis-500 focus:border-transparent
                         hover:border-borealis-300 dark:hover:border-borealis-600
                         transition-colors duration-200"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-borealis-500 text-white py-4 px-6 rounded-lg
                       hover:bg-borealis-600 focus:ring-2 focus:ring-offset-2 
                       focus:ring-borealis-500 transition-all duration-200
                       flex items-center justify-center space-x-2"
            >
              <span>{t('contact.form.submit')}</span>
              <Send className="w-5 h-5" />
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('contact.description')}
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-xl mx-auto"
        >
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                {t('contact.form.name')}
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                {t('contact.form.email')}
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                rows={4}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 px-6 rounded-md hover:bg-indigo-700 transition-colors"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
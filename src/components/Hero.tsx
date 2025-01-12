import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

export default function Hero() {
  const { t } = useTranslation();

  return (
    <div className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-900 min-h-screen flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')] opacity-20 bg-cover bg-center" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-white text-indigo-900 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            {t('hero.cta')}
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
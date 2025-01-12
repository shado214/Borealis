import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground';

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen flex items-center">
      <AuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            {t('hero.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            {t('hero.subtitle')}
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground';

export default function Mission() {
  const { t } = useTranslation();

  return (
    <div className="relative min-h-screen pt-20">
      <AuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            {t('mission.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
            {t('mission.description')}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
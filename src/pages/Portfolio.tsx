import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import AuroraBackground from '../components/AuroraBackground';

export default function Portfolio() {
  const { t } = useTranslation();

  const projects = ['enterprise', 'healthcare', 'logistics'];

  return (
    <div className="relative min-h-screen pt-20">
      <AuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('portfolio.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('portfolio.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
            >
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={t(`portfolio.projects.${project}.image`)}
                  alt={t(`portfolio.projects.${project}.title`)}
                  className="object-cover w-full h-48"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`portfolio.projects.${project}.title`)}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {t(`portfolio.projects.${project}.description`)}
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-borealis-500 text-white rounded-lg hover:bg-borealis-600 transition-colors"
                >
                  <span className="mr-2">View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
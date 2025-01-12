import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import AuroraBackground from '../components/AuroraBackground';

export default function About() {
  const { t } = useTranslation();

  const team = [
    {
      key: 'samir',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=300&h=300',
    },
    {
      key: 'michael',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?fit=crop&w=300&h=300',
    },
    {
      key: 'jean',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=300&h=300',
    },
  ];

  return (
    <div className="relative min-h-screen pt-20">
      <AuroraBackground />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={member.key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
            >
              <div className="mb-6">
                <img
                  src={member.image}
                  alt={t(`about.team.${member.key}.name`)}
                  className="w-48 h-48 rounded-full mx-auto object-cover shadow-lg border-4 border-borealis-100 dark:border-borealis-800"
                />
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {t(`about.team.${member.key}.name`)}
                </h3>
                <p className="text-borealis-600 dark:text-borealis-400 font-medium mb-4">
                  {t(`about.team.${member.key}.role`)}
                </p>
                <div className="mt-4 text-left">
                  <p className="text-gray-600 dark:text-gray-300 text-sm whitespace-pre-line">
                    {t(`about.team.${member.key}.bio`)}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
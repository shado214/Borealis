import React from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Building2, Brain } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    translationKey: 'desktop'
  },
  {
    icon: Building2,
    translationKey: 'enterprise'
  },
  {
    icon: Brain,
    translationKey: 'consulting'
  }
];

export default function Services() {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('services.title')}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.translationKey}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <service.icon className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">
                {t(`services.${service.translationKey}.title`)}
              </h3>
              <p className="text-gray-600">
                {t(`services.${service.translationKey}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
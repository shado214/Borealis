import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Monitor, Building2, Database, Globe, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    icon: Monitor,
    translationKey: 'desktop',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
  },
  {
    icon: Building2,
    translationKey: 'enterprise',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
  },
  {
    icon: Database,
    translationKey: 'database',
    color: 'text-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
  },
  {
    icon: Globe,
    translationKey: 'web',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
  }
];

interface ServiceCardProps {
  service: typeof services[0];
  index: number;
}

function ServiceCard({ service, index }: ServiceCardProps) {
  const { t } = useTranslation();
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div 
        className="p-6 cursor-pointer"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className={`p-3 rounded-lg ${service.bgColor}`}>
              <service.icon className={`h-6 w-6 ${service.color}`} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {t(`services.${service.translationKey}.title`)}
            </h3>
          </div>
          <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </button>
        </div>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          {t(`services.${service.translationKey}.description`)}
        </p>
      </div>

      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 border-t border-gray-100 dark:border-gray-700 mt-4 pt-4">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                Key Features
              </h4>
              <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                <li>Feature 1 for {service.translationKey}</li>
                <li>Feature 2 for {service.translationKey}</li>
                <li>Feature 3 for {service.translationKey}</li>
              </ul>
              
              <button className="mt-4 px-4 py-2 bg-borealis-500 text-white rounded-lg hover:bg-borealis-600 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section className="min-h-screen pt-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {services.length} Powerful Solutions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Comprehensive services tailored to your needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.translationKey} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
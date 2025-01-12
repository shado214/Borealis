import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  
  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/mission', label: t('nav.mission') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/portfolio', label: t('nav.portfolio') },
    { path: '/contact', label: t('nav.contact') },
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/borealis-logo.png" 
              alt="Borealis Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              {t('brand.name')}
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-gray-700 dark:text-gray-300 hover:text-borealis-500 dark:hover:text-borealis-400 transition-colors duration-200 ${
                  location.pathname === link.path ? 'text-borealis-500 dark:text-borealis-400 font-medium' : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
            <button
              onClick={toggleLanguage}
              className="px-4 py-2 rounded-md bg-borealis-500 text-white hover:bg-borealis-600 transition-colors"
            >
              {i18n.language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
          >
            {isOpen ? (
              <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-borealis-500 dark:hover:text-borealis-400 ${
                  location.pathname === link.path ? 'text-borealis-500 dark:text-borealis-400' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center space-x-4 px-3 py-2">
              <ThemeToggle />
              <button
                onClick={toggleLanguage}
                className="px-4 py-2 rounded-md bg-borealis-500 text-white hover:bg-borealis-600"
              >
                {i18n.language === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
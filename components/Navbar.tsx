import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { Language } from '../types';
import { Globe, Moon, Sun, Menu, Terminal } from 'lucide-react';

const Navbar: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-mv-black/80 border-b border-mv-panel">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-mv-steel to-mv-wine rounded-lg flex items-center justify-center">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <div className="hidden md:block">
              <span className="text-2xl font-serif font-bold text-white tracking-wider">MOTORVERSE</span>
              <span className="text-xs text-mv-steel block uppercase tracking-[0.2em]">Intelligence Platform</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-sm font-medium text-mv-silver hover:text-white transition-colors">{t('nav.home')}</a>
            <a href="#" className="text-sm font-medium text-mv-silver hover:text-white transition-colors">{t('nav.models')}</a>
            <a href="#" className="text-sm font-medium text-mv-silver hover:text-white transition-colors">{t('nav.compare')}</a>
            <span className="px-3 py-1 rounded-full bg-mv-wine/20 text-mv-wine text-xs border border-mv-wine/50 font-bold tracking-wide">
              {t('nav.ai')} v2.0
            </span>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button 
              onClick={() => setLanguage(language === Language.EN ? Language.ES : Language.EN)}
              className="p-2 text-mv-smoke hover:text-white transition-colors flex items-center gap-2"
            >
              <Globe className="w-5 h-5" />
              <span className="text-xs font-bold">{language.toUpperCase()}</span>
            </button>

            {/* Theme Toggle */}
            <button 
              onClick={toggleTheme}
              className="p-2 text-mv-smoke hover:text-white transition-colors"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            
            <button className="md:hidden p-2 text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

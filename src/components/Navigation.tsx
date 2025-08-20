import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Globe, Home, Users, Palette, Wrench, Quote, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { language, setLanguage, t, direction } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'ar' : 'en');
  };

  const navItems = [
    { key: 'nav.home', href: '#hero', icon: Home },
    { key: 'nav.about', href: '#about', icon: Users },
    { key: 'nav.services', href: '#services', icon: Palette },
    { key: 'nav.factory', href: '#factory', icon: Wrench },
    { key: 'nav.slogan', href: '#slogan', icon: Quote },
    { key: 'nav.contact', href: '#contact', icon: MessageCircle },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`text-2xl font-bold text-accent ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`}>
              {language === 'ar' ? 'الروشن الثاني' : 'Al Roshan Al-Thani'}
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-foreground hover:text-accent transition-colors duration-300 font-medium"
              >
                {t(item.key)}
              </button>
            ))}
          </div>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              className="text-primary-foreground hover:text-accent hover:bg-accent/10"
            >
              <Globe className="h-4 w-4 mr-2 rtl:mr-0 rtl:ml-2" />
              {language === 'en' ? 'العربية' : 'English'}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden text-primary-foreground hover:text-accent relative group"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="relative w-6 h-6 flex flex-col justify-center items-center">
                {/* Top line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
                  isOpen ? 'rotate-45 translate-y-1.5' : 'rotate-0 translate-y-0'
                }`}></div>
                
                {/* Middle line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isOpen ? 'opacity-0 scale-x-0' : 'opacity-100 scale-x-100'
                }`}></div>
                
                {/* Bottom line */}
                <div className={`w-6 h-0.5 bg-current transition-all duration-300 ease-in-out mt-1 ${
                  isOpen ? '-rotate-45 -translate-y-1.5' : 'rotate-0 translate-y-0'
                }`}></div>
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation - Redesigned */}
        <div className={`lg:hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
          {/* Backdrop Blur Overlay */}
          {isOpen && (
            <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40" onClick={() => setIsOpen(false)}></div>
          )}
          
          <div className="bg-gradient-to-b from-primary/98 to-primary/95 backdrop-blur-xl border-t border-accent/20 rounded-b-3xl shadow-2xl relative z-50">
            {/* Header Section */}
            <div className="p-6 border-b border-accent/10">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                    <Globe className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-accent/70 font-medium">
                      {direction === 'rtl' ? 'اللغة' : 'Language'}
                    </p>
                    <p className={`text-lg font-bold text-primary-foreground ${
                      direction === 'rtl' ? 'font-arabic' : 'font-english'
                    }`}>
                      {language === 'en' ? 'English' : 'العربية'}
                    </p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={toggleLanguage}
                  className="bg-accent/10 hover:bg-accent/20 text-accent border border-accent/20"
                >
                  {language === 'en' ? 'العربية' : 'English'}
                </Button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="p-4 space-y-2">
              {navItems.map((item, index) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className={`group w-full p-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg ${
                    isOpen ? 'animate-slide-in-up' : ''
                  }`}
                  style={{
                    animationDelay: `${index * 100}ms`,
                    background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(30, 41, 59, 0.05) 100%)',
                    border: '1px solid rgba(245, 158, 11, 0.1)'
                  }}
                >
                  <div className="flex items-center space-x-4 rtl:space-x-reverse">
                    <div className="w-12 h-12 bg-accent/20 rounded-xl flex items-center justify-center group-hover:bg-accent/30 transition-all duration-300 group-hover:scale-110">
                      <item.icon className="h-6 w-6 text-accent group-hover:text-accent-dark transition-colors duration-300" />
                    </div>
                    <div className="flex-1 text-left rtl:text-right">
                      <p className={`text-lg font-semibold text-primary-foreground group-hover:text-accent transition-colors duration-300 ${
                        direction === 'rtl' ? 'font-arabic' : 'font-english'
                      }`}>
                        {t(item.key)}
                      </p>
                      <p className="text-sm text-accent/70 group-hover:text-accent/90 transition-colors duration-300">
                        {direction === 'rtl' ? 'انقر للانتقال' : 'Click to navigate'}
                      </p>
                    </div>
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300">
                      <div className="w-2 h-2 bg-accent rounded-full group-hover:scale-150 transition-transform duration-300"></div>
                    </div>
                  </div>
                </button>
              ))}
            </div>

            {/* Footer Section */}
            <div className="p-6 border-t border-accent/10 bg-gradient-to-t from-accent/5 to-transparent">
              <div className="text-center">
                <p className="text-sm text-accent/70 mb-2">
                  {direction === 'rtl' ? 'مؤسسة الروشن الثاني' : 'Al Roshan Al-Thani'}
                </p>
                <p className="text-xs text-accent/50">
                  {direction === 'rtl' ? 'التزام هو علامتنا الفارقة' : 'Commitment is our hallmark'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
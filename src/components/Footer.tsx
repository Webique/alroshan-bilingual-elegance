import React from 'react';
import { Instagram, MessageCircle, Mail, Phone } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t, direction } = useLanguage();

  const quickLinks = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.factory', href: '#factory' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: 'https://instagram.com/alroshan.2',
      label: '@alroshan.2'
    },
    {
      icon: Instagram,
      href: 'https://instagram.com/roshen2svg',
      label: '@roshen2svg'
    },
    {
      icon: MessageCircle,
      href: 'https://tiktok.com/@allrosen',
      label: 'allrosen'
    },
    {
      icon: Mail,
      href: 'mailto:Allroshan.j2@gmail.com',
      label: 'Email'
    },
    {
      icon: Phone,
      href: 'tel:+966544516010',
      label: '054 451 6010'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="container mx-auto container-padding py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className={`text-2xl font-bold text-accent mb-4 ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {direction === 'rtl' ? 'مؤسسة الروشن الثاني' : 'Al Roshan Al-Thani'}
            </h3>
            <p className={`text-primary-foreground/80 leading-relaxed mb-6 max-w-md ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {direction === 'rtl' 
                ? 'حلول متكاملة في عالم الديكور الداخلي بأعلى معايير الجودة والالتزام.'
                : 'Integrated solutions in the world of interior décor with the highest standards of quality and commitment.'
              }
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-sm">Allroshan.j2@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-sm">054 451 6010 | 056 790 9803</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold text-accent mb-4 ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {t('footer.links')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className={`text-primary-foreground/80 hover:text-accent transition-colors duration-300 text-left rtl:text-right ${
                      direction === 'rtl' ? 'font-arabic' : 'font-english'
                    }`}
                  >
                    {t(link.key)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className={`text-lg font-bold text-accent mb-4 ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {t('footer.social')}
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center space-x-3 rtl:space-x-reverse text-primary-foreground/80 hover:text-accent transition-colors duration-300 group"
                >
                  <social.icon className="h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-light/20">
        <div className="container mx-auto container-padding py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className={`text-primary-foreground/60 text-sm ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {t('footer.copyright')}
            </p>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                <span className={`text-sm text-primary-foreground/80 ${
                  direction === 'rtl' ? 'font-arabic' : 'font-english'
                }`}>
                  {direction === 'rtl' ? 'الالتزام هو علامتنا الفارقة' : 'Commitment is our hallmark'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
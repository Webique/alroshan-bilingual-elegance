import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-interior.jpg';

const Hero = () => {
  const { t, direction } = useLanguage();

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const ArrowIcon = direction === 'rtl' ? ArrowLeft : ArrowRight;

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Luxury Interior Design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-hero"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          {/* Main Title */}
          <h1 className={`text-hero text-primary-foreground mb-6 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.title')}
          </h1>

          {/* Subtitle */}
          <p className={`text-large text-primary-foreground/90 mb-12 leading-relaxed ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('hero.subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-6 justify-center items-center ${
            direction === 'rtl' ? 'sm:flex-row-reverse' : ''
          }`}>
            <Button
              onClick={() => scrollToSection('#services')}
              className="btn-gold group"
            >
              {t('hero.cta.services')}
              <ArrowIcon className={`ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5 transition-transform group-hover:translate-x-1 ${
                direction === 'rtl' ? 'group-hover:-translate-x-1' : ''
              }`} />
            </Button>
            
            <Button
              onClick={() => window.open('https://wa.me/966544516010', '_blank')}
              variant="outline"
              className="btn-outline-gold"
            >
              {t('hero.cta.contact')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
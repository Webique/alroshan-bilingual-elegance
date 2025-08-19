import React from 'react';
import { Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Slogan = () => {
  const { t, direction } = useLanguage();

  return (
    <section id="slogan" className="section-padding bg-primary-gradient text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-accent rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-accent rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/30 rounded-full"></div>
      </div>

      <div className="container mx-auto container-padding relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Quote Icon */}
          <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Quote className="h-10 w-10 text-accent" />
          </div>

          {/* Title */}
          <h2 className={`text-section-title mb-8 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('slogan.title')}
          </h2>

          {/* Main Slogan */}
          <blockquote className={`text-hero leading-relaxed mb-8 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            "{t('slogan.text')}"
          </blockquote>

          {/* Decorative Line */}
          <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>

          {/* Additional Content */}
          <div className="mt-12 grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {direction === 'rtl' ? '٢٤/٧' : '24/7'}
              </div>
              <div className={`text-lg ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`}>
                {direction === 'rtl' ? 'خدمة مستمرة' : 'Continuous Service'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {direction === 'rtl' ? '١٠٠٪' : '100%'}
              </div>
              <div className={`text-lg ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`}>
                {direction === 'rtl' ? 'التزام بالجودة' : 'Quality Commitment'}
              </div>
            </div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">
                {direction === 'rtl' ? '١٥+' : '15+'}
              </div>
              <div className={`text-lg ${direction === 'rtl' ? 'font-arabic' : 'font-english'}`}>
                {direction === 'rtl' ? 'سنة خبرة' : 'Years Experience'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slogan;
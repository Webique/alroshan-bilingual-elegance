import React from 'react';
import { CheckCircle, Star, Award, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const About = () => {
  const { t, direction } = useLanguage();

  const features = [
    { icon: CheckCircle, key: 'Quality Assurance' },
    { icon: Star, key: 'Premium Materials' },
    { icon: Award, key: 'Expert Team' },
    { icon: Users, key: 'Client Satisfaction' },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className={`space-y-8 ${direction === 'rtl' ? 'lg:order-2' : ''}`}>
            <div>
              <h2 className={`text-section-title text-primary mb-6 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {t('about.title')}
              </h2>
              <p className={`text-large text-muted-foreground leading-relaxed ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {t('about.description')}
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className={`font-medium text-primary ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {feature.key}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Image/Visual */}
          <div className={`relative ${direction === 'rtl' ? 'lg:order-1' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <div className="aspect-[4/3] bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <div className="text-center text-primary-foreground p-8">
                  <div className="text-6xl font-bold mb-4">15+</div>
                  <div className={`text-xl font-medium ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {direction === 'rtl' ? 'سنة من الخبرة' : 'Years of Excellence'}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/20 rounded-full blur-xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/10 rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
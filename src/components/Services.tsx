import React from 'react';
import { Palette, Hammer, Sofa, Eye, Package } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import servicesImage from '@/assets/services-interior.jpg';

const Services = () => {
  const { t, direction } = useLanguage();

  const services = [
    { 
      icon: Palette, 
      title: t('services.design'),
      description: direction === 'rtl' ? 'تصميم داخلي مبتكر ومخصص' : 'Innovative and customized interior design'
    },
    { 
      icon: Hammer, 
      title: t('services.execution'),
      description: direction === 'rtl' ? 'تنفيذ احترافي بأعلى المعايير' : 'Professional execution with highest standards'
    },
    { 
      icon: Sofa, 
      title: t('services.furnishing'),
      description: direction === 'rtl' ? 'أثاث وتأثيث عالي الجودة' : 'High-quality furniture and furnishing'
    },
    { 
      icon: Eye, 
      title: t('services.supervision'),
      description: direction === 'rtl' ? 'إشراف ومتابعة مستمرة' : 'Continuous supervision and monitoring'
    },
    { 
      icon: Package, 
      title: t('services.materials'),
      description: direction === 'rtl' ? 'توفير جميع مستلزمات الديكور' : 'Supply of all décor materials'
    },
  ];

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-section-title text-primary mb-6 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('services.title')}
          </h2>
          <p className={`text-large text-muted-foreground max-w-3xl mx-auto ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('services.description')}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="card-luxury p-8 text-center group">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-accent" />
              </div>
              <h3 className={`text-xl font-bold text-primary mb-4 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {service.title}
              </h3>
              <p className={`text-muted-foreground leading-relaxed ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Services Showcase */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`relative ${direction === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={servicesImage} 
                alt="Interior Design Services"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            </div>
          </div>

          <div className={`space-y-6 ${direction === 'rtl' ? 'lg:order-1' : ''}`}>
            <h3 className={`text-3xl font-bold text-primary ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {direction === 'rtl' ? 'خدمات شاملة ومتكاملة' : 'Comprehensive & Integrated Services'}
            </h3>
            <p className={`text-lg text-muted-foreground leading-relaxed ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {direction === 'rtl' 
                ? 'نوفر حلولاً شاملة تغطي جميع جوانب التصميم الداخلي من التخطيط الأولي وحتى التسليم النهائي، مع ضمان الجودة والالتزام بالمواعيد.'
                : 'We provide comprehensive solutions covering all aspects of interior design from initial planning to final delivery, ensuring quality and commitment to deadlines.'
              }
            </p>
            
            <div className="flex items-center space-x-6 rtl:space-x-reverse">
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">100+</div>
                <div className={`text-sm text-muted-foreground ${
                  direction === 'rtl' ? 'font-arabic' : 'font-english'
                }`}>
                  {direction === 'rtl' ? 'مشروع مكتمل' : 'Projects Completed'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-accent">99%</div>
                <div className={`text-sm text-muted-foreground ${
                  direction === 'rtl' ? 'font-arabic' : 'font-english'
                }`}>
                  {direction === 'rtl' ? 'رضا العملاء' : 'Client Satisfaction'}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
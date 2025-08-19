import React from 'react';
import { Wrench, Settings, Shield, Clock } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import factoryImage from '@/assets/afe26e56-d0c7-4a7e-8f72-ca9e76dbb7cf.jpg';

const Factory = () => {
  const { t, direction } = useLanguage();

  const features = [
    {
      icon: Wrench,
      title: direction === 'rtl' ? 'تصنيع متخصص' : 'Specialized Manufacturing',
      description: direction === 'rtl' ? 'تصنيع جميع احتياجات الأسقف' : 'Manufacturing all ceiling requirements'
    },
    {
      icon: Settings,
      title: direction === 'rtl' ? 'دقة في التنفيذ' : 'Precision Execution',
      description: direction === 'rtl' ? 'دقة عالية في كل التفاصيل' : 'High precision in every detail'
    },
    {
      icon: Shield,
      title: direction === 'rtl' ? 'جودة مضمونة' : 'Guaranteed Quality',
      description: direction === 'rtl' ? 'معايير جودة عالمية' : 'International quality standards'
    },
    {
      icon: Clock,
      title: direction === 'rtl' ? 'التزام بالمواعيد' : 'Timely Delivery',
      description: direction === 'rtl' ? 'تسليم في الوقت المحدد' : 'On-time delivery commitment'
    }
  ];

  const products = [
    direction === 'rtl' ? 'جسور الجبس بورد' : 'Gypsum Board Bridges',
    direction === 'rtl' ? 'زوايا الأسقف' : 'Ceiling Angles',
    direction === 'rtl' ? 'إكسسوارات الإضاءة' : 'Lighting Accessories',
    direction === 'rtl' ? 'قطع التشطيب' : 'Finishing Pieces'
  ];

  return (
    <section id="factory" className="section-padding bg-muted/30">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-section-title text-primary mb-6 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('factory.title')}
          </h2>
          <p className={`text-large text-muted-foreground max-w-4xl mx-auto leading-relaxed ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('factory.description')}
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Image */}
          <div className={`relative ${direction === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="relative overflow-hidden rounded-2xl shadow-luxury">
              <img 
                src={factoryImage} 
                alt="Factory Manufacturing"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
              
              {/* Overlay Badge */}
              <div className="absolute top-6 left-6 rtl:left-auto rtl:right-6 bg-accent text-accent-foreground px-4 py-2 rounded-lg font-bold">
                {direction === 'rtl' ? 'مصنع الروشن الثاني' : 'Al Roshan Factory'}
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`space-y-8 ${direction === 'rtl' ? 'lg:order-1' : ''}`}>
            <div>
              <h3 className={`text-3xl font-bold text-primary mb-6 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {direction === 'rtl' ? 'تصنيع عالي الجودة' : 'High-Quality Manufacturing'}
              </h3>
              
              {/* Products List */}
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {products.map((product, index) => (
                  <div key={index} className="flex items-center space-x-3 rtl:space-x-reverse">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className={`text-muted-foreground ${
                      direction === 'rtl' ? 'font-arabic' : 'font-english'
                    }`}>
                      {product}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-2 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">500+</div>
                <div className={`text-sm text-muted-foreground ${
                  direction === 'rtl' ? 'font-arabic' : 'font-english'
                }`}>
                  {direction === 'rtl' ? 'منتج شهرياً' : 'Products Monthly'}
                </div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">24/7</div>
                <div className={`text-sm text-muted-foreground ${
                  direction === 'rtl' ? 'font-arabic' : 'font-english'
                }`}>
                  {direction === 'rtl' ? 'خدمة العملاء' : 'Customer Service'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-luxury p-6 text-center">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="h-7 w-7 text-accent" />
              </div>
              <h4 className={`text-lg font-bold text-primary mb-2 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {feature.title}
              </h4>
              <p className={`text-sm text-muted-foreground ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Factory;
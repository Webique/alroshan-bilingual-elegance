import React from 'react';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const { t, direction } = useLanguage();

  const contactInfo = [
    {
      icon: Mail,
      label: direction === 'rtl' ? 'البريد الإلكتروني' : 'Email',
      value: 'Allroshan.j2@gmail.com',
      href: 'mailto:Allroshan.j2@gmail.com'
    },
    {
      icon: Phone,
      label: direction === 'rtl' ? 'الهاتف' : 'Phone',
      value: '054 451 6010',
      href: 'https://wa.me/966544516010'
    },
    {
      icon: Phone,
      label: direction === 'rtl' ? 'هاتف إضافي' : 'Additional Phone',
      value: '056 790 9803',
      href: 'https://wa.me/966567909803'
    }
  ];

  const socialMedia = [
    {
      icon: Instagram,
      label: 'Instagram - @alroshan.2',
      href: 'https://instagram.com/alroshan.2',
      color: 'hover:text-pink-500'
    },
    {
      icon: Instagram,
      label: 'Instagram - @roshen2svg',
      href: 'https://instagram.com/roshen2svg',
      color: 'hover:text-pink-500'
    },
    {
      icon: MessageCircle,
      label: 'TikTok - allrosen',
      href: 'https://tiktok.com/@allrosen',
      color: 'hover:text-blue-500'
    }
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className={`text-section-title text-primary mb-6 ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('contact.title')}
          </h2>
          <p className={`text-large text-muted-foreground ${
            direction === 'rtl' ? 'font-arabic' : 'font-english'
          }`}>
            {t('contact.subtitle')}
          </p>
        </div>

        {/* Contact Information - Centered */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h3 className={`text-2xl font-bold text-primary mb-6 ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {t('contact.info.subtitle')}
            </h3>
            <p className={`text-muted-foreground leading-relaxed ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {direction === 'rtl' 
                ? 'نحن هنا لمساعدتك في تحويل مساحتك إلى تحفة فنية. تواصل معنا للحصول على استشارة مجانية.'
                : 'We are here to help you transform your space into a masterpiece. Contact us for a free consultation.'
              }
            </p>
          </div>

          {/* Contact Details */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.href}
                className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors duration-300">
                  <info.icon className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <div className={`font-medium text-primary mb-2 ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {info.label}
                  </div>
                  <div className="phone-number text-muted-foreground">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Social Media */}
          <div className="text-center">
            <h4 className={`text-lg font-bold text-primary mb-6 ${
              direction === 'rtl' ? 'font-arabic' : 'font-english'
            }`}>
              {t('footer.social')}
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {socialMedia.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground hover:text-accent transition-colors duration-300 ${social.color} p-3 rounded-lg hover:bg-muted/30`}
                >
                  <social.icon className="h-6 w-6" />
                  <span className={direction === 'rtl' ? 'font-arabic' : 'font-english'}>
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
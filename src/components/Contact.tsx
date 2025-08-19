import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { t, direction } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: direction === 'rtl' ? 'خطأ' : 'Error',
        description: direction === 'rtl' ? 'يرجى ملء جميع الحقول المطلوبة' : 'Please fill in all required fields',
        variant: 'destructive'
      });
      return;
    }

    // Here you would typically send the form data to your backend
    toast({
      title: direction === 'rtl' ? 'تم الإرسال بنجاح' : 'Message Sent Successfully',
      description: direction === 'rtl' ? 'سنتواصل معك قريباً' : 'We will contact you soon',
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
      href: 'tel:+966544516010'
    },
    {
      icon: Phone,
      label: direction === 'rtl' ? 'هاتف إضافي' : 'Additional Phone',
      value: '056 790 9803',
      href: 'tel:+966567909803'
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

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`${direction === 'rtl' ? 'lg:order-2' : ''}`}>
            <div className="card-luxury p-8">
              <h3 className={`text-2xl font-bold text-primary mb-6 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {t('contact.info.title')}
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className={`block text-sm font-medium text-primary mb-2 ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('contact.form.name')} *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full"
                    dir={direction}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-primary mb-2 ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('contact.form.email')} *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full"
                    dir={direction}
                    required
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-primary mb-2 ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('contact.form.phone')}
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                    dir={direction}
                  />
                </div>

                <div>
                  <label className={`block text-sm font-medium text-primary mb-2 ${
                    direction === 'rtl' ? 'font-arabic' : 'font-english'
                  }`}>
                    {t('contact.form.message')} *
                  </label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full"
                    dir={direction}
                    required
                  />
                </div>

                <Button type="submit" className="btn-gold w-full">
                  {t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 ${direction === 'rtl' ? 'lg:order-1' : ''}`}>
            <div>
              <h3 className={`text-2xl font-bold text-primary mb-6 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {t('contact.info.subtitle')}
              </h3>
              <p className={`text-muted-foreground leading-relaxed mb-8 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {direction === 'rtl' 
                  ? 'نحن هنا لمساعدتك في تحويل مساحتك إلى تحفة فنية. تواصل معنا للحصول على استشارة مجانية.'
                  : 'We are here to help you transform your space into a masterpiece. Contact us for a free consultation.'
                }
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 rtl:space-x-reverse p-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 group"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className={`font-medium text-primary ${
                      direction === 'rtl' ? 'font-arabic' : 'font-english'
                    }`}>
                      {info.label}
                    </div>
                    <div className="text-muted-foreground">{info.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className={`text-lg font-bold text-primary mb-4 ${
                direction === 'rtl' ? 'font-arabic' : 'font-english'
              }`}>
                {t('footer.social')}
              </h4>
              <div className="flex flex-col space-y-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 rtl:space-x-reverse text-muted-foreground hover:text-accent transition-colors duration-300 ${social.color}`}
                  >
                    <social.icon className="h-5 w-5" />
                    <span className={direction === 'rtl' ? 'font-arabic' : 'font-english'}>
                      {social.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
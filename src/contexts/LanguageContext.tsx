import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.services': 'Services',
    'nav.factory': 'Factory',
    'nav.slogan': 'Slogan',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.title': 'Al Roshan Al-Thani',
    'hero.subtitle': 'Integrated décor solutions with commitment and quality.',
    'hero.cta.services': 'Explore Services',
    'hero.cta.contact': 'Contact Us',
    
    // About Section
    'about.title': 'About Us',
    'about.description': 'Al Roshan Al-Thani Establishment provides integrated solutions in the world of interior décor, covering design, execution, furnishing, and supervision. Our specialized team ensures the highest levels of quality, while we supply a full range of décor materials to suit every taste and requirement.',
    
    // Services Section
    'services.title': 'Our Services',
    'services.description': 'Design, execution, furnishing, supervision of interior décor. Supply of all types of décor materials.',
    'services.design': 'Interior Design',
    'services.execution': 'Project Execution',
    'services.furnishing': 'Furnishing',
    'services.supervision': 'Supervision',
    'services.materials': 'Décor Materials',
    
    // Factory Section
    'factory.title': 'Our Factory',
    'factory.description': 'Al Roshan Al-Thani Factory specializes in manufacturing all ceiling requirements from gypsum board accessories such as bridges, angles, and more — with high quality and precise execution.',
    
    // Slogan Section
    'slogan.title': 'Our Commitment',
    'slogan.text': 'With us, time means commitment… and that is our hallmark.',
    
    // Contact Section
    'contact.title': 'Contact Us',
    'contact.subtitle': 'Get in touch for your next project',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.info.title': 'Get In Touch',
    'contact.info.subtitle': 'Ready to transform your space?',
    
    // Footer
    'footer.copyright': '© 2025 Al Roshan Al-Thani. All rights reserved.',
    'footer.links': 'Quick Links',
    'footer.social': 'Follow Us',
  },
  ar: {
    // Navigation
    'nav.home': 'الصفحة الرئيسية',
    'nav.about': 'من نحن',
    'nav.services': 'خدماتنا',
    'nav.factory': 'المصنع',
    'nav.slogan': 'شعارنا',
    'nav.contact': 'تواصل معنا',
    
    // Hero Section
    'hero.title': 'مؤسسة الروشن الثاني',
    'hero.subtitle': 'حلول متكاملة في عالم الديكور… الالتزام هو علامتنا الفارقة',
    'hero.cta.services': 'خدماتنا',
    'hero.cta.contact': 'تواصل معنا',
    
    // About Section
    'about.title': 'من نحن',
    'about.description': 'تقدم مؤسسة الروشن الثاني حلولًا متكاملة في عالم الديكور الداخلي، تشمل التصميم، التنفيذ، التأثيث، والإشراف، من خلال فريق مختص يضمن أعلى مستويات الجودة. كما نوفر جميع مستلزمات الديكور بمختلف أنواعها لتلبية كافة الأذواق والاحتياجات.',
    
    // Services Section
    'services.title': 'خدماتنا',
    'services.description': 'التصميم، التنفيذ، التأثيث، الإشراف على الديكور الداخلي. توفير جميع مستلزمات الديكور بمختلف أنواعها.',
    'services.design': 'التصميم الداخلي',
    'services.execution': 'تنفيذ المشاريع',
    'services.furnishing': 'التأثيث',
    'services.supervision': 'الإشراف',
    'services.materials': 'مستلزمات الديكور',
    
    // Factory Section
    'factory.title': 'مصنعنا',
    'factory.description': 'يتخصص مصنع الروشن الثاني في تصنيع جميع احتياجات الأسقف من إكسسوارات الجبس بورد مثل الجسور والزوايا وغيرها، بجودة عالية ودقة في الإنجاز.',
    
    // Slogan Section
    'slogan.title': 'التزامنا',
    'slogan.text': 'الوقت لدينا يعني الالتزام… وهذه هي علامتنا الفارقة',
    
    // Contact Section
    'contact.title': 'تواصل معنا',
    'contact.subtitle': 'تواصل معنا لمشروعك القادم',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'الهاتف',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال الرسالة',
    'contact.info.title': 'تواصل معنا',
    'contact.info.subtitle': 'مستعدون لتحويل مساحتك؟',
    
    // Footer
    'footer.copyright': '© 2025 مؤسسة الروشن الثاني. جميع الحقوق محفوظة.',
    'footer.links': 'روابط سريعة',
    'footer.social': 'تابعنا',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  
  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  
  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };
  
  useEffect(() => {
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    
    // Add font class based on language
    if (language === 'ar') {
      document.body.classList.remove('font-english');
      document.body.classList.add('font-arabic');
    } else {
      document.body.classList.remove('font-arabic');
      document.body.classList.add('font-english');
    }
  }, [language, direction]);
  
  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
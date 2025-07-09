
import React, { createContext, useContext, useState } from 'react';

export type Language = 'ar' | 'en' | 'fr';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') as Language || 'ar';
    }
    return 'ar';
  });

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    const translations = getTranslations(language);
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

const getTranslations = (lang: Language): Record<string, string> => {
  const translations = {
    ar: {
      // Navigation
      'nav.home': 'الرئيسية',
      'nav.features': 'الميزات',
      'nav.about': 'من نحن',
      'nav.pricing': 'التسعير',
      'nav.contact': 'اتصل بنا',
      'nav.download': 'حمل التطبيق الآن',
      
      // Hero Section
      'hero.welcome': 'مرحباً بكم في',
      'hero.appName': 'خدام',
      'hero.description': 'مع تطبيقنا، يمكنك تسيير متجرك من المخزون إلى المبيعات باستعمال الهاتف دون الحاجة إلى حاسوب, نظم عملياتك بكل كفاءة',
      'hero.downloadBtn': 'حمل التطبيق الآن',
      'hero.contactBtn': 'تواصل معنا',
      
      // Features
      'features.title': 'مميزات التطبيق',
      'features.subtitle': 'نقدم لك حلولاً متكاملة لإدارة الأعمال والمخزون مع تطبيق سهل الاستخدام',
      'features.barcode.title': 'مسح ضوئي فوري',
      'features.barcode.desc': 'مسح الباركود والتحديثات بصريقة فورية',
      'features.realtime.title': 'تحديث لحظي',
      'features.realtime.desc': 'متابعة التحديثات في جميع فروعك في الوقت الحقيقي',
      'features.reports.title': 'تقارير ذكية',
      'features.reports.desc': 'تحليلات مفصلة لمساعدتك في اتخاذ القرارات',
      'features.interface.title': 'واجهة بسيطة',
      'features.interface.desc': 'تصميم مبدئي لا يحتاج إلى تدريب مسبق',
      'features.support.title': 'دعم متكامل',
      'features.support.desc': 'فريق دعم في جميع مراحل الاستخدام',
      'features.billing.title': 'نظام الفواتير الذكية',
      'features.billing.desc': 'حساب تلقائي لكلفة المنتوج والضرائب مع هامش الربح',
      
      // Pricing
      'pricing.title': 'السعر',
      'pricing.popular': 'الأكثر شعبية',
      'pricing.basic': 'الخطة الأساسية',
      'pricing.description': 'الخطة الأساسية تشمل إشتراك سنوي كامل مع دعم فني ومحديثات مجانية مدة عام',
      'pricing.trial': 'مساعدة تجريبي',
      'pricing.support': 'دعم تقني',
      'pricing.price': 'دج 2000',
      'pricing.year': '/ العام',
      'pricing.feature1': 'دعم تقني',
      'pricing.feature2': 'تحديثات مجانية',
      'pricing.feature3': 'مساعدة تجريبية',
      'pricing.contactBtn': 'تواصل معنا الآن',
      
      // About
      'about.title': 'من نحن',
      'about.description': 'نقدم تطبيقاً متكاملاً لإدارة الأعمال والمخزون، يتيح لك مسح الباركود بسهولة، متابعة المبيعات، وإدارة المخزون بشكل ذكي مع واجهة بسيطة ومقارير فورية. هدفنا هو تغيير الطريقة المتعارف عليها في تسيير المتاجر',
      
      // Contact
      'contact.title': 'تواصل معنا لإنشاء حساب',
      'contact.subtitle': 'تواصل معنا لإنشاء حسابك وابدأ في استخدام التطبيق',
      'contact.phone': 'الهاتف',
      'contact.email': 'البريد الالكتروني',
      'contact.formTitle': 'الرجاء إدخال معلوماتك الشخصية',
      'contact.formSubtitle': 'وسنقوم بالتواصل معك في أقرب وقت',
      'contact.emailPlaceholder': 'أدخل بريدك الالكتروني',
      'contact.namePlaceholder': 'أدخل اسمك الكامل',
      'contact.phonePlaceholder': 'أدخل رقم هاتفك',
      'contact.messagePlaceholder': 'اكتب رسالتك هنا',
      'contact.sendBtn': 'إرسال',
      
      // Stats
      'stats.howTo': 'كيفية استخدام التطبيق',
      'stats.visits': 'عدد زيارات التطبيق',
      'stats.downloads': 'عدد تحميلات التطبيق',
      'stats.welcome': 'مرحبا بك في خدام',
      'stats.chooseOperation': 'الرجاء اختيار العملية',
      'stats.inventory': 'مخزون',
      'stats.statistics': 'احصائيات',
      'stats.sell': 'بيع',
      'stats.settings': 'اعدادات',
      
      // Footer
      'footer.description': 'يقدم حلولاً متطورة لإدارة المخزون والمبيعات لتطوير أعمالك وتحقيق النجاح المستدام',
      'footer.rights': '© 2025 جميع الحقوق محفوظة',
      'footer.privacy': 'سياسة الخصوصية • شروط الخدمة',
      
      // Toast messages
      'toast.success.title': 'تم إرسال الرسالة بنجاح',
      'toast.success.description': 'سنتواصل معك في أقرب وقت ممكن'
    },
    en: {
      // Navigation
      'nav.home': 'Home',
      'nav.features': 'Features',
      'nav.about': 'About Us',
      'nav.pricing': 'Pricing',
      'nav.contact': 'Contact',
      'nav.download': 'Download App Now',
      
      // Hero Section
      'hero.welcome': 'Welcome to',
      'hero.appName': 'Khadame',
      'hero.description': 'With our app, you can manage your store from inventory to sales using your phone without needing a computer. Organize your operations efficiently',
      'hero.downloadBtn': 'Download App Now',
      'hero.contactBtn': 'Contact Us',
      
      // Features
      'features.title': 'App Features',
      'features.subtitle': 'We provide comprehensive solutions for business and inventory management with an easy-to-use application',
      'features.barcode.title': 'Instant Scanning',
      'features.barcode.desc': 'Barcode scanning and instant updates',
      'features.realtime.title': 'Real-time Updates',
      'features.realtime.desc': 'Track updates across all your branches in real-time',
      'features.reports.title': 'Smart Reports',
      'features.reports.desc': 'Detailed analytics to help you make decisions',
      'features.interface.title': 'Simple Interface',
      'features.interface.desc': 'Intuitive design that requires no prior training',
      'features.support.title': 'Complete Support',
      'features.support.desc': 'Support team at all stages of use',
      'features.billing.title': 'Smart Billing System',
      'features.billing.desc': 'Automatic calculation of product cost and taxes with profit margin',
      
      // Pricing
      'pricing.title': 'Pricing',
      'pricing.popular': 'Most Popular',
      'pricing.basic': 'Basic Plan',
      'pricing.description': 'Basic plan includes full annual subscription with technical support and free updates for one year',
      'pricing.trial': 'Trial Support',
      'pricing.support': 'Technical Support',
      'pricing.price': '2000 DZD',
      'pricing.year': '/ year',
      'pricing.feature1': 'Technical Support',
      'pricing.feature2': 'Free Updates',
      'pricing.feature3': 'Trial Support',
      'pricing.contactBtn': 'Contact Us Now',
      
      // About
      'about.title': 'About Us',
      'about.description': 'We provide a comprehensive application for business and inventory management, allowing you to scan barcodes easily, track sales, and manage inventory intelligently with a simple interface and instant reports. Our goal is to change the traditional way of managing stores',
      
      // Contact
      'contact.title': 'Contact Us to Create Account',
      'contact.subtitle': 'Contact us to create your account and start using the app',
      'contact.phone': 'Phone',
      'contact.email': 'Email',
      'contact.formTitle': 'Please enter your personal information',
      'contact.formSubtitle': 'and we will contact you as soon as possible',
      'contact.emailPlaceholder': 'Enter your email',
      'contact.namePlaceholder': 'Enter your full name',
      'contact.phonePlaceholder': 'Enter your phone number',
      'contact.messagePlaceholder': 'Write your message here',
      'contact.sendBtn': 'Send',
      
      // Stats
      'stats.howTo': 'How to Use the App',
      'stats.visits': 'App visits',
      'stats.downloads': 'App downloads',
      'stats.welcome': 'Welcome to Khadame',
      'stats.chooseOperation': 'Please choose operation',
      'stats.inventory': 'Inventory',
      'stats.statistics': 'Statistics',
      'stats.sell': 'Sell',
      'stats.settings': 'Settings',
      
      // Footer
      'footer.description': 'Provides advanced solutions for inventory and sales management to develop your business and achieve sustainable success',
      'footer.rights': '© 2025 All rights reserved',
      'footer.privacy': 'Privacy Policy • Terms of Service',
      
      // Toast messages
      'toast.success.title': 'Message sent successfully',
      'toast.success.description': 'We will contact you as soon as possible'
    },
    fr: {
      // Navigation
      'nav.home': 'Accueil',
      'nav.features': 'Fonctionnalités',
      'nav.about': 'À propos',
      'nav.pricing': 'Tarification',
      'nav.contact': 'Contact',
      'nav.download': 'Télécharger l\'app',
      
      // Hero Section
      'hero.welcome': 'Bienvenue dans',
      'hero.appName': 'Khadame',
      'hero.description': 'Avec notre application, vous pouvez gérer votre magasin de l\'inventaire aux ventes en utilisant votre téléphone sans avoir besoin d\'un ordinateur. Organisez vos opérations efficacement',
      'hero.downloadBtn': 'Télécharger l\'app',
      'hero.contactBtn': 'Nous contacter',
      
      // Features
      'features.title': 'Fonctionnalités de l\'app',
      'features.subtitle': 'Nous fournissons des solutions complètes pour la gestion d\'entreprise et d\'inventaire avec une application facile à utiliser',
      'features.barcode.title': 'Scan instantané',
      'features.barcode.desc': 'Scan de code-barres et mises à jour instantanées',
      'features.realtime.title': 'Mises à jour en temps réel',
      'features.realtime.desc': 'Suivez les mises à jour dans toutes vos succursales en temps réel',
      'features.reports.title': 'Rapports intelligents',
      'features.reports.desc': 'Analyses détaillées pour vous aider à prendre des décisions',
      'features.interface.title': 'Interface simple',
      'features.interface.desc': 'Design intuitif qui ne nécessite aucune formation préalable',
      'features.support.title': 'Support complet',
      'features.support.desc': 'Équipe de support à toutes les étapes d\'utilisation',
      'features.billing.title': 'Système de facturation intelligent',
      'features.billing.desc': 'Calcul automatique du coût du produit et des taxes avec marge bénéficiaire',
      
      // Pricing
      'pricing.title': 'Tarification',
      'pricing.popular': 'Le plus populaire',
      'pricing.basic': 'Plan de base',
      'pricing.description': 'Le plan de base comprend un abonnement annuel complet avec support technique et mises à jour gratuites pendant un an',
      'pricing.trial': 'Support d\'essai',
      'pricing.support': 'Support technique',
      'pricing.price': '2000 DZD',
      'pricing.year': '/ an',
      'pricing.feature1': 'Support technique',
      'pricing.feature2': 'Mises à jour gratuites',
      'pricing.feature3': 'Support d\'essai',
      'pricing.contactBtn': 'Nous contacter',
      
      // About
      'about.title': 'À propos de nous',
      'about.description': 'Nous fournissons une application complète pour la gestion d\'entreprise et d\'inventaire, vous permettant de scanner facilement les codes-barres, suivre les ventes et gérer l\'inventaire intelligemment avec une interface simple et des rapports instantanés. Notre objectif est de changer la façon traditionnelle de gérer les magasins',
      
      // Contact
      'contact.title': 'Contactez-nous pour créer un compte',
      'contact.subtitle': 'Contactez-nous pour créer votre compte et commencer à utiliser l\'app',
      'contact.phone': 'Téléphone',
      'contact.email': 'Email',
      'contact.formTitle': 'Veuillez saisir vos informations personnelles',
      'contact.formSubtitle': 'et nous vous contacterons dès que possible',
      'contact.emailPlaceholder': 'Entrez votre email',
      'contact.namePlaceholder': 'Entrez votre nom complet',
      'contact.phonePlaceholder': 'Entrez votre numéro de téléphone',
      'contact.messagePlaceholder': 'Écrivez votre message ici',
      'contact.sendBtn': 'Envoyer',
      
      // Stats
      'stats.howTo': 'Comment utiliser l\'app',
      'stats.visits': 'Visites de l\'app',
      'stats.downloads': 'Téléchargements de l\'app',
      'stats.welcome': 'Bienvenue dans Khadame',
      'stats.chooseOperation': 'Veuillez choisir l\'opération',
      'stats.inventory': 'Inventaire',
      'stats.statistics': 'Statistiques',
      'stats.sell': 'Vendre',
      'stats.settings': 'Paramètres',
      
      // Footer
      'footer.description': 'Fournit des solutions avancées pour la gestion d\'inventaire et de ventes pour développer votre entreprise et atteindre un succès durable',
      'footer.rights': '© 2025 Tous droits réservés',
      'footer.privacy': 'Politique de confidentialité • Conditions de service',
      
      // Toast messages
      'toast.success.title': 'Message envoyé avec succès',
      'toast.success.description': 'Nous vous contacterons dès que possible'
    }
  };
  
  return translations[lang] || translations.ar;
};

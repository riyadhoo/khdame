
import { Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Footer = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/khdame_app?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==', '_blank');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/share/1Ddk5rzTrL/', '_blank');
  };

  return (
    <footer className="bg-card text-foreground py-12 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className={`mb-6 md:mb-0 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
            <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-8 w-auto mb-2 mx-auto md:mx-0" />
            <p className="text-muted-foreground text-sm sm:text-base">{t('footer.description')}</p>
          </div>
          <div className="flex space-x-4 space-x-reverse">
            <div 
              className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer"
              onClick={handleFacebookClick}
            >
              <Facebook className="w-5 h-5 text-white" />
            </div>
            <div 
              className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer"
              onClick={handleInstagramClick}
            >
              <Instagram className="w-5 h-5 text-white" />
            </div>
          </div>
        </div>
        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground">{t('footer.rights')}</p>
          <p className="text-muted-foreground text-sm mt-2">{t('footer.privacy')}</p>
        </div>
      </div>
    </footer>
  );
};

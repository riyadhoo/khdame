
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useDownload } from "@/hooks/useDownload";

export const HeroSection = () => {
  const { t, language } = useLanguage();
  const { handleDownload } = useDownload();
  const isRTL = language === 'ar';

  return (
    <section id="home" className="bg-gradient-to-br from-muted via-background to-muted text-foreground py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 arabic-title leading-tight">
              {t('hero.welcome')} 
              <span className="text-gradient-blue"> {t('hero.appName')}</span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed">{t('hero.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleDownload} size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg">
                {!isRTL && <ArrowLeft className="mr-2 h-5 w-5" />}
                {t('hero.downloadBtn')}
                {isRTL && <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />}
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                {t('hero.contactBtn')}
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center relative">
            {/* Floating App Screenshots */}
            <div className="relative">
              {/* Main Dashboard Screenshot */}
              <div className="relative z-20 animate-float">
                <img src="/lovable-uploads/48e8cd7b-0f6a-467a-b66b-86c6bcd10007.png" alt="Khadame App Dashboard" className="w-48 sm:w-64 h-auto rounded-3xl shadow-2xl" />
              </div>
              
              {/* Barcode Scanner Screenshot - Positioned to the right and slightly behind */}
              <div className="absolute -right-16 sm:-right-20 top-16 z-10 animate-float-delayed">
                <img src="/lovable-uploads/27bd8bf2-1bea-454d-8218-9b3669141b31.png" alt="Khadame Barcode Scanner" className="w-36 sm:w-48 h-auto rounded-3xl shadow-xl transform rotate-12" />
              </div>
              
              {/* Background gradient circles */}
              <div className="absolute w-64 sm:w-80 h-64 sm:h-80 bg-gradient-blue rounded-full opacity-10 -top-10 -left-10 z-0"></div>
              <div className="absolute w-72 sm:w-96 h-72 sm:h-96 bg-blue-600 rounded-full opacity-5 -bottom-10 -right-10 z-0"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

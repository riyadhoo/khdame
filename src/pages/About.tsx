
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

const About = () => {
  const { t, language } = useLanguage();

  const handleDownload = () => {
    window.open('http://khdame.com/download', '_blank');
  };

  const isRTL = language === 'ar';

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <Link to="/">
                <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-14 w-auto" />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</Link>
              <Link to="/about" className="text-primary font-medium">{t('nav.about')}</Link>
              <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-2 space-x-reverse">
              <ThemeToggle />
              <LanguageSelector />
              <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                {t('nav.download')}
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('about.title')}</h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950 dark:to-blue-900 rounded-3xl p-8 flex items-center justify-center">
                <img src="/lovable-uploads/8dc102ff-3709-49f9-9be1-793315dd737c.png" alt={t('about.title')} className="w-full max-w-md h-auto animate-float" />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className={isRTL ? "text-right" : "text-left"}>
                <div className="text-4xl sm:text-6xl font-bold text-gradient-blue mb-4 arabic-title">{t('hero.appName')}</div>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  {t('about.description')}
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                    {t('hero.downloadBtn')}
                  </Button>
                  <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                    <Link to="/contact">{t('hero.contactBtn')}</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

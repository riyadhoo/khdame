
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { useDownload } from "@/hooks/useDownload";

export const Header = () => {
  const { t, language } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { handleDownload } = useDownload();
  const isRTL = language === 'ar';

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4 space-x-reverse">
            <Link to="/">
              <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-14 w-auto" />
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 space-x-reverse">
            <Link to="/" className="text-primary font-medium">{t('nav.home')}</Link>
            <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.features')}</a>
            <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
            <Link to="/marketplace" className="text-muted-foreground hover:text-primary transition-colors">
              {isRTL ? "السوق" : "Marketplace"}
            </Link>
            <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.pricing')}</a>
            <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</Link>
          </div>
          
          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-2 space-x-reverse">
            <ThemeToggle />
            <LanguageSelector />
            <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90 text-primary-foreground">
              {t('nav.download')}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-2 space-x-reverse">
            <ThemeToggle />
            <LanguageSelector />
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side={isRTL ? "right" : "left"} className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className={isRTL ? "text-right" : "text-left"}>
                    <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-10 w-auto" />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  <Link to="/" onClick={() => setMobileMenuOpen(false)} className={`text-lg text-primary font-medium transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('nav.home')}
                  </Link>
                  <button onClick={() => handleNavClick('#features')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('nav.features')}
                  </button>
                  <Link to="/about" onClick={() => setMobileMenuOpen(false)} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('nav.about')}
                  </Link>
                  <Link to="/marketplace" onClick={() => setMobileMenuOpen(false)} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {isRTL ? "السوق" : "Marketplace"}
                  </Link>
                  <button onClick={() => handleNavClick('#pricing')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('nav.pricing')}
                  </button>
                  <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                    {t('nav.contact')}
                  </Link>
                  <div className="pt-4 border-t">
                    <Button onClick={handleDownload} className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      {t('nav.download')}
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

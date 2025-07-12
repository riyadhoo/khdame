
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
import { Package, Smartphone, TrendingUp, Receipt } from "lucide-react";

const About = () => {
  const { t, language } = useLanguage();

  const handleDownload = () => {
    window.open('http://khdame.com/download', '_blank');
  };

  const isRTL = language === 'ar';

  const features = [
    {
      icon: Package,
      title: "إدارة المخزون وتتبع الكميات",
      titleEn: "Inventory Management and Quantity Tracking",
      titleFr: "Gestion d'inventaire et suivi des quantités"
    },
    {
      icon: Smartphone,
      title: "بيع المنتجات عبر مسح رمز QR عند الدفع",
      titleEn: "Sell products by scanning QR code at payment",
      titleFr: "Vendre des produits en scannant le code QR au paiement"
    },
    {
      icon: TrendingUp,
      title: "متابعة الإحصائيات والمداخيل بشكل فوري",
      titleEn: "Track statistics and income instantly",
      titleFr: "Suivre les statistiques et les revenus instantanément"
    },
    {
      icon: Receipt,
      title: "تنظيم عمليات البيع اليومية بطريقة سلسة",
      titleEn: "Organize daily sales operations smoothly",
      titleFr: "Organiser les opérations de vente quotidiennes en douceur"
    }
  ];

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

      {/* New Arabic Content Section */}
      {language === 'ar' && (
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">عن تطبيق خدامي</h2>
            </div>
            
            <div className="grid gap-8 lg:gap-12">
              {/* Why We Created Khadami */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-right arabic-title">لماذا أنشأنا خدامي؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-right">
                    أنشأنا تطبيق خدامي لمساعدة أصحاب المتاجر على إدارة مخزونهم وعمليات البيع بشكل أسهل وأذكى. لاحظنا أن الكثير من التجار يعانون من فوضى في تتبع المنتجات، الحسابات، والمداخيل اليومية، لذلك قمنا بتطوير حل عملي وبسيط في تطبيق واحد.
                  </p>
                </CardContent>
              </Card>

              {/* What Problem Does It Solve */}
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-right arabic-title">ما المشكلة التي يحلّها؟</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed text-right mb-8">
                    خدامي يسهل على التاجر:
                  </p>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background border">
                        <div className="flex-shrink-0">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div className="text-right">
                          <p className="text-foreground font-medium leading-relaxed">
                            {feature.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-lg text-foreground leading-relaxed text-right font-medium">
                      بفضل خدامي، يصبح تنظيم متجرك أسهل، وتبقى دائمًا على اطلاع بمخزونك وأرباحك.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* English/French equivalent content */}
      {language !== 'ar' && (
        <section className="py-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                {language === 'en' ? 'About Khadami App' : 'À propos de l\'application Khadami'}
              </h2>
            </div>
            
            <div className="grid gap-8 lg:gap-12">
              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {language === 'en' ? 'Why We Created Khadami?' : 'Pourquoi avons-nous créé Khadami ?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {language === 'en' 
                      ? 'We created the Khadami app to help store owners manage their inventory and sales operations more easily and intelligently. We noticed that many merchants suffer from chaos in tracking products, accounts, and daily income, so we developed a practical and simple solution in one application.'
                      : 'Nous avons créé l\'application Khadami pour aider les propriétaires de magasins à gérer leur inventaire et leurs opérations de vente plus facilement et intelligemment. Nous avons remarqué que de nombreux commerçants souffrent du chaos dans le suivi des produits, des comptes et des revenus quotidiens, nous avons donc développé une solution pratique et simple dans une seule application.'
                    }
                  </p>
                </CardContent>
              </Card>

              <Card className="p-8">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    {language === 'en' ? 'What Problem Does It Solve?' : 'Quel problème résout-il ?'}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {language === 'en' ? 'Khadami makes it easier for merchants to:' : 'Khadami facilite aux commerçants :'}
                  </p>
                  
                  <div className="grid gap-6 md:grid-cols-2">
                    {features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-background border">
                        <div className="flex-shrink-0">
                          <feature.icon className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <p className="text-foreground font-medium leading-relaxed">
                            {language === 'en' ? feature.titleEn : feature.titleFr}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-6 bg-primary/10 rounded-lg border border-primary/20">
                    <p className="text-lg text-foreground leading-relaxed font-medium">
                      {language === 'en' 
                        ? 'Thanks to Khadami, organizing your store becomes easier, and you always stay informed about your inventory and profits.'
                        : 'Grâce à Khadami, organiser votre magasin devient plus facile, et vous restez toujours informé de votre inventaire et de vos profits.'
                      }
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default About;

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Phone, Mail, CheckCircle, BarChart3, Package, Users, Settings, Smartphone, Facebook, Instagram, ArrowLeft, Star, Truck, HeadphonesIcon, Database, PieChart, QrCode, ShoppingCart, Menu, X } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t, language } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    message: ""
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('toast.success.title'),
      description: t('toast.success.description')
    });
    setFormData({
      email: "",
      fullName: "",
      phone: "",
      message: ""
    });
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  const handleDownload = () => {
    window.open('http://khdame.com/download', '_blank');
  };

  const features = [{
    icon: <QrCode className="w-12 h-12 text-blue-600" />,
    title: t('features.barcode.title'),
    description: t('features.barcode.desc')
  }, {
    icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
    title: t('features.realtime.title'),
    description: t('features.realtime.desc')
  }, {
    icon: <PieChart className="w-12 h-12 text-blue-600" />,
    title: t('features.reports.title'),
    description: t('features.reports.desc')
  }, {
    icon: <Smartphone className="w-12 h-12 text-blue-600" />,
    title: t('features.interface.title'),
    description: t('features.interface.desc')
  }, {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: t('features.support.title'),
    description: t('features.support.desc')
  }, {
    icon: <Settings className="w-12 h-12 text-blue-600" />,
    title: t('features.billing.title'),
    description: t('features.billing.desc')
  }];

  const stats = [{
    number: "3625",
    label: t('stats.visits')
  }, {
    number: "578",
    label: t('stats.downloads')
  }];

  const isRTL = language === 'ar';

  return <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card shadow-sm sticky top-0 z-50 border-b">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-14 w-auto" />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.home')}</a>
              <a href="#features" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.features')}</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</a>
              <a href="#pricing" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.pricing')}</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.contact')}</a>
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
                    <button onClick={() => handleNavClick('#home')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('nav.home')}
                    </button>
                    <button onClick={() => handleNavClick('#features')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('nav.features')}
                    </button>
                    <button onClick={() => handleNavClick('#about')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('nav.about')}
                    </button>
                    <button onClick={() => handleNavClick('#pricing')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('nav.pricing')}
                    </button>
                    <button onClick={() => handleNavClick('#contact')} className={`text-lg text-muted-foreground hover:text-primary transition-colors py-2 ${isRTL ? 'text-right' : 'text-left'}`}>
                      {t('nav.contact')}
                    </button>
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

      {/* Hero Section */}
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

      {/* Features Section */}
      <section id="features" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('features.title')}</h2>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t('features.subtitle')}
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-background">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-muted/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('pricing.title')}</h2>
          </div>
          <Card className="bg-gradient-blue text-white relative overflow-hidden max-w-md mx-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardContent className="p-6 sm:p-8 text-center">
              <Badge className="mb-4 bg-white text-blue-600">{t('pricing.popular')}</Badge>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">{t('pricing.basic')}</h3>
              <p className="text-sm mb-6 opacity-90">
                {t('pricing.description')}
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  {t('pricing.trial')}
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  {t('pricing.support')}
                </Button>
              </div>
              <div className="text-center mb-6">
                <span className="text-2xl sm:text-3xl font-bold">{t('pricing.price')}</span>
                <span className="text-sm opacity-75"> {t('pricing.year')}</span>
              </div>
              <div className={`space-y-3 mb-8 ${isRTL ? 'text-right' : 'text-left'}`}>
                <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 text-green-300 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <span>{t('pricing.feature1')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 text-green-300 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <span>{t('pricing.feature2')}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className={`w-5 h-5 text-green-300 ${isRTL ? 'ml-3' : 'mr-3'}`} />
                  <span>{t('pricing.feature3')}</span>
                </div>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-3">
                {t('pricing.contactBtn')}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 arabic-title">{t('stats.howTo')}</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-8">
              {stats.map((stat, index) => <div key={index} className="flex items-center">
                  <div className={`bg-white/20 rounded-full px-4 py-2 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                    <span className="text-xl sm:text-2xl font-bold">{stat.number}</span>
                  </div>
                  <span className="text-base sm:text-lg">{stat.label}</span>
                </div>)}
            </div>
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 inline-block">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">{t('stats.welcome')}</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">{t('stats.chooseOperation')}</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <Database className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">{t('stats.inventory')}</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <BarChart3 className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">{t('stats.statistics')}</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <ShoppingCart className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">{t('stats.sell')}</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <Settings className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">{t('stats.settings')}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('about.title')}</h2>
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
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/10 w-full sm:w-auto">
                    {t('hero.contactBtn')}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('contact.title')}</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
                    {t('contact.subtitle')}
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{t('contact.phone')}</h4>
                      <p className="text-muted-foreground">0541593067</p>
                      <p className="text-muted-foreground">0540849366</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">{t('contact.email')}</h4>
                      <p className="text-muted-foreground text-sm sm:text-base">zianitakiedineofficial@gmail.com</p>
                      <p className="text-muted-foreground text-sm sm:text-base">youssefaidani6@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="p-6 sm:p-8 bg-card">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <p className="text-muted-foreground mb-2">{t('contact.formTitle')}</p>
                    <p className="text-muted-foreground">{t('contact.formSubtitle')}</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input 
                      placeholder={t('contact.emailPlaceholder')} 
                      type="email" 
                      value={formData.email} 
                      onChange={e => setFormData({...formData, email: e.target.value})} 
                      className={isRTL ? "text-right" : "text-left"} 
                      required 
                    />
                    <Input 
                      placeholder={t('contact.namePlaceholder')} 
                      value={formData.fullName} 
                      onChange={e => setFormData({...formData, fullName: e.target.value})} 
                      className={isRTL ? "text-right" : "text-left"} 
                      required 
                    />
                    <Input 
                      placeholder={t('contact.phonePlaceholder')} 
                      value={formData.phone} 
                      onChange={e => setFormData({...formData, phone: e.target.value})} 
                      className={isRTL ? "text-right" : "text-left"} 
                      required 
                    />
                    <Textarea 
                      placeholder={t('contact.messagePlaceholder')} 
                      value={formData.message} 
                      onChange={e => setFormData({...formData, message: e.target.value})} 
                      className={`${isRTL ? "text-right" : "text-left"} min-h-[120px]`} 
                      required 
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
                      {t('contact.sendBtn')}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card text-foreground py-12 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className={`mb-6 md:mb-0 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
              <img src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" alt={t('hero.appName')} className="h-8 w-auto mb-2 mx-auto md:mx-0" />
              <p className="text-muted-foreground text-sm sm:text-base">{t('footer.description')}</p>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <div className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5 text-white" />
              </div>
              <div className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
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
    </div>;
};

export default Index;

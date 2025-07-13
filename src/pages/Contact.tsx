import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { ThemeToggle } from "@/components/ThemeToggle";
import { LanguageSelector } from "@/components/LanguageSelector";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";
const Contact = () => {
  const {
    t,
    language
  } = useLanguage();
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
    phone: "",
    message: ""
  });
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
  const handleDownload = () => {
    window.open('http://khdame.com/download', '_blank');
  };
  const isRTL = language === 'ar';
  return <div className="min-h-screen bg-background text-foreground">
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
              <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">{t('nav.about')}</Link>
              <Link to="/contact" className="text-primary font-medium">{t('nav.contact')}</Link>
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

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('contact.title')}</h1>
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
                      <p className="text-muted-foreground text-sm sm:text-base">khdame.contact@gmail.com</p>
                      
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
                    <Input placeholder={t('contact.emailPlaceholder')} type="email" value={formData.email} onChange={e => setFormData({
                    ...formData,
                    email: e.target.value
                  })} className={isRTL ? "text-right" : "text-left"} required />
                    <Input placeholder={t('contact.namePlaceholder')} value={formData.fullName} onChange={e => setFormData({
                    ...formData,
                    fullName: e.target.value
                  })} className={isRTL ? "text-right" : "text-left"} required />
                    <Input placeholder={t('contact.phonePlaceholder')} value={formData.phone} onChange={e => setFormData({
                    ...formData,
                    phone: e.target.value
                  })} className={isRTL ? "text-right" : "text-left"} required />
                    <Textarea placeholder={t('contact.messagePlaceholder')} value={formData.message} onChange={e => setFormData({
                    ...formData,
                    message: e.target.value
                  })} className={`${isRTL ? "text-right" : "text-left"} min-h-[120px]`} required />
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
    </div>;
};
export default Contact;
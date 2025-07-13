
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

export const PricingSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  return (
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
              <Button variant="outline" className="border-white/20 bg-slate-50 text-slate-900">
                {t('pricing.trial')}
              </Button>
              <Button variant="outline" className="border-white/20 bg-slate-50 text-zinc-950">
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
            <Link to="/contact">
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-3">
                {t('pricing.contactBtn')}
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};


import { Card, CardContent } from "@/components/ui/card";
import { QrCode, BarChart3, PieChart, Smartphone, Users, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const FeaturesSection = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: <QrCode className="w-12 h-12 text-blue-600" />,
      title: t('features.barcode.title'),
      description: t('features.barcode.desc')
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: t('features.realtime.title'),
      description: t('features.realtime.desc')
    },
    {
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
      title: t('features.reports.title'),
      description: t('features.reports.desc')
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: t('features.interface.title'),
      description: t('features.interface.desc')
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: t('features.support.title'),
      description: t('features.support.desc')
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: t('features.billing.title'),
      description: t('features.billing.desc')
    }
  ];

  return (
    <section id="features" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">{t('features.title')}</h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('features.subtitle')}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group bg-background">
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-4">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

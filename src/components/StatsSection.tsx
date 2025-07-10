
import { Database, BarChart3, ShoppingCart, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const StatsSection = () => {
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const stats = [
    {
      number: "3625",
      label: t('stats.visits')
    },
    {
      number: "578",
      label: t('stats.downloads')
    }
  ];

  return (
    <section className="py-16 bg-gradient-blue text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 arabic-title">{t('stats.howTo')}</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="space-y-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center">
                <div className={`bg-white/20 rounded-full px-4 py-2 ${isRTL ? 'ml-4' : 'mr-4'}`}>
                  <span className="text-xl sm:text-2xl font-bold">{stat.number}</span>
                </div>
                <span className="text-base sm:text-lg">{stat.label}</span>
              </div>
            ))}
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
  );
};


import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

export const FAQSection = () => {
  const { language } = useLanguage();

  const faqData = {
    ar: {
      title: "الأسئلة الشائعة",
      questions: [
        {
          question: "هل التطبيق مناسب لكل أنواع المتاجر؟",
          answer: "نعم، تطبيق خدامي مناسب لجميع أنواع المتاجر سواء كانت صغيرة أو متوسطة (بقالة، أدوات منزلية، مستحضرات تجميل، قطع غيار...)."
        },
        {
          question: "كيف يتم بيع المنتجات باستخدام التطبيق؟",
          answer: "يمكنك بيع المنتجات بسهولة عبر مسح رمز QR الخاص بها في نقطة الدفع، وسيتم خصمها تلقائيًا من المخزون وتسجيل العملية."
        },
        {
          question: "هل يمكنني متابعة المخزون بشكل يومي؟",
          answer: "نعم، يتيح لك التطبيق تتبع الكميات المتوفرة لكل منتج، مع تنبيهات عند اقتراب نفاد المخزون."
        },
        {
          question: "هل يعرض التطبيق إحصائيات حول المبيعات والدخل؟",
          answer: "بالتأكيد، التطبيق يعرض لك تقارير مفصلة عن:\n\n• المداخيل اليومية والأسبوعية\n• أكثر المنتجات مبيعًا\n• حركة المخزون"
        },
        {
          question: "هل بياناتي في أمان؟",
          answer: "نعم، جميع بياناتك محفوظة بأمان وتخضع لتشفير ومعايير حماية عالية."
        }
      ]
    },
    en: {
      title: "Frequently Asked Questions",
      questions: [
        {
          question: "Is the app suitable for all types of stores?",
          answer: "Yes, Khadami app is suitable for all types of stores whether small or medium (grocery, household items, cosmetics, spare parts...)."
        },
        {
          question: "How are products sold using the app?",
          answer: "You can easily sell products by scanning their QR code at the point of payment, and they will be automatically deducted from inventory and the transaction recorded."
        },
        {
          question: "Can I track inventory on a daily basis?",
          answer: "Yes, the app allows you to track available quantities for each product, with alerts when inventory is running low."
        },
        {
          question: "Does the app show statistics about sales and income?",
          answer: "Absolutely, the app shows you detailed reports about:\n\n• Daily and weekly income\n• Best-selling products\n• Inventory movement"
        },
        {
          question: "Is my data safe?",
          answer: "Yes, all your data is stored securely and subject to encryption and high protection standards."
        }
      ]
    },
    fr: {
      title: "Questions Fréquemment Posées",
      questions: [
        {
          question: "L'application convient-elle à tous les types de magasins ?",
          answer: "Oui, l'application Khadami convient à tous les types de magasins, qu'ils soient petits ou moyens (épicerie, articles ménagers, cosmétiques, pièces détachées...)."
        },
        {
          question: "Comment les produits sont-ils vendus en utilisant l'application ?",
          answer: "Vous pouvez facilement vendre des produits en scannant leur code QR au point de paiement, et ils seront automatiquement déduits de l'inventaire et la transaction enregistrée."
        },
        {
          question: "Puis-je suivre l'inventaire quotidiennement ?",
          answer: "Oui, l'application vous permet de suivre les quantités disponibles pour chaque produit, avec des alertes lorsque l'inventaire est faible."
        },
        {
          question: "L'application affiche-t-elle des statistiques sur les ventes et les revenus ?",
          answer: "Absolument, l'application vous montre des rapports détaillés sur :\n\n• Les revenus quotidiens et hebdomadaires\n• Les produits les plus vendus\n• Le mouvement des stocks"
        },
        {
          question: "Mes données sont-elles en sécurité ?",
          answer: "Oui, toutes vos données sont stockées en toute sécurité et soumises au cryptage et aux normes de protection élevées."
        }
      ]
    }
  };

  const currentFaq = faqData[language as keyof typeof faqData] || faqData.ar;
  const isRTL = language === 'ar';

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 arabic-title">
            {currentFaq.title}
          </h2>
        </div>
        
        <Card className="bg-background">
          <CardContent className="p-6 sm:p-8">
            <Accordion type="single" collapsible className="w-full">
              {currentFaq.questions.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className={`text-left ${isRTL ? 'text-right' : 'text-left'} hover:no-underline`}>
                    <span className="text-base sm:text-lg font-medium leading-relaxed">
                      {faq.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className={`${isRTL ? 'text-right' : 'text-left'} pt-4`}>
                    <div className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {faq.answer}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowLeft, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Extended sample data with store information
const stores = [
  {
    id: 1,
    name: "متجر الأطعمة الممتازة",
    nameEn: "Premium Foods Store",
    description: "متجر متخصص في الأطعمة المعلبة عالية الجودة",
    descriptionEn: "Specialized store for high-quality canned foods"
  },
  {
    id: 2,
    name: "متجر الحليب الطازج",
    nameEn: "Fresh Milk Store",
    description: "متجر متخصص في منتجات الألبان الطازجة",
    descriptionEn: "Specialized store for fresh dairy products"
  },
  {
    id: 3,
    name: "متجر العصائر الطبيعية",
    nameEn: "Natural Juice Store",
    description: "متجر متخصص في العصائر الطبيعية والمشروبات الصحية",
    descriptionEn: "Specialized store for natural juices and healthy beverages"
  },
  {
    id: 4,
    name: "متجر الخدمات",
    nameEn: "Services Store",
    description: "متجر متخصص في خدمات التوصيل والشحن",
    descriptionEn: "Specialized store for delivery and shipping services"
  }
];

const storeProducts = [
  {
    id: 1,
    name: "صلصة طماطم سينتو",
    nameEn: "Cento Tomato Sauce",
    price: 200,
    image: "/lovable-uploads/f5705ca5-1adf-4b7c-a2dd-d2da7d201505.png",
    storeId: 1
  },
  {
    id: 2,
    name: "حليب قليل الدسم",
    nameEn: "Low Fat Milk",
    price: 200,
    image: "/lovable-uploads/323310ee-f642-4338-8f93-ebc78502dc6e.png",
    storeId: 2
  },
  {
    id: 3,
    name: "عصير ليمون طبيعي",
    nameEn: "Natural Lemon Juice",
    price: 150,
    image: "/lovable-uploads/89cf4604-5de4-40a8-bf4e-f9d7428c70ab.png",
    storeId: 3
  },
  {
    id: 4,
    name: "صندوق توصيل",
    nameEn: "Delivery Box",
    price: 50,
    image: "/lovable-uploads/0bcc85d2-ea23-4617-9c18-a9b7148ed6fb.png",
    storeId: 4
  }
];

const StoreProfile = () => {
  const { storeId } = useParams();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const store = stores.find(s => s.id === parseInt(storeId || '0'));
  const products = storeProducts.filter(p => p.storeId === parseInt(storeId || '0'));

  if (!store) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {isRTL ? "المتجر غير موجود" : "Store Not Found"}
            </h1>
            <Link to="/marketplace">
              <Button>
                <ArrowLeft className="h-4 w-4 mr-2" />
                {isRTL ? "العودة للسوق" : "Back to Marketplace"}
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <div className="mb-6">
          <Link to="/marketplace">
            <Button variant="outline">
              <ArrowLeft className="h-4 w-4 mr-2" />
              {isRTL ? "العودة للسوق" : "Back to Marketplace"}
            </Button>
          </Link>
        </div>

        {/* Store Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <Store className="h-16 w-16 text-primary" />
          </div>
          <h1 className="text-3xl font-bold arabic-title mb-4">
            {isRTL ? store.name : store.nameEn}
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {isRTL ? store.description : store.descriptionEn}
          </p>
        </div>

        {/* Store Products */}
        <div>
          <h2 className="text-2xl font-bold mb-6">
            {isRTL ? "منتجات المتجر" : "Store Products"}
          </h2>
          
          {products.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="aspect-square bg-gray-100 relative">
                    <img
                      src={product.image}
                      alt={isRTL ? product.name : product.nameEn}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      {isRTL ? product.name : product.nameEn}
                    </h3>
                    <p className="text-primary font-bold text-lg">
                      {product.price} {isRTL ? "دج" : "DZD"}
                    </p>
                  </CardContent>
                  <CardFooter className="p-4 pt-0">
                    <Link to={`/product/${product.id}`} className="w-full">
                      <Button className="w-full">
                        {isRTL ? "عرض التفاصيل" : "View Details"}
                      </Button>
                    </Link>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                {isRTL ? "لا توجد منتجات في هذا المتجر حالياً" : "No products available in this store currently"}
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default StoreProfile;

import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ShoppingCart, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// Extended sample data with more product details
const marketplaceItems = [
  {
    id: 1,
    name: "صلصة طماطم سينتو",
    nameEn: "Cento Tomato Sauce",
    price: 200,
    image: "/lovable-uploads/f5705ca5-1adf-4b7c-a2dd-d2da7d201505.png",
    category: "معلبات",
    categoryEn: "Canned Goods",
    description: "صلصة طماطم عالية الجودة مصنوعة من الطماطم الطازجة",
    descriptionEn: "High quality tomato sauce made from fresh tomatoes",
    size: "0.5 كلغ",
    sizeEn: "0.5 kg",
    store: {
      id: 1,
      name: "متجر الأطعمة الممتازة",
      nameEn: "Premium Foods Store"
    }
  },
  {
    id: 2,
    name: "حليب قليل الدسم",
    nameEn: "Low Fat Milk",
    price: 200,
    image: "/lovable-uploads/323310ee-f642-4338-8f93-ebc78502dc6e.png",
    category: "منتجات الألبان",
    categoryEn: "Dairy Products",
    description: "حليب طازج قليل الدسم غني بالفيتامينات",
    descriptionEn: "Fresh low-fat milk rich in vitamins",
    size: "1 لتر",
    sizeEn: "1 liter",
    store: {
      id: 2,
      name: "متجر الحليب الطازج",
      nameEn: "Fresh Milk Store"
    }
  },
  {
    id: 3,
    name: "عصير ليمون طبيعي",
    nameEn: "Natural Lemon Juice",
    price: 150,
    image: "/lovable-uploads/89cf4604-5de4-40a8-bf4e-f9d7428c70ab.png",
    category: "مشروبات",
    categoryEn: "Beverages",
    description: "عصير ليمون طبيعي 100% بدون إضافات صناعية",
    descriptionEn: "100% natural lemon juice with no artificial additives",
    size: "0.5 لتر",
    sizeEn: "0.5 liter",
    store: {
      id: 3,
      name: "متجر العصائر الطبيعية",
      nameEn: "Natural Juice Store"
    }
  },
  {
    id: 4,
    name: "صندوق توصيل",
    nameEn: "Delivery Box",
    price: 50,
    image: "/lovable-uploads/0bcc85d2-ea23-4617-9c18-a9b7148ed6fb.png",
    category: "خدمات",
    categoryEn: "Services",
    description: "صندوق توصيل آمن ومتين للطلبات",
    descriptionEn: "Safe and durable delivery box for orders",
    size: "متوسط",
    sizeEn: "Medium",
    store: {
      id: 4,
      name: "متجر الخدمات",
      nameEn: "Services Store"
    }
  }
];

const ProductDetail = () => {
  const { productId } = useParams();
  const { t, language } = useLanguage();
  const isRTL = language === 'ar';

  const product = marketplaceItems.find(item => item.id === parseInt(productId || '0'));

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">
              {isRTL ? "المنتج غير موجود" : "Product Not Found"}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={product.image}
              alt={isRTL ? product.name : product.nameEn}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold arabic-title mb-2">
                {isRTL ? product.name : product.nameEn}
              </h1>
              <p className="text-lg text-muted-foreground">
                {isRTL ? product.category : product.categoryEn}
              </p>
            </div>

            <div className="text-3xl font-bold text-primary">
              {product.price} {isRTL ? "دج" : "DZD"}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                {isRTL ? "الوصف" : "Description"}
              </h3>
              <p className="text-muted-foreground">
                {isRTL ? product.description : product.descriptionEn}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                {isRTL ? "الحجم" : "Size"}
              </h3>
              <p className="text-muted-foreground">
                {isRTL ? product.size : product.sizeEn}
              </p>
            </div>

            {/* Store Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Store className="h-5 w-5 text-primary" />
                    <div>
                      <p className="font-medium">
                        {isRTL ? product.store.name : product.store.nameEn}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {isRTL ? "المتجر" : "Store"}
                      </p>
                    </div>
                  </div>
                  <Link to={`/store/${product.store.id}`}>
                    <Button variant="outline" size="sm">
                      {isRTL ? "زيارة المتجر" : "Visit Store"}
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Add to Cart Button */}
            <Button size="lg" className="w-full bg-primary hover:bg-primary/90">
              <ShoppingCart className="h-5 w-5 mr-2" />
              {isRTL ? "إضافة للسلة" : "Add to Cart"}
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;

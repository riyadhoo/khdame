import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Search, Filter, ShoppingCart, Plus, Store } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";

// Sample marketplace items data with extended information
const marketplaceItems = [
  {
    id: 1,
    name: "صلصة طماطم سينتو",
    nameEn: "Cento Tomato Sauce",
    price: 200,
    image: "/lovable-uploads/f5705ca5-1adf-4b7c-a2dd-d2da7d201505.png",
    category: "معلبات",
    categoryEn: "Canned Goods",
    store: "متجر الأطعمة الممتازة",
    storeEn: "Premium Foods Store",
    storeId: 1,
    storeAvatar: "/lovable-uploads/f5705ca5-1adf-4b7c-a2dd-d2da7d201505.png"
  },
  {
    id: 2,
    name: "حليب قليل الدسم",
    nameEn: "Low Fat Milk",
    price: 200,
    image: "/lovable-uploads/323310ee-f642-4338-8f93-ebc78502dc6e.png",
    category: "منتجات الألبان",
    categoryEn: "Dairy Products",
    store: "متجر الحليب الطازج",
    storeEn: "Fresh Milk Store",
    storeId: 2,
    storeAvatar: "/lovable-uploads/323310ee-f642-4338-8f93-ebc78502dc6e.png"
  },
  {
    id: 3,
    name: "عصير ليمون طبيعي",
    nameEn: "Natural Lemon Juice",
    price: 150,
    image: "/lovable-uploads/89cf4604-5de4-40a8-bf4e-f9d7428c70ab.png",
    category: "مشروبات",
    categoryEn: "Beverages",
    store: "متجر العصائر الطبيعية",
    storeEn: "Natural Juice Store",
    storeId: 3,
    storeAvatar: "/lovable-uploads/89cf4604-5de4-40a8-bf4e-f9d7428c70ab.png"
  },
  {
    id: 4,
    name: "صندوق توصيل",
    nameEn: "Delivery Box",
    price: 50,
    image: "/lovable-uploads/0bcc85d2-ea23-4617-9c18-a9b7148ed6fb.png",
    category: "خدمات",
    categoryEn: "Services",
    store: "متجر الخدمات",
    storeEn: "Services Store",
    storeId: 4,
    storeAvatar: "/lovable-uploads/0bcc85d2-ea23-4617-9c18-a9b7148ed6fb.png"
  }
];

const Marketplace = () => {
  const { t, language } = useLanguage();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [cartItems, setCartItems] = useState<number[]>([]);
  const isRTL = language === 'ar';

  const categories = [
    { id: "all", name: "الكل", nameEn: "All" },
    { id: "canned", name: "معلبات", nameEn: "Canned Goods" },
    { id: "dairy", name: "منتجات الألبان", nameEn: "Dairy Products" },
    { id: "beverages", name: "مشروبات", nameEn: "Beverages" },
    { id: "services", name: "خدمات", nameEn: "Services" }
  ];

  const filteredItems = marketplaceItems.filter(item => {
    const matchesSearch = isRTL 
      ? item.name.toLowerCase().includes(searchTerm.toLowerCase())
      : item.nameEn.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === "all" || 
      (isRTL ? item.category.includes(categories.find(c => c.id === selectedCategory)?.name || "") 
             : item.categoryEn.includes(categories.find(c => c.id === selectedCategory)?.nameEn || ""));
    
    return matchesSearch && matchesCategory;
  });

  const addToCart = (itemId: number) => {
    setCartItems(prev => [...prev, itemId]);
  };

  const totalCartValue = cartItems.reduce((total, itemId) => {
    const item = marketplaceItems.find(i => i.id === itemId);
    return total + (item?.price || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold arabic-title mb-4">
            {isRTL ? "السوق الإلكتروني" : "Digital Marketplace"}
          </h1>
          <p className="text-muted-foreground">
            {isRTL ? "اكتشف منتجات من متاجر محلية مختلفة" : "Discover products from various local stores"}
          </p>
        </div>

        {/* Cart Summary */}
        {cartItems.length > 0 && (
          <Card className="mb-6 bg-primary/10 border-primary/20">
            <CardContent className="p-4">
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                  <span className="font-medium">
                    {isRTL ? `المجموع: ${totalCartValue} دج` : `Total: ${totalCartValue} DZD`}
                  </span>
                </div>
                <span className="text-sm text-muted-foreground">
                  {isRTL ? `${cartItems.length} عنصر` : `${cartItems.length} items`}
                </span>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Search and Filters */}
        <div className="space-y-4 mb-8">
          <div className="relative">
            <Search className={`absolute top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground ${isRTL ? 'right-3' : 'left-3'}`} />
            <input
              type="text"
              placeholder={isRTL ? "ابحث عن المنتج..." : "Search for products..."}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`w-full py-3 bg-card border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary ${isRTL ? 'pr-10 text-right' : 'pl-10'}`}
            />
          </div>

          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.id)}
                className="whitespace-nowrap"
              >
                <Filter className="h-4 w-4 mr-2" />
                {isRTL ? category.name : category.nameEn}
              </Button>
            ))}
          </div>
        </div>

        {/* Products Grid - Updated to 4 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {filteredItems.map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <Link to={`/product/${item.id}`}>
                <div className="aspect-square bg-gray-100 relative cursor-pointer">
                  <img
                    src={item.image}
                    alt={isRTL ? item.name : item.nameEn}
                    className="w-full h-full object-cover hover:scale-105 transition-transform"
                  />
                </div>
              </Link>
              <CardContent className="p-4">
                <Link to={`/product/${item.id}`}>
                  <h3 className="font-semibold text-lg mb-2 hover:text-primary transition-colors cursor-pointer">
                    {isRTL ? item.name : item.nameEn}
                  </h3>
                </Link>
                
                {/* Store Info with Profile Picture */}
                <Link to={`/store/${item.storeId}`}>
                  <div className="flex items-center gap-2 mb-2 hover:text-primary transition-colors cursor-pointer">
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={item.storeAvatar} alt={isRTL ? item.store : item.storeEn} />
                      <AvatarFallback>
                        <Store className="h-3 w-3" />
                      </AvatarFallback>
                    </Avatar>
                    <p className="text-sm text-muted-foreground">
                      {isRTL ? item.store : item.storeEn}
                    </p>
                  </div>
                </Link>
                
                <p className="text-primary font-bold text-lg">
                  {item.price} {isRTL ? "دج" : "DZD"}
                </p>
              </CardContent>
              <CardFooter className="p-4 pt-0 space-y-2">
                <Link to={`/product/${item.id}`} className="w-full">
                  <Button variant="outline" className="w-full">
                    {isRTL ? "عرض التفاصيل" : "View Details"}
                  </Button>
                </Link>
                <Button
                  onClick={() => addToCart(item.id)}
                  className="w-full bg-primary hover:bg-primary/90"
                  disabled={cartItems.includes(item.id)}
                >
                  {cartItems.includes(item.id) 
                    ? (isRTL ? "تمت الإضافة" : "Added") 
                    : (isRTL ? "إضافة للسلة" : "Add to Cart")
                  }
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Add New Item Button (for store owners) */}
        <div className="text-center">
          <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white">
            <Plus className="h-5 w-5 mr-2" />
            {isRTL ? "إضافة منتج جديد" : "Add New Product"}
          </Button>
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground text-lg">
              {isRTL ? "لا توجد منتجات تطابق البحث" : "No products match your search"}
            </p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Marketplace;

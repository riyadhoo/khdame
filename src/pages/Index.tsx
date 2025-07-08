import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  CheckCircle, 
  BarChart3, 
  Package, 
  Users, 
  Settings, 
  Smartphone,
  Facebook,
  Instagram,
  ArrowLeft,
  Star,
  Truck,
  HeadphonesIcon,
  Database,
  PieChart,
  QrCode,
  ShoppingCart,
  Menu,
  X
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Index = () => {
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
      title: "تم إرسال الرسالة بنجاح",
      description: "سنتواصل معك في أقرب وقت ممكن",
    });
    setFormData({ email: "", fullName: "", phone: "", message: "" });
  };

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const features = [
    {
      icon: <QrCode className="w-12 h-12 text-blue-600" />,
      title: "مسح ضوئي فوري",
      description: "مسح الباركود والتحديثات بصريقة فورية"
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-600" />,
      title: "تحديث لحظي",
      description: "متابعة التحديثات في جميع فروعك في الوقت الحقيقي"
    },
    {
      icon: <PieChart className="w-12 h-12 text-blue-600" />,
      title: "تقارير ذكية",
      description: "تحليلات مفصلة لمساعدتك في اتخاذ القرارات"
    },
    {
      icon: <Smartphone className="w-12 h-12 text-blue-600" />,
      title: "واجهة بسيطة",
      description: "تصميم مبدئي لا يحتاج إلى تدريب مسبق"
    },
    {
      icon: <Users className="w-12 h-12 text-blue-600" />,
      title: "دعم متكامل",
      description: "فريق دعم في جميع مراحل الاستخدام"
    },
    {
      icon: <Settings className="w-12 h-12 text-blue-600" />,
      title: "نظام الفواتير الذكية",
      description: "حساب تلقائي لكلفة المنتوج والضرائب مع هامش الربح"
    }
  ];

  const stats = [
    { number: "3625", label: "عدد زيارات التطبيق" },
    { number: "578", label: "عدد تحميلات التطبيق" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4 space-x-reverse">
              <img 
                src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" 
                alt="خدام" 
                className="h-10 w-auto"
              />
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8 space-x-reverse">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">الرئيسية</a>
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">الميزات</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">من نحن</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">التسعير</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">اتصل بنا</a>
            </div>
            
            {/* Desktop CTA Button */}
            <div className="hidden md:block">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                حمل التطبيق الآن
              </Button>
            </div>

            {/* Mobile Menu */}
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle className="text-right">
                    <img 
                      src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" 
                      alt="خدام" 
                      className="h-10 w-auto mr-auto"
                    />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-6 mt-8">
                  <button 
                    onClick={() => handleNavClick('#home')}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors text-right py-2"
                  >
                    الرئيسية
                  </button>
                  <button 
                    onClick={() => handleNavClick('#features')}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors text-right py-2"
                  >
                    الميزات
                  </button>
                  <button 
                    onClick={() => handleNavClick('#about')}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors text-right py-2"
                  >
                    من نحن
                  </button>
                  <button 
                    onClick={() => handleNavClick('#pricing')}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors text-right py-2"
                  >
                    التسعير
                  </button>
                  <button 
                    onClick={() => handleNavClick('#contact')}
                    className="text-lg text-gray-700 hover:text-blue-600 transition-colors text-right py-2"
                  >
                    اتصل بنا
                  </button>
                  <div className="pt-4 border-t">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                      حمل التطبيق الآن
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 mb-12 lg:mb-0 animate-fade-in z-10">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 arabic-title leading-tight">
                مرحباً بكم في 
                <span className="text-gradient-blue"> خدام</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-8 leading-relaxed">
                مع تطبيقنا، يمكنك تسييرك متجرك من المخزون إلى المبيعات
                باستعمال الهاتف دون الحاجة إلى حاسوب، ونظم عملياتك
                بكل كفاءة
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg">
                  <ArrowLeft className="ml-2 h-5 w-5" />
                  حمل التطبيق الآن
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg">
                  تواصل معنا
                </Button>
              </div>
            </div>
            <div className="lg:w-1/2 flex justify-center relative">
              {/* Floating App Screenshots */}
              <div className="relative">
                {/* Main Dashboard Screenshot */}
                <div className="relative z-20 animate-float">
                  <img 
                    src="/lovable-uploads/48e8cd7b-0f6a-467a-b66b-86c6bcd10007.png" 
                    alt="Khadame App Dashboard"
                    className="w-48 sm:w-64 h-auto rounded-3xl shadow-2xl"
                  />
                </div>
                
                {/* Barcode Scanner Screenshot - Positioned to the right and slightly behind */}
                <div className="absolute -right-16 sm:-right-20 top-16 z-10 animate-float-delayed">
                  <img 
                    src="/lovable-uploads/27bd8bf2-1bea-454d-8218-9b3669141b31.png" 
                    alt="Khadame Barcode Scanner"
                    className="w-36 sm:w-48 h-auto rounded-3xl shadow-xl transform rotate-12"
                  />
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
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 arabic-title">مميزات التطبيق</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              نقدم لك حلولاً متكاملة لإدارة الأعمال والمخزون مع تطبيق سهل الاستخدام
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                <CardContent className="p-6 sm:p-8 text-center">
                  <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 arabic-title">السعر</h2>
          </div>
          <Card className="bg-gradient-blue text-white relative overflow-hidden max-w-md mx-auto">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-blue-600"></div>
            <CardContent className="p-6 sm:p-8 text-center">
              <Badge className="mb-4 bg-white text-blue-600">الأكثر شعبية</Badge>
              <h3 className="text-xl sm:text-2xl font-bold mb-6">الخطة الأساسية</h3>
              <p className="text-sm mb-6 opacity-90">
                الخطة الأساسية تشمل إشتراك سنوي كامل مع دعم فني ومحديثات مجانية مدة عام
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  مساعدة تجريبي
                </Button>
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                  دعم تقني
                </Button>
              </div>
              <div className="text-center mb-6">
                <span className="text-2xl sm:text-3xl font-bold">دج 2000</span>
                <span className="text-sm opacity-75"> / العام</span>
              </div>
              <div className="space-y-3 mb-8 text-right">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 ml-3" />
                  <span>دعم تقني</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 ml-3" />
                  <span>تحديثات مجانية</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-300 ml-3" />
                  <span>مساعدة تجريبية</span>
                </div>
              </div>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100 text-lg py-3">
                تواصل معنا الآن
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 arabic-title">كيفية استخدام التطبيق</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="space-y-8">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center">
                  <div className="bg-white/20 rounded-full px-4 py-2 ml-4">
                    <span className="text-xl sm:text-2xl font-bold">{stat.number}</span>
                  </div>
                  <span className="text-base sm:text-lg">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="bg-white/10 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
              <div className="text-center">
                <div className="bg-white rounded-2xl p-4 sm:p-6 mb-4 inline-block">
                  <h3 className="text-lg sm:text-2xl font-bold text-gray-900 mb-2">مرحبا بك في خدام</h3>
                  <p className="text-gray-600 text-xs sm:text-sm mb-4">الرجاء اختيار العملية</p>
                  <div className="grid grid-cols-2 gap-2 sm:gap-3">
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <Database className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">مخزون</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <BarChart3 className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">احصائيات</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <ShoppingCart className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">بيع</span>
                    </div>
                    <div className="bg-blue-600 text-white rounded-lg p-2 sm:p-3 text-center">
                      <Settings className="w-4 sm:w-6 h-4 sm:h-6 mx-auto mb-1" />
                      <span className="text-xs">اعدادات</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 arabic-title">من نحن</h2>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 flex items-center justify-center">
                <img 
                  src="/lovable-uploads/8dc102ff-3709-49f9-9be1-793315dd737c.png" 
                  alt="فريق خدام"
                  className="w-full max-w-md h-auto animate-float"
                />
              </div>
            </div>
            <div className="lg:w-1/2">
              <div className="text-right">
                <div className="text-4xl sm:text-6xl font-bold text-gradient-blue mb-4 arabic-title">خدام</div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6">
                  نقدم تطبيقاً متكاملاً لإدارة الأعمال والمخزون، يتيح لك
                  مسح الباركود بسهولة، متابعة المبيعات، وإدارة
                  المخزون بشكل ذكي مع واجهة بسيطة ومقارير
                  فورية. هدفنا هو تغيير الطريقة المتعارف عليها في
                  تسيير المتاجر
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto">
                    حمل التطبيق الآن
                  </Button>
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 w-full sm:w-auto">
                    تواصل معنا
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4 arabic-title">تواصل معنا لإنشاء حساب</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-1/2">
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
                    تواصل معنا لإنشاء حسابك
                    <br />
                    وابدأ في استخدام التطبيق
                  </h3>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-full">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">الهاتف</h4>
                      <p className="text-gray-600">0541593067</p>
                      <p className="text-gray-600">0540849366</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-500 p-3 rounded-full">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">البريد الالكتروني</h4>
                      <p className="text-gray-600 text-sm sm:text-base">zianitakiedineofficial@gmail.com</p>
                      <p className="text-gray-600 text-sm sm:text-base">youssefaidani6@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <Card className="p-6 sm:p-8">
                <CardContent className="p-0">
                  <div className="mb-6">
                    <p className="text-gray-600 mb-2">الرجاء إدخال معلوماتك الشخصية</p>
                    <p className="text-gray-600">وسنقوم بالتواصل معك في أقرب وقت</p>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <Input
                      placeholder="أدخل بريدك الالكتروني"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="text-right"
                      required
                    />
                    <Input
                      placeholder="أدخل اسمك الكامل"
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      className="text-right"
                      required
                    />
                    <Input
                      placeholder="أدخل رقم هاتفك"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="text-right"
                      required
                    />
                    <Textarea
                      placeholder="اكتب رسالتك هنا"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="text-right min-h-[120px]"
                      required
                    />
                    <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                      إرسال
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0 text-center md:text-right">
              <img 
                src="/lovable-uploads/2b6c1a2c-9515-48ad-93d3-eb1712d0d847.png" 
                alt="خدام" 
                className="h-8 w-auto mb-2 mx-auto md:mx-0"
              />
              <p className="text-gray-400 text-sm sm:text-base">يقدم حلولاً متطورة لإدارة المخزون والمبيعات لتطوير أعمالك وتحقيق النجاح المستدام</p>
            </div>
            <div className="flex space-x-4 space-x-reverse">
              <div className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="bg-pink-600 p-3 rounded-full hover:bg-pink-700 transition-colors cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">© 2025 جميع الحقوق محفوظة</p>
            <p className="text-gray-400 text-sm mt-2">سياسة الخصوصية • شروط الخدمة</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;

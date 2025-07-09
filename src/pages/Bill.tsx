
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Download, Calendar, Receipt, Store, Package, CheckCircle } from "lucide-react";

const Bill = () => {
  const [billData] = useState({
    billNumber: "INV-2024-001",
    date: new Date().toLocaleDateString('ar-DZ'),
    storeName: "متجر التقنية الحديثة",
    customerName: "أحمد محمد علي",
    status: "مدفوع",
    items: [
      { id: 1, name: "هاتف ذكي iPhone 15", price: "120,000", quantity: 1, total: "120,000" },
      { id: 2, name: "سماعات لاسلكية", price: "15,000", quantity: 2, total: "30,000" },
      { id: 3, name: "شاحن سريع", price: "8,000", quantity: 1, total: "8,000" }
    ],
    subtotal: "158,000",
    tax: "15,800",
    total: "173,800"
  });

  const handleDownloadPDF = () => {
    console.log("Downloading PDF...");
    // PDF download functionality would be implemented here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4 shadow-lg">
            <Receipt className="w-8 h-8 text-primary-foreground" />
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">فاتورة الشراء</h1>
          <p className="text-muted-foreground">تفاصيل عملية الشراء الخاصة بك</p>
        </div>

        {/* Bill Status */}
        <div className="flex justify-center mb-6">
          <Badge variant="default" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 text-sm">
            <CheckCircle className="w-4 h-4 ml-2" />
            {billData.status}
          </Badge>
        </div>

        {/* Main Bill Card */}
        <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
          <CardHeader className="bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-t-lg">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5" />
                <div>
                  <p className="text-sm opacity-90">تاريخ الفاتورة</p>
                  <p className="font-semibold">{billData.date}</p>
                </div>
              </div>
              <div className="text-left">
                <p className="text-sm opacity-90">رقم الفاتورة</p>
                <p className="font-semibold">{billData.billNumber}</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6 space-y-6">
            {/* Store and Customer Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                      <Store className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">المتجر</p>
                      <p className="font-semibold text-foreground">{billData.storeName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-800">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">العميل</p>
                      <p className="font-semibold text-foreground">{billData.customerName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Items Section */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-5 h-5 text-primary" />
                <h3 className="text-lg font-semibold text-foreground">تفاصيل المنتجات</h3>
              </div>

              <Card className="border-0 bg-muted/30">
                <Table>
                  <TableHeader>
                    <TableRow className="bg-muted">
                      <TableHead className="text-right font-semibold">المنتج</TableHead>
                      <TableHead className="text-center font-semibold">السعر</TableHead>
                      <TableHead className="text-center font-semibold">الكمية</TableHead>
                      <TableHead className="text-center font-semibold">المجموع</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {billData.items.map((item) => (
                      <TableRow key={item.id} className="hover:bg-muted/50">
                        <TableCell className="font-medium text-right">{item.name}</TableCell>
                        <TableCell className="text-center">{item.price} د.ج</TableCell>
                        <TableCell className="text-center">{item.quantity}</TableCell>
                        <TableCell className="text-center font-semibold">{item.total} د.ج</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>

            <Separator />

            {/* Totals Section */}
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">المجموع الفرعي:</span>
                <span className="font-semibold">{billData.subtotal} د.ج</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-muted-foreground">الضريبة (10%):</span>
                <span className="font-semibold">{billData.tax} د.ج</span>
              </div>
              <Separator />
              <div className="flex justify-between items-center text-lg">
                <span className="font-bold text-foreground">المجموع الكلي:</span>
                <span className="font-bold text-primary text-2xl">{billData.total} د.ج</span>
              </div>
            </div>

            {/* Thank You Message */}
            <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h4 className="font-semibold text-foreground mb-2">شكراً لتسوقكم معنا!</h4>
                <p className="text-sm text-muted-foreground">
                  نتطلع لخدمتكم مرة أخرى. في حالة وجود أي استفسار، يرجى التواصل معنا.
                </p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Download Button */}
        <div className="text-center mt-8">
          <Button 
            onClick={handleDownloadPDF}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 shadow-lg"
          >
            <Download className="w-5 h-5 ml-2" />
            تحميل الفاتورة PDF
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Bill;

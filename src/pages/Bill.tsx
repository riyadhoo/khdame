
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Download, Calendar, FileText, DollarSign, User, Package } from "lucide-react";

const Bill = () => {
  const [customerName, setCustomerName] = useState("غير محدد");
  const [totalAmount, setTotalAmount] = useState("د.ج");
  const [products, setProducts] = useState<any[]>([]);

  const handleDownloadPDF = () => {
    // PDF download functionality would be implemented here
    console.log("Downloading PDF...");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-500 to-teal-600 p-4" dir="rtl">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4">
            <FileText className="w-8 h-8 text-teal-600" />
          </div>
          <h1 className="text-white text-2xl font-bold mb-2">فاتورة</h1>
          <p className="text-teal-100">نظام إدارة الفواتير الإلكترونية</p>
        </div>

        {/* Main Content Card */}
        <Card className="bg-white shadow-xl rounded-2xl overflow-hidden">
          <CardHeader className="bg-teal-500 text-white p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span className="text-sm">التاريخ: {new Date().toLocaleDateString('ar-DZ')}</span>
              </div>
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5" />
                <span className="text-sm">رقم الفاتورة: #{Math.floor(Math.random() * 10000)}</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-6">
            {/* Customer and Total Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {/* Customer Name */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-blue-900">اسم المتجر</h3>
                      <p className="text-blue-600 text-2xl font-bold">{customerName}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Total Amount */}
              <Card className="bg-red-50 border-red-200">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-red-900">المجموع الكلي</h3>
                      <p className="text-red-600 text-2xl font-bold">{totalAmount}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Products Section */}
            <Card className="bg-gray-50 border-gray-200 mb-6">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gray-600 rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg">تفاصيل المنتجات</h3>
                </div>

                {/* Products Table */}
                <div className="bg-white rounded-lg overflow-hidden">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-teal-500">
                        <TableHead className="text-white font-semibold text-right">اسم المنتج</TableHead>
                        <TableHead className="text-white font-semibold text-center">سعر المنتج</TableHead>
                        <TableHead className="text-white font-semibold text-center">الكمية</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {products.length === 0 ? (
                        <TableRow>
                          <TableCell colSpan={3} className="text-center py-12">
                            <div className="flex flex-col items-center gap-3">
                              <Package className="w-16 h-16 text-gray-300" />
                              <p className="text-gray-500 text-lg">لا توجد منتجات في هذه الفاتورة</p>
                            </div>
                          </TableCell>
                        </TableRow>
                      ) : (
                        products.map((product, index) => (
                          <TableRow key={index}>
                            <TableCell className="font-medium text-right">{product.name}</TableCell>
                            <TableCell className="text-center">{product.price}</TableCell>
                            <TableCell className="text-center">{product.quantity}</TableCell>
                          </TableRow>
                        ))
                      )}
                    </TableBody>
                  </Table>
                </div>
              </CardContent>
            </Card>

            {/* Footer */}
            <Card className="bg-teal-50 border-teal-200">
              <CardContent className="p-6 text-center">
                <p className="text-teal-700 mb-1">شكراً لتعاملكم معنا</p>
                <p className="text-teal-600 font-semibold">نظام إدارة الفواتير الإلكترونية</p>
              </CardContent>
            </Card>
          </CardContent>
        </Card>

        {/* Download PDF Button */}
        <div className="mt-8 text-center">
          <Button 
            onClick={handleDownloadPDF}
            className="bg-white text-teal-600 hover:bg-teal-50 px-8 py-3 rounded-full font-semibold shadow-lg"
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

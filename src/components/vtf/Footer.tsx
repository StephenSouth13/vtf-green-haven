import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Globe, MapPin, Facebook, Instagram, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-foreground to-foreground/90 text-white relative">
      <div className="vtf-container py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo & Mission */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold mb-6 text-primary-light">VTF HOME</h3>
            <p className="text-lg mb-8 text-white/80 leading-relaxed">
              Kết nối trái tim, truyền cảm hứng du lịch. 
              Nơi khởi đầu cho những cuộc gặp gỡ ý nghĩa và trải nghiệm khó quên.
            </p>
            
            {/* Newsletter */}
            <Card className="bg-white/10 border-0 backdrop-blur-sm">
              <CardContent className="p-6">
                <h4 className="font-bold mb-4 text-white">Đăng Ký Nhận Tin</h4>
                <div className="flex gap-3">
                  <Input
                    placeholder="Email của bạn..."
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  />
                  <Button className="vtf-btn-primary">
                    Đăng Ký
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-light">Liên Hệ</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary-light" />
                <span>0939 095 123</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary-light" />
                <span>muoico@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary-light" />
                <span>muoico.com.vn</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary-light mt-1" />
                <span>1267/22 Lê Đức Thọ, P.13, Q.Gò Vấp, TP.HCM</span>
              </div>
            </div>
          </div>

          {/* Quick Links & Social */}
          <div>
            <h4 className="text-xl font-bold mb-6 text-primary-light">Kết Nối</h4>
            <div className="space-y-4 mb-8">
              <a href="#" className="block hover:text-primary-light transition-colors">Về Chúng Tôi</a>
              <a href="#" className="block hover:text-primary-light transition-colors">Dịch Vụ Tour</a>
              <a href="#" className="block hover:text-primary-light transition-colors">Không Gian Cafe</a>
              <a href="#" className="block hover:text-primary-light transition-colors">Sự Kiện</a>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-primary hover:border-primary">
                <Facebook className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="icon" className="border-white/30 text-white hover:bg-primary hover:border-primary">
                <Instagram className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>

        <hr className="my-12 border-white/20" />
        
        {/* Copyright */}
        <div className="text-center text-white/60">
          <p>&copy; 2024 VTF Home. Tất cả quyền được bảo lưu.</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 vtf-btn-primary rounded-full p-3 shadow-lg z-50"
        size="icon"
      >
        <ArrowUp className="w-6 h-6" />
      </Button>
    </footer>
  );
};

export default Footer;
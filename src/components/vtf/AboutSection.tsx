import { Card, CardContent } from "@/components/ui/card";
import cafeInterior from "@/assets/cafe-interior.jpg";

const AboutSection = () => {
  return (
    <section className="vtf-section">
      <div className="vtf-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="fade-in-up animate">
            <h2 className="vtf-heading">Giới Thiệu Về VTF</h2>
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                VTF Home không chỉ là một không gian cafe thông thường. Chúng tôi là nơi khởi đầu 
                cho những cuộc phiêu lưu, nơi kết nối những tâm hồn yêu thích khám phá và trải nghiệm.
              </p>
              
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-6 rounded-2xl border-l-4 border-primary">
                <h3 className="text-xl font-bold text-primary mb-3">Sứ Mệnh VTF</h3>
                <p className="text-lg font-medium text-foreground">
                  "Kết nối trái tim, truyền cảm hứng du lịch."
                </p>
              </div>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Với không gian ấm cúng và đội ngũ chuyên nghiệp, VTF Home mang đến cho bạn 
                những trải nghiệm du lịch độc đáo, kết hợp hoàn hảo giữa văn hóa địa phương 
                và phong cách hiện đại.
              </p>
              
              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-muted-foreground">Khách hàng hài lòng</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Tour đã tổ chức</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="fade-in-up animate">
            <Card className="vtf-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <img
                  src={cafeInterior}
                  alt="Không gian cafe VTF Home"
                  className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Map, Users, Coffee } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Không gian gặp gỡ kết nối",
    description: "Tạo ra môi trường lý tưởng để kết nối với những người cùng đam mê du lịch và khám phá."
  },
  {
    icon: Map,
    title: "Tour thiết kế riêng",
    description: "Mỗi chuyến đi được thiết kế riêng biệt theo sở thích và nhu cầu của từng khách hàng."
  },
  {
    icon: Users,
    title: "Đội ngũ chuyên nghiệp",
    description: "Đội ngũ tư vấn và hướng dẫn viên giàu kinh nghiệm, nhiệt tình và chuyên nghiệp."
  },
  {
    icon: Coffee,
    title: "Cafe – Du lịch – Sự kiện all-in-one",
    description: "Dịch vụ tổng thể từ không gian cafe, tư vấn du lịch đến tổ chức sự kiện."
  }
];

const WhyChooseSection = () => {
  return (
    <section className="coffee offline-section bg-muted/20">
      <div className="coffee offline-container">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="coffee offline-heading">Tại Sao Chọn coffee offline?</h2>
          <p className="coffee offline-subheading max-w-3xl mx-auto">
            Chúng tôi mang đến những giá trị độc đáo và trải nghiệm khó quên 
            cho mọi khách hàng tin tưởng lựa chọn coffee offline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="coffee offline-card border-0 group cursor-pointer hover:scale-105 transition-all duration-500"
            >
              <CardContent className="p-8 text-center">
                <div className="mb-6 relative">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-primary/20 rounded-full blur-xl group-hover:bg-primary/40 transition-all duration-300"></div>
                </div>
                
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
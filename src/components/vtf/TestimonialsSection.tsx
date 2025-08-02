import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Minh Anh",
    role: "Blogger Du Lịch",
    content: "coffee offline Home đã mang đến cho tôi những trải nghiệm du lịch tuyệt vời nhất. Không gian cafe ấm cúng và đội ngũ tư vấn rất chuyên nghiệp.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b1b7?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Quang Huy",
    role: "Doanh nhân",
    content: "Tour được thiết kế riêng cho nhóm của tôi thật sự ấn tượng. Mọi chi tiết đều được chăm chút kỹ lưỡng và phù hợp với nhu cầu.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
  },
  {
    name: "Thu Hương",
    role: "Giảng viên",
    content: "Không chỉ là nơi thưởng thức cafe ngon, coffee offline còn là điểm đến lý tưởng để gặp gỡ những người bạn cùng đam mê du lịch.",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="coffee offline-section bg-gradient-to-br from-primary/5 to-accent/10">
      <div className="coffee offline-container">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="coffee offline-heading">Feedback Từ Khách Hàng</h2>
          <p className="coffee offline-subheading">
            Những chia sẻ chân thực từ khách hàng đã trải nghiệm dịch vụ tại coffee offline Home
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="coffee offline-card border-0 group hover:scale-105 transition-all duration-500"
            >
              <CardContent className="p-8 relative">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-12 h-12 text-primary" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground leading-relaxed mb-8 italic">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
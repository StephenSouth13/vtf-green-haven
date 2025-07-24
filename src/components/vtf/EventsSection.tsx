import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, MapPin, Users } from "lucide-react";

const events = [
  {
    title: "Workshop: Pha Chế Cafe Chuyên Nghiệp",
    date: "15/12/2024",
    time: "14:00 - 17:00",
    location: "VTF Home Cafe",
    participants: "20 người",
    description: "Học cách pha chế những ly cafe đặc biệt từ chuyên gia.",
    status: "Đang mở đăng ký"
  },
  {
    title: "Hội Thảo: Xu Hướng Du Lịch 2025",
    date: "22/12/2024",
    time: "19:00 - 21:00",
    location: "VTF Home Cafe",
    participants: "50 người",
    description: "Cập nhật những xu hướng du lịch mới nhất và cơ hội khám phá.",
    status: "Sắp diễn ra"
  },
  {
    title: "Tour Tết: Khám Phá Miền Tây",
    date: "28/01/2025",
    time: "3 ngày 2 đêm",
    location: "Miền Tây Nam Bộ",
    participants: "30 người",
    description: "Trải nghiệm văn hóa và ẩm thực đặc sắc miền Tây trong dịp Tết.",
    status: "Early Bird"
  }
];

const EventsSection = () => {
  return (
    <section className="vtf-section bg-muted/30">
      <div className="vtf-container">
        <div className="text-center mb-16 fade-in-up animate">
          <h2 className="vtf-heading">Sự Kiện & Hội Thảo Sắp Tới</h2>
          <p className="vtf-subheading">
            Tham gia các hoạt động thú vị và bổ ích cùng cộng đồng VTF Home
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <Card 
              key={index} 
              className="vtf-card border-0 group hover:scale-105 transition-all duration-500"
            >
              <CardContent className="p-8">
                {/* Status Badge */}
                <div className="mb-6">
                  <span className="inline-block px-4 py-2 bg-gradient-to-r from-primary to-accent text-white text-sm font-semibold rounded-full">
                    {event.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {event.title}
                </h3>

                {/* Event Details */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Calendar className="w-5 h-5 text-primary" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Clock className="w-5 h-5 text-primary" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span>{event.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-muted-foreground">
                    <Users className="w-5 h-5 text-primary" />
                    <span>Giới hạn: {event.participants}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {event.description}
                </p>

                {/* CTA Button */}
                <Button className="vtf-btn-primary w-full">
                  Đăng Ký Ngay
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
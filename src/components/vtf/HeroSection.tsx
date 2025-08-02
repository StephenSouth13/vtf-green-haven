import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroBackground from "@/assets/hero-background.jpg";

const HeroSection = () => {
  const scrollToForm = () => {
    document.getElementById('registration-form')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 coffee offline-hero-bg opacity-60"></div>
      
      {/* Content */}
      <div className="relative z-10 coffee offline-container text-center text-white">
        <div className="fade-in-up animate max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            COFFEE OFFLINE
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl mb-4 font-light">
            Du Lịch & Không Gian Cafe Gặp Gỡ
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed opacity-90">
            Trải nghiệm du lịch theo phong cách mới, nơi khởi đầu cho những cuộc gặp gỡ ý nghĩa.
          </p>
          
          <Button 
            onClick={scrollToForm}
            className="coffee offline-btn-primary text-lg px-12 py-6 rounded-full hover:scale-105 transition-all duration-300"
          >
            Đăng Ký Trải Nghiệm
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <ChevronDown className="w-8 h-8 text-white opacity-70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
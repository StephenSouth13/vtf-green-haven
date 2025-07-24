import HeroSection from "@/components/vtf/HeroSection";
import RegistrationForm from "@/components/vtf/RegistrationForm";
import AboutSection from "@/components/vtf/AboutSection";
import WhyChooseSection from "@/components/vtf/WhyChooseSection";
import ExperienceGallery from "@/components/vtf/ExperienceGallery";
import TestimonialsSection from "@/components/vtf/TestimonialsSection";
import EventsSection from "@/components/vtf/EventsSection";
import Footer from "@/components/vtf/Footer";
import ScrollAnimations from "@/components/vtf/ScrollAnimations";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ScrollAnimations />
      <HeroSection />
      <RegistrationForm />
      <AboutSection />
      <WhyChooseSection />
      <ExperienceGallery />
      <TestimonialsSection />
      <EventsSection />
      <Footer />
    </div>
  );
};

export default Index;

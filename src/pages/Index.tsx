import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import CommodityTicker from "@/components/CommodityTicker";
import AboutSection from "@/components/AboutSection";
import SectorsSection from "@/components/SectorsSection";
import ServicesSection from "@/components/ServicesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CommodityTicker />
      <AboutSection />
      <SectorsSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;

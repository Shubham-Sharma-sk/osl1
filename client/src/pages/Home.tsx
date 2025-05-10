import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
// import QuotesSection from "@/components/QuotesSection";

const Home = () => {
  useEffect(() => {
    // Set title
    document.title = "OSL - AI Solutions & Digital Intelligence";
    
    // Global reveal function
    const revealElements = document.querySelectorAll('.reveal');
    
    const checkReveal = () => {
      const windowHeight = window.innerHeight;
      const revealPoint = 150;
      
      revealElements.forEach(element => {
        const revealTop = element.getBoundingClientRect().top;
        
        if (revealTop < windowHeight - revealPoint) {
          element.classList.add('revealed');
        }
      });
    };

    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    window.addEventListener('resize', checkReveal);
    
    // Initial check
    setTimeout(checkReveal, 100);
    
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('load', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      {/* <QuotesSection /> */}
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Home;
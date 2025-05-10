import { useEffect } from "react";
import { Users, Code, Zap, Award } from "lucide-react";
import AboutImage from "../../../attached_assets/About.svg";

const AboutSection = () => {
  useEffect(() => {
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
    setTimeout(checkReveal, 100);

    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('load', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 md:px-16 relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>

      <div className="max-w-7xl mx-auto">
        {/* Full Width Image */}
        <div className="mb-16 reveal flex justify-center">
          <img 
            src={AboutImage} 
            alt="About Our Agency" 
            className="w-full max-w-[2000px] h-auto object-contain"
          />
        </div>

        {/* Header Text */}
        <div className="text-center mb-16">
          {/* <h2 className="text-3xl md:text-5xl font-bold mb-6 reveal">About Our Agency</h2> */}
          <p className="text-xl max-w-3xl mx-auto opacity-80 reveal">
            {/* We're a digital agency of who can provide you with the best possible results. */}
          </p>
        </div>

       
        
      </div>
    </section>
  );
};

export default AboutSection;
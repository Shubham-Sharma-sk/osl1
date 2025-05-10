import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
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
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24 relative overflow-hidden">
      {/* Decorative SVG elements */}
      <div className="absolute top-1/4 right-10 w-64 h-64 bg-accent/20 rounded-full blur-3xl opacity-40 animate-pulse"></div>
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-purple-700/20 rounded-full blur-3xl opacity-30 animate-pulse delay-1000"></div>
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
        <div className="relative z-10 lg:col-span-5">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none mb-8 reveal font-['Bricolage_Grotesque']">
            Powering<br />Digital<br /><span className="text-accent bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">Intelligence</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl opacity-80 mb-12 reveal font-['Bricolage_Grotesque']">
          We create intelligent digital solutions that empower businesses, leveraging cutting-edge AI agents, automation, and advanced analytics to drive innovation and efficiency          </p>
          <div className="flex flex-col md:flex-row gap-6 reveal">
            <a 
              href="#contact" 
              className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30 flex items-center justify-center font-['Bricolage_Grotesque']"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
              <span className="relative flex items-center">Start a project <ArrowRight className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" /></span>
            </a>
          </div>
        </div>
        <div className="hidden lg:block lg:col-span-7 relative z-10 reveal">
          <div className="w-full h-full flex justify-end">
            <img 
              src="/assets/home.svg" 
              alt="Hero Illustration" 
              className="h-auto" 
              style={{ 
                width: "130%",
                maxHeight: "130vh",
                objectFit: "contain",
                marginRight: "-25%"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
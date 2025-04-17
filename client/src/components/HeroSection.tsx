import { useEffect } from "react";

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
    
    // Initial check
    setTimeout(checkReveal, 100);
    
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('load', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-16 py-24">
      <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tighter leading-none mb-8 reveal">
        Creating<br />Digital<br /><span className="text-accent">Experiences</span>
      </h1>
      <p className="text-xl md:text-2xl max-w-2xl opacity-80 mb-12 reveal">
        We craft exceptional digital solutions that drive innovation and transform businesses through cutting-edge web development.
      </p>
      <div className="flex flex-col md:flex-row gap-6 reveal">
        <a 
          href="#contact" 
          className="bg-white text-dark px-8 py-4 rounded-full font-semibold hover:bg-accent hover:text-white transition-colors duration-300"
        >
          Start a project
        </a>
        <a 
          href="#projects" 
          className="border border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-dark transition-colors duration-300"
        >
          View our work
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

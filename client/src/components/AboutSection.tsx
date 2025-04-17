import { useEffect } from "react";

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
    window.addEventListener('resize', checkReveal);
    
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  return (
    <section id="about" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal">About OSL</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 reveal">
          <div>
            <p className="text-xl leading-relaxed mb-8">
              OSL is a forward-thinking digital agency specializing in creating exceptional web experiences that drive results. Founded on principles of innovation and excellence, we combine technical expertise with creative vision.
            </p>
            <p className="text-xl leading-relaxed">
              Our team of strategists, designers, and developers work seamlessly to transform complex challenges into elegant digital solutions that help businesses thrive in the digital landscape.
            </p>
          </div>
          <div>
            <div className="w-full aspect-video rounded-xl bg-muted overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                alt="Web development team collaborating" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="mt-32 reveal">
          <h3 className="text-3xl md:text-5xl font-bold mb-12">Our Approach</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-2xl font-semibold mb-4">Strategy</h4>
              <p className="opacity-80">We develop comprehensive strategies tailored to your business objectives, ensuring every digital touchpoint serves a purpose.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-2xl font-semibold mb-4">Design</h4>
              <p className="opacity-80">Our designs blend aesthetics with functionality, creating intuitive interfaces that engage users and drive conversions.</p>
            </div>
            <div className="border-t border-white/20 pt-6">
              <h4 className="text-2xl font-semibold mb-4">Development</h4>
              <p className="opacity-80">We build scalable, high-performance applications using cutting-edge technologies and development practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

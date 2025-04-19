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
            We're a team of passionate designers, developers, and strategists who are dedicated to creating exceptional digital experiences.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: Text */}
          <div className="space-y-6 reveal">
            <h3 className="text-2xl md:text-4xl font-bold mb-6">Who We Are</h3>
            <p className="text-lg opacity-80 mb-8">
              Founded in 2025, OSL Strategy  has grown from a small startup to a full-service digital agency. 
              We specialize in creating beautiful, functional websites and applications that help businesses grow 
              and succeed in the digital landscape.
            </p>
          </div>

          {/* Right: Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 reveal">
            {[
              {
                icon: <Users className="w-6 h-6 text-white" />,
                title: "Expert Team",
                text: "Our diverse team brings expertise across all digital disciplines."
              },
              {
                icon: <Code className="w-6 h-6 text-white" />,
                title: "Clean Code",
                text: "We write maintainable, efficient code that scales with your business."
              },
              {
                icon: <Zap className="w-6 h-6 text-white" />,
                title: "Fast Delivery",
                text: "We work efficiently to deliver projects on time and within budget."
              },
              {
                icon: <Award className="w-6 h-6 text-white" />,
                title: "Award Winning",
                text: "Our work has been recognized with multiple industry awards."
              }
            ].map(({ icon, title, text }) => (
              <div key={title} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors">
                <div className="bg-gradient-to-br from-purple-600 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h4 className="text-xl font-semibold mb-2">{title}</h4>
                <p className="opacity-80">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
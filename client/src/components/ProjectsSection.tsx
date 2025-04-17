import { useEffect } from "react";
import { ArrowRight } from "lucide-react";

const ProjectsSection = () => {
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

  const projects = [
    {
      title: "Evora E-Commerce Platform",
      description: "A custom e-commerce solution for a luxury fashion brand, featuring seamless checkout, inventory management, and personalized recommendations.",
      tags: ["E-Commerce", "UX Design", "React", "Node.js"],
      image: "https://images.unsplash.com/photo-1571867424488-4565932edb41",
      reverse: false
    },
    {
      title: "Nexus Finance Dashboard",
      description: "A comprehensive financial dashboard providing real-time analytics, transaction monitoring, and interactive data visualization for enterprise clients.",
      tags: ["FinTech", "Data Visualization", "Vue.js", "AWS"],
      image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
      reverse: true
    },
    {
      title: "Lumina Creative Portfolio",
      description: "An interactive portfolio website for a creative agency featuring dynamic content, immersive animations, and a custom content management system.",
      tags: ["Portfolio", "Motion Design", "Three.js", "Headless CMS"],
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
      reverse: false
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 md:px-16">
      <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal">Featured Projects</h2>
      
      {projects.map((project, index) => (
        <div 
          key={index} 
          className={`grid grid-cols-1 md:grid-cols-2 gap-16 ${index !== projects.length - 1 ? 'mb-32' : ''} reveal`}
        >
          <div className={project.reverse ? "order-2 md:order-1" : ""}>
            {!project.reverse && (
              <>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-xl opacity-80 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1 bg-white/10 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-accent hover:underline inline-flex items-center group">
                  View Case Study
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" />
                </a>
              </>
            )}
            {project.reverse && (
              <div className="overflow-hidden rounded-xl group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            )}
          </div>
          <div className={project.reverse ? "order-1 md:order-2" : ""}>
            {project.reverse && (
              <>
                <h3 className="text-3xl font-bold mb-4">{project.title}</h3>
                <p className="text-xl opacity-80 mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="px-4 py-1 bg-white/10 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href="#" className="text-accent hover:underline inline-flex items-center group">
                  View Case Study
                  <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-2" />
                </a>
              </>
            )}
            {!project.reverse && (
              <div className="overflow-hidden rounded-xl group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
            )}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProjectsSection;

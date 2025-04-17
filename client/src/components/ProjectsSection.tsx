import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Tag, Calendar, Award, ArrowUpRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter"; // Added import for Link from wouter

interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  client: string;
  date: string;
  category: string;
  tags: string[];
  features: string[];
  results: {
    metric: string;
    value: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  image: string;
  gallery: string[];
}

const projects: Project[] = [
  {
    id: "evora-ecommerce",
    title: "Evora E-Commerce Platform",
    description: "A custom e-commerce solution for a luxury fashion brand",
    overview: "Evora needed a premium online shopping experience that matched their high-end brand positioning. We developed a custom e-commerce platform with sophisticated product visualization, personalized recommendations, and seamless checkout.",
    client: "Evora Fashion",
    date: "2023",
    category: "E-Commerce",
    tags: ["E-Commerce", "UX Design", "React", "Node.js", "Stripe", "AWS"],
    features: [
      "360° product visualization",
      "Size recommendation AI",
      "Real-time inventory sync",
      "One-click checkout",
      "Customer loyalty program"
    ],
    results: [
      { metric: "Conversion Rate", value: "+62%" },
      { metric: "Avg. Order Value", value: "+41%" },
      { metric: "Mobile Sales", value: "+85%" }
    ],
    testimonial: {
      quote: "The platform transformed our online presence and significantly increased our digital revenue stream.",
      author: "Alexandra Morgan",
      position: "Digital Director, Evora"
    },
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41",
    gallery: [
      "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
      "https://images.unsplash.com/photo-1560243563-062bfc001d68",
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8"
    ]
  },
  {
    id: "nexus-finance",
    title: "Nexus Finance Dashboard",
    description: "Comprehensive financial analytics platform for enterprise clients",
    overview: "Nexus Financial Services needed a powerful dashboard to help their enterprise clients visualize complex financial data and make informed decisions. We built a real-time analytics platform with interactive visualizations and custom reporting.",
    client: "Nexus Financial Services",
    date: "2023",
    category: "FinTech",
    tags: ["FinTech", "Data Visualization", "Vue.js", "AWS", "Machine Learning", "API Integration"],
    features: [
      "Real-time financial monitoring",
      "Predictive analytics",
      "Custom report generation",
      "Multi-currency support",
      "Role-based access control"
    ],
    results: [
      { metric: "Decision Time", value: "-35%" },
      { metric: "Data Processing", value: "+125%" },
      { metric: "Client Retention", value: "+28%" }
    ],
    testimonial: {
      quote: "This dashboard has revolutionized how our clients interact with their financial data and make strategic decisions.",
      author: "Jonathan Weber",
      position: "CTO, Nexus Financial"
    },
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
      "https://images.unsplash.com/photo-1543286386-713bdd548da4"
    ]
  },
  {
    id: "lumina-portfolio",
    title: "Lumina Creative Portfolio",
    description: "Immersive digital showcase for a leading creative agency",
    overview: "Lumina Creative needed a website that would demonstrate their cutting-edge approach to design and storytelling. We created an immersive portfolio with dynamic animations, interactive case studies, and a custom CMS for easy content updates.",
    client: "Lumina Creative",
    date: "2022",
    category: "Portfolio",
    tags: ["Portfolio", "Motion Design", "Three.js", "Headless CMS", "WebGL", "Animation"],
    features: [
      "3D project showcase",
      "Parallax scrolling effects",
      "Case study storytelling",
      "Interactive timeline",
      "Custom admin dashboard"
    ],
    results: [
      { metric: "Engagement", value: "+78%" },
      { metric: "Avg. Visit Duration", value: "+125%" },
      { metric: "Project Inquiries", value: "+43%" }
    ],
    testimonial: {
      quote: "Our new website perfectly captures our creative spirit and has dramatically increased the quality of leads we receive.",
      author: "Emma Chen",
      position: "Creative Director, Lumina"
    },
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    gallery: [
      "https://images.unsplash.com/photo-1558655146-6c222b05fce4",
      "https://images.unsplash.com/photo-1567016432779-094069958ea5",
      "https://images.unsplash.com/photo-1559028012-481c04fa702d"
    ]
  }
];

const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState<number>(0);
  const [isAnimating, setIsAnimating] = useState<boolean>(false);
  const projectsRef = useRef<HTMLDivElement>(null);

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

  const nextProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevProject = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setActiveProject((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToProject = (index: number) => {
    if (isAnimating || index === activeProject) return;
    setIsAnimating(true);
    setActiveProject(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const project = projects[activeProject];

  return (
    <section id="projects" className="py-24 px-6 md:px-16 overflow-hidden" ref={projectsRef}>
      <div className="mb-16 flex flex-col md:flex-row justify-between items-start md:items-end">
        <div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 reveal">Featured Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl reveal">
            Explore our latest work and see how we've helped businesses transform their digital presence.
          </p>
          <Link href="/projects"> {/* Link component used here */}
            <Button className="mt-6 group">
              <span>View All Projects</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        <div className="flex gap-2 mt-6 md:mt-0">
          <Button 
            variant="outline" 
            size="icon"
            onClick={prevProject}
            disabled={isAnimating}
            className="rounded-full"
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <Button 
            variant="outline" 
            size="icon"
            onClick={nextProject}
            disabled={isAnimating}
            className="rounded-full"
          >
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Project Navigation */}
      <div className="flex overflow-x-auto scrollbar-hide mb-12 gap-4 pb-4">
        {projects.map((p, index) => (
          <button
            key={index}
            onClick={() => goToProject(index)}
            className={`flex-shrink-0 px-5 py-3 rounded-full border transition-all ${
              index === activeProject 
                ? 'bg-primary/20 border-primary text-white' 
                : 'bg-transparent border-gray-700 text-gray-400 hover:border-gray-500'
            }`}
          >
            {p.title}
          </button>
        ))}
      </div>

      {/* Main Project Display */}
      <motion.div
        key={activeProject}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          {/* Project Image */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative overflow-hidden rounded-xl">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 right-4 flex gap-2">
                <Button size="sm" variant="secondary" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Live
                </Button>
              </div>
            </div>
          </div>

          {/* Project Info */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap gap-3 mb-3">
                <span className="text-xs px-3 py-1 bg-primary/20 text-primary-foreground rounded-full">
                  {project.category}
                </span>
                <span className="text-xs px-3 py-1 bg-gray-100/10 text-gray-300 rounded-full flex items-center">
                  <Calendar className="h-3 w-3 mr-1" /> {project.date}
                </span>
                <span className="text-xs px-3 py-1 bg-gray-100/10 text-gray-300 rounded-full flex items-center">
                  <Award className="h-3 w-3 mr-1" /> {project.client}
                </span>
              </div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h3>
              <p className="text-lg text-gray-300 mb-6">
                {project.overview}
              </p>
            </div>

            {/* Key Features */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary">1</span>
                </span>
                Key Features
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary">2</span>
                </span>
                Results
              </h4>
              <div className="grid grid-cols-3 gap-4">
                {project.results.map((result, index) => (
                  <div key={index} className="bg-gray-800/50 rounded-lg p-4 text-center">
                    <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{result.value}</p>
                    <p className="text-xs text-gray-400">{result.metric}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xl font-semibold mb-4 flex items-center">
                <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                  <span className="text-primary">3</span>
                </span>
                Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span key={index} className="flex items-center px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    <Tag className="h-3 w-3 mr-1" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button className="group">
                <span>View Full Case Study</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 md:p-12 max-w-4xl mx-auto">
            <div className="text-2xl text-gray-300 italic mb-6 relative">
              <span className="absolute -left-4 -top-4 text-5xl text-primary/20">"</span>
              {project.testimonial.quote}
              <span className="absolute -right-4 bottom-0 text-5xl text-primary/20">"</span>
            </div>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center text-xl font-bold text-primary mr-4">
                {project.testimonial.author.charAt(0)}
              </div>
              <div>
                <p className="font-semibold">{project.testimonial.author}</p>
                <p className="text-sm text-gray-400">{project.testimonial.position}</p>
              </div>
            </div>
          </div>
        )}
      </motion.div>

      {/* Project Indicator */}
      <div className="flex justify-center mt-16">
        <div className="flex gap-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === activeProject ? 'bg-primary w-8' : 'bg-gray-700 hover:bg-gray-600'
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
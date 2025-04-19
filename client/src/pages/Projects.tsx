import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Clock, Calendar, User, Tag, Plus, ChevronsRight } from "lucide-react";
import { CircleBlob, GridPattern } from "@/components/ui/decorative-elements";

// Project types
interface ProjectFeature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface ProjectTech {
  name: string;
  category: "frontend" | "backend" | "design" | "other";
}

interface Project {
  id: string;
  title: string;
  description: string;
  industry: string;
  type: string;
  date: string;
  image: string;
  category: string;
  color: string;
  link?: string;
  features: ProjectFeature[];
  technologies: ProjectTech[];
  timeline: string;
  client: string;
}

// Sample projects data
const projects: Project[] = [
  {
    id: "evora-ecommerce",
    title: "Evora E-Commerce Platform",
    description: "A premium shopping experience for a luxury fashion brand with sophisticated product visualization and seamless checkout.",
    industry: "Fashion",
    type: "E-Commerce",
    date: "2023",
    image: "https://images.unsplash.com/photo-1571867424488-4565932edb41",
    category: "E-Commerce",
    color: "from-purple-500 to-fuchsia-500",
    link: "https://evora.example.com",
    features: [
      {
        title: "360° Product Viewer",
        description: "Interactive product visualization allowing customers to view products from every angle",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "AI Size Recommender",
        description: "Machine learning powered size recommendations based on customer preferences",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Real-time Inventory",
        description: "Live inventory tracking across multiple retail locations and the warehouse",
        icon: <ArrowRight className="h-5 w-5" />
      }
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Node.js", category: "backend" },
      { name: "TypeScript", category: "frontend" },
      { name: "Stripe", category: "backend" },
      { name: "AWS", category: "backend" },
      { name: "Figma", category: "design" }
    ],
    timeline: "4 months",
    client: "Evora Fashion"
  },
  {
    id: "nexus-finance",
    title: "Nexus Finance Dashboard",
    description: "Enterprise financial analytics platform with interactive data visualization and predictive analytics for informed decision making.",
    industry: "Finance",
    type: "Analytics Platform",
    date: "2023",
    image: "https://images.unsplash.com/photo-1520333789090-1afc82db536a",
    category: "FinTech",
    color: "from-blue-500 to-cyan-500",
    link: "https://nexus.example.com",
    features: [
      {
        title: "Real-time Analytics",
        description: "Live data processing and visualization for instant financial insights",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Predictive Modeling",
        description: "AI-driven forecasting to anticipate market trends and financial outcomes",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Custom Reporting",
        description: "Flexible report generation with exportable formats and scheduled delivery",
        icon: <ArrowRight className="h-5 w-5" />
      }
    ],
    technologies: [
      { name: "Vue.js", category: "frontend" },
      { name: "Python", category: "backend" },
      { name: "D3.js", category: "frontend" },
      { name: "TensorFlow", category: "backend" },
      { name: "MongoDB", category: "backend" },
      { name: "Sketch", category: "design" }
    ],
    timeline: "6 months",
    client: "Nexus Financial Services"
  },
  {
    id: "lumina-portfolio",
    title: "Lumina Creative Portfolio",
    description: "Immersive digital showcase with dynamic animations and interactive case studies for a cutting-edge creative agency.",
    industry: "Creative",
    type: "Portfolio Site",
    date: "2022",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766",
    category: "Design",
    color: "from-pink-500 to-orange-500",
    link: "https://lumina.example.com",
    features: [
      {
        title: "3D Project Gallery",
        description: "WebGL-powered interactive showcase of creative projects with depth and motion",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Parallax Storytelling",
        description: "Scroll-based animation sequences that reveal project narratives in an engaging way",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Custom CMS",
        description: "Tailored content management system for easy portfolio updates and case study creation",
        icon: <ArrowRight className="h-5 w-5" />
      }
    ],
    technologies: [
      { name: "React", category: "frontend" },
      { name: "Three.js", category: "frontend" },
      { name: "GSAP", category: "frontend" },
      { name: "Express", category: "backend" },
      { name: "Sanity CMS", category: "backend" },
      { name: "Adobe XD", category: "design" }
    ],
    timeline: "3 months",
    client: "Lumina Creative"
  },
  {
    id: "atlas-travel",
    title: "Atlas Travel Companion",
    description: "AI-powered travel planning app that creates personalized itineraries based on user preferences, budget, and travel style.",
    industry: "Travel",
    type: "Mobile App",
    date: "2023",
    image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f",
    category: "Mobile",
    color: "from-green-500 to-teal-500",
    link: "https://atlas.example.com",
    features: [
      {
        title: "Smart Itinerary Generator",
        description: "AI algorithm that builds custom travel plans based on multiple factors and constraints",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Offline Maps",
        description: "Downloaded map data for navigation without requiring internet connection while traveling",
        icon: <ArrowRight className="h-5 w-5" />
      },
      {
        title: "Local Experiences",
        description: "Curated recommendations from locals for authentic, off-the-beaten-path experiences",
        icon: <ArrowRight className="h-5 w-5" />
      }
    ],
    technologies: [
      { name: "React Native", category: "frontend" },
      { name: "Python", category: "backend" },
      { name: "TensorFlow", category: "backend" },
      { name: "Firebase", category: "backend" },
      { name: "Google Maps API", category: "other" },
      { name: "Figma", category: "design" }
    ],
    timeline: "5 months",
    client: "Atlas Adventures"
  }
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Projects | OSL Strategy";
  }, []);

  // Get unique categories
  const categories = Array.from(new Set(projects.map(p => p.category)));

  // Filter projects by category
  const filteredProjects = selectedCategory 
    ? projects.filter(p => p.category === selectedCategory)
    : projects;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-16 bg-gradient-to-br from-purple-900/30 to-black">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300 mb-8">
              Explore our portfolio of innovative digital experiences that drive results for our clients.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mt-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className={`px-5 py-2 rounded-full transition-all ${
                  selectedCategory === null
                    ? "bg-white text-black"
                    : "bg-white/10 hover:bg-white/20"
                }`}
              >
                All
              </button>
              
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-5 py-2 rounded-full transition-all ${
                    selectedCategory === category
                      ? "bg-white text-black"
                      : "bg-white/10 hover:bg-white/20"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Main Project Grid */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          {selectedProject ? (
            // Project Detail View
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Back button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
              >
                <ArrowRight className="h-4 w-4 rotate-180" />
                <span>Back to all projects</span>
              </button>
              
              {/* Hero section */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className={`px-3 py-1 text-xs rounded-full bg-${selectedProject.category.toLowerCase()}-500/20 text-${selectedProject.category.toLowerCase()}-300`}>
                      {selectedProject.category}
                    </span>
                    <span className="text-sm text-gray-400 flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {selectedProject.date}
                    </span>
                  </div>
                  
                  <h1 className="text-3xl md:text-5xl font-bold mb-6">{selectedProject.title}</h1>
                  <p className="text-xl text-gray-300 mb-8">{selectedProject.description}</p>
                  
                  <div className="grid grid-cols-2 gap-6 mb-8">
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">CLIENT</h3>
                      <p className="font-medium">{selectedProject.client}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">TIMELINE</h3>
                      <p className="font-medium">{selectedProject.timeline}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">INDUSTRY</h3>
                      <p className="font-medium">{selectedProject.industry}</p>
                    </div>
                    <div>
                      <h3 className="text-sm text-gray-500 mb-1">PROJECT TYPE</h3>
                      <p className="font-medium">{selectedProject.type}</p>
                    </div>
                  </div>
                  
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <span>Visit Live Project</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
                
                <div className="relative">
                  <div className={`absolute -inset-4 bg-gradient-to-r ${selectedProject.color} rounded-xl blur-xl opacity-30`}></div>
                  <img 
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-auto aspect-video object-cover rounded-xl relative z-10"
                  />
                </div>
              </div>
              
              {/* Features */}
              <div className="py-16 border-y border-gray-800">
                <h2 className="text-3xl font-bold mb-12">Key Features</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {selectedProject.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-colors"
                    >
                      <h3 className="text-xl font-semibold mb-4 flex items-center gap-3">
                        <span className={`p-2 rounded-lg bg-gradient-to-br ${selectedProject.color}`}>
                          {feature.icon}
                        </span>
                        {feature.title}
                      </h3>
                      <p className="text-gray-400">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold mb-12">Technologies Used</h2>
                
                <div className="space-y-8">
                  <div>
                    <h3 className="text-lg font-medium mb-4">Frontend</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies
                        .filter(tech => tech.category === "frontend")
                        .map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                          >
                            {tech.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Backend</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies
                        .filter(tech => tech.category === "backend")
                        .map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                          >
                            {tech.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-medium mb-4">Design & Other</h3>
                    <div className="flex flex-wrap gap-3">
                      {selectedProject.technologies
                        .filter(tech => tech.category === "design" || tech.category === "other")
                        .map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-800 rounded-full text-sm"
                          >
                            {tech.name}
                          </span>
                        ))
                      }
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Related Projects */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Related Projects</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {projects
                    .filter(p => p.id !== selectedProject.id && p.category === selectedProject.category)
                    .slice(0, 3)
                    .map((project, index) => (
                      <div 
                        key={index}
                        className="bg-gray-900/50 border border-gray-800 rounded-xl overflow-hidden group cursor-pointer"
                        onClick={() => {
                          window.scrollTo(0, 0);
                          setSelectedProject(project);
                        }}
                      >
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                            {project.description}
                          </p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">{project.date}</span>
                            <ArrowRight className="h-4 w-4 text-primary transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            </motion.div>
          ) : (
            // Project Grid View (Discord-like UI with boxes)
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden cursor-pointer group"
                >
                  {/* Project Image with Gradient Overlay */}
                  <div className="relative overflow-hidden">
                    <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-40 mix-blend-overlay`}></div>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-sm rounded-full text-xs font-medium">
                      {project.category}
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-400">{project.timeline}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-gray-400" />
                        <span className="text-xs text-gray-400">{project.date}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 mb-4 line-clamp-2">
                      {project.description}
                    </p>
                    
                    {/* Project Info Cards (Discord-style) */}
                    <div className="mb-6 space-y-3">
                      <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                        <User className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-400">Client</div>
                          <div className="text-sm font-medium">{project.client}</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-3 p-3 bg-black/30 rounded-lg">
                        <Tag className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-xs text-gray-400">Industry</div>
                          <div className="text-sm font-medium">{project.industry}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Features List */}
                    <div className="border-t border-gray-800 pt-4 mt-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="font-medium text-sm">Key Features</div>
                        <div className="text-xs text-gray-500">{project.features.length} items</div>
                      </div>
                      
                      <div className="space-y-2">
                        {project.features.slice(0, 2).map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                            <div className="w-1 h-1 rounded-full bg-gray-500"></div>
                            <div>{feature.title}</div>
                          </div>
                        ))}
                        
                        {project.features.length > 2 && (
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Plus className="h-3 w-3" />
                            <div>{project.features.length - 2} more features</div>
                          </div>
                        )}
                      </div>
                    </div>
                    
                    {/* View Project Button */}
                    <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-800">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        className="text-primary group-hover:text-white transition-colors flex items-center gap-2"
                      >
                        <span>View Details</span>
                        <ChevronsRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      
                      <div className="flex -space-x-2">
                        {project.technologies.slice(0, 3).map((tech, idx) => (
                          <div 
                            key={idx} 
                            className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-700"
                            title={tech.name}
                          >
                            {tech.name.charAt(0)}
                          </div>
                        ))}
                        
                        {project.technologies.length > 3 && (
                          <div className="w-6 h-6 rounded-full bg-gray-800 flex items-center justify-center text-xs font-bold border border-gray-700">
                            +{project.technologies.length - 3}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's collaborate to create a digital experience that exceeds your expectations and drives results for your business.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <span>Get a Free Consultation</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <span>View More Projects</span>
            </Button>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </div>
  );
};

export default Projects;
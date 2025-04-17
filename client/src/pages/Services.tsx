import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/components/ServicesSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, ExternalLink, Layers, Code, Flag, Users, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

// Service categories
const serviceCategories = [
  {
    id: "strategy",
    title: "Strategy",
    icon: <Flag className="h-6 w-6 text-purple-400" />,
    description: "Develop clear direction and vision for your digital initiatives",
    items: ["Market Research", "Digital Strategy", "Brand Positioning", "User Research", "Content Strategy"]
  },
  {
    id: "design",
    title: "Design",
    icon: <Layers className="h-6 w-6 text-purple-400" />,
    description: "Create intuitive, beautiful, and user-centered digital experiences",
    items: ["UX/UI Design", "Product Design", "Brand Identity", "Design Systems", "Prototyping"]
  },
  {
    id: "development",
    title: "Development",
    icon: <Code className="h-6 w-6 text-purple-400" />,
    description: "Build robust, scalable, and high-performance digital solutions",
    items: ["Web Development", "E-Commerce", "Custom Applications", "API Development", "Mobile Apps"]
  },
  {
    id: "growth",
    title: "Growth",
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    description: "Scale your digital presence and maximize business impact",
    items: ["Analytics & Insights", "Conversion Optimization", "Performance Marketing", "SEO & Content", "Marketing Automation"]
  }
];

// Success metrics
const successMetrics = [
  {
    number: "93%",
    text: "Increase in user engagement across client platforms"
  },
  {
    number: "64%",
    text: "Average growth in conversion rates after implementation"
  },
  {
    number: "127%",
    text: "Return on investment for clients within first year"
  },
  {
    number: "42+",
    text: "Enterprise-scale projects successfully delivered"
  }
];

// Technologies we use
const technologies = [
  "React", "Next.js", "Vue.js", "TypeScript", "Node.js", 
  "Python", "Django", "Express", "PostgreSQL", "MongoDB", 
  "AWS", "Vercel", "Docker", "GraphQL", "Shopify", 
  "Figma", "Adobe XD", "Webflow", "WordPress", "Tailwind CSS"
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("strategy");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Services | OSL Strategy";
  }, []);

  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                We combine strategic thinking, design excellence, and technical expertise to create digital products that drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg">
                  Contact Us
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl opacity-70"></div>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {serviceCategories.map((category, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900/70 backdrop-blur-sm border border-gray-800 p-6 rounded-xl hover:border-purple-500/50 transition-colors"
                  >
                    <div className="bg-gray-800/50 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
                    <p className="text-sm text-gray-400">{category.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-24 px-6 md:px-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Categories Sidebar */}
            <div className="lg:w-1/4">
              <h2 className="text-2xl font-bold mb-6">Services</h2>
              <div className="space-y-2">
                {serviceCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-5 py-4 rounded-lg transition-all flex items-center justify-between ${
                      activeCategory === category.id
                        ? "bg-primary/20 text-white"
                        : "bg-gray-800/50 text-gray-300 hover:bg-gray-800"
                    }`}
                  >
                    <div className="flex items-center">
                      <div className="mr-3">{category.icon}</div>
                      <span>{category.title}</span>
                    </div>
                    <ChevronRight className={`h-5 w-5 transition-transform ${
                      activeCategory === category.id ? "rotate-90" : ""
                    }`} />
                  </button>
                ))}
              </div>
            </div>
            
            {/* Service Items */}
            <div className="lg:w-3/4">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    {serviceCategories.find(c => c.id === activeCategory)?.icon}
                  </div>
                  <h2 className="text-3xl font-bold">
                    {serviceCategories.find(c => c.id === activeCategory)?.title}
                  </h2>
                </div>
                
                <p className="text-xl text-gray-300 mb-12 max-w-3xl">
                  {serviceCategories.find(c => c.id === activeCategory)?.description}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {serviceCategories
                    .find(c => c.id === activeCategory)
                    ?.items.map((item, index) => {
                      const relatedService = services.find(s => 
                        s.title === item || s.title.includes(item) || item.includes(s.title)
                      );
                      
                      return (
                        <motion.div
                          key={item}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          className={`group cursor-pointer border border-gray-800 rounded-xl p-6 transition-all ${
                            selectedService === item
                              ? "bg-primary/10 border-primary/50"
                              : "hover:bg-gray-800/50 hover:border-gray-700"
                          }`}
                          onClick={() => setSelectedService(selectedService === item ? null : item)}
                        >
                          <div className="flex items-center justify-between mb-4">
                            <h3 className="text-xl font-semibold">{item}</h3>
                            <div className="w-8 h-8 rounded-full bg-gray-800 group-hover:bg-gray-700 flex items-center justify-center">
                              <ChevronRight className={`h-4 w-4 transition-transform ${selectedService === item ? "rotate-90" : ""}`} />
                            </div>
                          </div>
                          
                          {selectedService === item && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="mt-4 pt-4 border-t border-gray-700"
                            >
                              <p className="text-gray-300 mb-4">
                                {relatedService?.shortDescription || `Our ${item} services help businesses achieve their goals through strategic implementation and expert execution.`}
                              </p>
                              
                              {relatedService && (
                                <Link href={`/services/${relatedService.id}`}>
                                  <Button size="sm" variant="secondary" className="group">
                                    <span>Learn more</span>
                                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                                  </Button>
                                </Link>
                              )}
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Success Metrics Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Proven Success</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Our data-driven approach delivers measurable results for businesses of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 border border-gray-800 rounded-xl p-8 text-center"
              >
                <div className="text-5xl font-bold text-primary mb-3">{metric.number}</div>
                <p className="text-gray-300">{metric.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-24 px-6 md:px-16 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Technologies We Use</h2>
              <p className="text-xl text-gray-400 mb-8">
                We leverage the latest technologies to build scalable, high-performance digital solutions.
              </p>
              
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.02 }}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/70 border border-gray-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Expertise That Matters</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Our team of specialists stays on the cutting edge of technology trends, ensuring your 
                project benefits from the most effective and future-proof solutions available.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">•</div>
                  <div>
                    <span className="font-medium">Advanced Frameworks</span>
                    <p className="text-sm text-gray-400">Building with React, Vue, and other modern frameworks for optimal performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">•</div>
                  <div>
                    <span className="font-medium">Cloud-Native Architecture</span>
                    <p className="text-sm text-gray-400">Leveraging AWS, Azure, and other platforms for scalable, reliable infrastructure</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-primary">•</div>
                  <div>
                    <span className="font-medium">Design & Prototyping Tools</span>
                    <p className="text-sm text-gray-400">Creating seamless experiences with Figma, Adobe XD, and other design platforms</p>
                  </div>
                </li>
              </ul>
              
              <Button className="group w-full">
                <span>View Our Full Technology Stack</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and create exceptional digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>View Our Work</span>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;
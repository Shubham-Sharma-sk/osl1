import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { services } from "@/components/ServicesSection";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ChevronRight, ArrowRight, ExternalLink, Layers, Code, Flag, Users, BrainCircuit, MessageSquareText, LineChart, BarChart3, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CircleBlob, GridPattern } from "@/components/ui/decorative-elements";

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
    id: "ai-chatbot",
    title: "AI Chatbot",
    icon: <MessageSquareText className="h-6 w-6 text-purple-400" />,
    description: "Intelligent conversational agents that enhance customer service",
    items: ["Natural Language Processing", "Multi-channel Integration", "Personalized Interactions", "Analytics & Insights", "Continuous Learning"]
  },
  {
    id: "ai-agent",
    title: "AI Agent",
    icon: <BrainCircuit className="h-6 w-6 text-purple-400" />,
    description: "Autonomous agents that perform complex tasks with minimal human intervention",
    items: ["Autonomous Decision Making", "Process Automation", "Data Analysis", "API Integration", "Workflow Optimization"]
  },
  {
    id: "development",
    title: "Development",
    icon: <Code className="h-6 w-6 text-purple-400" />,
    description: "Build robust, scalable, and high-performance digital solutions",
    items: ["Web Development", "Custom Applications", "API Development", "Mobile Apps", "Cloud Solutions"]
  },
  {
    id: "business-planning",
    title: "Business Planning",
    icon: <LineChart className="h-6 w-6 text-purple-400" />,
    description: "Strategic planning to align technology with business objectives",
    items: ["Digital Transformation", "Technology Roadmapping", "Market Analysis", "Investment Planning", "Growth Strategy"]
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
  "AWS", "Vercel", "Docker", "GraphQL", "OpenAI GPT-4",
  "LangChain", "TensorFlow", "PyTorch", "Kubernetes", "Tailwind CSS"
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState<string>("strategy");
  const [selectedService, setSelectedService] = useState<string | null>(null);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "OSL STRATEGY";

    // Check if we have a hash in the URL to open a specific service section
    const hash = window.location.hash;
    if (hash) {
      const categoryId = hash.replace('#', '');
      const category = serviceCategories.find(cat => cat.id === categoryId);
      if (category) {
        setActiveCategory(categoryId);
      }
    }
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
      <section className="pt-32 pb-20 px-6 md:px-16 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-900/10 via-blue-900/10 to-transparent opacity-80 pointer-events-none"></div>
        <CircleBlob className="absolute -top-96 -right-96 text-purple-500/10" />
        <GridPattern className="absolute inset-0 opacity-5" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-purple-500/10 text-purple-400 border border-purple-500/30"
              >
                <span className="flex items-center gap-1.5">
                  <Zap className="w-4 h-4" />
                  Our Solutions
                </span>
              </motion.div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Our Services</h1>
              <p className="text-xl text-gray-400 mb-8 max-w-xl">
                We combine strategic thinking, design excellence, and technical expertise to create digital products that drive results.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="group">
                  <span>View Our Work</span>
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-2 gap-6"
            >
              {serviceCategories.slice(0, 4).map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                  className={`relative group cursor-pointer rounded-2xl overflow-hidden border border-gray-800 transition-all duration-300 hover:border-purple-500/30 bg-gray-900/30 backdrop-blur-sm p-6 ${activeCategory === category.id ? 'bg-gradient-to-br from-purple-900/30 to-blue-900/30 border-purple-500/30' : ''}`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${activeCategory === category.id ? 'bg-purple-500/20' : 'bg-gray-800'}`}>
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                  <p className="text-gray-400 text-sm">{category.description.split(' ').slice(0, 4).join(' ')}...</p>
                  
                  {/* Hover effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Active indicator */}
                  {activeCategory === category.id && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-blue-500"></div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Service Categories Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-background to-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Comprehensive Digital Services</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end solutions to help your business thrive in the digital landscape.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                id={category.id}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl overflow-hidden transition-all duration-300 hover:border-purple-500/30 group"
              >
                <div className="p-8">
                  <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-all duration-300">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{category.title}</h3>
                  <p className="text-gray-400 mb-6">{category.description}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm group/item">
                        <div className="mt-1 text-purple-400 group-hover/item:text-purple-300 transition-colors">•</div>
                        <span className="text-gray-300 group-hover/item:text-white transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href={`/services#${category.id}`}>
                    <Button variant="outline" className="w-full group">
                      <span>Learn More</span>
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>
                
                {/* Hover gradient */}
                <div className="h-1 w-full bg-gradient-to-r from-purple-500 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Success Metrics Section */}
      <section className="py-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Driving Real Results</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our work delivers measurable impact for our clients across industries and digital channels.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {successMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <h3 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">{metric.number}</h3>
                <p className="text-gray-300">{metric.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Technologies Section */}
      <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900/50 to-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-5xl font-bold mb-6"
              >
                Technologies We Use
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl text-gray-400 mb-8"
              >
                We leverage cutting-edge technologies to build scalable, robust, and future-proof solutions for our clients.
              </motion.p>
              
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {technologies.map((tech, index) => (
                  <motion.div
                    key={index}
                    variants={staggerItem}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gray-800 border border-gray-700 px-4 py-2 rounded-full text-sm"
                  >
                    {tech}
                  </motion.div>
                ))}
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gray-900/70 border border-gray-800 rounded-xl p-8"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold">Expertise That Matters</h3>
              </div>
              
              <p className="text-gray-300 mb-6">
                Our team of specialists stays on the cutting edge of technology trends, ensuring your 
                project benefits from the most effective and future-proof solutions available.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <span className="font-medium">Advanced Frameworks</span>
                    <p className="text-sm text-gray-400">Building with React, Vue, and other modern frameworks for optimal performance</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <span className="font-medium">AI & Machine Learning</span>
                    <p className="text-sm text-gray-400">Implementing cutting-edge AI solutions using GPT-4, LangChain, and custom ML models</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 text-purple-400">•</div>
                  <div>
                    <span className="font-medium">Cloud-Native Architecture</span>
                    <p className="text-sm text-gray-400">Leveraging AWS, Azure, and other platforms for scalable, reliable infrastructure</p>
                  </div>
                </li>
              </ul>
              
              <Button className="group w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                <span>View Our Full Technology Stack</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      {/* <section className="py-24 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Let's discuss how our services can help you achieve your business goals and create exceptional digital experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <span>Get a Quote</span>
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg">
              <ExternalLink className="mr-2 h-4 w-4" />
              <span>View Our Work</span>
            </Button>
          </div>
        </div>
      </section> */}
      
      <Footer />
    </div>
  );
};

export default Services;
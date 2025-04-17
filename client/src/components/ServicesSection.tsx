import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Cpu, Layers, Code, PenTool, BarChart3, ShoppingCart, Globe, Zap, Rocket } from "lucide-react";

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: JSX.Element;
  features: {
    title: string;
    description: string;
    icon: JSX.Element;
  }[];
  benefits: string[];
  techStack: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  image: string;
  caseStudies: {
    title: string;
    description: string;
    result: string;
  }[];
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Creating powerful, responsive websites and web applications with cutting-edge technologies.",
    fullDescription: "Our web development services combine technical excellence with creative design to deliver websites and web applications that not only look stunning but perform flawlessly. We build with scalability and future growth in mind, ensuring your digital presence can evolve as your business does.",
    icon: <Code className="h-8 w-8 text-purple-400" />,
    features: [
      {
        title: "Custom Web Applications",
        description: "Tailored solutions that address your unique business challenges and transform your operations.",
        icon: <Layers className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Progressive Web Apps",
        description: "App-like experiences that work offline, load instantly, and don't require installation.",
        icon: <Zap className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Frontend & Backend Development",
        description: "End-to-end development with modern frameworks to create seamless, high-performance websites.",
        icon: <Code className="h-6 w-6 text-purple-400" />
      },
      {
        title: "CMS Implementation",
        description: "Powerful content management systems that give you complete control over your digital content.",
        icon: <PenTool className="h-6 w-6 text-purple-400" />
      }
    ],
    benefits: [
      "Increased conversion rates through optimized user journeys",
      "Reduced bounce rates with fast-loading, responsive designs",
      "Improved user engagement with intuitive interfaces",
      "Enhanced brand credibility through professional web presence"
    ],
    techStack: [
      "React", "TypeScript", "Node.js", "Express", "Next.js", "GraphQL", "PostgreSQL", "MongoDB", "AWS/Azure"
    ],
    processSteps: [
      {
        title: "Discovery & Planning",
        description: "We analyze your requirements, research your audience, and develop a strategic plan."
      },
      {
        title: "Design & Prototyping",
        description: "Creating wireframes and interactive prototypes to visualize the final product."
      },
      {
        title: "Development",
        description: "Building your solution with clean, efficient code and cutting-edge technologies."
      },
      {
        title: "Testing & Deployment",
        description: "Rigorous testing across devices and browsers before launching to production."
      },
      {
        title: "Support & Optimization",
        description: "Ongoing maintenance, performance monitoring, and continuous improvements."
      }
    ],
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    caseStudies: [
      {
        title: "E-commerce Platform Redesign",
        description: "Rebuilt an outdated e-commerce site with modern architecture and improved user experience.",
        result: "200% increase in mobile conversions and 40% reduction in cart abandonment."
      },
      {
        title: "SaaS Dashboard Development",
        description: "Created an intuitive, data-rich dashboard for a SaaS product with real-time analytics.",
        result: "User engagement increased by 60% and customer retention improved by 25%."
      }
    ]
  },
  {
    id: "digital-design",
    title: "Digital Design",
    shortDescription: "Crafting intuitive, stunning interfaces that elevate your brand and captivate your audience.",
    fullDescription: "Our design philosophy centers on creating meaningful user experiences that align with your brand values while delighting your customers. We believe great design is invisible – it should feel natural and intuitive while guiding users toward their goals effortlessly.",
    icon: <PenTool className="h-8 w-8 text-purple-400" />,
    features: [
      {
        title: "UI/UX Design",
        description: "User-centered design processes that create intuitive, enjoyable experiences for your customers.",
        icon: <Layers className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Responsive Web Design",
        description: "Websites that adapt perfectly to any screen size, providing optimal viewing experiences.",
        icon: <Globe className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Interaction Design",
        description: "Thoughtful animations and micro-interactions that guide users and add delight.",
        icon: <Cpu className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Design Systems",
        description: "Cohesive design frameworks that ensure consistency and accelerate future development.",
        icon: <PenTool className="h-6 w-6 text-purple-400" />
      }
    ],
    benefits: [
      "Higher user satisfaction scores with intuitive interfaces",
      "Stronger brand recognition through consistent visual language",
      "Reduced development time with reusable design components",
      "Better accessibility compliance for wider audience reach"
    ],
    techStack: [
      "Figma", "Adobe Creative Suite", "Framer", "Sketch", "InVision", "Principle", "Webflow", "Storybook"
    ],
    processSteps: [
      {
        title: "Research & Discovery",
        description: "Conducting user research, competitor analysis, and brand exploration."
      },
      {
        title: "Conceptualization",
        description: "Developing creative concepts and visual directions based on research findings."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Creating structural layouts and interactive prototypes to test user flows."
      },
      {
        title: "Visual Design",
        description: "Applying brand elements, color palettes, typography, and imagery to create polished designs."
      },
      {
        title: "User Testing & Refinement",
        description: "Gathering user feedback and iterating on designs to optimize the experience."
      }
    ],
    image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e",
    caseStudies: [
      {
        title: "Financial App Redesign",
        description: "Simplified complex financial data into intuitive visualizations and user-friendly interfaces.",
        result: "App store rating increased from 3.2 to 4.8 stars with 30% increase in daily active users."
      },
      {
        title: "Brand Identity System",
        description: "Created comprehensive brand identity and design system for a growing tech startup.",
        result: "Consistent user experience across all platforms and 40% faster development of new features."
      }
    ]
  },
  {
    id: "e-commerce",
    title: "E-Commerce Solutions",
    shortDescription: "Building digital storefronts that drive sales, enhance customer experience, and scale with your business.",
    fullDescription: "Our e-commerce solutions transform online shopping into seamless, engaging experiences that convert browsers into buyers and first-time customers into loyal advocates. We focus on creating purchasing journeys that feel effortless while maximizing your sales potential.",
    icon: <ShoppingCart className="h-8 w-8 text-purple-400" />,
    features: [
      {
        title: "Custom E-Commerce Development",
        description: "Tailor-made online stores designed specifically for your products and customer base.",
        icon: <Code className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Shopping Cart Integration",
        description: "Streamlined checkout processes that minimize abandonment and maximize conversions.",
        icon: <ShoppingCart className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Payment Gateway Setup",
        description: "Secure, flexible payment solutions that offer customers their preferred payment methods.",
        icon: <Layers className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Inventory Management Systems",
        description: "Automated solutions that keep your stock levels accurate and help prevent overselling.",
        icon: <BarChart3 className="h-6 w-6 text-purple-400" />
      }
    ],
    benefits: [
      "Increased average order value through optimized product presentation",
      "Higher conversion rates with streamlined checkout processes",
      "Improved inventory efficiency and reduced management costs",
      "Enhanced customer loyalty through personalized shopping experiences"
    ],
    techStack: [
      "Shopify", "WooCommerce", "Magento", "BigCommerce", "Stripe", "PayPal", "Square", "AWS", "Algolia", "Sanity"
    ],
    processSteps: [
      {
        title: "Strategy & Planning",
        description: "Defining your e-commerce goals, target audience, and technical requirements."
      },
      {
        title: "Platform Selection",
        description: "Evaluating and selecting the right e-commerce platform for your specific needs."
      },
      {
        title: "Custom Development",
        description: "Building your online store with tailored functionality and seamless integrations."
      },
      {
        title: "Payment & Shipping Integration",
        description: "Setting up secure payment processing and optimized shipping solutions."
      },
      {
        title: "Launch & Optimization",
        description: "Deploying your store and continuously improving based on performance data."
      }
    ],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3",
    caseStudies: [
      {
        title: "Luxury Retail Brand",
        description: "Developed a premium shopping experience with AR product visualization and personalization.",
        result: "45% increase in conversion rate and 60% increase in average order value."
      },
      {
        title: "Multi-vendor Marketplace",
        description: "Built a scalable marketplace platform connecting independent creators with customers.",
        result: "Grew from 5 to 500 vendors in 6 months with 100,000+ monthly transactions."
      }
    ]
  },
  {
    id: "digital-strategy",
    title: "Digital Strategy",
    shortDescription: "Crafting data-driven roadmaps for digital success that align with your business goals and market opportunities.",
    fullDescription: "Our digital strategy services help businesses navigate the complex digital landscape with clarity and purpose. We analyze market trends, customer behavior, and competitive positioning to develop strategic initiatives that drive meaningful business growth and sustainable competitive advantage.",
    icon: <BarChart3 className="h-8 w-8 text-purple-400" />,
    features: [
      {
        title: "Market Research & Analysis",
        description: "Deep insights into your industry, competitors, and target audience to inform strategic decisions.",
        icon: <BarChart3 className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Competitive Positioning",
        description: "Strategies to differentiate your brand and establish a compelling market position.",
        icon: <Rocket className="h-6 w-6 text-purple-400" />
      },
      {
        title: "User Journey Mapping",
        description: "Visualizing and optimizing every touchpoint in your customer's interaction with your brand.",
        icon: <Layers className="h-6 w-6 text-purple-400" />
      },
      {
        title: "Performance Optimization",
        description: "Ongoing analysis and refinement to continuously improve digital performance metrics.",
        icon: <Zap className="h-6 w-6 text-purple-400" />
      }
    ],
    benefits: [
      "Clearer direction and focus for digital investments",
      "Better alignment between digital initiatives and business goals",
      "More efficient resource allocation based on strategic priorities",
      "Increased ROI from coordinated digital efforts"
    ],
    techStack: [
      "Google Analytics", "Hotjar", "SEMrush", "Ahrefs", "Tableau", "Mixpanel", "Salesforce", "HubSpot", "Mailchimp"
    ],
    processSteps: [
      {
        title: "Digital Audit",
        description: "Comprehensive assessment of your current digital presence, assets, and performance."
      },
      {
        title: "Goal Setting & KPI Definition",
        description: "Establishing clear objectives and measurable key performance indicators."
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored digital roadmap aligned with your business goals and market position."
      },
      {
        title: "Implementation Planning",
        description: "Detailing the tactical execution plan, resource requirements, and timeline."
      },
      {
        title: "Measurement & Optimization",
        description: "Tracking performance against KPIs and making data-driven adjustments."
      }
    ],
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978",
    caseStudies: [
      {
        title: "B2B SaaS Growth Strategy",
        description: "Developed comprehensive digital strategy for a B2B SaaS platform targeting enterprise clients.",
        result: "250% increase in qualified leads and 30% reduction in customer acquisition costs."
      },
      {
        title: "Retail Digital Transformation",
        description: "Created omnichannel strategy connecting physical stores with digital shopping experiences.",
        result: "35% increase in customer lifetime value and 28% growth in repeat purchases."
      }
    ]
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState<number>(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  
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

  // Variants for animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-24 px-6 md:px-16">
      <div className="mb-16">
        <h2 className="text-4xl md:text-6xl font-bold reveal">Our Services</h2>
        <p className="mt-4 max-w-2xl text-gray-400 reveal">Elevating brands through innovative digital solutions that drive results and create lasting impressions.</p>
      </div>
      
      {/* Services Tabs Navigation */}
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/3">
          <motion.div 
            className="space-y-4 sticky top-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            {services.map((service, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className={`cursor-pointer border-l-4 pl-4 py-4 transition-all duration-300 ${activeService === index ? 'border-purple-500 bg-purple-500/10' : 'border-gray-800 hover:border-purple-500/50 hover:bg-purple-500/5'}`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-center gap-3">
                  {service.icon}
                  <h3 className="text-xl font-medium">{service.title}</h3>
                </div>
                <p className="mt-2 text-sm text-gray-400">{service.shortDescription}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
        
        {/* Active Service Details */}
        <div className="md:w-2/3">
          <motion.div 
            key={activeService}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 overflow-hidden relative"
          >
            <div className="flex flex-col md:flex-row gap-8 md:gap-12">
              <div className="md:w-3/5 z-10">
                <h3 className="text-3xl font-bold mb-4">{services[activeService].title}</h3>
                <p className="text-gray-300 mb-8">{services[activeService].fullDescription}</p>
                
                <h4 className="text-xl font-semibold mb-4">Key Features</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {services[activeService].features.map((feature, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="mt-1">
                        {feature.icon}
                      </div>
                      <div>
                        <h5 className="font-medium text-white">{feature.title}</h5>
                        <p className="text-sm text-gray-400">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <h4 className="text-xl font-semibold mb-4">Our Process</h4>
                <div className="space-y-4 mb-8">
                  {services[activeService].processSteps.slice(0, 3).map((step, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="bg-purple-500/20 text-purple-400 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
                        {idx + 1}
                      </div>
                      <div>
                        <h5 className="font-medium text-white">{step.title}</h5>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <Link href={`/services/${services[activeService].id}`}>
                  <Button className="group">
                    <span>Explore {services[activeService].title}</span>
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </div>
              
              <div className="md:w-2/5">
                <div className="rounded-xl overflow-hidden">
                  <img 
                    src={services[activeService].image} 
                    alt={services[activeService].title} 
                    className="w-full h-64 md:h-[400px] object-cover"
                  />
                </div>
                
                <div className="mt-6 bg-gray-800/50 rounded-xl p-6">
                  <h4 className="text-lg font-medium mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {services[activeService].techStack.slice(0, 6).map((tech, idx) => (
                      <span key={idx} className="text-xs bg-gray-700 text-gray-300 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                    {services[activeService].techStack.length > 6 && (
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full">
                        +{services[activeService].techStack.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="mt-6 bg-purple-900/20 border border-purple-500/20 rounded-xl p-6">
                  <h4 className="text-lg font-medium mb-3 text-purple-300">Results We Deliver</h4>
                  <ul className="space-y-2">
                    {services[activeService].benefits.slice(0, 3).map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-purple-500/5 to-transparent opacity-50 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-t from-purple-500/5 to-transparent opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

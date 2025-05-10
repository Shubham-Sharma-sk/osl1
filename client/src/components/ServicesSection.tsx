import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight, Cpu, Layers, Code, PenTool, BarChart3, BrainCircuit, MessageSquareText, LineChart, Zap, Rocket, Building, Wrench, Settings, Headset, UserCheck } from "lucide-react";
import { CircleBlob, GridPattern, FloatingShapes, FloatingCircles, Sparkle, GlowingSphere } from "./ui/decorative-elements";
import WebDevIllustration from "./ui/illustrations/WebDevIllustration";
import StrategyIllustration from "./ui/illustrations/StrategyIllustration";

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
  illustration: JSX.Element;
}

export const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    shortDescription: "Creating powerful, responsive websites and web applications with cutting-edge technologies.",
    fullDescription: "Our web development services combine technical excellence with creative design to deliver websites and web applications that not only look stunning but perform flawlessly. We build with scalability and future growth in mind, ensuring your digital presence can evolve as your business does.",
    icon: <Code className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "Custom Web Applications",
        description: "Tailored solutions that address your unique business challenges and transform your operations.",
        icon: <Layers className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Progressive Web Apps",
        description: "App-like experiences that work offline, load instantly, and don't require installation.",
        icon: <Zap className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Frontend & Backend Development",
        description: "End-to-end development with modern frameworks to create seamless, high-performance websites.",
        icon: <Code className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "CMS Implementation",
        description: "Powerful content management systems that give you complete control over your digital content.",
        icon: <PenTool className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
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
        description: "Rebuilt an outdated e-commerce site with modern technologies, improving UX and performance.",
        result: "127% increase in conversion rate, 45% reduction in bounce rate"
      },
      {
        title: "SaaS Dashboard Development",
        description: "Created an intuitive analytics dashboard for a SaaS company to visualize customer data.",
        result: "Reduced customer churn by 32%, increased feature adoption by 47%"
      }
    ],
    illustration: <WebDevIllustration />
  },
  {
    id: "ai-chatbot",
    title: "AI Chatbot",
    shortDescription: "Intelligent conversational agents that enhance customer service and streamline operations.",
    fullDescription: "Our AI chatbots leverage natural language processing and machine learning to provide intelligent, human-like interactions. We design and develop custom chatbot solutions that can handle customer inquiries, automate routine tasks, and provide 24/7 support for your business.",
    icon: <MessageSquareText className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "Natural Language Processing",
        description: "Advanced NLP capabilities for understanding and responding to human language naturally.",
        icon: <BrainCircuit className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Multi-channel Integration",
        description: "Seamless integration with websites, mobile apps, messaging platforms, and social media.",
        icon: <Layers className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Personalized Interactions",
        description: "AI-driven personalization that adapts to user preferences and conversation history.",
        icon: <Cpu className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Analytics & Insights",
        description: "Comprehensive analytics to track performance and gain insights from customer interactions.",
        icon: <BarChart3 className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      }
    ],
    benefits: [
      "24/7 customer support without human intervention",
      "Reduced operational costs and increased efficiency",
      "Consistent brand experience across all touchpoints",
      "Valuable customer insights from conversation data"
    ],
    techStack: [
      "OpenAI GPT-4", "Azure AI", "Google Dialogflow", "TensorFlow", "PyTorch", "BERT", "RASA", "Node.js", "Python"
    ],
    processSteps: [
      {
        title: "Requirements Analysis",
        description: "Understanding your business needs and defining the chatbot's scope and capabilities."
      },
      {
        title: "Conversation Design",
        description: "Crafting natural, effective conversation flows and personality for your chatbot."
      },
      {
        title: "AI Model Training",
        description: "Training and fine-tuning the AI models with your domain-specific data."
      },
      {
        title: "Integration & Testing",
        description: "Integrating with your existing systems and testing for accuracy and performance."
      },
      {
        title: "Deployment & Optimization",
        description: "Launching your chatbot and continuously improving based on real-world interactions."
      }
    ],
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a",
    caseStudies: [
      {
        title: "Customer Support Automation",
        description: "Implemented an AI chatbot for a telecommunications company to handle customer inquiries.",
        result: "Reduced support costs by 42%, improved customer satisfaction by 28%"
      },
      {
        title: "E-commerce Sales Assistant",
        description: "Developed a conversational shopping assistant for an online retailer.",
        result: "35% increase in average order value, 22% improvement in cart completion rate"
      }
    ],
    illustration: <StrategyIllustration />
  },
  {
    id: "ai-agent",
    title: "AI Agent",
    shortDescription: "Autonomous AI agents that perform complex tasks and workflows with minimal human intervention.",
    fullDescription: "Our AI agents go beyond chatbots to provide autonomous decision-making and task execution. These intelligent systems can handle complex workflows, data analysis, and process automation, allowing your team to focus on high-value activities that require human creativity and judgment.",
    icon: <BrainCircuit className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "Autonomous Decision Making",
        description: "AI systems that can make decisions based on complex criteria and business rules.",
        icon: <Cpu className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Process Automation",
        description: "End-to-end automation of complex business processes and workflows.",
        icon: <Rocket className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Data Analysis & Insights",
        description: "Advanced analytics capabilities to process large datasets and extract actionable insights.",
        icon: <BarChart3 className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "API & System Integration",
        description: "Seamless integration with your existing software ecosystem and third-party services.",
        icon: <Code className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      }
    ],
    benefits: [
      "Dramatic reduction in manual, repetitive tasks",
      "Increased accuracy and consistency in operations",
      "Faster processing times for complex workflows",
      "Scalable solutions that grow with your business"
    ],
    techStack: [
      "OpenAI GPT-4", "LangChain", "Vector Databases", "AWS Lambda", "Azure Functions", "Python", "Node.js", "Docker", "Kubernetes"
    ],
    processSteps: [
      {
        title: "Process Analysis",
        description: "Identifying processes that can benefit from AI automation and defining success criteria."
      },
      {
        title: "Agent Architecture Design",
        description: "Designing the AI agent's architecture, capabilities, and integration points."
      },
      {
        title: "Development & Training",
        description: "Building the agent and training it with relevant data and business logic."
      },
      {
        title: "Testing & Validation",
        description: "Rigorous testing to ensure accuracy, reliability, and security."
      },
      {
        title: "Deployment & Monitoring",
        description: "Deploying the agent to production and implementing continuous monitoring and improvement."
      }
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485",
    caseStudies: [
      {
        title: "Financial Data Processing",
        description: "Created an AI agent to automate financial data processing and reporting for a financial services firm.",
        result: "85% reduction in processing time, 95% accuracy improvement"
      },
      {
        title: "HR Workflow Automation",
        description: "Developed an AI agent to streamline employee onboarding and documentation processes.",
        result: "Reduced onboarding time by 67%, improved compliance by 40%"
      }
    ],
    illustration: <StrategyIllustration />
  },
  {
    id: "business-planning",
    title: "Business Planning",
    shortDescription: "Strategic planning and roadmapping to align your technology investments with business objectives.",
    fullDescription: "Our business planning services help organizations develop clear, actionable strategies for digital transformation and growth. We work closely with your leadership team to understand your business goals, market position, and competitive landscape, then create comprehensive plans to achieve your objectives.",
    icon: <LineChart className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "Digital Transformation Strategy",
        description: "Comprehensive strategies to leverage technology for business growth and innovation.",
        icon: <Rocket className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Technology Roadmapping",
        description: "Detailed technology roadmaps aligned with your business objectives and timeline.",
        icon: <LineChart className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Market & Competitive Analysis",
        description: "In-depth analysis of market trends, customer needs, and competitive landscape.",
        icon: <BarChart3 className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Investment Planning",
        description: "Strategic planning for technology investments to maximize ROI and business impact.",
        icon: <Layers className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      }
    ],
    benefits: [
      "Aligned technology and business strategies",
      "Clear roadmap for digital transformation initiatives",
      "Optimized technology investments and resource allocation",
      "Competitive advantage through strategic innovation"
    ],
    techStack: [
      "Strategic Planning Frameworks", "Market Analysis Tools", "Financial Modeling", "Project Management", "Risk Assessment", "ROI Analysis"
    ],
    processSteps: [
      {
        title: "Discovery & Assessment",
        description: "Understanding your current state, business goals, and challenges."
      },
      {
        title: "Market & Competitive Analysis",
        description: "Analyzing market trends, customer needs, and competitive landscape."
      },
      {
        title: "Strategy Development",
        description: "Creating a comprehensive strategy aligned with your business objectives."
      },
      {
        title: "Roadmap Creation",
        description: "Developing a detailed implementation roadmap with clear milestones."
      },
      {
        title: "Execution Support",
        description: "Providing ongoing guidance and support during implementation."
      }
    ],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    caseStudies: [
      {
        title: "Retail Digital Transformation",
        description: "Developed a comprehensive digital transformation strategy for a retail chain.",
        result: "Successful omnichannel implementation, 38% increase in digital sales"
      },
      {
        title: "Healthcare Technology Roadmap",
        description: "Created a 3-year technology roadmap for a healthcare provider.",
        result: "Streamlined operations, reduced costs by 25%, improved patient satisfaction"
      }
    ],
    illustration: <StrategyIllustration />
  },
  // New Service 1: Commercial Relationship Management
  {
    id: "commercial-relationship-management",
    title: "Commercial Relationship Management",
    shortDescription: "On-site commercial relationship management services to foster business growth and partnerships.",
    fullDescription: "Our Commercial Relationship Management services provide dedicated on-site resources to manage and grow your business relationships. We work as an extension of your team to nurture client relationships, identify new opportunities, and ensure smooth communication between all stakeholders.",
    icon: <UserCheck className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "Client Relationship Building",
        description: "Dedicated on-site professionals who build and maintain strong client relationships.",
        icon: <UserCheck className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Partnership Development",
        description: "Identifying and fostering strategic partnerships to expand your business ecosystem.",
        icon: <Building className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Account Management",
        description: "Comprehensive account management to ensure client satisfaction and retention.",
        icon: <LineChart className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Contract Negotiation",
        description: "Expert contract negotiation and management to maximize value for all parties.",
        icon: <PenTool className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      }
    ],
    benefits: [
      "Improved client retention and satisfaction",
      "Increased revenue through expanded partnerships",
      "Reduced communication barriers between stakeholders",
      "Early identification of new business opportunities"
    ],
    techStack: [
      "CRM Systems", "Business Intelligence Tools", "Contract Management Software", "Communication Platforms", "Project Management", "Analytics"
    ],
    processSteps: [
      {
        title: "Relationship Assessment",
        description: "Evaluating current business relationships and identifying improvement opportunities."
      },
      {
        title: "Strategy Development",
        description: "Creating a tailored relationship management strategy for your business."
      },
      {
        title: "On-site Implementation",
        description: "Deploying dedicated relationship managers to your location."
      },
      {
        title: "Performance Monitoring",
        description: "Tracking relationship health and business outcomes through key metrics."
      },
      {
        title: "Continuous Improvement",
        description: "Regularly refining approaches based on feedback and results."
      }
    ],
    image: "https://images.unsplash.com/photo-1556157382-97eda2f9e69d",
    caseStudies: [
      {
        title: "Enterprise Partner Network Expansion",
        description: "Implemented on-site relationship management for a technology firm seeking to expand its partner network.",
        result: "53% increase in partner-generated revenue, 40% expansion of partner network"
      },
      {
        title: "Key Account Retention Program",
        description: "Deployed relationship managers to work on-site with critical client accounts.",
        result: "98% client retention rate, 27% increase in account value through upselling"
      }
    ],
    illustration: <StrategyIllustration />
  },
  // New Service 2: Industrial Technical Services
  {
    id: "industrial-technical-services",
    title: "Industrial Technical Services",
    shortDescription: "On-site deployment, configuration, technical support, and maintenance for industrial systems.",
    fullDescription: "Our Industrial Technical Services provide expert on-site support for the deployment, configuration, and maintenance of industrial systems and equipment. Our team of skilled technicians ensures your technical infrastructure operates at peak performance with minimal downtime.",
    icon: <Wrench className="h-8 w-8 text-indigo-500 dark:text-indigo-400" />,
    features: [
      {
        title: "On-site Deployment & Configuration",
        description: "Expert installation and configuration of industrial systems and equipment at your facility.",
        icon: <Settings className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Technical Support",
        description: "Rapid response technical support to diagnose and resolve issues quickly and efficiently.",
        icon: <Headset className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "Preventive Maintenance",
        description: "Regular maintenance schedules to prevent issues before they impact operations.",
        icon: <Wrench className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      },
      {
        title: "System Optimization",
        description: "Performance tuning and optimization to maximize efficiency and output.",
        icon: <Zap className="h-6 w-6 text-indigo-500 dark:text-indigo-400" />
      }
    ],
    benefits: [
      "Reduced system downtime and operational disruptions",
      "Extended equipment lifespan through proper maintenance",
      "Improved system performance and efficiency",
      "Lower total cost of ownership for industrial equipment"
    ],
    techStack: [
      "Industrial Control Systems", "SCADA", "PLC Programming", "IoT Sensors", "Predictive Maintenance Tools", "Diagnostic Equipment"
    ],
    processSteps: [
      {
        title: "Technical Assessment",
        description: "Comprehensive assessment of your current systems and requirements."
      },
      {
        title: "Service Planning",
        description: "Developing a customized service plan tailored to your operational needs."
      },
      {
        title: "Deployment & Setup",
        description: "Professional installation and configuration of systems and equipment."
      },
      {
        title: "Testing & Validation",
        description: "Thorough testing to ensure all systems meet performance standards."
      },
      {
        title: "Ongoing Support & Maintenance",
        description: "Regular maintenance visits and on-call support as needed."
      }
    ],
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    caseStudies: [
      {
        title: "Manufacturing Plant Modernization",
        description: "Deployed and configured new automation systems for a manufacturing facility.",
        result: "30% increase in production efficiency, 45% reduction in maintenance costs"
      },
      {
        title: "Critical Infrastructure Support",
        description: "Provided ongoing technical support and maintenance for critical utility infrastructure.",
        result: "99.9% system uptime, 60% reduction in emergency service calls"
      }
    ],
    illustration: <WebDevIllustration />
  }
];

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const checkReveal = () => {
      const servicesElement = servicesRef.current;
      if (!servicesElement) return;
      
      const windowHeight = window.innerHeight;
      const elementTop = servicesElement.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        servicesElement.classList.add('reveal-active');
      }
    };
    
    window.addEventListener('scroll', checkReveal);
    window.addEventListener('load', checkReveal);
    window.addEventListener('resize', checkReveal);
    
    return () => {
      window.removeEventListener('scroll', checkReveal);
      window.removeEventListener('load', checkReveal);
      window.removeEventListener('resize', checkReveal);
    };
  }, []);

  // Handle tab click - only open the clicked tab and close others
  const handleTabClick = (tabId: string) => {
    if (activeTab === tabId) {
      setActiveTab(null); // Close if already open
    } else {
      setActiveTab(tabId); // Open the clicked tab and close others
    }
  };
  
  return (
    <section id="services" className="py-24 px-6 md:px-16 relative overflow-hidden bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200" ref={servicesRef}>
      {/* Background decorative elements */}
      <CircleBlob className="absolute -top-96 -right-96 text-indigo-500/10" />
      <GridPattern className="absolute inset-0 opacity-5" />
      <FloatingShapes className="absolute inset-0" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50"
          >
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              Our Expertise
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We combine strategic thinking with technical expertise to deliver solutions 
            that drive business growth and digital transformation.
          </motion.p>
          
          <Sparkle className="absolute top-0 right-1/4 text-indigo-500" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 h-full flex flex-col ${
                activeService === index 
                  ? 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-indigo-200 dark:border-indigo-700/50 shadow-lg' 
                  : 'bg-white/80 dark:bg-gray-900/50 backdrop-blur-sm border-gray-200 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-700/50'
              }`}
              onClick={() => setActiveService(index)}
            >
              <div className="p-6 h-full flex flex-col">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  activeService === index 
                    ? 'bg-indigo-100 dark:bg-indigo-900/50' 
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-grow">{service.shortDescription}</p>
                <div className="flex items-center text-sm font-medium text-indigo-600 dark:text-indigo-400 mt-auto">
                  <span>Learn more</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Active indicator */}
              {activeService === index && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 to-blue-500"></div>
              )}
            </motion.div>
          ))}
        </div>
        
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden bg-white dark:bg-gray-900/70 backdrop-blur-sm border border-gray-200 dark:border-gray-800 shadow-xl"
          >
            {/* Service tabs - accordion style */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-6 lg:p-10">
              <div className="lg:col-span-1">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">{services[activeService].title}</h3>
                
                <div className="space-y-3">
                  {services[activeService].features.map((feature, index) => (
                    <div 
                      key={index}
                      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
                        activeTab === `tab-${index}` 
                          ? 'bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-900/30 dark:to-blue-900/30 border-indigo-200 dark:border-indigo-700/50 shadow-md' 
                          : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 bg-white dark:bg-gray-900/50'
                      }`}
                    >
                      <button 
                        className="w-full text-left p-4 flex items-center justify-between"
                        onClick={() => handleTabClick(`tab-${index}`)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`p-2 rounded-lg ${
                            activeTab === `tab-${index}` 
                              ? 'bg-indigo-100 dark:bg-indigo-800/30' 
                              : 'bg-gray-100 dark:bg-gray-800'
                          }`}>
                            {feature.icon}
                          </div>
                          <span className="font-medium text-gray-900 dark:text-white">{feature.title}</span>
                        </div>
                        <ArrowRight className={`h-4 w-4 transition-transform duration-300 text-indigo-600 dark:text-indigo-400 ${activeTab === `tab-${index}` ? 'rotate-90' : ''}`} />
                      </button>
                      
                      {activeTab === `tab-${index}` && (
                        <div className="p-4 pt-0 text-gray-600 dark:text-gray-400 text-sm border-t border-gray-200 dark:border-gray-800">
                          {feature.description}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
                
                <Button 
                  className="group relative overflow-hidden bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white transition-all duration-300 mt-6 w-full"
                  onClick={() => window.location.href = `/services/${services[activeService].id}`}
                >
                  <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></span>
                  <span className="relative flex items-center justify-center">Explore {services[activeService].title} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Button>
              </div>
              
              <div className="lg:col-span-2">
                <div className="rounded-xl overflow-hidden relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/30 to-blue-500/30 rounded-xl blur-sm opacity-70 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative h-full flex flex-col bg-white dark:bg-gray-900 rounded-xl">
                    <div className="flex-grow p-1">
                      {services[activeService].illustration}
                      <div className="absolute inset-0 bg-gradient-to-t from-white/70 via-white/20 to-transparent dark:from-black/70 dark:via-black/20 dark:to-transparent rounded-xl"></div>
                    </div>
                    
                    <div className="relative z-10 p-6 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-t border-gray-200 dark:border-gray-800">
                      <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Key Benefits</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {services[activeService].benefits.slice(0, 4).map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2 text-sm group">
                            <div className="mt-1 text-indigo-600 dark:text-indigo-400 group-hover:text-indigo-700 dark:group-hover:text-indigo-300 transition-colors">•</div>
                            <span className="text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white transition-colors">{benefit}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                        <h4 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {services[activeService].techStack.slice(0, 5).map((tech, idx) => (
                            <span key={idx} className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
                              {tech}
                            </span>
                          ))}
                          {services[activeService].techStack.length > 5 && (
                            <span className="text-xs bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-3 py-1 rounded-full border border-indigo-200 dark:border-indigo-800/50">
                              +{services[activeService].techStack.length - 5} more
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    
                    <GlowingSphere className="absolute -bottom-6 -right-6" size="w-16 h-16" />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Background decorative elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-indigo-500/5 via-blue-500/5 to-transparent opacity-80 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-indigo-500/5 to-transparent opacity-50 pointer-events-none"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
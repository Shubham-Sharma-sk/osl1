import { motion } from "framer-motion";
import { 
  Lightbulb, 
  Compass, 
  Code, 
  Layers, 
  Monitor, 
  Rocket, 
  BarChart3, 
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

const phases = [
  {
    id: 1,
    title: "Strategy",
    icon: <Lightbulb className="w-6 h-6" />,
    description: "We begin with a deep understanding of your business goals, target audience, and competitive landscape.",
    items: [
      "Business & market analysis",
      "User research & personas",
      "Competitive benchmarking",
      "Content strategy",
      "Project roadmap planning"
    ],
    color: "purple"
  },
  {
    id: 2,
    title: "Design",
    icon: <Compass className="w-6 h-6" />,
    description: "We transform strategy into visual concepts that align with your brand identity and user expectations.",
    items: [
      "Information architecture",
      "Wireframing & prototyping",
      "UI/UX design",
      "Visual design & branding",
      "User testing & feedback"
    ],
    color: "indigo"
  },
  {
    id: 3,
    title: "Development",
    icon: <Code className="w-6 h-6" />,
    description: "We build robust, scalable solutions using modern technologies and best practices.",
    items: [
      "Frontend development",
      "Backend architecture",
      "Database design",
      "API development",
      "Integration with third-party services"
    ],
    color: "blue"
  },
  {
    id: 4,
    title: "Testing",
    icon: <Layers className="w-6 h-6" />,
    description: "We ensure your product is reliable, secure, and delivers a seamless user experience.",
    items: [
      "Functional testing",
      "Cross-browser & device testing",
      "Performance optimization",
      "Security testing",
      "User acceptance testing"
    ],
    color: "green"
  },
  {
    id: 5,
    title: "Deployment",
    icon: <Rocket className="w-6 h-6" />,
    description: "We launch your product with precision, ensuring a smooth transition to production.",
    items: [
      "Infrastructure setup",
      "Continuous integration",
      "Server configuration",
      "Performance monitoring",
      "Launch execution"
    ],
    color: "yellow"
  },
  {
    id: 6,
    title: "Growth",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "We help you scale your product, optimize user engagement, and drive business growth.",
    items: [
      "Analytics implementation",
      "Performance tracking",
      "Conversion optimization",
      "Feature enhancement",
      "Scaling strategies"
    ],
    color: "orange"
  }
];

const ProcessSection = () => {
  const colors = {
    purple: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    indigo: "bg-indigo-500/10 text-indigo-400 border-indigo-500/30",
    blue: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    green: "bg-green-500/10 text-green-400 border-green-500/30",
    yellow: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
    orange: "bg-orange-500/10 text-orange-400 border-orange-500/30"
  };

  return (
    <section id="process" className="py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-400 max-w-3xl mx-auto"
          >
            We follow a systematic approach to transform your vision into reality, 
            ensuring quality, efficiency, and success at every stage.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-24">
          {/* Vertical timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gray-800 transform md:translate-x-[-50%]"></div>
          
          {phases.map((phase, index) => (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline circle */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-gray-900 border-4 border-gray-800 rounded-full flex items-center justify-center transform md:translate-x-[-50%] z-10">
                <span className="text-xs font-bold">{phase.id}</span>
              </div>
              
              {/* Content box */}
              <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                <div className={`border rounded-xl p-6 ${
                  colors[phase.color as keyof typeof colors]
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-background/50 p-2 rounded-lg">
                      {phase.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>
                  
                  <p className="mb-6 text-gray-300">{phase.description}</p>
                  
                  <ul className="space-y-2">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              {/* Empty space for alignment */}
              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="py-12 px-8 bg-gradient-to-r from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-2xl"
          >
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our proven process can help bring your vision to life. 
              Our team is ready to guide you through each step of the journey.
            </p>
            <Link href="/#contact">
              <Button size="lg" className="group">
                <span>Get Started</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
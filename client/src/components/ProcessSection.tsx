import { motion } from "framer-motion";
import {
  Lightbulb, Compass, Code, Layers,
  Rocket, BarChart3, CheckCircle2, Zap, ArrowRight
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
    details: "Our strategic planning phase involves stakeholder interviews, market research, and data analysis to establish clear project objectives and success metrics.",
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
    details: "Using Figma and Adobe Creative Suite, we create responsive designs with accessibility in mind. Our iterative process includes user testing to validate design decisions.",
    color: "indigo"
  },
  {
    id: 3,
    title: "Development",
    icon: <Code className="w-6 h-6" />,
    description: "We build robust, scalable solutions using modern technologies and best practices.",
    items: [
      "Frontend development (React, Next.js)",
      "Backend architecture (Node.js, Express)",
      "Database design (SQL, NoSQL)",
      "RESTful & GraphQL API development",
      "Microservices & serverless architecture"
    ],
    details: "Our development team follows Agile methodologies with two-week sprints. We use Git for version control, implement CI/CD pipelines, and conduct regular code reviews to maintain quality.",
    color: "blue"
  },
  {
    id: 4,
    title: "Testing",
    icon: <Layers className="w-6 h-6" />,
    description: "We ensure your product is reliable, secure, and delivers a seamless user experience.",
    items: [
      "Automated unit & integration testing",
      "Cross-browser & device compatibility",
      "Performance optimization & load testing",
      "Security vulnerability assessment",
      "User acceptance testing"
    ],
    details: "We implement Jest for unit tests, Cypress for E2E testing, and use tools like Lighthouse and WebPageTest to optimize performance. Security audits include OWASP compliance checks.",
    color: "green"
  },
  {
    id: 5,
    title: "Deployment",
    icon: <Rocket className="w-6 h-6" />,
    description: "We launch your product with precision, ensuring a smooth transition to production.",
    items: [
      "Infrastructure setup (AWS, GCP, Azure)",
      "Continuous integration & deployment",
      "Docker containerization & Kubernetes",
      "Performance monitoring & logging",
      "Zero-downtime deployment strategies"
    ],
    details: "Our DevOps practices include infrastructure as code using Terraform, containerization with Docker, and monitoring with tools like New Relic or Datadog to ensure optimal performance.",
    color: "yellow"
  },
  {
    id: 6,
    title: "Growth",
    icon: <BarChart3 className="w-6 h-6" />,
    description: "We help you scale your product, optimize user engagement, and drive business growth.",
    items: [
      "Analytics implementation (Google Analytics, Mixpanel)",
      "A/B testing & conversion optimization",
      "Performance fine-tuning & scaling",
      "Feature enhancement roadmapping",
      "Ongoing maintenance & support"
    ],
    details: "Post-launch, we implement data-driven strategies to improve user engagement, optimize conversion rates, and scale your application as your user base grows.",
    color: "orange"
  }
];

const colors = {
  purple: "bg-purple-100 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:border-indigo-500/30",
  blue: "bg-blue-100 text-blue-700 border-blue-200 dark:bg-blue-500/10 dark:text-blue-400 dark:border-blue-500/30",
  green: "bg-green-100 text-green-700 border-green-200 dark:bg-green-500/10 dark:text-green-400 dark:border-green-500/30",
  yellow: "bg-yellow-100 text-yellow-700 border-yellow-200 dark:bg-yellow-500/10 dark:text-yellow-400 dark:border-yellow-500/30",
  orange: "bg-orange-100 text-orange-700 border-orange-200 dark:bg-orange-500/10 dark:text-orange-400 dark:border-orange-500/30"
};

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 px-6 md:px-16 bg-white text-gray-900 dark:bg-[#0e0e16] dark:text-white transition-colors duration-300 relative">
      {/* Background decorative elements */}
      <div className="absolute top-40 -left-64 w-96 h-96 bg-purple-300 dark:bg-purple-500/20 rounded-full filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-40 -right-64 w-96 h-96 bg-blue-300 dark:bg-blue-500/20 rounded-full filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium border border-blue-300 dark:border-blue-500/30 bg-blue-100 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400"
          >
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4" />
              Our Methodology
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500"
          >
            Our Development Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            We follow a systematic approach to transform your vision into reality, 
            ensuring quality, efficiency, and success at every stage.
          </motion.p>
        </div>

        {/* Process Timeline */}
        <div className="relative mb-24">
          {/* Vertical timeline line */}
          <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-400 via-blue-400 to-green-400 dark:from-purple-500/50 dark:via-blue-500/50 dark:to-green-500/50 transform md:translate-x-[-50%]"></div>

          {phases.map((phase, index) => (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row mb-16 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              {/* Timeline circle */}
              <div className="absolute left-0 md:left-1/2 top-0 w-8 h-8 bg-white dark:bg-gray-900 border-4 border-gray-300 dark:border-gray-800 rounded-full flex items-center justify-center transform md:translate-x-[-50%] z-10">
                <span className="text-xs font-bold text-gray-800 dark:text-white">{phase.id}</span>
              </div>

              {/* Content box */}
              <div className="md:w-1/2 ml-12 md:ml-0 md:px-8">
                <div className={`border rounded-xl p-6 backdrop-blur-sm transition-all duration-300 ${colors[phase.color as keyof typeof colors]}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-white dark:bg-background/50 p-2 rounded-lg">
                      {phase.icon}
                    </div>
                    <h3 className="text-2xl font-bold">{phase.title}</h3>
                  </div>

                  <p className="mb-6 text-gray-700 dark:text-gray-300">{phase.description}</p>

                  <ul className="space-y-2 mb-6">
                    {phase.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <CheckCircle2 className="w-4 h-4 mt-1 flex-shrink-0 text-blue-500 dark:text-blue-400" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 pt-4 border-t border-gray-300 dark:border-gray-800">
                    <p className="text-sm italic text-gray-600 dark:text-gray-400">{phase.details}</p>
                  </div>
                </div>
              </div>

              <div className="hidden md:block md:w-1/2"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

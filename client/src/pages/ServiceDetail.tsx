import { useParams, Link } from "wouter";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import { services } from "@/components/ServicesSection";

const ServiceDetail = () => {
  const params = useParams();
  const serviceId = params.id;
  
  // Find the service with the matching ID
  const service = services.find((s) => s.id === serviceId);
  
  // If service not found, show error message
  if (!service) {
    return (
      <div className="container mx-auto py-20 px-6 text-center">
        <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
        <p className="mb-8">The service you're looking for doesn't exist or has been moved.</p>
        <Link href="/#services">
          <Button>
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <Link href="/#services" className="inline-flex items-center text-gray-400 hover:text-purple-400 mb-8 transition-colors">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Services
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-gray-300 mb-8">{service.fullDescription}</p>
              <Link href="/#contact">
                <Button size="lg" className="group">
                  <span>Get a Quote</span>
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-purple-500/20 rounded-xl blur-xl opacity-70"></div>
              <img 
                src={service.image} 
                alt={service.title} 
                className="w-full h-[300px] md:h-[400px] object-cover rounded-xl relative z-10"
              />
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-colors"
              >
                <div className="bg-purple-500/10 p-3 rounded-lg inline-block mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Process Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Process</h2>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-purple-500/80 via-purple-500/50 to-purple-500/10 transform -translate-x-1/2 hidden md:block"></div>
            
            <div className="space-y-12 md:space-y-0">
              {service.processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12 ${
                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  <div className="w-full md:w-1/2 relative">
                    {/* Timeline circle */}
                    <div className="absolute left-6 md:left-0 top-12 w-12 h-12 bg-purple-500/20 rounded-full border-2 border-purple-500 flex items-center justify-center text-purple-400 transform md:translate-x-[-50%] z-10 hidden md:flex">
                      {index + 1}
                    </div>
                    
                    <div className={`pl-0 md:pl-8 ${index % 2 === 0 ? 'md:pl-0 md:pr-8 md:text-right' : ''}`}>
                      <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                  
                  <div className="w-full md:w-1/2"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Tech Stack Section */}
      <section className="py-20 px-6 md:px-12 bg-gray-900/50">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Technologies We Use</h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">Our experienced team works with cutting-edge technologies to deliver scalable, future-proof solutions.</p>
          
          <div className="flex flex-wrap justify-center gap-4">
            {service.techStack.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-gray-800 border border-gray-700 text-gray-300 px-5 py-3 rounded-full"
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-6 md:px-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Benefits</h2>
              <p className="text-gray-400 mb-8">Our {service.title.toLowerCase()} services are designed to deliver tangible results for your business.</p>
              
              <ul className="space-y-4">
                {service.benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="text-purple-500 h-6 w-6 mt-1 flex-shrink-0" />
                    <span>{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Case Studies</h3>
              
              <div className="space-y-8">
                {service.caseStudies.map((caseStudy, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border-b border-gray-700 pb-8 last:border-0 last:pb-0"
                  >
                    <h4 className="text-xl font-medium mb-3">{caseStudy.title}</h4>
                    <p className="text-gray-400 mb-3">{caseStudy.description}</p>
                    <p className="text-purple-400 font-medium">Result: {caseStudy.result}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-purple-900/20 border-y border-purple-500/20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto mb-10">Our team of experts is ready to help you bring your vision to life with our {service.title.toLowerCase()} services.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact">
              <Button size="lg" className="group">
                <span>Start Your Project</span>
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link href="/#services">
              <Button variant="outline" size="lg">
                Explore Other Services
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
import { useEffect } from "react";
import { useRoute } from "wouter";
import { ArrowLeft } from "lucide-react";
import { services, Service } from "@/components/ServicesSection";
import { CircleBlob, GridPattern } from "@/components/ui/decorative-elements";

// Define custom types for our extended service properties
type ProcessStep = {
  title: string;
  description: string;
};

type CaseStudy = {
  title: string;
  description: string;
  result: string;
};

// Create a custom type that combines the original Service with our additional properties
type ServiceDetailType = Service & {
  process?: ProcessStep[];
  caseStudies?: CaseStudy[];
};

const ServiceDetail = () => {
  const [, params] = useRoute("/services/:id");
  const serviceId = params?.id;
  
  // Cast the service to our extended type
  const service = services.find((s: Service) => s.id === serviceId) as ServiceDetailType | undefined;
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="mb-8">The service you're looking for doesn't exist.</p>
          <a href="/services" className="inline-flex items-center text-accent hover:underline">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Services
          </a>
        </div>
      </div>
    );
  }
  
  return (
    <div className="pt-32 pb-24 px-6 md:px-16 relative overflow-hidden">
      <CircleBlob className="w-[500px] h-[500px] -right-64 top-20 opacity-30" />
      <CircleBlob className="w-[300px] h-[300px] -left-32 bottom-20 opacity-20 from-blue-500/20 to-purple-500/20" />
      <GridPattern className="inset-0" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <a href="/services" className="inline-flex items-center text-accent hover:underline mb-8">
          <ArrowLeft className="mr-2 w-4 h-4" />
          Back to Services
        </a>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6">{service.title}</h1>
        <p className="text-xl max-w-3xl opacity-80 mb-12">{service.shortDescription}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <h2 className="text-2xl font-bold mb-6">What We Offer</h2>
            <ul className="space-y-4">
              {service.features.map((feature: any, index: number) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-purple-500 mt-2"></div>
                  <span>{typeof feature === 'string' ? feature : feature.title}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-xl blur-xl"></div>
            <div className="w-full aspect-video rounded-xl overflow-hidden relative z-10 border border-white/10 shadow-2xl">
              {service.illustration}
            </div>
          </div>
        </div>
        
        {service.process && (
          <>
            <h2 className="text-2xl font-bold mb-6">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {service.process.map((step: ProcessStep, index: number) => (
                <div key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-8 relative">
                  <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="opacity-80">{step.description}</p>
                </div>
              ))}
            </div>
          </>
        )}
        
        {service.caseStudies && (
          <>
            <h2 className="text-2xl font-bold mb-6">Case Studies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.caseStudies.map((caseStudy: CaseStudy, index: number) => (
                <div key={index} className="border border-white/10 bg-white/5 backdrop-blur-sm rounded-xl p-8">
                  <h3 className="text-xl font-bold mb-3">{caseStudy.title}</h3>
                  <p className="opacity-80 mb-4">{caseStudy.description}</p>
                  <div className="bg-black/30 rounded-lg p-4">
                    <p className="text-accent font-medium">Result: {caseStudy.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceDetail;
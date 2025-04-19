import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon, Clock, CheckCircle, Mail, Phone, MapPin, Calendar as CalendarIcon2, ExternalLink } from "lucide-react";
import { format, addDays, isWeekend, isBefore, startOfToday } from "date-fns";

const bookingFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  projectType: z.string().min(1, "Please select a project type"),
});

type BookingFormData = z.infer<typeof bookingFormSchema>;

const projectTypes = [
  { value: "web-development", label: "Web Development" },
  { value: "ai-chatbot", label: "AI Chatbot" },
  { value: "ai-agent", label: "AI Agent" },
  { value: "business-planning", label: "Business Planning" },
  { value: "other", label: "Other" }
];

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const calendlyUrl = "https://calendly.com/sharmapurushotam57/30min";
  
  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      projectType: "",
    },
  });

  useEffect(() => {
    // Set title
    document.title = "Schedule a Consultation | OSL STRATEGY";
    
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const nextStep = () => {
    const currentStepFields = {
      1: ['projectType'],
      2: ['name', 'email', 'phone']
    }[currentStep];

    const isStepValid = currentStepFields?.every(field => {
      const fieldState = form.getFieldState(field as keyof BookingFormData);
      return !fieldState.invalid;
    });

    if (isStepValid) {
      setCurrentStep(prev => Math.min(prev + 1, 2));
    } else {
      // Trigger validation for the current step fields
      currentStepFields?.forEach(field => {
        form.trigger(field as keyof BookingFormData);
      });
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const openCalendly = (data: BookingFormData) => {
    // Build the Calendly URL with prefilled information
    let calendlyWithParams = `${calendlyUrl}?name=${encodeURIComponent(data.name)}&email=${encodeURIComponent(data.email)}&a1=${encodeURIComponent(data.phone)}`;
    
    // Add project type as a custom question
    if (data.projectType) {
      const projectLabel = projectTypes.find(p => p.value === data.projectType)?.label || data.projectType;
      calendlyWithParams += `&a2=${encodeURIComponent(projectLabel)}`;
    }
    
    // Open Calendly in the same window to ensure the user completes the booking
    window.location.href = calendlyWithParams;
  };

  const onSubmit = (data: BookingFormData) => {
    setIsSubmitting(true);
    
    // Redirect to Calendly to complete the booking
    openCalendly(data);
  };

  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <div className="pt-32 pb-16 px-6 md:px-16 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-400">Schedule Your Consultation</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-80 mb-12">
            Book a free 30-minute consultation with our team to discuss your project needs and how we can help you achieve your goals.
          </p>
        </div>
      </div>

      <div className="px-6 md:px-16 -mt-8 mb-20">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-12 border border-purple-500/20 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-purple-500/5 pointer-events-none"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/10 rounded-full filter blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-600/10 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              {/* Booking Steps Indicator */}
              <div className="flex justify-center mb-10">
                <div className="flex items-center w-full max-w-md justify-between">
                  {[1, 2].map((step) => (
                    <div key={step} className="flex flex-col items-center">
                      <div 
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
                          currentStep === step 
                            ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white' 
                            : currentStep > step 
                              ? 'bg-green-500 text-white' 
                              : 'bg-gray-700 text-gray-300'
                        }`}
                      >
                        {currentStep > step ? <CheckCircle className="h-5 w-5" /> : step}
                      </div>
                      <span className={`text-sm mt-2 ${currentStep === step ? 'text-purple-400' : 'text-gray-400'}`}>
                        {step === 1 ? 'Project Type' : 'Your Info'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  {/* Step 1: Project Type */}
                  {currentStep === 1 && (
                    <div className="space-y-8">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">What Type of Project Are You Working On?</h2>
                        <p className="text-gray-400">Select the option that best describes your project</p>
                      </div>
                      
                      <FormField
                        control={form.control}
                        name="projectType"
                        render={({ field }) => (
                          <FormItem>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                              {projectTypes.map((project) => (
                                <div 
                                  key={project.value}
                                  onClick={() => field.onChange(project.value)}
                                  className={`
                                    p-6 rounded-xl border cursor-pointer transition-all
                                    ${field.value === project.value 
                                      ? 'bg-gradient-to-br from-purple-900/70 to-indigo-900/70 border-purple-500' 
                                      : 'bg-gray-800/50 border-gray-700 hover:border-gray-600'
                                    }
                                  `}
                                >
                                  <div className="flex items-center mb-3">
                                    <div className={`w-5 h-5 rounded-full mr-3 flex items-center justify-center border-2 ${
                                      field.value === project.value ? 'border-purple-400' : 'border-gray-500'
                                    }`}>
                                      {field.value === project.value && (
                                        <div className="w-3 h-3 rounded-full bg-purple-400"></div>
                                      )}
                                    </div>
                                    <h3 className="text-lg font-semibold text-white">{project.label}</h3>
                                  </div>
                                  <p className="text-gray-400 text-sm pl-8">
                                    {project.value === 'web-development' && 'Custom websites, web applications, and e-commerce solutions'}
                                    {project.value === 'ai-chatbot' && 'Intelligent chatbots for customer service and support'}
                                    {project.value === 'ai-agent' && 'Advanced AI agents for business automation and insights'}
                                    {project.value === 'business-planning' && 'Strategic planning, market analysis, and growth strategies'}
                                    {project.value === 'other' && 'Other digital services and custom solutions'}
                                  </p>
                                </div>
                              ))}
                            </div>
                            <FormMessage className="text-red-400 mt-2" />
                          </FormItem>
                        )}
                      />
                      
                      <div className="text-center mt-4">
                        <p className="text-gray-400 text-sm">
                          Prefer to book directly through Calendly?{' '}
                          <a 
                            href={calendlyUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-purple-400 hover:text-purple-300 underline inline-flex items-center"
                          >
                            Click here <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Step 2: Contact Information */}
                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <div className="text-center mb-8">
                        <h2 className="text-2xl font-bold text-white mb-2">Your Contact Information</h2>
                        <p className="text-gray-400">Please provide your details to continue to Calendly and complete your booking</p>
                      </div>
                      
                      <div className="space-y-6">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel className="text-gray-300">Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Enter your full name" 
                                  {...field} 
                                  className="border-gray-700 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                                />
                              </FormControl>
                              <FormMessage className="text-red-400" />
                            </FormItem>
                          )}
                        />
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Email Address</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="contact@oslstrategy.com" 
                                    {...field} 
                                    className="border-gray-700 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                          
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel className="text-gray-300">Phone Number</FormLabel>
                                <FormControl>
                                  <Input 
                                    placeholder="+1 (555) 000-0000" 
                                    {...field} 
                                    className="border-gray-700 bg-gray-800/50 text-gray-300 placeholder:text-gray-500"
                                  />
                                </FormControl>
                                <FormMessage className="text-red-400" />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>
                      
                      <div className="bg-gray-800/30 rounded-lg p-4 border border-gray-700">
                        <h3 className="text-lg font-semibold text-white mb-2">Next Steps</h3>
                        <p className="text-gray-300">
                          After clicking "Continue to Calendly", you'll be redirected to select your preferred date and time. 
                          Calendly will then send you a confirmation email with all the details of your booking.
                        </p>
                      </div>
                    </div>
                  )}
                  
                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6 border-t border-gray-700">
                    {currentStep > 1 ? (
                      <Button 
                        type="button"
                        onClick={prevStep}
                        className="bg-gray-700 hover:bg-gray-600 text-white"
                      >
                        Back
                      </Button>
                    ) : (
                      <div></div> // Empty div for spacing
                    )}
                    
                    {currentStep < 2 ? (
                      <Button 
                        type="button"
                        onClick={nextStep}
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white"
                      >
                        Continue
                      </Button>
                    ) : (
                      <Button 
                        type="submit" 
                        className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white flex items-center"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center">
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Redirecting...
                          </div>
                        ) : (
                          <>
                            Continue to Calendly <ExternalLink className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;

// /*
// import { useState, useEffect, useRef } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { ArrowRight, ArrowLeft, Tag, Calendar, Award, ArrowUpRight, ExternalLink, ChevronRight, Globe, Code, Zap, BarChart3, Cloud, Bot } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Link } from "wouter";
// import { CircleBlob, GridPattern, Sparkle, GlowingSphere } from "./ui/decorative-elements";

// interface Project {
//   id: string;
//   title: string;
//   description: string;
//   overview: string;
//   client: string;
//   date: string;
//   category: string;
//   tags: string[];
//   features: string[];
//   results: {
//     metric: string;
//     value: string;
//   }[];
//   testimonial?: {
//     quote: string;
//     author: string;
//     position: string;
//     company?: string;
//     avatar?: string;
//   };
//   image: string;
//   gallery: string[];
//   icon?: React.ReactNode;
// }

// const projects: Project[] = [
//   {
//     id: "ai-agent-platform",
//     title: "Intelligent Agent Platform",
//     description: "Enterprise-grade AI agent platform for business process automation",
//     overview: "We developed a cutting-edge AI agent platform for a leading enterprise software company. The platform enables businesses to create, deploy, and manage autonomous AI agents that can handle complex workflows, data analysis, and customer interactions with minimal human intervention.",
//     client: "EnterpriseAI Solutions",
//     date: "2024",
//     category: "AI Platform",
//     tags: ["AI Agents", "LLM Integration", "Enterprise Software", "Process Automation", "Python", "React"],
//     features: [
//       "Multi-agent orchestration system",
//       "Natural language task definition",
//       "Autonomous decision-making",
//       "Human-in-the-loop oversight",
//       "Integration with existing systems"
//     ],
//     results: [
//       { metric: "Process Efficiency", value: "+215%" },
//       { metric: "Cost Reduction", value: "-42%" },
//       { metric: "Decision Accuracy", value: "+67%" }
//     ],
//     testimonial: {
//       quote: "The AI agent platform has revolutionized how we approach business process automation. Tasks that used to take days now happen in minutes with greater accuracy and consistency.",
//       author: "Michael Chen",
//       position: "CTO",
//       company: "EnterpriseAI Solutions",
//       avatar: "/images/avatars/avatar-1.jpg"
//     },
//     image: "/images/projects/ai-platform.jpg",
//     gallery: [
//       "/images/projects/ai-platform-1.jpg",
//       "/images/projects/ai-platform-2.jpg",
//       "/images/projects/ai-platform-3.jpg"
//     ],
//     icon: <Bot className="h-6 w-6" />
//   },
//   {
//     id: "cloud-deployment",
//     title: "Enterprise Cloud Migration",
//     description: "Seamless migration of legacy systems to multi-cloud architecture",
//     overview: "We helped a global financial services company migrate their mission-critical applications from on-premises infrastructure to a secure, scalable multi-cloud architecture. The project involved complex data migration, security implementation, and zero-downtime deployment strategies.",
//     client: "Global Financial Services",
//     date: "2023",
//     category: "Cloud Infrastructure",
//     tags: ["Cloud Migration", "AWS", "Azure", "Kubernetes", "Terraform", "DevOps"],
//     features: [
//       "Multi-cloud orchestration",
//       "Containerized microservices",
//       "Automated CI/CD pipelines",
//       "Zero-downtime deployment",
//       "Advanced security implementation"
//     ],
//     results: [
//       { metric: "Infrastructure Costs", value: "-38%" },
//       { metric: "Deployment Speed", value: "+450%" },
//       { metric: "System Uptime", value: "99.99%" }
//     ],
//     testimonial: {
//       quote: "The cloud migration was the most seamless technology transition we've ever experienced. The team's expertise in multi-cloud architecture and security was exceptional.",
//       author: "Sophia Rodriguez",
//       position: "VP of Technology",
//       company: "Global Financial Services",
//       avatar: "/images/avatars/avatar-2.jpg"
//     },
//     image: "/images/projects/cloud-deployment.jpg",
//     gallery: [
//       "/images/projects/cloud-deployment-1.jpg",
//       "/images/projects/cloud-deployment-2.jpg",
//       "/images/projects/cloud-deployment-3.jpg"
//     ],
//     icon: <Cloud className="h-6 w-6" />
//   },
//   {
//     id: "evora-ecommerce",
//     title: "Evora E-Commerce Platform",
//     description: "A custom e-commerce solution for a luxury fashion brand",
//     overview: "Evora needed a premium online shopping experience that matched their high-end brand positioning. We developed a custom e-commerce platform with sophisticated product visualization, personalized recommendations, and seamless checkout.",
//     client: "Evora Fashion",
//     date: "2023",
//     category: "E-Commerce",
//     tags: ["E-Commerce", "UX Design", "React", "Node.js", "Stripe", "AWS"],
//     features: [
//       "360° product visualization",
//       "Size recommendation AI",
//       "Real-time inventory sync",
//       "One-click checkout",
//       "Customer loyalty program"
//     ],
//     results: [
//       { metric: "Conversion Rate", value: "+62%" },
//       { metric: "Avg. Order Value", value: "+41%" },
//       { metric: "Mobile Sales", value: "+85%" }
//     ],
//     testimonial: {
//       quote: "The platform transformed our online presence and significantly increased our digital revenue stream.",
//       author: "Alexandra Morgan",
//       position: "Digital Director",
//       company: "Evora Fashion",
//       avatar: "/images/avatars/avatar-3.jpg"
//     },
//     image: "/images/projects/ecommerce.jpg",
//     gallery: [
//       "/images/projects/ecommerce-1.jpg",
//       "/images/projects/ecommerce-2.jpg",
//       "/images/projects/ecommerce-3.jpg"
//     ],
//     icon: <Globe className="h-6 w-6" />
//   },
//   {
//     id: "nexus-finance",
//     title: "Nexus Finance Dashboard",
//     description: "Comprehensive financial analytics platform for enterprise clients",
//     overview: "Nexus Financial Services needed a powerful dashboard to help their enterprise clients visualize complex financial data and make informed decisions. We built a real-time analytics platform with interactive visualizations and custom reporting.",
//     client: "Nexus Financial Services",
//     date: "2023",
//     category: "FinTech",
//     tags: ["FinTech", "Data Visualization", "Vue.js", "AWS", "Machine Learning", "API Integration"],
//     features: [
//       "Real-time financial monitoring",
//       "Predictive analytics",
//       "Custom report generation",
//       "Multi-currency support",
//       "Role-based access control"
//     ],
//     results: [
//       { metric: "Decision Time", value: "-35%" },
//       { metric: "Data Processing", value: "+125%" },
//       { metric: "Client Retention", value: "+28%" }
//     ],
//     testimonial: {
//       quote: "This dashboard has revolutionized how our clients interact with their financial data and make strategic decisions.",
//       author: "Jonathan Weber",
//       position: "CTO",
//       company: "Nexus Financial",
//       avatar: "/images/avatars/avatar-4.jpg"
//     },
//     image: "/images/projects/finance.jpg",
//     gallery: [
//       "/images/projects/finance-1.jpg",
//       "/images/projects/finance-2.jpg",
//       "/images/projects/finance-3.jpg"
//     ],
//     icon: <BarChart3 className="h-6 w-6" />
//   },
//   {
//     id: "lumina-portfolio",
//     title: "Lumina Creative Portfolio",
//     description: "Immersive digital showcase for a leading creative agency",
//     overview: "Lumina Creative needed a website that would demonstrate their cutting-edge approach to design and storytelling. We created an immersive portfolio with dynamic animations, interactive case studies, and a custom CMS for easy content updates.",
//     client: "Lumina Creative",
//     date: "2022",
//     category: "Web Design",
//     tags: ["Web Design", "Animation", "React", "Three.js", "Framer Motion", "Sanity CMS"],
//     features: [
//       "3D interactive elements",
//       "Parallax scrolling effects",
//       "Dynamic case study layouts",
//       "Custom animation system",
//       "Integrated CMS"
//     ],
//     results: [
//       { metric: "Site Engagement", value: "+78%" },
//       { metric: "Avg. Session Time", value: "+103%" },
//       { metric: "New Client Inquiries", value: "+45%" }
//     ],
//     testimonial: {
//       quote: "Our new portfolio site perfectly captures our creative vision and has significantly increased our inbound leads.",
//       author: "David Chen",
//       position: "Creative Director",
//       company: "Lumina Creative",
//       avatar: "/images/avatars/avatar-5.jpg"
//     },
//     image: "/images/projects/portfolio.jpg",
//     gallery: [
//       "/images/projects/portfolio-1.jpg",
//       "/images/projects/portfolio-2.jpg",
//       "/images/projects/portfolio-3.jpg"
//     ],
//     icon: <Code className="h-6 w-6" />
//   },
//   {
//     id: "healthtracker-app",
//     title: "HealthTracker Mobile App",
//     description: "Personalized health monitoring application with AI-driven insights",
//     overview: "HealthTracker wanted to create a mobile app that would help users monitor their health metrics and receive personalized recommendations. We developed a comprehensive solution with wearable device integration, AI-powered insights, and a user-friendly interface.",
//     client: "HealthTracker Inc.",
//     date: "2022",
//     category: "Mobile App",
//     tags: ["Mobile App", "React Native", "AI", "Healthcare", "Firebase", "Machine Learning"],
//     features: [
//       "Wearable device integration",
//       "Personalized health insights",
//       "Nutrition tracking & analysis",
//       "Exercise planning & monitoring",
//       "Telehealth consultation"
//     ],
//     results: [
//       { metric: "User Retention", value: "+68%" },
//       { metric: "Daily Active Users", value: "+92%" },
//       { metric: "Health Goal Achievement", value: "+47%" }
//     ],
//     testimonial: {
//       quote: "The app has transformed how our users engage with their health data, leading to better outcomes and higher satisfaction.",
//       author: "Sarah Johnson",
//       position: "Product Director",
//       company: "HealthTracker Inc.",
//       avatar: "/images/avatars/avatar-6.jpg"
//     },
//     image: "/images/projects/health-app.jpg",
//     gallery: [
//       "/images/projects/health-app-1.jpg",
//       "/images/projects/health-app-2.jpg",
//       "/images/projects/health-app-3.jpg"
//     ],
//     icon: <Zap className="h-6 w-6" />
//   }
// ];

// const ProjectsSection = () => {
//   const [activeCategory, setActiveCategory] = useState<string>("All");
//   const [activeProject, setActiveProject] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);
//   const [showTestimonial, setShowTestimonial] = useState(false);
//   const projectRef = useRef<HTMLDivElement>(null);

//   const filteredProjects = activeCategory === "All" 
//     ? projects 
//     : projects.filter(project => project.category === activeCategory);

//   const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

//   const nextProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveProject((prev) => (prev === filteredProjects.length - 1 ? 0 : prev + 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const prevProject = () => {
//     if (isAnimating) return;
//     setIsAnimating(true);
//     setActiveProject((prev) => (prev === 0 ? filteredProjects.length - 1 : prev - 1));
//     setTimeout(() => setIsAnimating(false), 500);
//   };

//   const handleCategoryChange = (category: string) => {
//     setActiveCategory(category);
//     setActiveProject(0);
//   };

//   useEffect(() => {
//     if (activeProject >= filteredProjects.length) {
//       setActiveProject(0);
//     }
//   }, [filteredProjects, activeProject]);

//   // Ensure we're not trying to access a project that doesn't exist
//   const project = filteredProjects[activeProject] || projects[0];

//   return (
//     <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
//       {/* Decorative elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         <GridPattern
//           className="absolute inset-0 text-gray-100 dark:text-gray-800/20"
//         />
//         <div className="absolute -top-24 -right-20 w-96 h-96 opacity-20 dark:opacity-10">
//           <CircleBlob />
//         </div>
//         <div className="absolute bottom-0 left-10 opacity-10">
//           <GlowingSphere size="w-64 h-64" color="bg-purple-600/30" />
//         </div>
//       </div>

//       <div className="container relative mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
//         {/* Section header */}
//         <div className="text-center mb-12">
//           <div className="inline-block rounded-full bg-gradient-to-r from-purple-500/10 to-indigo-500/10 px-4 py-1.5 mb-4">
//             <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
//               Our Work
//             </span>
//           </div>
//           <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
//             Transformative Digital Solutions
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
//             Explore our portfolio of innovative projects that have helped businesses achieve their digital transformation goals.
//           </p>
//         </div>

//         {/* Category navigation */}
//         <div className="flex flex-wrap justify-center gap-2 mb-12">
//           {categories.map((category) => (
//             <button
//               key={category}
//               onClick={() => handleCategoryChange(category)}
//               className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
//                 activeCategory === category
//                   ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md"
//                   : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700"
//               }`}
//             >
//               {category}
//             </button>
//           ))}
//         </div>

//         <div ref={projectRef} className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
//           {/* Project gallery */}
//           <div className="lg:col-span-6 space-y-6">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="relative rounded-2xl overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 shadow-xl"
//               >
//                 <img
//                   src={project.image}
//                   alt={project.title}
//                   className="w-full h-full object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
//                 <div className="absolute bottom-0 left-0 p-6">
//                   <span className="inline-block px-3 py-1 text-xs font-medium text-white bg-purple-600/80 rounded-full backdrop-blur-sm mb-2">
//                     {project.category}
//                   </span>
//                   <h3 className="text-2xl font-bold text-white">{project.title}</h3>
//                 </div>
//               </motion.div>
//             </AnimatePresence>

//             {/* Thumbnail gallery */}
//             <div className="grid grid-cols-3 gap-4">
//               {project.gallery.map((image, index) => (
//                 <div
//                   key={index}
//                   className="relative rounded-lg overflow-hidden aspect-video bg-gray-100 dark:bg-gray-800 shadow-md group cursor-pointer"
//                 >
//                   <img
//                     src={image}
//                     alt={`${project.title} gallery ${index + 1}`}
//                     className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
//                   />
//                   <div className="absolute inset-0 bg-purple-600/0 group-hover:bg-purple-600/20 transition-colors duration-300"></div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Project details */}
//           <div className="lg:col-span-6 space-y-8">
//             <AnimatePresence mode="wait">
//               <motion.div
//                 key={project.id}
//                 initial={{ opacity: 0, x: 20 }}
//                 animate={{ opacity: 1, x: 0 }}
//                 exit={{ opacity: 0, x: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="space-y-6"
//               >
//                 <div className="flex items-center space-x-4">
//                   <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 flex items-center justify-center text-white">
//                     {project.icon || <Code className="h-6 w-6" />}
//                   </div>
//                   <div>
//                     <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h3>
//                     <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
//                   </div>
//                 </div>

//                 <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
//                   <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
//                     <Tag className="mr-2 h-5 w-5 text-purple-600" />
//                     Project Overview
//                   </h4>
//                   <p className="text-gray-600 dark:text-gray-400 mb-4">
//                     {project.overview}
//                   </p>
//                   <div className="flex flex-wrap gap-2 mb-4">
//                     {project.tags.map((tag) => (
//                       <span
//                         key={tag}
//                         className="inline-block px-3 py-1 text-xs font-medium text-purple-700 bg-purple-100 dark:text-purple-300 dark:bg-purple-900/30 rounded-full"
//                       >
//                         {tag}
//                       </span>
//                     ))}
//                   </div>
//                   <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
//                     <Calendar className="mr-1 h-4 w-4" />
//                     <span>{project.date}</span>
//                     <span className="mx-2">•</span>
//                     <span>{project.client}</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   {/* Features */}
//                   <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
//                     <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
//                       <Zap className="mr-2 h-5 w-5 text-purple-600" />
//                       Key Features
//                     </h4>
//                     <ul className="space-y-2">
//                       {project.features.map((feature, index) => (
//                         <li key={index} className="flex items-start">
//                           <ChevronRight className="mr-2 h-5 w-5 text-purple-600 flex-shrink-0 mt-0.5" />
//                           <span className="text-gray-600 dark:text-gray-400">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   {/* Results */}
//                   <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700">
//                     <h4 className="text-lg font-semibold mb-3 flex items-center text-gray-900 dark:text-white">
//                       <Award className="mr-2 h-5 w-5 text-purple-600" />
//                       Results Delivered
//                     </h4>
//                     <div className="space-y-3">
//                       {project.results.map((result, index) => (
//                         <div key={index} className="flex justify-between items-center">
//                           <span className="text-gray-600 dark:text-gray-400">{result.metric}</span>
//                           <span className="font-bold text-purple-600 dark:text-purple-400">{result.value}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Enhanced Testimonial Section */}
//                 {project.testimonial && (
//                   <div className="relative bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20 rounded-xl p-6 shadow-lg border border-purple-100 dark:border-purple-800/20 overflow-hidden group">
//                     <div className="absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 opacity-10">
//                       <Sparkle size="128" />
//                     </div>
                    
//                     <div className="flex items-start space-x-4">
//                       {project.testimonial.avatar && (
//                         <div className="flex-shrink-0 hidden md:block">
//                           <img 
//                             src={project.testimonial.avatar} 
//                             alt={project.testimonial.author}
//                             className="w-16 h-16 rounded-full border-2 border-white shadow-md object-cover"
//                           />
//                         </div>
//                       )}
//                       <div className="flex-1">
//                         <div className="text-purple-600 dark:text-purple-400 text-4xl font-serif leading-none mb-2">"</div>
//                         <p className="text-gray-700 dark:text-gray-300 italic mb-4 relative">
//                           {project.testimonial.quote}
//                           <span className="text-purple-600 dark:text-purple-400 text-4xl font-serif absolute -bottom-4 right-0">"</span>
//                         </p>
//                         <div className="flex items-center justify-between">
//                           <div>
//                             <p className="font-semibold text-gray-900 dark:text-white">{project.testimonial.author}</p>
//                             <p className="text-sm text-gray-600 dark:text-gray-400">
//                               {project.testimonial.position}
//                               {project.testimonial.company && `, ${project.testimonial.company}`}
//                             </p>
//                           </div>
//                           <div className="hidden md:block">
//                             <Button 
//                               variant="ghost" 
//                               size="sm"
//                               className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-300"
//                               onClick={() => setShowTestimonial(!showTestimonial)}
//                             >
//                               Read full testimonial
//                             </Button>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </motion.div>
//             </AnimatePresence>

//             {/* Navigation controls */}
//             <div className="flex justify-between items-center">
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={prevProject}
//                 className="rounded-full"
//               >
//                 <ArrowLeft className="h-4 w-4" />
//               </Button>
//               <div className="flex space-x-1">
//                 {filteredProjects.map((_, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setActiveProject(index)}
//                     className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
//                       index === activeProject
//                         ? "bg-purple-600"
//                         : "bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600"
//                     }`}
//                   />
//                 ))}
//               </div>
//               <Button
//                 variant="outline"
//                 size="icon"
//                 onClick={nextProject}
//                 className="rounded-full"
//               >
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </div>

//         {/* Enhanced CTA Section */}
//         <div className="mt-20 relative">
//           <div className="absolute inset-0 bg-gradient-to-r from-purple-600/5 to-indigo-600/5 rounded-3xl"></div>
//           <div className="relative bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 overflow-hidden">
//             <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 opacity-10">
//               <CircleBlob />
//             </div>
            
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
//               <div>
//                 <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-4">
//                   Ready to Transform Your Digital Presence?
//                 </h3>
//                 <p className="text-gray-600 dark:text-gray-400 mb-6">
//                   Let's discuss how our expertise in AI, cloud solutions, and digital transformation can help your business achieve its goals.
//                 </p>
                
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <Button className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white shadow-md">
//                     <Link href="/contact">
//                       <div className="flex items-center">
//                         Schedule a Consultation
//                         <ArrowRight className="ml-2 h-4 w-4" />
//                       </div>
//                     </Link>
//                   </Button>
//                   <Button variant="outline" className="border-purple-200 dark:border-purple-900 hover:bg-purple-50 dark:hover:bg-purple-900/20">
//                     <Link href="/services">
//                       <div className="flex items-center">
//                         Explore Our Services
//                         <ExternalLink className="ml-2 h-4 w-4" />
//                       </div>
//                     </Link>
//                   </Button>
//                 </div>
                
//                 <div className="mt-6 flex items-center">
//                   <div className="flex -space-x-2">
//                     {[1, 2, 3, 4].map((i) => (
//                       <img 
//                         key={i}
//                         src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? 'women' : 'men'}/${20 + i}.jpg`} 
//                         alt="Client" 
//                         className="w-8 h-8 rounded-full border-2 border-white dark:border-gray-800"
//                       />
//                     ))}
//                   </div>
//                   <div className="ml-4">
//                     <div className="flex items-center">
//                       {[1, 2, 3, 4, 5].map((star) => (
//                         <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
//                           <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
//                         </svg>
//                       ))}
//                     </div>
//                     <p className="text-sm text-gray-600 dark:text-gray-400">
//                       <span className="font-medium">4.9/5</span> from <span className="font-medium">120+ clients</span>
//                     </p>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="hidden lg:block">
//                 <div className="grid grid-cols-2 gap-4">
//                   {/* Client Testimonial Snippets */}
//                   {[
//                     { text: "OSL Strategy transformed our business with their AI solutions.", author: "Marketing Director" },
//                     { text: "The team delivered our project ahead of schedule and exceeded expectations.", author: "CTO" },
//                     { text: "Their expertise in cloud deployment saved us thousands in infrastructure costs.", author: "IT Manager" },
//                     { text: "Working with OSL was the best decision we made for our digital transformation.", author: "CEO" }
//                   ].map((quote, i) => (
//                     <div 
//                       key={i} 
//                       className={`bg-gradient-to-br ${
//                         i % 2 === 0 
//                           ? 'from-purple-50 to-indigo-50 dark:from-purple-900/10 dark:to-indigo-900/10' 
//                           : 'from-indigo-50 to-purple-50 dark:from-indigo-900/10 dark:to-purple-900/10'
//                       } p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700`}
//                     >
//                       <p className="text-sm text-gray-700 dark:text-gray-300 italic mb-2">{quote.text}</p>
//                       <p className="text-xs text-gray-500 dark:text-gray-500 font-medium">{quote.author}</p>
//                     </div>
//                   ))}
//                 </div>clear

//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectsSection;
// */

const ProjectsSection = () => null;
export default ProjectsSection;
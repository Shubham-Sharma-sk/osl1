// import { useEffect } from 'react';

// const TestimonialsSection = () => {
//   useEffect(() => {
//     const revealElements = document.querySelectorAll('.reveal');
    
//     const checkReveal = () => {
//       const windowHeight = window.innerHeight;
//       const revealPoint = 150;
      
//       revealElements.forEach(element => {
//         const revealTop = element.getBoundingClientRect().top;
        
//         if (revealTop < windowHeight - revealPoint) {
//           element.classList.add('revealed');
//         }
//       });
//     };

//     window.addEventListener('scroll', checkReveal);
//     window.addEventListener('resize', checkReveal);
    
//     return () => {
//       window.removeEventListener('scroll', checkReveal);
//       window.removeEventListener('resize', checkReveal);
//     };
//   }, []);

//   const testimonials = [
//     {
//       quote: "Working with OSL transformed our online presence. Their team delivered a website that exceeded our expectations in terms of design, functionality, and performance.",
//       name: "Sarah Johnson",
//       title: "CEO, Artemis Brands"
//     },
//     {
//       quote: "The e-commerce platform OSL built for us has significantly increased our conversion rates and sales. Their attention to detail and technical expertise was impressive.",
//       name: "Michael Chen",
//       title: "Marketing Director, Horizon Tech"
//     }
//   ];

//   return (
//     <section className="py-24 px-6 md:px-16 bg-accent/5">
//       <div className="max-w-7xl mx-auto">
//         <h2 className="text-4xl md:text-6xl font-bold mb-16 reveal">Client Testimonials</h2>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 reveal">
//           {testimonials.map((testimonial, index) => (
//             <div key={index} className="bg-dark border border-white/20 rounded-xl p-8 md:p-12">
//               <svg className="w-12 h-12 text-accent mb-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.626.41-2.233.315-.607.982-1.189 2.01-1.745l-1.17-.858c-1.042.6-1.872 1.218-2.51 1.852-.796.783-1.302 1.71-1.516 2.77-.214 1.062-.076 2.332.415 3.83.456 1.408 1.27 2.165 2.446 2.276.846.066 1.612-.3 2.25-1.088.63-.786.96-1.72.96-2.75l.01-.05zm7.42 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.683-1.327-.814-.56-.13-1.07-.14-1.54-.03-.16-.95.1-1.62.41-2.23.316-.61.983-1.19 2.012-1.75l-1.17-.85c-1.047.6-1.877 1.22-2.516 1.85-.796.79-1.302 1.71-1.516 2.77-.214 1.06-.076 2.33.415 3.83.456 1.41 1.27 2.16 2.445 2.27.846.07 1.612-.3 2.252-1.08.63-.79.96-1.72.96-2.75l.01-.05z"/>
//               </svg>
              
//               <p className="text-xl italic mb-8">
//                 "{testimonial.quote}"
//               </p>
              
//               <div>
//                 <p className="font-bold">{testimonial.name}</p>
//                 <p className="opacity-70">{testimonial.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TestimonialsSection;
const TestimonialsSection = () => null;
export default TestimonialsSection;
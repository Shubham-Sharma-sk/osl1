import { useEffect, useRef } from "react";

const ServicesSection = () => {
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

  useEffect(() => {
    const horizontalSection = scrollContainerRef.current;
    
    if (!horizontalSection || window.innerWidth <= 768) return;
    
    let isDown = false;
    let startX: number;
    let scrollLeft: number;
    
    const mouseDown = (e: MouseEvent) => {
      isDown = true;
      if (horizontalSection) {
        horizontalSection.style.cursor = 'grabbing';
        startX = e.pageX - horizontalSection.offsetLeft;
        scrollLeft = horizontalSection.scrollLeft;
      }
    };
    
    const mouseLeave = () => {
      isDown = false;
      if (horizontalSection) {
        horizontalSection.style.cursor = 'grab';
      }
    };
    
    const mouseUp = () => {
      isDown = false;
      if (horizontalSection) {
        horizontalSection.style.cursor = 'grab';
      }
    };
    
    const mouseMove = (e: MouseEvent) => {
      if (!isDown) return;
      e.preventDefault();
      if (horizontalSection) {
        const x = e.pageX - horizontalSection.offsetLeft;
        const walk = (x - startX) * 2;
        horizontalSection.scrollLeft = scrollLeft - walk;
      }
    };
    
    horizontalSection.addEventListener('mousedown', mouseDown);
    horizontalSection.addEventListener('mouseleave', mouseLeave);
    horizontalSection.addEventListener('mouseup', mouseUp);
    horizontalSection.addEventListener('mousemove', mouseMove);
    
    return () => {
      if (horizontalSection) {
        horizontalSection.removeEventListener('mousedown', mouseDown);
        horizontalSection.removeEventListener('mouseleave', mouseLeave);
        horizontalSection.removeEventListener('mouseup', mouseUp);
        horizontalSection.removeEventListener('mousemove', mouseMove);
      }
    };
  }, []);

  const services = [
    {
      title: "Web Development",
      description: "We build responsive, high-performance websites and web applications that deliver exceptional user experiences across all devices.",
      features: [
        "Custom Web Applications",
        "Progressive Web Apps",
        "Frontend & Backend Development",
        "CMS Implementation"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
      title: "Digital Design",
      description: "Our design approach combines aesthetics with functionality, creating intuitive interfaces that captivate users and drive engagement.",
      features: [
        "UI/UX Design",
        "Responsive Web Design",
        "Interaction Design",
        "Design Systems"
      ],
      image: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e"
    },
    {
      title: "E-Commerce Solutions",
      description: "We create seamless shopping experiences that drive conversion and customer loyalty through strategic e-commerce implementation.",
      features: [
        "Custom E-Commerce Development",
        "Shopping Cart Integration",
        "Payment Gateway Setup",
        "Inventory Management Systems"
      ],
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3"
    },
    {
      title: "Digital Strategy",
      description: "We develop comprehensive digital strategies that align with your business goals and maximize your online presence and impact.",
      features: [
        "Market Research & Analysis",
        "Competitive Positioning",
        "User Journey Mapping",
        "Performance Optimization"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978"
    }
  ];

  return (
    <section id="services" className="horizontal-scroll-container py-24">
      <div className="px-6 md:px-16 mb-16">
        <h2 className="text-4xl md:text-6xl font-bold reveal">Our Services</h2>
      </div>
      
      <div className="horizontal-scroll-section" ref={scrollContainerRef}>
        {services.map((service, index) => (
          <div key={index} className="min-w-full md:min-w-[50vw] lg:min-w-[33.33vw] p-6 md:p-12">
            <div className="border border-white/20 rounded-xl p-8 md:p-12 h-full">
              <h3 className="text-2xl md:text-3xl font-bold mb-6">{service.title}</h3>
              <p className="opacity-80 mb-8">{service.description}</p>
              <ul className="space-y-3 opacity-80 mb-12">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
              <div className="w-full aspect-video rounded-lg overflow-hidden">
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;

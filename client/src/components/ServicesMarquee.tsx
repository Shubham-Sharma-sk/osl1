const ServicesMarquee = () => {
  const services = [
    "WEB DEVELOPMENT",
    "DIGITAL DESIGN",
    "BRAND IDENTITY",
    "SEO OPTIMIZATION"
  ];

  return (
    <div className="py-16 overflow-hidden bg-accent">
      <div className="marquee">
        <div className="marquee-content flex">
          {services.map((service, index) => (
            <span key={`service-${index}`} className="text-7xl font-black px-8 opacity-90">
              {service}
            </span>
          ))}
          {/* Duplicate for continuous scroll */}
          {services.map((service, index) => (
            <span key={`service-dup-${index}`} className="text-7xl font-black px-8 opacity-90">
              {service}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesMarquee;

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-16 px-6 md:px-16 border-t border-white/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <a href="#" className="text-2xl font-bold tracking-widest mb-6 inline-block">OSL</a>
            <p className="opacity-70 max-w-md">
              We craft exceptional digital experiences through innovative web development, design, and strategy.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 opacity-70">
              <li><a href="#about" className="hover:text-accent transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-accent transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-accent transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3 opacity-70">
              <li><a href="#" className="hover:text-accent transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Digital Design</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">E-Commerce</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Digital Strategy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="opacity-60 mb-4 md:mb-0">© {currentYear} OSL. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="opacity-60 hover:opacity-100 transition-opacity">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link } from "wouter";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference ${isScrolled ? 'bg-transparent' : ''}`}>
        <Link href="/" className="text-xl font-bold tracking-widest">
          OSL
        </Link>
        <div className="hidden md:flex gap-8">
          <a href="#about" className="hover:text-accent-light transition-colors">
            About
          </a>
          <a href="#services" className="hover:text-accent-light transition-colors">
            Services
          </a>
          <a href="#projects" className="hover:text-accent-light transition-colors">
            Projects
          </a>
          <a href="#contact" className="hover:text-accent-light transition-colors">
            Contact
          </a>
        </div>
        <button className="md:hidden" onClick={toggleMenu} aria-label="Toggle menu">
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
      </nav>

      <div 
        className={`fixed inset-0 bg-background z-40 flex flex-col justify-center items-center transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="text-4xl font-bold flex flex-col gap-8 items-center">
          <a href="#about" className="hover:text-accent-light transition-colors" onClick={closeMenu}>
            About
          </a>
          <a href="#services" className="hover:text-accent-light transition-colors" onClick={closeMenu}>
            Services
          </a>
          <a href="#projects" className="hover:text-accent-light transition-colors" onClick={closeMenu}>
            Projects
          </a>
          <a href="#contact" className="hover:text-accent-light transition-colors" onClick={closeMenu}>
            Contact
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;

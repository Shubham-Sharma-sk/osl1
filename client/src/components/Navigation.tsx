import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

const sections = ["home", "about", "services", "contact"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location, setLocation] = useLocation();

  useEffect(() => {
    if (location === "/" || location === "/home") {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        let current = "home";

        for (let id of sections) {
          const el = document.getElementById(id);
          if (el && el.offsetTop - 100 <= scrollY) {
            current = id;
          }
        }
        setActiveSection(current);
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll();
      return () => window.removeEventListener("scroll", handleScroll);
    } else {
      const match = sections.find(sec => location.replace("/", "") === sec);
      setActiveSection(match || "");
    }
  }, [location]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 pt-8">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        {/* Navbar Container - Centered */}
        <div className="flex justify-center items-center relative">
          {/* Navigation Menu with Logo */}
          <div className="flex">
            <div className="bg-black/80 dark:bg-black/90 backdrop-blur-md border border-gray-800 rounded-full px-6 py-3 flex items-center">
              {/* Logo inside the nav bar */}
              <Link href="/">
                <a className="flex items-center">
                  <img 
                    src="/assets/osl-logo.png" 
                    alt="OSL Logo" 
                    className="h-12 w-auto"
                  />
                </a>
              </Link>
              
              {/* Nav Links */}
              <div className="hidden lg:flex items-center">
                {sections.map((section) => (
                  <a
                    key={section}
                    href={`#${section}`}
                    onClick={(e) => {
                      if (location === "/" || location === "/home") {
                        e.preventDefault();
                        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        e.preventDefault();
                        setLocation(section === "home" ? "/" : `/${section}`);
                      }
                    }}
                    className={`relative px-4 py-2 rounded-full flex items-center font-medium transition-colors ${
                      activeSection === section
                        ? "text-white bg-indigo-600/90"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    {section === "home" && <Home className="w-4 h-4 mr-2" />}
                    <span className="capitalize">{section}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Toggle Button */}
          <div className="absolute right-0 lg:hidden z-50">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full text-white hover:text-indigo-400 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {/* Mobile Logo */}
          <div className="absolute top-6 left-0 w-full flex justify-center mb-12">
            <img 
              src="/assets/osl-logo.png" 
              alt="OSL Logo" 
              className="h-16 w-auto"
            />
          </div>

          {sections.map((section) => (
            <a
              key={section}
              href={`#${section}`}
              onClick={(e) => {
                if (location === "/" || location === "/home") {
                  e.preventDefault();
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
                } else {
                  e.preventDefault();
                  setLocation(section === "home" ? "/" : `/${section}`);
                }
                setIsOpen(false);
              }}
              className="text-2xl font-medium text-white hover:text-indigo-400 transition"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

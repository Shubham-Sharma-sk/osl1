import { useState, useEffect } from "react";
import { Menu, X, Home } from "lucide-react";
import { Link, useLocation } from "wouter";

// Removed 'projects' from sections
const sections = ["home", "about", "services", "contact"];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [location, setLocation] = useLocation();

  useEffect(() => {
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex justify-center items-center py-4">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex">
            <div className="bg-black/80 backdrop-blur-md border border-gray-800 rounded-full px-4 py-2 flex items-center space-x-1">
              {sections.map((section) =>
                section === "home" ? (
                  <a
                    key="home"
                    href="#home"
                    onClick={(e) => {
                      if (location === "/") {
                        e.preventDefault();
                        document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                      } else {
                        e.preventDefault();
                        setLocation("/");
                        setTimeout(() => {
                          document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                        }, 100);
                      }
                    }}
                    className={`relative px-4 py-2 rounded-full flex items-center font-medium transition-colors ${
                      activeSection === "home"
                        ? "text-white bg-gradient-to-r from-purple-600 to-blue-600"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <Home className="w-4 h-4 mr-2" />
                    <span className="capitalize">Home</span>
                  </a>
                ) : (
                  <a
                    key={section}
                    href={`#${section}`}
                    className={`relative px-4 py-2 rounded-full flex items-center font-medium transition-colors ${
                      activeSection === section
                        ? "text-white bg-gradient-to-r from-purple-600 to-blue-600"
                        : "text-white/80 hover:bg-white/10"
                    }`}
                  >
                    <span className="capitalize">{section}</span>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden absolute left-6 p-2 rounded-full hover:text-purple-500 transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden fixed inset-0 bg-black/95 backdrop-blur-lg z-40 flex flex-col justify-center items-center space-y-8 transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          {sections.map((section) =>
            section === "home" ? (
              <a
                key="home"
                href="#home"
                onClick={(e) => {
                  if (location === "/") {
                    e.preventDefault();
                    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                  } else {
                    e.preventDefault();
                    setLocation("/");
                    setTimeout(() => {
                      document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
                    }, 100);
                  }
                }}
                className="text-2xl font-medium text-white hover:text-purple-500 transition"
              >
                Home
              </a>
            ) : (
              <a
                key={section}
                href={`#${section}`}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-medium text-white hover:text-purple-500 transition"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            )
          )}
        </div>
      </div>
    </header>
  );
};

export default Navigation;

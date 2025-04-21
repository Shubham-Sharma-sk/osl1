import { Link } from "wouter";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-200 py-16 px-6 md:px-16 border-t border-gray-200 dark:border-gray-800/50 relative">
      {/* Decorative gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 dark:from-indigo-950/30 to-transparent opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative">
        {/* Top part with logo, description and social links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 pb-12 border-b border-gray-200 dark:border-gray-800/50">
          {/* Logo and description */}
          <div className="lg:col-span-2">
            <div className="flex flex-col">
              <span className="font-bold text-2xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 dark:from-indigo-400 dark:to-blue-400 mb-4">OSL</span>
              <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-md">
                We craft exceptional digital experiences through innovative web development, design, and strategy.
              </p>
              <div className="flex items-center space-x-2">
                <div className="text-sm bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 px-4 py-1.5 rounded-full font-medium border border-indigo-200 dark:border-indigo-800/50">
                  Paris, France
                </div>
              </div>
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#process" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Connect */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:contact@oslstrategy.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@oslstrategy.com</span>
                </a>
              </li>
              {/* <li className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </li> */}
            </ul>
          </div>
        </div>
        
        {/* Bottom part with copyright and legal links */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500 dark:text-gray-400">
            &copy; {currentYear} OSL. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm">
            <Link href="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Terms & Conditions
            </Link>
            <Link href="/cookies-policy" className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
              Cookies Policy
            </Link>
          </div>
          
          {/* Scroll to top button - hidden on mobile */}
          <button 
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 bg-indigo-500 hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg transition-colors z-50 hidden md:block"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

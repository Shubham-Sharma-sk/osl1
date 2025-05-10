import { Link } from "wouter";
import { Mail, ArrowUp } from "lucide-react";

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
        {/* Top part with only contact information */}
        <div className="flex justify-center mb-12 pb-12 border-b border-gray-200 dark:border-gray-800/50">
          {/* Connect */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-center">Connect</h3>
            <ul>
              <li>
                <a 
                  href="mailto:contact@oslstrategy.com" 
                  className="text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>contact@oslstrategy.com</span>
                </a>
              </li>
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
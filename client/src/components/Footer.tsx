import { Link } from "wouter";

const Footer = () => {
  return (
    <footer className="w-full bg-black/90 text-white py-8 px-4 mt-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="font-bold text-lg bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500 mb-2">OSL</span>
          <span className="text-sm opacity-70 mb-2">We craft exceptional digital experiences through innovative web development, design, and strategy.</span>
          <span className="text-xs bg-gradient-to-r from-purple-700/80 to-blue-800/80 px-3 py-1 rounded-md mt-2">25 RUE des Bas, 92600 Asnières-sur-Seine, FRANCE</span>
        </div>
        <div className="flex flex-col items-center md:items-end gap-2">
          <span className="text-xs opacity-60">&copy; {new Date().getFullYear()} OSL. All rights reserved.</span>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="opacity-60 hover:opacity-100 transition-opacity">Privacy Policy</Link>
            <Link href="/terms-and-conditions" className="opacity-60 hover:opacity-100 transition-opacity">Terms and Conditions</Link>
            <Link href="/cookies-policy" className="opacity-60 hover:opacity-100 transition-opacity">Cookies Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

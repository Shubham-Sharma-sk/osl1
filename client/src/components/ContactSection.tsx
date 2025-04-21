import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 bg-white text-gray-900 dark:bg-gray-950 dark:text-white transition-colors duration-300 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-indigo-50/50 dark:from-indigo-950/30 to-transparent opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-full h-64 bg-gradient-to-t from-indigo-50/50 dark:from-indigo-950/30 to-transparent opacity-70 pointer-events-none"></div>
      
      <div className="max-w-5xl mx-auto text-center mb-16 relative">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-block px-4 py-1.5 mb-6 rounded-full text-sm font-medium bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800/50"
        >
          Get in Touch
        </motion.span>
        
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white"
        >
          Have any questions?
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-2xl font-semibold"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-blue-500 to-indigo-400 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-300">
            We'd love to hear from you...
          </span>
        </motion.p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col items-start transition-colors duration-300 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800/50 group"
        >
          <div className="mb-4 p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40">
            <Mail className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Sales Inquiries:
          </p>
          <a href="mailto:Sales@oslstrategy.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center gap-1 font-medium">
            sales@oslstrategy.com
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 flex flex-col items-start transition-colors duration-300 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800/50 group"
        >
          <div className="mb-4 p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40">
            <Phone className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Contact</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-1">
            Contact Inquiries:
          </p>
          <a href="mailto:contact@oslstrategy.com" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors duration-300 flex items-center gap-1 font-medium">
            contact@oslstrategy.com
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 md:col-span-2 transition-colors duration-300 hover:shadow-xl hover:border-indigo-200 dark:hover:border-indigo-800/50 group"
        >
          <div className="flex flex-col items-center text-center w-full">
            <div className="mb-4 p-3 rounded-xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 transition-colors duration-300 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800/40">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Location</h3>
            <p className="text-gray-700 dark:text-gray-300 font-medium">Paris, France</p>
            
            <div className="mt-4 w-full max-w-xs h-1 bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent rounded-full opacity-60"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;

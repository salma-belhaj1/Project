import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { useTheme } from '../contexts/ThemeContext'; 

const Footer = () => {
  const { darkMode } = useTheme(); 

  return (
    <footer className={`flex flex-col items-center justify-center px-6 md:px-16 lg:px-48 py-6 ${darkMode ? 'bg-purple' : 'bg-white'} shadow-t-md transition-colors duration-300 text-center`}>
      <div className="flex flex-wrap justify-center gap-6 mb-4">
        <button className="hover:text-purple-500 transition-colors duration-300">
          <Facebook className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </button>
        <button className="hover:text-purple-500 transition-colors duration-300">
          <Twitter className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </button>
        <button className="hover:text-purple-500 transition-colors duration-300">
          <Instagram className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </button>
        <button className="hover:text-purple-500 transition-colors duration-300">
          <Linkedin className={`w-6 h-6 ${darkMode ? 'text-white' : 'text-gray-800'}`} />
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-xs md:text-sm">
        <button className={`hover:text-purple-500 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          About
        </button>
        <button className={`hover:text-purple-500 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Contact
        </button>
        <button className={`hover:text-purple-500 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Privacy Policy
        </button>
        <button className={`hover:text-purple-500 transition-colors duration-300 ${darkMode ? 'text-white' : 'text-gray-800'}`}>
          Terms of Service
        </button>
      </div>

      <p className={`mt-4 text-xs ${darkMode ? 'text-gray-400' : 'text-gray-800'}`}>
        © {new Date().getFullYear()} Cheebo. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
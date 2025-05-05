import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Coffee } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <motion.header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 md:px-12 lg:px-24 py-4 ${
        scrolled ? 'bg-dark-bg/80 backdrop-blur-md' : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold font-display">
          AMIR LEHMAM
        </a>

        <nav className="hidden md:flex space-x-8">
          <a href="#experience" className="hover:text-accent-coral transition-colors">
            Experience
          </a>
          <a href="#projects" className="hover:text-accent-coral transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-accent-coral transition-colors">
            Skills
          </a>
          <a href="#about" className="hover:text-accent-coral transition-colors">
            About
          </a>
          <a href="#contact" className="hover:text-accent-coral transition-colors">
            Contact
          </a>
        </nav>

        <a 
          href="https://buymeacoffee.com/amirlehmam" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-black text-white rounded-full py-2 px-4 flex items-center space-x-2 hover-lift"
        >
          <Coffee size={18} />
          <span className="hidden sm:inline">Buy Me a Coffee</span>
        </a>
      </div>
    </motion.header>
  );
};

export default Navbar
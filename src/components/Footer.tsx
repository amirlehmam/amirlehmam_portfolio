import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-bg py-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <a href="#hero" className="text-2xl font-bold font-display">
            LEHMAM.
          </a>
          <p className="text-white/60 text-sm mt-2">
            &copy; {year} Amir Lehmam. All rights reserved.
          </p>
        </div>
        
        <div className="flex items-center justify-center">
          <span className="text-white/60 text-sm flex items-center">
            Built with <Heart size={14} className="mx-1 text-accent-coral" /> in Paris
          </span>
        </div>
        
        <div className="mt-4 md:mt-0 flex gap-4">
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Privacy
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Terms
          </a>
          <a href="#" className="text-white/60 hover:text-white transition-colors">
            Sitemap
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
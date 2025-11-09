import React from 'react';
import { Twitter, Youtube, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-xl font-bold text-white">NovaCloud</p>
            <p className="text-white/60">Minecraft hosting in Singapore & Indonesia</p>
          </div>
          <div className="flex items-center gap-4 text-white/70">
            <a href="#" className="hover:text-white" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" className="hover:text-white" aria-label="YouTube"><Youtube size={20} /></a>
            <a href="#" className="hover:text-white" aria-label="GitHub"><Github size={20} /></a>
          </div>
        </div>
        <p className="mt-6 text-center text-white/50 text-sm">© {new Date().getFullYear()} NovaCloud. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

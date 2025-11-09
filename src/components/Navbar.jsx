import React from 'react';
import { Rocket, Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/70 bg-slate-950/60 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="inline-flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-emerald-500 grid place-items-center text-black">
            <Rocket size={18} />
          </div>
          <span className="text-white font-extrabold tracking-tight text-lg">NovaCloud</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-white/80">
          <a href="#features" className="hover:text-white">Features</a>
          <a href="#pricing" className="hover:text-white">Pricing</a>
          <a href="#" className="hover:text-white">Locations</a>
          <a href="#" className="hover:text-white">Support</a>
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 rounded-lg text-white/90 hover:text-white">Sign in</a>
          <a href="#pricing" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-black font-semibold">Get Started</a>
        </div>

        <button className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg ring-1 ring-white/10 text-white/90">
          <Menu size={20} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;

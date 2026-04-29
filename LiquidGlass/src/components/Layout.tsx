import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Grid3X3 } from 'lucide-react';

export const Navbar: React.FC = () => {
  const location = useLocation();
  
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[95%] max-w-6xl rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex justify-between items-center px-4 md:px-8 py-3 z-[100] bg-white/5 backdrop-blur-2xl transition-all duration-500">
      <Link to="/" className="flex items-center gap-3 group">
        <span className="material-symbols-outlined text-white text-2xl group-hover:rotate-90 transition-transform duration-700">blur_on</span>
        <span className="text-lg md:text-xl font-black tracking-tighter text-white font-['Barlow'] tracking-widest uppercase">AURAFLOW</span>
      </Link>
      
      <div className="hidden lg:flex items-center gap-8">
        <Link to="/infrastructure" className={`font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${location.pathname === '/infrastructure' ? 'text-white' : 'text-white/40 hover:text-white'}`}>Infrastructure</Link>
        <Link to="/case-studies" className={`font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${location.pathname === '/case-studies' ? 'text-white' : 'text-white/40 hover:text-white'}`}>Case Studies</Link>
        <Link to="/retainers" className={`font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${location.pathname === '/retainers' ? 'text-white' : 'text-white/40 hover:text-white'}`}>Retainers</Link>
        <Link to="/about" className={`font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase transition-colors duration-500 ${location.pathname === '/about' ? 'text-white' : 'text-white/40 hover:text-white'}`}>About</Link>
      </div>

      <button className="liquid-glass hover:bg-white/10 hover:border-white/20 transition-all duration-700 ease-in-out active:scale-95 px-4 md:px-6 py-2 rounded-full font-label-caps text-[10px] md:text-xs text-white uppercase tracking-widest">
        Audit My Infrastructure
      </button>
    </nav>
  );
};

export const Footer: React.FC = () => {
  return (
    <footer className="w-full px-12 py-24 flex flex-col items-center gap-12 bg-black relative border-t border-white/10 z-10">
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <Link to="/infrastructure" className="font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500">Infrastructure</Link>
        <Link to="/case-studies" className="font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500">Case Studies</Link>
        <Link to="/retainers" className="font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500">Retainers</Link>
        <Link to="/about" className="font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500">About</Link>
      </div>
      
      <div className="flex flex-col items-center gap-2">
        <div className="text-white/30 font-['Barlow'] font-semibold text-[10px] tracking-[0.2em] uppercase text-center">
          © 2026 AURAFLOW STUDIOS. CURATING THE FUTURE.
        </div>
        <div className="text-white/20 font-['Barlow'] font-semibold text-[8px] tracking-[0.2em] uppercase text-center">
          ENTERPRISE-GRADE AI & BACKEND ARCHITECTURE. BUILT FOR SCALE.
        </div>
      </div>
    </footer>
  );
};

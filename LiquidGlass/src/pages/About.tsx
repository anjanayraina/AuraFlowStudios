import React from 'react';
import { Mail, Github, Linkedin, MapPin } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            {/* Using a placeholder for professional image - the user can replace this */}
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <span className="font-['Instrument_Serif'] text-6xl italic text-white/10">AR</span>
            </div>
            
            <div className="absolute bottom-12 left-12 z-20">
              <h2 className="text-4xl font-['Instrument_Serif'] italic text-white mb-2">Anjanay Raina</h2>
              <p className="text-white/40 font-['Barlow'] uppercase tracking-[0.3em] text-[10px]">Founder & Technical Lead</p>
            </div>
          </div>
          
          <div className="absolute -bottom-6 -right-6 liquid-glass p-8 rounded-3xl border border-white/10 hidden md:block">
             <div className="flex flex-col gap-4">
                <a href="mailto:anjanayraina326@gmail.com" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <Mail size={18} />
                  <span className="text-xs font-['Barlow']">anjanayraina326@gmail.com</span>
                </a>
                <a href="https://github.com/anjanayraina" className="flex items-center gap-3 text-white/60 hover:text-white transition-colors">
                  <Github size={18} />
                  <span className="text-xs font-['Barlow']">github.com/anjanayraina</span>
                </a>
                <div className="flex items-center gap-3 text-white/60">
                  <MapPin size={18} />
                  <span className="text-xs font-['Barlow']">Gurugram, Delhi NCR</span>
                </div>
             </div>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <div>
            <h1 className="font-display-large text-5xl md:text-7xl text-white mb-10 italic">
              Institutional Grade Engineering.
            </h1>
            <p className="text-2xl text-white/80 font-['Instrument_Serif'] italic mb-8">
              "We don't build fragile templates. We architect peace of mind."
            </p>
          </div>

          <div className="flex flex-col gap-8 text-white/50 leading-relaxed font-['Barlow'] text-lg">
            <p>
              AuraFlow Studios bridges the gap between enterprise-level technology and ambitious growth companies. Rooted in rigorous computer science and financial enterprise standards, our technical foundation was forged in the highly demanding environments of global banking and Web3 security.
            </p>
            <p>
              Founded by Anjanay Raina, a Computer Science graduate from IIIT-Delhi, our systems are built on proven, battle-tested logic. Having architected fault-tolerant microservices that decreased API response times by 3x for NatWest Group, and having executed complex automated test suites for Web3 networks like Zus Network, AuraFlow Studios brings that exact caliber of resilient engineering to scaling SaaS companies and data-rich traditional businesses.
            </p>
            <p>
              We don't just write code; we protect your revenue and engineer your scale.
            </p>
          </div>

          <div className="pt-10 border-t border-white/10 grid grid-cols-2 gap-8">
            <div>
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] block mb-2">Education</span>
              <span className="text-white/80 font-['Barlow'] text-sm">IIIT-Delhi, Computer Science</span>
            </div>
            <div>
              <span className="text-[10px] text-white/20 uppercase tracking-[0.3em] block mb-2">Expertise</span>
              <span className="text-white/80 font-['Barlow'] text-sm">Python, FastAPI, Go, AI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

export const Retainers: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      <div className="max-w-4xl text-center mb-32">
        <h1 className="font-display-large text-5xl md:text-7xl text-white mb-8 italic">
          Transparent Investment.
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
          We don't bill by the hour. We price based on the value, speed, and revenue our architecture generates for your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Tier 1 */}
        <div className="liquid-glass-strong p-12 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all duration-700">
          <div>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">Tier 01</span>
            <h3 className="text-3xl font-['Instrument_Serif'] italic text-white mb-6">Infrastructure Deployment</h3>
            <p className="text-white/40 font-['Barlow'] mb-12">Best for businesses needing immediate database centralization or custom API architecture.</p>
            
            <ul className="flex flex-col gap-4 mb-12">
              {["Complete System Architecture", "Database Structuring", "REST API Development", "Interactive Documentation"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60 font-['Barlow'] text-sm">
                  <Check size={16} className="text-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full py-4 rounded-full border border-white/10 text-white/60 font-label-caps text-[10px] tracking-widest uppercase hover:bg-white/5 hover:text-white transition-all duration-500">
            Request Custom Quote
          </button>
        </div>

        {/* Tier 2 - Featured */}
        <div className="liquid-glass-strong p-12 rounded-[2.5rem] flex flex-col justify-between border-white/20 bg-white/[0.08] shadow-[0_0_80px_rgba(255,255,255,0.05)] scale-105 relative z-10">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-white text-black text-[8px] font-black tracking-widest uppercase">
            Most Scalable
          </div>
          <div>
            <span className="text-[10px] text-white/40 uppercase tracking-[0.3em] block mb-4">Tier 02</span>
            <h3 className="text-4xl font-['Instrument_Serif'] italic text-white mb-6">AI & Growth Retainer</h3>
            <p className="text-white/50 font-['Barlow'] mb-12">Best for service businesses wanting to put lead generation and operations on absolute autopilot.</p>
            
            <ul className="flex flex-col gap-4 mb-12">
              {["AI Lead Generation Engine", "Custom CRM Maintenance", "System Uptime Management", "Continuous API Optimization", "Market Data Scrapers"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 font-['Barlow'] text-sm">
                  <Check size={16} className="text-white/40" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full py-5 rounded-full bg-white text-black font-label-caps text-[10px] tracking-widest uppercase hover:scale-105 transition-transform duration-500 font-black">
            Deploy Systems
          </button>
        </div>

        {/* Tier 3 */}
        <div className="liquid-glass-strong p-12 rounded-[2.5rem] flex flex-col justify-between hover:border-white/20 transition-all duration-700">
          <div>
            <span className="text-[10px] text-white/30 uppercase tracking-[0.3em] block mb-4">Tier 03</span>
            <h3 className="text-3xl font-['Instrument_Serif'] italic text-white mb-6">Fractional CTO</h3>
            <p className="text-white/40 font-['Barlow'] mb-12">Best for funded startups needing elite technical leadership to scale their product engineering.</p>
            
            <ul className="flex flex-col gap-4 mb-12">
              {["Executive Technical Oversight", "CI/CD Pipeline Management", "Architectural Roadmapping", "Remote Team Leadership"].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-white/60 font-['Barlow'] text-sm">
                  <Check size={16} className="text-white/20" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <button className="w-full py-4 rounded-full border border-white/10 text-white/60 font-label-caps text-[10px] tracking-widest uppercase hover:bg-white/5 hover:text-white transition-all duration-500">
            Book Strategic Audit
          </button>
        </div>
      </div>
    </div>
  );
};

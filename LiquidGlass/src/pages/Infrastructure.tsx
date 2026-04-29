import React from 'react';
import { Shield, Bot, Server, Zap, Code, Terminal, Globe, Cpu } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      <div className="max-w-4xl text-center mb-32">
        <span className="font-['Barlow'] text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-8">Technical Proficiency</span>
        <h1 className="font-display-large text-5xl md:text-8xl text-white mb-8 italic leading-none">
          Institutional-Grade <br/><span className="text-white/30">Architecture.</span>
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          We architect robust, fault-tolerant systems and intelligent pipelines designed for high-throughput scaling.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-24 max-w-7xl w-full">
        {/* Pillar 1: Zero-Commission Ecosystems */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="order-2 lg:order-1">
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-8">
               <Shield size={14} className="text-blue-400" />
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-blue-400 font-bold">Strategic Pillar 01</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-['Instrument_Serif'] italic text-white mb-8">Zero-Commission Ecosystems</h2>
             <p className="text-xl text-white/50 font-['Barlow'] leading-relaxed mb-10">
               We free hospitality, real estate, and fitness businesses from predatory third-party aggregator fees. By building proprietary, subscription-only platforms, we ensure you own your data, your code, and 100% of your revenue.
             </p>
             <ul className="flex flex-col gap-4 text-white/40 font-['Barlow'] text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                  Bespoke Booking & Subscription Logic
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                  Integrated Payment Orchestration
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500/40"></div>
                  Direct-to-Consumer Distribution
                </li>
             </ul>
           </div>
           <div className="order-1 lg:order-2 liquid-glass p-4 rounded-[3.5rem] bg-gradient-to-br from-blue-500/10 to-transparent border border-white/5">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden relative">
                 <img src="/auraflow_systems_abstract.png" alt="Dashboard" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-blue-500/20 blur-3xl"></div>
                 </div>
              </div>
           </div>
        </div>

        {/* Pillar 2: AI Lead Engines */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div className="liquid-glass p-4 rounded-[3.5rem] bg-gradient-to-br from-purple-500/10 to-transparent border border-white/5">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden relative">
                 <img src="/ai_lead_engine_dashboard.png" alt="AI Engine" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-purple-500/20 blur-3xl"></div>
                 </div>
              </div>
           </div>
           <div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-8">
               <Bot size={14} className="text-purple-400" />
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-purple-400 font-bold">Strategic Pillar 02</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-['Instrument_Serif'] italic text-white mb-8">AI Lead Engines</h2>
             <p className="text-xl text-white/50 font-['Barlow'] leading-relaxed mb-10">
               We replace manual sales outreach with autonomous AI pipelines. Our engines scrape market data and capture qualified leads around the clock, visualized through intelligent dashboards for immediate action.
             </p>
             <ul className="flex flex-col gap-4 text-white/40 font-['Barlow'] text-sm">
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></div>
                  Automated Market Data Scraping
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></div>
                  Intelligent Lead Qualification (LLMs)
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500/40"></div>
                  Autonomous Cold Outreach Systems
                </li>
             </ul>
           </div>
        </div>

        {/* Pillar 3: Enterprise API Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
           <div>
             <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-8">
               <Terminal size={14} className="text-cyan-400" />
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-cyan-400 font-bold">Strategic Pillar 03</span>
             </div>
             <h2 className="text-4xl md:text-6xl font-['Instrument_Serif'] italic text-white mb-8">Enterprise API Architecture</h2>
             <p className="text-xl text-white/50 font-['Barlow'] leading-relaxed mb-10">
               We build the high-concurrency, fault-tolerant backend systems that allow companies to process massive datasets with zero state loss. Our code is written for reliability, low latency, and infinite scale.
             </p>
             <div className="flex gap-4 items-center mb-10">
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-white/40 font-bold tracking-widest border border-white/5 uppercase">Python</div>
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-white/40 font-bold tracking-widest border border-white/5 uppercase">FastAPI</div>
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-white/40 font-bold tracking-widest border border-white/5 uppercase">Go</div>
                <div className="px-3 py-1 rounded bg-white/5 text-[10px] text-white/40 font-bold tracking-widest border border-white/5 uppercase">Redis</div>
             </div>
           </div>
           <div className="liquid-glass p-4 rounded-[3.5rem] bg-gradient-to-br from-cyan-500/10 to-transparent border border-white/5">
              <div className="aspect-video rounded-[2.5rem] overflow-hidden relative">
                 <img src="/zero_commission_ecosystem.png" alt="Datacenter" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-700" />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full bg-cyan-500/20 blur-3xl"></div>
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

import React from 'react';
import { Mail, Terminal, MapPin, ArrowRight, ShieldCheck, Cpu, Target } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      {/* Intro Header */}
      <div className="max-w-4xl text-center mb-32">
        <span className="font-['Barlow'] text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-8">About AuraFlow Studios</span>
        <h1 className="font-display-large text-5xl md:text-8xl text-white mb-8 italic leading-none">
          Uncompromising <br/><span className="text-white/30">Engineering.</span>
        </h1>
      </div>

      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-20 items-start">
        {/* Left Column: Founder & Info */}
        <div className="lg:col-span-5 sticky top-48">
          <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 relative shadow-[0_0_80px_rgba(255,255,255,0.03)]">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10"></div>
            <div className="w-full h-full bg-white/5 flex items-center justify-center">
              <span className="font-['Instrument_Serif'] text-8xl italic text-white/5">AR</span>
            </div>
            
            <div className="absolute bottom-12 left-12 z-20">
              <h2 className="text-4xl font-['Instrument_Serif'] italic text-white mb-2">Anjanay Raina</h2>
              <p className="text-white/40 font-['Barlow'] uppercase tracking-[0.3em] text-[10px] font-bold">Founder & Technical Lead</p>
            </div>
          </div>
          
          <div className="mt-12 flex flex-col gap-6">
             <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                   <Terminal size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Education</span>
                   <span className="text-sm font-['Barlow']">IIIT-Delhi, Computer Science</span>
                </div>
             </div>
             <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                   <ShieldCheck size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Background</span>
                   <span className="text-sm font-['Barlow']">NatWest Group, Web3 Security</span>
                </div>
             </div>
             <div className="flex items-center gap-4 text-white/60">
                <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/5">
                   <MapPin size={18} />
                </div>
                <div className="flex flex-col">
                   <span className="text-[10px] text-white/20 uppercase tracking-widest font-bold">Base</span>
                   <span className="text-sm font-['Barlow']">Gurugram, Delhi NCR</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Column: Copy */}
        <div className="lg:col-span-7 flex flex-col gap-20">
          {/* Who We Are */}
          <div className="flex flex-col gap-8">
            <div className="flex items-center gap-3">
               <div className="w-6 h-[1px] bg-white/20"></div>
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-white/40 font-bold">Who We Are</span>
            </div>
            <p className="text-3xl md:text-4xl text-white font-['Instrument_Serif'] italic leading-relaxed">
              AuraFlow Studios is an elite technology and growth agency specializing in institutional-grade engineering.
            </p>
            <div className="flex flex-col gap-6 text-white/50 font-['Barlow'] text-xl leading-relaxed">
              <p>
                Founded by Anjanay Raina, a Computer Science alumnus of IIIT-Delhi with a background in global banking systems and Web3 security, the agency was built on a single, uncompromising standard: institutional-grade engineering.
              </p>
              <p>
                We do not build fragile templates or generic websites. We architect robust, fault-tolerant microservices and intelligent data pipelines using Python, Go, and FastAPI. Our technical foundation was forged in highly demanding environments—from optimizing API response times for multinational financial institutions like NatWest Group to executing complex smart-contract audits for elite Web3 networks.
              </p>
              <p>
                Today, we bring that exact caliber of resilient, high-throughput engineering to ambitious SaaS startups, data-rich traditional businesses, and local service empires.
              </p>
            </div>
          </div>

          {/* What We Do */}
          <div className="flex flex-col gap-8 p-12 rounded-[3rem] bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-3">
               <div className="w-6 h-[1px] bg-white/20"></div>
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-white/40 font-bold">What We Do</span>
            </div>
            <p className="text-2xl text-white/80 font-['Barlow'] leading-relaxed">
              We operate as a dedicated Fractional CTO and technical growth partner, eliminating the technological debt that prevents scaling.
            </p>
            
            <div className="grid grid-cols-1 gap-8 mt-4">
               {[
                 { 
                   title: "Building Zero-Commission Ecosystems", 
                   desc: "Freeing businesses from predatory third-party aggregator fees by building proprietary, subscription-only platforms."
                 },
                 { 
                   title: "Deploying AI Lead Engines", 
                   desc: "Replacing manual outreach with autonomous AI pipelines that scrape market data and capture leads 24/7."
                 },
                 { 
                   title: "Architecting Enterprise APIs", 
                   desc: "Building high-concurrency, fault-tolerant backend systems with zero state loss."
                 }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 items-start">
                    <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white/20 text-xs font-bold border border-white/10">{i+1}</div>
                    <div>
                      <h4 className="text-white font-bold font-['Barlow'] mb-2 uppercase tracking-widest text-xs">{item.title}</h4>
                      <p className="text-white/40 font-['Barlow'] leading-relaxed">{item.desc}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>

          {/* Goal & Mission */}
          <div className="flex flex-col gap-8 pb-20">
            <div className="flex items-center gap-3">
               <div className="w-6 h-[1px] bg-white/20"></div>
               <span className="font-['Barlow'] text-[10px] uppercase tracking-widest text-white/40 font-bold">Goal & Mission</span>
            </div>
            <p className="text-3xl text-white/80 font-['Instrument_Serif'] italic leading-relaxed">
              "To bridge the gap between enterprise-level technology and ambitious growth companies."
            </p>
            <div className="flex flex-col gap-6 text-white/40 font-['Barlow'] text-lg leading-relaxed">
              <p>
                We believe that high-ticket local businesses and scaling startups deserve the same fault-tolerant infrastructure and AI capabilities as global tech giants. Our mission is to transition our clients away from fragmented, manual software and into unified, intelligent ecosystems where they own their data, their code, and 100% of their revenue.
              </p>
              <p className="text-white font-bold italic border-l-2 border-white/10 pl-6 py-2 mt-4 text-2xl font-['Instrument_Serif']">
                At AuraFlow Studios, we don't just write code. We protect your revenue, eliminate your bottlenecks, and engineer your scale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

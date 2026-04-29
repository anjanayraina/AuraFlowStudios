import React from 'react';
import { ChevronRight, Database, Bot, Zap, Shield, Cpu, ArrowRight, Server, BarChart3 } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] w-full flex flex-col items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        <div className="video-container">
          <video autoPlay loop muted playsInline className="scale-110">
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="video-overlay bg-gradient-to-b from-background/60 via-transparent to-background"></div>
        
        {/* Floating Glass Orbs */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[20%] left-[10%] w-64 h-64 bg-white/[0.03] blur-[100px] rounded-full animate-float"></div>
          <div className="absolute bottom-[20%] right-[10%] w-96 h-96 bg-white/[0.02] blur-[120px] rounded-full animate-float" style={{ animationDelay: '-5s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="font-['Barlow'] text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Institutional-Grade Engineering</span>
          </div>
          
          <h1 className="font-display-large text-5xl md:text-8xl text-white mb-8 italic tracking-tighter leading-[0.95] max-w-5xl">
            We Architect Your <br/><span className="text-white/40">Growth Engines.</span>
          </h1>
          
          <p className="font-body-lg text-lg md:text-2xl text-white/60 max-w-3xl mb-12 leading-relaxed">
            Eliminating technical debt and operational bottlenecks for ambitious SaaS startups and high-ticket local empires.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-24">
            <button className="liquid-glass-strong px-10 py-5 rounded-full font-label-caps text-sm text-white uppercase tracking-[0.2em] hover:scale-105 transition-all duration-500 shadow-[0_0_50px_rgba(255,255,255,0.1)]">
              Audit My Infrastructure
            </button>
            <button className="px-10 py-5 rounded-full font-label-caps text-sm text-white/40 hover:text-white uppercase tracking-[0.2em] border border-white/5 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
              Explore Our Pillars
            </button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-30 hover:opacity-60 transition-opacity duration-1000">
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-widest text-white font-['Barlow']">STAYBOOK</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-widest text-white font-['Barlow']">MON FINANCE</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-widest text-white font-['Barlow']">ZUS NETWORK</span>
             </div>
             <div className="flex flex-col items-center">
                <span className="text-2xl font-black tracking-widest text-white font-['Barlow']">LEADFLOW</span>
             </div>
          </div>
        </div>
      </section>

      {/* Mission Core Section */}
      <section className="w-full max-w-7xl px-6 py-40 border-t border-white/5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="font-headline-h2 text-5xl md:text-7xl text-white mb-10 italic leading-tight">
              Bridging the gap between Enterprise and Ambition.
            </h2>
            <div className="flex flex-col gap-6 text-white/50 text-xl font-['Barlow'] leading-relaxed">
              <p>
                AuraFlow Studios is an elite technical growth partner. We don’t build generic websites. We engineer the fault-tolerant infrastructure that global giants rely on—tailored for the companies ready to disrupt.
              </p>
              <p>
                From Python microservices to AI lead pipelines, we transition your business from fragmented software to unified, intelligent ecosystems.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl font-['Instrument_Serif'] text-white mb-2 italic">100%</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">Revenue Ownership</div>
              </div>
              <div>
                <div className="text-4xl font-['Instrument_Serif'] text-white mb-2 italic">0%</div>
                <div className="text-[10px] text-white/30 uppercase tracking-widest">Technological Debt</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="liquid-glass-strong aspect-square rounded-[4rem] overflow-hidden border border-white/10 group">
              <img 
                src="/auraflow_systems_abstract.png" 
                alt="Infrastructure" 
                className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              <div className="absolute bottom-12 left-12">
                 <div className="w-16 h-1 rounded-full bg-white/20 mb-4"></div>
                 <span className="font-['Barlow'] text-xs uppercase tracking-[0.4em] text-white/80 font-bold">Institutional Standard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Three Pillars */}
      <section className="w-full bg-white/[0.02] py-40 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
            <span className="font-['Barlow'] text-[10px] uppercase tracking-[0.5em] text-white/30 block mb-6">Core Methodology</span>
            <h2 className="font-headline-h2 text-4xl md:text-6xl text-white italic">Our Core Pillars</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "Zero-Commission Ecosystems",
                description: "We build proprietary, subscription-only platforms for hospitality and fitness empires. Own your data, your code, and 100% of your profits.",
                icon: <Shield size={32} />,
                accent: "border-blue-500/20"
              },
              {
                title: "AI Lead Engines",
                description: "Autonomous sales pipelines that scrape market data and capture qualified, high-intent leads 24/7. Your outreach, automated.",
                icon: <Bot size={32} />,
                accent: "border-purple-500/20"
              },
              {
                title: "Enterprise API Architecture",
                description: "High-concurrency, fault-tolerant backend systems built with Python, Go, and FastAPI. Process massive datasets with zero state loss.",
                icon: <Server size={32} />,
                accent: "border-cyan-500/20"
              }
            ].map((pillar, i) => (
              <div key={i} className={`liquid-glass p-12 rounded-[3rem] flex flex-col gap-10 hover:bg-white/[0.05] transition-all duration-700 border-b-4 ${pillar.accent}`}>
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white/40">
                  {pillar.icon}
                </div>
                <div>
                  <h3 className="text-3xl font-['Instrument_Serif'] italic text-white mb-6">{pillar.title}</h3>
                  <p className="text-white/50 leading-relaxed font-['Barlow'] text-lg">
                    {pillar.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="w-full py-40 flex flex-col items-center text-center px-6">
        <h2 className="font-headline-h2 text-5xl md:text-8xl text-white mb-12 italic leading-none">
          Ready to engineer <br/>your scale?
        </h2>
        <p className="text-white/40 text-xl md:text-2xl font-['Barlow'] max-w-2xl mb-16">
          We are currently accepting a limited number of high-impact partners for Q3 2026.
        </p>
        <button className="liquid-glass-strong px-12 py-6 rounded-full font-label-caps text-md text-white uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-700">
          Begin Strategic Audit
        </button>
      </section>
    </div>
  );
};

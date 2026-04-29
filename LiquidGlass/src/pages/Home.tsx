import React from 'react';
import { ChevronRight, Database, Bot, Zap, Globe, ArrowRight } from 'lucide-react';

export const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full flex flex-col items-center justify-center gradient-mask-bottom pt-32 pb-20 px-6">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="video-overlay"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center flex flex-col items-center">
          <h1 className="font-display-large text-5xl md:text-display-large text-primary mb-8 italic max-w-5xl tracking-tight leading-tight">
            Automate Your Operations.<br className="hidden md:block" /> Scale With AI Infrastructure.
          </h1>
          <p className="font-body-lg text-lg md:text-body-lg text-secondary max-w-3xl mb-12 opacity-80">
            We don't just build websites. We architect enterprise-grade backend systems, AI-powered lead generation engines, and zero-commission ecosystems for businesses ready to dominate their market.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 mb-24">
            <button className="liquid-glass-strong px-10 py-4 rounded-full font-label-caps text-sm text-white uppercase tracking-widest hover:scale-105 transition-transform duration-500">
              Audit My Business
            </button>
            <button className="px-10 py-4 rounded-full font-label-caps text-sm text-white/60 hover:text-white uppercase tracking-widest border border-white/10 hover:bg-white/5 transition-all duration-500">
              View Our Systems
            </button>
          </div>

          <div className="w-full max-w-4xl border-t border-white/5 pt-12">
            <span className="font-label-caps text-[10px] text-white/30 mb-8 uppercase tracking-[0.3em] block">Powering infrastructure for visionary teams</span>
            <div className="flex flex-wrap gap-12 items-center justify-center opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-700">
              <span className="text-xl font-bold tracking-widest text-white font-['Barlow']">STAYBOOK</span>
              <span className="text-xl font-bold tracking-widest text-white font-['Barlow']">MON FINANCE</span>
              <span className="text-xl font-bold tracking-widest text-white font-['Barlow']">ZUS NETWORK</span>
              <span className="text-xl font-bold tracking-widest text-white font-['Barlow']">LEADFLOW</span>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="w-full max-w-7xl px-6 py-32 flex flex-col items-center">
        <h2 className="font-headline-h2 text-4xl md:text-6xl text-white mb-20 text-center italic">
          You are outgrowing your infrastructure.
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {[
            {
              title: "Paying Aggregator Taxes?",
              content: "Stop leaking 20% of your revenue to third-party platforms. We build your own 100% commission-free booking and subscription ecosystems. You own the code and the profits.",
              icon: <Zap size={32} className="text-white/40" />
            },
            {
              title: "Drowning in Manual Ops?",
              content: "Manual data entry is killing your margins. We deploy intelligent, custom CRMs that automate your supply chain, scheduling, and client onboarding.",
              icon: <Database size={32} className="text-white/40" />
            },
            {
              title: "Missing the AI Wave?",
              content: "Your competitors are already automating their sales pipelines. We integrate custom LLMs and AI agents that capture leads and analyze market data while you sleep.",
              icon: <Bot size={32} className="text-white/40" />
            }
          ].map((card, i) => (
            <div key={i} className="liquid-glass p-10 rounded-3xl flex flex-col gap-6 hover:border-white/20 transition-all duration-500 group">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                {card.icon}
              </div>
              <h3 className="text-2xl font-['Instrument_Serif'] italic text-white">{card.title}</h3>
              <p className="text-white/50 leading-relaxed font-['Barlow']">{card.content}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Authority Section */}
      <section className="w-full bg-white/5 border-y border-white/5 py-32 px-6 flex flex-col items-center text-center">
        <div className="max-w-4xl flex flex-col items-center">
          <h2 className="font-headline-h2 text-4xl md:text-5xl text-white mb-8 italic">
            Built on Enterprise Standards.
          </h2>
          <p className="font-body-lg text-lg md:text-xl text-white/60 leading-relaxed mb-12">
            We do not rely on fragile templates. AuraFlow Studios engineers high-throughput microservices using Python, FastAPI, and Go—the exact architecture relied upon by global financial institutions to ensure zero state loss and lightning-fast API latency.
          </p>
          <div className="flex gap-4 items-center text-white/40 font-['Barlow'] text-xs tracking-widest uppercase">
            <span>Python</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>FastAPI</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Go</span>
            <span className="w-1 h-1 rounded-full bg-white/20"></span>
            <span>Rust</span>
          </div>
        </div>
      </section>
    </div>
  );
};

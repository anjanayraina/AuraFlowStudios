import React from 'react';
import { Network, Database, Cpu, Bot, Terminal, ShieldCheck } from 'lucide-react';

export const Infrastructure: React.FC = () => {
  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      <div className="max-w-4xl text-center mb-32">
        <h1 className="font-display-large text-5xl md:text-7xl text-white mb-8 italic">
          Systems Engineered for Revenue Growth.
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
          From intelligent data pipelines to custom AI integrations, we build the engines that run your business.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        {[
          {
            title: "AI Lead Generation Engines",
            subtitle: "Autonomous Client Acquisition",
            content: "Stop cold calling. We build custom, automated AI pipelines that scrape market data, execute automated AI-driven website audits, and deliver highly qualified, warm leads directly to your CRM.",
            icon: <Bot size={28} />,
            tech: ["LLMs", "Data Scrapers", "Automated Audits"]
          },
          {
            title: "Enterprise API & Microservices",
            subtitle: "Fault-Tolerant Backend Architecture",
            content: "We architect robust, high-throughput microservices capable of processing massive concurrent datasets. Built with Python, Go, and FastAPI, our systems ensure zero state loss during service interruptions.",
            icon: <Terminal size={28} />,
            tech: ["Python", "FastAPI", "Go", "Redis"]
          },
          {
            title: "Intelligent CRM Ecosystems",
            subtitle: "Tailor-made Operational Hubs",
            content: "We centralize fragmented tools into bespoke CRMs for hospitality, real estate, and fitness businesses to eliminate bottlenecks and optimize data flow. You own the code, the data, and 100% of the profits.",
            icon: <Network size={28} />,
            tech: ["Custom CRM", "ERP Sync", "Internal Dashboards"]
          },
          {
            title: "SaaS AI Integration",
            subtitle: "Applied Large Language Models",
            content: "Embed the power of generative AI directly into your existing digital products. We deploy conversational AI for automated customer onboarding, smart scheduling assistants, and internal data analytics dashboards.",
            icon: <Cpu size={28} />,
            tech: ["OpenAI", "Anthropic", "Vector Databases"]
          }
        ].map((service, i) => (
          <div key={i} className="liquid-glass-strong p-12 rounded-[2.5rem] flex flex-col gap-8 group hover:bg-white/[0.07] transition-all duration-700">
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-700">
                {service.icon}
              </div>
              <div className="flex gap-2">
                {service.tech.map((t, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-white/5 text-[8px] text-white/30 uppercase tracking-widest border border-white/5">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <span className="text-white/30 font-['Barlow'] text-[10px] tracking-[0.3em] uppercase block mb-4">
                {service.subtitle}
              </span>
              <h3 className="text-3xl font-['Instrument_Serif'] italic text-white mb-6">
                {service.title}
              </h3>
              <p className="text-white/50 leading-relaxed font-['Barlow'] text-lg">
                {service.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

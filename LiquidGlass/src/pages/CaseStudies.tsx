import React from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

export const CaseStudies: React.FC = () => {
  const projects = [
    {
      title: "Staybook Hotel Network",
      category: "Bypassing Aggregators",
      description: "Engineered a centralized, high-conversion API backend and bespoke booking engine. Eliminated dependency on third-party OTAs, integrated seamless payment gateways, and unified property data into a single, scalable ecosystem.",
      link: "https://staybook.in/",
      tags: ["Python", "FastAPI", "API Integration"]
    },
    {
      title: "Mon Finance Web Dashboard",
      category: "Real-Time Fintech & AI",
      description: "Architected an ultra-premium trading dashboard powered by fault-tolerant CeFi and DeFi data pipelines. Integrated an LLM-powered chat assistant for seamless, natural-language portfolio management.",
      link: "https://mon-finance.com",
      tags: ["React", "AI", "Data Pipelines"]
    },
    {
      title: "JobSleuth Aggregation Portal",
      category: "High-Throughput Data Ingestion",
      description: "Developed a highly scalable Python-based data ingestion pipeline processing over 5,000 external postings daily. Utilized advanced state management to deliver thousands of concurrent listings instantaneously.",
      link: "https://job-sleuth.onrender.com/",
      tags: ["Python", "Scraping", "Scaling"]
    },
    {
      title: "LeadFlow AI Platform",
      category: "Automated Lead Pipelines",
      description: "Architected an end-to-end B2B lead generation portal. Engineered an automated pipeline that runs AI-driven competitive audits and battle plans, visualized through a robust interactive dashboard.",
      link: "https://lead-gen-ai-sooty.vercel.app/",
      tags: ["AI", "B2B SaaS", "Automation"]
    },
    {
      title: "Middle Earth AI",
      category: "Distributed Strategy Game",
      description: "Engineered high-performance, on-chain state management programs in Rust to support an immersive strategy interface. Optimized data structures to handle hundreds of concurrent players seamlessly, reducing transaction costs by 30%.",
      link: "https://www.middleearth.world/",
      tags: ["Rust", "Distributed Systems", "Gaming"]
    }
  ];

  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6">
      <div className="max-w-4xl text-center mb-32">
        <h1 className="font-display-large text-5xl md:text-7xl text-white mb-8 italic">
          Proof of Execution.
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/50 max-w-3xl mx-auto">
          Explore the enterprise systems, data aggregators, and zero-commission platforms we’ve architected for our partners.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-7xl w-full">
        {projects.map((project, i) => (
          <div key={i} className="group relative flex flex-col gap-8 p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent">
            <div className="liquid-glass-strong p-10 md:p-14 rounded-[2.4rem] h-full flex flex-col justify-between hover:bg-white/[0.05] transition-all duration-700">
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="px-4 py-2 rounded-full bg-white/5 text-[10px] text-white/50 uppercase tracking-widest border border-white/5">
                    {project.category}
                  </span>
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-500"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-['Instrument_Serif'] italic text-white mb-8 group-hover:text-primary transition-colors duration-500">
                  {project.title}
                </h3>
                
                <p className="text-white/40 leading-relaxed font-['Barlow'] text-lg mb-12 max-w-lg">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {project.tags.map((tag, index) => (
                  <span key={index} className="text-[10px] text-white/20 font-bold uppercase tracking-widest">
                    {tag} {index !== project.tags.length - 1 && '•'}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

import React from 'react';
import { Briefcase, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';

export const Careers: React.FC = () => {
  const jobs = [
    {
      title: "Growth & Sales Lead",
      department: "Growth",
      location: "Remote / Delhi NCR",
      type: "Full-time",
      description: "Scale our client acquisition pipelines. You will be responsible for managing our AI Lead Engines and closing high-ticket institutional partners.",
      requirements: ["2+ years in B2B SaaS sales", "Deep understanding of AI automation", "Exceptional communication skills"]
    },
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Architect ultra-premium, high-performance dashboards. You'll be building the glassmorphic interfaces that power our custom CRM and AI ecosystems.",
      requirements: ["Expertise in React, TypeScript & Vite", "Obsession with UI/UX and micro-animations", "Experience with data-rich SaaS interfaces"]
    }
  ];

  return (
    <div className="flex flex-col items-center pt-48 pb-32 px-6 relative overflow-hidden">
      {/* Background Subtle Animation for Careers */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-30">
        <div className="absolute top-[10%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 blur-[120px] rounded-full animate-pulse"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-purple-500/10 blur-[100px] rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-4xl text-center mb-32 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <Sparkles size={14} className="text-yellow-400" />
          <span className="font-['Barlow'] text-[10px] uppercase tracking-[0.3em] text-white/60 font-bold">Join the Elite</span>
        </div>
        <h1 className="font-display-large text-5xl md:text-8xl text-white mb-8 italic leading-none">
          Engineer the <br/><span className="text-white/30">Future Scale.</span>
        </h1>
        <p className="font-body-lg text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
          We are looking for individuals who despise technical debt and live for institutional-grade excellence.
        </p>
      </div>

      <div className="max-w-5xl w-full flex flex-col gap-8 relative z-10">
        {jobs.map((job, i) => (
          <div key={i} className="liquid-glass-strong p-10 md:p-14 rounded-[3rem] group hover:bg-white/[0.07] transition-all duration-700 border border-white/5 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
            <div className="flex-grow">
              <div className="flex gap-4 mb-6">
                <span className="px-3 py-1 rounded-full bg-white/5 text-[8px] text-white/40 uppercase tracking-widest border border-white/5 font-bold">{job.department}</span>
                <span className="px-3 py-1 rounded-full bg-white/5 text-[8px] text-white/40 uppercase tracking-widest border border-white/5 font-bold">{job.type}</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-['Instrument_Serif'] italic text-white mb-6 group-hover:text-primary transition-colors">
                {job.title}
              </h3>
              <p className="text-white/40 font-['Barlow'] text-lg mb-8 max-w-xl leading-relaxed">
                {job.description}
              </p>
              <div className="flex flex-wrap gap-6 text-white/30 font-['Barlow'] text-xs uppercase tracking-widest">
                <div className="flex items-center gap-2">
                  <MapPin size={14} />
                  {job.location}
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={14} />
                  Immediate Start
                </div>
              </div>
            </div>
            
            <button className="flex-shrink-0 w-full md:w-auto px-8 py-4 rounded-full bg-white text-black font-label-caps text-xs tracking-widest uppercase hover:scale-105 transition-transform duration-500 font-black flex items-center justify-center gap-3">
              Apply Now
              <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>

      <div className="mt-32 p-12 rounded-[3rem] border border-white/5 bg-white/[0.02] text-center max-w-3xl relative z-10 backdrop-blur-sm">
         <h4 className="text-white font-['Instrument_Serif'] italic text-2xl mb-4">Don't see a fit?</h4>
         <p className="text-white/40 font-['Barlow'] mb-8 italic">We are always scouting for high-throughput engineers and growth strategists.</p>
         <a href="mailto:careers@auraflow.studios" className="text-white font-bold font-['Barlow'] text-xs uppercase tracking-widest hover:text-primary transition-colors">
            Drop your resume →
         </a>
      </div>
    </div>
  );
};

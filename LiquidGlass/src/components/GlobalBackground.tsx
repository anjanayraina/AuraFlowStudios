import React from 'react';

export const GlobalBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-50 overflow-hidden">
      {/* Base Dark Gradient */}
      <div className="absolute inset-0 bg-[#0a0a0a]"></div>
      
      {/* Subtle Moving Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-blue-500/[0.03] blur-[150px] rounded-full animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-purple-500/[0.03] blur-[150px] rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-cyan-500/[0.02] blur-[100px] rounded-full animate-float"></div>
      
      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay pointer-events-none" 
           style={{ backgroundImage: 'url("https://grainy-gradients.vercel.app/noise.svg")' }}></div>
    </div>
  );
};

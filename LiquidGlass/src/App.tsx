import React from 'react';

const App: React.FC = () => {
  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-background">
      {/* TopAppBar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-6xl rounded-full border border-white/10 shadow-[0_0_40px_rgba(255,255,255,0.05)] flex justify-between items-center px-8 py-3 z-[100] bg-white/5 backdrop-blur-2xl">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-white text-2xl">blur_on</span>
          <span className="text-xl font-black tracking-tighter text-white font-['Barlow'] tracking-widest uppercase">NEURAL ARC</span>
        </div>
        <button className="liquid-glass hover:bg-white/10 hover:border-white/20 transition-all duration-700 ease-in-out active:scale-95 px-6 py-2 rounded-full font-label-caps text-white">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-[1000px] w-full flex flex-col items-center justify-center gradient-mask-bottom pt-safe-area">
        <div className="video-container">
          <video autoPlay loop muted playsInline>
            <source src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260307_083826_e938b29f-a43a-41ec-a153-3d4730578ab8.mp4" type="video/mp4"/>
          </video>
        </div>
        <div className="video-overlay"></div>
        <div className="relative z-10 max-w-container-max mx-auto px-safe-area text-center flex flex-col items-center">
          <h1 className="font-display-large text-display-large text-primary mb-element-gap italic max-w-4xl tracking-tight">
            The Website Your Brand Deserves
          </h1>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl mb-12">
            We design and engineer digital experiences that transcend the ordinary. Liquid interfaces, cinematic motion, and AI-driven precision.
          </p>
          <div className="mt-24 border-t border-white/5 pt-8 w-full max-w-3xl flex flex-col items-center">
            <span className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">Trusted by visionary teams</span>
            <div className="flex gap-12 items-center justify-center opacity-50 grayscale">
              <span className="font-body-md text-primary font-bold tracking-wider">STRIPE</span>
              <span className="font-body-md text-primary font-bold tracking-wider">VERCEL</span>
              <span className="font-body-md text-primary font-bold tracking-wider">LINEAR</span>
              <span className="font-body-md text-primary font-bold tracking-wider">NOTION</span>
              <span className="font-body-md text-primary font-bold tracking-wider">FIGMA</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-12 py-32 flex flex-col items-center gap-12 bg-black relative border-t border-white/10 z-10">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <a className="font-['Barlow'] font-semibold text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500" href="#">The Method</a>
          <a className="font-['Barlow'] font-semibold text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500" href="#">Exhibit</a>
          <a className="font-['Barlow'] font-semibold text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500" href="#">Intelligence</a>
          <a className="font-['Barlow'] font-semibold text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white transition-colors duration-500" href="#">Book Strategy</a>
        </div>
        <div className="text-white font-['Barlow'] font-semibold text-xs tracking-[0.2em] uppercase">
          © 2024 NEURAL ARC. CURATING THE FUTURE.
        </div>
      </footer>
    </div>
  );
};

export default App;

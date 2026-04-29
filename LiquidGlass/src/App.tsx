import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { GlobalBackground } from './components/GlobalBackground';
import { Home } from './pages/Home';
import { Infrastructure } from './pages/Infrastructure';
import { CaseStudies } from './pages/CaseStudies';
import { Retainers } from './pages/Retainers';
import { About } from './pages/About';
import { Careers } from './pages/Careers';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <GlobalBackground />
      <div className="min-h-screen bg-transparent text-white font-['Barlow'] antialiased overflow-x-hidden selection:bg-white selection:text-black flex flex-col">
        {/* Global Navbar */}
        <Navbar />

        {/* Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/infrastructure" element={<Infrastructure />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/retainers" element={<Retainers />} />
            <Route path="/about" element={<About />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;

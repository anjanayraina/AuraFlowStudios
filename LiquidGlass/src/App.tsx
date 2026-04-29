import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Navbar, Footer } from './components/Layout';
import { Home } from './pages/Home';
import { Infrastructure } from './pages/Infrastructure';
import { CaseStudies } from './pages/CaseStudies';
import { Retainers } from './pages/Retainers';
import { About } from './pages/About';
import './App.css';

// Scroll to top on route change
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
      <div className="min-h-screen bg-background text-on-background font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-background flex flex-col">
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
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;

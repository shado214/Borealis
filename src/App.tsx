import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useTheme } from './lib/theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Mission from './pages/Mission';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function App() {
  const { theme } = useTheme();

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Router>
      <div className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200`}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
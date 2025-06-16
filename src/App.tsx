import React, { useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Services } from './components/Services';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import Certifications from './components/Certifications';
import { Achievements } from './components/Achievements';
function App() {
  useEffect(() => {
    // Initialize dark mode
    const root = window.document.documentElement;
    const theme = localStorage.getItem('theme') || 'dark';
    root.classList.add(theme);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors duration-300">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Achievements />
        <Projects />
        <Certifications />
        <Experience />
        
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
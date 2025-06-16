import React, { useState, useEffect } from 'react';
import { ChevronDown, Github, Linkedin, Instagram, Mail, Download, MapPin, Code, Sparkles, Star, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { Eye } from 'lucide-react';
export const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const titles = [
    "Software Engineer",
    "Cloud Enthusiast", 
    "Problem Solver",
    "Full-Stack Developer"
  ];

  useEffect(() => {
    const currentTitle = titles[currentTitleIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentIndex < currentTitle.length) {
          setDisplayedText(prev => prev + currentTitle[currentIndex]);
          setCurrentIndex(prev => prev + 1);
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText.length > 0) {
          setDisplayedText(prev => prev.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex(0);
          setCurrentTitleIndex(prev => (prev + 1) % titles.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, displayedText, currentTitleIndex, titles]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-emerald-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-600/30 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/20 to-blue-600/20 rounded-full blur-3xl animate-float-reverse opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-400/25 to-pink-600/25 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/30 to-orange-600/30 rounded-full blur-3xl animate-float-reverse opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col items-center lg:items-start space-y-8 order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 w-full max-w-2xl">
              {[
                { label: "Projects", value: "6+", icon: Code, color: "from-blue-500 to-blue-600" },
                { label: "Technologies", value: "8+", icon: Zap, color: "from-purple-500 to-purple-600" },
                { label: "Experience", value: "1+ Years", icon: Star, color: "from-emerald-500 to-emerald-600" },
                { label: "CGPA", value: "9.37", icon: Sparkles, color: "from-yellow-500 to-orange-500" }
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-6 shadow-lg border border-white/20 dark:border-slate-700/30 hover:scale-105 transition-all duration-500 hover-lift"
                >
                  <div className={`inline-flex p-2.5 bg-gradient-to-r ${stat.color} rounded-lg mb-3`}>
                    <stat.icon size={18} className="text-white" />
                  </div>
                  <div className="text-xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-2xl">
              <button 
                onClick={scrollToContact}
                className="group relative px-6 py-3 flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <Mail size={18} />
                  <span>Let's Connect</span>
                </span>
              </button>

              <a 
                href="https://tejavardhanresume.tiiny.site/?mode=suggestions"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative px-6 py-3 flex-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105"
              >
                <span className="relative flex items-center justify-center space-x-2">
                  <Eye size={18} />
                  <span>View Resume</span>
                </span>
              </a>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 glass-card rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700 dark:text-white"
              >
                <Github size={20} />
              </a>
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 glass-card rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700 dark:text-white"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={portfolioData.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="group p-3 glass-card rounded-xl shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-500 text-slate-700 dark:text-white"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center text-center animate-fade-in-up order-1 lg:order-2">
            <div className="mb-8 relative group transform hover:scale-105 transition-all duration-500">
              <div className="relative inline-block magnetic">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-purple-600 via-emerald-500 to-yellow-500 p-1 animate-spin-slow">
                  <div className="w-full h-full rounded-full bg-white dark:bg-slate-900"></div>
                </div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-r from-blue-500/50 to-purple-500/50 blur-md animate-pulse-glow"></div>
                <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl ring-4 ring-white/50 dark:ring-slate-800/50 animate-float glass-card">
                  <img 
                    src={portfolioData.personal.profileImage}
                    alt={portfolioData.personal.name}
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/30 via-transparent to-purple-600/20"></div>
                  <div className="absolute inset-0 border-4 border-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-morphing opacity-60"></div>
                  
                  {/* Status Indicator */}
                  <div className="absolute bottom-6 right-6 z-50">
                    <div className="relative">
                      <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full blur opacity-75"></div>
                      <div className="relative w-6 h-6 bg-emerald-500 rounded-full ring-4 ring-white dark:ring-slate-900">
                        <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-75"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -top-1 -right-10 p-4 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl text-white shadow-xl animate-bounce hover-glow">
                  <Code size={24} />
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-2xl text-white shadow-xl animate-bounce hover-glow" style={{ animationDelay: '0.5s' }}>
                  <Sparkles size={24} />
                </div>
                <div className="absolute top-10 -left-10 p-3 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl text-white shadow-lg animate-bounce hover-glow" style={{ animationDelay: '1s' }}>
                  <Star size={20} />
                </div>
                <div className="absolute bottom-10 -right-10 p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl text-white shadow-lg animate-bounce hover-glow" style={{ animationDelay: '1.5s' }}>
                  <Zap size={20} />
                </div>
              </div>
            </div>

            <h1 className="font-bold mb-4 tracking-tight">
  <span className="text-5xl sm:text-6xl lg:text-6xl gradient-text text-shadow-lg animate-gradient-shift block">MOGILI</span>
  <span className="text-3xl sm:text-4xl lg:text-5xl gradient-text-alt text-shadow-lg block mt-2">TEJA VARDHAN</span>
</h1>

            <div className="inline-flex items-center space-x-2 px-4 py-2 glass-card rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 mb-4 hover-lift">
              <div className="p-1.5 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg">
                <MapPin size={14} className="text-white" />
              </div>
              <span className="text-sm text-slate-700 dark:text-slate-300 font-medium">Hyderabad, India</span>
              <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
            </div>

            <div className="glass-card px-6 py-3 rounded-xl shadow-lg w-full max-w-sm">
              <div className="text-lg sm:text-xl lg:text-2xl text-slate-700 dark:text-slate-300 font-medium">
                <span className="gradient-text">{displayedText}</span>
                <span className="animate-pulse text-blue-500 text-glow">|</span>
              </div>
            </div>
          </div>
        </div>

        <button onClick={scrollToAbout} className="absolute bottom-8 left-1/2 transform -translate-x-1/2 group">
          <div className="flex flex-col items-center space-y-3 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
            <span className="text-sm font-semibold uppercase tracking-wider">Scroll to explore</span>
            <div className="p-4 glass-card rounded-2xl border-2 border-current group-hover:scale-110 transition-all duration-300 hover-glow">
              <ChevronDown size={28} className="animate-bounce" />
            </div>
          </div>
        </button>
      </div>
    </section>
  );
};
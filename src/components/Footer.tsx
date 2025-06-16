import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-white via-slate-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 text-slate-900 dark:text-white py-20 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute -top-1/2 -left-1/2 w-96 h-96 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 dark:from-blue-500/30 dark:via-purple-500/30 dark:to-pink-500/30 rounded-full filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-96 h-96 bg-gradient-to-br from-emerald-500/20 via-blue-500/20 to-purple-500/20 dark:from-emerald-500/30 dark:via-blue-500/30 dark:to-purple-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-purple-500/20 via-pink-500/20 to-orange-500/20 dark:from-purple-500/30 dark:via-pink-500/30 dark:to-orange-500/30 rounded-full filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-blue-600/5 to-purple-600/5 dark:from-blue-600/10 dark:to-purple-600/10 rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-600/5 to-blue-600/5 dark:from-emerald-600/10 dark:to-blue-600/10 rounded-full blur-3xl animate-float-reverse opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-gradient-to-r from-purple-600/5 to-pink-600/5 dark:from-purple-600/10 dark:to-pink-600/10 rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-gradient-to-r from-yellow-400/20 to-orange-600/20 dark:from-yellow-400/30 dark:to-orange-600/30 rounded-full blur-3xl animate-float-reverse opacity-60" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.2) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        <div className="particle particle-1 bg-blue-500/20 dark:bg-blue-500/30" style={{ top: '20%', left: '15%' }}></div>
        <div className="particle particle-2 bg-purple-500/20 dark:bg-purple-500/30" style={{ top: '70%', left: '80%' }}></div>
        <div className="particle particle-3 bg-emerald-500/20 dark:bg-emerald-500/30" style={{ top: '40%', left: '70%' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl shadow-lg animate-gradient-shift group hover:scale-110 transition-transform duration-300">
                <Sparkles size={28} className="text-white animate-pulse group-hover:animate-spin-slow" />
              </div>
              <div>
                <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient-shift hover:scale-105 transition-transform duration-300">
                  {portfolioData.personal.name}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-semibold hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300">
                  Software Engineer | Cloud Enthusiast
                </p>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
              Passionate about creating innovative solutions and building the future with cutting-edge technology.
            </p>
            <div className="flex items-center space-x-2 text-slate-600 dark:text-slate-400">
              <MapPin size={18} className="text-emerald-500 animate-bounce" style={{ animationDuration: '2s' }} />
              <span className="hover:text-emerald-500 transition-colors duration-300">Hyderabad, India</span>
            </div>
          </div>

          <div className="lg:col-span-1">
  <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient-shift mb-6">
    Quick Links
  </h4>
  <div className="grid grid-cols-2 gap-4">
    {[
      { name: 'Home', href: '#home' },
      { name: 'About', href: '#about' },
      { name: 'Skills', href: '#skills' },
      { name: 'Services', href: '#services' },
      { name: 'Achievements', href: '#achievements' },
      { name: 'Projects', href: '#projects' },
      { name: 'Certifications', href: '#certifications' },
      { name: 'Experience', href: '#experience' },
      { name: 'Contact', href: '#contact' },
    ].map((link) => (
      <a
        key={link.name}
        href={link.href}
        className="group relative text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
        onClick={(e) => {
          e.preventDefault();
          document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="relative z-10 font-medium">{link.name}</span>
        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        <span className="absolute -inset-2 -z-10 rounded-lg bg-gradient-to-r from-blue-500/10 to-emerald-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </a>
    ))}
  </div>
</div>

          <div className="lg:col-span-1">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 animate-gradient-shift mb-6">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={`mailto:${portfolioData.personal.email}`}
                className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300 group"
              >
                <div className="p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-lg transition-all duration-300 animate-gradient-shift group-hover:scale-110">
                  <Mail size={18} className="text-white" />
                </div>
                <span>{portfolioData.personal.email}</span>
              </a>
              <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400">
                <div className="p-2 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-lg animate-gradient-shift hover:scale-110 transition-transform duration-300">
                  <MapPin size={18} className="text-white" />
                </div>
                <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300">
                  Available for WFO or remote work anywhere
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center mb-12">
          <div className="glass-card p-6 rounded-2xl border border-slate-200/20 dark:border-white/10 hover:border-slate-200/40 dark:hover:border-white/20 transition-all duration-300 transform hover:scale-105">
            <div className="flex items-center space-x-6">
              {[
                { icon: Github, url: portfolioData.social.github, label: 'GitHub' },
                { icon: Linkedin, url: portfolioData.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, url: `mailto:${portfolioData.personal.email}`, label: 'Email' },
              ].map((social, index) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.label !== 'Email' ? '_blank' : undefined}
                  rel={social.label !== 'Email' ? 'noopener noreferrer' : undefined}
                  className="group p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl transition-all duration-300 hover:scale-110 hover:shadow-xl animate-gradient-shift"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <social.icon size={24} className="text-white transition-transform duration-200 group-hover:scale-110" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200/20 dark:border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-slate-600 dark:text-slate-400 flex items-center space-x-2 mb-4 md:mb-0">
              <span>© {new Date().getFullYear()} {portfolioData.personal.name}. All Rights Reserved.Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300">
                and React.js
              </span>
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <span className="hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:to-emerald-500 transition-all duration-300">
                Designed & Developed with passion
              </span>
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>

        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 rounded-2xl transition-all duration-300 hover:scale-110 transform shadow-xl hover:shadow-2xl z-50 group animate-gradient-shift"
          aria-label="Scroll to top"
        >
          <ArrowUp size={24} className="text-white group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>
    </footer>
  );
};
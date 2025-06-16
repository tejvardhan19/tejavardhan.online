import React from 'react';
import { Code, Cloud, Database, Zap, Users, ArrowRight, Sparkles, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const iconMap = {
  Code,
  Cloud,
  Database,
  Zap,
  Users,
};

export const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-32 bg-gradient-to-br from-white via-blue-50/50 to-purple-50/50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Geometric Shapes */}
        <div className="absolute top-40 right-40 w-6 h-6 bg-blue-500/30 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-40 left-40 w-8 h-8 bg-emerald-500/30 rounded-full animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 mb-6">
              <Target className="text-blue-600 dark:text-blue-400" size={24} />
              <span className="text-slate-600 dark:text-slate-400 font-semibold">What I Offer</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Services I Offer
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive solutions tailored to meet your development needs and business objectives with cutting-edge technology.
            </p>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {portfolioData.services.map((service, index) => {
              const IconComponent = iconMap[service.icon as keyof typeof iconMap];
              
              return (
                <div
                  key={service.title}
                  className={`group relative glass-card p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 cursor-pointer overflow-hidden border border-white/20 dark:border-slate-700/30 delay-${index * 100} ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-emerald-50/50 dark:from-blue-900/10 dark:to-emerald-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating Particles */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-500/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                  
                  {/* Enhanced Icon */}
                  <div className="relative z-10 flex items-center justify-center h-20 w-20 bg-gradient-to-br from-blue-600 via-purple-600 to-emerald-500 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl">
                    <IconComponent className="text-white" size={32} />
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-700 via-purple-700 to-emerald-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    
                    {/* Enhanced Learn More Link */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold group-hover:translate-x-2 transition-transform duration-300">
                        <span className="text-lg">Learn More</span>
                        <ArrowRight size={20} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="p-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Sparkles size={16} className="text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Hover Effect Border */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-3xl transition-colors duration-500"></div>
                  
                  {/* Glow Effect */}
                  <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-emerald-500/10 blur-xl"></div>
                </div>
              );
            })}
          </div>

          {/* Enhanced CTA Section */}
          <div className="mt-20">
            <div className="glass-card rounded-3xl p-12 text-center shadow-2xl border border-white/20 dark:border-slate-700/30 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-emerald-500/10"></div>
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-500/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 left-8 w-1 h-1 bg-purple-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-6">
                  <Sparkles className="text-white" size={24} />
                  <span className="text-white font-bold">Ready to Start?</span>
                </div>
                
                <h3 className="text-4xl font-bold gradient-text mb-6">Ready to Start Your Project?</h3>
                <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed">
                  Let's collaborate to bring your ideas to life with cutting-edge technology and innovative solutions that drive real results.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                  <button className="group px-10 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 transition-all duration-500 hover:scale-105 transform shadow-xl hover:shadow-2xl animate-gradient-shift">
                    <span className="flex items-center space-x-3">
                      <span className="text-lg">Let's Collaborate</span>
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </span>
                  </button>
                  
                  <button className="px-8 py-4 glass-card text-slate-700 dark:text-slate-300 rounded-2xl font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-105 border border-white/30 dark:border-slate-700/50 shadow-lg">
                    View Portfolio
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
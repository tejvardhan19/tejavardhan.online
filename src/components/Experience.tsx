import React from 'react';
import { Calendar, MapPin, Building, Briefcase, Award, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Experience = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="experience" className="py-32 bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-600/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Professional Icons */}
        <div className="absolute top-32 left-32 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl animate-float">
          <Briefcase size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <div className="absolute bottom-32 right-32 p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl animate-float-reverse">
          <TrendingUp size={24} className="text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 mb-6">
              <Briefcase className="text-purple-600 dark:text-purple-400" size={24} />
              <span className="text-slate-600 dark:text-slate-400 font-semibold">My Journey</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Professional Experience
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              My journey through various roles and experiences that have shaped my professional development and expertise.
            </p>
          </div>

          {/* Enhanced Experience Timeline */}
          <div className="relative max-w-5xl mx-auto mb-20">
            {/* Enhanced Timeline Line */}
            <div className="absolute left-12 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-500 rounded-full shadow-lg hidden md:block"></div>

            <div className="space-y-16">
              {portfolioData.experience.map((exp, index) => (
                <div
                  key={index}
                  className={`relative md:pl-28 transition-all duration-700 delay-${index * 200} ${
                    isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Enhanced Timeline Dot */}
                  <div className="absolute left-8 w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-xl hidden md:flex items-center justify-center group-hover:scale-125 transition-transform duration-300">
                    <div className="w-3 h-3 bg-white dark:bg-slate-900 rounded-full animate-pulse"></div>
                  </div>

                  {/* Enhanced Experience Card */}
                  <div className="group glass-card p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-slate-700/30 relative overflow-hidden">
                    {/* Background Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-blue-500/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-4 left-4 w-1 h-1 bg-emerald-500/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ animationDelay: '0.5s' }}></div>
                    
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-8">
                      <div className="flex items-start space-x-6 mb-6 lg:mb-0">
                        {/* Enhanced Company Logo */}
                        <div className="flex-shrink-0 relative">
                          <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-xl ring-4 ring-white/50 dark:ring-slate-800/50 group-hover:scale-110 transition-transform duration-300">
                            <img
                              src={exp.logo}
                              alt={exp.company}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="absolute -bottom-2 -right-2 p-1 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full">
                            <Award size={12} className="text-white" />
                          </div>
                        </div>
                        
                        <div className="flex-grow">
                          <h3 className="text-2xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 mb-2">
                            {exp.position}
                          </h3>
                          <div className="flex items-center space-x-3 text-slate-600 dark:text-slate-400 mb-3">
                            <div className="flex items-center space-x-2">
                              <Building size={18} />
                              <span className="font-bold text-lg">{exp.company}</span>
                            </div>
                          </div>
                          <div className="flex items-center space-x-2 px-3 py-1 glass-card rounded-lg w-fit">
                            <MapPin size={14} className="text-emerald-500" />
                            <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">Remote</span>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3 px-4 py-2 glass-card rounded-xl shadow-lg border border-white/20 dark:border-slate-700/30">
                        <Calendar size={18} className="text-blue-500" />
                        <span className="font-bold text-slate-700 dark:text-slate-300">{exp.period}</span>
                      </div>
                    </div>

                    <div className="relative">
                      <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                        {exp.description}
                      </p>
                      <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>

                    {/* Enhanced Hover Effect Border */}
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-200 dark:group-hover:border-blue-800 rounded-3xl transition-colors duration-500 pointer-events-none"></div>
                    
                    {/* Glow Effect */}
                    <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-emerald-500/5 blur-xl"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Coding Profiles Section */}
          <div className="text-center">
            <div className="glass-card p-12 rounded-3xl shadow-2xl border border-white/20 dark:border-slate-700/30 relative overflow-hidden">
              {/* Background Elements */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-emerald-500/5"></div>
              <div className="absolute top-6 left-6 w-3 h-3 bg-blue-500/40 rounded-full animate-pulse"></div>
              <div className="absolute bottom-6 right-6 w-2 h-2 bg-emerald-500/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg mb-8">
                  <TrendingUp className="text-white" size={24} />
                  <span className="text-white font-bold text-lg">Coding Achievements</span>
                </div>
                
                <h3 className="text-3xl font-bold gradient-text mb-8">
                  Coding Profiles & Achievements
                </h3>
                
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {[
                    { name: 'LeetCode', url: portfolioData.social.leetcode, color: 'from-orange-500 to-red-500', icon: '💻' },
                    { name: 'CodeChef', url: portfolioData.social.codechef, color: 'from-amber-500 to-orange-600', icon: '👨‍🍳' },
                    { name: 'Codeforces', url: portfolioData.social.codeforces, color: 'from-blue-500 to-indigo-600', icon: '⚡' },
                  ].map((platform, index) => (
                    <a
                      key={platform.name}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center space-x-4 px-8 py-4 bg-gradient-to-r ${platform.color} text-white rounded-2xl hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-2xl relative overflow-hidden`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative z-10 flex items-center space-x-4">
                        <div className="text-2xl">{platform.icon}</div>
                        <div>
                          <div className="font-bold text-lg">{platform.name}</div>
                          <div className="text-sm opacity-90">View Profile</div>
                        </div>
                        <TrendingUp size={20} className="group-hover:scale-110 transition-transform duration-300" />
                      </div>
                    </a>
                  ))}
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-8 mt-12 max-w-2xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Problems Solved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">3</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Active Platforms</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">2+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Years Coding</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
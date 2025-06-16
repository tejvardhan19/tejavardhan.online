import React, { useState, useEffect } from 'react';
import { Code, Lightbulb, Zap, Star, TrendingUp } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        const levels: { [key: string]: number } = {};
        portfolioData.skills.technical.forEach(skill => {
          levels[skill.name] = skill.level;
        });
        setAnimatedLevels(levels);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section id="skills" className="py-32 bg-gradient-to-br from-slate-50 via-purple-50/30 to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-emerald-600/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Floating Tech Icons */}
        <div className="absolute top-20 left-20 p-3 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl animate-float">
          <Code size={24} className="text-blue-600 dark:text-blue-400" />
        </div>
        <div className="absolute bottom-20 right-20 p-3 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-2xl animate-float-reverse">
          <Zap size={24} className="text-emerald-600 dark:text-emerald-400" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 mb-6">
              <TrendingUp className="text-purple-600 dark:text-purple-400" size={24} />
              <span className="text-slate-600 dark:text-slate-400 font-semibold">My Expertise</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Skills & Expertise
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-600 via-blue-600 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              A comprehensive toolkit of modern technologies and soft skills that enable me to deliver exceptional results.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Technical Skills */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover-lift">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-lg">
                    <Code className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">
                      Technical Skills
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Proficiency in modern technologies
                    </p>
                  </div>
                </div>

                <div className="space-y-8">
                  {portfolioData.skills.technical.map((skill, index) => (
                    <div
                      key={skill.name}
                      className={`transition-all duration-700 delay-${index * 100} ${
                        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
                          <span className="text-slate-800 dark:text-slate-200 font-bold text-lg">
                            {skill.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-slate-600 dark:text-slate-400 font-semibold">
                            {animatedLevels[skill.name] || 0}%
                          </span>
                          <div className="flex space-x-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={`${
                                  i < Math.floor((animatedLevels[skill.name] || 0) / 20)
                                    ? 'text-yellow-500 fill-current'
                                    : 'text-slate-300 dark:text-slate-600'
                                } transition-colors duration-500`}
                                style={{ transitionDelay: `${i * 100}ms` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-4 shadow-inner">
                          <div
                            className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 h-4 rounded-full transition-all duration-1500 ease-out shadow-lg relative overflow-hidden"
                            style={{
                              width: `${animatedLevels[skill.name] || 0}%`,
                            }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                        <div className="absolute top-0 right-0 w-2 h-4 bg-white dark:bg-slate-800 rounded-r-full shadow-lg"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Soft Skills */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover-lift">
                <div className="flex items-center space-x-4 mb-8">
                  <div className="p-4 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-2xl shadow-lg">
                    <Lightbulb className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold gradient-text">
                      Soft Skills
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mt-1">
                      Essential interpersonal abilities
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {portfolioData.skills.soft.map((skill, index) => (
                    <div
                      key={skill}
                      className={`group glass-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer border border-white/10 dark:border-slate-700/20 delay-${index * 100} ${
                        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                      }`}
                      style={{ transitionDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-emerald-100 dark:from-blue-900/30 dark:to-emerald-900/30 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-lg shadow-sm"></div>
                          </div>
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-slate-900 dark:text-white font-bold text-lg group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                            {skill}
                          </h4>
                          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mt-2">
                            <div className="bg-gradient-to-r from-blue-500 to-emerald-500 h-2 rounded-full transition-all duration-1000 group-hover:from-blue-600 group-hover:to-emerald-600"
                                 style={{ width: `${85 + Math.random() * 15}%` }}></div>
                          </div>
                        </div>
                        <div className="flex-shrink-0">
                          <div className="p-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg group-hover:scale-110 transition-transform duration-300">
                            <Star size={16} className="text-emerald-600 dark:text-emerald-400" />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Skills Summary Card */}
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover-lift">
                <h4 className="text-2xl font-bold gradient-text mb-6">Skills Summary</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">8+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Technical Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">6+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Soft Skills</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">85%</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Avg Proficiency</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-yellow-600 dark:text-yellow-400 mb-2">2+</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 font-semibold">Years Experience</div>
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
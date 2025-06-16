import React from 'react';
import { GraduationCap, Award, Calendar, BookOpen, Trophy, Target } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 via-blue-50/30 to-emerald-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-float-reverse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 mb-6">
              <BookOpen className="text-blue-600 dark:text-blue-400" size={24} />
              <span className="text-slate-600 dark:text-slate-400 font-semibold">Get to know me</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              About Me
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              Passionate about technology and innovation, I bring creativity and technical expertise to every project.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Bio Section */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover-lift">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Passionate About Technology & Innovation
                  </h3>
                </div>
                
                <div className="space-y-6 text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                  <p className="relative">
                    {portfolioData.personal.bio}
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  </p>
                  <p className="relative">
                    My journey in computer science has been driven by curiosity and a desire to solve complex problems. 
                    I specialize in building scalable web applications and cloud solutions that make a real impact.
                    <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-emerald-500 rounded-full"></div>
                  </p>
                </div>
              </div>
              
              {/* Enhanced Soft Skills */}
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30 hover-lift">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="p-3 bg-gradient-to-r from-emerald-600 to-blue-600 rounded-xl">
                    <Trophy className="text-white" size={24} />
                  </div>
                  <h4 className="text-2xl font-bold gradient-text">Key Strengths</h4>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {portfolioData.skills.soft.map((skill, index) => (
                    <div
                      key={skill}
                      className={`group p-4 glass-card rounded-2xl shadow-lg border border-white/10 dark:border-slate-700/20 transition-all duration-500 hover:scale-105 hover-lift delay-${index * 100}`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                        <span className="text-slate-700 dark:text-slate-300 font-semibold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Enhanced Education Timeline */}
            <div className="space-y-8">
              <div className="glass-card p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30">
                <div className="flex items-center space-x-3 mb-8">
                  <div className="p-3 bg-gradient-to-r from-purple-600 to-emerald-600 rounded-xl">
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold gradient-text">
                    Education Journey
                  </h3>
                </div>
                
                <div className="relative">
                  {/* Enhanced Timeline Line */}
                  <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-600 to-emerald-500 rounded-full shadow-lg"></div>
                  
                  {portfolioData.education.map((edu, index) => (
                    <div
                      key={index}
                      className={`relative pl-20 pb-12 group transition-all duration-700 delay-${index * 200} ${
                        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
                      }`}
                    >
                      {/* Enhanced Timeline Dot */}
                      <div className="absolute left-6 w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full border-4 border-white dark:border-slate-900 shadow-xl group-hover:scale-125 transition-all duration-300">
                        <div className="absolute inset-1 bg-white dark:bg-slate-900 rounded-full"></div>
                        <div className="absolute inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Enhanced Education Card */}
                      <div className="glass-card p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-white/20 dark:border-slate-700/30 group-hover:border-blue-300 dark:group-hover:border-blue-600">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex items-center space-x-3">
                            <div className="p-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 rounded-lg">
                              <GraduationCap className="text-blue-600 dark:text-blue-400" size={20} />
                            </div>
                            <h4 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                              {edu.institution}
                            </h4>
                          </div>
                          <div className="flex items-center space-x-2 px-3 py-1 glass-card rounded-lg">
                            <Calendar size={16} className="text-slate-500 dark:text-slate-400" />
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400">{edu.period}</span>
                          </div>
                        </div>
                        
                        <p className="text-slate-700 dark:text-slate-300 font-semibold mb-3">
                          {edu.degree}
                          {edu.specialization && (
                            <span className="block text-sm text-blue-600 dark:text-blue-400 mt-1">
                              Specialization: {edu.specialization}
                            </span>
                          )}
                        </p>
                        
                        <div className="flex items-center space-x-2 px-3 py-2 bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 rounded-lg">
                          <Award className="text-emerald-500" size={18} />
                          <span className="text-emerald-600 dark:text-emerald-400 font-bold">
                            {edu.grade}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
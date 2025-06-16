import React, { useState } from 'react';
import { Github, ExternalLink, Filter, Star, Code, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export const Projects = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', ...new Set(portfolioData.projects.map(project => project.category))];
  const filteredProjects = activeFilter === 'All' 
    ? portfolioData.projects 
    : portfolioData.projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-32 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-blue-50/30 dark:from-slate-800 dark:via-slate-900 dark:to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 left-32 w-64 h-64 bg-gradient-to-r from-emerald-400/10 to-blue-600/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 right-32 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-600/10 rounded-full blur-3xl animate-float-reverse"></div>
        
        {/* Code Symbols */}
        <div className="absolute top-20 right-20 text-6xl text-blue-500/10 dark:text-blue-400/10 font-mono animate-pulse">&lt;/&gt;</div>
        <div className="absolute bottom-20 left-20 text-4xl text-emerald-500/10 dark:text-emerald-400/10 font-mono animate-pulse">{}</div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-3 px-6 py-3 glass-card rounded-2xl shadow-lg border border-white/20 dark:border-slate-700/30 mb-6">
              <Code className="text-emerald-600 dark:text-emerald-400" size={24} />
              <span className="text-slate-600 dark:text-slate-400 font-semibold">My Work</span>
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold gradient-text mb-6">
              Featured Projects
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-500 mx-auto rounded-full shadow-lg"></div>
            <p className="text-xl text-slate-600 dark:text-slate-400 mt-8 max-w-3xl mx-auto leading-relaxed">
              A showcase of innovative solutions and applications I've built using modern technologies and best practices.
            </p>
          </div>

          {/* Enhanced Filter Buttons */}
          <div className="flex items-center justify-center mb-16">
            <div className="glass-card p-2 rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/30">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                  <Filter className="text-white" size={20} />
                </div>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                      activeFilter === category
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105'
                        : 'text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-white/50 dark:hover:bg-slate-800/50'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <div
                key={project.title}
                className={`group glass-card rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-700 hover:-translate-y-3 border border-white/20 dark:border-slate-700/30 delay-${index * 100} ${
                  isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Enhanced Project Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-bold rounded-full shadow-lg">
                    {project.category}
                  </div>
                  
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center space-x-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass-card rounded-2xl hover:bg-white transition-all duration-300 hover:scale-110 transform shadow-xl border border-white/30"
                    >
                      <Github size={24} className="text-slate-700" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 glass-card rounded-2xl hover:bg-white transition-all duration-300 hover:scale-110 transform shadow-xl border border-white/30"
                    >
                      <ExternalLink size={24} className="text-slate-700" />
                    </a>
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 p-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Star size={16} className="text-white" />
                  </div>
                </div>

                {/* Enhanced Project Content */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-slate-500 dark:text-slate-400 font-semibold uppercase tracking-wider">
                        Featured Project
                      </span>
                    </div>
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-500 fill-current"
                        />
                      ))}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* Enhanced Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 glass-card text-slate-600 dark:text-slate-400 text-sm rounded-lg font-semibold border border-white/20 dark:border-slate-700/30 hover:scale-105 transition-transform duration-300 delay-${techIndex * 50}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Project Stats */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-700">
                    <div className="flex items-center space-x-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-1">
                        <Zap size={14} />
                        <span>Live</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Code size={14} />
                        <span>Open Source</span>
                      </div>
                    </div>
                    <div className="text-sm text-slate-500 dark:text-slate-400 font-semibold">
                      2024
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced View More Projects CTA */}
          <div className="text-center mt-16">
            <div className="glass-card inline-block p-8 rounded-3xl shadow-xl border border-white/20 dark:border-slate-700/30">
              <h3 className="text-2xl font-bold gradient-text mb-4">Want to see more?</h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
                Explore my complete portfolio on GitHub with more projects and contributions.
              </p>
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 text-white rounded-2xl font-bold hover:from-blue-700 hover:via-purple-700 hover:to-emerald-700 transition-all duration-500 hover:scale-105 transform shadow-xl hover:shadow-2xl animate-gradient-shift"
              >
                <Github size={24} className="mr-3" />
                <span className="text-lg">View More on GitHub</span>
                <ExternalLink size={20} className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
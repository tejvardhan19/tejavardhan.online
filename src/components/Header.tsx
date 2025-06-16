import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Sparkles } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Projects', href: '#projects' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  {
    href: "https://github.com/tejvardhan19",
    icon: Github,
    label: "GitHub"
  },
  {
    href: "https://www.linkedin.com/in/teja-vardhan-768a58285/",
    icon: Linkedin,
    label: "LinkedIn"
  },
  {
    href: "https://www.instagram.com/tejavardhan199",
    icon: Instagram,
    label: "Instagram"
  }
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navigation.map(nav => nav.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const SocialIcon = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg border border-white/20 dark:border-slate-700/30 relative overflow-hidden group"
      whileHover={{ scale: 1.1, rotateY: 15 }}
      whileTap={{ scale: 0.9 }}
      style={{
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100"
        transition={{ duration: 0.3 }}
      />
      <Icon size={18} className="relative z-10" />
    </motion.a>
  );

  return (
    <>
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            animate={{
              x: [0, Math.random() * window.innerWidth],
              y: [0, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
            style={{
              left: Math.random() * window.innerWidth,
              top: Math.random() * window.innerHeight,
            }}
          />
        ))}
      </div>

      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          isScrolled
            ? 'backdrop-blur-2xl bg-white/10 dark:bg-slate-900/10 shadow-2xl border-b border-white/20 dark:border-slate-700/30'
            : 'bg-transparent'
        }`}
        style={{
          background: isScrolled 
            ? 'rgba(255, 255, 255, 0.05)' 
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: isScrolled ? 'blur(20px) saturate(180%)' : 'none',
        }}
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex-shrink-0 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                x: mousePosition.x > 0 ? (mousePosition.x - window.innerWidth / 2) * 0.01 : 0,
                y: mousePosition.y > 0 ? (mousePosition.y - window.innerHeight / 2) * 0.01 : 0,
              }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
            >
              <div className="flex items-center space-x-2">
                <motion.div 
                  className="relative p-2 rounded-xl shadow-lg overflow-hidden"
                  whileHover={{ scale: 1.1, rotateY: 15 }}
                  style={{
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    boxShadow: '0 10px 25px rgba(102, 126, 234, 0.3)',
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />
                  <Sparkles size={20} className="text-white relative z-10" />
                </motion.div>
                <motion.span 
                  className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent"
                  whileHover={{ scale: 1.05 }}
                >
                  TejaVardhan
                </motion.span>
              </div>
            </motion.div>

            <div className="hidden md:block">
              <div className="ml-6 flex items-baseline space-x-1">
                {navigation.map((item, index) => (
                  <motion.button
                    key={item.name}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    onClick={() => handleNavClick(item.href)}
                    className={`relative px-3 py-2 text-sm font-semibold rounded-xl transition-all duration-300 overflow-hidden group ${
                      activeSection === item.href.substring(1)
                        ? 'text-white shadow-lg'
                        : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                    }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {activeSection === item.href.substring(1) && (
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                        layoutId="activeNavBg"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <motion.div
                      className="absolute inset-0 bg-white/10 dark:bg-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full"
                      transition={{ duration: 0.6 }}
                    />
                    <span className="relative z-10">{item.name}</span>
                  </motion.button>
                ))}
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-3">
              {socialLinks.map((social, index) => (
                <SocialIcon key={index} {...social} />
              ))}
              <ThemeToggle />
            </div>

            <div className="md:hidden flex items-center space-x-3">
              <ThemeToggle />
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 shadow-lg border border-white/20 dark:border-slate-700/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                <AnimatePresence mode="wait">
                  {isMobileMenuOpen ? (
                    <motion.div
                      key="close"
                      initial={{ rotate: -90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <X size={20} />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="menu"
                      initial={{ rotate: 90, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -90, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Menu size={20} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </div>
          </div>

          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="md:hidden"
              >
                <div 
                  className="px-4 pt-4 pb-6 space-y-2 rounded-2xl mt-4 shadow-2xl border border-white/20 dark:border-slate-700/30 relative overflow-hidden"
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                  }}
                >
                  {navigation.map((item, index) => (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                      onClick={() => handleNavClick(item.href)}
                      className={`block w-full text-left px-4 py-2 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                        activeSection === item.href.substring(1)
                          ? 'text-white shadow-lg'
                          : 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                      }`}
                      whileHover={{ scale: 1.02, x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {activeSection === item.href.substring(1) && (
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl"
                          layoutId="activeMobileNavBg"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      <motion.div
                        className="absolute inset-0 bg-white/10 dark:bg-slate-800/50 rounded-xl opacity-0 group-hover:opacity-100"
                        transition={{ duration: 0.3 }}
                      />
                      <span className="relative z-10">{item.name}</span>
                    </motion.button>
                  ))}
                  
                  <motion.div 
                    className="flex items-center justify-center px-4 py-4 mt-6 pt-6 border-t border-white/20 dark:border-slate-700/30 space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.3 }}
                  >
                    {socialLinks.map((social, index) => (
                      <SocialIcon key={index} {...social} />
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </motion.header>
    </>
  );
};

export default Header;
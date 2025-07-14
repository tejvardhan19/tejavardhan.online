import { motion } from 'framer-motion';
import { Trophy, Github, Linkedin, Users, Heart, Brain } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: "DTCC India AI Hackathon 2025 – KL NEURO",
      description: "Represented KL University as one of the top 10 shortlisted teams among top institutions, including IITs and leading colleges across India. Built an AI-driven NLP platform to translate natural language prompts into deployable Solidity smart contracts for blockchain applications. Integrated GEN AI with real-time validation.",
      icon: Brain,
      links: [
        { url: "https://github.com/tejvardhan19/KL-NEURO.git", icon: Github, label: "KL NEURO" }
      ]
    },
    {
      title: "Odyssey of Code – Hackathon Finalist",
      description: "Finalist in the Odyssey of Code Hackathon organized by ConsultAdd Inc., Pune (April 2025). Designed and pitched an AI-powered prototype to a panel of experts.",
      icon: Trophy,
      links: [
        { url: "https://github.com/tejvardhan19/odyssey_team6.git", icon: Github, label: "GitHub Repo" },
        { url: "https://www.linkedin.com/posts/teja-vardhan-768a58285_odysseyofcode-hackathonfinalist-team6-activity-7333555052290129922-owMx", icon: Linkedin, label: "LinkedIn Post" }
      ]
    },
    {
      title: "Technical Club President – KL SAC",
      description: "Led the KL SAC Technical Club, organized tech events, and mentored juniors. Conducted a 24-hour Leanathon focused on HTML & CSS fundamentals.",
      icon: Users
    },
    {
      title: "NSS Volunteer – KL University",
      description: "Participated in a one-week NSS camp at Pedapalem Village, actively contributing to community service and rural infrastructure awareness.",
      icon: Heart
    }
  ];

  return (
    <section id="achievements" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        {[...Array(10)].map((_, i) => (
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

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 px-4 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Trophy className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
              Notable Achievements
            </span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Achievements & Hackathons
          </h2>
        </motion.div>

        {/* Achievement Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="space-y-6"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
              className="group relative bg-white/10 dark:bg-slate-800/50 backdrop-blur-xl rounded-2xl p-1"
            >
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
              
              <div className="relative p-6 rounded-xl backdrop-blur-sm">
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center shadow-xl group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <achievement.icon className="text-white" size={28} />
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {achievement.description}
                    </p>
                    {achievement.links && (
                      <div className="flex space-x-4">
                        {achievement.links.map((link, i) => (
                          <motion.a
                            key={i}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center px-4 py-2 space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            <link.icon className="w-4 h-4" />
                            <span className="font-medium">{link.label}</span>
                          </motion.a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
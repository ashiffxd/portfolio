import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  // Animation variants for staggered letters
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const name = "Ashif Ansari".split("");

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background gradient updated to more vibrant */}
      <div className="absolute inset-0 bg-gradient-to-r from-pink-600/30 via-indigo-600/30 to-cyan-600/30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Hi, I'm{" "}
            <motion.span
              className="bg-gradient-to-r from-pink-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent inline-flex drop-shadow-lg"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {name.map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </motion.span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Full-Stack Developer | React • Node.js • PostgreSQL • MongoDB
          </p>

          {/* Social Links with glow effect */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://github.com/Ashiffxd"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-pink-500 hover:to-cyan-500 transition-all duration-300 transform hover:scale-125 shadow-lg"
            >
              <Github className="text-white" size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ashif-ansari-7b4191262"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-blue-500 hover:to-violet-500 transition-all duration-300 transform hover:scale-125 shadow-lg"
            >
              <Linkedin className="text-white" size={24} />
            </a>
            <a
              href="mailto:ashansari19@gmail.com"
              className="p-3 bg-white/10 backdrop-blur-sm rounded-full hover:bg-gradient-to-r hover:from-emerald-500 hover:to-teal-400 transition-all duration-300 transform hover:scale-125 shadow-lg"
            >
              <Mail className="text-white" size={24} />
            </a>
          </div>

          {/* Button with stronger gradient */}
          <button
            onClick={scrollToProjects}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:from-pink-600 hover:via-purple-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-110 shadow-xl"
          >
            View My Work
            <ChevronDown className="ml-2" size={20} />
          </button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-white/60" size={32} />
      </div>
    </section>
  );
};

export default Hero;

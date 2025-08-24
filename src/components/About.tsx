import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Final-year Computer Science Engineering student passionate about building scalable web
            applications and solving real-world problems through technology.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left side text */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-6"
          >
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              I'm currently pursuing my B.Tech in Computer Science, with a strong focus on full-stack
              development. Over the past few years, I've built multiple projects including blogging platforms,
              influencer-brand ad platforms, and more, using technologies like React, Node.js, Prisma, and
              PostgreSQL.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-300 leading-relaxed"
              variants={fadeInUp}
            >
              Beyond academics, I enjoy competitive programming, having solved 550+ problems across
              LeetCode and other platforms. I’m always eager to learn new technologies, contribute to impactful
              projects, and grow as a developer.
            </motion.p>

            <motion.div 
              className="flex flex-wrap gap-4"
              variants={staggerContainer}
            >
              {['Full-Stack Developer', 'Problem Solver', 'Team Player'].map((tag, i) => (
                <motion.span
                  key={i}
                  variants={fadeInUp}
                  className={`px-4 py-2 rounded-full text-sm font-medium
                    ${i === 0 ? 'bg-blue-500/20 text-blue-300' : 
                      i === 1 ? 'bg-emerald-500/20 text-emerald-300' : 
                      'bg-purple-500/20 text-purple-300'}`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side cards */}
          <motion.div 
            className="grid gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <Code className="text-blue-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Development</h3>
              <p className="text-gray-300">
                Skilled in building full-stack applications using React, Node.js, Prisma, and modern
                frameworks with a focus on clean, maintainable code.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <Palette className="text-emerald-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Design</h3>
              <p className="text-gray-300">
                Creating intuitive, user-friendly interfaces with Tailwind CSS and modern UI/UX best
                practices to deliver seamless digital experiences.
              </p>
            </motion.div>

            <motion.div 
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300"
              variants={fadeInUp}
            >
              <Zap className="text-purple-400 mb-4" size={48} />
              <h3 className="text-xl font-semibold text-white mb-2">Performance</h3>
              <p className="text-gray-300">
                Focused on optimizing applications for scalability, performance, and smooth user
                interactions while ensuring security and reliability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;


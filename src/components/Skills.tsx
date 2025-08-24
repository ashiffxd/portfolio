import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    // Frontend
    { name: 'React.js', category: 'Frontend' },
    { name: 'TypeScript', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'Tailwind CSS', category: 'Frontend' },

    // Backend
    { name: 'Node.js', category: 'Backend' },
    { name: 'Express.js', category: 'Backend' },
    { name: 'Hono (Cloudflare Workers)', category: 'Backend' },
    { name: 'JWT Authentication', category: 'Backend' },

    // Database
    { name: 'PostgreSQL', category: 'Database' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Prisma ORM', category: 'Database' },

    // Tools & Cloud
    { name: 'GitHub', category: 'Tools' },
    { name: 'Vercel', category: 'Cloud' },
    { name: 'Render', category: 'Cloud' },
    { name: 'Cloudflare Workers', category: 'Cloud' },
  ];

  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Full-stack developer with a strong foundation in modern web technologies and deployment tools.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {categories.map((category, i) => (
            <motion.div
              key={category}
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
                <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mr-3"></span>
                {category}
              </h3>
              
              {skills
                .filter(skill => skill.category === category)
                .map((skill, j) => (
                  <motion.div
                    key={skill.name}
                    className="p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: j * 0.15, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-lg font-medium text-gray-300">{skill.name}</span>
                  </motion.div>
                ))}
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-300 text-lg mb-8">
            Currently exploring and learning modern frameworks and tools
          </p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
            }}
          >
            {['Next.js', 'GraphQL', 'Docker', 'Firebase', 'Kubernetes'].map((tech) => (
              <motion.span 
                key={tech}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

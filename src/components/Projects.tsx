import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Medium - Blogging Platform',
      description:
        'A full-stack blogging platform with CRUD operations, authentication, and responsive UI for creating and managing blog posts.',
      image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg',
      technologies: ['React', 'Tailwind CSS', 'Hono', 'JWT', 'PostgreSQL', 'Prisma'],
      liveUrl: 'https://medium-two-sable.vercel.app/',
      githubUrl: 'https://github.com/ashiffxd/medium',
      featured: true,
    },
    {
      title: 'Adchain - Influencer Ad Platform',
      description:
        'A platform connecting brands and influencers where companies can post ads and influencers can accept, promote, and submit proofs.',
      image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg',
      technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'JWT'],
      liveUrl: 'https://ad-chain-coral.vercel.app/',
      githubUrl: 'https://github.com/ashiffxd/Ad_Chain',
      featured: true,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work, featuring full-stack applications that highlight my skills in web development.
          </p>
        </div>

        <div className="grid gap-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-white mb-6 flex items-center">
              <span className="w-3 h-3 bg-gradient-to-r from-blue-400 to-emerald-400 rounded-full mr-3"></span>
              Featured Work
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-300 text-lg mb-8">Want to see more of my work?</p>
          <a
            href="https://github.com/ashiffxd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-600 text-white font-semibold rounded-full hover:from-gray-600 hover:to-gray-500 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-300 transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <Eye className="text-white" size={16} />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-200"
          >
            <Github className="text-white" size={16} />
          </a>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech: string, techIndex: number) => (
            <span
              key={techIndex}
              className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded text-xs font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="px-2 py-1 bg-gray-500/20 text-gray-300 rounded text-xs font-medium">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>

        <div className="flex space-x-3">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm font-medium"
          >
            <ExternalLink size={16} className="mr-1" />
            Live Demo
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-gray-400 hover:text-gray-300 transition-colors duration-200 text-sm font-medium"
          >
            <Github size={16} className="mr-1" />
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;

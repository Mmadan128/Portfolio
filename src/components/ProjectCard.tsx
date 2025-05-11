import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
    >
      <div className="relative aspect-video overflow-hidden">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
                aria-label={`View live demo of ${project.title}`}
              >
                <ExternalLink size={18} />
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-500 hover:bg-primary-600 text-white p-2 rounded-full transition-colors"
                aria-label={`View code of ${project.title}`}
              >
                <Github size={18} />
              </a>
            )}
          </div>
        </div>
        
        {project.featured && (
          <div className="absolute top-3 right-3 bg-accent-500 text-white text-xs font-bold px-2 py-1 rounded-md">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl text-primary-700 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, i) => (
            <span
              key={i}
              className="inline-block bg-primary-50 text-primary-600 text-xs px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
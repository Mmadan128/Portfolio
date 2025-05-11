import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

const WorkSection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  
  const uniqueTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  );
  
  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(project => project.tags.includes(filter));
  
  return (
    <section 
      id="work"
      className="py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-bold text-primary-600 mb-4"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-accent-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Here are some of my recent projects. Each project demonstrates my skills
            and approach to solving real-world problems through code.
          </motion.p>
        </div>
        
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              filter === 'all'
                ? 'bg-primary-600 text-white'
                : 'bg-white text-primary-600 hover:bg-primary-50'
            }`}
          >
            All
          </button>
          {uniqueTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === tag
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-primary-600 hover:bg-primary-50'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-primary-600 hover:bg-primary-500 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
          >
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
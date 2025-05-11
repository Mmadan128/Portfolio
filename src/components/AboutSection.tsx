import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills';

const AboutSection: React.FC = () => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section 
      id="about"
      className="py-20 bg-white"
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
            About Me
          </motion.h2>
          <motion.div 
            className="w-20 h-1 bg-accent-500 mx-auto mb-8"
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          ></motion.div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-6">
              Hello, I'm John Doe
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm a passionate web developer based in New York with over 5 years of experience creating beautiful, 
              functional, and user-centered digital experiences. My background in both design and development allows 
              me to bridge the gap between aesthetic appeal and technical functionality.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I specialize in building modern web applications using React and TypeScript on the frontend, combined with 
              powerful backend solutions using Node.js or Django. My approach focuses on creating responsive, accessible, 
              and performant websites that deliver exceptional user experiences.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying outdoor activities. I'm always open to new opportunities and challenges that allow me to grow
              professionally.
            </p>
            <div className="flex gap-4">
              <a 
                href="/resume.pdf" 
                className="bg-primary-600 hover:bg-primary-500 text-white font-medium py-2 px-4 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Download Resume
              </a>
              <a 
                href="#contact" 
                className="bg-transparent hover:bg-primary-50 text-primary-600 font-medium py-2 px-4 rounded-lg border border-primary-600 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300"
              >
                Get in Touch
              </a>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-heading font-semibold text-primary-700 mb-6 text-center lg:text-left">
              My Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={variants}
                >
                  <div className="p-4 bg-gray-50 rounded-lg hover:shadow-md transition-shadow">
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-800">{skill.name}</span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="h-2.5 rounded-full bg-primary-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
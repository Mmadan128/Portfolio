import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-b from-primary-600 to-primary-700"
    >
      {/* Animated Background Waves */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute bottom-0 left-0 right-0 h-64">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-full">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,202.7C672,203,768,181,864,186.7C960,192,1056,224,1152,218.7C1248,213,1344,171,1392,149.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <motion.div 
            className="lg:w-1/2 text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block bg-primary-400 bg-opacity-20 text-primary-200 px-4 py-1 rounded-full text-sm font-medium mb-6">
              Web Developer
            </span>
            <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
              <span className="block">Hello, I'm</span>
              <span className="text-primary-200">John Doe</span>
            </h1>
            <p className="text-primary-100 text-lg md:text-xl mb-8 max-w-lg mx-auto lg:mx-0">
              I build exceptional digital experiences that are beautiful,
              functional, and user-friendly. Let's create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="work"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-primary-500 hover:bg-primary-400 text-white font-medium py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-primary-700"
              >
                View My Work
              </Link>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="bg-transparent hover:bg-primary-500 text-primary-200 font-medium py-3 px-6 rounded-lg border border-primary-400 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-300 focus:ring-offset-2 focus:ring-offset-primary-700"
              >
                Contact Me
              </Link>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 animate-float">
              <svg 
                viewBox="0 0 200 200" 
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  fill="#88B0D8" 
                  d="M54.2,-58.4C68.8,-44.7,78.1,-24.5,79.2,-3.7C80.3,17.1,73.2,38.7,58.7,52.5C44.2,66.4,22.1,72.6,0.7,71.8C-20.7,70.9,-41.5,62.9,-56.1,48.2C-70.7,33.4,-79.1,11.8,-77.2,-9.1C-75.3,-29.9,-62.9,-50,-46,-63.2C-29.1,-76.3,-7.8,-82.6,13,-84.9C33.7,-87.2,67.5,-85.5,80.6,-71.1C93.7,-56.7,39.6,-72.1,54.2,-58.4Z" 
                  transform="translate(100 100)" 
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/5378700/pexels-photo-5378700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="John Doe"
                  className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex justify-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="text-primary-200 hover:text-white animate-bounce cursor-pointer focus:outline-none"
          >
            <ArrowDown size={32} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
import React from 'react';
import { socialLinks } from '../data/navigation';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'mail':
        return <Mail size={20} />;
      default:
        return null;
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-700 text-white py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-heading font-bold text-xl mb-2">John Doe</h3>
            <p className="text-primary-200 text-sm">Web Developer & Designer</p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-200 hover:text-white transition-colors"
                  aria-label={link.name}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
            
            <div className="h-8 w-px bg-primary-500 hidden md:block"></div>
            
            <a
              href="mailto:john.doe@example.com"
              className="text-primary-200 hover:text-white text-sm transition-colors"
            >
              john.doe@example.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-primary-600 mt-6 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-300 text-sm">
            &copy; {currentYear} John Doe. All rights reserved.
          </p>
          <p className="text-primary-300 text-sm mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X, Bean as PolarBear } from 'lucide-react';
import { navLinks } from '../data/navigation';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary-600 shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            className="flex items-center gap-2 cursor-pointer"
          >
            <PolarBear className="h-8 w-8 text-white" />
            <span className="text-white font-heading font-bold text-xl">John Doe</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-primary-200 transition-colors cursor-pointer text-base font-medium"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-primary-600 shadow-xl">
          <ul className="py-4 px-4">
            {navLinks.map((link) => (
              <li key={link.to} className="py-2">
                <Link
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="text-white hover:text-primary-200 transition-colors block text-lg font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
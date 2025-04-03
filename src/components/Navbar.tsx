
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const categories = [
    { name: 'Home', href: '#hero' },
    { name: 'Cabinet Knobs', href: '#cabinet-knobs' },
    { name: 'Earrings', href: '#earrings' },
    { name: 'Fan Pulls', href: '#fan-pulls' },
    { name: 'Keychains', href: '#keychains' },
    { name: 'Necklaces', href: '#necklaces' },
    { name: 'Valve Caps', href: '#valve-caps' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-lg shadow-gothic-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <a href="#hero" className="flex-shrink-0 flex items-center gap-2">
              <img
                className="h-12 w-auto transition-transform hover:scale-105"
                src="/lovable-uploads/07445cdb-b976-45c7-9d7d-9ae1447b9b18.png"
                alt="Skulls Inspired"
              />
              <span className="text-xl font-gothic font-bold hidden sm:block">Skulls Inspired</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            {categories.map((category) => (
              <a 
                key={category.name} 
                href={category.href} 
                className="nav-link"
              >
                {category.name}
              </a>
            ))}
            <a href="#shop" className="btn-primary ml-4">Shop All</a>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gothic-800 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-dark-500/95 backdrop-blur-sm">
          {categories.map((category) => (
            <a
              key={category.name}
              href={category.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gothic-800"
              onClick={toggleMenu}
            >
              {category.name}
            </a>
          ))}
          <a 
            href="#shop" 
            className="block w-full text-center btn-primary mt-4"
            onClick={toggleMenu}
          >
            Shop All
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/use-mobile';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();

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
    
    // Add smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          const headerOffset = 80; // Adjust this value based on your header height
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          if (isOpen) {
            setIsOpen(false);
          }
        }
      }
    };
    
    document.addEventListener('click', handleAnchorClick);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleAnchorClick);
    };
  }, [isOpen]);

  const categories = [
    { name: 'Cabinet Knobs', href: '/cabinet-knobs' },
    { name: 'Earrings', href: '/earrings' },
    { name: 'Fan Pulls', href: '/fan-pulls' },
    { name: 'Keychains', href: '/keychains' },
    { name: 'Necklaces', href: '/necklaces' },
    { name: 'Valve Caps', href: '/valve-caps' },
    { name: 'Blog', href: '/blog' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ];
  
  // Function to display category names appropriately based on device type
  const formatCategoryName = (name: string) => {
    const words = name.split(' ');
    
    // On mobile, display all names on a single line
    if (isMobile) {
      return name;
    }
    
    // On desktop, multi-word categories display on separate lines
    if (words.length > 1) {
      return (
        <span className="flex flex-col items-center text-center">
          {words.map((word, index) => (
            <span key={index}>{word}</span>
          ))}
        </span>
      );
    }
    return name;
  };
  
  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-500/95 backdrop-blur-sm shadow-lg shadow-gothic-900/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-20">
          <div className="flex items-center space-x-16">
            <div className="flex-shrink-0 flex items-center">
              <Link to="/" className="flex items-center gap-3 bg-transparent">
                <img
                  className="h-14 w-auto transition-transform hover:scale-105 invert bg-transparent"
                  src="/lovable-uploads/07445cdb-b976-45c7-9d7d-9ae1447b9b18.png"
                  alt="Skulls Inspired"
                />
                <span className="text-[1.40rem] font-gothic font-bold hidden sm:block whitespace-nowrap text-gothic-400">Skulls Inspired</span>
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-4 lg:space-x-5">
              {categories.map((category) => (
                category.href.startsWith('/#') ? (
                  <a 
                    key={category.name} 
                    href={category.href} 
                    className="nav-link"
                  >
                    {formatCategoryName(category.name)}
                  </a>
                ) : (
                  <Link 
                    key={category.name} 
                    to={category.href} 
                    className="nav-link"
                  >
                    {formatCategoryName(category.name)}
                  </Link>
                )
              ))}
              <Link to="/shop" className="btn-primary whitespace-nowrap">Shop All</Link>
              <Link to="/cart" className="text-gothic-400 hover:text-gothic-300 transition-colors">
                <ShoppingCart className="h-6 w-6" />
              </Link>
            </div>
          </div>
          
          <div className="md:hidden flex items-center">
            {/* Mobile Company Name */}
            <span className="text-[1.32rem] font-gothic font-bold text-gothic-400 ml-5 mr-6 whitespace-nowrap">Skulls Inspired</span>
            
            {/* Shopping Cart Icon */}
            <Link to="/cart" className="mr-3">
              <ShoppingCart className="h-6 w-6 text-gothic-400 hover:text-gothic-300 transition-colors" />
            </Link>
            
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
            category.href.startsWith('/#') ? (
              <a
                key={category.name}
                href={category.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gothic-800 text-left whitespace-nowrap"
                onClick={toggleMenu}
              >
                {formatCategoryName(category.name)}
              </a>
            ) : (
              <Link
                key={category.name}
                to={category.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-200 hover:text-white hover:bg-gothic-800 text-left whitespace-nowrap"
                onClick={toggleMenu}
              >
                {formatCategoryName(category.name)}
              </Link>
            )
          ))}
          <Link 
            to="/shop" 
            className="block w-full text-left btn-primary mt-4"
            onClick={toggleMenu}
          >
            Shop All
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

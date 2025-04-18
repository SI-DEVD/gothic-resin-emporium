import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Youtube, CircleDot, Video } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const categories = [
    { name: 'Cabinet Knobs', href: '/cabinet-knobs' },
    { name: 'Earrings', href: '/earrings' },
    { name: 'Fan Pulls', href: '/fan-pulls' },
    { name: 'Keychains', href: '/keychains' },
    { name: 'Necklaces', href: '/necklaces' },
    { name: 'Valve Caps', href: '/valve-caps' },
  ];
  
  const support = [
    { name: 'Shipping & Returns', href: '/shipping-returns' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms of Service', href: '/terms-of-service' },
  ];

  // Using available icons instead of the unavailable ones
  const PinterestIcon = CircleDot;
  const TikTokIcon = Video;

  return (
    <footer className="bg-dark-500 text-gray-300 py-16 relative">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <img 
                src="/lovable-uploads/07445cdb-b976-45c7-9d7d-9ae1447b9b18.png"
                alt="Skulls Inspired" 
                className="h-14 w-auto invert"
              />
              <span className="text-[1.40rem] font-gothic font-bold text-gothic-400">Skulls Inspired</span>
            </div>
            <p className="text-gray-400 mb-6">
              Handcrafted skull-themed resin jewelry and accessories for those who appreciate dark and elegant design.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/SkullsInspired" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <Facebook className="w-6 h-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a 
                href="#instagram" 
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <Instagram className="w-6 h-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a 
                href="#twitter" 
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <Twitter className="w-6 h-6" />
                <span className="sr-only">Twitter</span>
              </a>
              <a 
                href="#youtube" 
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <Youtube className="w-6 h-6" />
                <span className="sr-only">YouTube</span>
              </a>
              <a 
                href="#pinterest" 
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <PinterestIcon className="w-6 h-6" />
                <span className="sr-only">Pinterest</span>
              </a>
              <a 
                href="#tiktok" 
                className="text-gray-400 hover:text-halloween-500 transition-colors"
              >
                <TikTokIcon className="w-6 h-6" />
                <span className="sr-only">TikTok</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-gothic font-bold mb-6 text-gothic-200">Shop Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link 
                    to={category.href} 
                    className="text-gray-400 hover:text-halloween-500 transition-colors"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-gothic font-bold mb-6 text-gothic-200">Customer Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <Link 
                    to={item.href} 
                    className="text-gray-400 hover:text-halloween-500 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-gothic font-bold mb-6 text-gothic-200">Our Promise</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-gothic-800 p-2 rounded mr-3">
                  <svg className="w-5 h-5 text-halloween-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gothic-200">Handmade Quality</p>
                  <p className="text-gray-400 text-sm">Each piece crafted with care</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gothic-800 p-2 rounded mr-3">
                  <svg className="w-5 h-5 text-halloween-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gothic-200">Fast Shipping</p>
                  <p className="text-gray-400 text-sm">Orders ship within 1-3 days</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gothic-800 p-2 rounded mr-3">
                  <svg className="w-5 h-5 text-halloween-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium text-gothic-200">Satisfaction Guaranteed</p>
                  <p className="text-gray-400 text-sm">30-day hassle-free returns</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <Separator className="my-10 bg-gothic-800" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Skulls Inspired. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              Designed with <span className="text-halloween-500">♥</span> for the gothic at heart
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

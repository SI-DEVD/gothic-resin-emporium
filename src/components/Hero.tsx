
import React, { useEffect, useRef } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Skull } from 'lucide-react';

const Hero = () => {
  const skullRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!skullRef.current) return;
      
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      
      skullRef.current.style.transform = `translate(${x * 20 - 10}px, ${y * 20 - 10}px)`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden">
      {/* Background elements */}
      <div className="spooky-bg"></div>
      <div className="web-corner top-left"></div>
      <div className="web-corner top-right"></div>
      <div className="web-corner bottom-left"></div>
      <div className="web-corner bottom-right"></div>
      
      {/* Animated floating skull */}
      <div ref={skullRef} className="absolute opacity-10 pointer-events-none" style={{ top: '30%', right: '10%' }}>
        <Skull className="w-64 h-64 text-gothic-300 animate-float" />
      </div>
      
      <div className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-gothic font-bold mb-6 text-white leading-tight">
            Handcrafted <span className="text-gothic-400">Skull</span> Jewelry & Accessories
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Discover our hauntingly beautiful collection of handmade resin skull designs that add a touch of gothic elegance to your style.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#shop" className="btn-primary">
              Shop Collection
            </a>
            <a href="#about" className="btn-outline">
              Our Story
            </a>
          </div>
          
          <div className="mt-12 p-4 bg-dark-300/50 border border-gothic-800 rounded-lg">
            <div className="flex items-center gap-2 mb-3">
              <span className="h-2 w-2 rounded-full bg-halloween-500 animate-pulse"></span>
              <p className="text-sm font-medium text-halloween-500">Limited Edition</p>
            </div>
            <p className="text-gray-300">
              Our Halloween special collection is now available for a limited time. Each piece is uniquely crafted with premium materials.
            </p>
          </div>
        </div>
        
        <div className="md:w-1/2 animate-fade-in-right">
          <div className="relative">
            <ScrollArea className="border-2 border-gothic-800 rounded-lg h-[500px] bg-dark-400/50 spooky-shadow">
              <div className="p-8 grid grid-cols-1 gap-8">
                <div className="card">
                  <img 
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk0OTN8MHwxfHNlYXJjaHw5fHxkYXJrJTIwZ290aGljfGVufDB8fHx8MTcxNjQ5OTU1N3ww&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="Skull Jewelry Showcase" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-gothic font-bold mb-2 text-gothic-200">Exquisite Craftsmanship</h3>
                    <p className="text-gray-300">Each piece is meticulously crafted by hand, ensuring unique details and quality.</p>
                  </div>
                </div>
                
                <div className="card">
                  <img 
                    src="https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk0OTN8MHwxfHNlYXJjaHw3fHxnb3RoaWN8ZW58MHx8fHwxNzE2NDk5NTIwfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                    alt="Gothic inspired design" 
                    className="w-full h-60 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-2xl font-gothic font-bold mb-2 text-gothic-200">Gothic Elegance</h3>
                    <p className="text-gray-300">Timeless designs that blend dark aesthetics with elegant details.</p>
                  </div>
                </div>
              </div>
            </ScrollArea>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-4 -right-4 w-36 h-36 border-2 border-halloween-500 rounded-lg z-[-1]"></div>
            <div className="absolute -top-4 -left-4 w-36 h-36 border-2 border-gothic-400 rounded-lg z-[-1]"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

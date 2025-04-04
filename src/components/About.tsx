
import React from 'react';
import { Separator } from '@/components/ui/separator';

const About = () => {
  return (
    <section id="about" className="py-20 relative bg-gothic-900/30">
      <div className="web-corner top-right"></div>
      <div className="web-corner bottom-left"></div>
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Our Haunting Story</h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="md:w-1/2">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1473177104440-ffee2f376098?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzNDk0OTN8MHwxfHNlYXJjaHwxfHxnb3RoaWMlMjBjYXRoZWRyYWx8ZW58MHx8fHwxNzE2NDk5NjAyfDA&ixlib=rb-4.0.3&q=80&w=1080" 
                  alt="Workshop" 
                  className="rounded-lg spooky-shadow"
                />
                <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gothic-600 rounded-lg z-[-1]"></div>
                <div className="absolute -bottom-2 -right-2 w-24 h-24">
                  <img 
                    src="/lovable-uploads/07445cdb-b976-45c7-9d7d-9ae1447b9b18.png" 
                    alt="Skulls Inspired Logo" 
                    className="w-full h-full"
                  />
                </div>
              </div>
            </div>
            
            <div className="md:w-1/2 animate-fade-in">
              <h3 className="text-2xl font-gothic font-bold mb-4 text-gothic-300">Handcrafted with Passion</h3>
              <p className="text-gray-300 mb-4">
                Skulls Inspired was born from our love of gothic aesthetics and intricate craftsmanship. Our journey began in a small workshop where each piece was carefully created by hand.
              </p>
              <p className="text-gray-300 mb-4">
                Today, we continue to honor that tradition. Every skull-themed item in our collection is meticulously designed and crafted using premium resin and materials that ensure both beauty and durability.
              </p>
              
              <Separator className="my-6 bg-gothic-800" />
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="text-3xl font-gothic font-bold text-halloween-500">100%</p>
                  <p className="text-sm text-gray-400">Handmade</p>
                </div>
                <div>
                  <p className="text-3xl font-gothic font-bold text-halloween-500">6+</p>
                  <p className="text-sm text-gray-400">Years of Crafting</p>
                </div>
                <div>
                  <p className="text-3xl font-gothic font-bold text-halloween-500">1000+</p>
                  <p className="text-sm text-gray-400">Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

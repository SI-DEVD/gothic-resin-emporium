
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  return (
    <section className="py-16 bg-gothic-gradient relative overflow-hidden">
      <div className="absolute inset-0 bg-dark-500/80"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-gothic font-bold mb-4 text-white">Join Our Haunted Newsletter</h2>
          <p className="text-gray-200 mb-8">
            Subscribe to receive updates on new collections, special offers, and exclusive discounts.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-dark-400/70 border-gothic-700 text-white placeholder:text-gray-400"
            />
            <Button className="btn-secondary whitespace-nowrap">
              Subscribe
            </Button>
          </div>
          
          <p className="text-gray-400 text-sm mt-4">
            By subscribing, you agree to receive marketing emails from Skulls Inspired.
            Don't worry, we won't haunt your inbox too often.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

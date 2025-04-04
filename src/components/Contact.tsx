import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-dark-400 p-8 rounded-lg border border-gothic-800 spooky-shadow">
            <h3 className="text-2xl font-gothic font-bold mb-6 text-gothic-300">Contact Information</h3>
            
            <div className="space-y-6">
              {/* Existing email section */}
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-halloween-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gothic-300">Email</p>
                  <p className="text-gray-400">info@skullsinspired.com</p>
                </div>
              </div>
              
              {/* Existing address section */}
              <div className="flex items-start mb-8">
                <MapPin className="w-5 h-5 text-halloween-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gothic-300">Address</p>
                  <p className="text-gray-400">123 Haunted Lane, Gothic City, GC 98765</p>
                </div>
              </div>

              {/* Refunds section without ShieldCheck icon */}
              <div className="flex items-start">
                <div>
                  <p className="font-medium text-gothic-300">Returns & Refunds</p>
                  <p className="text-gray-400">No returns are accepted without a return authorization number. See the <Link to="/shipping-returns" className="text-halloween-500 hover:underline">Shipping & Returns</Link> page for complete details.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-dark-400 p-8 rounded-lg border border-gothic-800 spooky-shadow">
            <h3 className="text-2xl font-gothic font-bold mb-6 text-gothic-300">Send us a Message</h3>
            
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gothic-300 mb-1">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  type="text" 
                  placeholder="Enter your name" 
                  className="bg-dark-300 border-gothic-700 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gothic-300 mb-1">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-dark-300 border-gothic-700 text-white"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gothic-300 mb-1">
                  Message
                </label>
                <Textarea 
                  id="message" 
                  placeholder="Enter your message" 
                  className="bg-dark-300 border-gothic-700 text-white min-h-[120px]"
                />
              </div>
              
              <Button className="btn-primary w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

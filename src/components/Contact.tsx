
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-dark-400 p-8 rounded-lg border border-gothic-800 spooky-shadow">
            <h3 className="text-2xl font-gothic font-bold mb-6 text-gothic-300">Contact Information</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-halloween-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gothic-300">Email</p>
                  <p className="text-gray-400">info@skullsinspired.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-halloween-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gothic-300">Phone</p>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-halloween-500 mt-1 mr-3" />
                <div>
                  <p className="font-medium text-gothic-300">Address</p>
                  <p className="text-gray-400">123 Haunted Lane, Gothic City, GC 98765</p>
                </div>
              </div>
            </div>
            
            <div className="mt-10">
              <h4 className="text-lg font-gothic font-bold mb-4 text-gothic-300">Follow Us</h4>
              <div className="flex space-x-4">
                {['facebook', 'instagram', 'twitter', 'pinterest'].map((social) => (
                  <a 
                    key={social}
                    href={`#${social}`} 
                    className="w-10 h-10 rounded-full bg-gothic-800 flex items-center justify-center text-white hover:bg-gothic-600 transition-colors"
                  >
                    <span className="sr-only">{social}</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" clipRule="evenodd" />
                    </svg>
                  </a>
                ))}
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
                <label htmlFor="subject" className="block text-sm font-medium text-gothic-300 mb-1">
                  Subject
                </label>
                <Input 
                  id="subject" 
                  type="text" 
                  placeholder="Enter subject" 
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

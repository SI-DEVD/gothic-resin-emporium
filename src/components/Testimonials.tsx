
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'Collector',
    content: 'These skull cabinet knobs transformed my furniture into something truly unique. The craftsmanship is exceptional, and they feel solid and well-made.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&crop=faces&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Jamie Rivera',
    role: 'Interior Designer',
    content: 'I recommend Skulls Inspired to all my clients looking for statement pieces. The attention to detail in their skull fan pulls is incredible.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&crop=faces&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Taylor Knight',
    role: 'Jewelry Enthusiast',
    content: "The skull earrings I purchased are now my favorite accessory. They're lightweight, detailed, and I get compliments every time I wear them.",
    rating: 4,
    image: 'https://images.unsplash.com/photo-1504199367641-aba8151af406?w=200&h=200&crop=faces&auto=format&fit=crop'
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">What Our Customers Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="bg-dark-400 border-gothic-800 hover:border-gothic-600 transition-all duration-300 shadow-xl">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < testimonial.rating ? 'text-halloween-500 fill-halloween-500' : 'text-gray-500'}`} 
                    />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="mr-4">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full object-cover border-2 border-gothic-500"
                    />
                  </div>
                  <div>
                    <h4 className="font-gothic font-bold text-gothic-200">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

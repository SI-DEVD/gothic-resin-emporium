
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How long does shipping take?",
      answer: "Standard shipping within the US typically takes 3-5 business days after processing. International orders usually arrive within 10-14 business days, but may be subject to customs delays beyond our control."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to most countries worldwide. International shipping costs are calculated at checkout based on destination and package weight."
    },
    {
      question: "What materials are used in your products?",
      answer: "Our skull-themed accessories are primarily crafted from high-quality resin, with select pieces incorporating metal alloys, genuine leather, and semi-precious stones. All materials are chosen for both their aesthetic appeal and durability."
    },
    {
      question: "Are your products waterproof?",
      answer: "Most of our resin products are water-resistant but not fully waterproof. While brief exposure to water won't damage them, we recommend keeping items like jewelry away from prolonged moisture. Our valve caps and outdoor items are specifically designed to withstand weather conditions."
    },
    {
      question: "Can I request a custom design?",
      answer: "Absolutely! We love creating custom skull-themed pieces. Please contact us with your ideas, and our artists will work with you to create something uniquely macabre. Custom orders typically require a 2-3 week production timeframe."
    },
    {
      question: "How do I care for my resin skull items?",
      answer: "Clean with a soft, slightly damp cloth and mild soap if needed. Avoid harsh chemicals, excessive heat, and prolonged sun exposure which can affect the color and finish. Store jewelry and smaller items in a cool, dry place when not in use."
    },
    {
      question: "Do you offer wholesale options?",
      answer: "Yes, we offer wholesale rates for qualified retailers who want to carry our gothic-inspired collections. Please contact our wholesale department at wholesale@skullsinspired.com for pricing and minimum order requirements."
    },
    {
      question: "What if my order arrives damaged?",
      answer: "In the rare event that your order arrives damaged, please contact us within 48 hours with photos of the damaged items. We'll promptly send a replacement or issue a full refund at no additional cost to you."
    },
    {
      question: "Do your products contain any allergens?",
      answer: "Our resin products are generally hypoallergenic, but some metal components in jewelry may contain nickel. If you have specific allergy concerns, please contact us before ordering, and we can provide detailed material information for specific items."
    },
    {
      question: "Can I change or cancel my order after it's been placed?",
      answer: "We process orders quickly to ensure fast shipping. If you need to change or cancel your order, please contact us immediately. We can usually accommodate changes if the order hasn't been processed yet, typically within 2-4 hours of placing your order."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dark-400 rounded-lg shadow-lg p-8 border border-gothic-800">
            <h1 className="text-3xl md:text-4xl font-gothic font-bold text-halloween-500 mb-6">Frequently Asked Questions</h1>
            
            <Separator className="my-6 bg-gothic-800" />
            
            <p className="text-gray-300 mb-8">
              Find answers to the most common questions about our skull-themed products, shipping, returns, and more. If you can't find what you're looking for, please don't hesitate to contact our customer support team.
            </p>
            
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-gothic-800">
                  <AccordionTrigger className="text-lg font-gothic text-gothic-200 hover:text-halloween-500">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default FAQ;

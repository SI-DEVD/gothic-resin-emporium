
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const ShippingReturns = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dark-400 rounded-lg shadow-lg p-8 border border-gothic-800">
            <h1 className="text-3xl md:text-4xl font-gothic font-bold text-halloween-500 mb-6">Shipping & Returns</h1>
            
            <Separator className="my-6 bg-gothic-800" />
            
            <div className="space-y-8 text-gray-300">
              <div>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">Shipping Policy</h2>
                <p className="mb-4">
                  At Skulls Inspired, we understand the excitement of receiving your new gothic-inspired treasures. All orders are processed within 1-2 business days after payment confirmation. Once your order ships, you'll receive a confirmation email with tracking information. Standard shipping within the United States typically takes 3-5 business days, while international shipping may take 10-14 business days depending on customs processing.
                </p>
                <p>
                  We offer free standard shipping on all domestic orders over $50. For orders under $50, a flat shipping rate of $5.99 applies. International shipping rates are calculated at checkout based on location and package weight. Please note that any import duties or taxes imposed by your country are the responsibility of the recipient and are not included in our shipping charges.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">Return Policy</h2>
                <p className="mb-4">
                  Your satisfaction with our dark, elegant creations is our highest priority. If you're not completely satisfied with your purchase, we accept returns within 30 days of delivery for a full refund or exchange. Items must be in their original condition, unworn, and with all packaging and tags intact. Custom orders and personalized items cannot be returned unless there is a defect in craftsmanship.
                </p>
                <p>
                  To initiate a return, please contact our customer service team at returns@skullsinspired.com with your order number and reason for return. Once your return is approved, you'll receive instructions on how to send your items back. Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product. Refunds will be processed within 5-7 business days after we receive your returned items.
                </p>
              </div>
              
              <div>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">Damaged or Defective Items</h2>
                <p>
                  In the rare event that you receive damaged or defective merchandise, please contact us within 48 hours of delivery with photos of the damaged items and packaging. We'll promptly address the issue by offering a replacement or full refund, including any return shipping costs. Our craftsmen take immense pride in their work, and we stand behind the quality of every skull-inspired piece that leaves our workshop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ShippingReturns;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dark-400 rounded-lg shadow-lg p-8 border border-gothic-800">
            <h1 className="text-3xl md:text-4xl font-gothic font-bold text-halloween-500 mb-6">Terms of Service</h1>
            
            <p className="text-sm text-gray-400 mb-4">Last Updated: April 3, 2025</p>
            
            <Separator className="my-6 bg-gothic-800" />
            
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using the Skulls Inspired website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site. The materials contained in this website are protected by applicable copyright and trademark law.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">2. Use License</h2>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Skulls Inspired's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not: modify or copy the materials; use the materials for any commercial purpose or for any public display; attempt to decompile or reverse engineer any software contained on Skulls Inspired's website; remove any copyright or other proprietary notations from the materials; or transfer the materials to another person or "mirror" the materials on any other server.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">3. Product Information and Pricing</h2>
                <p>
                  We strive to display our products and their colors as accurately as possible. However, we cannot guarantee that your computer's display of the colors will be accurate. We reserve the right to limit the quantities of any products or services that we offer. All descriptions of products and pricing are subject to change at any time without notice, at our sole discretion. We reserve the right to discontinue any product at any time.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">4. Accuracy of Information</h2>
                <p>
                  The materials appearing on Skulls Inspired's website could include technical, typographical, or photographic errors. Skulls Inspired does not warrant that any of the materials on its website are accurate, complete, or current. Skulls Inspired may make changes to the materials contained on its website at any time without notice. However, Skulls Inspired does not make any commitment to update the materials.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">5. Links to Third-Party Sites</h2>
                <p>
                  Skulls Inspired's website may contain links to third-party websites that are not owned or controlled by Skulls Inspired. Skulls Inspired has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. You further acknowledge and agree that Skulls Inspired shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any such websites.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">6. Purchase and Payment</h2>
                <p>
                  By placing an order through our website, you are making an offer to purchase products. We reserve the right to refuse or cancel your order at any time for reasons including but not limited to product availability, errors in the description or price of the product, error in your order, or other reasons. We reserve the right to refuse or cancel your order if fraud or an unauthorized or illegal transaction is suspected. Payment must be received prior to the acceptance of an order.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">7. Shipping and Delivery</h2>
                <p>
                  Skulls Inspired will make every effort to ship products within the timeframe specified on the website. However, shipping times are estimates and not guarantees. We are not responsible for delays that are beyond our control, such as delays due to shipping carrier issues, weather, or other unforeseen circumstances. Risk of loss and title for items purchased from our website pass to you upon delivery of the items to the carrier.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">8. Returns and Refunds</h2>
                <p>
                  Please refer to our Shipping & Returns policy for detailed information about our return and refund procedures. By making a purchase on our website, you agree to the terms and conditions outlined in our Shipping & Returns policy, which is incorporated by reference into these Terms of Service.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">9. Product Warranty</h2>
                <p>
                  Skulls Inspired warrants that all products will be free from defects in materials and workmanship for a period of 30 days from the date of delivery. This warranty does not cover damage resulting from misuse, accidents, modifications, or normal wear and tear. Our liability is limited to repair, replacement, or refund of the purchase price at our discretion. All warranties are void if the product has been subjected to misuse, neglect, accident, or improper maintenance.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">10. Limitation of Liability</h2>
                <p>
                  In no event shall Skulls Inspired or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Skulls Inspired's website, even if Skulls Inspired or a Skulls Inspired authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">11. Governing Law</h2>
                <p>
                  These Terms of Service and any separate agreements whereby we provide you services shall be governed by and construed in accordance with the laws of the United States and the State of California, without regard to its conflict of law provisions. Any disputes relating to these Terms of Service shall be subject to the exclusive jurisdiction of the courts of California.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">12. Changes to Terms</h2>
                <p>
                  Skulls Inspired reserves the right, at its sole discretion, to modify or replace these Terms of Service at any time. It is your responsibility to check these Terms of Service periodically for changes. Your continued use of the website following the posting of any changes to these Terms of Service constitutes acceptance of those changes. By using this site, you signify your acceptance of these Terms of Service. If you do not agree to these Terms of Service, please do not use our website.
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TermsOfService;

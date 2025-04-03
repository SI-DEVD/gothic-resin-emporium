
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Separator } from '@/components/ui/separator';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col bg-dark-500">
      <Navbar />
      <div className="pt-24 pb-16 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-dark-400 rounded-lg shadow-lg p-8 border border-gothic-800">
            <h1 className="text-3xl md:text-4xl font-gothic font-bold text-halloween-500 mb-6">Privacy Policy</h1>
            
            <p className="text-sm text-gray-400 mb-4">Last Updated: April 3, 2025</p>
            
            <Separator className="my-6 bg-gothic-800" />
            
            <div className="space-y-6 text-gray-300">
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">1. Introduction</h2>
                <p>
                  Welcome to Skulls Inspired. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website, make a purchase, or interact with us in any way. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">2. Information We Collect</h2>
                <p>
                  We collect personal information that you voluntarily provide to us when you register on our website, express interest in obtaining information about our products, or otherwise contact us. The personal information we collect may include your name, email address, postal address, phone number, and payment information. We may also collect non-personal information about your device, including your browser type, IP address, and operating system, through cookies and similar technologies.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">3. How We Use Your Information</h2>
                <p>
                  We use the information we collect to provide, maintain, and improve our services, including processing transactions, sending order confirmations, and responding to your inquiries. We may use your information to send you marketing communications about our products, special offers, and events that may be of interest to you. We also use your information to analyze how you interact with our website to enhance your user experience and to ensure the security and integrity of our services.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">4. Disclosure of Your Information</h2>
                <p>
                  We may share your information with third-party service providers who perform services on our behalf, such as payment processing, data analysis, email delivery, hosting services, and customer service. These third parties have access to your personal information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose. We may also disclose your information if required by law or in response to valid requests by public authorities.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">5. Security of Your Information</h2>
                <p>
                  We implement appropriate security measures to protect against unauthorized access, alteration, disclosure, or destruction of your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security. We encourage you to take steps to protect your personal information, such as keeping your account password confidential and logging out of your account when using shared computers.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">6. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to track activity on our website and store certain information. Cookies are files with a small amount of data that may include an anonymous unique identifier. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our service.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">7. Your Data Protection Rights</h2>
                <p>
                  Depending on your location, you may have certain rights regarding your personal information, such as the right to access, correct, delete, or restrict processing of your personal data. You may also have the right to data portability and to withdraw consent where we rely on consent to process your information. To exercise these rights, please contact us using the information provided at the end of this policy.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">8. Third-Party Links</h2>
                <p>
                  Our website may contain links to third-party websites that are not operated by us. If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the privacy policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">9. Children's Privacy</h2>
                <p>
                  Our services are not intended for use by children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe that your child has provided us with personal information, please contact us so that we can take necessary actions.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">10. Changes to This Privacy Policy</h2>
                <p>
                  We may update our privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the "Last Updated" date. You are advised to review this privacy policy periodically for any changes. Changes to this privacy policy are effective when they are posted on this page.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">11. International Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than the country in which you reside. These countries may have different data protection laws than your country of residence. By using our services, you consent to the transfer of your information to any country in which we, our affiliates, or service providers maintain facilities.
                </p>
              </section>
              
              <section>
                <h2 className="text-xl font-gothic font-bold text-gothic-200 mb-3">12. Contact Us</h2>
                <p>
                  If you have any questions or concerns about this privacy policy or our practices with regard to your personal information, please contact us at privacy@skullsinspired.com. We will make every effort to respond to your inquiry in a timely manner and address your concerns appropriately.
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

export default PrivacyPolicy;

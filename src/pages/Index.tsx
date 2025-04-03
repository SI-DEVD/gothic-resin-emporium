
import React, { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ProductCategory from '@/components/ProductCategory';
import About from '@/components/About';
import Newsletter from '@/components/Newsletter';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import BlogSection from '@/components/BlogSection';
import { useToast } from '@/components/ui/use-toast';
import { BlogPost } from '@/components/BlogCard';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductsData {
  cabinetKnobs: Product[];
  earrings: Product[];
  fanPulls: Product[];
  keychains: Product[];
  necklaces: Product[];
  valveCaps: Product[];
}

const Index = () => {
  const [productsData, setProductsData] = useState<ProductsData | null>(null);
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [productsResponse, blogResponse] = await Promise.all([
          fetch('/data/products.json'),
          fetch('/data/blog-posts.json')
        ]);
        
        if (!productsResponse.ok || !blogResponse.ok) {
          throw new Error('Failed to fetch data');
        }
        
        const productsData = await productsResponse.json();
        const blogData = await blogResponse.json();
        
        setProductsData(productsData);
        setBlogPosts(blogData.posts.slice(0, 3)); // Get 3 most recent posts
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load data. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchData();

    // Add spider web SVGs to corners
    const webSVG = `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" class="w-full h-full text-gothic-700">
      <path fill="currentColor" d="M0,100 L100,0 M20,100 L100,20 M40,100 L100,40 M60,100 L100,60 M80,100 L100,80 M100,100 L100,100 M100,80 L80,100 M100,60 L60,100 M100,40 L40,100 M100,20 L20,100 M100,0 L0,100" stroke="currentColor" stroke-width="1"/>
      <path fill="currentColor" d="M100,0 L200,100 M100,20 L180,100 M100,40 L160,100 M100,60 L140,100 M100,80 L120,100 M100,100 L100,100 M120,100 L100,120 M140,100 L100,140 M160,100 L100,160 M180,100 L100,180 M200,100 L100,200" stroke="currentColor" stroke-width="1"/>
      <circle cx="100" cy="100" r="5" fill="currentColor" />
    </svg>`;

    document.querySelectorAll('.web-corner').forEach(corner => {
      corner.innerHTML = webSVG;
    });

    // Welcome toast
    setTimeout(() => {
      toast({
        title: "Welcome to Skulls Inspired",
        description: "Explore our handcrafted skull-themed jewelry and accessories.",
        className: "bg-dark-400 border-gothic-600",
      });
    }, 2000);
  }, [toast]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-500">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-gothic-400 border-t-halloween-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-gothic text-gothic-200">Loading the darkness...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative">
      <Navbar />
      <Hero />
      
      {productsData && (
        <>
          <div id="shop" className="py-16 bg-gothic-gradient relative">
            <div className="absolute inset-0 bg-dark-500/80"></div>
            <div className="container mx-auto px-4 relative z-10">
              <h2 className="section-title">Our Haunting Collection</h2>
              <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
                Discover our premium selection of handcrafted skull-themed accessories and jewelry. Each piece is designed with meticulous attention to detail.
              </p>
            </div>
          </div>
          
          <ProductCategory
            id="cabinet-knobs"
            title="Skull Cabinet Knobs"
            subtitle="Transform your furniture with our haunting skull cabinet knobs and drawer pulls."
            products={productsData.cabinetKnobs.slice(0, 3)}
            viewAllLink="/cabinet-knobs"
          />
          
          <ProductCategory
            id="earrings"
            title="Skull Earrings"
            subtitle="Make a statement with our unique skull earrings, perfect for any gothic outfit."
            products={productsData.earrings.slice(0, 3)}
            viewAllLink="/earrings"
          />
          
          <ProductCategory
            id="fan-pulls"
            title="Skull Fan Pulls"
            subtitle="Add a touch of gothic elegance to your ceiling fans with our detailed skull pulls."
            products={productsData.fanPulls.slice(0, 3)}
            viewAllLink="/fan-pulls"
          />
          
          <ProductCategory
            id="keychains"
            title="Skull Keychains"
            subtitle="Carry a piece of dark artistry with you with our skull-themed keychains."
            products={productsData.keychains.slice(0, 3)}
            viewAllLink="/keychains"
          />
          
          <ProductCategory
            id="necklaces"
            title="Skull Necklaces"
            subtitle="Our skull pendant necklaces combine elegance with a gothic aesthetic."
            products={productsData.necklaces.slice(0, 3)}
            viewAllLink="/necklaces"
          />
          
          <ProductCategory
            id="valve-caps"
            title="Skull Valve Stem Caps"
            subtitle="Give your vehicle a unique touch with our skull-themed tire valve caps."
            products={productsData.valveCaps.slice(0, 3)}
            viewAllLink="/valve-caps"
          />
        </>
      )}
      
      {blogPosts.length > 0 && (
        <BlogSection posts={blogPosts} />
      )}
      
      <Testimonials />
      <About />
      <Newsletter />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Index;

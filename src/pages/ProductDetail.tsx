import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, StarHalf, ShoppingCart, Heart, Facebook, Twitter, Share2, Pin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import RelatedProducts from '@/components/RelatedProducts';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
}

const ProductDetail = () => {
  const { id, category } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();
  const navigate = useNavigate();
  const [inventory] = useState(Math.floor(Math.random() * 20) + 5); // Random inventory between 5-25
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch product data');
        }
        
        const data = await response.json();
        
        // Combine all products from different categories
        const allProducts = [
          ...data.cabinetKnobs,
          ...data.earrings,
          ...data.fanPulls,
          ...data.keychains,
          ...data.necklaces,
          ...data.valveCaps
        ];
        
        // Find the product with the matching ID
        const foundProduct = allProducts.find(p => p.id === parseInt(id as string));
        
        if (foundProduct) {
          // Add a random rating if not present
          if (!foundProduct.rating) {
            foundProduct.rating = parseFloat((3.5 + Math.random() * 1.5).toFixed(1));
          }
          setProduct(foundProduct);
          
          // Get related products (same category but not the current product)
          // Find which category the product belongs to
          let productCategory = '';
          for (const cat in data) {
            if (data[cat].some((p: Product) => p.id === parseInt(id as string))) {
              productCategory = cat;
              break;
            }
          }
          
          // Get products from the same category, but not the current one
          if (productCategory) {
            const related = data[productCategory]
              .filter((p: Product) => p.id !== parseInt(id as string))
              .slice(0, 4); // Limit to 4 related products
            
            // Add ratings to related products if not present
            const relatedWithRatings = related.map((p: Product) => ({
              ...p,
              rating: p.rating || parseFloat((3.5 + Math.random() * 1.5).toFixed(1))
            }));
            
            setRelatedProducts(relatedWithRatings);
          }
        } else {
          navigate('/not-found');
        }
        
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product:', error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load product. Please try again later.",
          variant: "destructive",
        });
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id, navigate, toast]);
  
  const handleQuantityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setQuantity(parseInt(e.target.value));
  };
  
  const addToCart = () => {
    toast({
      title: "Added to cart",
      description: `${quantity} x ${product?.name} added to your cart.`,
    });
  };
  
  const renderRatingStars = (rating: number = 4.5) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`star-${i}`} className="h-4 w-4 fill-halloween-500 text-halloween-500" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half-star" className="h-4 w-4 fill-halloween-500 text-halloween-500" />);
    }
    
    return stars;
  };
  
  const shareOnSocialMedia = (platform: string) => {
    const currentUrl = window.location.href;
    const productName = product?.name || '';
    let shareUrl = '';

    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`Check out this ${productName}!`)}&url=${encodeURIComponent(currentUrl)}`;
        break;
      case 'pinterest':
        shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&media=${encodeURIComponent(product?.image || '')}&description=${encodeURIComponent(productName)}`;
        break;
      case 'tiktok':
        // TikTok doesn't have a direct share URL like others, but we can redirect to TikTok
        // Most commonly people would copy the link and paste in TikTok manually
        toast({
          title: "Share on TikTok",
          description: "Copy this link and paste it in your TikTok post",
        });
        navigator.clipboard.writeText(currentUrl);
        return;
    }

    window.open(shareUrl, '_blank', 'width=600,height=400');
  };
  
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-500">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-gothic-400 border-t-halloween-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-gothic text-gothic-200">Loading product...</h2>
        </div>
      </div>
    );
  }
  
  if (!product) {
    return null;
  }

  // Mock product details
  const productFeatures = [
    "Hand-crafted resin skull design",
    "High quality metal hardware",
    "Durable and eye-catching",
    "Easy installation included",
    "Perfect for gothic or Halloween themed decor"
  ];
  
  // Mock product description
  const productDescription = "Add a touch of gothic elegance to your furniture with our signature Gothic Skull Cabinet Knob. Each knob is meticulously handcrafted from high-quality resin and finished in a deep, rich black that complements any dark aesthetic. The detailed skull design brings character and edge to cabinets, drawers, or any furniture piece needing a macabre upgrade. The sturdy metal hardware ensures these knobs are as functional as they are decorative. Each piece is unique with slight variations that add to its artisanal charm.";
  
  // Mock reviews
  const reviews = [
    { id: 1, author: "Emily Nightshade", rating: 5, date: "March 15, 2025", review: "Absolutely love these cabinet knobs! They're even more detailed than the pictures show, and they've completely transformed my boring kitchen cabinets into something special. Great quality too." },
    { id: 2, author: "Victor Graves", rating: 4, date: "February 28, 2025", review: "Good quality and nice weight to them. The installation was straightforward, though the screws could be a bit longer for thicker drawers. Overall very pleased with my purchase." },
    { id: 3, author: "Raven Darkheart", rating: 5, date: "February 12, 2025", review: "These knobs are PERFECT for my gothic vanity makeover. The detail in the skulls is impressive and the black finish is very rich looking. Fast shipping too!" }
  ];
  
  // Additional product images (using the main image for mock purposes)
  const productImages = [
    product.image,
    product.image,
    product.image,
  ];

  return (
    <div className="min-h-screen bg-dark-500 text-gothic-200">
      <Navbar />
      
      <div className="container mx-auto px-4 pt-32 pb-16">
        {/* Breadcrumb */}
        <nav className="mb-8 flex text-sm">
          <a href="/" className="text-gothic-400 hover:text-halloween-500">Home</a>
          <span className="mx-2 text-gothic-600">/</span>
          <a href={`/${category || 'shop'}`} className="text-gothic-400 hover:text-halloween-500">{category ? category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ') : 'Shop'}</a>
          <span className="mx-2 text-gothic-600">/</span>
          <span className="text-gothic-200">{product.name}</span>
        </nav>
        
        {/* Product Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Images - Left Side */}
          <div>
            <div className="bg-dark-400 rounded-lg overflow-hidden mb-4">
              <Carousel className="w-full">
                <CarouselContent>
                  {productImages.map((img, index) => (
                    <CarouselItem key={index}>
                      <div className="p-1">
                        <img 
                          src={img} 
                          alt={`${product.name} view ${index + 1}`} 
                          className="w-full h-[400px] object-cover object-center rounded"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white" />
                <CarouselNext className="right-2 bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white" />
              </Carousel>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {productImages.map((img, index) => (
                <div key={index} className="bg-dark-400 rounded-lg overflow-hidden cursor-pointer hover:opacity-80 transition-opacity">
                  <img 
                    src={img} 
                    alt={`${product.name} thumbnail ${index + 1}`} 
                    className="w-full h-24 object-cover object-center"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Product Details - Right Side */}
          <div>
            <div className="flex flex-wrap items-center mb-2">
              {product.isNew && <Badge className="mr-2 bg-halloween-500">New</Badge>}
              {product.isBestSeller && <Badge className="mr-2 bg-gothic-600">Best Seller</Badge>}
            </div>
            
            <h1 className="text-3xl font-gothic font-bold mb-4 text-gothic-100">{product.name}</h1>
            
            <div className="flex items-center mb-4">
              <div className="flex mr-2">
                {renderRatingStars(product.rating)}
              </div>
              <span className="text-sm text-gray-400 mr-4">{product.rating?.toFixed(1) || '4.5'}</span>
              <span className="text-sm text-gothic-400">(16 reviews)</span>
            </div>
            
            <p className="text-2xl font-bold text-halloween-500 mb-4">${product.price.toFixed(2)}</p>
            
            <div className="flex items-center mb-6">
              <span className={inventory > 10 ? "text-green-500" : inventory > 5 ? "text-yellow-500" : "text-red-500"}>
                {inventory > 10 ? "In Stock" : inventory > 0 ? `Only ${inventory} left` : "Out of Stock"}
              </span>
            </div>
            
            <ul className="space-y-2 mb-6">
              {productFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-halloween-500 mr-2">•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex items-center gap-4 mb-8">
              <select 
                value={quantity} 
                onChange={handleQuantityChange}
                className="bg-dark-400 border border-gothic-600 rounded-md px-4 py-2 text-gothic-200 focus:ring-1 focus:ring-halloween-500 focus:outline-none"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
              
              <Button 
                onClick={addToCart} 
                className="btn-primary flex-1 flex items-center justify-center gap-2"
              >
                <ShoppingCart className="h-4 w-4" />
                Add to Cart
              </Button>
              
              <Button variant="outline" size="icon" className="bg-dark-300/80 border-gothic-400 text-gothic-200 hover:text-white">
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Social Media Sharing */}
            <div className="mb-8">
              <p className="text-gothic-300 mb-2">Share this product:</p>
              <div className="flex gap-2">
                <Button 
                  onClick={() => shareOnSocialMedia('facebook')} 
                  variant="outline" 
                  size="icon" 
                  className="bg-dark-300/80 border-gothic-400 text-blue-500 hover:text-blue-400"
                >
                  <Facebook className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => shareOnSocialMedia('twitter')} 
                  variant="outline" 
                  size="icon" 
                  className="bg-dark-300/80 border-gothic-400 text-sky-500 hover:text-sky-400"
                >
                  <Twitter className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => shareOnSocialMedia('pinterest')} 
                  variant="outline" 
                  size="icon" 
                  className="bg-dark-300/80 border-gothic-400 text-red-500 hover:text-red-400"
                >
                  <Pin className="h-5 w-5" />
                </Button>
                <Button 
                  onClick={() => shareOnSocialMedia('tiktok')} 
                  variant="outline" 
                  size="icon" 
                  className="bg-dark-300/80 border-gothic-400 text-gothic-200 hover:text-white"
                >
                  <Share2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Product Description */}
        <div className="mt-16">
          <h2 className="text-2xl font-gothic font-bold mb-4 text-gothic-100">Product Description</h2>
          <Separator className="mb-6 bg-gothic-800" />
          <p className="text-gothic-300 leading-relaxed">{productDescription}</p>
        </div>
        
        {/* Reviews */}
        <div className="mt-16">
          <h2 className="text-2xl font-gothic font-bold mb-4 text-gothic-100">Customer Reviews</h2>
          <Separator className="mb-6 bg-gothic-800" />
          
          <div className="space-y-8">
            {reviews.map(review => (
              <div key={review.id} className="bg-dark-400 rounded-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-gothic-100">{review.author}</h3>
                    <div className="flex mt-1">
                      {Array(5).fill(0).map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-4 w-4 ${i < review.rating ? "fill-halloween-500 text-halloween-500" : "text-gothic-600"}`} 
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-sm text-gothic-400">{review.date}</span>
                </div>
                <p className="text-gothic-300">{review.review}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-gothic font-bold mb-4 text-gothic-100">Related Products</h2>
          <Separator className="mb-6 bg-gothic-800" />
          
          {relatedProducts.length > 0 ? (
            <RelatedProducts products={relatedProducts} category={category || ''} />
          ) : (
            <p className="text-gothic-400">No related products found.</p>
          )}
        </div>
      </div>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProductDetail;

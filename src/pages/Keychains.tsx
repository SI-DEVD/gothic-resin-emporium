
import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import CategoryPage from '@/components/CategoryPage';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
}

const Keychains = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products data');
        }
        const data = await response.json();
        
        // Add random ratings to products
        const productsWithRatings = data.keychains.map((product: Product) => ({
          ...product,
          rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1))
        }));
        
        setProducts(productsWithRatings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load keychain products. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchProducts();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-500">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-gothic-400 border-t-halloween-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-gothic text-gothic-200">Loading keychains...</h2>
        </div>
      </div>
    );
  }

  return <CategoryPage title="Skull Keychains" products={products} />;
};

export default Keychains;

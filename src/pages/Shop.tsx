
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

interface ProductsData {
  cabinetKnobs: Product[];
  earrings: Product[];
  fanPulls: Product[];
  keychains: Product[];
  necklaces: Product[];
  valveCaps: Product[];
}

const Shop = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/data/products.json');
        if (!response.ok) {
          throw new Error('Failed to fetch products data');
        }
        const data: ProductsData = await response.json();
        
        // Combine all product categories
        const products = [
          ...data.cabinetKnobs,
          ...data.earrings,
          ...data.fanPulls,
          ...data.keychains,
          ...data.necklaces,
          ...data.valveCaps
        ];
        
        // Assign random ratings
        const productsWithRatings = products.map(product => ({
          ...product,
          rating: parseFloat((3.5 + Math.random() * 1.5).toFixed(1))
        }));
        
        setAllProducts(productsWithRatings);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load products. Please try again later.",
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
          <h2 className="text-xl font-gothic text-gothic-200">Loading products...</h2>
        </div>
      </div>
    );
  }

  return <CategoryPage title="All Products" products={allProducts} />;
};

export default Shop;

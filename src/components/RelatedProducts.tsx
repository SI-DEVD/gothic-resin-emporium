
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
}

interface RelatedProductsProps {
  products: Product[];
  category: string;
}

const RelatedProducts: React.FC<RelatedProductsProps> = ({ products, category }) => {
  // Get category slug from category string
  const getCategorySlug = () => {
    return category.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent className="-ml-4">
          {products.map((product) => (
            <CarouselItem key={product.id} className="pl-4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <div className="card group h-full">
                <div className="relative overflow-hidden">
                  {product.isNew && (
                    <Badge className="product-badge">New</Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="product-badge bg-gothic-600">Best Seller</Badge>
                  )}
                  <Link to={`/product/${getCategorySlug()}/${product.id}`}>
                    <img 
                      src={product.image} 
                      alt={product.name} 
                      className="w-full h-48 object-cover object-center transition-all duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                      <div className="flex gap-2 w-full">
                        <Button className="w-full btn-primary">View Details</Button>
                        <Button variant="outline" size="icon" className="bg-dark-300/80 border-gothic-400 text-gothic-200 hover:text-white">
                          <Heart className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </div>
                <div className="p-4">
                  <Link to={`/product/${getCategorySlug()}/${product.id}`}>
                    <h3 className="text-lg font-gothic font-bold mb-2 text-gothic-200 hover:text-halloween-500 transition-colors truncate">{product.name}</h3>
                  </Link>
                  <p className="text-halloween-500 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2 bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white" />
        <CarouselNext className="right-2 bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white" />
      </Carousel>
    </div>
  );
};

export default RelatedProducts;

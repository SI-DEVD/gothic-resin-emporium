
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
}

interface ProductCategoryProps {
  id: string;
  title: string;
  subtitle: string;
  products: Product[];
  viewAllLink: string;
}

const ProductCategory: React.FC<ProductCategoryProps> = ({ id, title, subtitle, products, viewAllLink }) => {
  // Extract category slug from title
  const getCategorySlug = () => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  const categorySlug = getCategorySlug();

  return (
    <section id={id} className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">
          {title}
        </h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          {subtitle}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="card group">
              <div className="relative overflow-hidden">
                {product.isNew && (
                  <Badge className="product-badge">New</Badge>
                )}
                {product.isBestSeller && (
                  <Badge className="product-badge bg-gothic-600">Best Seller</Badge>
                )}
                <Link to={`/product/${categorySlug}/${product.id}`}>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-110"
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
              <div className="p-6">
                <Link to={`/product/${categorySlug}/${product.id}`}>
                  <h3 className="text-xl font-gothic font-bold mb-2 text-gothic-200 hover:text-halloween-500 transition-colors">{product.name}</h3>
                </Link>
                <p className="text-halloween-500 font-bold">${product.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to={viewAllLink} className="btn-outline">
            View All {title}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;

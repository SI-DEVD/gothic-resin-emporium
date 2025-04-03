
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Star, StarHalf } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { 
  Pagination, 
  PaginationContent, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from '@/components/ui/pagination';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  isNew?: boolean;
  isBestSeller?: boolean;
  rating?: number;
}

interface CategoryPageProps {
  title: string;
  products: Product[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ title, products }) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const productsPerPage = 12;
  
  // Calculate pagination values
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);
  
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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    // Scroll to top when page changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Generate array of page numbers to display
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxPagesToShow = 5;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total pages is less than max to show
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      // Calculate range of pages to show
      let startPage = Math.max(1, currentPage - 2);
      let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);
      
      // Adjust if we're near the end
      if (endPage - startPage < maxPagesToShow - 1) {
        startPage = Math.max(1, endPage - maxPagesToShow + 1);
      }
      
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
    }
    
    return pageNumbers;
  };

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="section-title mb-16">{title}</h1>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProducts.map((product) => (
              <div key={product.id} className="card group">
                <div className="relative overflow-hidden">
                  {product.isNew && (
                    <Badge className="product-badge">New</Badge>
                  )}
                  {product.isBestSeller && (
                    <Badge className="product-badge bg-gothic-600">Best Seller</Badge>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-64 object-cover object-center transition-all duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4">
                    <div className="flex gap-2 w-full">
                      <Button className="w-full btn-primary">Add to Cart</Button>
                      <Button variant="outline" size="icon" className="bg-dark-300/80 border-gothic-400 text-gothic-200 hover:text-white">
                        <Heart className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-gothic font-bold mb-2 text-gothic-200">{product.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex mr-2">
                      {renderRatingStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-400">{product.rating?.toFixed(1) || '4.5'}</span>
                  </div>
                  <p className="text-halloween-500 font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          
          {totalPages > 1 && (
            <Pagination className="mt-12">
              <PaginationContent>
                {currentPage > 1 && (
                  <PaginationItem>
                    <PaginationPrevious 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage - 1);
                      }}
                      className="bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white"
                    />
                  </PaginationItem>
                )}
                
                {getPageNumbers().map((pageNumber) => (
                  <PaginationItem key={pageNumber}>
                    <PaginationLink 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(pageNumber);
                      }}
                      isActive={currentPage === pageNumber}
                      className={currentPage === pageNumber 
                        ? "bg-halloween-500 text-white hover:bg-halloween-600" 
                        : "bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white"
                      }
                    >
                      {pageNumber}
                    </PaginationLink>
                  </PaginationItem>
                ))}
                
                {currentPage < totalPages && (
                  <PaginationItem>
                    <PaginationNext 
                      href="#" 
                      onClick={(e) => {
                        e.preventDefault();
                        handlePageChange(currentPage + 1);
                      }}
                      className="bg-dark-300 text-gothic-200 hover:bg-dark-400 hover:text-white"
                    />
                  </PaginationItem>
                )}
              </PaginationContent>
            </Pagination>
          )}
        </div>
      </div>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default CategoryPage;


import React, { useEffect, useState } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import BlogCard, { BlogPost } from '@/components/BlogCard';

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/data/blog-posts.json');
        if (!response.ok) {
          throw new Error('Failed to fetch blog posts');
        }
        const data = await response.json();
        setPosts(data.posts);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
        toast({
          title: "Error",
          description: "Failed to load blog posts. Please try again later.",
          variant: "destructive",
        });
      }
    };

    fetchPosts();
  }, [toast]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-dark-500">
        <div className="text-center">
          <div className="inline-block w-16 h-16 border-4 border-gothic-400 border-t-halloween-500 rounded-full animate-spin mb-4"></div>
          <h2 className="text-xl font-gothic text-gothic-200">Loading blog posts...</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="section-title mb-16">Blog</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
      
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Blog;

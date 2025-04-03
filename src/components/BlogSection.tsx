
import React from 'react';
import { Link } from 'react-router-dom';
import BlogCard, { BlogPost } from './BlogCard';

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection: React.FC<BlogSectionProps> = ({ posts }) => {
  return (
    <section id="blog" className="py-20 relative">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Latest from Our Blog</h2>
        <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
          Discover skull-themed insights, tips, and inspirations from our creative team.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/blog" className="btn-outline">
            View All Blog Posts
          </Link>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;

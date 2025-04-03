
import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar } from 'lucide-react';

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  slug: string;
}

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard: React.FC<BlogCardProps> = ({ post }) => {
  return (
    <div className="card group overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={post.coverImage} 
          alt={post.title}
          className="w-full h-full object-cover object-center transition-all duration-500 group-hover:scale-110"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3 text-sm text-gray-400">
          <Calendar className="h-4 w-4" />
          <span>{post.date}</span>
        </div>
        <h3 className="text-xl font-gothic font-bold mb-2 text-gothic-200">
          <Link to={`/blog/${post.slug}`} className="hover:text-gothic-400 transition-colors">
            {post.title}
          </Link>
        </h3>
        <p className="text-gray-300 mb-4 line-clamp-2">{post.excerpt}</p>
        <div className="flex justify-between items-center">
          <span className="text-sm text-gothic-400">{post.author}</span>
          <Link to={`/blog/${post.slug}`} className="text-halloween-500 hover:text-halloween-600 font-medium transition-colors">
            Read More →
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

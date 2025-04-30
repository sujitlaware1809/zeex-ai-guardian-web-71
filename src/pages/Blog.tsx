
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link } from 'react-router-dom';

// Mock blog data
const blogPosts = [
  {
    id: 'ai-advancements',
    title: 'AI Advancements in Modern Surveillance',
    excerpt: 'Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes.',
    date: 'April 15, 2025',
    image: 'https://images.unsplash.com/photo-1488229297570-58520851e868',
    category: 'Technology'
  },
  {
    id: 'privacy-security',
    title: 'Balancing Privacy with Security in AI Surveillance',
    excerpt: 'How modern AI-powered security systems protect privacy while enhancing safety measures.',
    date: 'April 8, 2025',
    image: 'https://images.unsplash.com/photo-1563790617029-80a94f39b35e',
    category: 'Privacy'
  },
  {
    id: 'future-trends',
    title: '5 Future Trends in AI Security for 2025',
    excerpt: 'Discover emerging trends in AI security technology and how they will shape the future of surveillance.',
    date: 'April 1, 2025',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1',
    category: 'Trends'
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition: Myths and Realities',
    excerpt: 'Debunking common myths about facial recognition technology and explaining how it actually works.',
    date: 'March 25, 2025',
    image: 'https://images.unsplash.com/photo-1535957998253-26ae1ef29506',
    category: 'Technology'
  },
  {
    id: 'smart-home',
    title: 'Integrating AI Security into Your Smart Home',
    excerpt: 'A comprehensive guide on how to enhance your smart home with AI security solutions.',
    date: 'March 18, 2025',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827',
    category: 'Residential'
  },
  {
    id: 'case-study',
    title: 'Case Study: How ZeexAI Protected a Major Retail Chain',
    excerpt: 'An in-depth look at how our AI surveillance solutions reduced theft by 65% for a national retail company.',
    date: 'March 10, 2025',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8',
    category: 'Case Study'
  }
];

const Blog = () => {
  return (
    <Layout>
      <PageHeader 
        title="Blog & Insights"
        subtitle="Stay updated with the latest in AI security technology and industry trends"
        backgroundImage="https://images.unsplash.com/photo-1432821596592-e2c18b78144f"
      />
      
      <section className="py-16">
        <div className="container-default">
          {/* Blog filter (can be expanded later) */}
          <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-zeex-800">Latest Articles</h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-zeex-600 text-white rounded-md">All</button>
              <button className="px-4 py-2 hover:bg-zeex-50 rounded-md">Technology</button>
              <button className="px-4 py-2 hover:bg-zeex-50 rounded-md">Trends</button>
              <button className="px-4 py-2 hover:bg-zeex-50 rounded-md">Case Studies</button>
            </div>
          </div>
          
          {/* Blog grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map(post => (
              <div key={post.id} className="blog-card">
                <Link to={`/blog/${post.id}`}>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-zeex-500 font-medium">{post.date}</span>
                      <span className="text-xs bg-zeex-50 text-zeex-600 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-zeex-800">{post.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="text-zeex-600 font-medium flex items-center">
                      Read more
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                        <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-12">
            <div className="flex items-center space-x-1">
              <button className="px-4 py-2 border border-zeex-200 rounded-md text-zeex-700 hover:bg-zeex-50">
                Previous
              </button>
              <button className="px-4 py-2 bg-zeex-600 text-white rounded-md">1</button>
              <button className="px-4 py-2 border border-zeex-200 rounded-md text-zeex-700 hover:bg-zeex-50">2</button>
              <button className="px-4 py-2 border border-zeex-200 rounded-md text-zeex-700 hover:bg-zeex-50">3</button>
              <button className="px-4 py-2 border border-zeex-200 rounded-md text-zeex-700 hover:bg-zeex-50">
                Next
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-zeex-50 py-16">
        <div className="container-default">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4 text-zeex-800">Subscribe to Our Newsletter</h2>
            <p className="text-gray-600 mb-6">
              Stay updated with the latest insights in AI security, delivered straight to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-md border focus:outline-none focus:ring-2 focus:ring-zeex-500"
              />
              <button type="submit" className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;

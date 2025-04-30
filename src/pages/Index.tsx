
import React from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import SolutionsPreview from '@/components/home/SolutionsPreview';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <SolutionsPreview />
      
      {/* Call to Action Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to enhance your security with AI?</h2>
            <p className="text-xl mb-8 text-white/80">
              Get started with Zeex AI today and experience the next generation of surveillance technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
                Request a Demo
              </Link>
              <Link to="/about" className="btn-secondary text-white border-white hover:bg-white/10">
                Learn More About Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-20 bg-zeex-50">
        <div className="container-default">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-zeex-800 mb-2">Latest Insights</h2>
              <p className="text-gray-600">Stay updated with the latest in AI security technology</p>
            </div>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-zeex-600 font-medium mt-4 md:mt-0"
            >
              View all blog posts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Post 1 */}
            <div className="blog-card">
              <Link to="/blog/ai-advancements">
                <img 
                  src="https://images.unsplash.com/photo-1488229297570-58520851e868" 
                  alt="AI Advancements" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-zeex-500 font-medium mb-2">April 15, 2025</p>
                  <h3 className="text-xl font-semibold mb-3 text-zeex-800">AI Advancements in Modern Surveillance</h3>
                  <p className="text-gray-600 line-clamp-3">
                    Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes.
                  </p>
                  <div className="mt-4 text-zeex-600 font-medium">Read more</div>
                </div>
              </Link>
            </div>

            {/* Blog Post 2 */}
            <div className="blog-card">
              <Link to="/blog/privacy-security">
                <img 
                  src="https://images.unsplash.com/photo-1563790617029-80a94f39b35e" 
                  alt="Privacy and Security" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-zeex-500 font-medium mb-2">April 8, 2025</p>
                  <h3 className="text-xl font-semibold mb-3 text-zeex-800">Balancing Privacy with Security in AI Surveillance</h3>
                  <p className="text-gray-600 line-clamp-3">
                    How modern AI-powered security systems protect privacy while enhancing safety measures.
                  </p>
                  <div className="mt-4 text-zeex-600 font-medium">Read more</div>
                </div>
              </Link>
            </div>

            {/* Blog Post 3 */}
            <div className="blog-card">
              <Link to="/blog/future-trends">
                <img 
                  src="https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1" 
                  alt="Future Trends" 
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <p className="text-sm text-zeex-500 font-medium mb-2">April 1, 2025</p>
                  <h3 className="text-xl font-semibold mb-3 text-zeex-800">5 Future Trends in AI Security for 2025</h3>
                  <p className="text-gray-600 line-clamp-3">
                    Discover emerging trends in AI security technology and how they will shape the future of surveillance.
                  </p>
                  <div className="mt-4 text-zeex-600 font-medium">Read more</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;

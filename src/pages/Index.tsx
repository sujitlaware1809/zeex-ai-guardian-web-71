import React, { useEffect, lazy, Suspense, useState, useCallback } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Remove motion imports and use more efficient IntersectionObserver directly
const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const setObserverRef = useCallback((node: HTMLDivElement | null) => {
    if (node !== null) {
      setRef(node);
    }
  }, []);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsInView(entry.isIntersecting);
      }, { threshold: 0.1, rootMargin: '200px 0px', ...options });
      
      observer.observe(ref);
      
      return () => {
        if (ref) observer.unobserve(ref);
      };
    }
  }, [ref, options]);

  return [setObserverRef as (node: HTMLDivElement | null) => void, isInView];
};

// Use dynamic import with prefetch hint
const SolutionsPreview = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "solutions-preview" */ 
  '@/components/home/SolutionsPreview'
));

// Memoized blog post component 
interface BlogPost {
  link: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

const BlogPostCard: React.FC<{ post: BlogPost }> = React.memo(({ post }) => (
  <div className="group">
    <Link to={post.link} className="block h-full">
      <div className="overflow-hidden rounded-t-2xl">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
          decoding="async"
          width={500}
          height={300}
        />
      </div>
      <div className="p-6 bg-white rounded-b-2xl border border-gray-100 transition-all duration-300 group-hover:shadow-md">
        <p className="text-sm text-blue-600 font-medium mb-2">{post.date}</p>
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
          {post.title}
        </h3>
        <p className="text-gray-600 line-clamp-3">
          {post.description}
        </p>
        <div className="mt-4 text-blue-600 font-medium flex items-center">
          Read more
          <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </Link>
  </div>
));

// Animation component to reduce code duplication
const FadeInSection = ({ children, delay = 0, className = "" }) => {
  const [setObserverRef, isVisible] = useIntersectionObserver() as [(node: HTMLDivElement | null) => void, boolean];
  
  return (
    <div 
      ref={(node) => setObserverRef(node)}
      className={`transition-all duration-700 ${className} ${isVisible 
        ? 'opacity-100 translate-y-0' 
        : 'opacity-0 translate-y-8'}`}
      style={{ 
        transitionDelay: `${delay}ms`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

const Index = () => {
  // Supported by logos data - preloaded as constants
  const supportedBy = [
    {
      name: "IIT Madras",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/IIT_Madras_Logo.svg/1200px-IIT_Madras_Logo.svg.png",
      url: "https://www.iitm.ac.in"
    },
    {
      name: "Nirmaan",
      logo: "https://nirmaan.iitm.ac.in/static/media/nirmaan%20logo.8b8518964b925a2a2d57.png",
      url: "https://nirmaan.iitm.ac.in"
    },
    {
      name: "AWS for Startups",
      logo: "https://pages.awscloud.com/rs/112-TZM-766/images/SU%20Programs%402x.png",
      url: "https://aws.amazon.com/startups"
    },
    {
      name: "NVIDIA Inception",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyI3Qf_YPBBh5ZVZxIg3YpbKpQYuIdZfg9A&s",
      url: "https://www.nvidia.com/en-in/startups/"
    }
  ];

  // Blog posts data
  const blogPosts = [
    {
      link: "/blog/ai-advancements",
      image: "https://images.unsplash.com/photo-1488229297570-58520851e868?w=500&auto=format&fit=crop",
      title: "AI Advancements in Modern Surveillance",
      date: "April 15, 2025",
      description: "Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes."
    },
    {
      link: "/blog/privacy-security",
      image: "https://images.unsplash.com/photo-1563790617029-80a94f39b35e?w=500&auto=format&fit=crop",
      title: "Balancing Privacy with Security in AI Surveillance",
      date: "April 8, 2025",
      description: "How modern AI-powered security systems protect privacy while enhancing safety measures."
    },
    {
      link: "/blog/future-trends",
      image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=500&auto=format&fit=crop",
      title: "5 Future Trends in AI Security for 2025",
      date: "April 1, 2025",
      description: "Discover emerging trends in AI security technology and how they will shape the future of surveillance."
    }
  ];

  // Implementation steps - extracted as a constant to improve readability
  const implementationSteps = [
    {
      title: "Discovery Audit",
      description: "Comprehensive system analysis & requirements mapping",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: "Solution Architecture",
      description: "Customized technical design & integration blueprint",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Precision Deployment",
      description: "Hardware/software installation with zero downtime",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
        </svg>
      )
    },
    {
      title: "Validation Testing",
      description: "Rigorous QA & performance optimization",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      )
    },
    {
      title: "Ongoing Excellence",
      description: "Continuous monitoring & proactive support",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  // Connection line reference - improved implementation workflow
  const [lineRef, lineVisible] = useIntersectionObserver();

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Supported By Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-default px-6">
          <FadeInSection className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              Trusted Partnerships
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Supported by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">Industry Leaders</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our technology is recognized and supported by premier institutions and industry leaders.
            </p>
          </FadeInSection>

          <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {supportedBy.map((partner, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100 transform hover:-translate-y-1">
                    <div className="mb-6 w-full h-24 flex items-center justify-center p-4">
                      <img 
                        src={partner.logo} 
                        alt={partner.name} 
                        className="max-h-full max-w-full object-contain transition-all duration-300 group-hover:scale-105"
                        loading="lazy"
                        decoding="async"
                        width={200}
                        height={80}
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {partner.name}
                    </h3>
                  </div>
                </a>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Optimized Lazy-loaded Solutions Preview */}
      <Suspense fallback={
        <div className="min-h-[300px] flex items-center justify-center bg-gray-50 rounded-xl my-12">
          <div className="animate-pulse flex flex-col items-center">
            <div className="h-8 w-8 bg-blue-200 rounded-full mb-4"></div>
            <div className="h-4 bg-blue-200 rounded w-32 mb-2"></div>
            <div className="h-4 bg-blue-200 rounded w-24"></div>
          </div>
        </div>
      }>
        <SolutionsPreview />
      </Suspense>
      
      <Features />
      
      {/* Implementation Workflow Section - Fixed visibility issues */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="container-default px-6">
          <FadeInSection className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4">
              Our Methodology
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-5">
              Precision <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block">Implementation</span> Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A meticulously crafted 5-phase approach ensuring flawless integration of our AI surveillance solutions.
            </p>
          </FadeInSection>

          <div className="relative">
            {/* Animated connecting line - simpler animation */}
            <div 
              ref={lineRef[0]}
              className={`hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 z-0 transition-transform duration-1000 origin-left ${
                lineVisible ? 'scale-x-100' : 'scale-x-0'
              }`}
            ></div>
            
            {/* Progress dots */}
            <div className="hidden lg:flex absolute left-0 right-0 top-1/2 justify-between -mt-1 z-0">
              {[0, 1, 2, 3, 4, 5].map((dot) => (
                <div 
                  key={dot}
                  className={`w-3 h-3 rounded-full ${dot < 5 ? 'bg-blue-600' : 'bg-gray-200'}`}
                ></div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">
              {implementationSteps.map((step, index) => (
                <FadeInSection key={index} delay={index * 150} className="h-full">
                  <div className="flex flex-col items-center h-full group">
                    {/* Connector arrow (desktop only) */}
                    {index < 4 && (
                      <div className="hidden lg:block absolute left-full top-1/2 w-16 h-1 -mt-px overflow-hidden">
                        <div className={`h-full bg-gradient-to-r from-gray-200 to-gray-100 transition-transform duration-700 ${
                          lineVisible ? 'translate-x-0' : '-translate-x-full'
                        }`} style={{ transitionDelay: `${index * 150 + 300}ms` }}>
                          <svg 
                            className="absolute right-0 top-1/2 -mt-2 text-gray-200" 
                            width="16" 
                            height="16" 
                            viewBox="0 0 16 16"
                          >
                            <path 
                              fill="currentColor" 
                              d="M7.293 11.707a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L8 9.586 5.707 7.293a1 1 0 00-1.414 1.414l3 3z"
                            />
                          </svg>
                        </div>
                      </div>
                    )}

                    {/* Gradient step indicator */}
                    <div className="w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg bg-gradient-to-r from-blue-600 to-indigo-600 transform group-hover:scale-110 transition-transform duration-300">
                      {step.icon}
                    </div>
                    
                    {/* Step card - Fixed visibility issues */}
                    <div className="bg-white rounded-xl p-8 border border-gray-100 group-hover:border-blue-100 transition-all duration-300 text-center w-full h-full relative overflow-hidden group-hover:shadow-xl">
                      {/* Hover effect overlay with fixed z-index */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500 z-0"></div>
                      
                      <div className="relative z-10">
                        <span className="inline-block text-xs font-semibold tracking-wider text-blue-600 mb-2">
                          PHASE 0{index + 1}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeInSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action Section - Improved contrast and visibility */}
{/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-64 h-64 rounded-full bg-white opacity-10"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-blue-500 opacity-10"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="container-default text-center relative z-10"
        >
          <div className="max-w-4xl mx-auto">
                  <h2 className="text-5xl font-bold mb-6">Ready to Enhance Your Security?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Our team is ready to help you implement the perfect security solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Request a Consultation
              </Link>
        
            </div>
          </div>
        </motion.div>
      </section>

      {/* Latest Blog Posts Preview - Fixed visibility */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-default px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <FadeInSection>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
              <p className="text-gray-600">Stay updated with the latest in AI security technology</p>
            </FadeInSection>
            <FadeInSection delay={200}>
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 font-medium mt-4 md:mt-0 group"
              >
                View all blog posts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </FadeInSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <FadeInSection key={index} delay={index * 100}>
                <BlogPostCard post={post} />
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

// Use memo to prevent unnecessary re-renders
export default React.memo(Index);
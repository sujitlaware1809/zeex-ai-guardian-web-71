import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Lazy load the heavier components with prefetch and chunk naming
const SolutionsPreview = lazy(() => import(
  /* webpackPrefetch: true */
  /* webpackChunkName: "solutions-preview" */ 
  '@/components/home/SolutionsPreview'
));

// Memoized blog post component to prevent unnecessary re-renders
interface BlogPost {
  link: string;
  image: string;
  title: string;
  date: string;
  description: string;
}

const BlogPostCard = React.memo(({ post }: { post: BlogPost }) => (
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

const Index = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1, // Reduced sensitivity
    triggerOnce: true,
    rootMargin: '200px 0px' // Trigger when 200px from viewport
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Supported by logos data
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

  return (
    <div className="overflow-hidden">
      <Hero />
      
      {/* Supported By Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-default px-6">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            ref={ref}
            className="text-center mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.span 
              variants={fadeInUp}
              className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4"
            >
              Trusted Partnerships
            </motion.span>
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
            >
              Supported by <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Industry Leaders</span>
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-lg text-gray-600 max-w-2xl mx-auto"
            >
              Our technology is recognized and supported by premier institutions and industry leaders.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {supportedBy.map((partner, index) => (
              <motion.a
                key={index}
                variants={fadeInUp}
                href={partner.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group"
                whileHover={{ y: -5 }}
              >
                <div className="bg-white rounded-2xl p-6 h-full flex flex-col items-center border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-100">
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
              </motion.a>
            ))}
          </motion.div>
        </div>
      </section>
 {/* Lazy-loaded Solutions Preview with optimized fallback */}
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
    {/* Implementation Workflow Section */}
{/* Implementation Workflow Section */}
<section className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
  <div className="container-default px-6">
    <motion.div 
      initial="hidden"
      animate={controls}
      variants={staggerContainer}
      className="text-center mb-12"
      style={{ willChange: 'transform, opacity' }}
    >
      <motion.span 
        variants={fadeInUp}
        className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4"
      >
        Our Methodology
      </motion.span>
      <motion.h2 
        variants={fadeInUp}
        className="text-3xl md:text-4xl font-bold text-gray-900 mb-5"
      >
        Precision <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Implementation</span> Process
      </motion.h2>
      <motion.p 
        variants={fadeInUp}
        className="text-lg text-gray-600 max-w-2xl mx-auto"
      >
        A meticulously crafted 5-phase approach ensuring flawless integration of our AI surveillance solutions.
      </motion.p>
    </motion.div>

    <motion.div 
      variants={staggerContainer}
      className="relative"
    >
      {/* Animated connecting line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={inView ? { scaleX: 1 } : {}}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="hidden lg:block absolute left-0 right-0 top-1/2 h-0.5 bg-gray-200 origin-left z-0"
      ></motion.div>
      
      {/* Progress dots */}
      <motion.div 
        initial="hidden"
        animate={controls}
        className="hidden lg:flex absolute left-0 right-0 top-1/2 justify-between -mt-1 z-0"
      >
        {[0, 1, 2, 3, 4, 5].map((dot) => (
          <motion.div 
            key={dot}
            variants={fadeInUp}
            className={`w-3 h-3 rounded-full ${dot < 5 ? 'bg-blue-600' : 'bg-gray-200'}`}
          ></motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10"
      >
        {[
          {
            title: "Discovery Audit",
            description: "Comprehensive system analysis & requirements mapping",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            ),
            color: "from-blue-600 to-indigo-600"
          },
          {
            title: "Solution Architecture",
            description: "Customized technical design & integration blueprint",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            ),
            color: "from-blue-600 to-indigo-600"
          },
          {
            title: "Precision Deployment",
            description: "Hardware/software installation with zero downtime",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            ),
            color: "from-blue-600 to-indigo-600"
          },
          {
            title: "Validation Testing",
            description: "Rigorous QA & performance optimization",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            ),
            color: "from-blue-600 to-indigo-600"
          },
          {
            title: "Ongoing Excellence",
            description: "Continuous monitoring & proactive support",
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            ),
            color: "from-blue-600 to-indigo-600"
          }
        ].map((step, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="group relative"
          >
            {/* Animated connector arrow (desktop only) */}
            {index < 4 && (
              <div className="hidden lg:block absolute left-full top-1/2 w-16 h-1 -mt-px overflow-hidden">
                <motion.div
                  initial={{ x: -60 }}
                  whileInView={{ x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.6 }}
                  className="h-full bg-gradient-to-r from-gray-200 to-gray-100"
                >
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
                </motion.div>
              </div>
            )}

            <div className="flex flex-col items-center h-full">
              {/* Gradient step indicator */}
              <div className={`w-20 h-20 rounded-2xl mb-6 flex items-center justify-center text-white shadow-lg bg-gradient-to-r ${step.color} transform group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              
              {/* Step card */}
              <div className="bg-white rounded-xl p-8 border border-gray-100 group-hover:border-blue-100 transition-all duration-300 text-center w-full h-full relative overflow-hidden group-hover:shadow-xl">
                {/* Hover effect overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
                
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
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <Link 
          to="/implementation" 
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg transition-all duration-300 group"
        >
          <span>Request Implementation Plan</span>
          <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container-default px-6">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold mb-6">
              Ready to enhance your security with AI?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl mb-8 text-blue-100">
              Get started with Zeex AI today and experience the next generation of surveillance technology.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="btn-primary bg-white text-blue-600 hover:bg-blue-50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg px-8 py-3 rounded-lg font-medium"
              >
                Request a Demo
              </Link>
              <Link 
                to="/about" 
                className="btn-secondary text-blue border-blue hover:bg-blue/50 transform hover:-translate-y-1 transition-all duration-300 hover:shadow-lg px-8 py-3 rounded-lg font-medium"
              >
                Learn More About Us
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Latest Blog Posts Preview */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-default px-6">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="flex flex-col md:flex-row justify-between items-center mb-12"
            style={{ willChange: 'transform, opacity' }}
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Insights</h2>
              <p className="text-gray-600">Stay updated with the latest in AI security technology</p>
            </motion.div>
            <motion.div variants={fadeInUp}>
              <Link 
                to="/blog" 
                className="inline-flex items-center text-blue-600 font-medium mt-4 md:mt-0 group"
              >
                View all blog posts
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {blogPosts.map((post, index) => (
              <motion.div key={index} variants={fadeInUp} style={{ willChange: 'transform, opacity' }}>
                <BlogPostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default React.memo(Index);
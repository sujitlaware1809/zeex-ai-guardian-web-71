import React, { useEffect, lazy, Suspense } from 'react';
import Hero from '@/components/home/Hero';
import Features from '@/components/home/Features';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

// Lazy load the heavier components
const SolutionsPreview = lazy(() => import('@/components/home/SolutionsPreview'));

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
    threshold: 0.05, // Reduced sensitivity
    triggerOnce: true,
    rootMargin: '0px 0px -100px 0px' // Trigger when 100px from viewport bottom
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

      <Features />
      
      {/* Lazy-loaded Solutions Preview */}
      <Suspense fallback={<div className="min-h-[500px] flex items-center justify-center">Loading solutions...</div>}>
        <SolutionsPreview />
      </Suspense>
      
      {/* Call to Action Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20 text-white">
        <div className="container-default px-6">
          <motion.div 
            initial="hidden"
            animate={controls}
            variants={staggerContainer}
            className="max-w-4xl mx-auto text-center"
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
              <motion.div key={index} variants={fadeInUp}>
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
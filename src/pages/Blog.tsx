import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, ArrowRight, Mail, Bell } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';

// Mock blog data
const blogPosts = [
  {
    id: 'ai-advancements',
    title: 'AI Advancements in Modern Surveillance',
    excerpt: 'Explore how artificial intelligence is revolutionizing surveillance systems and improving security outcomes.',
    date: 'April 15, 2025',
    image: 'https://plus.unsplash.com/premium_photo-1683121710572-7723bd2e235d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    category: 'Technology'
  },
  {
    id: 'privacy-security',
    title: 'Balancing Privacy with Security in AI Surveillance',
    excerpt: 'How modern AI-powered security systems protect privacy while enhancing safety measures.',
    date: 'April 8, 2025',
    image: 'https://images.unsplash.com/photo-1617772718763-f4ddab89311b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
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

const NewsletterSignup = ({ premium }: { premium?: boolean }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    try {
      const res = await fetch('https://zeex-website-backend-1.onrender.com/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Subscription failed. Try again.');
      }
    } catch {
      setStatus('error');
      setMessage('Subscription failed. Try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={premium ? "flex flex-col w-full items-center" : "flex flex-col sm:flex-row gap-3 items-center mt-12 justify-center"}>
      <div className={premium ? "flex flex-row w-full gap-4" : "flex flex-row w-full gap-2"}>
        <input
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          placeholder="Your email"
          required
          className={
            premium
              ? "flex-1 px-6 py-4 rounded-lg border border-blue-200 text-lg focus:outline-none focus:ring-2 focus:ring-blue-400 bg-white shadow-sm"
              : "border rounded px-4 py-2"
          }
        />
        <button
          type="submit"
          className={
            premium
              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow transition-colors"
              : "bg-blue-600 text-white px-6 py-2 rounded font-semibold"
          }
        >
          Subscribe
        </button>
      </div>
      {status === 'success' && (
        <span className="text-green-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
      {status === 'error' && (
        <span className="text-red-600 mt-4 text-center w-full font-medium">{message}</span>
      )}
    </form>
  );
};

const Blog = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
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
      transition: { 
        duration: 0.6, 
        ease: "easeOut",
        delay: 0.2
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Layout showFooter={false}>
      {/* Hero Section - Matching About Page Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
        {/* Background elements matching About page */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
        </div>
        
        {/* Centered content container with matching animation */}
        <div className="container-default relative z-10 transform translate-y-4 animate-slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6">
              <Shield className="w-4 h-4" /> Latest Insights
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              Blog & <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInDelay">
              Stay updated with the latest in AI security technology, industry trends, and expert perspectives from the ZeexAI team.
            </p>
          </div>
        </div>

        {/* Custom Animations Defined Inline - Matching About page */}
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }

          @keyframes slideUp {
            from { transform: translateY(40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }

          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }

          .animate-slideUp {
            animation: slideUp 1.2s ease-out forwards;
          }

          .animate-fadeInDelay {
            animation: fadeIn 1s ease-out 0.6s forwards;
          }
        `}</style>
      </section>

      {/* Blog Content Section */}
      <motion.section 
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={staggerContainer}
        className="py-16 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="container-default px-6">
          {/* Blog filter */}
          <motion.div 
            variants={staggerContainer}
            className="flex justify-between items-center mb-12 flex-wrap gap-4"
          >
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-bold text-gray-900">Latest Articles</h2>
              <p className="text-gray-600">Discover our latest insights and updates</p>
            </motion.div>
            <motion.div 
              variants={fadeInUp}
              className="flex gap-2 flex-wrap"
            >
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                All
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Technology
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Trends
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Case Studies
              </button>
            </motion.div>
          </motion.div>
          
          {/* Blog grid */}
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {blogPosts.map((post, index) => (
              <motion.div 
                key={post.id}
                variants={fadeInUp}
                className="group overflow-hidden rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <Link to={`/blog/${post.id}`} className="block h-full">
                  <motion.div 
                    className="overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                  >
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                  </motion.div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="text-sm text-blue-600 font-medium">{post.date}</span>
                      <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="text-blue-600 font-medium flex items-center group-hover:underline">
                      Read more
                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Pagination */}
          <motion.div 
            variants={fadeInUp}
            className="flex justify-center mt-12"
          >
            <div className="flex items-center space-x-2">
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
                1
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                2
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                3
              </button>
              <button className="px-4 py-2 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 transition-colors">
                Next
              </button>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <section className="w-full flex justify-center items-center py-14 mt-20">
        <div className="w-full max-w-xl bg-white rounded-2xl shadow-xl flex flex-col md:flex-row items-stretch p-0 overflow-hidden border border-blue-100">
          {/* Left: Icon */}
          <div className="flex flex-col items-center justify-center md:w-1/3 w-full md:min-h-full mb-4 md:mb-0 bg-gradient-to-br from-blue-500/10 to-indigo-400/10">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 shadow-md mt-6 md:mt-0">
              <Mail className="w-7 h-7 text-white" />
            </div>
          </div>
          {/* Right: Content */}
          <div className="flex-1 flex flex-col justify-center px-6 py-8">
            <h2 className="text-2xl font-bold text-blue-900 mb-2 leading-tight">Stay in the Loop</h2>
            <p className="text-blue-800/90 mb-5 text-base">Sign up for our newsletter to get the latest AI security news, insights, and exclusive updates. No spam, ever.</p>
            <NewsletterSignup premium />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Blog;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, ShoppingCart, ArrowRight } from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import OptimizedImage from '@/components/ui/OptimizedImage';

const SolutionsPreview = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
    rootMargin: '200px 0px'
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
        staggerChildren: 0.1
      }
    }
  };

  const solutionCards = [
    {
      id: 1,
      title: "Residential Security",
      description: "Smart home monitoring that integrates with your systems for complete surveillance.",
      icon: <Home className="text-blue-600" size={24} />,
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/solutions/residential",
      colorClass: "group-hover:bg-blue-50",
      textColor: "group-hover:text-blue-300",
      delay: 0.1
    },
    {
      id: 2,
      title: "Commercial Surveillance",
      description: "Comprehensive protection for businesses with real-time monitoring and analytics.",
      icon: <Building className="text-indigo-600" size={24} />,
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/solutions/commercial",
      colorClass: "group-hover:bg-indigo-50",
      textColor: "group-hover:text-indigo-300",
      delay: 0.2
    },
    {
      id: 3,
      title: "Public Safety",
      description: "Smart city solutions that enhance security in public spaces and transportation hubs.",
      icon: <MapPin className="text-purple-600" size={24} />,
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/solutions/public-safety",
      colorClass: "group-hover:bg-purple-50",
      textColor: "group-hover:text-purple-300",
      delay: 0.3
    },
    {
      id: 4,
      title: "Shops & Supermarkets",
      description: "Retail security solutions with theft prevention and customer behavior analytics.",
      icon: <ShoppingCart className="text-green-600" size={24} />,
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=320&fit=crop&auto=format&q=80",
      link: "/solutions/retail",
      colorClass: "group-hover:bg-green-50",
      textColor: "group-hover:text-green-300",
      delay: 0.4
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white" ref={ref}>
      <div className="container-default px-4">
        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mb-20"
        >
          <motion.span 
            variants={fadeInUp}
            className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4"
          >
            Industry Services
          </motion.span>
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-gray-900 mb-5 max-w-3xl mx-auto"
          >
            AI Security for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Every Environment</span>
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Customized surveillance solutions that adapt to your specific security requirements and infrastructure.
          </motion.p>
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {solutionCards.map((card, index) => (
            <motion.div 
              key={card.id}
              variants={fadeInUp}
              custom={card.delay}
              style={{ willChange: 'transform, opacity' }}
            >
              <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 z-10"></div>
                <div className="absolute inset-0 backdrop-blur-sm z-0"></div>
                <OptimizedImage 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  width={400}
                  height={320}
                  priority={index < 2} // Priority loading for first 2 images
                />
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                  <div className={`p-3 bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md ${card.colorClass} transition-colors`}>
                    {card.icon}
                  </div>
                  <h3 className="text-white text-2xl font-semibold mb-3">{card.title}</h3>
                  <p className="text-white/90 mb-6">
                    {card.description}
                  </p>
                  <Link 
                    to={card.link} 
                    className={`inline-flex items-center text-white font-medium ${card.textColor} transition-colors`}
                  >
                    Explore solution
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <Link 
            to="/solutions" 
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            View all solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default React.memo(SolutionsPreview);
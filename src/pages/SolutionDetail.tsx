import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link, useParams } from 'react-router-dom';
import { Home, Building, MapPin, ShoppingCart, ArrowRight, Check, Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi } from 'lucide-react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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

// Solution details data with enhanced design elements
const solutionsDetails = {
  'residential': {
    title: 'Residential Security',
    description: 'Comprehensive AI-powered security solutions designed specifically for homes to protect your family and property.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
    headerImage: 'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff',
    benefits: [
      'Intelligent perimeter protection',
      'Family member recognition',
      'Mobile app control and monitoring',
      'Integration with smart home systems',
      'Customizable alert settings'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Smart Security for Your Home</h2>
      <p class="mb-6">Your home is your sanctuary. Our residential security solutions use advanced artificial intelligence to protect what matters most to you - your family, your home, and your belongings.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our residential systems are designed specifically for home environments, with easy setup, intuitive controls, and seamless integration with your existing smart home ecosystem.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Protection</h3>
      <p class="mb-4">Our residential security solution provides multi-layered protection:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Perimeter Security:</strong> Our AI-powered cameras monitor the exterior of your home, detecting and classifying potential threats before they reach your door.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Entry Point Monitoring:</strong> Intelligent monitoring of doors and windows with advanced motion analytics that can distinguish between normal activity and potential break-ins.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Indoor Security:</strong> Indoor cameras with privacy features that activate only when you're away or during security events.</span></li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Smart Home Integration</h4>
          <p>Works seamlessly with Alexa, Google Home, and other smart home platforms for unified control.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Privacy First</h4>
          <p>Our systems are designed to protect your privacy while providing maximum security.</p>
        </div>
      </div>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
        icon: Shield
      },
      {
        id: 'visual-surveillance-analytics',
        title: 'AI-Visual Surveillance Analytics',
        description: 'Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.',
        icon: Video
      }
    ],
    workflow: [
      {
        title: 'Comprehensive Monitoring',
        description: 'AI-powered cameras continuously monitor your property, analyzing every movement and potential security event.',
        icon: '👁️'
      },
      {
        title: 'Smart Event Classification',
        description: 'Our AI distinguishes between routine activities (mail delivery, family returning home) and suspicious behavior.',
        icon: '🤖'
      },
      {
        title: 'Instant Notifications',
        description: 'When potential threats are detected, you receive immediate alerts on your smartphone with video verification.',
        icon: '📱'
      },
      {
        title: 'Response Options',
        description: 'Respond directly through the app with two-way communication, contact authorities, or dispatch security services.',
        icon: '🛡️'
      }
    ],
    stats: [
      { value: '24/7', label: 'Monitoring' },
      { value: '99.9%', label: 'Accuracy' },
      { value: '2s', label: 'Alert Time' }
    ]
  },
  'commercial': {
    title: 'Commercial Surveillance',
    description: 'Enterprise-grade security solutions designed for businesses of all sizes to protect assets, employees, and customers.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    headerImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    benefits: [
      'Multi-site monitoring and management',
      'Employee access control',
      'Theft prevention and inventory protection',
      'Business intelligence analytics',
      'Regulatory compliance features'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Enterprise Security Reinvented</h2>
      <p class="mb-6">Modern businesses face complex security challenges, from protecting physical assets to securing sensitive areas and ensuring employee safety. Our commercial surveillance solutions leverage artificial intelligence to transform traditional security into an intelligent system that both protects and provides valuable insights.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our scalable platform is designed for businesses of all sizes, from single retail locations to multi-site enterprises with complex security requirements.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Business Protection</h3>
      <p class="mb-4">Our commercial solution addresses multiple security needs:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Exterior Surveillance:</strong> AI-powered perimeter monitoring with advanced object detection and classification.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Access Control:</strong> Facial recognition-based access management that eliminates the need for keycards and creates detailed access logs.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Interior Monitoring:</strong> Smart cameras that can detect unusual behavior, restricted area violations, or safety incidents.</span></li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Loss Prevention</h4>
          <p>Advanced analytics detect suspicious behavior patterns that may indicate theft or fraud.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Employee Safety</h4>
          <p>Monitor for safety incidents and ensure compliance with workplace safety protocols.</p>
        </div>
      </div>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered system continuously monitors your premises for potential security risks before they escalate.',
        icon: Shield
      },
      {
        id: 'data-protection',
        title: 'Smart Data Protection',
        description: 'Secure storage and encryption of all your surveillance data with advanced protection measures.',
        icon: Database
      }
    ],
    workflow: [
      {
        title: 'Multi-layer Surveillance',
        description: 'Comprehensive monitoring of perimeter, entry points, and interior spaces with AI-powered cameras.',
        icon: '📹'
      },
      {
        title: 'Behavior Analysis',
        description: 'AI identifies unusual patterns that may indicate security threats or safety concerns.',
        icon: '🔍'
      },
      {
        title: 'Integrated Alerts',
        description: 'Security teams receive prioritized alerts with contextual information for rapid response.',
        icon: '🚨'
      },
      {
        title: 'Detailed Reporting',
        description: 'Generate compliance reports and security audits with just a few clicks.',
        icon: '📊'
      }
    ],
    stats: [
      { value: '30%', label: 'Reduction in theft' },
      { value: '50%', label: 'Faster response' },
      { value: '24/7', label: 'Protection' }
    ]
  },
  'public-safety': {
    title: 'Public Safety',
    description: 'Advanced surveillance solutions for public spaces that enhance safety while respecting privacy and civil liberties.',
    icon: MapPin,
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
    headerImage: 'https://images.unsplash.com/photo-1580977251946-3f8c48548cf6',
    benefits: [
      'Crowd behavior analysis',
      'Privacy-preserving monitoring',
      'Incident detection and prediction',
      'Emergency response coordination',
      'Scalable deployment options'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Enhancing Public Safety with Responsible AI</h2>
      <p class="mb-6">Public spaces present unique security challenges that require balancing effective surveillance with respect for individual privacy and civil liberties. Our public safety solutions are designed specifically for these environments, with privacy-preserving technology that enhances security without creating a surveillance state.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our systems help identify potential threats before they escalate, enabling proactive security measures and faster emergency response times.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Smart Monitoring for Public Spaces</h3>
      <p class="mb-4">Our public safety solution includes specialized capabilities:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Crowd Analysis:</strong> Monitor crowd density and movement patterns to identify potential safety issues or unusual behavior.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Anomaly Detection:</strong> Identify unusual activities or behaviors that may indicate security threats or safety concerns.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Emergency Situation Recognition:</strong> Automatically detect incidents such as fights, falls, or medical emergencies to enable rapid response.</span></li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Privacy Protection</h4>
          <p>Our systems are designed to focus on behavior patterns rather than individual identification.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Scalable Solutions</h4>
          <p>From small community areas to large city-wide deployments, our systems scale to meet your needs.</p>
        </div>
      </div>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'AI-powered system continuously monitors public spaces for potential security risks and threats.',
        icon: Shield
      },
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Instant notifications with contextual information delivered to your preferred devices.',
        icon: Bell
      }
    ],
    workflow: [
      {
        title: 'Wide-Area Monitoring',
        description: 'AI-powered cameras monitor public spaces, focusing on behavioral patterns rather than individual identities.',
        icon: '🌆'
      },
      {
        title: 'Threat Detection',
        description: 'Advanced algorithms identify potential security incidents in real-time.',
        icon: '⚠️'
      },
      {
        title: 'Alert Coordination',
        description: 'Integrated systems notify appropriate responders based on incident type and location.',
        icon: '📞'
      },
      {
        title: 'Post-Incident Analysis',
        description: 'Detailed reporting helps improve future response and identify patterns.',
        icon: '🔎'
      }
    ],
    stats: [
      { value: '60%', label: 'Faster response' },
      { value: '40%', label: 'Crime reduction' },
      { value: '100%', label: 'Privacy compliant' }
    ]
  },
  'retail': {
    title: 'Retail Security',
    description: 'Specialized security solutions for supermarkets, shops, and retail spaces to prevent theft and enhance safety.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    headerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
    benefits: [
      'Shoplifting prevention',
      'POS monitoring',
      'Customer flow analytics',
      'Employee safety features',
      'Inventory protection'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Retail Security Reinvented</h2>
      <p class="mb-6">Retail environments face unique security challenges, from shoplifting to employee safety and inventory management. Our retail security solutions combine advanced AI surveillance with business intelligence to protect your assets while improving operations.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Specifically designed for supermarkets, convenience stores, and retail shops, our systems help reduce shrinkage while enhancing the shopping experience.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Retail Protection</h3>
      <p class="mb-4">Our retail solution provides specialized features:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Theft Prevention:</strong> AI-powered cameras detect suspicious behavior patterns and potential shoplifting in real-time.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>POS Monitoring:</strong> Automated monitoring of point-of-sale systems to detect fraudulent transactions or employee theft.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Customer Analytics:</strong> Track customer flow and behavior to optimize store layout and staffing.</span></li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Inventory Protection</h4>
          <p>Monitor high-theft areas and receive alerts when inventory handling patterns deviate from normal.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Employee Safety</h4>
          <p>Panic buttons and incident detection help protect staff during late hours or difficult situations.</p>
        </div>
      </div>
    `,
    services: [
      {
        id: 'visual-surveillance-analytics',
        title: 'AI-Visual Surveillance Analytics',
        description: 'Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.',
        icon: Video
      },
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Instant notifications with contextual information delivered to your preferred devices.',
        icon: Bell
      }
    ],
    workflow: [
      {
        title: 'Behavior Monitoring',
        description: 'AI analyzes customer and employee behavior to identify potential security issues.',
        icon: '👀'
      },
      {
        title: 'Theft Detection',
        description: 'Automated detection of shoplifting behaviors and suspicious activities.',
        icon: '🛒'
      },
      {
        title: 'Staff Alerts',
        description: 'Discreet notifications to staff when potential theft is detected.',
        icon: '📲'
      },
      {
        title: 'Analytics Reporting',
        description: 'Detailed reports help identify loss patterns and improve security measures.',
        icon: '📈'
      }
    ],
    stats: [
      { value: '35%', label: 'Theft reduction' },
      { value: '20%', label: 'Staff efficiency' },
      { value: '90%', label: 'Detection accuracy' }
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const [solution, setSolution] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (solutionId && solutionsDetails[solutionId]) {
      setSolution(solutionsDetails[solutionId]);
    }
    setIsLoading(false);
  }, [solutionId]);

  if (isLoading) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!solution) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Solution Not Found</h1>
            <p className="mb-8 text-lg text-gray-600">Sorry, the solution you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/solutions" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              View All Solutions
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const SolutionIcon = solution.icon;

  return (
    <Layout>
      {/* Hero Section - Matching About Us Page Style */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
        {/* Background elements matching About page */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
        </div>
        
        {/* Centered content container with matching animation */}
        <div className="container-default relative z-10 transform translate-y-4 animate-slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6">
              <SolutionIcon className="w-4 h-4" /> AI Security Solutions
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              {solution.title} <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInDelay">
              {solution.description}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg"
              >
                Request a Demo
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
              <Link 
                to="/pricing" 
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg"
              >
                View Pricing
              </Link>
            </div>
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

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-12 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-xl shadow-sm text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Main Content Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 md:py-20 bg-white"
      >
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main content */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-8"
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="overflow-hidden rounded-2xl shadow-2xl mb-12 border border-gray-200"
              >
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </motion.div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                dangerouslySetInnerHTML={{ __html: solution.content }} 
              />
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-4 space-y-8"
            >
              {/* Solution benefits */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                    <SolutionIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{solution.title}</h3>
                </div>
                
                <h4 className="font-semibold mb-4 text-gray-700">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <motion.li 
                      key={i} 
                      className="flex items-start gap-3"
                      variants={fadeInUp}
                    >
                      <div className="flex-shrink-0 mt-0.5">
                        <Check className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
                
                <Link 
                  to="/contact" 
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
                >
                  Request a Demo
                </Link>
              </motion.div>
              
              {/* Other solutions */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Explore Other Solutions</h3>
                <div className="space-y-4">
                  {Object.entries(solutionsDetails)
                    .filter(([key]) => key !== solutionId)
                    .map(([key, otherSolution]) => {
                      const OtherIcon = otherSolution.icon;
                      return (
                        <motion.div
                          key={key}
                          whileHover={{ x: 5 }}
                        >
                          <Link 
                            to={`/solutions/${key}`} 
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                              <OtherIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{otherSolution.title}</h4>
                              <p className="text-sm text-gray-500">{otherSolution.description.substring(0, 60)}...</p>
                            </div>
                            <ArrowRight className="w-5 h-5 text-gray-400 ml-auto" />
                          </Link>
                        </motion.div>
                      );
                    })
                  }
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      {/* Recommended Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: "-100px" }}
        className="bg-gradient-to-b from-blue-50 to-white py-16 md:py-24"
      >
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Recommended Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered services that are most commonly deployed in {solution.title.toLowerCase()} applications:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solution.services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-100">
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                      <ServiceIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <Link 
                      to={`/services/${service.id}`}
                      className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors"
                    >
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      
      {/* Solution Workflow Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">How It Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our {solution.title.toLowerCase()} solution follows a streamlined workflow to ensure optimal security:
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-16 left-[calc(50%-1px)] h-[calc(100%-80px)] w-0.5 bg-gradient-to-b from-blue-200 to-indigo-200 hidden md:block"></div>
            
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-16"
            >
              {solution.workflow.map((step, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Step number */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white flex items-center justify-center font-bold text-xl relative z-10 shadow-lg">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    
                    {/* Content */}
                    <motion.div 
                      whileHover={{ scale: 1.02 }}
                      className="bg-white rounded-xl shadow-lg p-8 md:w-[calc(50%-40px)] relative border border-gray-100"
                    >
                      <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white"
      >
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to implement {solution.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI-powered security solutions can be tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/solutions" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-all"
            >
              Explore Other Solutions
            </Link>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default SolutionDetail;
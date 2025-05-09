import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link, useParams } from 'react-router-dom';
import { Home, Building, MapPin, ArrowRight, Check, Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi } from 'lucide-react';
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

// Service details data
const servicesDetails = {
  'advanced-threat-detection': {
    title: 'Advanced Threat Detection',
    description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    headerImage: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485',
    features: [
      '24/7 continuous monitoring',
      'AI-powered anomaly detection',
      'Real-time risk assessment',
      'Automated threat classification',
      'Historical pattern analysis'
    ],
    content: `
      <h2>Proactive Security Monitoring</h2>
      <p>Our Advanced Threat Detection system uses cutting-edge artificial intelligence to identify potential security threats before they impact your operations. Unlike traditional security systems that react to incidents, our solution anticipates and prevents them.</p>
      
      <h3>How It Works</h3>
      <p>The system analyzes multiple data streams in real-time, including:</p>
      <ul>
        <li>Video surveillance feeds</li>
        <li>Access control logs</li>
        <li>Network activity</li>
        <li>Environmental sensors</li>
      </ul>
    `,
    useCases: [
      {
        title: 'Perimeter Security',
        description: 'Detects unauthorized access attempts before intruders reach sensitive areas'
      },
      {
        title: 'Internal Threat Detection',
        description: 'Identifies suspicious behavior patterns within your facilities'
      },
      {
        title: 'Network Protection',
        description: 'Monitors for cybersecurity threats in integrated systems'
      }
    ]
  },
  // Other service details...
};

// Solution details data
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
      <h2>Smart Security for Your Home</h2>
      <p>Your home is your sanctuary. ZeexAI's residential security solutions use advanced artificial intelligence to protect what matters most to you - your family, your home, and your belongings.</p>
      
      <p>Our residential systems are designed specifically for home environments, with easy setup, intuitive controls, and seamless integration with your existing smart home ecosystem.</p>
      
      <h3>Comprehensive Protection</h3>
      <p>ZeexAI's residential security solution provides multi-layered protection:</p>
      <ul>
        <li><strong>Perimeter Security:</strong> Our AI-powered cameras monitor the exterior of your home, detecting and classifying potential threats before they reach your door.</li>
        <li><strong>Entry Point Monitoring:</strong> Intelligent monitoring of doors and windows with advanced motion analytics that can distinguish between normal activity and potential break-ins.</li>
        <li><strong>Indoor Security:</strong> Indoor cameras with privacy features that activate only when you're away or during security events.</li>
      </ul>
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
      },
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Instant notifications with contextual information delivered to your preferred devices.',
        icon: Bell
      },
      {
        id: 'cctv-integration',
        title: 'Seamless CCTV Integration',
        description: 'Easy setup, multi-device support, and customizable dashboard for all your surveillance needs.',
        icon: Cpu
      },
      {
        id: 'data-protection',
        title: 'Smart Data Protection',
        description: 'Secure storage and encryption of all your surveillance data with advanced protection measures.',
        icon: Database
      },
      {
        id: 'access-control',
        title: 'Remote Access Control',
        description: 'Manage and control your security system from anywhere with our secure mobile platform.',
        icon: Lock
      }
    ],
    workflow: [
      {
        title: 'Comprehensive Monitoring',
        description: 'AI-powered cameras continuously monitor your property, analyzing every movement and potential security event.'
      },
      {
        title: 'Smart Event Classification',
        description: 'Our AI distinguishes between routine activities (mail delivery, family returning home) and suspicious behavior.'
      },
      {
        title: 'Instant Notifications',
        description: 'When potential threats are detected, you receive immediate alerts on your smartphone with video verification.'
      },
      {
        title: 'Response Options',
        description: 'Respond directly through the app with two-way communication, contact authorities, or dispatch security services.'
      }
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
      <h2>Enterprise Security Reinvented</h2>
      <p>Modern businesses face complex security challenges, from protecting physical assets to securing sensitive areas and ensuring employee safety. ZeexAI's commercial surveillance solutions leverage artificial intelligence to transform traditional security into an intelligent system that both protects and provides valuable insights.</p>
      
      <p>Our scalable platform is designed for businesses of all sizes, from single retail locations to multi-site enterprises with complex security requirements.</p>
      
      <h3>Comprehensive Business Protection</h3>
      <p>ZeexAI's commercial solution addresses multiple security needs:</p>
      <ul>
        <li><strong>Exterior Surveillance:</strong> AI-powered perimeter monitoring with advanced object detection and classification.</li>
        <li><strong>Access Control:</strong> Facial recognition-based access management that eliminates the need for keycards and creates detailed access logs.</li>
        <li><strong>Interior Monitoring:</strong> Smart cameras that can detect unusual behavior, restricted area violations, or safety incidents.</li>
      </ul>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'Our AI-powered system continuously monitors your premises for potential security risks before they escalate.',
        icon: Shield
      },
      // Other services...
    ],
    workflow: [
      {
        title: 'Multi-layer Surveillance',
        description: 'Comprehensive monitoring of perimeter, entry points, and interior spaces with AI-powered cameras.'
      },
      // Other workflow steps...
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
      <h2>Enhancing Public Safety with Responsible AI</h2>
      <p>Public spaces present unique security challenges that require balancing effective surveillance with respect for individual privacy and civil liberties. ZeexAI's public safety solutions are designed specifically for these environments, with privacy-preserving technology that enhances security without creating a surveillance state.</p>
      
      <p>Our systems help identify potential threats before they escalate, enabling proactive security measures and faster emergency response times.</p>
      
      <h3>Smart Monitoring for Public Spaces</h3>
      <p>ZeexAI's public safety solution includes specialized capabilities:</p>
      <ul>
        <li><strong>Crowd Analysis:</strong> Monitor crowd density and movement patterns to identify potential safety issues or unusual behavior.</li>
        <li><strong>Anomaly Detection:</strong> Identify unusual activities or behaviors that may indicate security threats or safety concerns.</li>
        <li><strong>Emergency Situation Recognition:</strong> Automatically detect incidents such as fights, falls, or medical emergencies to enable rapid response.</li>
      </ul>
    `,
    services: [
      {
        id: 'advanced-threat-detection',
        title: 'Advanced Threat Detection',
        description: 'AI-powered system continuously monitors public spaces for potential security risks and threats.',
        icon: Shield
      },
      // Other services...
    ],
    workflow: [
      {
        title: 'Wide-Area Monitoring',
        description: 'AI-powered cameras monitor public spaces, focusing on behavioral patterns rather than individual identities.'
      },
      // Other workflow steps...
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams();
  const [solution, setSolution] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    console.log("Current solutionId param:", solutionId); // Debug log
    
    // Check if solutionId exists and is valid
    if (solutionId && solutionsDetails[solutionId]) {
      setSolution(solutionsDetails[solutionId]);
    } else {
      console.error(`Solution not found for ID: ${solutionId}`);
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
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
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
      <PageHeader 
        title={solution.title}
        subtitle={solution.description}
        backgroundImage={solution.headerImage}
      />
      
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="py-16 md:py-20"
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
                className="overflow-hidden rounded-2xl shadow-2xl mb-12"
              >
                <img 
                  src={solution.image} 
                  alt={solution.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </motion.div>
              
              <div className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700">
                <div dangerouslySetInnerHTML={{ __html: solution.content }} />
              </div>
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-4 space-y-8"
            >
              {/* Solution benefits */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm"
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
      
      {/* Rest of your component... */}
      {/* Recommended Services, Solution Workflow, and CTA sections */}
      
      {/* Recommended Services */}
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
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <Link 
                    to={`/services/${service.id}`}
                    className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col"
                  >
                    <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors">
                      <ServiceIcon className="h-6 w-6 text-blue-600 group-hover:text-blue-700" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</h3>
                    <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                    <div className="text-blue-600 font-medium flex items-center group-hover:text-blue-700 transition-colors">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>
      
      {/* Solution Workflow */}
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
                      {index + 1}
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
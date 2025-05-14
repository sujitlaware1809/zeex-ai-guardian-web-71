import React from 'react';
import Layout from '@/components/layout/Layout';
import { Shield, Video, Bell, Cloud, Cpu, Database, Lock, Wifi, Check, Server ,Smartphone,Monitor,Activity,Box} from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Solution data - now including solutions from solutionsDetails
const solutions = [
  {
    id: 'advanced-threat-detection',
    title: 'Advanced Threat Detection',
    description: 'Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems.',
    icon: Shield,
    image: 'https://i.ibb.co/fzVMPrbJ/a6993bc4-9261-4f71-a131-b07b5049cec5-1.png',
    features: [
      '24/7 continuous monitoring',
      'AI-powered anomaly detection',
      'Real-time risk assessment',
      'Automated threat classification',
      'Historical pattern analysis'
    ]
  },
  {
    id: 'visual-surveillance-analytics',
    title: 'AI-Visual Surveillance Analytics',
    description: 'Intelligent video analysis detects unusual patterns while ensuring privacy and compliance.',
    icon: Video,
    image: 'https://i.ibb.co/spm2G7g9/5c92a250-b494-45c4-8859-49a854098999-1.png',
    features: [
      'Real-time video processing',
      'Privacy-preserving analytics',
      'Custom detection rules',
      'Multi-camera tracking',
      'Behavioral analysis'
    ]
  },
  {
    id: 'smart-alert-system',
    title: 'Multi-Layered Smart Alert System',
    description: 'Configure alert priorities and customize who gets notified—ensuring the right people respond at the right time.',
    icon: Bell,
    image: 'https://i.ibb.co/nqWX0h64/e29f07c7-f73b-49c0-aee9-9b8c2170ede8-1.png',
    features: [
      'Add multiple notification recipients (family, staff, law enforcement)',
      'Multi-channel alerts via SMS, WhatsApp, Email, and Dashboard',
      'Alert-level customization (minor vs. critical events)',
      'Real-time escalation protocols for high-risk events',
      'Easy configuration from your dashboard'
    ]
  },
  {
    id: 'mobile-app-services',
    title: 'Mobile-Based App Services',
    description: 'Access and control your security ecosystem from anywhere.',
    icon: Smartphone,
    image: 'https://i.ibb.co/Jj9fpXFj/26204326-fd4c-4380-92f5-e042d6b9371d-1.png',
    features: [
      'Real-time security alerts',
      'Live camera feed access',
      'User-based access permissions',
      'Instant incident notifications',
      'Seamless mobile experience'
    ]
  },
  {
    id: 'web-ai-dashboard',
    title: 'Web-Based AI Dashboard',
    description: 'Monitor, manage, and analyze operations through our AI-powered control center.',
    icon: Monitor,
    image: 'https://i.ibb.co/6cpxL5XM/84510116-7cd3-4a1e-b191-2e87184e570d-1.png',
    features: [
      'Real-time activity tracking',
      'AI model control panel',
      'Incident logs & analytics',
      'Multi-location support',
      'Visual heatmaps & trends'
    ]
  },
  {
    id: 'device-health-check',
    title: 'Integrated Device Health Check',
    description: 'Stay informed with automated hardware diagnostics and alerts.',
    icon: Activity,
    image: 'https://i.ibb.co/JRvXfL31/bedf5cd9-4580-4a6f-870c-1b3256cd89e5-1.png',
    features: [
      'Offline device detection',
      'Thermal & battery diagnostics',
      'Predictive maintenance alerts',
      'Health metrics dashboard',
      'Scheduled status reporting'
    ]
  },
  {
    id: 'deployment-options',
    title: 'Cloud & On-Premise Deployment',
    description: 'Choose the infrastructure that fits your enterprise—flexible and secure.',
    icon: Server,
    image: 'https://i.ibb.co/NgYW9J4q/71fe4e0b-776a-4592-9b28-6887518d9314-1.png',
    features: [
      'Scalable cloud hosting',
      'On-premise AI integration',
      'Encrypted data processing',
      'Edge computing capabilities',
      'Full control & data ownership'
    ]
  },
  {
    id: 'custom-ai-models',
    title: 'Custom AI Model Allocation per Camera',
    description: 'Deploy and manage different AI models for specific camera locations—tailored to your security priorities.',
    icon: Box,
    image: 'https://i.ibb.co/ZRS59sQ6/74b47f80-b038-4ac8-88c8-6c948bbd7ee6-1.png',
    features: [
      'Assign AI models per camera',
      'Location-specific intelligence',
      'Real-time model switching',
      'Unified dashboard for all model insights',
      'Efficient resource usage with task-optimized models'
    ]
  },
  {
    id: 'activity-analytics',
    title: 'Real-Time Activity Analytics Dashboard',
    description: 'Visualize and compare AI insights across customer behavior, employee activity, safety events, and operational metrics—all in one unified dashboard.',
    icon: Activity,
    image: 'https://i.ibb.co/ZRYJQTXN/4ae8fd9a-763d-44e5-ac7f-660411ab178d-1.png',
    features: [
      'Real-time graphs for customer flow',
      'Timeline-based activity heatmaps',
      'Category-wise breakdown',
      'Location-wise performance trends',
      'AI-backed forecasting and anomaly detection'
    ]
  },
  {
    id: 'data-protection',
    title: 'Smart Data Protection',
    description: 'Secure storage and encryption of all your surveillance data with advanced protection measures.',
    icon: Database,
    image: 'https://i.ibb.co/v6NZSDZS/Chat-GPT-Image-May-14-2025-11-42-22-AM-1.png',
    features: [
      'Military-grade encryption',
      'Role-based access controls',
      'Automated retention policies',
      'Tamper-proof audit logs',
      'Geofenced data storage'
    ]
  },
  {
    id: 'access-control',
    title: 'Remote Access Control',
    description: 'Manage and control your security system from anywhere with our secure mobile platform.',
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    features: [
      'Mobile app control',
      'Biometric authentication',
      'Temporary access grants',
      'Usage analytics',
      'Emergency lockdown'
    ]
  },
  {
    id: 'network-security',
    title: 'Network Security',
    description: 'Protect your surveillance network from cyber threats with our advanced security measures.',
    icon: Wifi,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
    features: [
      'Intrusion prevention',
      'Device authentication',
      'Encrypted communications',
      'Vulnerability scanning',
      'Anomaly detection'
    ]
  }
];

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

const Solutions = () => {
  return (
    <Layout showFooter={false}>
      {/* Hero Section - Exactly Matching Blog Page Style */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
        {/* Background elements - identical to blog page */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-900/90"></div>
        </div>
        
        {/* Content container with identical sizing and spacing */}
        <div className="container-default relative z-10 transform translate-y-4 animate-slideUp px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            {/* Badge - same styling as blog */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6"
            >
              <Shield className="w-4 h-4" /> AI Security Solutions
            </motion.div>
            
            {/* Title - identical sizing and gradient */}
            <h1 className="text-5xl sm:text-5xl lg:text-[3rem] font-bold text-white mb-5 leading-tight tracking-tight">
              Advanced <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Security Solutions</span>
            </h1>
            
            {/* Subtitle - same text size and color */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
            >
              Cutting-edge surveillance solutions powered by artificial intelligence to protect what matters most
            </motion.p>
            
            {/* Buttons - identical styling and spacing */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4"
            >
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-50 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
              >
                Request a Demo
                <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
          
            </motion.div>
          </div>
        </div>

        {/* Identical animation styles */}
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
        `}</style>
      </section>
      
      {/* Solutions Grid Section */}
      <section className="py-20 bg-white">
        <div className="container-default">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-gray-900">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Security Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Our complete suite of AI-powered security solutions designed to protect your assets and provide peace of mind.
            </motion.p>
          </motion.div>
          
          {/* Solutions Cards - Expanded with all information */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {solutions.map((solution, index) => (
              <motion.div 
                key={solution.id}
                variants={fadeInUp}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center shadow-md">
                          <solution.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{solution.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex-grow">
                    <p className="text-gray-600 mb-6">
                      {solution.description}
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-3 text-gray-800">Key Features</h4>
                    <ul className="space-y-3 mb-6">
                      {solution.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-start gap-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <Check className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    to="/contact" 
                    className="mt-auto inline-flex items-center justify-center px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-[1.02] w-full text-center"
                  >
                    Get Started
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Unified Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-default">
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <motion.h2 variants={fadeInUp} className="text-4xl font-bold mb-6 text-gray-900">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Security Solutions</span>
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600">
              Integrated features that work together to provide complete protection for your property
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">AI-Powered Protection</h3>
              <p className="text-gray-600 text-center">
                Advanced machine learning algorithms detect and prevent threats before they occur.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto">
                <Video className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">24/7 Monitoring</h3>
              <p className="text-gray-600 text-center">
                Continuous surveillance with real-time alerts for any suspicious activity.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto">
                <Database className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Secure Data Storage</h3>
              <p className="text-gray-600 text-center">
                Encrypted cloud storage with military-grade protection for all your footage.
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mb-5 mx-auto">
                <Lock className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-center mb-3">Access Control</h3>
              <p className="text-gray-600 text-center">
                Manage permissions and access from anywhere with our secure platform.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

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
          <div className="max-w-3xl mx-auto">
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
    </Layout>
  );
};

export default Solutions;
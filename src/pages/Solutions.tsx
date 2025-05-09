import React from 'react';
import Layout from '@/components/layout/Layout';
import { Home, Building, MapPin, Check, ArrowRight, Shield } from 'lucide-react';
import { motion, } from 'framer-motion';
import { Link } from 'react-router-dom';

// Solution data
const solutions = [
  {
    id: 'residential',
    title: 'Residential Security',
    description: 'Comprehensive AI-powered security systems designed specifically for homes and residential properties. Our solution integrates seamlessly with your existing smart home setup, providing unparalleled protection for your family and property.',
    icon: Home,
    image: '/api/placeholder/800/500',
    benefits: [
      'Smart perimeter protection',
      'Family facial recognition',
      'Mobile app monitoring',
      'Integration with existing security systems',
      'Custom alert settings'
    ],
    useCases: [
      'Detecting unknown individuals approaching your property',
      'Distinguishing family members from visitors',
      'Monitoring entrance points and vulnerable areas',
      'Receiving alerts when children arrive home from school',
      'Identifying package delivery personnel'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Surveillance',
    description: 'Enterprise-grade security solutions designed for businesses of all sizes. Our commercial surveillance system combines AI analytics with scalable infrastructure to protect your assets, employees, and customers around the clock.',
    icon: Building,
    image: '/api/placeholder/800/500',
    benefits: [
      'Multi-site monitoring',
      'Employee access management',
      'Theft prevention',
      'Business intelligence gathering',
      'Regulatory compliance'
    ],
    useCases: [
      'Retail loss prevention with product recognition',
      'Office building access control',
      'Warehouse inventory and security management',
      'Banking and financial institution security',
      'Retail customer behavior analysis'
    ]
  },
  {
    id: 'public-safety',
    title: 'Public Safety',
    description: 'Advanced surveillance solutions for public spaces that enhance safety while respecting privacy. Our public safety systems help identify potential threats before they escalate, enabling proactive security measures.',
    icon: MapPin,
    image: '/api/placeholder/800/500',
    benefits: [
      'Crowd anomaly detection',
      'Privacy-focused monitoring',
      'Emergency situation recognition',
      'Integration with emergency services',
      'Scalable deployment options'
    ],
    useCases: [
      'Transportation hub security',
      'Public event monitoring',
      'Parks and recreation area safety',
      'School and campus security',
      'Emergency response coordination'
    ]
  }
];

const Solutions = () => {
  return (
    <Layout>
      {/* Hero Section - Matching Blog Page Style */}
<section className="relative min-h-[70vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
  {/* Background elements - identical to blog */}
  <div className="absolute inset-0 overflow-hidden z-0">
    <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-navy-900/30 to-navy-900/90"></div>
  </div>
  
  {/* Content container with identical sizing */}
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
      <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-white mb-5 leading-tight tracking-tight">
        Tailored <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Security Solutions</span>
      </h1>
      
      {/* Subtitle - same text size and color */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto"
      >
        AI-powered surveillance systems designed specifically for your environment and security needs
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
          Get Started
          <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </Link>
        <Link 
          to="/solutions#comparison" 
          className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 hover:shadow-lg text-sm sm:text-base"
        >
          Compare Solutions
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
      
      {/* Introduction Section */}
      <section className="py-16">
        <div className="container-default">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Security Tailored to <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Your Environment</span>
            </h2>
            <p className="text-xl text-gray-600">
              Every security challenge is unique. Our AI-powered solutions are designed to adapt to specific environments and security needs.
            </p>
          </div>
          
          {/* Solutions Cards Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {solutions.map((solution) => (
              <div 
                key={solution.id}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={solution.image} 
                    alt={solution.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">
                          <solution.icon className="h-5 w-5 text-blue-600" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">{solution.title}</h3>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {solution.description}
                  </p>
                  <Link 
                    to={`#${solution.id}`} 
                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Detailed Solutions Sections */}
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-24">
                {/* Solution Header with Decorative Element */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-1 flex-grow rounded-full bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                  <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3 whitespace-nowrap">
                    <solution.icon className="h-8 w-8 text-blue-600" />
                    {solution.title}
                  </h2>
                  <div className="h-1 flex-grow rounded-full bg-gradient-to-r from-indigo-600 to-blue-600"></div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
                  {/* Image column with enhanced styling */}
                  <div className={index % 2 === 0 ? 'order-none' : 'order-none lg:order-last'}>
                    <div className="rounded-2xl overflow-hidden shadow-xl relative group">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-auto transform transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/30 to-indigo-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div>
                    <p className="text-lg text-gray-600 mb-8">
                      {solution.description}
                    </p>
                    
                    <h4 className="text-xl font-semibold mb-6 text-gray-800">Key Benefits</h4>
                    <ul className="space-y-4 mb-8">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="p-1 rounded-full bg-blue-100 text-blue-600 mt-0.5">
                            <Check className="w-5 h-5" />
                          </div>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Link 
                      to={`/solutions/${solution.id}`}
                      className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:shadow-lg transition-all hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
                
                {/* Use Cases Section with Modern Cards */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h4 className="text-2xl font-semibold mb-8 text-gray-800 text-center">
                    How {solution.title} Works in Practice
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {solution.useCases.map((useCase, i) => (
                      <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-semibold">
                            {i + 1}
                          </div>
                          <h5 className="font-medium text-gray-700">Use Case</h5>
                        </div>
                        <p className="text-gray-600">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table with Modern Design */}
      <section className="py-20 bg-gray-50">
        <div className="container-default">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Solution Comparison</h2>
            <p className="text-lg text-gray-600">
              Compare our different security solutions to find the perfect fit for your needs
            </p>
          </div>
          
          <div className="overflow-x-auto bg-white rounded-2xl shadow-lg p-2">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-6 px-6 text-left text-gray-700 font-bold text-lg">Features</th>
                  {solutions.map((solution) => (
                    <th key={solution.id} className="py-6 px-6 text-center">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                          <solution.icon className="h-6 w-6 text-blue-600" />
                        </div>
                        <span className="font-bold text-gray-800">{solution.title}</span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">AI-powered detection</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">Facial recognition</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">Multi-camera support</td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Up to 8</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Unlimited</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Unlimited</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">Smart alerts</td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">Analytics dashboard</td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Basic</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Advanced</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">Advanced</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">Cloud storage</td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">30 days</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-sm font-medium">90 days</span>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">Customizable</span>
                  </td>
                </tr>
                <tr className="border-t">
                  <td className="py-4 px-6 font-medium text-gray-700">API access</td>
                  <td className="py-4 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                  <td className="py-4 px-6 text-center">
                    <Check className="w-6 h-6 mx-auto text-blue-500" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Modern CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-800 to-indigo-900 text-white relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-blue-500 opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-indigo-500 opacity-10 translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="container-default text-center relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-6">Ready to Explore the Right Solution?</h2>
            <p className="text-xl mb-10 text-blue-100">
              Our team of security experts is ready to help you find the perfect AI surveillance solution for your needs.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link 
                to="/contact" 
                className="px-8 py-4 bg-white text-blue-800 font-semibold rounded-lg hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Schedule a Consultation
              </Link>
              <Link 
                to="/services" 
                className="px-8 py-4 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white/10 transition-all hover:shadow-xl"
              >
                Learn About Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;
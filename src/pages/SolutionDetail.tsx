import React, { useEffect, useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Link, useParams } from 'react-router-dom';
import { 
  Home, 
  Building, 
  MapPin, 
  ShoppingCart, 
  ArrowRight, 
  Check, 
  Shield, 
  Video, 
  Bell, 
  Cloud, 
  Cpu, 
  Database, 
  Lock, 
  Wifi,
  Banknote,
  Factory,
  TrafficCone,
  Globe
} from 'lucide-react';
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

// Service details data with all 6 services
const servicesDetails = {
  'retail-wholesale-high-risk': {
    title: 'Retail, Wholesale & High Risk Shop Security',
    description: 'Comprehensive AI-powered security solutions for retail stores, wholesale markets, and high-risk shops to prevent theft and enhance safety.',
    icon: ShoppingCart,
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da',
    headerImage: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df',
    benefits: [
      'Shoplifting prevention with AI behavior analysis',
      'POS monitoring for fraud detection',
      'High-risk item protection',
      'Employee safety features',
      'Inventory protection and tracking'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Retail & High-Risk Shop Security Reinvented</h2>
      <p class="mb-6">Retail environments and high-risk shops require specialized security solutions that address both theft prevention and employee safety. Our advanced AI surveillance systems are tailored to meet these unique challenges while providing business intelligence to improve operations.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our systems help reduce shrinkage in retail environments while providing enhanced protection for high-risk shops like jewelry stores, pharmacies, and electronics retailers.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Protection</h3>
      <p class="mb-4">Our retail security service includes specialized capabilities:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>AI Theft Detection:</strong> Real-time identification of shoplifting behaviors and suspicious activities with high accuracy.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>High-Risk Area Monitoring:</strong> Specialized protection for high-value merchandise areas with enhanced analytics.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Employee Safety:</strong> Panic buttons and incident detection help protect staff during robberies or difficult situations.</span></li>
      </ul>
      
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Loss Prevention</h4>
          <p>Advanced analytics detect suspicious behavior patterns that may indicate theft or fraud.</p>
        </div>
        <div class="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
          <h4 class="font-bold text-lg mb-3">Staff Protection</h4>
          <p>Monitor for safety incidents and ensure staff security during late hours.</p>
        </div>
      </div>
    `,
    features: [
      {
        id: 'smart-camera-integration',
        title: 'Smart Camera Integration',
        description: 'Comprehensive visual coverage of all retail areas with strategically placed AI cameras.',
        image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f'
      },
      {
        id: 'ai-theft-detection',
        title: 'AI Theft Detection',
        description: 'Real-time identification of shoplifting behaviors and suspicious activities.',
        image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3'
      },
      {
        id: 'pos-fraud-monitoring',
        title: 'POS Fraud Monitoring',
        description: 'Automated detection of transactional anomalies and employee theft patterns.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d'
      },
      {
        id: 'high-risk-protection',
        title: 'High-Risk Protection',
        description: 'Specialized monitoring for high-value merchandise areas.',
        image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da'
      }
    ],
    workflow: [
      {
        title: 'Perimeter Monitoring',
        description: 'AI-powered cameras monitor all entry and exit points for suspicious activity.',
        icon: '👁️'
      },
      {
        title: 'Behavior Analysis',
        description: 'Our AI distinguishes between normal shopping behavior and potential theft indicators.',
        icon: '🤖'
      },
      {
        title: 'Instant Alerts',
        description: 'Staff receive immediate notifications with video verification when threats are detected.',
        icon: '📱'
      },
      {
        title: 'Response Coordination',
        description: 'Integrated systems notify security personnel or authorities based on threat level.',
        icon: '🛡️'
      }
    ],
    stats: [
      { value: '35%', label: 'Reduction in theft' },
      { value: '90%', label: 'Detection accuracy' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  'banks-atms-financial': {
    title: 'Banks, ATMs & Financial Institutions Security',
    description: 'Advanced security solutions for financial institutions including banks, ATMs, and other monetary facilities with high-level protection.',
    icon: Banknote,
    image: 'https://images.unsplash.com/photo-1601597111151-8b15e4e0cb4d',
    headerImage: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d',
    benefits: [
      'Fraud detection and prevention',
      'ATM skimming protection',
      'Vault monitoring',
      'Customer identification verification',
      '24/7 transaction monitoring'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Financial Institution Security Solutions</h2>
      <p class="mb-6">Banks, ATMs, and financial institutions require the highest level of security to protect assets, customers, and sensitive data. Our specialized solutions combine physical security with digital monitoring to create comprehensive protection.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our financial security systems are designed to meet strict compliance requirements while providing real-time threat detection and prevention.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Multi-Layered Security</h3>
      <p class="mb-4">Our financial security service provides comprehensive protection:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>ATM Protection:</strong> Advanced anti-skimming technology and behavior monitoring at all ATM locations.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Transaction Monitoring:</strong> Real-time analysis of transactions to detect fraudulent activity.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Vault Security:</strong> Multi-factor authentication and 24/7 monitoring of secure areas.</span></li>
      </ul>
    `,
    features: [
      {
        id: 'atm-protection',
        title: 'ATM Protection',
        description: 'Anti-skimming technology and behavior monitoring at all ATM locations.',
        image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d'
      },
      {
        id: 'transaction-monitoring',
        title: 'Transaction Monitoring',
        description: 'Real-time analysis of transactions to detect fraudulent activity.',
        image: 'https://images.unsplash.com/photo-1601597111151-8b15e4e0cb4d'
      },
      {
        id: 'vault-security',
        title: 'Vault Security',
        description: 'Multi-factor authentication and 24/7 monitoring of secure areas.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
      },
      {
        id: 'customer-verification',
        title: 'Customer Verification',
        description: 'Advanced facial recognition for customer identification and fraud prevention.',
        image: 'https://images.unsplash.com/photo-1601760561441-16420502c7e0'
      }
    ],
    workflow: [
      {
        title: 'Customer Verification',
        description: 'AI-powered identification of customers entering the facility.',
        icon: '👤'
      },
      {
        title: 'Transaction Monitoring',
        description: 'Real-time analysis of all financial transactions for anomalies.',
        icon: '💳'
      },
      {
        title: 'Threat Detection',
        description: 'Immediate identification of suspicious behavior or security breaches.',
        icon: '⚠️'
      },
      {
        title: 'Emergency Response',
        description: 'Automated lockdown and alert systems activated during incidents.',
        icon: '🚨'
      }
    ],
    stats: [
      { value: '99.9%', label: 'Detection accuracy' },
      { value: '60%', label: 'Fraud reduction' },
      { value: '2s', label: 'Alert time' }
    ]
  },
  'industry-smart-factories': {
    title: 'Industry Safety & Smart Factories',
    description: 'Integrated security and safety solutions for industrial environments and smart factory implementations.',
    icon: Factory,
    image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da',
    headerImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    benefits: [
      'Equipment monitoring and protection',
      'Worker safety compliance',
      'Hazard detection',
      'Access control for restricted areas',
      'Integration with industrial IoT systems'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Industrial Safety & Smart Factory Solutions</h2>
      <p class="mb-6">Modern industrial facilities require integrated security and safety systems that protect both assets and personnel while maintaining operational efficiency. Our solutions combine AI-powered monitoring with industrial IoT integration for comprehensive protection.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our industrial systems are designed to meet strict safety regulations while providing real-time monitoring of equipment and personnel.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Industrial-Grade Protection</h3>
      <p class="mb-4">Our industrial security service includes:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Equipment Monitoring:</strong> 24/7 monitoring of critical machinery for operational anomalies and security threats.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Worker Safety:</strong> AI-powered detection of safety violations or hazardous situations.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Restricted Area Protection:</strong> Facial recognition-based access control for sensitive areas.</span></li>
      </ul>
    `,
    features: [
      {
        id: 'equipment-monitoring',
        title: 'Equipment Monitoring',
        description: '24/7 monitoring of critical machinery for operational anomalies.',
        image: 'https://images.unsplash.com/photo-1513828583688-c52646db42da'
      },
      {
        id: 'safety-compliance',
        title: 'Safety Compliance',
        description: 'AI-powered detection of safety violations or hazardous situations.',
        image: 'https://images.unsplash.com/photo-1581093057305-263bd975ae4a'
      },
      {
        id: 'access-control',
        title: 'Access Control',
        description: 'Facial recognition-based access for sensitive industrial areas.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
      },
      {
        id: 'iot-integration',
        title: 'IoT Integration',
        description: 'Seamless integration with industrial IoT systems for unified monitoring.',
        image: 'https://images.unsplash.com/photo-1518770660439-4636190af475'
      }
    ],
    workflow: [
      {
        title: 'Perimeter Security',
        description: 'Monitoring of all facility entry points with AI-powered detection.',
        icon: '🏭'
      },
      {
        title: 'Equipment Monitoring',
        description: 'Continuous analysis of machinery operation and performance.',
        icon: '⚙️'
      },
      {
        title: 'Safety Compliance',
        description: 'Real-time detection of safety violations or hazardous situations.',
        icon: '⚠️'
      },
      {
        title: 'Incident Response',
        description: 'Automated alerts and shutdown procedures when threats are detected.',
        icon: '🚨'
      }
    ],
    stats: [
      { value: '50%', label: 'Safety incidents reduced' },
      { value: '30%', label: 'Equipment downtime' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  'traffic-public-safety': {
    title: 'Traffic & Public Safety Management',
    description: 'AI-powered solutions for traffic monitoring, accident prevention, and overall public safety enhancement.',
    icon: TrafficCone,
    image: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118',
    headerImage: 'https://images.unsplash.com/photo-1580977251946-3f8c48548cf6',
    benefits: [
      'Traffic flow optimization',
      'Accident detection and response',
      'License plate recognition',
      'Pedestrian safety monitoring',
      'Emergency vehicle routing'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Traffic & Public Safety Solutions</h2>
      <p class="mb-6">Modern cities require intelligent traffic management systems that improve safety while reducing congestion. Our AI-powered solutions provide real-time monitoring and analysis of traffic conditions, accidents, and public safety concerns.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our traffic management systems reduce congestion while improving response times to accidents and emergencies.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Traffic Management</h3>
      <p class="mb-4">Our traffic and public safety service includes:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Traffic Flow Optimization:</strong> AI-powered analysis of traffic patterns to reduce congestion and improve flow.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Accident Detection:</strong> Immediate identification of accidents and automatic alerting of emergency services.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Pedestrian Safety:</strong> Monitoring of crosswalks and high-traffic pedestrian areas to prevent accidents.</span></li>
      </ul>
    `,
    features: [
      {
        id: 'traffic-monitoring',
        title: 'Traffic Monitoring',
        description: 'Real-time analysis of traffic flow and congestion patterns.',
        image: 'https://images.unsplash.com/photo-1500380804539-4e1e8c1e7118'
      },
      {
        id: 'accident-detection',
        title: 'Accident Detection',
        description: 'Immediate identification of accidents and automatic emergency alerts.',
        image: 'https://images.unsplash.com/photo-1581093057305-263bd975ae4a'
      },
      {
        id: 'license-plate-recognition',
        title: 'License Plate Recognition',
        description: 'Automated vehicle identification for security and traffic management.',
        image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70'
      },
      {
        id: 'emergency-routing',
        title: 'Emergency Routing',
        description: 'Priority routing for emergency vehicles through smart traffic light control.',
        image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b'
      }
    ],
    workflow: [
      {
        title: 'Traffic Monitoring',
        description: 'Continuous analysis of vehicle and pedestrian movement patterns.',
        icon: '🚦'
      },
      {
        title: 'Incident Detection',
        description: 'Immediate identification of accidents or safety violations.',
        icon: '⚠️'
      },
      {
        title: 'Emergency Response',
        description: 'Automatic alerting of appropriate emergency services.',
        icon: '🚨'
      },
      {
        title: 'Traffic Optimization',
        description: 'Dynamic adjustment of traffic signals to improve flow and safety.',
        icon: '🔄'
      }
    ],
    stats: [
      { value: '40%', label: 'Faster emergency response' },
      { value: '25%', label: 'Traffic reduction' },
      { value: '30%', label: 'Accident reduction' }
    ]
  },
  'smart-cities-infrastructure': {
    title: 'Smart Cities & Government Infrastructure',
    description: 'Comprehensive security and monitoring solutions for smart city implementations and government infrastructure.',
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
    headerImage: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    benefits: [
      'City-wide monitoring integration',
      'Critical infrastructure protection',
      'Public space surveillance',
      'Emergency response coordination',
      'Data-driven urban planning'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Smart City & Infrastructure Solutions</h2>
      <p class="mb-6">Modern cities require integrated security solutions that protect critical infrastructure while enhancing quality of life for residents. Our smart city systems provide comprehensive monitoring and management of public spaces, utilities, and government facilities.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our smart city platform integrates with existing municipal systems to provide unified monitoring and management of city infrastructure.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Integrated City Management</h3>
      <p class="mb-4">Our smart city service includes:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Infrastructure Monitoring:</strong> 24/7 monitoring of critical utilities, transportation systems, and public facilities.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Public Space Security:</strong> AI-powered surveillance of parks, plazas, and other public areas with privacy protections.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Emergency Coordination:</strong> Integrated systems for rapid response to security incidents or natural disasters.</span></li>
      </ul>
    `,
    features: [
      {
        id: 'infrastructure-monitoring',
        title: 'Infrastructure Monitoring',
        description: '24/7 monitoring of critical utilities and transportation systems.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
      },
      {
        id: 'public-space-security',
        title: 'Public Space Security',
        description: 'AI-powered surveillance of parks, plazas, and public areas.',
        image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df'
      },
      {
        id: 'emergency-coordination',
        title: 'Emergency Coordination',
        description: 'Integrated systems for rapid response to incidents or disasters.',
        image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b'
      },
      {
        id: 'data-analytics',
        title: 'Data Analytics',
        description: 'Comprehensive data collection and analysis for urban planning.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40'
      }
    ],
    workflow: [
      {
        title: 'City-wide Monitoring',
        description: 'Integrated surveillance of all critical city infrastructure.',
        icon: '🏙️'
      },
      {
        title: 'Threat Detection',
        description: 'AI-powered analysis of potential security or safety threats.',
        icon: '🤖'
      },
      {
        title: 'Resource Allocation',
        description: 'Data-driven deployment of emergency and maintenance resources.',
        icon: '📊'
      },
      {
        title: 'Citizen Services',
        description: 'Improved public services through data analysis and automation.',
        icon: '🏛️'
      }
    ],
    stats: [
      { value: '50%', label: 'Faster response' },
      { value: '30%', label: 'Cost savings' },
      { value: '24/7', label: 'Monitoring' }
    ]
  },
  'corporate-residential': {
    title: 'Corporate Offices, Residential Complexes & Societies',
    description: 'Integrated security solutions for corporate environments, residential buildings, and housing societies.',
    icon: Building,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
    headerImage: 'https://images.unsplash.com/photo-1557804506-669a67965ba0',
    benefits: [
      'Visitor management systems',
      'Perimeter protection',
      'Common area monitoring',
      'Parking security',
      'Emergency response integration'
    ],
    content: `
      <h2 class="text-3xl font-bold mb-6">Corporate & Residential Security Solutions</h2>
      <p class="mb-6">Office buildings and residential complexes require security solutions that protect occupants while maintaining convenience and quality of life. Our integrated systems provide comprehensive protection for both corporate and residential environments.</p>
      
      <div class="bg-blue-50 p-6 rounded-xl mb-8">
        <p class="font-medium text-blue-800">Our corporate and residential security systems are designed to be unobtrusive while providing maximum protection for occupants and assets.</p>
      </div>
      
      <h3 class="text-2xl font-bold mb-4 mt-8">Comprehensive Property Protection</h3>
      <p class="mb-4">Our service includes:</p>
      <ul class="space-y-3 mb-8">
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Visitor Management:</strong> Advanced check-in systems with facial recognition and automated access control.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Common Area Security:</strong> 24/7 monitoring of lobbies, hallways, and other shared spaces.</span></li>
        <li class="flex items-start gap-3"><span class="bg-blue-100 text-blue-800 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">✓</span><span><strong>Parking Protection:</strong> Comprehensive surveillance of parking areas with license plate recognition.</span></li>
      </ul>
    `,
    features: [
      {
        id: 'visitor-management',
        title: 'Visitor Management',
        description: 'Advanced check-in systems with facial recognition and access control.',
        image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf'
      },
      {
        id: 'common-area-security',
        title: 'Common Area Security',
        description: '24/7 monitoring of lobbies, hallways, and shared spaces.',
        image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0'
      },
      {
        id: 'parking-protection',
        title: 'Parking Protection',
        description: 'Comprehensive surveillance of parking areas with license plate recognition.',
        image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128'
      },
      {
        id: 'emergency-systems',
        title: 'Emergency Systems',
        description: 'Integrated emergency response and evacuation management.',
        image: 'https://images.unsplash.com/photo-1583511655826-05700442b31b'
      }
    ],
    workflow: [
      {
        title: 'Access Control',
        description: 'Secure entry systems with multi-factor authentication.',
        icon: '🔒'
      },
      {
        title: 'Perimeter Security',
        description: 'Continuous monitoring of all building entry points.',
        icon: '🏢'
      },
      {
        title: 'Occupant Safety',
        description: 'Real-time detection of safety incidents or security breaches.',
        icon: '👥'
      },
      {
        title: 'Emergency Response',
        description: 'Integrated systems for rapid response to incidents.',
        icon: '🚨'
      }
    ],
    stats: [
      { value: '99%', label: 'Access control accuracy' },
      { value: '40%', label: 'Security incidents reduced' },
      { value: '24/7', label: 'Monitoring' }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    if (serviceId && servicesDetails[serviceId]) {
      setService(servicesDetails[serviceId]);
    }
    setIsLoading(false);
  }, [serviceId]);

  if (isLoading) {
    return (
      <Layout showFooter={false}>
        <div className="container py-20 text-center">
          <h1 className="text-4xl font-bold mb-6 text-gray-900">Loading...</h1>
        </div>
      </Layout>
    );
  }

  if (!service) {
    return (
      <Layout showFooter={false}>
        <div className="container py-20 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold mb-6 text-gray-900">Service Not Found</h1>
            <p className="mb-8 text-lg text-gray-600">Sorry, the service you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/services" 
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
            >
              View All Services
            </Link>
          </motion.div>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Layout showFooter={false}>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center bg-navy-900 overflow-hidden opacity-0 animate-fadeIn">
        <div className="absolute inset-0 overflow-hidden z-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20"></div>
        </div>
        
        <div className="container-default relative z-10 transform translate-y-4 animate-slideUp">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 px-4 py-1.5 text-sm font-medium text-blue-200 backdrop-blur-sm mb-6">
              <ServiceIcon className="w-4 h-4" /> AI Security Services
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight tracking-tight">
              {service.title} <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fadeInDelay">
              {service.description}
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
            {service.stats.map((stat, index) => (
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
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-auto object-cover aspect-video"
                />
              </motion.div>
              
              <div 
                className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-600 prose-li:text-gray-600 prose-strong:text-gray-900 prose-a:text-blue-600 hover:prose-a:text-blue-700"
                dangerouslySetInnerHTML={{ __html: service.content }} 
              />
            </motion.div>
            
            {/* Sidebar */}
            <motion.div 
              variants={fadeInUp}
              className="lg:col-span-4 space-y-8"
            >
              {/* Service benefits */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-sm border border-blue-100"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center shadow-md">
                    <ServiceIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                </div>
                
                <h4 className="font-semibold mb-4 text-gray-700">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, i) => (
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
              
              {/* Other services */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
              >
                <h3 className="text-xl font-bold mb-6 text-gray-900">Explore Other Services</h3>
                <div className="space-y-4">
                  {Object.entries(servicesDetails)
                    .filter(([key]) => key !== serviceId)
                    .map(([key, otherService]) => {
                      const OtherIcon = otherService.icon;
                      return (
                        <motion.div
                          key={key}
                          whileHover={{ x: 5 }}
                        >
                          <Link 
                            to={`/services/${key}`} 
                            className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                          >
                            <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                              <OtherIcon className="h-5 w-5 text-blue-600" />
                            </div>
                            <div>
                              <h4 className="font-medium text-gray-900">{otherService.title}</h4>
                              <p className="text-sm text-gray-500">{otherService.description.substring(0, 60)}...</p>
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
      
      {/* Features Section */}
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Key Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our AI-powered features that are most commonly included in {service.title.toLowerCase()} packages:
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all h-full flex flex-col border border-gray-100">
                  <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{feature.title}</h3>
                  <p className="text-gray-600 mb-6 flex-grow">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      {/* Service Workflow Section */}
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
              Our {service.title.toLowerCase()} service follows a streamlined workflow to ensure optimal security:
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
              {service.workflow.map((step, index) => (
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to implement {service.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI-powered security services can be tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-medium rounded-xl hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl"
            >
              Schedule a Consultation
            </Link>
            <Link 
              to="/services" 
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-medium rounded-xl hover:bg-white/10 transition-all"
            >
              Explore Other Services
            </Link>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};

export default ServiceDetail;
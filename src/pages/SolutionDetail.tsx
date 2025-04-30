import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link, useParams } from 'react-router-dom';
import { Home, Building, MapPin, ArrowRight, Check, Shield, Video, Bell, Cloud } from 'lucide-react';

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
      
      <h2>Family-Friendly Features</h2>
      
      <h3>Family Recognition</h3>
      <p>Our facial recognition technology can identify family members and regular visitors, providing personalized security responses. You'll receive different alerts when your children arrive home from school versus when an unknown person approaches your property.</p>
      
      <h3>Pet-Friendly Motion Detection</h3>
      <p>Traditional motion sensors can't tell the difference between your pet and an intruder. Our AI can distinguish pets from humans, dramatically reducing false alarms while maintaining security.</p>
      
      <h3>Privacy by Design</h3>
      <p>We understand that privacy is essential in your home. Our systems include privacy modes that can automatically disable indoor cameras when you're home while maintaining exterior surveillance.</p>
    `,
    services: [
      {
        id: 'intrusion-detection',
        title: 'Intrusion Detection',
        description: 'Detect unauthorized entry attempts with smart perimeter monitoring that distinguishes between welcome visitors and potential threats.',
        icon: Shield
      },
      {
        id: 'facial-recognition',
        title: 'Facial Recognition',
        description: 'Identify family members and regular visitors, allowing for personalized security responses and alerts.',
        icon: Video
      },
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Receive instant notifications on your smartphone when security events are detected at your home.',
        icon: Bell
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
      
      <h2>Beyond Security: Business Intelligence</h2>
      
      <h3>Customer Insights</h3>
      <p>For retail environments, our systems can provide valuable analytics on customer behavior, including foot traffic patterns, dwell times, and demographic information, all while maintaining privacy through anonymization.</p>
      
      <h3>Operations Optimization</h3>
      <p>Identify bottlenecks in customer flow, optimize staff placement based on customer density, and improve space utilization with heat mapping and movement analytics.</p>
      
      <h3>Loss Prevention</h3>
      <p>Our AI can detect suspicious behavior patterns associated with shoplifting or employee theft, alerting security personnel before losses occur.</p>
    `,
    services: [
      {
        id: 'intrusion-detection',
        title: 'Intrusion Detection',
        description: 'Secure your business premises with advanced monitoring that detects unauthorized access attempts even after hours.',
        icon: Shield
      },
      {
        id: 'facial-recognition',
        title: 'Facial Recognition',
        description: 'Control access to sensitive areas and identify VIP customers or persons of interest with precision biometric matching.',
        icon: Video
      },
      {
        id: 'cloud-video-analytics',
        title: 'Cloud Video Analytics',
        description: 'Process and analyze surveillance data in the cloud for insights on security events, customer behavior, and operational efficiency.',
        icon: Cloud
      }
    ],
    workflow: [
      {
        title: 'Multi-layer Surveillance',
        description: 'Comprehensive monitoring of perimeter, entry points, and interior spaces with AI-powered cameras.'
      },
      {
        title: 'Intelligent Analysis',
        description: 'Real-time processing of video feeds to identify security threats, unauthorized access, or suspicious behavior.'
      },
      {
        title: 'Coordinated Response',
        description: 'Automated alerts to security personnel with specific information about the nature and location of incidents.'
      },
      {
        title: 'Continuous Improvement',
        description: 'System learns from each incident, improving detection accuracy and reducing false alarms over time.'
      }
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
      
      <h2>Privacy-First Approach</h2>
      
      <h3>Anonymous Monitoring</h3>
      <p>Our public safety systems use anonymous detection by default, focusing on behaviors and patterns rather than individual identities. Facial recognition is used only in specific circumstances and with appropriate safeguards.</p>
      
      <h3>Transparent Governance</h3>
      <p>We believe in transparent deployment of AI surveillance in public spaces, with clear policies regarding data usage, retention, and access controls.</p>
      
      <h3>Ethical AI Design</h3>
      <p>Our systems are designed to minimize bias and ensure equal treatment, with regular auditing and testing to identify and correct potential issues.</p>
    `,
    services: [
      {
        id: 'real-time-alerts',
        title: 'Real-time Alerts',
        description: 'Enable immediate response to incidents with instant notifications to security personnel and first responders.',
        icon: Bell
      },
      {
        id: 'cloud-video-analytics',
        title: 'Cloud Video Analytics',
        description: 'Process large volumes of surveillance data to identify patterns, trends, and potential security concerns.',
        icon: Cloud
      },
      {
        id: 'intrusion-detection',
        title: 'Intrusion Detection',
        description: 'Secure restricted areas within public spaces with advanced monitoring and unauthorized access detection.',
        icon: Shield
      }
    ],
    workflow: [
      {
        title: 'Wide-Area Monitoring',
        description: 'AI-powered cameras monitor public spaces, focusing on behavioral patterns rather than individual identities.'
      },
      {
        title: 'Situation Analysis',
        description: 'Advanced algorithms detect unusual patterns, potential hazards, or emergency situations.'
      },
      {
        title: 'Coordinated Response',
        description: 'Automated alerts to appropriate personnel with real-time video feeds and situation details.'
      },
      {
        title: 'Continuous Adaptation',
        description: 'System adjusts to changing conditions and learns from each incident to improve future response.'
      }
    ]
  }
};

const SolutionDetail = () => {
  const { solutionId } = useParams<{ solutionId: string }>();
  const solution = solutionId ? solutionsDetails[solutionId as keyof typeof solutionsDetails] : null;

  if (!solution) {
    return (
      <Layout>
        <div className="container-default py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Solution Not Found</h1>
          <p className="mb-8">Sorry, the solution you're looking for doesn't exist or has been moved.</p>
          <Link to="/solutions" className="btn-primary">
            View All Solutions
          </Link>
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
      
      <section className="py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content */}
            <div className="lg:col-span-8">
              <img 
                src={solution.image} 
                alt={solution.title}
                className="w-full h-auto rounded-lg shadow-lg mb-10"
              />
              
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: solution.content }} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Solution benefits */}
              <div className="bg-zeex-50 rounded-lg p-8 mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <SolutionIcon className="h-6 w-6 text-zeex-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zeex-800">{solution.title}</h3>
                </div>
                
                <h4 className="font-semibold mb-4 text-zeex-700">Key Benefits</h4>
                <ul className="space-y-3 mb-8">
                  {solution.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zeex-500 mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn-primary w-full block text-center">
                  Request a Demo
                </Link>
              </div>
              
              {/* Other solutions */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-zeex-800">Other Solutions</h3>
                <div className="space-y-4">
                  {Object.entries(solutionsDetails)
                    .filter(([key]) => key !== solutionId)
                    .map(([key, otherSolution]) => {
                      const OtherIcon = otherSolution.icon;
                      return (
                        <Link 
                          to={`/solutions/${key}`} 
                          key={key} 
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-zeex-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-zeex-100 flex items-center justify-center">
                            <OtherIcon className="h-5 w-5 text-zeex-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-zeex-800">{otherSolution.title}</h4>
                          </div>
                          <ArrowRight className="w-4 h-4 text-zeex-500 ml-auto" />
                        </Link>
                      );
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Recommended Services */}
      <section className="bg-zeex-50 py-16">
        <div className="container-default">
          <h2 className="text-3xl font-bold mb-4 text-center text-zeex-800">Recommended Services</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our AI-powered services that are most commonly deployed in {solution.title.toLowerCase()} applications:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solution.services.map((service, index) => {
              const ServiceIcon = service.icon;
              return (
                <Link 
                  to={`/services/${service.id}`}
                  key={index} 
                  className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-full bg-zeex-50 flex items-center justify-center mb-6">
                    <ServiceIcon className="h-6 w-6 text-zeex-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-zeex-800">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-zeex-600 font-medium flex items-center">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
      
      {/* Solution Workflow */}
      <section className="py-16">
        <div className="container-default">
          <h2 className="text-3xl font-bold mb-4 text-center text-zeex-800">How It Works</h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our {solution.title.toLowerCase()} solution follows a streamlined workflow to ensure optimal security:
          </p>
          
          <div className="relative">
            {/* Connector line */}
            <div className="absolute top-16 left-[calc(50%-1px)] h-[calc(100%-80px)] w-0.5 bg-zeex-200 hidden md:block"></div>
            
            <div className="space-y-16">
              {solution.workflow.map((step, index) => (
                <div key={index} className="relative">
                  <div className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    {/* Step number */}
                    <div className="w-10 h-10 rounded-full bg-zeex-600 text-white flex items-center justify-center font-bold text-lg relative z-10">
                      {index + 1}
                    </div>
                    
                    {/* Content */}
                    <div className="bg-white rounded-lg shadow-md p-8 md:w-[calc(50%-40px)] relative">
                      <h3 className="text-xl font-bold mb-3 text-zeex-800">{step.title}</h3>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to implement {solution.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to learn how our AI-powered security solutions can be tailored to your specific needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
              Schedule a Consultation
            </Link>
            <Link to="/solutions" className="btn-secondary text-white border-white hover:bg-white/10">
              Explore Other Solutions
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default SolutionDetail;

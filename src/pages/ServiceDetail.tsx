import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Link, useParams } from 'react-router-dom';
import { Shield, Video, Bell, Cloud, Check, ArrowRight } from 'lucide-react';

// Service details data
const servicesDetails = {
  'intrusion-detection': {
    title: 'Intrusion Detection',
    description: 'Advanced AI-powered intrusion detection systems that distinguish between humans, animals, and objects, reducing false alarms by up to 95%.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
    headerImage: 'https://images.unsplash.com/photo-1553408436-2692d7b25d0b',
    features: [
      'Perimeter monitoring with virtual boundaries',
      'Human/animal/object classification',
      'Low false alarm rate',
      'Works in various lighting conditions',
      'Integration with existing security systems'
    ],
    content: `
      <h2>How Our Intrusion Detection Works</h2>
      <p>ZeexAI's intrusion detection system uses advanced computer vision and machine learning algorithms to provide comprehensive perimeter security. Our technology can distinguish between humans, animals, vehicles, and other objects, reducing false alarms by up to 95% compared to traditional motion detection systems.</p>
      
      <p>The system works by establishing virtual boundaries around your property. When something crosses these boundaries, our AI immediately analyzes the object, classifies it, and determines if it represents a potential threat. If a threat is detected, alerts are sent to your mobile devices and security personnel in real-time.</p>
      
      <h3>Key Technology Components:</h3>
      <ul>
        <li><strong>Advanced Neural Networks:</strong> Our proprietary neural networks are trained on millions of images to accurately classify objects in various lighting and weather conditions.</li>
        <li><strong>Behavioral Analysis:</strong> Beyond simple object recognition, our system analyzes movement patterns to distinguish between normal and suspicious behavior.</li>
        <li><strong>Adaptive Learning:</strong> The system continuously learns from new data, improving its accuracy over time.</li>
      </ul>
      
      <h2>Benefits of AI-Powered Intrusion Detection</h2>
      <p>Traditional security cameras simply record footage for later review, but our system actively monitors your property and alerts you to potential threats as they happen. This proactive approach to security can prevent incidents before they occur and provide valuable time to respond appropriately.</p>
      
      <h3>Reduced False Alarms</h3>
      <p>One of the biggest challenges in security systems is the high rate of false alarms. Our AI technology significantly reduces these by understanding the context of movements and accurately distinguishing between harmless activity (like animals or moving branches) and potential threats.</p>
      
      <h3>24/7 Reliable Monitoring</h3>
      <p>Our system works effectively in all lighting conditions, including complete darkness, ensuring your property is protected around the clock. The technology adapts to changing environmental conditions to maintain consistent detection accuracy.</p>
    `,
    useCases: [
      {
        title: 'Residential Security',
        description: 'Protect your home with intelligent perimeter monitoring that distinguishes between delivery personnel, visitors, and potential intruders.',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa'
      },
      {
        title: 'Commercial Property Protection',
        description: 'Secure warehouses, offices, and retail locations with advanced monitoring that detects unauthorized access and suspicious activity.',
        image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2'
      },
      {
        title: 'Construction Site Security',
        description: 'Prevent theft and vandalism at construction sites by detecting after-hours activity and unauthorized access to restricted areas.',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5'
      }
    ]
  },
  'facial-recognition': {
    title: 'Facial Recognition',
    description: 'Identify and verify individuals with industry-leading precision using our advanced facial recognition system that works effectively even in challenging lighting conditions.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    headerImage: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3',
    features: [
      'High-precision facial matching',
      'Works in low light conditions',
      'Spoof detection technology',
      'GDPR and privacy compliant',
      'Customizable access permissions'
    ],
    content: `
      <h2>State-of-the-Art Facial Recognition</h2>
      <p>ZeexAI's facial recognition technology represents the cutting edge of biometric security. Our system can identify individuals with over 99.8% accuracy, even in challenging conditions such as low light, partial face coverage, or unusual angles.</p>
      
      <p>Unlike conventional facial recognition that relies solely on 2D image matching, our technology creates detailed 3D facial maps with over 200 unique identifying points. This approach dramatically improves accuracy and prevents spoofing attempts using photos or videos.</p>
      
      <h3>Privacy-First Design:</h3>
      <p>We understand the privacy concerns associated with facial recognition technology. That's why our systems are designed with strong privacy protections:</p>
      <ul>
        <li>All facial data is encrypted using military-grade encryption</li>
        <li>Biometric templates cannot be reverse-engineered into recognizable images</li>
        <li>Customizable retention policies to comply with local regulations</li>
        <li>Comprehensive audit logs of all system access and usage</li>
      </ul>
      
      <h2>Versatile Applications</h2>
      <p>Our facial recognition technology can be deployed in various scenarios:</p>
      
      <h3>Access Control</h3>
      <p>Replace or supplement traditional access cards and PIN codes with the most secure form of identification – your face. Our system integrates with existing access control systems to provide seamless, hands-free entry for authorized personnel while maintaining detailed access logs.</p>
      
      <h3>VIP Identification</h3>
      <p>For retail and hospitality settings, our system can identify VIP customers as they enter your establishment, allowing staff to provide personalized service and enhance customer experience.</p>
      
      <h3>Watchlist Alerts</h3>
      <p>Maintain customizable watchlists of individuals who warrant special attention, such as known shoplifters in retail settings or persons of interest for security operations.</p>
    `,
    useCases: [
      {
        title: 'Corporate Access Control',
        description: 'Replace keycards with facial recognition for secure and convenient access to facilities, with detailed logs of all entry and exit events.',
        image: 'https://images.unsplash.com/photo-1497215842964-222b430dc094'
      },
      {
        title: 'VIP Customer Recognition',
        description: 'Identify important customers as they enter your establishment to provide personalized service and enhance customer experience.',
        image: 'https://images.unsplash.com/photo-1552960562-daf630e9278b'
      },
      {
        title: 'Secure Patient Identification',
        description: 'Ensure the right patients receive the right care in healthcare settings with accurate biometric identification.',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef'
      }
    ]
  },
  'real-time-alerts': {
    title: 'Real-time Alerts',
    description: 'Receive instant notifications when security events are detected, allowing for immediate response to potential threats through our multi-channel alert system.',
    icon: Bell,
    image: 'https://images.unsplash.com/photo-1574269252556-89926e7c5805',
    headerImage: 'https://images.unsplash.com/photo-1589652717521-10c0d092dea9',
    features: [
      'Multi-channel notifications (mobile, email, SMS)',
      'Customizable alert thresholds',
      'Video verification of alerts',
      'Escalation protocols',
      'AI-powered threat assessment'
    ],
    content: `
      <h2>Instant Awareness with Real-time Alerts</h2>
      <p>When security incidents occur, every second counts. ZeexAI's real-time alert system ensures you're immediately informed about potential security threats, allowing for rapid response and mitigation.</p>
      
      <p>Our alert system is built on a multi-channel notification framework that delivers critical information through multiple pathways to ensure you never miss an important alert, regardless of where you are or what you're doing.</p>
      
      <h3>Intelligent Alert Classification</h3>
      <p>Not all security events are equal in urgency or importance. Our AI classifies alerts based on threat level, allowing you to set different notification protocols for different types of events:</p>
      <ul>
        <li><strong>Critical Alerts:</strong> Immediate notifications through all available channels for high-priority security threats</li>
        <li><strong>Warning Alerts:</strong> Notifications for suspicious activities that warrant attention but may not require immediate action</li>
        <li><strong>Informational Alerts:</strong> Updates on normal operations and system status</li>
      </ul>
      
      <h2>Comprehensive Notification Options</h2>
      
      <h3>Mobile App Notifications</h3>
      <p>Our dedicated mobile app delivers push notifications with video verification capabilities. When an alert is triggered, you can immediately view the live video feed to assess the situation and determine the appropriate response.</p>
      
      <h3>SMS and Email Alerts</h3>
      <p>For situations where you might not be actively using the mobile app, our system sends SMS text messages and emails with details about the security event, including time, location, and event type.</p>
      
      <h3>Emergency Contact Escalation</h3>
      <p>If primary contacts don't acknowledge critical alerts within a specified timeframe, our system can automatically escalate to secondary contacts or security monitoring services to ensure a response.</p>
    `,
    useCases: [
      {
        title: 'After-Hours Business Monitoring',
        description: 'Receive instant alerts when activity is detected at your business premises outside of normal operating hours.',
        image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786'
      },
      {
        title: 'Home Security Management',
        description: 'Stay informed about activity at your home while you're away, with video verification to distinguish between family members and unknown visitors.',
        image: 'https://images.unsplash.com/photo-1558959356-2a58e342afef'
      },
      {
        title: 'Critical Infrastructure Protection',
        description: 'Monitor sensitive areas and receive immediate alerts if unauthorized access is detected, with automated escalation to security personnel.',
        image: 'https://images.unsplash.com/photo-1453914098252-af111884c08f'
      }
    ]
  },
  'cloud-video-analytics': {
    title: 'Cloud Video Analytics',
    description: 'Process and analyze video data in the cloud with our scalable infrastructure, providing detailed insights and trend analysis for comprehensive security management.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28',
    headerImage: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa',
    features: [
      'Secure cloud storage',
      'Advanced search capabilities',
      'Event-based video indexing',
      'Scalable storage options',
      'Detailed analytics reports'
    ],
    content: `
      <h2>Powerful Cloud-Based Video Analytics</h2>
      <p>ZeexAI's cloud video analytics platform transforms raw surveillance footage into actionable intelligence. Our platform leverages the scalability and processing power of the cloud to analyze vast amounts of video data in real-time, extracting valuable insights without requiring expensive on-premises hardware.</p>
      
      <p>By moving video processing to the cloud, we enable advanced analytics capabilities that would be impossible with traditional DVR or NVR systems, while ensuring your data remains secure and accessible from anywhere.</p>
      
      <h3>Smart Video Indexing and Search</h3>
      <p>Our system automatically indexes video content based on objects, activities, and events detected in the footage. This creates a searchable database of video content that allows you to quickly find specific incidents without manually reviewing hours of footage.</p>
      <ul>
        <li><strong>Object-Based Search:</strong> Find footage containing specific objects like "red car" or "person with backpack"</li>
        <li><strong>Event-Based Search:</strong> Locate incidents like "person entering restricted area" or "package delivery"</li>
        <li><strong>Temporal Search:</strong> Quickly find events that occurred at specific times or date ranges</li>
      </ul>
      
      <h2>Comprehensive Analytics Dashboard</h2>
      
      <h3>Activity Heatmaps</h3>
      <p>Visualize patterns of movement throughout your property to identify high-traffic areas, potential security vulnerabilities, or opportunities to optimize space utilization.</p>
      
      <h3>Occupancy Tracking</h3>
      <p>Monitor the number of people in different areas of your property in real-time, with historical reporting to identify usage patterns and trends.</p>
      
      <h3>Custom Analytics Reports</h3>
      <p>Generate detailed reports on security events, occupancy levels, traffic patterns, and other metrics to inform security planning and operational decisions.</p>
    `,
    useCases: [
      {
        title: 'Retail Analytics',
        description: 'Analyze customer flow patterns and dwell times to optimize store layouts and staffing while enhancing security monitoring.',
        image: 'https://images.unsplash.com/photo-1481437156560-3205f6a55735'
      },
      {
        title: 'Multi-Site Security Management',
        description: 'Centrally monitor and manage security across multiple locations with consistent policies and comprehensive reporting.',
        image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab'
      },
      {
        title: 'Long-Term Trend Analysis',
        description: 'Identify patterns in security events over time to proactively address vulnerabilities and optimize security protocols.',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71'
      }
    ]
  }
};

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesDetails[serviceId as keyof typeof servicesDetails] : null;

  if (!service) {
    return (
      <Layout>
        <div className="container-default py-20 text-center">
          <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
          <p className="mb-8">Sorry, the service you're looking for doesn't exist or has been moved.</p>
          <Link to="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </Layout>
    );
  }

  const ServiceIcon = service.icon;

  return (
    <Layout>
      <PageHeader 
        title={service.title}
        subtitle={service.description}
        backgroundImage={service.headerImage}
      />
      
      <section className="py-16">
        <div className="container-default">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            {/* Main content */}
            <div className="lg:col-span-8">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-auto rounded-lg shadow-lg mb-10"
              />
              
              <div className="prose prose-lg max-w-none">
                <div dangerouslySetInnerHTML={{ __html: service.content }} />
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              {/* Service features */}
              <div className="bg-zeex-50 rounded-lg p-8 mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-sm">
                    <ServiceIcon className="h-6 w-6 text-zeex-600" />
                  </div>
                  <h3 className="text-xl font-bold text-zeex-800">{service.title}</h3>
                </div>
                
                <h4 className="font-semibold mb-4 text-zeex-700">Key Features</h4>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-zeex-500 mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link to="/contact" className="btn-primary w-full block text-center">
                  Request a Demo
                </Link>
              </div>
              
              {/* Other services */}
              <div className="bg-white border border-gray-200 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6 text-zeex-800">Other Services</h3>
                <div className="space-y-4">
                  {Object.entries(servicesDetails)
                    .filter(([key]) => key !== serviceId)
                    .map(([key, otherService]) => {
                      const OtherIcon = otherService.icon;
                      return (
                        <Link 
                          to={`/services/${key}`} 
                          key={key} 
                          className="flex items-center gap-4 p-3 rounded-lg hover:bg-zeex-50 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full bg-zeex-100 flex items-center justify-center">
                            <OtherIcon className="h-5 w-5 text-zeex-600" />
                          </div>
                          <div>
                            <h4 className="font-medium text-zeex-800">{otherService.title}</h4>
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
      
      {/* Use Cases Section */}
      <section className="bg-zeex-50 py-16">
        <div className="container-default">
          <h2 className="text-3xl font-bold mb-12 text-center text-zeex-800">Use Cases</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.useCases.map((useCase, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={useCase.image} 
                    alt={useCase.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zeex-800">{useCase.title}</h3>
                  <p className="text-gray-600">{useCase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to enhance your security with {service.title}?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team is ready to help you implement the perfect solution for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
              Schedule a Demo
            </Link>
            <Link to="/services" className="btn-secondary text-white border-white hover:bg-white/10">
              Explore Other Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ServiceDetail;

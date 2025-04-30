
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Shield, Video, Bell, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

// Service data
const services = [
  {
    id: 'intrusion-detection',
    title: 'Intrusion Detection',
    description: 'Our AI-powered intrusion detection system uses advanced computer vision to distinguish between humans, animals, and objects, reducing false alarms by up to 95%.',
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9',
    features: [
      'Perimeter monitoring with virtual boundaries',
      'Human/animal/object classification',
      'Low false alarm rate',
      'Works in various lighting conditions',
      'Integration with existing security systems'
    ]
  },
  {
    id: 'facial-recognition',
    title: 'Facial Recognition',
    description: 'Identify and verify individuals with industry-leading precision using our advanced facial recognition system that works effectively even in challenging lighting conditions.',
    icon: Video,
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e',
    features: [
      'High-precision facial matching',
      'Works in low light conditions',
      'Spoof detection technology',
      'GDPR and privacy compliant',
      'Customizable access permissions'
    ]
  },
  {
    id: 'real-time-alerts',
    title: 'Real-time Alerts',
    description: 'Receive instant notifications when security events are detected, allowing for immediate response to potential threats through our multi-channel alert system.',
    icon: Bell,
    image: 'https://images.unsplash.com/photo-1574269252556-89926e7c5805',
    features: [
      'Multi-channel notifications (mobile, email, SMS)',
      'Customizable alert thresholds',
      'Video verification of alerts',
      'Escalation protocols',
      'AI-powered threat assessment'
    ]
  },
  {
    id: 'cloud-video-analytics',
    title: 'Cloud Video Analytics',
    description: 'Process and analyze video data in the cloud with our scalable infrastructure, providing detailed insights and trend analysis for comprehensive security management.',
    icon: Cloud,
    image: 'https://images.unsplash.com/photo-1639322537504-6427a16b0a28',
    features: [
      'Secure cloud storage',
      'Advanced search capabilities',
      'Event-based video indexing',
      'Scalable storage options',
      'Detailed analytics reports'
    ]
  }
];

const Services = () => {
  return (
    <Layout>
      <PageHeader 
        title="Our Services"
        subtitle="Comprehensive AI-powered security solutions for all your surveillance needs"
        backgroundImage="https://images.unsplash.com/photo-1624969862644-791f3dc98927"
      />
      
      <section className="py-16">
        <div className="container-default">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-zeex-800">Advanced AI Security Services</h2>
            <p className="text-lg text-gray-600">
              Our comprehensive suite of AI-powered security services provides unparalleled protection for residential, commercial, and public spaces.
            </p>
          </div>
          
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Image column that alternates sides */}
                <div className={index % 2 === 0 ? 'order-none' : 'order-none lg:order-last'}>
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
                
                {/* Content column */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-zeex-50 flex items-center justify-center">
                      <service.icon className="h-6 w-6 text-zeex-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-zeex-800">{service.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-8">
                    {service.description}
                  </p>
                  
                  <h4 className="font-semibold mb-4 text-zeex-700">Key Features</h4>
                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-zeex-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link to={`/services/${service.id}`} className="btn-primary inline-flex items-center">
                    Learn More
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to secure what matters most?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today to schedule a demo or learn more about our AI security solutions.
          </p>
          <Link to="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
            Request a Demo
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default Services;

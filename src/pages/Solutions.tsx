
import React from 'react';
import Layout from '@/components/layout/Layout';
import PageHeader from '@/components/shared/PageHeader';
import { Home, Building, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

// Solution data
const solutions = [
  {
    id: 'residential',
    title: 'Residential Security',
    description: 'Comprehensive AI-powered security systems designed specifically for homes and residential properties. Our solution integrates seamlessly with your existing smart home setup, providing unparalleled protection for your family and property.',
    icon: Home,
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa',
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
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab',
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
    image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205',
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
      <PageHeader 
        title="Our Solutions"
        subtitle="Tailored AI security systems for every environment"
        backgroundImage="https://images.unsplash.com/photo-1573164574001-518958d9baa2"
      />
      
      <section className="py-16">
        <div className="container-default">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6 text-zeex-800">Security Tailored to Your Environment</h2>
            <p className="text-lg text-gray-600">
              Every security challenge is unique. Our AI-powered solutions are designed to adapt to specific environments and security needs.
            </p>
          </div>
          
          <div className="space-y-32">
            {solutions.map((solution, index) => (
              <div key={solution.id} id={solution.id} className="scroll-mt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mb-16">
                  {/* Image column that alternates sides */}
                  <div className={index % 2 === 0 ? 'order-none' : 'order-none lg:order-last'}>
                    <div className="rounded-lg overflow-hidden shadow-lg">
                      <img 
                        src={solution.image} 
                        alt={solution.title} 
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  
                  {/* Content column */}
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-full bg-zeex-50 flex items-center justify-center">
                        <solution.icon className="h-6 w-6 text-zeex-600" />
                      </div>
                      <h3 className="text-2xl font-bold text-zeex-800">{solution.title}</h3>
                    </div>
                    
                    <p className="text-gray-600 mb-8">
                      {solution.description}
                    </p>
                    
                    <h4 className="font-semibold mb-4 text-zeex-700">Key Benefits</h4>
                    <ul className="space-y-3 mb-8">
                      {solution.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-zeex-500 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Use Cases Section */}
                <div className="bg-zeex-50 p-8 rounded-lg">
                  <h4 className="text-xl font-semibold mb-6 text-zeex-800">How {solution.title} Works in Practice</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {solution.useCases.map((useCase, i) => (
                      <div key={i} className="bg-white p-6 rounded-md shadow">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-8 h-8 rounded-full bg-zeex-100 flex items-center justify-center text-zeex-600 font-semibold">
                            {i + 1}
                          </div>
                          <h5 className="font-medium text-zeex-700">Use Case</h5>
                        </div>
                        <p>{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 bg-zeex-50">
        <div className="container-default">
          <h2 className="text-3xl font-bold mb-10 text-center text-zeex-800">Solution Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow">
              <thead>
                <tr className="bg-zeex-600 text-white">
                  <th className="py-4 px-6 text-left">Features</th>
                  <th className="py-4 px-6 text-center">Residential</th>
                  <th className="py-4 px-6 text-center">Commercial</th>
                  <th className="py-4 px-6 text-center">Public Safety</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">AI-powered detection</td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">Facial recognition</td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">Multi-camera support</td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Up to 8</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Unlimited</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Unlimited</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">Smart alerts</td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">Analytics dashboard</td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Basic</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Advanced</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Advanced</span>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-6 font-medium">Cloud storage</td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">30 days</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">90 days</span>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <span className="text-sm">Customizable</span>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-6 font-medium">API access</td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                  <td className="py-3 px-6 text-center">
                    <svg className="w-6 h-6 mx-auto text-zeex-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg py-20 text-white">
        <div className="container-default text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Explore the Right Solution for Your Needs?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Our team of security experts is ready to help you find the perfect AI surveillance solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact" className="btn-primary bg-white text-zeex-600 hover:bg-zeex-50">
              Schedule a Consultation
            </Link>
            <Link to="/services" className="btn-secondary text-white border-white hover:bg-white/10">
              Learn About Our Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Solutions;

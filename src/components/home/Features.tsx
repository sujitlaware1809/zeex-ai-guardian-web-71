
import React, { useEffect } from 'react';
import { Shield, Video, Bell, Cloud } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  linkTo: string;
  delay: string;
}

const FeatureCard: React.FC<FeatureProps> = ({ icon, title, description, linkTo, delay }) => {
  return (
    <Link to={linkTo} className="animate-on-scroll opacity-0 card-hover" style={{ animationDelay: delay }}>
      <div className="bg-white rounded-xl shadow-md p-8 h-full flex flex-col">
        <div className="mb-5 text-zeex-500">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-3 text-zeex-800">{title}</h3>
        <p className="text-gray-600 flex-grow">{description}</p>
        <div className="mt-5">
          <span className="text-zeex-500 font-medium flex items-center gap-1">
            Learn more
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

const Features = () => {
  // Animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-20 bg-zeex-50">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="text-zeex-800 mb-5 animate-on-scroll opacity-0">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            Zeex AI offers comprehensive intelligent surveillance solutions powered by cutting-edge technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <FeatureCard 
            icon={<Shield size={42} />}
            title="Intrusion Detection"
            description="Detect unauthorized entries with state-of-the-art perimeter monitoring that distinguishes between humans, animals, and objects."
            linkTo="/services/intrusion-detection"
            delay="0.1s"
          />
          
          <FeatureCard 
            icon={<Video size={42} />}
            title="Facial Recognition"
            description="Identify and verify individuals with precision using our advanced facial recognition system that works in various lighting conditions."
            linkTo="/services/facial-recognition"
            delay="0.2s"
          />
          
          <FeatureCard 
            icon={<Bell size={42} />}
            title="Real-time Alerts"
            description="Receive instant notifications on your devices when security events are detected, allowing for immediate response to potential threats."
            linkTo="/services/real-time-alerts"
            delay="0.3s"
          />
          
          <FeatureCard 
            icon={<Cloud size={42} />}
            title="Cloud Video Analytics"
            description="Store, process and analyze video data in the cloud with our scalable infrastructure, providing insights and trend analysis."
            linkTo="/services/cloud-video-analytics"
            delay="0.4s"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;

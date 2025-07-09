import React, { useEffect } from 'react';
import { Shield, Video, Bell, Cloud, ArrowRight } from 'lucide-react';
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
    <Link 
      to={linkTo} 
      className="animate-on-scroll group" 
      style={{ animationDelay: delay }}
    >
      <div className="bg-white rounded-2xl p-8 h-full flex flex-col border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-100">
        <div className="mb-6 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center text-blue-600 group-hover:from-blue-100 group-hover:to-indigo-100 transition-colors">
          {React.cloneElement(icon as React.ReactElement, { size: 28 })}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{title}</h3>
        
        <p className="text-gray-600 flex-grow mb-6">{description}</p>
        
        <div className="mt-auto">
          <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:gap-3 transition-all">
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
            setTimeout(() => {
              entry.target.classList.add('animate-fade-up');
            }, 100);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(el => {
      el.setAttribute('style', 'opacity: 0; transform: translateY(20px); visibility: visible;');
      observer.observe(el);
    });

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container-default px-6">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 animate-on-scroll">
            AI-Powered Solutions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-5 animate-on-scroll max-w-3xl mx-auto">
          Core <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Features</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Zeex AI delivers intelligent surveillance solutions powered by cutting-edge computer vision and deep learning technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<Shield />}
            title="Advanced Threat Detection"
            description="Our AI-powered threat detection system continuously monitors and identifies potential security risks before they become problems."
            linkTo=""
            delay="0.1s"
          />
          
          <FeatureCard 
            icon={<Video />}
            title="AI-Visual Surveillance Analytics"
            description="Intelligent video analysis detects unusual patterns while ensuring privacy and compliance."
            linkTo=""
            delay="0.2s"
          />
          
          <FeatureCard 
            icon={<Bell />}
            title="Real-time alerts on your Devices"
            description="Instant notifications with contextual information delivered to your preferred devices."
            linkTo=""
            delay="0.3s"
          />
          
          <FeatureCard 
            icon={<Cloud />}
            title="Seamless Integration with CCTV and Device"
            description="Easy setup, multi-device support, and customizable dashboard."
            linkTo=""
            delay="0.4s"
          />
        </div>

        

        <div className="text-center mt-16 animate-on-scroll" style={{ animationDelay: '0.6s' }}>
          <Link 
            to="/solutions" 
            className="inline-flex items-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all hover:bg-gray-50 hover:-translate-y-0.5"
          >
            Explore all features
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
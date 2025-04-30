
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Building, Home, MapPin } from 'lucide-react';

const SolutionsPreview = () => {
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
    <section className="py-20">
      <div className="container-default">
        <div className="text-center mb-16">
          <h2 className="text-zeex-800 mb-5 animate-on-scroll opacity-0">Tailored AI Solutions</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            No matter your environment, our AI surveillance systems adapt to meet your specific security needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Residential Security Card */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.1s' }}>
            <div className="group relative overflow-hidden rounded-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zeex-800 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" 
                alt="Residential Security" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="p-2 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Home className="text-zeex-600" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Residential Security</h3>
                <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Protect your home with smart monitoring that integrates seamlessly with your existing security systems.
                </p>
                <Link 
                  to="/solutions/residential" 
                  className="inline-flex items-center text-white font-medium"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Surveillance Card */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.2s' }}>
            <div className="group relative overflow-hidden rounded-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zeex-800 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                alt="Commercial Surveillance" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="p-2 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Building className="text-zeex-600" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Commercial Surveillance</h3>
                <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Enterprise-grade security solutions to protect your business assets, employees, and premises 24/7.
                </p>
                <Link 
                  to="/solutions/commercial" 
                  className="inline-flex items-center text-white font-medium"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Public Safety Card */}
          <div className="animate-on-scroll opacity-0" style={{ animationDelay: '0.3s' }}>
            <div className="group relative overflow-hidden rounded-xl h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zeex-800 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205" 
                alt="Public Safety" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <div className="p-2 bg-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <MapPin className="text-zeex-600" />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Public Safety</h3>
                <p className="text-white/90 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Enhance safety in public spaces with smart monitoring that helps identify potential threats before they escalate.
                </p>
                <Link 
                  to="/solutions/public-safety" 
                  className="inline-flex items-center text-white font-medium"
                >
                  Learn more
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-2">
                    <path d="M3.33337 8H12.6667" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.66667 4L12.6667 8L8.66667 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link to="/solutions" className="btn-primary">
            View All Solutions
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;

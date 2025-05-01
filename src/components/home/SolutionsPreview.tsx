import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, MapPin, ArrowRight } from 'lucide-react';

const SolutionsPreview = () => {
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
      <div className="container-default px-4">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-medium mb-4 animate-on-scroll">
            Industry Solutions
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-5 animate-on-scroll max-w-3xl mx-auto">
            AI Security for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Every Environment</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            Customized surveillance solutions that adapt to your specific security requirements and infrastructure.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Residential Security Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1560518883-ce09059eeffa" 
                alt="Residential Security" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="p-3 bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md group-hover:bg-blue-50 transition-colors">
                  <Home className="text-blue-600" size={24} />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Residential Security</h3>
                <p className="text-white/90 mb-6">
                  Smart home monitoring that integrates with your existing systems for complete peace of mind.
                </p>
                <Link 
                  to="/solutions/residential" 
                  className="inline-flex items-center text-white font-medium group-hover:text-blue-300 transition-colors"
                >
                  Explore solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Commercial Surveillance Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.2s' }}>
            <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" 
                alt="Commercial Surveillance" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="p-3 bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md group-hover:bg-indigo-50 transition-colors">
                  <Building className="text-indigo-600" size={24} />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Commercial Surveillance</h3>
                <p className="text-white/90 mb-6">
                  Comprehensive protection for businesses with real-time monitoring and analytics.
                </p>
                <Link 
                  to="/solutions/commercial" 
                  className="inline-flex items-center text-white font-medium group-hover:text-indigo-300 transition-colors"
                >
                  Explore solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Public Safety Card */}
          <div className="animate-on-scroll" style={{ animationDelay: '0.3s' }}>
            <div className="group relative overflow-hidden rounded-2xl h-full border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-gray-900/80 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205" 
                alt="Public Safety" 
                className="w-full h-80 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="p-3 bg-white rounded-xl w-14 h-14 flex items-center justify-center mb-5 shadow-md group-hover:bg-purple-50 transition-colors">
                  <MapPin className="text-purple-600" size={24} />
                </div>
                <h3 className="text-white text-2xl font-semibold mb-3">Public Safety</h3>
                <p className="text-white/90 mb-6">
                  Smart city solutions that enhance security in public spaces and transportation hubs.
                </p>
                <Link 
                  to="/solutions/public-safety" 
                  className="inline-flex items-center text-white font-medium group-hover:text-purple-300 transition-colors"
                >
                  Explore solution
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16 animate-on-scroll" style={{ animationDelay: '0.4s' }}>
          <Link 
            to="/solutions" 
            className="inline-flex items-center px-6 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5"
          >
            View all solutions
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;
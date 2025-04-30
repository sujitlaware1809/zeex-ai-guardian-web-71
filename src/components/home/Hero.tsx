
import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

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

    // Add initial animation to hero elements without waiting for scroll
    setTimeout(() => {
      document.querySelectorAll('.hero-element').forEach(el => {
        el.classList.add('animate-fade-up');
      });
    }, 100);

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const scrollToContent = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Tech mesh background */}
      <div className="absolute inset-0 mesh-bg opacity-10"></div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-[10%] w-32 h-32 rounded-full bg-zeex-100 filter blur-[60px] animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-[10%] w-40 h-40 rounded-full bg-zeex-300 filter blur-[80px] animate-pulse-slow"></div>
      </div>

      <div className="container-default relative z-10 pt-12 pb-24">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="font-bold text-zeex-800 hero-element opacity-0 mb-6">
            AI-Powered Surveillance for a Safer Tomorrow
          </h1>

          <p className="text-xl md:text-2xl mb-8 text-zeex-700 max-w-3xl mx-auto hero-element opacity-0" style={{ animationDelay: '0.3s' }}>
            Zeex AI leverages real-time computer vision and intelligent analytics to secure what matters most.
          </p>

          {/* Video placeholder */}
          <div 
            className="w-full max-w-4xl mx-auto aspect-video bg-zeex-600 rounded-xl shadow-2xl mb-12 overflow-hidden hero-element opacity-0" 
            style={{ animationDelay: '0.6s' }}
          >
            <div className="w-full h-full flex items-center justify-center">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Zeex AI Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 hero-element opacity-0" 
            style={{ animationDelay: '0.9s' }}
          >
            <Link to="/contact" className="btn-primary text-lg w-full sm:w-auto">
              Request a Demo
            </Link>
            <Link to="/solutions" className="btn-secondary text-lg w-full sm:w-auto">
              Explore Solutions
            </Link>
          </div>

          {/* Scroll indicator */}
          <div 
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce"
            onClick={scrollToContent}
          >
            <ArrowDown className="h-6 w-6 text-zeex-600" />
          </div>
        </div>
      </div>

      {/* Target for scroll indicator */}
      <div ref={scrollRef}></div>
    </section>
  );
};

export default Hero;

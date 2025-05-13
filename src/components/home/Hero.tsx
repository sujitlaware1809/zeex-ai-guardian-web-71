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
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 pt-20 md:pt-24">
      {/* Modern animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent opacity-20 animate-gradient-pan"></div>
      </div>

      {/* Floating tech elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-[15%] w-4 h-4 rounded-full bg-blue-500/50 filter blur-[15px] animate-float-slow"></div>
        <div className="absolute top-1/3 right-[20%] w-6 h-6 rounded-full bg-indigo-500/50 filter blur-[20px] animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-[15%] w-8 h-8 rounded-full bg-purple-500/50 filter blur-[25px] animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-[10%] w-10 h-10 rounded-full bg-cyan-500/50 filter blur-[30px] animate-float-slow"></div>
      </div>

      <div className="container-default relative z-10 pb-24 px-4">
        <div className="text-center max-w-6xl mx-auto">
          <div className="inline-block mb-4 px-4 py-2 bg-blue-100/50 backdrop-blur-sm rounded-full border border-blue-200/50 hero-element">
            <span className="text-sm font-medium text-blue-600"> Real-Time Intelligence. Real-World Impact</span>
          </div>

     <div className="overflow-visible">  {/* Prevents text clipping */}
  <h1 className="font-bold text-4xl md:text-4xl lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 gradient-text-safe hero-element leading-[1.3] md:leading-[1.4] pb-2">
    AI-Powered Surveillance for Safety & Smart Management
  </h1>
</div>
<div className="my-8"></div>
<p className="text-xl md:text-2xl mb-8 text-gray-700 max-w-3xl mx-auto hero-element pb-1" style={{ animationDelay: '0.3s' }}>
  Zeex AI redefines how businesses, cities, and industries protect and manage their environments using AI-driven surveillance to detect, respond, and prevent incidents before they escalate.
</p>

          {/* Video with modern border */}
          <div 
            className="w-full max-w-5xl mx-auto aspect-video rounded-2xl mb-10 overflow-hidden hero-element relative group" 
            style={{ animationDelay: '0.6s' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-2xl group-hover:opacity-30 transition-opacity duration-300"></div>
            <div className="absolute inset-0.5 rounded-xl bg-white overflow-hidden">
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
                title="Zeex AI Demo Video" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                className="scale-[0.99] group-hover:scale-100 transition-transform duration-300"
              ></iframe>
            </div>
            <div className="absolute inset-0 border-2 border-white/10 rounded-2xl pointer-events-none"></div>
          </div>

          {/* CTA buttons with hover effects */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-14 hero-element" 
            style={{ animationDelay: '0.9s' }}
          >
            <Link 
              to="/contact" 
              className="relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group w-full sm:w-auto"
            >
              <span className="relative z-10">Request a Demo</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            <Link 
              to="/solutions" 
              className="px-8 py-4 bg-white text-gray-900 font-medium rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02] hover:bg-gray-50 w-full sm:w-auto"
            >
              Explore Solutions
            </Link>
          </div>

          {/* Modern scroll indicator */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
            onClick={scrollToContent}
          >
            <div className="w-12 h-20 rounded-full border-2 border-gray-300/50 flex items-center justify-center">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full animate-bounce group-hover:from-blue-600 group-hover:to-indigo-600 transition-colors"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Target for scroll indicator */}
      <div ref={scrollRef}></div>

      {/* Animation styles */}
      <style>{`
        @keyframes gradient-pan {
          from { background-position: 0% 0%; }
          to { background-position: 100% 100%; }
        }
        .animate-gradient-pan {
          animation: gradient-pan 15s ease infinite alternate;
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        @keyframes float-medium {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-15px) translateX(-10px); }
        }
        @keyframes float-fast {
          0%, 100% { transform: translateY(0) translateX(0); }
          50% { transform: translateY(-10px) translateX(5px); }
        }
        .animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
        .animate-float-medium { animation: float-medium 6s ease-in-out infinite; }
        .animate-float-fast { animation: float-fast 4s ease-in-out infinite; }
      `}</style>
    </section>
  );
};

export default Hero;
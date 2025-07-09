
import React from 'react';
import { useLocation } from 'react-router-dom';
import { Shield, FileText, Lock, Users, ArrowRight } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isLegalPage = location.pathname === '/privacy-policy' || location.pathname === '/terms-of-service';

  // Get appropriate icon based on page
  const getPageIcon = () => {
    if (location.pathname === '/privacy-policy') return <Shield className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />;
    if (location.pathname === '/terms-of-service') return <FileText className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />;
    if (location.pathname === '/contact') return <Users className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />;
    return <Lock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12" />;
  };

  // Get appropriate gradient Tailwind class based on page
  const getPageGradientClass = () => {
    if (location.pathname === '/privacy-policy') return 'bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-800';
    if (location.pathname === '/terms-of-service') return 'bg-gradient-to-r from-green-700 via-emerald-800 to-teal-800';
    if (location.pathname === '/contact') return 'bg-gradient-to-r from-purple-700 via-pink-700 to-red-700';
    return 'bg-gradient-to-r from-gray-700 via-slate-800 to-zinc-800';
  };

  return (
    <div 
      className={`relative pt-20 md:pt-24 lg:pt-28 pb-8 sm:pb-12 md:pb-16 flex items-center overflow-hidden ${!backgroundImage ? getPageGradientClass() : ''}`}
      style={backgroundImage ? {
        background: `linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      } : {}}
    >
      {/* Overlay for contrast */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-black/40 z-0 pointer-events-none" />
      )}
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-30 animate-gradient-pan"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent opacity-25 animate-gradient-pan-reverse"></div>
      </div>
      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-1/4 left-[10%] w-4 h-4 rounded-full bg-white/20 filter blur-[10px] animate-float-slow"></div>
        <div className="absolute top-1/3 right-[15%] w-6 h-6 rounded-full bg-white/15 filter blur-[15px] animate-float-medium"></div>
        <div className="absolute bottom-1/4 right-[10%] w-8 h-8 rounded-full bg-white/10 filter blur-[20px] animate-float-fast"></div>
        <div className="absolute bottom-1/3 left-[20%] w-5 h-5 rounded-full bg-white/25 filter blur-[12px] animate-float-slow"></div>
      </div>
      {/* Geometric patterns */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-l-2 border-t-2 border-white/30"></div>
        <div className="absolute top-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-r-2 border-t-2 border-white/30"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 sm:w-32 sm:h-32 border-l-2 border-b-2 border-white/30"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 border-r-2 border-b-2 border-white/30"></div>
      </div>
      <div className="container-default relative z-10 px-2 sm:px-4 md:px-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Page icon */}
          {isLegalPage && (
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 sm:mb-6 border border-white/30 animate-fade-in">
              <div className="text-white">
                {getPageIcon()}
              </div>
            </div>
          )}
          {/* Enhanced title */}
          <h1 className="text-white mb-4 sm:mb-6 animate-fade-in font-bold text-2xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight break-words">
            {title}
          </h1>
          {/* Enhanced subtitle */}
          {subtitle && (
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-2 sm:mb-4">
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
                <p className="text-white/90 text-base sm:text-lg font-medium">{subtitle}</p>
                <div className="w-2 h-2 bg-white/60 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
          {/* Breadcrumb for legal pages */}
          {isLegalPage && (
            <div className="flex items-center justify-center gap-2 text-white/70 text-xs sm:text-sm mt-4 sm:mt-6 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <span>Home</span>
              <ArrowRight className="w-4 h-4" />
              <span className="text-white font-medium">{title}</span>
            </div>
          )}
          {/* Decorative line */}
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent mx-auto mt-4 sm:mt-8 animate-fade-in" style={{ animationDelay: '0.6s' }}></div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;


import React from 'react';
import { useLocation } from 'react-router-dom';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, backgroundImage }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div 
      className={`relative ${isHomePage ? 'py-20 lg:py-32' : 'py-8 lg:py-16'} flex items-center`}
      style={{
        background: backgroundImage 
          ? `linear-gradient(rgba(10, 36, 99, 0.8), rgba(10, 36, 99, 0.8)), url(${backgroundImage})`
          : 'linear-gradient(90deg, #0A2463, #051D4C)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="container-default relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-white mb-4 animate-fade-in">{title}</h1>
          {subtitle && <p className="text-zeex-100 text-xl">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
};

export default PageHeader;

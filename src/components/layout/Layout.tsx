import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
  showFooter?: boolean; // Add this prop
}

const Layout: React.FC<LayoutProps> = ({ children, showFooter = true }) => {
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      document.querySelectorAll('.hero-element').forEach((el) => {
        el.classList.add('animate-fade-up');
      });
      
      document.querySelectorAll('.animate-on-scroll').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('animate-fade-up');
        }
      });
    }, 100);
  }, []);

  return (    
    <>
      <Navbar />
      <main className="min-h-screen">
        {children}
      </main>
      {showFooter && <Footer />} {/* Conditionally render footer */}
    </>
  );
};

export default Layout;
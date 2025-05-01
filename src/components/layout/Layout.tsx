
import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Force initial render to make all content visible
  useEffect(() => {
    // Make sure all animation elements are visible on page load
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className={`flex-grow ${!isHomePage ? 'pt-16' : ''}`}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;

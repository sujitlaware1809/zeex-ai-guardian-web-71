import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Shield, Video, Bell, Cloud, Cpu, Database, Lock, Home, Building, MapPin, ShoppingCart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DropdownItem {
  title: string;
  path: string;
  description?: string;
  icon?: React.ReactNode;
}

interface NavItem {
  title: string;
  path: string;
  dropdown?: DropdownItem[];
}

const navItems: NavItem[] = [
  { 
    title: "Home",
    path: "/"
  },
  { 
    title: "About",
    path: "/about"
  },
  {
    title: "Solutions",
    path: "/Solutions",
    
  },
  {
    title: "Services",
    path: "/services",
    dropdown: [
      { 
        title: "Supermarkets & Shops", 
        path: "/services/retail",
        description: "Retail security solutions",
        icon: <ShoppingCart size={16} />
      },
      { 
        title: "Residential Security", 
        path: "/services/residential",
        description: "Smart home protection",
        icon: <Home size={16} />
      },
      { 
        title: "Commercial Surveillance", 
        path: "/services/commercial",
        description: "Business security solutions",
        icon: <Building size={16} />
      },
      { 
        title: "Public Safety", 
        path: "/services/public-safety",
        description: "Community security systems",
        icon: <MapPin size={16} />
      }
    ]
  },
  { 
    title: "Blogs",
    path: "/blog"
  },
  { 
    title: "Contact",
    path: "/contact"
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  const toggleMobileDropdown = (title: string) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white",
      isScrolled || mobileMenuOpen 
        ? "shadow-md py-2 border-b border-gray-100" 
        : "py-4"
    )}>
      <div className="container-default flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-50 group">
  <div className="flex items-center gap-3">
    <div className="w-9 h-9 rounded-full overflow-hidden bg-gradient-to-br from-navy-600 to-navy-800 flex items-center justify-center group-hover:rotate-12 transition-transform">
      <img src="https://i.ibb.co/hJqt2xCz/zeex-ai-logo.png" alt="ZeexAI Logo" className="w-full h-full object-cover" />
    </div>
    <span className="font-bold text-2xl text-navy-800">
      Zeex<span className="text-navy-600"> AI</span>
    </span>
  </div>
</Link>


        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <div key={item.title} className="relative group">
              <div className="flex items-center">
                <Link 
                  to={item.path}
                  className={cn(
                    "font-medium text-navy-700 hover:text-navy-900 transition-colors py-2 px-1",
                    location.pathname === item.path && "text-navy-900 font-semibold",
                    !item.dropdown && "relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-navy-600 after:transition-all hover:after:w-full"
                  )}
                >
                  {item.title}
                </Link>
                {item.dropdown && (
                  <ChevronDown className="w-4 h-4 ml-1 text-navy-500 group-hover:rotate-180 transition-transform" />
                )}
              </div>

              {item.dropdown && (
                <div className="absolute left-0 top-full mt-1 w-64 origin-top-right rounded-lg bg-white shadow-xl border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="p-2">
                    {item.dropdown.map((dropdownItem) => (
                      <Link
                        key={dropdownItem.path}
                        to={dropdownItem.path}
                        className="flex items-start gap-3 rounded-lg p-3 hover:bg-gray-50 transition-colors"
                      >
                        <div className="p-1.5 rounded-md bg-navy-50 border border-navy-100">
                          {React.cloneElement(dropdownItem.icon as React.ReactElement, { 
                            className: "text-navy-600",
                            size: 16 
                          })}
                        </div>
                        <div>
                          <div className="font-medium text-navy-800">{dropdownItem.title}</div>
                          <p className="text-xs text-navy-500 mt-1">{dropdownItem.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          <Link 
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg shadow-sm hover:shadow-md hover:from-blue-500 hover:to-indigo-500 transition-all"
          >
            Get Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50 p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-navy-800" />
          ) : (
            <Menu className="w-6 h-6 text-navy-800" />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 pt-24 px-6 lg:hidden overflow-y-auto transition-all duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}>
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 last:border-0">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex justify-between items-center w-full text-left py-4 font-medium text-navy-800"
                      onClick={() => toggleMobileDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className={cn(
                        "w-5 h-5 text-navy-500 transition-transform",
                        openDropdown === item.title ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    <div className={cn(
                      "pl-4 space-y-2 overflow-hidden transition-all",
                      openDropdown === item.title ? "max-h-96 pb-4" : "max-h-0"
                    )}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="flex items-center gap-3 py-3 text-navy-700 hover:text-navy-900 transition-colors"
                        >
                          {dropdownItem.icon && (
                            <div className="w-8 h-8 rounded-lg bg-navy-50 flex items-center justify-center text-navy-600 border border-navy-100">
                              {dropdownItem.icon}
                            </div>
                          )}
                          <div>
                            <div className="font-medium">{dropdownItem.title}</div>
                            <div className="text-xs text-navy-500 mt-1">{dropdownItem.description}</div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-4 font-medium text-navy-800 hover:text-navy-600 transition-colors"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <Link 
              to="/contact" 
              className="mt-6 px-5 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-lg text-center shadow-sm hover:shadow-md transition-all"
            >
              Request Demo
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
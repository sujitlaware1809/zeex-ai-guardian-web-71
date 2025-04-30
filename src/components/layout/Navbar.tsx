
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define the structure for dropdown menu items
interface DropdownItem {
  title: string;
  path: string;
  description?: string;
}

// Define the structure for navbar items
interface NavItem {
  title: string;
  path: string;
  dropdown?: DropdownItem[];
}

// Define navigation items
const navItems: NavItem[] = [
  { 
    title: "Home",
    path: "/"
  },
  {
    title: "Services",
    path: "/services",
    dropdown: [
      { 
        title: "Intrusion Detection", 
        path: "/services/intrusion-detection",
        description: "Advanced AI system to detect unauthorized entries"
      },
      { 
        title: "Facial Recognition", 
        path: "/services/facial-recognition",
        description: "Identify and verify individuals with precision"
      },
      { 
        title: "Real-time Alerts", 
        path: "/services/real-time-alerts",
        description: "Instant notifications for security events"
      },
      { 
        title: "Cloud Video Analytics", 
        path: "/services/cloud-video-analytics",
        description: "Process and analyze video data in the cloud"
      }
    ]
  },
  {
    title: "Solutions",
    path: "/solutions",
    dropdown: [
      { 
        title: "Residential Security", 
        path: "/solutions/residential",
        description: "Protect your home with AI-powered surveillance"
      },
      { 
        title: "Commercial Surveillance", 
        path: "/solutions/commercial",
        description: "Enterprise-grade security solutions for businesses"
      },
      { 
        title: "Public Safety", 
        path: "/solutions/public-safety",
        description: "Enhance safety in public spaces with smart monitoring"
      }
    ]
  },
  { 
    title: "About Us",
    path: "/about"
  },
  { 
    title: "Blog",
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

  // Handle scroll event to change navbar styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close mobile menu when changing routes
  useEffect(() => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  }, [location.pathname]);

  // Toggle mobile dropdown
  const toggleMobileDropdown = (title: string) => {
    if (openDropdown === title) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(title);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      isScrolled || mobileMenuOpen 
        ? "bg-white shadow-md py-2" 
        : "bg-transparent py-4"
    )}>
      <div className="container-default flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="relative z-50">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zeex-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold">Z</span>
            </div>
            <span className={cn(
              "font-poppins font-bold text-2xl transition-colors duration-300",
              isScrolled || mobileMenuOpen ? "text-zeex-600" : "text-zeex-600"
            )}>ZeexAI</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <div key={item.title} className="group relative">
              <Link 
                to={item.path}
                className={cn(
                  "font-medium transition-colors duration-300 py-2",
                  location.pathname === item.path ? "text-zeex-500" : 
                  isScrolled ? "text-zeex-800 hover:text-zeex-500" : 
                  "text-zeex-800 hover:text-zeex-500",
                  !item.dropdown && "link-hover"
                )}
              >
                <span className="flex items-center gap-1">
                  {item.title}
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </span>
              </Link>

              {/* Dropdown Menu */}
              {item.dropdown && (
                <div className="nav-dropdown">
                  {item.dropdown.map((dropdownItem) => (
                    <Link
                      key={dropdownItem.path}
                      to={dropdownItem.path}
                      className="block px-4 py-2 hover:bg-zeex-50 text-sm"
                    >
                      <div className="font-medium">{dropdownItem.title}</div>
                      {dropdownItem.description && (
                        <p className="text-xs text-gray-600 mt-1">{dropdownItem.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          
          {/* CTA Button */}
          <Link 
            to="/contact"
            className="btn-primary whitespace-nowrap"
          >
            Request Demo
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-zeex-800" />
          ) : (
            <Menu className="w-6 h-6 text-zeex-800" />
          )}
        </button>

        {/* Mobile Menu */}
        <div className={cn(
          "fixed inset-0 bg-white z-40 p-6 pt-24 lg:hidden overflow-y-auto",
          mobileMenuOpen ? "flex flex-col" : "hidden"
        )}>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-2">
                {item.dropdown ? (
                  <div>
                    <button 
                      className="flex justify-between w-full text-left py-2 font-medium text-zeex-800"
                      onClick={() => toggleMobileDropdown(item.title)}
                    >
                      {item.title}
                      <ChevronDown className={cn(
                        "w-5 h-5 transition-transform",
                        openDropdown === item.title ? "rotate-180" : ""
                      )} />
                    </button>
                    
                    {/* Mobile Dropdown */}
                    <div className={cn(
                      "pl-4 space-y-2 mt-2 overflow-hidden transition-all",
                      openDropdown === item.title ? "max-h-96" : "max-h-0"
                    )}>
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.path}
                          to={dropdownItem.path}
                          className="block py-2 text-zeex-700 hover:text-zeex-500"
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-2 font-medium text-zeex-800 hover:text-zeex-500"
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            <Link 
              to="/contact" 
              className="btn-primary text-center mt-4"
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

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const menuItems = [
    { name: "Casino's", path: '/casinos' },
    { name: 'Bonussen', path: '/bonussen' },
    { name: 'Blog', path: '/blog' },
    { name: 'Games', path: '/games' },
    { name: 'Verantwoord Spelen', path: '/verantwoord-gokken' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-sm',
        isScrolled ? 'glassmorphism py-3 shadow-lg' : 'bg-white/50 py-4 lg:py-5'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="relative z-50 flex items-center transform transition-transform duration-300 hover:scale-105"
            aria-label="Gokkerz.nl Home"
          >
            <img 
              src="/casinologos/casilogos/gokkerz-emblem.svg" 
              alt="Gokkerz Emblem" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={cn(
                  "font-medium text-gray-800 transition-all duration-300",
                  "hover:text-gokkerz-green relative py-2",
                  "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5",
                  "after:bg-gokkerz-green after:transform after:scale-x-0",
                  "after:transition-transform after:duration-300",
                  "hover:after:scale-x-100",
                  location.pathname === item.path && "text-gokkerz-green after:scale-x-100"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <Sheet>
            <SheetTrigger asChild>
              <button
                className="lg:hidden relative z-50 p-2 focus:outline-none focus:ring-2 focus:ring-gokkerz-green focus:ring-offset-2 rounded-lg transition-transform active:scale-90"
                aria-label="Open menu"
              >
                <Menu className="w-7 h-7 text-gray-800" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 w-[280px] max-w-full bg-white/90 shadow-xl">
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-gray-100">
                  <Link 
                    to="/"
                    className="flex items-center"
                  >
                    <img 
                      src="/casinologos/casilogos/gokkerz-emblem.svg" 
                      alt="Gokkerz Emblem" 
                      className="h-8 w-auto"
                    />
                  </Link>
                </div>
                {/* Navigation */}
                <nav className="flex-1 overflow-y-auto py-4">
                  <div className="px-4 space-y-1">
                    {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "block w-full text-left font-medium py-3 px-4 rounded-lg transition-all duration-300",
                          "hover:bg-gokkerz-green/10 active:bg-gokkerz-green/20",
                          "hover:text-gokkerz-green focus:outline-none focus:ring-2 focus:ring-gokkerz-green focus:ring-offset-2",
                          location.pathname === item.path 
                            ? "text-gokkerz-green bg-gokkerz-green/10" 
                            : "text-gray-800"
                        )}
                        onClick={() => {
                          // Sluit het menu na navigatie
                          document.activeElement && (document.activeElement as HTMLElement).blur();
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </nav>
                {/* Footer */}
                <div className="p-6 border-t border-gray-100">
                  <p className="text-sm text-gray-500 text-center">
                    © {new Date().getFullYear()} Gokkerz.nl
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;

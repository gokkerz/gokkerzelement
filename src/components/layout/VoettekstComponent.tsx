import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ExternalLink, Shield, AlertTriangle, Clock, Ban } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: "Casino's",
      links: [
        { name: "Online Casino's", path: "/casinos" },
        { name: "Casino Reviews", path: "/casinos" },
        { name: "Live Casino", path: "/casinos" },
      ],
    },
    {
      title: "Bonussen",
      links: [
        { name: "Casino Bonussen", path: "/bonussen" },
      ],
    },
    {
      title: "Informatie",
      links: [
        { name: "Over Ons", path: "/over-ons" },
        { name: "Verantwoord Gokken", path: "/verantwoord-gokken" },
        { name: "Privacybeleid", path: "/privacybeleid" },
        { name: "Cookiebeleid", path: "/cookiebeleid" },
        { name: "Algemene Voorwaarden", path: "/algemenevoorwaarden" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Contact", path: "/contact" },
      ],
    },
  ];

  return (
    <footer className="pt-16 pb-8 bg-white/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {footerLinks.map((section) => (
            <div key={section.title} className="col-span-1">
              <h3 className="text-lg font-bold mb-4 text-gray-800 relative inline-block">
                {section.title}
                <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-gokkerz-green/20"></span>
              </h3>
              <ul className="space-y-2.5">
                {section.links.map((link) => (
                  <li key={link.name} className="group">
                    <Link
                      to={link.path}
                      className="text-gray-600 hover:text-gokkerz-green transition-colors inline-flex items-center"
                    >
                      <ChevronRight className="h-3 w-3 opacity-0 -ml-2 transition-all group-hover:opacity-100 group-hover:ml-0 text-gokkerz-green" />
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Enhanced Responsible Gambling Notice */}
        <div className="mt-16 bg-white/50 backdrop-blur-sm rounded-xl relative overflow-hidden text-center">
          <div className="relative z-10">
            {/* Header Section */}
            <div className="px-6 pt-8 pb-6 border-b border-gray-100">
              <div className="flex items-center justify-center gap-3">
                <div className="p-2 bg-gokkerz-green/10 rounded-full">
                  <Shield className="h-6 w-6 text-gokkerz-green" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800">Verantwoord Gokken</h4>
              </div>
            </div>
            
            {/* Content Grid */}
            <div className="p-6">
              <div className="max-w-3xl mx-auto">
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Gokken moet leuk en verantwoord blijven. Speel met mate en zet nooit meer in dan je kunt verliezen.
                  Bij twijfel over je gokgedrag, neem direct actie.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
                    <AlertTriangle className="h-5 w-5 text-gokkerz-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Gok niet te veel</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
                    <Clock className="h-5 w-5 text-gokkerz-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Neem regelmatig pauze</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 p-2.5 bg-gray-50 rounded-lg transition-colors hover:bg-gray-100">
                    <AlertTriangle className="h-5 w-5 text-gokkerz-green flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Gok niet onder invloed</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <Link 
                    to="/verantwoord-gokken" 
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gokkerz-green hover:text-gokkerz-green/80 hover:bg-gray-50 transition-all duration-200 text-sm font-medium group shadow-sm"
                  >
                    <span>Meer over verantwoord gokken</span>
                    <ChevronRight className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-x-1" />
                  </Link>
                  <a 
                    href="https://www.loketkansspel.nl/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gokkerz-green hover:text-gokkerz-green/80 hover:bg-gray-50 transition-all duration-200 text-sm font-medium group shadow-sm"
                  >
                    <span>Loket Kansspel</span>
                    <ExternalLink className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </a>
                  <a 
                    href="https://www.cruks.nl" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-gokkerz-green hover:text-gokkerz-green/80 hover:bg-gray-50 transition-all duration-200 text-sm font-medium group shadow-sm"
                  >
                    <span>CRUKS Register</span>
                    <ExternalLink className="h-4 w-4 ml-1.5 transform transition-transform group-hover:translate-y-[-2px] group-hover:translate-x-[2px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-600 text-sm order-2 md:order-1">
              © {currentYear} Gokkerz.nl - Alle rechten voorbehouden
            </p>
            <div className="order-1 md:order-2">
              <img 
                src="/casinologos/casilogos/gokkerz-logo.svg" 
                alt="Gokkerz Logo" 
                className="h-8 w-auto transform transition-transform hover:scale-105"
              />
            </div>
            <p className="text-gray-600 text-sm order-3 font-medium">
              18+ | Speel verantwoord
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

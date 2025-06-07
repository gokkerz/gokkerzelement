import React from 'react';
import KoptekstComponent from './KoptekstComponent';
import VoettekstComponent from './VoettekstComponent';
import { ScrollToTopOnMount } from '../ScrollToTop';
// import { Button } from '../../ui/button';
import { Button } from '@mui/material'; // Or another UI library you are using, or create your own Button component
import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Clock, MessageCircle } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-gokkerz-off-white">
      <ScrollToTopOnMount />
      <KoptekstComponent />
      <main className="flex-grow w-full pt-12 sm:pt-16 transition-all duration-300">
        <div className="opacity-0 animate-fade-in [animation-delay:0.2s] [animation-fill-mode:forwards]">
          {children}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="py-20 bg-gokkerz-off-white relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism p-12 text-center relative overflow-hidden">
              <div className="relative z-10">
                <span className="inline-block bg-gokkerz-green/10 text-gokkerz-green text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                  Blijf Geïnformeerd
                </span>
                <h2 className="text-3xl font-bold mb-4">Mis Geen Enkele Casino Bonus</h2>
                <p className="text-gray-600 mb-8 text-lg max-w-2xl mx-auto">
                  Schrijf je in voor onze nieuwsbrief en ontvang de beste casino bonussen, nieuwe spel releases en expert tips direct in je inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-4">
                  <input 
                    type="email" 
                    placeholder="Jouw e-mailadres" 
                    className="px-6 py-4 border border-gray-200 rounded-xl flex-grow focus:outline-none focus:border-gokkerz-green focus:ring-4 focus:ring-gokkerz-green/10 transition-all duration-300 text-base"
                  />
                  <Button 
                    size="large"
                    className="bg-green-gradient hover:opacity-90 button-pulse shadow-lg py-6"
                  >
                    <span className="flex items-center gap-2">
                      Inschrijven
                      <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </div>
                <div className="flex items-center justify-center gap-8 text-sm text-gray-500 mt-8">
                  <div className="flex items-center gap-2">
                    <Shield className="h-4 w-4 text-gokkerz-green" />
                    <span>Geen spam</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-gokkerz-green" />
                    <span>Wekelijkse updates</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="h-4 w-4 text-gokkerz-green" />
                    <span>Expert tips</span>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-6">
                  Door je in te schrijven ga je akkoord met ons{' '}
                  <Link to="/privacybeleid" className="text-gokkerz-green hover:underline">privacybeleid</Link>.{' '}
                  Je kunt je op elk moment uitschrijven.
                </p>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-64 h-64 bg-gradient-to-br from-gokkerz-green/20 to-transparent rounded-full blur-3xl"></div>
              <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-gradient-to-tr from-gokkerz-green/10 to-transparent rounded-full blur-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      <VoettekstComponent />
    </div>
  );
};

export default Layout;

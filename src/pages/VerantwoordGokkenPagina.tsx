import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import HeroHeader from '@/components/HeroHeader';
import { Shield, Clock, Info, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/KnopComponent';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const VerantwoordGokken = () => {
  const warningSignsList = [
    "Steeds meer tijd besteden aan gokken",
    "Gokken om verloren geld terug te winnen",
    "Liegen tegen familie en vrienden over gokgedrag",
    "Geld lenen of stelen om te kunnen gokken",
    "Onrustig of prikkelbaar worden bij pogingen om te stoppen",
    "Relaties, werk of opleiding in gevaar brengen door gokken",
    "Denken aan gokken wanneer je andere dingen doet",
    "Gokken met steeds grotere bedragen om dezelfde opwinding te voelen"
  ];

  const selfHelpToolsList = [
    {
      title: "Stel limieten in",
      description: "Bepaal vooraf hoeveel tijd en geld je wilt besteden en houd je daaraan."
    },
    {
      title: "Houd een dagboek bij",
      description: "Noteer wanneer en waarom je gokt, en hoe je je daarbij voelt."
    },
    {
      title: "Vind alternatieven",
      description: "Zoek andere activiteiten die dezelfde positieve gevoelens geven."
    },
    {
      title: "Vermijd triggers",
      description: "Herken situaties die je aanzetten tot gokken en probeer deze te vermijden."
    },
    {
      title: "Praat erover",
      description: "Deel je zorgen met iemand die je vertrouwt."
    }
  ];

  const helpResourcesList = [
    {
      name: "AGOG (Anonieme Gokkers Omgeving Gokkers)",
      website: "https://www.agog.nl",
      phone: "088-7024444",
      description: "Zelfhulpgroep voor mensen met gokproblemen en hun naasten."
    },
    {
      name: "Loket Kansspel",
      website: "https://www.loketkansspel.nl",
      phone: "0900-1995",
      description: "Centraal meldpunt voor vragen en problemen rond kansspelen."
    },
    {
      name: "Jellinek",
      website: "https://www.jellinek.nl",
      phone: "088-5051220",
      description: "Professionele hulp bij verslavingsproblematiek."
    },
    {
      name: "Trimbos-instituut",
      website: "https://www.trimbos.nl",
      phone: "0900-1995",
      description: "Kennis en hulp bij mentale gezondheid en verslaving."
    }
  ];

  return (
    <Layout>
      <Helmet>
        <title>Verantwoord Gokken | Tips & Hulp bij Gokproblemen</title>
        <meta name="description" content="Leer hoe je veilig en verantwoord kunt gokken. Handige tips, tools en hulp bij gokproblemen. ✓ Preventie ✓ Hulpinstanties ✓ Direct contact" />
        <meta name="keywords" content="verantwoord gokken, veilig gokken, gokverslaving hulp, gokproblemen, cruks register, verslavingszorg" />
        <link rel="canonical" href="https://gokkerz.nl/verantwoord-gokken" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Verantwoord Gokken | Tips & Hulp bij Gokproblemen" />
        <meta property="og:description" content="Leer hoe je veilig en verantwoord kunt gokken. Handige tips, tools en hulp bij gokproblemen." />
        <meta property="og:url" content="https://gokkerz.nl/verantwoord-gokken" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Verantwoord Gokken | Tips & Hulp bij Gokproblemen" />
        <meta name="twitter:description" content="Hulp en advies voor verantwoord gokken. Direct toegang tot hulpinstanties." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Verantwoord Gokken - Tips & Hulp bij Gokproblemen",
            "description": "Complete gids voor verantwoord gokken met tips, hulpmiddelen en contactgegevens van hulpinstanties.",
            "author": {
              "@type": "Organization",
              "name": "Gokkerz.nl"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Gokkerz.nl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gokkerz.nl/assets/Gokkerz.nl.svg"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gokkerz.nl/verantwoord-gokken"
            },
            "dateModified": "2025-04-30"
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="Veilig & Verantwoord Gokken"
        title={<><span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">Verantwoord</span> Gokken</>}
        description="Leer hoe je veilig en verantwoord online gokt. Ontdek tips, tools en hulpbronnen om controle te houden en probleemgokken te voorkomen. Gokkerz.nl is jouw gids voor verantwoord speelplezier."
        bullets={[
          { icon: <Shield className="h-5 w-5 text-gokkerz-green" />, text: 'KSA-vergunning & veiligheid' },
          { icon: <Clock className="h-5 w-5 text-gokkerz-green" />, text: 'Stel limieten & neem pauzes' },
          { icon: <AlertTriangle className="h-5 w-5 text-gokkerz-green" />, text: 'Herken risicogedrag' },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Warning Signs with improved layout */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Waarschuwingssignalen</h2>
            <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Het is belangrijk om de signalen van problematisch gokgedrag te herkennen, zowel bij jezelf als bij anderen.
            </p>
            
            <div className="glassmorphism p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {warningSignsList.map((sign, index) => (
                  <div key={index} className="flex items-start p-4 bg-red-50 border border-red-100 rounded-lg hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-500 mr-4 flex-shrink-0 mt-1">
                      <Info className="h-5 w-5" />
                    </div>
                    <span className="text-lg">{sign}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 p-6 bg-yellow-50 border border-yellow-100 rounded-lg">
                <p className="font-medium text-center text-lg">
                  Herken je meerdere van deze signalen bij jezelf of iemand anders? 
                  Dan kan er sprake zijn van problematisch gokgedrag en is het verstandig om hulp te zoeken.
                </p>
              </div>
            </div>
          </div>
          
          {/* Self-Help Tools with improved layout */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Zelfhulp Tools</h2>
            <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Deze tools kunnen je helpen om je gokgedrag onder controle te houden:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {selfHelpToolsList.map((tool, index) => (
                <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{tool.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 text-lg">{tool.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Casino Tools with improved layout */}
          <div className="glassmorphism p-8 md:p-12 mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">Hulpmiddelen bij Online Casino's</h2>
            <p className="mb-8 text-gray-700 text-lg text-center max-w-2xl mx-auto">
              Legale Nederlandse online casino's bieden verschillende tools om spelers te helpen verantwoord te spelen:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Stortingslimieten</h3>
                <p className="text-lg">Stel in hoeveel je maximaal wilt storten per dag, week of maand.</p>
              </div>
              
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Tijdslimieten</h3>
                <p className="text-lg">Beperk de tijd die je doorbrengt op een goksite.</p>
              </div>
              
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Verlieslimieten</h3>
                <p className="text-lg">Stel in hoeveel je maximaal wilt verliezen binnen een bepaalde periode.</p>
              </div>
              
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Realiteitscheck</h3>
                <p className="text-lg">Ontvang meldingen over hoe lang je al aan het spelen bent.</p>
              </div>
              
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Tijdelijke pauze</h3>
                <p className="text-lg">Neem een korte pauze van gokken, variërend van 24 uur tot 6 weken.</p>
              </div>
              
              <div className="p-6 border border-gokkerz-green/20 rounded-lg bg-gokkerz-green/5 hover:shadow-md transition-all">
                <h3 className="font-bold text-xl mb-3">Zelfuitsluiting</h3>
                <p className="text-lg">Sluit jezelf voor langere tijd uit van een casino of van alle Nederlandse casino's via CRUKS.</p>
              </div>
            </div>
          </div>
          
          {/* Help Resources with improved layout */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">Hulpbronnen</h2>
            <p className="text-center text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Als jij of iemand in je omgeving problemen heeft met gokken, zijn er verschillende organisaties die kunnen helpen:
            </p>
            
            <div className="space-y-6">
              {helpResourcesList.map((resource, index) => (
                <div key={index} className="glassmorphism p-8 hover:shadow-lg transition-all duration-300">
                  <h3 className="font-bold text-2xl mb-3">{resource.name}</h3>
                  <p className="text-gray-700 text-lg mb-6">{resource.description}</p>
                  <div className="flex flex-wrap items-center justify-center gap-4">
                    <Button asChild variant="outline" className="py-6 text-lg">
                      <a href={resource.website} target="_blank" rel="noopener noreferrer" className="min-w-[200px] flex items-center justify-center">
                        Bezoek Website
                      </a>
                    </Button>
                    <Button asChild className="bg-green-gradient hover:opacity-90 py-6 text-lg">
                      <a href={`tel:${resource.phone}`} className="min-w-[200px] flex items-center justify-center">
                        Bel {resource.phone}
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Final CTA with improved layout */}
          <div className="text-center glassmorphism p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Gokken moet een plezierige activiteit blijven</h2>
            <p className="text-gray-700 mb-8 text-lg max-w-2xl mx-auto">
              Onthoud: als gokken geen plezier meer is, is het tijd om een stap terug te doen. 
              Bij twijfel, aarzel niet om hulp te zoeken. Je staat er niet alleen voor.
            </p>
            <Button asChild className="bg-green-gradient hover:opacity-90 button-pulse py-6 text-lg min-w-[200px]">
              <a href="https://www.loketkansspel.nl" target="_blank" rel="noopener noreferrer">
                Direct hulp zoeken
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default VerantwoordGokken;

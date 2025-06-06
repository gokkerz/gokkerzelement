import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import HeroHeader from '@/components/HeroHeader';
import { Shield, Users, Award, MessageCircle, Gift, Star, Wallet, Search, ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/KnopComponent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const OverOns = () => {
  return (
    <Layout>
      <Helmet>
        <title>Over Ons | Gokkerz.nl - Dé Online Casino Expert</title>
        <meta name="description" content="Leer meer over Gokkerz.nl, dé onafhankelijke gids voor online casino's in Nederland. Ontdek onze missie, ons team en hoe wij je helpen het beste casino te vinden." />
        <meta name="keywords" content="over gokkerz, casino experts, betrouwbare reviews, onafhankelijk casino advies, casino vergelijking" />
        <link rel="canonical" href="https://gokkerz.nl/over-ons" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Over Ons | Gokkerz.nl - Dé Online Casino Expert" />
        <meta property="og:description" content="Leer meer over Gokkerz.nl, dé onafhankelijke gids voor online casino's in Nederland." />
        <meta property="og:url" content="https://gokkerz.nl/over-ons" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Over Ons | Gokkerz.nl - Dé Online Casino Expert" />
        <meta name="twitter:description" content="Maak kennis met het team achter Gokkerz.nl en onze missie." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "name": "Over Gokkerz.nl",
            "description": "Maak kennis met het team achter Gokkerz.nl en onze missie om spelers te helpen bij het vinden van betrouwbare online casino's.",
            "publisher": {
              "@type": "Organization",
              "name": "Gokkerz.nl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gokkerz.nl/assets/Gokkerz.nl.svg"
              },
              "url": "https://gokkerz.nl",
              "foundingDate": "2024",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "NL"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "https://gokkerz.nl/over-ons"
            }
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="Over Gokkerz.nl"
        title={<><span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">Jouw Casino Gids</span> in Nederland</>}
        description="Gokkerz.nl is dé onafhankelijke bron voor eerlijke casino reviews, bonusanalyses en verantwoord spelen. Ontdek wie wij zijn, onze missie en hoe wij jou helpen veilig te kiezen."
        bullets={[
          { icon: <Users className="h-5 w-5 text-gokkerz-green" />, text: 'Ervaren casino-experts' },
          { icon: <Award className="h-5 w-5 text-gokkerz-green" />, text: '100% onafhankelijk' },
          { icon: <Shield className="h-5 w-5 text-gokkerz-green" />, text: 'Focus op veiligheid' },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="glassmorphism p-8 mb-12">
            <h2 className="text-2xl font-bold mb-4">Onze Missie</h2>
            <p className="mb-6 text-gray-700">
              Bij Gokkerz is onze missie duidelijk: wij willen Nederlandse spelers voorzien van eerlijke, objectieve en uitgebreide informatie over online casino's. In de dynamische wereld van online gokken vinden we het belangrijk dat spelers goed geïnformeerd zijn voordat ze besluiten waar ze willen spelen.
            </p>
            <p className="mb-6 text-gray-700">
              We geloven dat transparantie essentieel is in de online casino-industrie. Daarom delen we onze ervaringen, analyseren we bonusvoorwaarden, testen we klantenservice en beoordelen we het spelaanbod op een onpartijdige manier. Onze recensies zijn gebaseerd op feitelijke informatie en persoonlijke ervaringen, niet beïnvloed door commerciële belangen.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Ons Team</h2>
            <p className="mb-6 text-gray-700">
              Ons team bestaat uit ervaren casino-enthousiastelingen die de Nederlandse gokmarkt door en door kennen. We hebben jarenlange ervaring in het testen en reviewen van online casino's, en we begrijpen wat Nederlandse spelers belangrijk vinden. Van de kwaliteit van het spelaanbod tot de snelheid van uitbetalingen, we letten op alle details.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Verantwoord Gokken</h2>
            <p className="mb-6 text-gray-700">
              Gokkerz hecht grote waarde aan verantwoord gokgedrag. We moedigen onze bezoekers aan om online casino's als een vorm van entertainment te zien, niet als een manier om geld te verdienen. We bieden informatie over hoe je verantwoord kunt spelen en waar je hulp kunt vinden als gokken problematisch wordt.
            </p>
          </div>
          
          {/* Expertise Showcase */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Onze Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gokkerz-green/10 flex items-center justify-center">
                    <Search className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <CardTitle>Casino Reviews</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Uitgebreide reviews van alle legale Nederlandse online casino's.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/casinos">Bekijk Reviews</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gokkerz-green/10 flex items-center justify-center">
                    <Gift className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <CardTitle>Bonus Analyses</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Vergelijk en vind de beste casino bonussen en promoties.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/bonussen">Vind Bonussen</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="p-6 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gokkerz-green/10 flex items-center justify-center">
                    <Wallet className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <CardTitle>Betalingsmethoden</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-center mb-4">
                    Informatie over stortingen, uitbetalingen en limieten.
                  </p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/casinos#betalingen">Lees Meer</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">Onze Kernwaarden</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glassmorphism p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gokkerz-green/10 flex items-center justify-center text-gokkerz-green mr-4">
                    <Shield className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Betrouwbaarheid</h3>
                </div>
                <p className="text-gray-700">
                  We reviewen alleen legale casino's met een vergunning van de Kansspelautoriteit om ervoor te zorgen dat we alleen betrouwbare opties aanbevelen.
                </p>
              </div>
              
              <div className="glassmorphism p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gokkerz-green/10 flex items-center justify-center text-gokkerz-green mr-4">
                    <Users className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Expertise</h3>
                </div>
                <p className="text-gray-700">
                  Ons team heeft jarenlange ervaring in de casino-industrie en gebruikt deze kennis om diepgaande en nauwkeurige beoordelingen te geven.
                </p>
              </div>
              
              <div className="glassmorphism p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gokkerz-green/10 flex items-center justify-center text-gokkerz-green mr-4">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Transparantie</h3>
                </div>
                <p className="text-gray-700">
                  We zijn volledig transparant over onze beoordelingsmethode en de criteria die we gebruiken om casino's te evalueren.
                </p>
              </div>
              
              <div className="glassmorphism p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-gokkerz-green/10 flex items-center justify-center text-gokkerz-green mr-4">
                    <MessageCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold">Expert Reviews</h3>
                </div>
                <p className="text-gray-700">
                  Onze experts reviewen alle Nederlandse online casino's grondig en delen hun bevindingen in duidelijke en objectieve reviews.
                </p>
              </div>
            </div>
          </div>
          
          {/* Review Process */}
          <div className="glassmorphism p-8 mb-12">
            <h2 className="text-2xl font-bold mb-6">Hoe Wij Casino's Beoordelen</h2>
            <p className="mb-6 text-gray-700">
              Transparantie staat bij ons voorop, daarom delen we graag hoe we casino's beoordelen. Elk casino doorloopt een uitgebreid reviewproces waarbij we letten op:
            </p>
            <ul className="space-y-3 mb-6 text-gray-700">
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Licentie en Veiligheid:</strong> We controleren of het casino een geldige vergunning heeft van de Kansspelautoriteit en of er adequate beveiligingsmaatregelen zijn geïmplementeerd.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Spelaanbod:</strong> We beoordelen de kwaliteit, diversiteit en hoeveelheid beschikbare spellen.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Bonussen en Promoties:</strong> We analyseren de waarde van bonussen, inclusief de voorwaarden en vereisten.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Gebruikerservaring:</strong> We testen hoe makkelijk het is om te navigeren, in te loggen en spellen te vinden.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Betalingsmogelijkheden:</strong> We evalueren de beschikbare betaalmethoden, transactielimieten en verwerkingstijden.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Klantenservice:</strong> We testen de reactietijd, kwaliteit en beschikbaarheid van de klantenservice.</span>
              </li>
              <li className="flex items-start">
                <div className="min-w-4 h-4 rounded-full bg-gokkerz-green mt-1 mr-3"></div>
                <span><strong>Mobiele Compatibiliteit:</strong> We controleren hoe goed het casino presteert op verschillende mobiele apparaten.</span>
              </li>
            </ul>
          </div>
          
          {/* Casino Highlights */}
          <div className="mb-12">
            <div className="glassmorphism p-8">
              <h2 className="text-2xl font-bold mb-6">Aanbevolen Casino's</h2>
              <p className="text-gray-700 mb-6">
                Onze experts hebben de beste online casino's voor je geselecteerd. We letten daarbij op:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="flex items-start">
                  <Star className="text-gokkerz-green h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Betrouwbaarheid</h3>
                    <p className="text-gray-600 text-sm">Alleen casino's met KSA-licentie</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Gift className="text-gokkerz-green h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Bonus Aanbod</h3>
                    <p className="text-gray-600 text-sm">Beste welkomstbonussen en promoties</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-gokkerz-green h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Veiligheid</h3>
                    <p className="text-gray-600 text-sm">Gegarandeerd veilig spelen en uitbetalen</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MessageCircle className="text-gokkerz-green h-5 w-5 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold mb-1">Support</h3>
                    <p className="text-gray-600 text-sm">Nederlandse klantenservice</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center mt-8">
                <Button asChild className="bg-green-gradient hover:opacity-90">
                  <Link to="/casinos" className="flex items-center">
                    Bekijk Top Casino's <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Profiteer van Onze Expertise</h2>
            <p className="text-xl text-gray-600 mb-8">
              Ontdek de voordelen van onze professionele casino reviews en analyses:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="glassmorphism p-6">
                <h3 className="font-bold text-xl mb-3">Uitgebreide Reviews</h3>
                <p className="text-gray-600 mb-4">
                  Onze experts analyseren elk aspect van online casino's voor een complete beoordeling.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/casinos">Bekijk Reviews</Link>
                </Button>
              </div>
              <div className="glassmorphism p-6">
                <h3 className="font-bold text-xl mb-3">Casino Vergelijkingen</h3>
                <p className="text-gray-600 mb-4">
                  Vergelijk de beste Nederlandse online casino's op basis van onze expertanalyses.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/bonussen">Vergelijk Casino's</Link>
                </Button>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild className="bg-green-gradient hover:opacity-90 button-pulse">
                <Link to="/casinos" className="flex items-center">
                  Bekijk Casino Reviews <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/contact" className="flex items-center">
                  Neem Contact Op <MessageCircle className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
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

export default OverOns;

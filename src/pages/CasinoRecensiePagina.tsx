import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Button } from '@/components/ui/KnopComponent';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Star, Shield, Gift, Check, Clock, ThumbsUp, Info, Users, Gamepad2, Wallet, Award, Calendar, Mail, Phone, Lock } from 'lucide-react';
import { casinoBrandColors } from '@/lib/casinoKleurenData';
import { casinos } from './CasinoOverzichtPagina';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const getCasinoUrl = (casinoName: string) => {
  const urls: { [key: string]: string } = {
    'TOTO Casino': 'https://www.toto.nl',
    'BetCity': 'https://www.betcity.nl',
    'Holland Casino': 'https://www.hollandcasino.nl',
    'Kansino': 'https://www.kansino.nl',
    'Circus Casino': 'https://www.circus.nl',
    "Jack's Casino": 'https://www.jacks.nl',
    'Unibet': 'https://www.unibet.nl',
    'LeoVegas': 'https://www.leovegas.nl',
    '777': 'https://www.casino777.nl',
    'Fair Play': 'https://www.fairplaycasino.nl',
    '365': 'https://www.bet365.nl',
    '711': 'https://www.711.nl',
    'Bet MGM': 'https://www.betmgm.nl',
    'BetNation': 'https://www.betnation.nl',
    'Bingoal': 'https://www.bingoal.nl',
    'ComeOn': 'https://www.comeon.nl',
    'GGPoker': 'https://www.ggpoker.nl',
    'Goldrun Casino': 'https://www.goldruncasino.nl',
    'Hard Rock Casino': 'https://www.hardrockcasino.nl',
    'Hommerson': 'https://www.hommerson.nl',
    'Lucky 7 Casino': 'https://www.lucky7.nl',
    'One Casino': 'https://www.onecasino.nl',
    'Scori Pro': 'https://www.scoripro.nl',
    'TonyBet': 'https://www.tonybet.nl',
    'VBet': 'https://www.vbet.nl',
    'Winnit': 'https://www.winnit.nl',
    'ZeBet': 'https://www.zebet.nl'
  };
  return urls[casinoName] || '#';
};

const CasinoReview = () => {
  const { name } = useParams();
  
  const normalizedName = name?.split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  
  const casino = casinos.find(c => c.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-') === name);

  useEffect(() => {
    // Update meta description for SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription && casino) {
      metaDescription.setAttribute('content', 
        `Lees onze uitgebreide review van ${casino.name}. Ontdek de beste bonussen, spelletjes en features. Rating: ${casino.rating}/5. Bonus: ${casino.bonus}.`
      );
    }
    // Update page title
    document.title = casino ? `${casino.name} Review - Eerlijke Casino Beoordeling | Gokkerz.nl` : 'Casino Review | Gokkerz.nl';
  }, [casino]);

  if (!casino) {
    return (
      <Layout>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold mb-4">Casino niet gevonden</h1>
          <p className="text-gray-600">Het opgevraagde casino kon niet worden gevonden.</p>
          <Button asChild className="mt-6" variant="outline">
            <a href="/casinos">Bekijk alle casino's</a>
          </Button>
        </div>
      </Layout>
    );
  }

  const brandColor = casinoBrandColors[casino.name] || "#00CC66";

  // Calculate review score components
  const scores = {
    spelAanbod: 4.8,
    bonussen: 4.6,
    betrouwbaarheid: 5.0,
    klantenservice: 4.7,
    gebruiksgemak: 4.5,
    betaalmethoden: 4.9
  };

  return (
    <Layout>
      {/* Hero Section */}
      <div className="relative overflow-hidden" style={{
        background: `linear-gradient(135deg, ${brandColor}10 0%, #fff 100%)`,
      }}>
        <div className="container mx-auto px-4 py-16 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <img 
              src={casino.logo} 
              alt={casino.name} 
              className="h-24 w-auto mx-auto mb-8 object-contain"
            />
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">{casino.name} Review</h1>
            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="flex">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-6 w-6 ${
                      index < Math.floor(casino.rating)
                        ? 'text-yellow-400 fill-yellow-400'
                        : 'text-gray-400'
                    }`}
                  />
                ))}
              </div>
              <span className="text-xl font-semibold ml-2">{casino.rating}/5</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-6 text-base">
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Shield className="text-gokkerz-green mr-2 h-5 w-5" />
                <span>KSA Vergund</span>
              </div>
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Gift className="text-gokkerz-green mr-2 h-5 w-5" />
                <span>{casino.bonus}</span>
              </div>
              <div className="flex items-center bg-white/80 px-4 py-2 rounded-full shadow-sm">
                <Wallet className="text-gokkerz-green mr-2 h-5 w-5" />
                <span>Min. storting {casino.minDeposit}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Background decorations */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-gokkerz-green/10 to-transparent rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-gokkerz-green/5 to-transparent rounded-full -ml-20 -mb-20 blur-2xl"></div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 text-center">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overzicht</TabsTrigger>
            <TabsTrigger value="bonuses">Bonussen</TabsTrigger>
            <TabsTrigger value="games">Spelaanbod</TabsTrigger>
            <TabsTrigger value="info">Info & Support</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center">
              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Belangrijkste Kenmerken</CardTitle>
                  <CardDescription>Wat maakt {casino.name} uniek</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {casino.features.map((feature, index) => (
                      <li key={index} className="flex items-center justify-center">
                        <Check className="h-5 w-5 text-gokkerz-green mr-3" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">Welkomstbonus</CardTitle>
                  <CardDescription>Exclusief voor nieuwe spelers</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-center mb-6">
                    <div className="text-3xl font-bold mb-2" style={{ color: brandColor }}>
                      {casino.bonus}
                    </div>
                    <p className="text-gray-600">Bij eerste storting van {casino.minDeposit}</p>
                  </div>
                  <Button 
                    className="w-full py-6 text-lg font-semibold hover:opacity-90"
                    style={{ 
                      backgroundColor: brandColor,
                      color: 'white'
                    }}
                    asChild
                  >
                    <a
                      href={getCasinoUrl(casino.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Claim Nu Je Bonus
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-gokkerz-green" />
                    Review Score Breakdown
                  </CardTitle>
                  <CardDescription>Onze beoordeling per categorie</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {Object.entries(scores).map(([category, score]) => (
                      <div key={category} className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-sm font-medium">
                            {category.charAt(0).toUpperCase() + category.slice(1)}
                          </span>
                          <span className="text-sm font-bold text-gokkerz-green">
                            {score.toFixed(1)}
                          </span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gokkerz-green rounded-full transition-all duration-500"
                            style={{ width: `${(score / 5) * 100}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 justify-center items-center text-center">
              <div className="p-6 bg-green-50 rounded-lg">
                <Shield className="h-8 w-8 text-gokkerz-green mb-3" />
                <h3 className="font-semibold mb-2">Veilig & Betrouwbaar</h3>
                <p className="text-sm text-gray-600">
                  Beschermd door de nieuwste SSL-encryptie en gecontroleerd door de KSA
                </p>
              </div>
              <div className="p-6 bg-blue-50 rounded-lg">
                <Users className="h-8 w-8 text-blue-500 mb-3" />
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-gray-600">
                  Nederlandse klantenservice via live chat, telefoon en e-mail
                </p>
              </div>
              <div className="p-6 bg-purple-50 rounded-lg">
                <Clock className="h-8 w-8 text-purple-500 mb-3" />
                <h3 className="font-semibold mb-2">Snelle Uitbetalingen</h3>
                <p className="text-sm text-gray-600">
                  Betrouwbare en snelle verwerking van al je transacties
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="bonuses" className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Gift className="h-5 w-5 text-gokkerz-green" />
                    Welkomstbonus Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="p-6 border rounded-lg bg-gradient-to-br from-white to-gray-50">
                    <h4 className="font-semibold mb-4">Bonus Pakket</h4>
                    <p className="text-3xl font-bold text-gokkerz-green mb-4">{casino.bonus}</p>
                    <div className="space-y-3">
                      <div className="flex items-center justify-center text-sm">
                        <Check className="h-4 w-4 text-gokkerz-green mr-2 flex-shrink-0" />
                        <span>Minimale storting {casino.minDeposit}</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Check className="h-4 w-4 text-gokkerz-green mr-2 flex-shrink-0" />
                        <span>Direct speelbaar na storting</span>
                      </div>
                      <div className="flex items-center justify-center text-sm">
                        <Check className="h-4 w-4 text-gokkerz-green mr-2 flex-shrink-0" />
                        <span>Geldig voor alle spellen</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Belangrijke Voorwaarden</h4>
                    <ul className="space-y-2 text-center">
                      <li className="flex items-center justify-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 text-gokkerz-green mr-2 mt-0.5 flex-shrink-0" />
                        <span>30 dagen geldig na activatie</span>
                      </li>
                      <li className="flex items-center justify-center text-sm text-gray-600">
                        <Info className="h-4 w-4 text-gokkerz-green mr-2 mt-0.5 flex-shrink-0" />
                        <span>40x inzetvereiste op bonus bedrag</span>
                      </li>
                      <li className="flex items-center justify-center text-sm text-gray-600">
                        <Shield className="h-4 w-4 text-gokkerz-green mr-2 mt-0.5 flex-shrink-0" />
                        <span>18+ en KYC verificatie vereist</span>
                      </li>
                    </ul>
                  </div>

                  <Button 
                    className="w-full py-6 text-lg font-semibold hover:opacity-90"
                    style={{ 
                      backgroundColor: brandColor,
                      color: 'white'
                    }}
                    asChild
                  >
                    <a
                      href={getCasinoUrl(casino.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Claim Nu Je Bonus
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="flex items-center justify-center gap-2">
                    <Award className="h-5 w-5 text-gokkerz-green" />
                    VIP & Loyalty Programma
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    Word beloond voor je loyaliteit bij {casino.name}. Spaar automatisch punten bij elke inzet en geniet van exclusieve voordelen:
                  </p>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Gift className="h-5 w-5 text-gokkerz-green mr-3" />
                        <h4 className="font-semibold">Exclusieve Bonussen</h4>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Speciale reload bonussen en promoties</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <Star className="h-5 w-5 text-gokkerz-green mr-3" />
                        <h4 className="font-semibold">VIP Treatment</h4>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Persoonlijke account manager en snellere uitbetalingen</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <div className="flex items-center justify-center mb-2">
                        <ThumbsUp className="h-5 w-5 text-gokkerz-green mr-3" />
                        <h4 className="font-semibold">Cashback Deals</h4>
                      </div>
                      <p className="text-sm text-gray-600 text-center">Wekelijkse cashback op je verliezen</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="games" className="text-center">
            <div className="grid grid-cols-1 gap-8 justify-center items-center text-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center items-center text-center">
                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center">
                      <Gamepad2 className="h-5 w-5 mr-2" />
                      Slots
                    </CardTitle>
                    <CardDescription>1000+ video slots</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <ul className="space-y-2 text-center">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Populaire videoslots</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Jackpot games</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Klassieke slots</span>
                        </li>
                      </ul>

                      <div className="pt-4 border-t text-center">
                        <h4 className="text-sm font-semibold mb-2">Populaire titels:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Big Bass Bonanza</li>
                          <li>Starburst XXXtreme</li>
                          <li>Book of Dead</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center">
                      <Users className="h-5 w-5 mr-2" />
                      Live Casino
                    </CardTitle>
                    <CardDescription>150+ live tafels</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <ul className="space-y-2 text-center">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Roulette tafels</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Blackjack games</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Game shows</span>
                        </li>
                      </ul>

                      <div className="pt-4 border-t text-center">
                        <h4 className="text-sm font-semibold mb-2">Providers:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Evolution Gaming</li>
                          <li>Pragmatic Play Live</li>
                          <li>Playtech Live</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="text-center">
                    <CardTitle className="flex items-center justify-center">
                      <span className="mr-2">🎲</span>
                      Tafelspellen
                    </CardTitle>
                    <CardDescription>50+ varianten</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <ul className="space-y-2 text-center">
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Poker varianten</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Baccarat</span>
                        </li>
                        <li className="flex items-center justify-center">
                          <Check className="h-4 w-4 text-gokkerz-green mr-2" />
                          <span>Dobbelspellen</span>
                        </li>
                      </ul>
                      
                      <div className="pt-4 border-t text-center">
                        <h4 className="text-sm font-semibold mb-2">Populaire varianten:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          <li>Caribbean Stud Poker</li>
                          <li>European Roulette</li>
                          <li>Sic Bo</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader className="text-center">
                  <CardTitle>Game Providers</CardTitle>
                  <CardDescription>De beste spelontwikkelaars onder één dak</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
                    {['Pragmatic Play', 'NetEnt', 'Play\'n GO', 'Microgaming', 'Evolution', 'Red Tiger'].map((provider) => (
                      <div key={provider} className="p-4 border rounded-lg text-center hover:border-gokkerz-green transition-colors">
                        <p className="text-sm font-medium">{provider}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="info" className="text-center">
            <div className="grid grid-cols-1 gap-8 justify-center items-center text-center">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center items-center text-center">
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-1.5">
                    <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold">
                      <Wallet className="h-5 w-5 text-gokkerz-green" />
                      Betaalmethoden
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">Veilig en snel geld storten en opnemen</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 gap-4">
                        <div className="p-4 border rounded-lg bg-gray-50/50 text-center shadow-sm">
                          <h4 className="font-semibold mb-3 flex items-center justify-center text-base">
                            <Wallet className="h-4 w-4 text-gokkerz-green mr-2" />
                            Storten
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {['iDEAL', 'Trustly', 'Bankoverschrijving', 'VISA/Mastercard'].map(method => (
                              <li key={method} className="flex items-center justify-center">
                                <Check className="h-3 w-3 text-gokkerz-green mr-2 flex-shrink-0" />
                                {method}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="p-4 border rounded-lg bg-gray-50/50 text-center shadow-sm">
                          <h4 className="font-semibold mb-3 flex items-center justify-center text-base">
                            <Wallet className="h-4 w-4 text-gokkerz-green mr-2" />
                            Uitbetalen
                          </h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            {['Bankoverschrijving', 'Trustly', 'VISA/Mastercard'].map(method => (
                              <li key={method} className="flex items-center justify-center">
                                <Check className="h-3 w-3 text-gokkerz-green mr-2 flex-shrink-0" />
                                {method}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader className="text-center space-y-1.5">
                    <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold">
                      <Users className="h-5 w-5 text-gokkerz-green" />
                      Klantenservice
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">24/7 ondersteuning in het Nederlands</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {[
                        {
                          icon: <Users className="h-5 w-5 text-gokkerz-green" />,
                          title: 'Live Chat',
                          description: '24/7 beschikbaar voor directe hulp',
                          detail: 'Gem. wachttijd: <5 minuten',
                          bgColor: 'bg-green-50'
                        },
                        {
                          icon: <Mail className="h-5 w-5 text-blue-500" />,
                          title: 'Email Support',
                          description: `support@${casino.name.toLowerCase()}.nl`,
                          detail: 'Antwoord binnen 24 uur',
                          bgColor: 'bg-blue-50'
                        },
                        {
                          icon: <Phone className="h-5 w-5 text-purple-500" />,
                          title: 'Telefonisch',
                          description: 'Ma-Vr: 09:00 - 22:00',
                          detail: 'Nederlands telefoonnummer',
                          bgColor: 'bg-purple-50'
                        }
                      ].map((item, index) => (
                        <div key={index} className="flex flex-col items-center p-4 border rounded-lg hover:border-gokkerz-green transition-colors text-center shadow-sm">
                          <div className={`p-2 ${item.bgColor} rounded-lg mb-4`}>{item.icon}</div>
                          <h4 className="font-semibold mb-1 text-base">{item.title}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                          <p className="text-sm text-gray-500 mt-1">{item.detail}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card className="shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="text-center space-y-1.5">
                  <CardTitle className="flex items-center justify-center gap-2 text-lg font-bold">
                    <Shield className="h-5 w-5 text-gokkerz-green" />
                    Veiligheid & Licenties
                  </CardTitle>
                  <CardDescription className="text-sm text-gray-500">Betrouwbaarheid en regulering</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                      {
                        icon: <Shield className="h-6 w-6 text-gokkerz-green" />,
                        title: 'KSA Licentie',
                        description: 'Volledig gereguleerd door de Nederlandse Kansspelautoriteit'
                      },
                      {
                        icon: <Lock className="h-6 w-6 text-gokkerz-green" />,
                        title: 'SSL Beveiliging',
                        description: '256-bit encryptie voor maximale gegevensbescherming'
                      },
                      {
                        icon: <ThumbsUp className="h-6 w-6 text-gokkerz-green" />,
                        title: 'Verantwoord Spelen',
                        description: 'Uitgebreide tools voor responsible gaming'
                      }
                    ].map((item, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:border-gokkerz-green transition-colors text-center shadow-sm">
                        <div className="flex flex-col items-center mb-3">
                          {item.icon}
                          <h4 className="font-semibold mt-3 text-base">{item.title}</h4>
                        </div>
                        <p className="text-sm text-gray-600">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Klaar om te spelen bij {casino.name}?
            </h2>
            <p className="text-gray-600 mb-8">
              Profiteer nu van de welkomstbonus van {casino.bonus} en ontdek het uitgebreide spelaanbod
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="py-6 px-8 text-lg font-semibold hover:opacity-90"
                style={{ 
                  backgroundColor: brandColor,
                  color: 'white'
                }}
                asChild
              >
                <a
                  href={getCasinoUrl(casino.name)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Bezoek {casino.name}
                </a>
              </Button>
              <Button variant="outline" className="py-6 px-8 text-lg font-semibold">
                Lees Meer Reviews
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Casinos Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Andere interessante casino's</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {casinos
              .filter(c => c.name !== casino.name)
              .sort(() => Math.random() - 0.5)
              .slice(0, 4)
              .map((related) => (
                <Card key={related.name} className="hover:shadow-lg transition-shadow h-full flex flex-col">
                  <CardHeader className="text-center pb-4">
                    <img src={related.logo} alt={related.name} className="h-16 w-auto mx-auto mb-4" />
                    <CardTitle className="text-lg mb-2">{related.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col items-center justify-between pb-6">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(related.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{related.bonus}</p>
                    <Button asChild variant="outline" className="w-full mt-2">
                      <a href={`/casinos/${related.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}>Lees review</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">Laatste blog artikelen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Importeer of fetch de laatste 3 blog posts, hier als voorbeeld dummy data: */}
            {[
              {
                id: 1,
                title: 'De beste casino bonussen van deze maand',
                excerpt: 'Ontdek welke casino\'s deze maand de meest lucratieve bonussen aanbieden en hoe je hier optimaal van kunt profiteren.',
                image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Casino+Bonussen',
                date: '3 dagen geleden',
                author: 'Casino Expert',
              },
              {
                id: 2,
                title: 'Gokverslaving herkennen en voorkomen',
                excerpt: 'Tips en adviezen om problematisch gokgedrag te herkennen en verantwoord te blijven spelen bij online casino\'s.',
                image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Verantwoord+Spelen',
                date: '1 week geleden',
                author: 'GGZ Specialist',
              },
              {
                id: 3,
                title: 'Nieuwe spellen om in de gaten te houden',
                excerpt: 'Een overzicht van de meest verwachte casinospellen die de komende maanden worden uitgebracht.',
                image: 'https://placehold.co/600x400/00CC66/FFFFFF/png?text=Nieuwe+Spellen',
                date: '2 weken geleden',
                author: 'Game Reviewer',
              },
            ].map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-shadow flex flex-col h-full">
                <img src={post.image} alt={post.title} className="h-48 w-full object-cover rounded-t-xl" />
                <CardHeader className="p-5 flex-1">
                  <CardTitle className="text-xl mb-2">{post.title}</CardTitle>
                  <CardDescription className="mb-2 text-gray-500 text-sm">{post.date} &bull; {post.author}</CardDescription>
                  <p className="text-gray-600 text-base">{post.excerpt}</p>
                </CardHeader>
                <CardContent className="p-5 pt-0">
                  <Button asChild variant="outline" className="w-full">
                    <a href={`/blog`}>Lees artikel</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default CasinoReview;
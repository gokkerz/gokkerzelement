import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/KnopComponent';
import { Link } from 'react-router-dom';
import { Star, Info, Shield, Check, ThumbsUp, Clock, Users, Gift } from 'lucide-react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
  CardFooter,
} from '@/components/ui/card';
import useMediaQuery from '@/hooks/gebruikMobielHook';
import HeroHeader from '@/components/HeroHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

export const casinos = [
  {
    id: 1,
    name: 'TOTO Casino',
    logo: '/casinologos/casilogos/toto.svg',
    rating: 4.8,
    bonus: '100% tot €1000 + 100 Free Spins',
    minDeposit: '€10',
    features: ['2500+ games', 'Live Casino', 'Nederlandse licentie'],
  },
  {
    id: 2,
    name: 'BetCity',
    logo: '/casinologos/casilogos/betcity.svg',
    rating: 4.7,
    bonus: '€250 + 100 Free Spins',
    minDeposit: '€10',
    features: ['2000+ games', 'Snelle uitbetalingen', '24/7 support'],
  },
  {
    id: 3,
    name: 'Holland Casino',
    logo: '/casinologos/casilogos/holland casino.svg',
    rating: 4.9,
    bonus: '100% tot €200 + 100 Free Spins',
    minDeposit: '€10',
    features: ['Betrouwbaar staatscasino', 'Live Casino', 'VIP programma'],
  },
  {
    id: 4,
    name: 'Kansino',
    logo: '/casinologos/casilogos/kansino.svg',
    rating: 4.6,
    bonus: '100% tot €500 + 100 Free Spins',
    minDeposit: '€10',
    features: ['1800+ games', 'Snelle registratie', 'Groot spelaanbod'],
  },
  {
    id: 5,
    name: 'Circus Casino',
    logo: '/casinologos/casilogos/circus.svg',
    rating: 4.5,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Exclusieve games', 'Live Casino', 'Mobile friendly'],
  },
  {
    id: 6,
    name: "Jack's Casino",
    logo: '/casinologos/casilogos/jacks casino.svg',
    rating: 4.7,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ["Bekend van fysieke casino's", 'Uitgebreid spelaanbod', '24/7 klantenservice'],
  },
  {
    id: 7,
    name: 'Unibet',
    logo: '/casinologos/casilogos/unibet.svg',
    rating: 4.8,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sport & Casino', 'Internationale reputatie', 'Uitstekende app'],
  },
  {
    id: 8,
    name: 'LeoVegas',
    logo: '/casinologos/casilogos/leovegas.svg',
    rating: 4.7,
    bonus: '€1000 + 50 Free Spins',
    minDeposit: '€10',
    features: ['Award-winning casino', 'Beste mobile casino', 'Grote jackpots'],
  },
  {
    id: 9,
    name: '777',
    logo: '/casinologos/casilogos/777.svg',
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Classic casino games', 'Betrouwbare uitbetalingen', 'Retro thema'],
  },
  {
    id: 10,
    name: 'Fair Play',
    logo: '/casinologos/casilogos/fairplay casino.svg',
    rating: 4.6,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Eerlijk spelaanbod', 'Nederlandse klantenservice', 'Snelle verificatie'],
  },
  {
    id: 11,
    name: '365',
    logo: '/casinologos/casilogos/365.svg',
    rating: 4.7,
    bonus: '100% tot €365',
    minDeposit: '€10',
    features: ['Sport & Casino', '24/7 actief', 'Internationale ervaring'],
  },
  {
    id: 12,
    name: '711',
    logo: '/casinologos/casilogos/711.svg',
    rating: 4.4,
    bonus: '100% tot €100',
    minDeposit: '€10',
    features: ['Modern platform', 'Snelle uitbetalingen', 'Vele betaalmethoden'],
  },
  {
    id: 13,
    name: 'Bet MGM',
    logo: '/casinologos/casilogos/bet mgm.svg',
    rating: 4.8,
    bonus: '100% tot €500',
    minDeposit: '€10',
    features: ['Wereldberoemd merk', 'Luxe VIP programma', 'Uitgebreid live casino'],
  },
  {
    id: 14,
    name: 'BetNation',
    logo: '/casinologos/casilogos/betnation.svg',
    rating: 4.5,
    bonus: '200% tot €200',
    minDeposit: '€10',
    features: ['Nieuwe casino ervaring', 'Moderne interface', 'Snelle registratie'],
  },
  {
    id: 15,
    name: 'Bingoal',
    logo: '/casinologos/casilogos/bingoal.svg',
    rating: 4.4,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Bingo specialist', 'Casino games', 'Sociale gaming'],
  },
  {
    id: 16,
    name: 'ComeOn',
    logo: '/casinologos/casilogos/comeon.svg',
    rating: 4.6,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Gebruiksvriendelijk', 'Snelle payouts', 'Loyaliteitsprogramma'],
  },
  {
    id: 17,
    name: 'GGPoker',
    logo: '/casinologos/casilogos/ggpoker.svg',
    rating: 4.7,
    bonus: '100% tot €600',
    minDeposit: '€10',
    features: ['Poker specialist', 'Casino games', 'Professionele setup'],
  },
  {
    id: 18,
    name: 'Goldrun Casino',
    logo: '/casinologos/casilogos/goldrun casino.svg',
    rating: 4.5,
    bonus: '100% tot €250',
    minDeposit: '€10',
    features: ['Gouden jackpots', 'VIP behandeling', 'Exclusieve slots'],
  },
  {
    id: 19,
    name: 'Hard Rock Casino',
    logo: '/casinologos/casilogos/hardrock casino.svg',
    rating: 4.8,
    bonus: '100% tot €1000',
    minDeposit: '€10',
    features: ['Iconisch merk', 'Premium ervaring', 'Exclusieve games'],
  },
  {
    id: 20,
    name: 'Hommerson',
    logo: '/casinologos/casilogos/hommerson.svg',
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Nederlandse traditie', 'Betrouwbaar', 'Persoonlijke service'],
  },
  {
    id: 21,
    name: 'Lucky 7 Casino',
    logo: '/casinologos/casilogos/lucky 7 casino.svg',
    rating: 4.4,
    bonus: '777 Free Spins',
    minDeposit: '€10',
    features: ['Lucky promoties', 'Klassieke games', 'Wekelijkse bonussen'],
  },
  {
    id: 22,
    name: 'One Casino',
    logo: '/casinologos/casilogos/one casino.svg',
    rating: 4.6,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Eigen games', 'Unieke ervaring', 'Nederlandse klantenservice'],
  },
  {
    id: 23,
    name: 'Scori Pro',
    logo: '/casinologos/casilogos/scori pro.svg',
    rating: 4.5,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sports betting', 'Casino games', 'Pro features'],
  },
  {
    id: 24,
    name: 'TonyBet',
    logo: '/casinologos/casilogos/tonybet.svg',
    rating: 4.6,
    bonus: '100% tot €300',
    minDeposit: '€10',
    features: ['Sportweddenschappen', 'Live casino', 'Crypto-friendly'],
  },
  {
    id: 25,
    name: 'VBet',
    logo: '/casinologos/casilogos/vbet.svg',
    rating: 4.5,
    bonus: '100% tot €500',
    minDeposit: '€10',
    features: ['Virtuele sports', 'Live betting', 'Casino games'],
  },
  {
    id: 26,
    name: 'Winnit',
    logo: '/casinologos/casilogos/winnit.svg',
    rating: 4.4,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Winnende formule', 'Daily promoties', 'Snelle uitbetalingen'],
  },
  {
    id: 27,
    name: 'ZeBet',
    logo: '/casinologos/casilogos/ze bet.svg',
    rating: 4.5,
    bonus: '100% tot €200',
    minDeposit: '€10',
    features: ['Modern platform', 'Vele sporten', 'Casino sectie'],
  },
];

const casinoBrandColors: Record<string, string> = {
  'TOTO Casino': '#00CC66',
  BetCity: '#FF6600',
  'Holland Casino': '#FFCC00',
  Kansino: '#0066FF',
  'Circus Casino': '#FF0000',
  "Jack's Casino": '#6600CC',
  Unibet: '#00FF00',
  LeoVegas: '#FF9900',
  '777': '#FF3333',
  'Fair Play': '#33CCFF',
  '365': '#FF6600',
  '711': '#FFCC33',
  'Bet MGM': '#CC9900',
  BetNation: '#FF6600',
  Bingoal: '#FF3333',
  ComeOn: '#00CC99',
  GGPoker: '#FF6600',
  'Goldrun Casino': '#FFCC00',
  'Hard Rock Casino': '#CC0000',
  Hommerson: '#33CC33',
  'Lucky 7 Casino': '#FF9900',
  'One Casino': '#00CCFF',
  'Scori Pro': '#FF6600',
  TonyBet: '#FF3333',
  VBet: '#FF6600',
  Winnit: '#33CCFF',
  ZeBet: '#FFCC33',
};

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
    'ZeBet': 'https://www.zebet.nl',
  };
  return urls[casinoName] || '#';
};

const Casinos = () => {
  const isMobile = useMediaQuery('(max-width: 1023px)');

  const renderCasinoCard = (casino: (typeof casinos)[0]) => (
    <Card
      key={casino.id}
      className="casino-card-hover flex flex-col"
      style={{
        ['--brand-shadow-color' as any]: `${casinoBrandColors[casino.name] || '#00CC66'}40`,
      }}
    >
      <CardHeader className="relative p-4 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-4">
            <img
              src={casino.logo}
              alt={casino.name}
              className="h-24 w-auto rounded-[10%] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-white/90 px-2 py-0.5 shadow-sm">
              <Star className="mr-0.5 h-3 w-3 fill-yellow-400 text-yellow-400" />
              <span className="text-xs font-medium">{casino.rating}</span>
            </div>
          </div>
          <CardTitle className="mb-3 text-lg">{casino.name}</CardTitle>
        </div>
        <div className="space-y-2">
          <CardDescription className="flex flex-col items-center">
            {casino.bonus.includes('+') ? (
              <>
                <span className="mb-2 text-4xl font-bold text-black">
                  {casino.bonus.split('+')[0].trim()}
                </span>
                <span className="text-lg text-gray-500">+ {casino.bonus.split('+')[1].trim()}</span>
              </>
            ) : (
              <span className="mb-2 text-4xl font-bold text-black">{casino.bonus}</span>
            )}
            <span className="mt-2 text-sm font-medium text-gray-500">
              Min. Storting: {casino.minDeposit}
            </span>
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent className="flex-grow px-4 py-2 text-center">
        <ul className="space-y-2">
          {casino.features.map((feature, index) => (
            <li key={index} className="flex items-center justify-center text-sm">
              <Check className="mr-2 h-4 w-4 flex-shrink-0 text-gokkerz-green" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
      <CardFooter className="px-4 pb-4 pt-2">
        <div className="flex w-full flex-col gap-2">
          <Button
            className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90"
            asChild
          >
            <a
              href={getCasinoUrl(casino.name)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Bezoek Casino
            </a>
          </Button>
          <Button variant="outline" className="w-full text-sm shadow-sm" asChild>
            <Link
              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              className="flex w-full items-center justify-center"
            >
              Lees Review
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );

  return (
    <Layout>
      <Helmet>
        <title>Online Casino's Nederland 2025 | Reviews & Vergelijking</title>
        <meta
          name="description"
          content="Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen. ✓ KSA-vergund ✓ iDEAL ✓ Betrouwbare reviews"
        />
        <meta
          name="keywords"
          content="online casino vergelijking, casino reviews, legale casino's nederland, beste online casino, ksa vergunning, casino ervaring"
        />
        <link rel="canonical" href="https://gokkerz.nl/casinos" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online Casino's Nederland 2025 | Reviews & Vergelijking"
        />
        <meta
          property="og:description"
          content="Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen van KSA-vergunde casino's."
        />
        <meta property="og:url" content="https://gokkerz.nl/casinos" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Online Casino's Nederland 2025 | Reviews & Vergelijking"
        />
        <meta
          name="twitter:description"
          content="Vergelijk legale Nederlandse online casino's. Actuele reviews en bonussen."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: "Online Casino's Nederland 2025 | Reviews & Vergelijking",
            description:
              "Vergelijk alle legale online casino's van Nederland. Bekijk actuele reviews, bonussen en ervaringen.",
            author: {
              '@type': 'Organization',
              name: 'Gokkerz.nl',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Gokkerz.nl',
              logo: {
                '@type': 'ImageObject',
                url: 'https://gokkerz.nl/assets/Gokkerz.nl.svg',
              },
            },
            dateModified: '2025-04-30',
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="2025 Casino Overzicht"
        title={
          <>
            Alle Legale <span className="text-gokkerz-green">Online Casinos</span> Nederland
          </>
        }
        description="Bekijk alle betrouwbare en legale online casino's met Nederlandse vergunning. Ontdek casino's met snelle uitbetalingen, aantrekkelijke bonussen en gratis spins. Speel veilig bij gereguleerde Nederlandse casino's."
        bullets={[
          { icon: <Shield className="h-4 w-4 text-gokkerz-green" />, text: "Legale casino's" },
          { icon: <Clock className="h-4 w-4 text-gokkerz-green" />, text: 'Snelle uitbetalingen' },
          { icon: <Gift className="h-4 w-4 text-gokkerz-green" />, text: 'Welkomstbonussen' },
        ]}
      />
      <div className="container mx-auto px-4">
        {/* Casino Vergelijkingstabel */}
        <div className="mb-16 overflow-hidden rounded-xl border bg-white shadow-lg">
          {isMobile ? (
            <div className="space-y-4">{casinos.map(renderCasinoCard)}</div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <TableHead className="w-[350px] py-6 text-base">Casino</TableHead>
                    <TableHead className="py-6 text-base">Rating</TableHead>
                    <TableHead className="w-[200px] py-6 text-base">Welkomstbonus</TableHead>
                    <TableHead className="py-6 text-base">Min. Storting</TableHead>
                    <TableHead className="py-6 text-base">Kenmerken</TableHead>
                    <TableHead className="py-6 text-base">Actie</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {casinos.map((casino) => (
                    <TableRow
                      key={casino.id}
                      className="group transition-colors duration-200 hover:bg-gray-50/80"
                    >
                      <TableCell className="py-6 font-medium">
                        <div className="flex items-center gap-6">
                          <div className="flex h-20 w-[180px] items-center justify-center transition-transform duration-200 group-hover:scale-105">
                            <img
                              src={casino.logo}
                              alt={casino.name}
                              className="h-20 w-[180px] rounded-[10%] object-contain"
                            />
                          </div>
                          <span className="min-w-[120px] text-left text-lg font-semibold transition-colors group-hover:text-gokkerz-green">
                            {casino.name}
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="flex">
                            {[...Array(5)].map((_, index) => (
                              <Star
                                key={index}
                                className={`h-5 w-5 transition-all duration-200 ${
                                  index < Math.floor(casino.rating)
                                    ? 'fill-yellow-400 text-yellow-400 group-hover:scale-110'
                                    : 'text-gray-200'
                                }`}
                              />
                            ))}
                          </div>
                          <span className="ml-2 font-medium">{casino.rating}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-1">
                          {casino.bonus.includes('+') ? (
                            <>
                              <span className="text-left font-medium text-green-600 transition-colors group-hover:text-green-700">
                                {casino.bonus.split('+')[0].trim()}
                              </span>
                              <span className="text-left text-sm text-gray-500">
                                + {casino.bonus.split('+')[1].trim()}
                              </span>
                            </>
                          ) : (
                            <span className="text-left font-medium text-green-600 transition-colors group-hover:text-green-700">
                              {casino.bonus}
                            </span>
                          )}
                          <span className="text-left text-sm text-gray-500">
                            Bij eerste storting
                          </span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium transition-colors group-hover:bg-gray-200">
                          {casino.minDeposit}
                        </span>
                      </TableCell>
                      <TableCell>
                        <ul className="space-y-1.5">
                          {casino.features.map((feature, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-left text-sm transition-transform group-hover:translate-x-1"
                            >
                              <div className="h-1.5 w-1.5 rounded-full bg-gokkerz-green/60"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-col gap-3">
                          <Button
                            className="bg-green-gradient py-6 text-base font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:opacity-90 hover:shadow-md"
                            asChild
                          >
                            <a
                              href={getCasinoUrl(casino.name)}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Bezoek casino
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            className="py-6 transition-all duration-200 hover:bg-gray-50/80"
                            asChild
                          >
                            <Link
                              to={`/casinos/${casino.name.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                            >
                              Lees Review
                            </Link>
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>

        {/* Extra SEO-content onder de tabel */}
        <div className="prose mt-12 max-w-none">
          <h2 className="mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent">
            Hoe Kies Je het Beste Online Casino?
          </h2>
          <p className="mb-8 text-lg text-gray-600">
            Bij het kiezen van een online casino zijn er verschillende factoren om rekening mee te
            houden:
          </p>
          <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">🎲</span>
                <span>Spelaanbod</span>
              </CardTitle>
              <CardDescription className="text-base">
                Kijk naar het aantal en type spellen dat wordt aangeboden. De beste casino's bieden:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">Slots van top providers</li>
                  <li className="text-gray-700">Live casino games</li>
                  <li className="text-gray-700">Tafelspellen</li>
                  <li className="text-gray-700">Exclusieve titels</li>
                </ul>
              </CardDescription>
            </Card>
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">💰</span>
                <span>Betalingen</span>
              </CardTitle>
              <CardDescription className="text-base">
                Let op de beschikbare betaalmethoden:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">iDEAL</li>
                  <li className="text-gray-700">Bankoverschrijving</li>
                  <li className="text-gray-700">Trustly</li>
                  <li className="text-gray-700">Uitbetalingssnelheid</li>
                </ul>
              </CardDescription>
            </Card>
            <Card className="p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
              <CardTitle className="mb-4 flex items-center gap-2 text-lg">
                <span className="text-2xl">🎁</span>
                <span>Bonussen</span>
              </CardTitle>
              <CardDescription className="text-base">
                Vergelijk de verschillende bonusaanbiedingen:
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li className="text-gray-700">Welkomstbonus</li>
                  <li className="text-gray-700">Free spins</li>
                  <li className="text-gray-700">Loyaliteitsprogramma</li>
                  <li className="text-gray-700">Voorwaarden</li>
                </ul>
              </CardDescription>
            </Card>
          </div>

          {/* Verplaatste informatieve kaarten */}
          <div className="my-8 grid grid-cols-1 gap-6 md:grid-cols-2">
            <Card className="bg-green-50 p-6">
              <CardTitle className="mb-3 text-lg">
                ✓ Waarom Kiezen voor een Legaal Casino?
              </CardTitle>
              <CardContent className="space-y-2">
                <div className="flex items-center">
                  <Shield className="mr-2 h-5 w-5 text-green-600" />
                  <span>Gegarandeerde veilige speelomgeving</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Betrouwbare uitbetalingen</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Nederlandse klantenservice</span>
                </div>
                <div className="flex items-center">
                  <Check className="mr-2 h-5 w-5 text-green-600" />
                  <span>Hulp bij problematisch speelgedrag</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-blue-50 p-6">
              <CardTitle className="mb-3 text-lg">🎰 Beschikbare Casino's</CardTitle>
              <CardDescription className="space-y-2">
                <p>Je vindt hier alle bekende namen zoals:</p>
                <ul className="list-inside list-disc space-y-1">
                  <li>TOTO Casino</li>
                  <li>Holland Casino Online</li>
                  <li>BetCity</li>
                  <li>Kansino</li>
                  <li>Jack's Casino</li>
                  <li>En vele anderen...</li>
                </ul>
              </CardDescription>
            </Card>
          </div>

          <h2 className="mb-6 text-2xl font-bold">Veelgestelde Vragen over Online Casino's</h2>
          <div className="mb-12 space-y-8">
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Info className="h-5 w-5 text-gokkerz-green" />
                Zijn alle online casino's in Nederland legaal?
              </h3>
              <p className="leading-relaxed text-gray-600">
                Nee, alleen casino's met een Nederlandse vergunning van de Kansspelautoriteit zijn
                legaal. Deze zijn herkenbaar aan het KSA-logo en .nl-domein.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Shield className="h-5 w-5 text-gokkerz-green" />
                Hoe zit het met de veiligheid?
              </h3>
              <p className="leading-relaxed text-gray-600">
                Legale Nederlandse online casino's zijn verplicht om gebruik te maken van de
                nieuwste beveiligingstechnologieën en moeten voldoen aan strenge eisen op het gebied
                van verantwoord spelen.
              </p>
            </div>
            <div className="rounded-xl bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md">
              <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
                <Users className="h-5 w-5 text-gokkerz-green" />
                Wat is CRUKS?
              </h3>
              <p className="leading-relaxed text-gray-600">
                CRUKS is het Centraal Register Uitsluiting Kansspelen. Alle legale online casino's
                zijn verplicht om spelers te controleren in dit register voordat ze kunnen spelen.
              </p>
            </div>
          </div>

          {/* Conclusie met verbeterde visuele presentatie */}
          <div className="relative mb-8 rounded-2xl border border-green-100 bg-gradient-to-br from-green-50 to-white p-8">
            <div className="bg-grid-pattern absolute inset-0 opacity-5"></div>
            <h2 className="mb-4 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent">
              Conclusie
            </h2>
            <p className="relative z-10 text-lg leading-relaxed text-gray-600">
              Met 27 legale online casino's in Nederland heb je ruime keus. Elk casino heeft zijn
              eigen sterke punten, of je nu op zoek bent naar de beste bonussen, het grootste
              spelaanbod of de snelste uitbetalingen. Gebruik onze vergelijkingstabel om het beste
              casino voor jouw voorkeuren te vinden.
            </p>
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

export default Casinos;

import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/KnopComponent';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Link } from 'react-router-dom';
import {
  Search,
  Filter,
  Gift,
  ArrowRight,
  Check,
  Info,
  Star,
  Shield,
  Calendar,
  Users,
} from 'lucide-react';
import { casinoBrandColors } from '@/lib/casinoKleurenData';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import HeroHeader from '@/components/HeroHeader';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Bonussen = () => {
  // Bonus offers data with all casinos
  const bonusOffers = [
    {
      id: 1,
      casinoName: 'TOTO Casino',
      casinoLogo: '/casinologos/casilogos/toto.svg',
      bonusAmount: '€1000',
      freeSpins: 100,
      description: '100% bonus tot €1000 + 100 Free Spins',
      requirements: '24x inzet vereist',
      rating: 4.8,
      exclusive: true,
    },
    {
      id: 2,
      casinoName: 'BetCity',
      casinoLogo: '/casinologos/casilogos/betcity.svg',
      bonusAmount: '€250',
      freeSpins: 100,
      description: 'Welkomstbonus tot €250 + 100 Free Spins',
      requirements: '24x inzet vereist',
      rating: 4.7,
    },
    {
      id: 3,
      casinoName: 'Holland Casino',
      casinoLogo: '/casinologos/casilogos/holland casino.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: '100% match bonus + free spins',
      requirements: '20x inzet vereist',
      rating: 4.9,
      exclusive: true,
    },
    {
      id: 4,
      casinoName: 'Kansino',
      casinoLogo: '/casinologos/casilogos/kansino.svg',
      bonusAmount: '€500',
      freeSpins: 100,
      description: 'Maximale bonus van €500 + gratis spins',
      requirements: '25x inzet vereist',
      rating: 4.6,
    },
    {
      id: 5,
      casinoName: 'Circus Casino',
      casinoLogo: '/casinologos/casilogos/circus.svg',
      bonusAmount: '€250',
      freeSpins: 50,
      description: 'Welkomstbonus met lage inzetvereisten',
      requirements: '20x inzet vereist',
      rating: 4.5,
    },
    {
      id: 6,
      casinoName: "Jack's Casino",
      casinoLogo: '/casinologos/casilogos/jacks casino.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'Bekende Nederlandse casino keten',
      requirements: '20x inzet vereist',
      rating: 4.7,
    },
    {
      id: 7,
      casinoName: 'Unibet',
      casinoLogo: '/casinologos/casilogos/unibet.svg',
      bonusAmount: '€300',
      freeSpins: 50,
      description: 'Sport & Casino welkomstbonus',
      requirements: '35x inzet vereist',
      rating: 4.8,
    },
    {
      id: 8,
      casinoName: 'LeoVegas',
      casinoLogo: '/casinologos/casilogos/leovegas.svg',
      bonusAmount: '€1000',
      freeSpins: 50,
      description: 'Hoogste welkomstbonus + free spins',
      requirements: '30x inzet vereist',
      rating: 4.7,
      exclusive: true,
    },
    {
      id: 9,
      casinoName: '777',
      casinoLogo: '/casinologos/casilogos/777.svg',
      bonusAmount: '€200',
      freeSpins: 77,
      description: 'Lucky number bonus pakket',
      requirements: '30x inzet vereist',
      rating: 4.5,
    },
    {
      id: 10,
      casinoName: 'Fair Play',
      casinoLogo: '/casinologos/casilogos/fairplay casino.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'Fair Play bonus pakket',
      requirements: '20x inzet vereist',
      rating: 4.6,
    },
    {
      id: 11,
      casinoName: '365',
      casinoLogo: '/casinologos/casilogos/365.svg',
      bonusAmount: '€365',
      freeSpins: 100,
      description: 'Dagelijks nieuwe bonussen',
      requirements: '30x inzet vereist',
      rating: 4.7,
    },
    {
      id: 12,
      casinoName: '711',
      casinoLogo: '/casinologos/casilogos/711.svg',
      bonusAmount: '€100',
      freeSpins: 50,
      description: 'Lucky casino bonus',
      requirements: '25x inzet vereist',
      rating: 4.4,
    },
    {
      id: 13,
      casinoName: 'Bet MGM',
      casinoLogo: '/casinologos/casilogos/bet mgm.svg',
      bonusAmount: '€500',
      freeSpins: 200,
      description: 'Premium casino ervaring',
      requirements: '35x inzet vereist',
      rating: 4.8,
      exclusive: true,
    },
    {
      id: 14,
      casinoName: 'BetNation',
      casinoLogo: '/casinologos/casilogos/betnation.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'Nederlandse casino bonus',
      requirements: '25x inzet vereist',
      rating: 4.5,
    },
    {
      id: 15,
      casinoName: 'Bingoal',
      casinoLogo: '/casinologos/casilogos/bingoal.svg',
      bonusAmount: '€250',
      freeSpins: 50,
      description: 'Casino & Bingo bonus',
      requirements: '20x inzet vereist',
      rating: 4.4,
    },
    {
      id: 16,
      casinoName: 'ComeOn',
      casinoLogo: '/casinologos/casilogos/comeon.svg',
      bonusAmount: '€300',
      freeSpins: 100,
      description: 'Welkomstbonus voor nieuwe spelers',
      requirements: '30x inzet vereist',
      rating: 4.6,
    },
    {
      id: 17,
      casinoName: 'GGPoker',
      casinoLogo: '/casinologos/casilogos/ggpoker.svg',
      bonusAmount: '€600',
      freeSpins: 50,
      description: 'Poker & Casino bonus',
      requirements: '35x inzet vereist',
      rating: 4.7,
    },
    {
      id: 18,
      casinoName: 'Goldrun Casino',
      casinoLogo: '/casinologos/casilogos/goldrun casino.svg',
      bonusAmount: '€250',
      freeSpins: 100,
      description: 'Golden welkomstbonus',
      requirements: '25x inzet vereist',
      rating: 4.5,
    },
    {
      id: 19,
      casinoName: 'Hard Rock Casino',
      casinoLogo: '/casinologos/casilogos/hardrock casino.svg',
      bonusAmount: '€1000',
      freeSpins: 150,
      description: 'Rock star welkomstbonus',
      requirements: '35x inzet vereist',
      rating: 4.8,
      exclusive: true,
    },
    {
      id: 20,
      casinoName: 'Hommerson',
      casinoLogo: '/casinologos/casilogos/hommerson.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'Nederlandse casino traditie',
      requirements: '20x inzet vereist',
      rating: 4.5,
    },
    {
      id: 21,
      casinoName: 'Lucky 7 Casino',
      casinoLogo: '/casinologos/casilogos/lucky 7 casino.svg',
      bonusAmount: '€777',
      freeSpins: 77,
      description: 'Lucky 7 welkomstpakket',
      requirements: '25x inzet vereist',
      rating: 4.4,
    },
    {
      id: 22,
      casinoName: 'One Casino',
      casinoLogo: '/casinologos/casilogos/one casino.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'All-in-one bonus pakket',
      requirements: '25x inzet vereist',
      rating: 4.6,
    },
    {
      id: 23,
      casinoName: 'Scori Pro',
      casinoLogo: '/casinologos/casilogos/scori pro.svg',
      bonusAmount: '€300',
      freeSpins: 50,
      description: 'Pro welkomstbonus',
      requirements: '30x inzet vereist',
      rating: 4.5,
    },
    {
      id: 24,
      casinoName: 'TonyBet',
      casinoLogo: '/casinologos/casilogos/tonybet.svg',
      bonusAmount: '€300',
      freeSpins: 100,
      description: 'Sport & Casino welkomstbonus',
      requirements: '35x inzet vereist',
      rating: 4.6,
    },
    {
      id: 25,
      casinoName: 'VBet',
      casinoLogo: '/casinologos/casilogos/vbet.svg',
      bonusAmount: '€500',
      freeSpins: 200,
      description: 'Complete welkomstbonus',
      requirements: '30x inzet vereist',
      rating: 4.5,
    },
    {
      id: 26,
      casinoName: 'Winnit',
      casinoLogo: '/casinologos/casilogos/winnit.svg',
      bonusAmount: '€200',
      freeSpins: 100,
      description: 'Winners welkomstbonus',
      requirements: '25x inzet vereist',
      rating: 4.4,
    },
    {
      id: 27,
      casinoName: 'ZeBet',
      casinoLogo: '/casinologos/casilogos/ze bet.svg',
      bonusAmount: '€200',
      freeSpins: 50,
      description: 'Nieuwe spelers bonus',
      requirements: '30x inzet vereist',
      rating: 4.5,
    },
  ];

  const [selectedType, setSelectedType] = React.useState('all');
  const [searchQuery, setSearchQuery] = React.useState('');

  const filteredBonuses = React.useMemo(() => {
    let filtered = bonusOffers;

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(
        (offer) =>
          offer.casinoName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          offer.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Filter by bonus type
    switch (selectedType) {
      case 'welcome':
        filtered = filtered.filter((offer) => offer.bonusAmount !== '0');
        break;
      case 'nodeposit':
        filtered = filtered.filter(
          (offer) =>
            offer.requirements.includes('no deposit') ||
            offer.description.toLowerCase().includes('no deposit')
        );
        break;
      case 'freespins':
        filtered = filtered.filter((offer) => offer.freeSpins > 0);
        break;
      default:
        // 'all' - no additional filtering
        break;
    }

    return filtered;
  }, [bonusOffers, selectedType, searchQuery]);

  return (
    <Layout>
      <Helmet>
        <title>Casino Bonussen 2025 | Beste Online Casino Bonussen Nederland</title>
        <meta
          name="description"
          content="Vergelijk de beste online casino bonussen van Nederland. Actuele welkomstbonussen, free spins en no deposit bonussen. ✓ Legaal ✓ Betrouwbaar ✓ Direct inzetbaar"
        />
        <meta
          name="keywords"
          content="casino bonus, welkomstbonus, free spins, no deposit bonus, casino promoties, beste casino bonus"
        />
        <link rel="canonical" href="https://gokkerz.nl/bonussen" />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Casino Bonussen 2025 | Beste Online Casino Bonussen Nederland"
        />
        <meta
          property="og:description"
          content="Vergelijk de beste online casino bonussen van Nederland. Actuele welkomstbonussen, free spins en promoties."
        />
        <meta property="og:url" content="https://gokkerz.nl/bonussen" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Casino Bonussen 2025 | Beste Online Casino Bonussen Nederland"
        />
        <meta
          name="twitter:description"
          content="Vind de beste casino bonussen. Actueel overzicht van welkomstbonussen en promoties."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: 'Casino Bonussen 2025 | Beste Online Casino Bonussen Nederland',
            description:
              'Compleet overzicht van de beste online casino bonussen in Nederland. Vergelijk welkomstbonussen, free spins en promoties.',
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
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': 'https://gokkerz.nl/bonussen',
            },
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="2025 Bonus Overzicht"
        title={
          <>
            Beste <span className="text-gokkerz-green">Casino Bonussen</span> Nederland
          </>
        }
        description="Ontdek de nieuwste en hoogste casino bonussen in Nederland. Profiteer van vele welkomstbonussen, free spins, no deposit bonussen en cashback promoties bij legale online casino’s met een Nederlandse vergunning."
        bullets={[
          { icon: <Gift className="h-4 w-4 text-gokkerz-green" />, text: 'Hoogste bonussen' },
          { icon: <Star className="h-4 w-4 text-gokkerz-green" />, text: 'Gratis spins zonder storting' },
          { icon: <Shield className="h-4 w-4 text-gokkerz-green" />, text: 'No deposit bonus' },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        {/* Bonus Type Selection */}
        <div className="mb-6">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
            <button
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-gokkerz-green to-green-600 p-4 text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${selectedType === 'all' ? 'ring-4 ring-gokkerz-green ring-offset-2' : ''}`}
              onClick={() => setSelectedType('all')}
            >
              <div className="relative z-10">
                <Gift className="mx-auto mb-2 h-6 w-6" />
                <h3 className="text-base font-semibold">Alle Bonussen</h3>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></div>
            </button>

            <button
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 p-4 text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${selectedType === 'welcome' ? 'ring-4 ring-blue-500 ring-offset-2' : ''}`}
              onClick={() => setSelectedType('welcome')}
            >
              <div className="relative z-10">
                <Gift className="mx-auto mb-2 h-6 w-6" />
                <h3 className="text-base font-semibold">Welkomst Bonussen</h3>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></div>
            </button>

            <button
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-purple-500 to-purple-700 p-4 text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${selectedType === 'nodeposit' ? 'ring-4 ring-purple-500 ring-offset-2' : ''}`}
              onClick={() => setSelectedType('nodeposit')}
            >
              <div className="relative z-10">
                <Gift className="mx-auto mb-2 h-6 w-6" />
                <h3 className="text-base font-semibold">No Deposit Bonussen</h3>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></div>
            </button>

            <button
              className={`group relative overflow-hidden rounded-lg bg-gradient-to-br from-orange-500 to-orange-700 p-4 text-white transition-transform hover:scale-[1.02] active:scale-[0.98] ${selectedType === 'freespins' ? 'ring-4 ring-orange-500 ring-offset-2' : ''}`}
              onClick={() => setSelectedType('freespins')}
            >
              <div className="relative z-10">
                <Gift className="mx-auto mb-2 h-6 w-6" />
                <h3 className="text-base font-semibold">Free Spins</h3>
              </div>
              <div className="absolute inset-0 bg-white opacity-0 transition-opacity group-hover:opacity-10"></div>
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mx-auto mb-8 max-w-2xl">
          <div className="relative">
            <Input
              type="search"
              placeholder="Zoek casino bonussen..."
              className="w-full rounded-xl border-gray-200 py-3 pl-12 pr-4 focus:border-gokkerz-green focus:ring-gokkerz-green/20"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 transform text-gray-400" />
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-8 text-center">
          <p className="text-gray-600">
            <span className="font-medium text-black">{filteredBonuses.length}</span> bonussen
            gevonden
          </p>
        </div>

        {/* Bonus Cards Grid */}
        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {filteredBonuses.map((offer) => (
            <Card
              key={offer.id}
              transparent
              className="casino-card-hover flex flex-col"
              style={{
                ['--brand-shadow-color' as any]: `${casinoBrandColors[offer.casinoName] || '#00CC66'}40`,
              }}
            >
              <CardHeader className="relative p-4 text-center">
                <div className="flex flex-col items-center">
                  <div className="relative mb-4">
                    <img
                      src={offer.casinoLogo}
                      alt={offer.casinoName}
                      className="h-24 w-auto rounded-[10%]"
                    />
                    <div className="absolute -bottom-2 left-1/2 flex -translate-x-1/2 transform items-center rounded-full bg-white/90 px-2 py-0.5 shadow-sm">
                      <Star className="mr-0.5 h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs font-medium">{offer.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="mb-3 text-lg">{offer.casinoName}</CardTitle>
                </div>
                <div className="space-y-2">
                  <CardDescription className="flex flex-col items-center">
                    <span className="mb-2 text-5xl font-bold text-black">{offer.bonusAmount}</span>
                    <span className="text-lg font-medium text-gray-500">
                      + {offer.freeSpins} Free Spins
                    </span>
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="flex-grow px-4 py-2 text-center">
                <ul className="space-y-2">
                  <li className="flex items-center justify-center text-sm">
                    <Check className="mr-2 h-4 w-4 flex-shrink-0 text-gokkerz-green" />
                    <span>{offer.requirements}</span>
                  </li>
                  <li className="flex items-center justify-center text-sm">
                    <Check className="mr-2 h-4 w-4 flex-shrink-0 text-gokkerz-green" />
                    <span>Nederlandse licentie</span>
                  </li>
                </ul>
              </CardContent>

              <CardFooter className="px-4 pb-4 pt-2">
                <div className="flex w-full flex-col gap-2">
                  <Button className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90">
                    Claim Bonus
                  </Button>
                  <Button variant="outline" className="w-full text-sm shadow-sm" asChild>
                    <Link
                      to={`/casinos/${offer.casinoName.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
                      className="flex w-full items-center justify-center"
                    >
                      Lees Review
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* No Results Message */}
        {filteredBonuses.length === 0 && (
          <div className="py-12 text-center">
            <div className="mb-4">
              <Search className="mx-auto h-12 w-12 text-gray-300" />
            </div>
            <h3 className="mb-2 text-lg font-medium text-gray-900">Geen bonussen gevonden</h3>
            <p className="text-gray-600">Probeer andere zoektermen of pas je filters aan</p>
          </div>
        )}

        {/* Rest of the content */}
        <div className="glassmorphism mb-8 p-6">
          <h2 className="mb-4 text-2xl font-bold">Over Casino Bonussen</h2>
          <p className="mb-4 text-gray-600">
            Casino bonussen zijn promoties die online casino's aanbieden om nieuwe spelers aan te
            trekken of bestaande spelers te belonen. Ze kunnen verschillende vormen aannemen, zoals
            een welkomstbonus, gratis spins of cashback.
          </p>
          <p className="mb-4 text-gray-600">
            Het is belangrijk om de voorwaarden van een casino bonus zorgvuldig te lezen voordat je
            deze claimt. Let vooral op de inzetvereisten, maximale inzet, geldigheidsduur en welke
            spellen bijdragen aan het vrijspelen van de bonus.
          </p>
          <p className="text-gray-600">
            Bij Gokkerz zorgen we ervoor dat we alleen bonussen aanbevelen van legale Nederlandse
            online casino's die een vergunning hebben van de Kansspelautoriteit (KSA).
          </p>
        </div>

        {/* Uitgebreide Informatie Sectie */}
        <div className="mx-auto max-w-7xl px-4 py-12">
          <Tabs defaultValue="algemeen" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4">
              <TabsTrigger value="algemeen">Algemene Info</TabsTrigger>
              <TabsTrigger value="soorten">Soorten Bonussen</TabsTrigger>
              <TabsTrigger value="voorwaarden">Voorwaarden</TabsTrigger>
              <TabsTrigger value="strategie">Bonus Strategie</TabsTrigger>
            </TabsList>

            <TabsContent value="algemeen" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Alles over Online Casino Bonussen</CardTitle>
                  <CardDescription>
                    Essentiële informatie over casino bonussen in Nederland
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h3 className="text-xl font-semibold">Wat zijn Online Casino Bonussen?</h3>
                  <p>
                    Online casino bonussen zijn promotionele aanbiedingen die casino's gebruiken om
                    nieuwe spelers aan te trekken en bestaande spelers te behouden. Deze bonussen
                    kunnen verschillende vormen aannemen, zoals gratis speelgeld, free spins of
                    cashback op verliezen.
                  </p>

                  <h3 className="mt-6 text-xl font-semibold">
                    Waarom Bieden Casino's Bonussen Aan?
                  </h3>
                  <p>
                    De online casino markt is zeer competitief, vooral in Nederland waar alleen
                    casino's met een KSA-vergunning mogen opereren. Bonussen zijn een manier voor
                    casino's om zich te onderscheiden van de concurrentie en spelers een extra reden
                    te geven om juist bij hen te spelen.
                  </p>

                  <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
                    <div className="rounded-lg bg-green-50 p-4">
                      <Shield className="mb-2 h-8 w-8 text-gokkerz-green" />
                      <h4 className="mb-2 font-semibold">Veiligheid Voorop</h4>
                      <p className="text-sm">
                        Alle bonussen zijn van legale casino's met KSA-vergunning
                      </p>
                    </div>
                    <div className="rounded-lg bg-blue-50 p-4">
                      <Gift className="mb-2 h-8 w-8 text-blue-500" />
                      <h4 className="mb-2 font-semibold">Actuele Aanbiedingen</h4>
                      <p className="text-sm">Dagelijks gecontroleerd en bijgewerkt</p>
                    </div>
                    <div className="rounded-lg bg-purple-50 p-4">
                      <Info className="mb-2 h-8 w-8 text-purple-500" />
                      <h4 className="mb-2 font-semibold">Transparante Voorwaarden</h4>
                      <p className="text-sm">Duidelijke uitleg van alle bonusvoorwaarden</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="soorten" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Verschillende Soorten Casino Bonussen</CardTitle>
                  <CardDescription>Ontdek welke bonus het beste bij jou past</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    <div className="rounded-xl border p-6">
                      <h3 className="mb-4 flex items-center text-xl font-semibold">
                        <Gift className="mr-2 h-6 w-6 text-gokkerz-green" />
                        Welkomstbonus
                      </h3>
                      <p className="mb-4">
                        Een bonus die je krijgt bij je eerste storting. Meestal een percentage van
                        je storting, bijvoorbeeld 100% tot €200.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Hoogste bonusbedragen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Vaak gecombineerd met free spins</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Eenmalig per casino</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border p-6">
                      <h3 className="mb-4 flex items-center text-xl font-semibold">
                        <Star className="mr-2 h-6 w-6 text-orange-500" />
                        Free Spins
                      </h3>
                      <p className="mb-4">
                        Gratis draairendes op specifieke slots. Perfect om nieuwe spellen te
                        ontdekken zonder risico.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Geen eigen inleg nodig</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Vaak op populaire slots</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Lagere inzetvereisten</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border p-6">
                      <h3 className="mb-4 flex items-center text-xl font-semibold">
                        <ArrowRight className="mr-2 h-6 w-6 text-purple-500" />
                        No Deposit Bonus
                      </h3>
                      <p className="mb-4">
                        Een bonus die je krijgt zonder storting. Ideaal om een casino gratis uit te
                        proberen.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Geen risico</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Direct speelbaar</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Meestal kleine bedragen</span>
                        </li>
                      </ul>
                    </div>

                    <div className="rounded-xl border p-6">
                      <h3 className="mb-4 flex items-center text-xl font-semibold">
                        <ArrowRight className="mr-2 h-6 w-6 text-blue-500" />
                        Reload Bonus
                      </h3>
                      <p className="mb-4">
                        Een bonus voor bestaande spelers bij een nieuwe storting. Vaak wekelijks of
                        maandelijks beschikbaar.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Regelmatig beschikbaar</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Voor vaste spelers</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Gunstige voorwaarden</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="voorwaarden" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bonusvoorwaarden Uitgelegd</CardTitle>
                  <CardDescription>
                    Begrijp waar je op moet letten bij casino bonussen
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Wat zijn inzetvereisten?</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          Inzetvereisten bepalen hoe vaak je het bonusbedrag moet inzetten voordat
                          je eventuele winsten kunt uitbetalen. Bijvoorbeeld:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                          <li>
                            Bij 20x inzetvereisten en een bonus van €100 moet je in totaal €2.000
                            inzetten
                          </li>
                          <li>
                            Verschillende spellen tellen vaak verschillend mee voor de
                            inzetvereisten
                          </li>
                          <li>Slots tellen meestal 100% mee, tafelspellen vaak minder</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger>Minimale storting en maximale inzet</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          Bij bonussen gelden vaak limieten voor stortingen en inzetten:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                          <li>Minimale storting is meestal tussen €10 en €20</li>
                          <li>Maximale inzet per spin/hand tijdens bonus vaak €5</li>
                          <li>Overschrijding kan leiden tot verval van de bonus</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger>Geldigheidsduur en deadlines</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">Tijd is belangrijk bij bonussen:</p>
                        <ul className="list-disc space-y-2 pl-6">
                          <li>Bonussen hebben meestal een beperkte geldigheid (vaak 30 dagen)</li>
                          <li>Free spins moeten vaak binnen 24 uur gebruikt worden</li>
                          <li>Inzetvereisten moeten binnen de geldigheidstermijn gehaald worden</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger>Toegestane spellen</AccordionTrigger>
                      <AccordionContent>
                        <p className="mb-4">
                          Niet alle spellen zijn toegestaan of tellen mee voor het vrijspelen:
                        </p>
                        <ul className="list-disc space-y-2 pl-6">
                          <li>Slots tellen meestal 100% mee</li>
                          <li>Tafelspellen vaak 10-50%</li>
                          <li>Sommige spellen zijn uitgesloten</li>
                          <li>Live casino spellen hebben soms aparte bonussen</li>
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="strategie" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Bonus Strategie & Tips</CardTitle>
                  <CardDescription>Maximaal profiteren van casino bonussen</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div className="rounded-xl bg-gradient-to-br from-gokkerz-green/10 to-transparent p-6">
                      <h3 className="mb-4 text-xl font-semibold">
                        Tips voor het Kiezen van een Bonus
                      </h3>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Kies een bonus die past bij je speelbudget</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Let op de inzetvereisten - lager is beter</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Controleer welke spellen meetellen voor vrijspelen</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                          <span>Bekijk de geldigheidsduur van de bonus</span>
                        </li>
                      </ul>
                    </div>

                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                      <div className="rounded-xl border p-6">
                        <h4 className="mb-3 font-semibold">DO's</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                            <span>Lees altijd de voorwaarden</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                            <span>Maak een planning voor het vrijspelen</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                            <span>Begin met kleine bedragen</span>
                          </li>
                          <li className="flex items-start">
                            <Check className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-gokkerz-green" />
                            <span>Houd je aan je budget</span>
                          </li>
                        </ul>
                      </div>

                      <div className="rounded-xl border p-6">
                        <h4 className="mb-3 font-semibold">DON'Ts</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>Neem niet meerdere bonussen tegelijk</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>Overschrijd nooit de maximale inzet</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>Speel niet met geleend geld</span>
                          </li>
                          <li className="flex items-start">
                            <Info className="mr-2 mt-0.5 h-5 w-5 flex-shrink-0 text-red-500" />
                            <span>Negeer geen waarschuwingssignalen</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Frequently Asked Questions */}
          <div className="mb-8 mt-12">
            <h2 className="mb-8 text-center text-3xl font-bold">
              Veelgestelde Vragen over Casino Bonussen
            </h2>
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="faq-1">
                  <AccordionTrigger>Zijn casino bonussen echt gratis?</AccordionTrigger>
                  <AccordionContent>
                    <p className="mb-2">
                      Casino bonussen zijn niet volledig 'gratis' vanwege de voorwaarden die eraan
                      verbonden zijn:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Er zijn meestal inzetvereisten die gehaald moeten worden</li>
                      <li>Sommige bonussen vereisen een eigen storting</li>
                      <li>Er kunnen maximale winst limieten zijn</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-2">
                  <AccordionTrigger>Kan ik meerdere welkomstbonussen claimen?</AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Je kunt bij elk legaal Nederlands casino één welkomstbonus claimen. Het is
                      niet toegestaan om:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Meerdere accounts bij hetzelfde casino te maken</li>
                      <li>Dezelfde welkomstbonus meerdere keren te claimen</li>
                      <li>Bonussen door te verkopen of te delen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-3">
                  <AccordionTrigger>
                    Wat gebeurt er als ik de voorwaarden niet haal?
                  </AccordionTrigger>
                  <AccordionContent>
                    <p>
                      Als je niet aan de bonusvoorwaarden voldoet, kan dit verschillende gevolgen
                      hebben:
                    </p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>De bonus en eventuele winsten kunnen vervallen</li>
                      <li>Je account kan geblokkeerd worden</li>
                      <li>Je kunt uitgesloten worden van toekomstige bonussen</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-4">
                  <AccordionTrigger>Hoe lang blijven bonussen geldig?</AccordionTrigger>
                  <AccordionContent>
                    <p>De geldigheidsduur verschilt per bonus en casino:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Welkomstbonussen: meestal 30 dagen</li>
                      <li>Free spins: vaak 24-48 uur</li>
                      <li>No deposit bonussen: 7-14 dagen</li>
                      <li>Reload bonussen: varieert per aanbieding</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="faq-5">
                  <AccordionTrigger>Kan ik winsten direct uitbetalen?</AccordionTrigger>
                  <AccordionContent>
                    <p>De uitbetaling van bonuswinsten is gebonden aan voorwaarden:</p>
                    <ul className="list-disc space-y-2 pl-6">
                      <li>Eerst moeten de inzetvereisten gehaald zijn</li>
                      <li>Er kan een maximale uitbetaling gelden</li>
                      <li>Verificatie van je account is vaak nodig</li>
                      <li>Uitbetaling gaat meestal via dezelfde methode als storting</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>

          {/* Verantwoord Spelen Sectie */}
          <div className="mt-12 rounded-xl bg-gradient-to-br from-gokkerz-green/10 to-transparent p-8">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Verantwoord Gebruik van Casino Bonussen</h2>
              <p className="mb-6 text-gray-600">
                Bij Gokkerz moedigen we verantwoord gokken aan. Bonussen kunnen leuk zijn, maar
                gebruik ze verstandig:
              </p>
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="p-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Shield className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <h3 className="mb-2 font-semibold">Stel Limieten</h3>
                  <p className="text-sm text-gray-600">Bepaal vooraf je budget en tijdslimiet</p>
                </div>
                <div className="p-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Info className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <h3 className="mb-2 font-semibold">Ken de Regels</h3>
                  <p className="text-sm text-gray-600">Lees altijd de voorwaarden goed door</p>
                </div>
                <div className="p-4">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                    <Users className="h-6 w-6 text-gokkerz-green" />
                  </div>
                  <h3 className="mb-2 font-semibold">Zoek Hulp</h3>
                  <p className="text-sm text-gray-600">Bij twijfel, neem contact op met support</p>
                </div>
              </div>
              <Button className="mt-6" variant="outline">
                <Link to="/verantwoord-gokken">Meer over Verantwoord Gokken</Link>
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

export default Bonussen;

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/KnopComponent';
import { Link } from 'react-router-dom';
import { Star, Check } from 'lucide-react';
import { casinoBrandColors } from '@/lib/casinoKleurenData';

interface BonusCardProps {
  offer: {
    id: number;
    casinoName: string;
    casinoLogo: string;
    bonusAmount: string;
    freeSpins: number;
    description: string;
    requirements: string;
    rating: number;
    exclusive?: boolean;
  };
}

export const BonusCard = ({ offer }: BonusCardProps) => {
  const getCasinoUrl = (casinoName: string) => {
    const urls: { [key: string]: string } = {
      'TOTO Casino': 'https://www.toto.nl',
      'BetCity': 'https://www.betcity.nl',
      'Holland Casino': 'https://www.hollandcasino.nl',
      'Kansino': 'https://www.kansino.nl',
      'Circus Casino': 'https://www.circus.nl',
      'Jack\'s Casino': 'https://www.jacks.nl',
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

  return (
    <Card
      key={offer.id}
      className="group flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl bg-white shadow-lg"
      style={{
        ['--brand-shadow-color' as any]: `${casinoBrandColors[offer.casinoName] || '#00CC66'}20`,
      }}
    >
      <CardHeader className="relative bg-gradient-to-b from-white to-gray-50/30 p-6 text-center">
        <div className="flex flex-col items-center">
          <div className="relative mb-6">
            <img
              src={offer.casinoLogo}
              alt={offer.casinoName}
              className="h-24 w-auto transition-transform duration-300 group-hover:scale-105 rounded-[20%] shadow-[inset_14px_24px_25px_-21px_rgba(209,217,230,0.34),inset_14px_28px_29px_-21px_rgba(209,217,230,0.4),inset_14px_35px_36px_-21px_rgba(209,217,230,0.48),inset_14px_54px_52px_-21px_rgba(209,217,230,0.67),inset_-36px_-63px_56px_-21px_rgba(255,255,255,0.75),inset_-36px_-36.8341px_33.671899999999994px_-21px_rgba(255,255,255,0.54),inset_-36px_-31.3638px_26.025999999999996px_-21px_rgba(255,255,255,0.45),inset_-36px_-28.4185px_25px_-21px_rgba(255,255,255,0.38)]"
            />
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 transform">
              <div className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 shadow-md">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs font-semibold">{offer.rating}</span>
              </div>
            </div>
          </div>
          <div className="space-y-1">
            <CardTitle className="text-lg">{offer.casinoName}</CardTitle>
          </div>
        </div>
        <div className="mt-4 space-y-1">
          <span className="text-3xl font-bold text-gray-900">{offer.bonusAmount}</span>
          <p className="text-sm font-medium text-gray-500">{offer.description}</p>
        </div>
      </CardHeader>

      <CardContent className="flex-grow px-6 py-4">
        <ul className="space-y-2">
          <li className="flex items-center text-sm">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gokkerz-green/10 transition-colors group-hover:bg-gokkerz-green/15">
              <Check className="h-4 w-4 text-gokkerz-green" />
            </div>
            <span className="text-gray-600">{offer.requirements}</span>
          </li>
          <li className="flex items-center text-sm">
            <div className="mr-3 flex h-8 w-8 items-center justify-center rounded-full bg-gokkerz-green/10 transition-colors group-hover:bg-gokkerz-green/15">
              <Check className="h-4 w-4 text-gokkerz-green" />
            </div>
            <span className="text-gray-600">Nederlandse licentie</span>
          </li>
        </ul>
      </CardContent>

      <CardFooter className="bg-gradient-to-t from-gray-50/50 to-white p-6 pt-4">
        <div className="flex w-full flex-col gap-2">
          <Button className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90" asChild>
            <a
              href={getCasinoUrl(offer.casinoName)}
              target="_blank"
              rel="noopener noreferrer"
            >
              Claim Bonus
            </a>
          </Button>
          <Button variant="outline" className="w-full" asChild>
            <Link
              to={`/casinos/${offer.casinoName.toLowerCase().replace(/[']/g, '').replace(/\s+/g, '-')}`}
              className="flex items-center justify-center text-sm"
            >
              Lees Review
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

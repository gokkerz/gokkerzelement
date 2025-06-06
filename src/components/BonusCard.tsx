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
      className="casino-card-hover flex flex-col"
      style={{
        ['--brand-shadow-color' as any]: `${casinoBrandColors[offer.casinoName] || '#00CC66'}40`,
      }}
    >
      <CardHeader className="p-4 text-center">
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
            <span className="text-lg font-medium text-gray-500">+ {offer.freeSpins} Free Spins</span>
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
          <Button 
            className="button-pulse w-full bg-green-gradient py-6 text-base font-semibold shadow-md hover:opacity-90"
            asChild
          >
            <a 
              href={getCasinoUrl(offer.casinoName)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center"
            >
              Claim Bonus
            </a>
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
  );
};

import React from "react";
import GameCard from "../components/GameCard";
import Layout from "@/components/layout/HoofdLayoutComponent";
import HeroHeader from '@/components/HeroHeader';
import { Helmet } from "react-helmet";
import { Gift, User, Shield } from 'lucide-react';

const games = [
	{
		title: "Blackjack",
		emoji: "🃏",
		playable: true,
		route: "/blackjack",
		thumbnail: "/placeholder.svg",
	},
	{
		title: "Roulette",
		emoji: "7️⃣",
		comingSoon: true,
		thumbnail: "/placeholder.svg",
	},
	{
		title: "Baccarat",
		emoji: "♠️",
		comingSoon: true,
		thumbnail: "/placeholder.svg",
	},
	{
		title: "Poker",
		emoji: "😎",
		comingSoon: true,
		thumbnail: "/placeholder.svg",
	},
];

const Games: React.FC = () => {
	return (
		<Layout>
			<Helmet>
				<title>Casino Games 2025 | Speel Blackjack & Meer | Gokkerz.nl</title>
				<meta name="description" content="Ontdek en speel de beste online casino games bij Gokkerz.nl. Speel nu Blackjack of bekijk welke spellen binnenkort beschikbaar zijn!" />
			</Helmet>
			<HeroHeader
				label="Gratis Casino Games"
				title={<>Online <span className="text-gokkerz-green">Casinospellen</span> Zonder Storting</>}
				description="Speel populaire tafelspellen zoals blackjack, roulette en poker, helemaal gratis en zonder storting. Speel 100% risicovrij en oefen je blackjack tactieken op onze klassieke online demo spellen. Wordt jij de nieuwe recordhouder?"
				bullets={[
					{ icon: <Gift className="h-4 w-4 text-gokkerz-green" />, text: 'Geen storting nodig' },
					{ icon: <User className="h-4 w-4 text-gokkerz-green" />, text: 'Speel gratis, zonder account' },
					{ icon: <Shield className="h-4 w-4 text-gokkerz-green" />, text: '100% veilig & mobiel' },
				]}
			/>
			<section className="container mx-auto px-3 sm:px-4 py-8 sm:py-12">
				<h2 className="sr-only">Overzicht van alle casino spellen</h2>
				<div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4 lg:gap-[1.85rem] place-items-center max-w-[1100px] mx-auto">
					{games.map((game) => (
						<GameCard key={game.title} {...game} />
					))}
				</div>
			</section>
		</Layout>
	);
};

export default Games;

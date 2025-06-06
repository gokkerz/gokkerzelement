import Link from 'next/link';

<div className="container mx-auto px-4 py-8">
  <h1 className="text-4xl font-bold text-center mb-8">Casino Bonus Guide</h1>
  
  <section className="mb-12">
    <h2 className="text-3xl font-bold mb-4">Soorten Casino Bonussen</h2>
    <p className="text-lg mb-8">
      Ontdek alle verschillende soorten casino bonussen en leer hoe je er maximaal van kunt profiteren
    </p>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">Welkomstbonus</h3>
        <p className="text-gray-700 mb-4">
          Een welkomstbonus is een aanbieding die nieuwe spelers ontvangen wanneer ze zich aanmelden bij een online casino. 
          Het kan een stortingsbonus, gratis spins of een combinatie van beide zijn.
        </p>
        <Link href="/welkomstbonus" className="text-blue-500 hover:underline">
          Lees meer over de welkomstbonus
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">No Deposit Bonus</h3>
        <p className="text-gray-700 mb-4">
          Een no deposit bonus is een type bonus waarbij spelers geen storting hoeven te doen om de bonus te ontvangen. 
          Dit soort bonussen zijn zeldzaam en worden vaak aangeboden als gratis speeltegoed of gratis spins.
        </p>
        <Link href="/no-deposit-bonus" className="text-blue-500 hover:underline">
          Lees meer over de no deposit bonus
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">Free Spins</h3>
        <p className="text-gray-700 mb-4">
          Free spins zijn gratis draaibeurten op gokkasten die door online casino's worden aangeboden. 
          Winsten behaald met free spins kunnen vaak worden withdrawn of gebruikt voor verdere inzet.
        </p>
        <Link href="/free-spins" className="text-blue-500 hover:underline">
          Lees meer over free spins
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">Reload Bonus</h3>
        <p className="text-gray-700 mb-4">
          Een reload bonus is een aanbieding voor bestaande spelers waarbij ze een bonus krijgen op hun volgende storting. 
          Het doel is om spelers aan te moedigen terug te keren naar het casino en verder te spelen.
        </p>
        <Link href="/reload-bonus" className="text-blue-500 hover:underline">
          Lees meer over de reload bonus
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">Cashback Bonus</h3>
        <p className="text-gray-700 mb-4">
          Een cashback bonus is een type bonus waarbij spelers een percentage van hun verliezen terugkrijgen als bonusgeld. 
          Dit biedt een zekere mate van bescherming tegen verliezen en moedigt spelers aan om door te spelen.
        </p>
        <Link href="/cashback-bonus" className="text-blue-500 hover:underline">
          Lees meer over de cashback bonus
        </Link>
      </div>

      <div className="bg-white rounded-lg p-6 hover-card-effect">
        <h3 className="text-xl font-semibold mb-4">VIP Bonus</h3>
        <p className="text-gray-700 mb-4">
          VIP bonussen zijn exclusieve aanbiedingen voor loyale spelers van een online casino. 
          Deze bonussen kunnen bestaan uit hogere limieten, persoonlijke accountmanagers, en speciale promoties.
        </p>
        <Link href="/vip-bonus" className="text-blue-500 hover:underline">
          Lees meer over de VIP bonus
        </Link>
      </div>
    </div>
  </section>
</div>
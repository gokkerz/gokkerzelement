import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import HeroHeader from '@/components/HeroHeader';
import { Shield, Info, AlertTriangle, Clock, BookOpen, Users, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/KnopComponent';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const VerantwoordGokken = () => {
  return (
    <Layout>
      <Helmet>
        <title>Verantwoord Gokken | Tips & Hulp bij Gokproblemen</title>
        <meta name="description" content="Leer hoe je veilig en verantwoord kunt gokken. Handige tips, tools en hulp bij gokproblemen. ✓ Preventie ✓ Hulpinstanties ✓ Direct contact" />
        <meta name="keywords" content="verantwoord gokken, veilig gokken, gokverslaving hulp, gokproblemen, cruks register, verslavingszorg" />
        <link rel="canonical" href="https://gokkerz.nl/verantwoord-gokken" />
      </Helmet>
      <HeroHeader
        label="Verantwoord Gokken"
        title={<><span className="text-gokkerz-green">Speel Veilig & Bewust</span></>}
        description="Alles over veilig, verantwoord en plezierig gokken. Herken risico’s, ontdek tips en vind direct hulp als het nodig is."
        bullets={[
          { icon: <Shield className="h-5 w-5 text-gokkerz-green" />, text: 'KSA-vergunning & veiligheid' },
          { icon: <HelpCircle className="h-5 w-5 text-gokkerz-green" />, text: 'Direct hulp bij problemen' },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          {/* Waarschuwingssignalen */}
          <Card className="p-6 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2">
                <AlertTriangle className="h-6 w-6 text-gokkerz-green" /> Herken de Signalen
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-base md:text-lg">
                <li className="flex items-center gap-3"><Clock className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Meer tijd of geld kwijt aan gokken</span></li>
                <li className="flex items-center gap-3"><Info className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Liegen over je gokgedrag</span></li>
                <li className="flex items-center gap-3"><AlertTriangle className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Onrustig bij stoppen</span></li>
                <li className="flex items-center gap-3"><Shield className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Gokken om verliezen terug te winnen</span></li>
                <li className="flex items-center gap-3"><Users className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Geld lenen voor gokken</span></li>
                <li className="flex items-center gap-3"><BookOpen className="h-6 w-6 text-gokkerz-green flex-shrink-0" /><span>Relaties of werk in gevaar brengen</span></li>
              </ul>
              <div className="mt-8 p-4 bg-green-50 border-l-4 border-gokkerz-green rounded-lg text-gokkerz-green text-center text-base md:text-lg font-semibold">
                Herken je deze signalen? Praat erover of zoek hulp. Je staat er niet alleen voor.
              </div>
            </CardContent>
          </Card>

          {/* Tips & Tools */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <Shield className="mb-3 h-8 w-8 text-gokkerz-green" />
              <span className="font-semibold mb-1 text-lg">Stel limieten in</span>
              <span className="text-sm text-gray-700">Bepaal vooraf je maximale tijd en geld. Zo houd je controle over je spelgedrag en voorkom je verrassingen.</span>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <Clock className="mb-3 h-8 w-8 text-gokkerz-green" />
              <span className="font-semibold mb-1 text-lg">Neem pauzes</span>
              <span className="text-sm text-gray-700">Stop op tijd en speel bewust. Regelmatige pauzes helpen je om met een frisse blik te blijven spelen.</span>
            </Card>
            <Card className="p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
              <BookOpen className="mb-3 h-8 w-8 text-gokkerz-green" />
              <span className="font-semibold mb-1 text-lg">Ken de regels</span>
              <span className="text-sm text-gray-700">Lees altijd de bonus- en spelvoorwaarden. Zo weet je waar je aan toe bent en kom je niet voor verrassingen te staan.</span>
            </Card>
          </div>

          {/* Hulp & Organisaties */}
          <Card className="p-6 md:p-10 shadow-md hover:shadow-xl transition-shadow duration-300 mt-2">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl font-bold text-black mb-1 flex items-center gap-2">
                <HelpCircle className="h-7 w-7 text-gokkerz-green" /> Hulp & Organisaties
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-2">
                {/* AGOG */}
                <div className="rounded-xl border border-gray-100 p-7 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-2">
                  <span className="font-extrabold text-2xl text-black mb-1">AGOG</span>
                  <span className="text-base text-gray-800 mb-2">De Anonieme Gokkers Omgeving Gokkers (AGOG) is een landelijke zelfhulpgroep voor mensen met gokproblemen én hun naasten. Je kunt er terecht voor lotgenotencontact, steun en praktische tips om grip te krijgen op je situatie.</span>
                  <div className="flex justify-center items-center gap-6 mt-2">
                    <a href="https://www.agog.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gokkerz-green font-semibold underline underline-offset-2">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                      agog.nl
                    </a>
                    <a href="tel:088-7024444" className="flex items-center gap-2 text-green-700 font-semibold">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 01-1.09 1A19.72 19.72 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75l1.13 4.52a1 1 0 01-.29 1L8.21 12.21a16 16 0 007.58 7.58l1.94-1.94a1 1 0 011-.29l4.52 1.13a1 1 0 01.75 1V21z" /></svg>
                      088-7024444
                    </a>
                  </div>
                </div>
                {/* Loket Kansspel */}
                <div className="rounded-xl border border-gray-100 p-7 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-2">
                  <span className="font-extrabold text-2xl text-black mb-1">Loket Kansspel</span>
                  <span className="text-base text-gray-800 mb-2">Het Loket Kansspel is het centrale meldpunt voor vragen en problemen rond kansspelen. Je kunt hier terecht voor advies, doorverwijzing en directe hulp, zowel voor jezelf als voor familie of vrienden.</span>
                  <div className="flex justify-center items-center gap-6 mt-2">
                    <a href="https://www.loketkansspel.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gokkerz-green font-semibold underline underline-offset-2">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                      loketkansspel.nl
                    </a>
                    <a href="tel:0900-1995" className="flex items-center gap-2 text-green-700 font-semibold">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 01-1.09 1A19.72 19.72 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75l1.13 4.52a1 1 0 01-.29 1L8.21 12.21a16 16 0 007.58 7.58l1.94-1.94a1 1 0 011-.29l4.52 1.13a1 1 0 01.75 1V21z" /></svg>
                      0900-1995
                    </a>
                  </div>
                </div>
                {/* Jellinek */}
                <div className="rounded-xl border border-gray-100 p-7 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-2">
                  <span className="font-extrabold text-2xl text-black mb-1">Jellinek</span>
                  <span className="text-base text-gray-800 mb-2">Jellinek is een toonaangevende instelling voor verslavingszorg. Je kunt er terecht voor professionele hulp, advies en behandeling bij gokverslaving, zowel online als op locatie.</span>
                  <div className="flex justify-center items-center gap-6 mt-2">
                    <a href="https://www.jellinek.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gokkerz-green font-semibold underline underline-offset-2">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                      jellinek.nl
                    </a>
                    <a href="tel:088-5051220" className="flex items-center gap-2 text-green-700 font-semibold">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 01-1.09 1A19.72 19.72 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75l1.13 4.52a1 1 0 01-.29 1L8.21 12.21a16 16 0 007.58 7.58l1.94-1.94a1 1 0 011-.29l4.52 1.13a1 1 0 01.75 1V21z" /></svg>
                      088-5051220
                    </a>
                  </div>
                </div>
                {/* Trimbos-instituut */}
                <div className="rounded-xl border border-gray-100 p-7 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col gap-2">
                  <span className="font-extrabold text-2xl text-black mb-1">Trimbos-instituut</span>
                  <span className="text-base text-gray-800 mb-2">Het Trimbos-instituut is hét kenniscentrum voor mentale gezondheid en verslaving. Hier vind je betrouwbare informatie, preventietips en kun je terecht voor advies en doorverwijzing naar passende hulp.</span>
                  <div className="flex justify-center items-center gap-6 mt-2">
                    <a href="https://www.trimbos.nl" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gokkerz-green font-semibold underline underline-offset-2">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" /></svg>
                      trimbos.nl
                    </a>
                    <a href="tel:0900-1995" className="flex items-center gap-2 text-green-700 font-semibold">
                      <svg className="h-5 w-5 text-black" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M22 16.92V21a1 1 0 01-1.09 1A19.72 19.72 0 013 5.09 1 1 0 014 4h4.09a1 1 0 011 .75l1.13 4.52a1 1 0 01-.29 1L8.21 12.21a16 16 0 007.58 7.58l1.94-1.94a1 1 0 011-.29l4.52 1.13a1 1 0 01.75 1V21z" /></svg>
                      0900-1995
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Slot & Call to Action */}
          <Card className="p-8 md:p-12 text-center bg-green-50 border-0 shadow-md hover:shadow-xl transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-2 justify-center">
                <Shield className="h-6 w-6 text-gokkerz-green" /> Gokken moet leuk blijven!
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-lg md:text-xl max-w-2xl mx-auto">
                Gokken is bedoeld als ontspanning. Merk je dat het geen plezier meer geeft? Neem een pauze of zoek hulp. Je staat er nooit alleen voor.
              </p>
              <Button asChild className="bg-gokkerz-green text-white text-lg px-8 py-4 rounded-xl shadow-md hover:opacity-90">
                <a href="https://www.loketkansspel.nl" target="_blank" rel="noopener noreferrer">
                  Direct Hulp Zoeken
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      <Analytics />
      <SpeedInsights />
    </Layout>
  );
};

export default VerantwoordGokken;

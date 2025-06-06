import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Cookiebeleid = () => {
  return (
    <Layout>
      <Helmet>
        <title>Cookiebeleid | Gokkerz.nl - Cookie Gebruik & Instellingen</title>
        <meta name="description" content="Lees ons cookiebeleid om te begrijpen hoe wij cookies gebruiken om je ervaring te verbeteren. ✓ Transparant ✓ Gebruiksvriendelijk ✓ Controle over je privacy" />
        <meta name="keywords" content="cookie policy, cookiebeleid, cookie instellingen, privacy cookies, website cookies" />
        <link rel="canonical" href="https://gokkerz.nl/cookiebeleid" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Cookiebeleid | Gokkerz.nl - Cookie Gebruik & Instellingen" />
        <meta property="og:description" content="Lees ons cookiebeleid om te begrijpen hoe wij cookies gebruiken om je ervaring te verbeteren." />
        <meta property="og:url" content="https://gokkerz.nl/cookiebeleid" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Cookiebeleid | Gokkerz.nl" />
        <meta name="twitter:description" content="Ontdek hoe wij cookies gebruiken op onze website." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookiebeleid Gokkerz.nl",
            "description": "Ons cookiebeleid legt uit hoe wij cookies gebruiken om je gebruikerservaring te verbeteren.",
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
              "@id": "https://gokkerz.nl/cookiebeleid"
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gokkerz-green">Cookiebeleid</h1>
        <div className="prose prose-green max-w-none text-gray-800">
          <p>Gokkerz.nl gebruikt cookies om je de best mogelijke gebruikerservaring te bieden. In dit cookiebeleid leggen we uit wat cookies zijn, welke cookies we gebruiken en waarom.</p>
          <h2>Wat zijn cookies?</h2>
          <p>Cookies zijn kleine tekstbestanden die op je computer, tablet of telefoon worden geplaatst wanneer je onze website bezoekt. Deze bestanden bevatten informatie die gebruikt wordt om je ervaring te verbeteren.</p>
          <h2>Welke cookies gebruiken wij?</h2>
          <h3>Noodzakelijke cookies</h3>
          <p>Deze cookies zijn essentieel voor het functioneren van de website. Ze onthouden bijvoorbeeld je cookie-voorkeuren.</p>
          <h3>Analytische cookies</h3>
          <p>Met deze cookies kunnen wij het gebruik van onze website analyseren en verbeteren. We gebruiken hiervoor Google Analytics.</p>
          <h3>Functionele cookies</h3>
          <p>Deze cookies onthouden je voorkeuren, zoals taalinstellingen en eerder bekeken content.</p>
          <h2>Cookie-instellingen aanpassen</h2>
          <p>Je kunt je cookie-instellingen altijd aanpassen via je browser. Let op: het uitschakelen van cookies kan de functionaliteit van onze website beperken.</p>
          <h2>Contact</h2>
          <p>Heb je vragen over ons cookiebeleid? Neem dan contact met ons op via het <a href="/contact">contactformulier</a>.</p>
          <p>Laatst bijgewerkt: 30 april 2025</p>
        </div>
      </div>
      {/* Vercel Analytics */}
      <Analytics />
      {/* Vercel Speed Insights */}
      <SpeedInsights />
    </Layout>
  );
};

export default Cookiebeleid;

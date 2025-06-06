import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const AlgemeneVoorwaarden = () => {
  return (
    <Layout>
      <Helmet>
        <title>Algemene Voorwaarden | Gokkerz.nl - Gebruiksvoorwaarden</title>
        <meta name="description" content="Lees onze algemene voorwaarden voor informatie over het gebruik van Gokkerz.nl. ✓ Duidelijke voorwaarden ✓ Transparant ✓ Eerlijk gebruik" />
        <meta name="keywords" content="algemene voorwaarden, terms of service, gebruiksvoorwaarden, voorwaarden gokkerz" />
        <link rel="canonical" href="https://gokkerz.nl/algemenevoorwaarden" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Algemene Voorwaarden | Gokkerz.nl - Gebruiksvoorwaarden" />
        <meta property="og:description" content="Lees onze algemene voorwaarden voor informatie over het gebruik van Gokkerz.nl" />
        <meta property="og:url" content="https://gokkerz.nl/algemenevoorwaarden" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Algemene Voorwaarden | Gokkerz.nl" />
        <meta name="twitter:description" content="Onze algemene voorwaarden voor gebruik van Gokkerz.nl" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Algemene Voorwaarden Gokkerz.nl",
            "description": "Onze algemene voorwaarden beschrijven de regels en voorwaarden voor het gebruik van onze website en diensten.",
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
              "@id": "https://gokkerz.nl/algemenevoorwaarden"
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gokkerz-green">Algemene Voorwaarden</h1>
        <div className="prose prose-green max-w-none text-gray-800">
          <p>Door gebruik te maken van Gokkerz.nl ga je akkoord met deze algemene voorwaarden. Lees deze zorgvuldig door voordat je onze website gebruikt.</p>
          <h2>1. Algemeen</h2>
          <p>Deze voorwaarden zijn van toepassing op alle diensten van Gokkerz.nl. We behouden ons het recht voor om deze voorwaarden te wijzigen.</p>
          <h2>2. Dienstverlening</h2>
          <ul>
            <li>Gokkerz.nl biedt informatie over online casino's en bonussen.</li>
            <li>Wij streven naar actuele en accurate informatie, maar kunnen niet garanderen dat alle informatie altijd 100% correct is.</li>
            <li>Je bent zelf verantwoordelijk voor je keuzes en handelingen op basis van onze informatie.</li>
          </ul>
          <h2>3. Verantwoord Gokken</h2>
          <p>Wij promoten verantwoord gokken. Je moet 18 jaar of ouder zijn om gebruik te maken van online casino's. Gok nooit met geld dat je niet kunt missen.</p>
          <h2>4. Intellectueel Eigendom</h2>
          <p>Alle content op Gokkerz.nl is ons eigendom of dat van onze partners. Het is niet toegestaan om content zonder toestemming te kopiëren of te verspreiden.</p>
          <h2>5. Aansprakelijkheid</h2>
          <p>Gokkerz.nl is niet aansprakelijk voor eventuele verliezen of schade die voortvloeit uit het gebruik van onze website of de gepresenteerde informatie.</p>
          <h2>6. Privacy en Cookies</h2>
          <p>We respecteren je privacy. Lees ons <a href="/privacybeleid">privacybeleid</a> en <a href="/cookiebeleid">cookiebeleid</a> voor meer informatie.</p>
          <h2>7. Contact</h2>
          <p>Heb je vragen over deze voorwaarden? Neem dan contact met ons op via het <a href="/contact">contactformulier</a>.</p>
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

export default AlgemeneVoorwaarden;

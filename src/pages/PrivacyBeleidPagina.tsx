import React from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Privacybeleid = () => {
  return (
    <Layout>
      <Helmet>
        <title>Privacybeleid | Gokkerz.nl - Privacy & Gegevensbescherming</title>
        <meta name="description" content="Lees ons privacybeleid om te begrijpen hoe wij jouw gegevens verzamelen, gebruiken en beschermen. ✓ GDPR Compliant ✓ Veilig & Transparant" />
        <meta name="keywords" content="privacy policy, privacybeleid, gegevensbescherming, gdpr, avg, privacy gokkerz" />
        <link rel="canonical" href="https://gokkerz.nl/privacybeleid" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Privacybeleid | Gokkerz.nl - Privacy & Gegevensbescherming" />
        <meta property="og:description" content="Lees ons privacybeleid om te begrijpen hoe wij jouw gegevens verzamelen, gebruiken en beschermen." />
        <meta property="og:url" content="https://gokkerz.nl/privacybeleid" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Privacybeleid | Gokkerz.nl" />
        <meta name="twitter:description" content="Lees ons privacybeleid en hoe wij jouw gegevens beschermen." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Privacybeleid Gokkerz.nl",
            "description": "Ons privacybeleid legt uit hoe wij omgaan met persoonsgegevens en hoe we deze beschermen.",
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
              "@id": "https://gokkerz.nl/privacybeleid"
            }
          })}
        </script>
      </Helmet>
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold mb-6 text-gokkerz-green">Privacybeleid</h1>
        <div className="prose prose-green max-w-none text-gray-800">
          <p>Bij Gokkerz.nl hechten wij veel waarde aan de privacy van onze bezoekers. In dit privacybeleid lees je welke persoonsgegevens wij verzamelen, waarom wij dat doen en hoe wij deze gegevens beschermen. Wij handelen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).</p>
          <h2>Welke gegevens verzamelen wij?</h2>
          <ul>
            <li>Contactgegevens die je zelf invult, zoals naam en e-mailadres bij het invullen van een contactformulier.</li>
            <li>Gegevens over jouw gebruik van onze website, zoals IP-adres, browser, bezochte pagina’s en klikgedrag.</li>
            <li>Cookies (zie ons cookiebeleid).</li>
          </ul>
          <h2>Waarvoor gebruiken wij deze gegevens?</h2>
          <ul>
            <li>Om onze website te verbeteren en gebruiksvriendelijker te maken.</li>
            <li>Om contact met je op te nemen als je een vraag stelt.</li>
            <li>Voor het anoniem analyseren van bezoekersgedrag.</li>
          </ul>
          <h2>Met wie delen wij jouw gegevens?</h2>
          <p>Wij delen jouw gegevens niet met derden, tenzij dit wettelijk verplicht is of noodzakelijk voor het functioneren van de website (zoals analytics-diensten).</p>
          <h2>Jouw rechten</h2>
          <p>Je hebt het recht om je persoonsgegevens in te zien, te corrigeren of te laten verwijderen. Neem hiervoor contact met ons op via het <a href="/contact">contactformulier</a>.</p>
          <h2>Beveiliging</h2>
          <p>Wij nemen passende technische en organisatorische maatregelen om jouw gegevens te beschermen tegen verlies of onrechtmatig gebruik.</p>
          <h2>Wijzigingen</h2>
          <p>Dit privacybeleid kan worden gewijzigd. Raadpleeg deze pagina regelmatig voor de meest actuele versie.</p>
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

export default Privacybeleid;

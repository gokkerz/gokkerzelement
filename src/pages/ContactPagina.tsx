import React, { useState } from 'react';
import Layout from '@/components/layout/HoofdLayoutComponent';
import HeroHeader from '@/components/HeroHeader';
import { Button } from '@/components/ui/KnopComponent';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/gebruikToastHook';
import { Mail, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';

const Contact = () => {
  const { toast } = useToast();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Bericht verzonden",
        description: "Bedankt voor je bericht. We nemen zo snel mogelijk contact met je op.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <Layout>
      <Helmet>
        <title>Contact | Gokkerz.nl - Neem Contact Op</title>
        <meta name="description" content="Heb je vragen of opmerkingen? Neem contact op met ons team van casino experts. We helpen je graag met al je vragen over online casino's in Nederland." />
        <meta name="keywords" content="contact gokkerz, casino vragen, klantenservice, hulp casino, casino support" />
        <link rel="canonical" href="https://gokkerz.nl/contact" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Contact | Gokkerz.nl - Neem Contact Op" />
        <meta property="og:description" content="Neem contact op met ons team van casino experts. We helpen je graag verder." />
        <meta property="og:url" content="https://gokkerz.nl/contact" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Contact | Gokkerz.nl - Neem Contact Op" />
        <meta name="twitter:description" content="Neem contact op met ons team van casino experts." />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact Gokkerz.nl",
            "description": "Neem contact op met het Gokkerz team voor vragen over online casino's",
            "publisher": {
              "@type": "Organization",
              "name": "Gokkerz.nl",
              "logo": {
                "@type": "ImageObject",
                "url": "https://gokkerz.nl/assets/Gokkerz.nl.svg"
              }
            },
            "url": "https://gokkerz.nl/contact"
          })}
        </script>
      </Helmet>
      <HeroHeader
        label="Contact met Gokkerz.nl"
        title={<><span className="bg-gradient-to-r from-gokkerz-green to-green-600 bg-clip-text text-transparent">Neem Contact</span> Op</>}
        description="Heb je vragen, feedback of wil je samenwerken? Neem eenvoudig contact op met het Gokkerz-team. Wij staan klaar voor al je casino-gerelateerde vragen."
        bullets={[
          { icon: <Mail className="h-5 w-5 text-gokkerz-green" />, text: 'Direct contact via info@gokkerz.nl' },
          { icon: <MessageSquare className="h-5 w-5 text-gokkerz-green" />, text: 'Reactie binnen 24 uur' },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col gap-8 mb-12">
            {/* Contact Form */}
            <div className="w-full">
              <div className="glassmorphism p-8">
                <h2 className="text-2xl font-bold mb-6">Stuur ons een bericht</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Naam</Label>
                      <Input 
                        id="name" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Jouw naam" 
                        required 
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">E-mailadres</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jouw@email.nl" 
                        required 
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Onderwerp</Label>
                    <Input 
                      id="subject" 
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="Onderwerp van je bericht" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Bericht</Label>
                    <Textarea 
                      id="message" 
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Typ hier je bericht..." 
                      rows={6} 
                      required 
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-green-gradient hover:opacity-90 button-pulse"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Verzenden...' : 'Verzenden'}
                  </Button>
                </form>
              </div>
            </div>
          </div>
          
          {/* FAQ Section */}
          <div className="glassmorphism p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Veelgestelde vragen</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-lg mb-2">Hoe selecteren jullie casino's voor review?</h3>
                <p className="text-gray-700">
                  We reviewen uitsluitend online casino's met een geldige Nederlandse KSA-vergunning. Onze experts beoordelen elk casino grondig op meer dan 50 criteria.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Hoe blijven jullie reviews actueel?</h3>
                <p className="text-gray-700">
                  Ons expert team controleert en update alle reviews regelmatig. Significante veranderingen in bonussen, spelaanbod of voorwaarden worden direct verwerkt.
                </p>
              </div>
              
              <div>
                <h3 className="font-bold text-lg mb-2">Hoe kan ik samenwerken met Gokkerz?</h3>
                <p className="text-gray-700">
                  We staan open voor verschillende samenwerkingen. Stuur ons een e-mail met je voorstel naar <a href="mailto:info@gokkerz.nl" className="text-gokkerz-green hover:underline">info@gokkerz.nl</a> en we nemen zo snel mogelijk contact met je op.
                </p>
              </div>
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

export default Contact;

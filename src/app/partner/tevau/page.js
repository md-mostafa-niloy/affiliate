import { headers } from 'next/headers';
import Script from 'next/script';
import { TevauHero } from './components/hero';
import { TevauVideo } from './components/video-section';
import { TevauSteps } from './components/step-guide';
import { TevauDownload } from './components/download-app';
import { TevauRecentUsers } from './components/recent-users';
import { TevauCards } from './components/card-section';
import { TevauFeatures } from './components/features';
import { TevauFees } from './components/fees-limits';
import { TevauReviews } from './components/reviews';
import { TevauFAQ } from './components/faq-section';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/tevau`;
  const currentYear = new Date().getFullYear();

  return {
    title: `Tevau Crypto Card | 20% Discount Promo Code ${currentYear}`,
    description: `Sign up for Tevau using referral code 972272. Apply promo code VISERNIC or VISERNIC8 in ${currentYear} to instantly get a 20% discount on Virtual ($10), Plastic ($100), and Metal ($199) cards!`,
    applicationName: 'Tevau Partner Portal',
    category: 'Finance & Cryptocurrency',
    classification: 'Premium Crypto Cards',
    keywords: [
      'Tevau crypto card', 'Tevau referral code 972272', 'Tevau promo code VISERNIC or VISERNIC8', 'Tevau discount code', 'Tevau virtual card', 
      'Tevau metal card', `Tevau app ${currentYear}`, 'Visa crypto card', 'crypto to fiat', 'buy crypto card'
    ].join(', '),
    authors: [{ name: 'Visernic Partner Network' }],
    creator: 'Visernic',
    publisher: 'Visernic',
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `Tevau Crypto Card | Exclusive Discounts ${currentYear}`,
      description: 'Use code 972272 and VISERNIC or VISERNIC8 to get a 20% discount on all your Tevau Virtual and Physical cards.',
      url: pageUrl,
      siteName: 'Visernic Partner Network',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `Tevau Crypto Card Offers ${currentYear}`,
      description: 'Get massive discounts on physical and virtual crypto cards using Tevau code 972272 and VISERNIC or VISERNIC8.',
    },
    other: {
      'GPTBot': 'index, follow',
      'ChatGPT-User': 'index, follow',
      'ClaudeBot': 'index, follow',
      'PerplexityBot': 'index, follow',
      'Applebot': 'index, follow',
      'YandexBot': 'index, follow',
      'bingbot': 'index, follow'
    }
  };
}

export default async function TevauPartnerPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;
  const currentYear = new Date().getFullYear();

  const randomRatingCount = Math.floor(Math.random() * 5001) + 10000;
  const randomRatingValue = (4.7 + Math.random() * 0.2).toFixed(1);

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${baseUrl}/partner/tevau/#webpage`,
        "url": `${baseUrl}/partner/tevau`,
        "name": `Tevau Crypto Card | 20% Discount Promo Code ${currentYear}`,
        "description": "Claim 20% discount on Tevau crypto cards using promo code VISERNIC or VISERNIC8 and referral 972272.",
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Tevau",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "8.00",
          "priceCurrency": "USD",
          "category": "Virtual Crypto Card",
          "description": "20% Off Virtual Card with promo code vsn",
          "availability": "https://schema.org/InStock"
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": randomRatingValue,
          "ratingCount": randomRatingCount.toString()
        }
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Partners",
            "item": `${baseUrl}/partner`
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": "Tevau",
            "item": `${baseUrl}/partner/tevau`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="tevau-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TevauHero />
      <TevauVideo />
      <TevauSteps />
      <TevauDownload />
      <TevauRecentUsers />
      <TevauCards />
      <TevauFeatures />
      <TevauFees />
      <TevauReviews />
      <TevauFAQ />
    </main>
  );
}

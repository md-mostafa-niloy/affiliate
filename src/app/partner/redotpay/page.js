import { headers } from 'next/headers';
import Script from 'next/script';
import { RedotpayHero } from './components/hero';
import { RedotpayVideo } from './components/video-section';
import { RedotpaySteps } from './components/step-guide';
import { RedotpayRecentUsers } from './components/recent-users';
import { RedotpayFeatures } from './components/features';
import { RedotpayCards } from './components/card-section';
import { RedotpayFees } from './components/fees-limits';
import { RedotpayReviews } from './components/reviews';
import { RedotpayFAQ } from './components/faq';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/redotpay`;
  const currentYear = new Date().getFullYear();

  return {
    title: `Redotpay Promo Code ${currentYear} | Get $10 Bonus & 20% Discount`,
    description: `Claim your exclusive Redotpay promo code (kzfx8) in ${currentYear}. Get a $10 USDT signup bonus, 20% discount on virtual/physical crypto cards, and zero annual fees.`,
    applicationName: 'Redotpay Partner Portal',
    category: 'Finance & Cryptocurrency',
    classification: 'Promo Codes & Discounts',
    keywords: [
      'Redotpay', 'Redotpay promo code', `Redotpay promo code ${currentYear}`, 'Redotpay referral code', 'Redotpay bonus', 
      'Redotpay virtual card', 'Redotpay physical card', 'Redotpay discount', 'RTC50', 'RTC100', 'kzfx8', 
      'crypto card', 'Redotpay app', 'buy crypto card', 'Redotpay sign up bonus', 'Redotpay KYC', 'crypto payment',
      'redotpay invitation code', 'redotpay legit', 'redotpay physical card free', 'free crypto card'
    ].join(', '),
    authors: [{ name: 'Visernic Partner Network' }],
    creator: 'Visernic',
    publisher: 'Visernic',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      title: `Redotpay Promo Code ${currentYear} | Get $10 Bonus & 20% Discount`,
      description: `Use code kzfx8 to claim your $10 bonus and get 20% off your Redotpay card in ${currentYear}. Join the ultimate crypto spending experience.`,
      url: pageUrl,
      siteName: 'Visernic',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${domain}/partner/assets/redotpay-og.png`,
          width: 1200,
          height: 630,
          alt: 'Redotpay Crypto Card Bonus',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Redotpay Promo Code ${currentYear} | $10 Bonus`,
      description: 'Get 20% OFF and a $10 bonus on your Redotpay crypto card using our exclusive partner code.',
      creator: '@visernic',
      images: [`${domain}/partner/assets/redotpay-og.png`],
    },
    other: {
      'GPTBot': 'index, follow',
      'ChatGPT-User': 'index, follow',
      'OAI-SearchBot': 'index, follow',
      'ClaudeBot': 'index, follow',
      'Claude-Web': 'index, follow',
      'PerplexityBot': 'index, follow',
      'Applebot': 'index, follow',
      'Applebot-Extended': 'index, follow',
      'YandexBot': 'index, follow',
      'Baiduspider': 'index, follow',
      'Slurp': 'index, follow',
      'DuckDuckBot': 'index, follow',
      'FacebookBot': 'index, follow',
      'Meta-ExternalAgent': 'index, follow',
      'Amazonbot': 'index, follow',
      'Bytespider': 'index, follow',
      'CCBot': 'index, follow',
      'Google-Extended': 'index, follow',
      'bingbot': 'index, follow'
    }
  };
}

export default async function RedotpayPartnerPage() {
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
        "@id": `${baseUrl}/partner/redotpay/#webpage`,
        "url": `${baseUrl}/partner/redotpay`,
        "name": `Redotpay Promo Code ${currentYear} | Get $10 Bonus & 20% Discount`,
        "description": "Claim your exclusive Redotpay promo code (kzfx8) for a $10 USDT signup bonus and 20% discount on crypto cards.",
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Redotpay",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "8.00",
          "priceCurrency": "USD",
          "category": "Virtual Crypto Card",
          "description": "20% Discount with promo code RTC50",
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
            "name": "Redotpay",
            "item": `${baseUrl}/partner/redotpay`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="redotpay-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RedotpayHero />
      <RedotpayVideo />
      <RedotpaySteps />
      <RedotpayRecentUsers />
      <RedotpayCards />
      <RedotpayFeatures />
      <RedotpayFees />
      <RedotpayReviews />
      <RedotpayFAQ />
    </main>
  );
}

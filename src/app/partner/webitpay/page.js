import { headers } from 'next/headers';
import Script from 'next/script';
import { WebitpayHero } from './components/hero';
import { WebitpayVideo } from './components/video-section';
import { WebitpayCards } from './components/card-section';
import { WebitpayFeatures } from './components/features';
import { WebitpaySteps } from './components/step-guide';
import { WebitpayDownload } from './components/download-app';
import { WebitpayFees } from './components/fees-limits';
import { WebitpayReviews } from './components/reviews';
import { WebitpayRecentUsers } from './components/recent-users';
import { WebitpayFAQ } from './components/faq-section';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/webitpay`;
  const currentYear = new Date().getFullYear();

  return {
    title: `Webitpay Promo Code ${currentYear} | Free Virtual Card & $5 Bonus`,
    description: `Claim your verified Webitpay promo code (vsnbd) in ${currentYear}. Get a FREE Virtual Card, a $5 auto coupon, and 20% off Physical cards with code vsn.`,
    applicationName: 'Webitpay Partner Portal',
    category: 'Finance & Cryptocurrency',
    classification: 'Promo Codes & Free Cards',
    keywords: [
      'Webitpay', 'Webitpay promo code', `Webitpay promo code ${currentYear}`, 'Webitpay referral code', 'Webitpay free virtual card', 
      'vsnbd', 'vsn', 'Webitpay physical card discount', 'crypto card free', 'Webitpay app download'
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
      title: `Webitpay Promo Code ${currentYear} | Free Virtual Card & $5 Bonus`,
      description: `Use code vsnbd to claim your free virtual card and $5 bonus in ${currentYear}. Spend your crypto instantly.`,
      url: pageUrl,
      siteName: 'Visernic',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${domain}/partner/assets/webitpay-og.png`,
          width: 1200,
          height: 630,
          alt: 'Webitpay Crypto Card Free Bonus',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Webitpay Promo Code ${currentYear} | Free Virtual Card`,
      description: 'Get a FREE Webitpay virtual card and a $5 coupon using our exclusive partner code.',
      creator: '@visernic',
      images: [`${domain}/partner/assets/webitpay-og.png`],
    },
    other: {
      'GPTBot': 'index, follow',
      'ChatGPT-User': 'index, follow',
      'OAI-SearchBot': 'index, follow',
      'ClaudeBot': 'index, follow',
      'PerplexityBot': 'index, follow',
      'Applebot': 'index, follow',
      'YandexBot': 'index, follow',
      'Baiduspider': 'index, follow',
      'DuckDuckBot': 'index, follow',
      'bingbot': 'index, follow'
    }
  };
}

export default async function WebitpayPartnerPage() {
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
        "@id": `${baseUrl}/partner/webitpay/#webpage`,
        "url": `${baseUrl}/partner/webitpay`,
        "name": `Webitpay Promo Code ${currentYear} | Free Virtual Card & $5 Bonus`,
        "description": "Claim your verified Webitpay promo code (vsnbd) for a free virtual crypto card and $5 bonus.",
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Webitpay",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD",
          "category": "Virtual Crypto Card",
          "description": "Free with referral code vsnbd",
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
            "name": "Webitpay",
            "item": `${baseUrl}/partner/webitpay`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="webitpay-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <WebitpayHero />
      <WebitpayVideo />
      <WebitpaySteps />
      <WebitpayDownload />
      <WebitpayRecentUsers />
      <WebitpayCards />
      <WebitpayFeatures />
      <WebitpayFees />
      <WebitpayReviews />
      <WebitpayFAQ />
    </main>
  );
}
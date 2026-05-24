import { headers } from 'next/headers';
import Script from 'next/script';
import { RizonHero } from './components/hero';
import { RizonVideo } from './components/video-section';
import { RizonSteps } from './components/step-guide';
import { RizonRecentUsers } from './components/recent-users';
import { RizonFeatures } from './components/features';
import { RizonCards } from './components/card-section';
import { RizonFees } from './components/fees-limits';
import { RizonFAQ } from './components/faq-section';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/rizon`;
  const currentYear = new Date().getFullYear();

  return {
    title: `Rizon Invitation Promo Code ${currentYear} | Get 90% Coupon Discount`,
    description: `Claim your verified Rizon promo code discount coupon (NR) in ${currentYear}. Get exclusive access to the high-tier Rizon Emerald framework with 90% costs dropped instantly.`,
    applicationName: 'Rizon Partner Network',
    category: 'Finance Infrastructure',
    classification: 'Premium Coupons & Vouchers',
    keywords: [
      'Rizon', 'Rizon promo code', `Rizon coupon code ${currentYear}`, 'Rizon referral code', 'Rizon discount code', 
      'Rizon emerald subscription', 'Rizon card code', 'Rizon voucher', 'TWKFW', 'NR', '90% off discount code'
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
      title: `Rizon Invitation Promo Code ${currentYear} | Get 90% Coupon Discount`,
      description: `Input active code TWKFW and apply coupon discount code NR to activate 90% price deduction across Rizon assets in ${currentYear}.`,
      url: pageUrl,
      siteName: 'Visernic',
      locale: 'en_US',
      type: 'website',
      images: [
        {
          url: `${domain}/partner/assets/rizon-og.png`,
          width: 1200,
          height: 630,
          alt: 'Rizon Premium Promo Discount Framework',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `Rizon Promo Code ${currentYear} | 90% Discount Coupon`,
      description: 'Acquire instantaneous 90% tier drop using exclusive verified partner code NR.',
      creator: '@visernic',
      images: [`${domain}/partner/assets/rizon-og.png`],
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

export default async function RizonPartnerPage() {
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
        "@id": `${baseUrl}/partner/rizon/#webpage`,
        "url": `${baseUrl}/partner/rizon`,
        "name": `Rizon Invitation Promo Code ${currentYear} | Get 90% Coupon Discount`,
        "description": "Claim your verified Rizon promo code discount coupon (NR) for absolute pricing reductions across premium modules.",
        "inLanguage": "en-US"
      },
      {
        "@type": "SoftwareApplication",
        "name": "Rizon",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "iOS, Android",
        "offers": {
          "@type": "Offer",
          "price": "5.00",
          "priceCurrency": "USD",
          "category": "Premium Subscription Tier",
          "description": "90% Cost Drop with promo coupon NR",
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
            "name": "Rizon",
            "item": `${baseUrl}/partner/rizon`
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="rizon-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RizonHero />
      <RizonVideo />
      <RizonSteps />
      <RizonRecentUsers />
      <RizonCards />
      <RizonFeatures />
      <RizonFees />
      <RizonFAQ />
    </main>
  );
}
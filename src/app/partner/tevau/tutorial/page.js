import { headers } from 'next/headers';
import Script from 'next/script';
import { TutorialHeader } from './components/tutorial-header';
import { TutorialSteps } from './components/tutorial-steps';
import { TutorialFAQ } from './components/tutorial-faq';
import { TutorialSupport } from './components/tutorial-support';
import { TevauVideo } from '../components/video-section';
import { TevauDownload } from '../components/download-app';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/tevau/tutorial`;
  const currentYear = new Date().getFullYear();

  return {
    title: `How to Setup Tevau Account | Complete Tutorial ${currentYear}`,
    description: `Step-by-step visual guide on how to register, verify KYC, and apply promo codes (972272 & VISERNIC) on the Tevau app to get massive discounts.`,
    applicationName: 'Tevau Partner Portal',
    category: 'Finance Guides',
    classification: 'Tutorial & Setup Guide',
    keywords: [
      'Tevau tutorial', 'how to setup Tevau', 'Tevau KYC verification', 'how to use Tevau promo code', 
      'Tevau step by step guide', `Tevau app setup ${currentYear}`, 'apply VISERNIC code', 'Tevau referral setup'
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
        'max-snippet': -1,
        'max-image-preview': 'large',
      },
    },
    openGraph: {
      title: `Complete Tevau Setup Guide & Tutorial ${currentYear}`,
      description: 'Follow this 12-step guide to properly set up your Tevau crypto card account and claim your 20% discount.',
      url: pageUrl,
      siteName: 'Visernic Partner Network',
      locale: 'en_US',
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: `How to Setup Tevau Account ${currentYear}`,
      description: 'Visual step-by-step guide to register and claim discounts on Tevau.',
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

export default async function TevauTutorialPage() {
  const headersList = await headers();
  const host = headersList.get('host') || 'localhost:3000';
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const baseUrl = `${protocol}://${host}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "HowTo",
        "name": "How to Setup a Tevau Account and Claim Discounts",
        "description": "A comprehensive 12-step visual guide on registering, verifying, and claiming card discounts on the Tevau application.",
        "step": [
          {
            "@type": "HowToStep",
            "name": "Download App",
            "text": "Download and install the Tevau application from your respective app store."
          },
          {
            "@type": "HowToStep",
            "name": "Enter Referral Code",
            "text": "Enter the mandatory code 972272 during registration to link to the discount program."
          },
          {
            "@type": "HowToStep",
            "name": "Complete KYC",
            "text": "Upload valid ID and selfie to verify your identity."
          },
          {
            "@type": "HowToStep",
            "name": "Apply Promo Code",
            "text": "Use the promo code VISERNIC at checkout to get a 20% discount on your card."
          }
        ]
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Why is my promo code 'VISERNIC' saying invalid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "The promo codes only work if your account is strictly bound to our partner network. You MUST enter the referral code 972272 during your initial account registration."
            }
          },
          {
            "@type": "Question",
            "name": "How long does the KYC verification process take?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Verification is usually completed within 5 to 10 minutes if your documents and lighting are clear."
            }
          },
          {
            "@type": "Question",
            "name": "Can I apply the discount after I have already paid?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No. The discount coupon must be applied at the checkout screen BEFORE you confirm the payment."
            }
          }
        ]
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="tevau-tutorial-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TutorialHeader />
      <TutorialSteps />
      <TevauVideo />
      <TutorialFAQ />
      <TevauDownload />
      <TutorialSupport />
    </main>
  );
}
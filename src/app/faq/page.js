import { headers } from 'next/headers';
import { FAQClient } from './components/faq-client';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/faq`;

  return {
    title: 'Frequently Asked Questions | Visernic Limited Affiliate Program',
    description: 'Find answers to common questions about Visernic Limited services, our affiliate commission structure, payouts, and how to scale your digital business with us.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Visernic Limited - Support & FAQ',
      description: 'Get instant answers about our digital solutions and affiliate partnership.',
      url: pageUrl,
      siteName: 'Visernic Limited',
      images: [
        {
          url: `${domain}/og-faq.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Visernic FAQ | Help Center',
      description: 'Everything you need to know about partnering with Visernic Limited.',
      images: [`${domain}/og-faq.jpg`],
    },
  };
}

export default function FAQPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What services does Visernic Limited provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Visernic Limited is a premier digital solutions provider specializing in custom web and mobile app development, UI/UX design, and strategic digital marketing services."
        }
      },
      {
        "@type": "Question",
        "name": "How does the Visernic Affiliate Program work?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our affiliate program allows you to earn high commissions by referring clients to our digital services. You get a unique tracking link and access to a real-time analytics dashboard."
        }
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FAQClient />
    </main>
  );
}
import { headers } from 'next/headers';
import { PartnersDirectory } from '../components/partners-directory';
import { WhyPartner } from './components/why-partner';
import { PartnerCTA } from './components/partner-cta';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner`;

  return {
    title: 'Partner With Us | Visernic Limited Affiliate Program',
    description: 'Join the Visernic Limited premium partner network. Earn industry-leading commissions, get exclusive resources, and scale your business securely.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Visernic Affiliate & Partner Network',
      description: 'High commission rates, real-time analytics, and dedicated support for our global partners.',
      url: pageUrl,
      siteName: 'Visernic Limited',
      images: [
        {
          url: `${domain}/og-partner.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Visernic Partner Program',
      description: 'Scale your revenue with the best digital solutions affiliate network.',
      images: [`${domain}/og-partner.jpg`],
    },
  };
}

export default function PartnerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Visernic Partnership Program",
    "description": "Information about the affiliate and partnership programs at Visernic Limited, including commission structures and benefits.",
    "publisher": {
      "@type": "Organization",
      "name": "Visernic Limited"
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PartnersDirectory />
      <WhyPartner />
      <PartnerCTA />
    </main>
  );
}
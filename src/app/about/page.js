import { headers } from 'next/headers';
import { AboutHero } from './components/about-hero';
import { AboutMission } from './components/about-mission';
import { AboutStats } from './components/about-stats';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/about`;

  return {
    title: 'About Visernic Limited | Leading Digital Solutions Provider',
    description: 'Learn about Visernic Limited, our mission to drive digital innovation through custom software development, UI/UX design, and global business solutions.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Visernic Limited - Empowering Digital Future',
      description: 'Discover the story behind Visernic Limited and our commitment to excellence in digital services.',
      url: pageUrl,
      siteName: 'Visernic Limited',
      images: [
        {
          url: `${domain}/og-about.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'About Visernic Limited',
      description: 'Our journey of building high-fidelity digital products.',
      images: [`${domain}/og-about.jpg`],
    },
  };
}

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Visernic Limited",
    "url": "https://visernic.com",
    "logo": "https://visernic.com/logo.svg",
    "description": "A digital solutions provider offering custom web & mobile app development, UI/UX design, and digital marketing services.",
    "founder": {
      "@type": "Person",
      "name": "Founder & CEO"
    },
    "address": [
      {
        "@type": "PostalAddress",
        "addressLocality": "Southampton",
        "addressCountry": "United Kingdom"
      },
      {
        "@type": "PostalAddress",
        "addressLocality": "Nazipur",
        "addressCountry": "Bangladesh"
      }
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <AboutStats />
      <AboutMission />
    </main>
  );
}
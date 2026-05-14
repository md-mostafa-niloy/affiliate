import { headers } from 'next/headers';
import { ContactForm } from '../components/contact-form';
import { GlobalOffices } from './components/global-offices';
import { ContactCTA } from './components/contact-cta';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/contact`;

  return {
    title: 'Contact Us | Visernic Limited Support & Global Offices',
    description: 'Get in touch with Visernic Limited. Contact our global headquarters in the UK or our development center in Bangladesh for digital solutions and support.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Contact Visernic Limited',
      description: 'Reach out for custom software development, partnership proposals, or technical support.',
      url: pageUrl,
      siteName: 'Visernic Limited',
      images: [
        {
          url: `${domain}/og-contact.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Contact Visernic Support',
      description: 'We are here to help you build your next digital product.',
      images: [`${domain}/og-contact.jpg`],
    },
  };
}

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Visernic Limited",
    "description": "Contact information, global office locations, and support form for Visernic Limited.",
    "mainEntity": {
      "@type": "Organization",
      "name": "Visernic Limited",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+44-20-1234-5678",
          "contactType": "customer service",
          "areaServed": "GB",
          "availableLanguage": "English"
        },
        {
          "@type": "ContactPoint",
          "telephone": "+880-1700-000000",
          "contactType": "technical support",
          "areaServed": "BD",
          "availableLanguage": ["English", "Bengali"]
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactForm />
      <GlobalOffices />
      <ContactCTA />
    </main>
  );
}
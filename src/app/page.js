import { headers } from 'next/headers';
import { Hero } from './components/hero';
import { VideoSection } from './components/video-section';
import { FeaturesSection } from './components/features-section';
import { PartnersDirectory } from './components/partners-directory';
import { ContactForm } from './components/contact-form';
import { Testimonials } from './components/testimonials';
import { PricingPlans } from './components/pricing-plans';
import { FAQSection } from './components/faq-section';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}`;

  return {
    title: 'Visernic Limited | Custom Web, Mobile App & Digital Marketing',
    description: 'Visernic Limited is a leading digital solutions provider offering custom web & mobile app development, UI/UX design, and result-driven digital marketing services.',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Visernic Limited - Premium Digital Solutions',
      description: 'Empowering businesses with custom software development, high-fidelity UI/UX design, and affiliate scaling solutions.',
      url: pageUrl,
      siteName: 'Visernic Limited',
      images: [
        {
          url: `${domain}/og-home.jpg`,
          width: 1200,
          height: 630,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'Visernic Limited | Digital Excellence',
      description: 'Custom Web, Mobile App Development, and Digital Marketing.',
      images: [`${domain}/og-home.jpg`],
    },
  };
}

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Visernic Limited",
    "url": "https://visernic.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://visernic.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <VideoSection />
      <FeaturesSection />
      <PartnersDirectory />
      <PricingPlans />
      <Testimonials />
      <FAQSection />
      <ContactForm />
    </main>
  );
}
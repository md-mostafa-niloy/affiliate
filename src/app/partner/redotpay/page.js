import { headers } from 'next/headers';
import { RedotpayHero } from './components/hero';
import { RedotpayVideo } from './components/video-section';
import { RedotpaySteps } from './components/step-guide';
import { RedotpayFeatures } from './components/features';
import { RedotpayCards } from './components/card-section';
import { RedotpayFees } from './components/fees-limits';
import { RedotpayReviews } from './components/reviews';

export async function generateMetadata() {
  const headersList = await headers();
  const host = headersList.get('host');
  const protocol = process.env.NODE_ENV === 'development' ? 'http' : 'https';
  const domain = `${protocol}://${host}`;
  const pageUrl = `${domain}/partner/redotpay`;

  return {
    title: 'Get Your Redotpay Crypto Card | $10 Bonus & 20% Discount',
    description: 'Sign up for a Redotpay account. Use referral code kzfx8 for a $5 bonus and get 20% off your Virtual or Physical card with our promo codes!',
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: 'Redotpay Crypto Card | Exclusive Discounts',
      description: 'Use code kzfx8 to claim your $10 bonus and get 20% off your Redotpay card.',
      url: pageUrl,
      siteName: 'Visernic Partner Network',
      type: 'website',
    },
  };
}

export default function RedotpayPartnerPage() {
  return (
    <main className="min-h-screen bg-background">
      <RedotpayHero />
      <RedotpayVideo />
      <RedotpaySteps />
      <RedotpayCards />
      <RedotpayFeatures />
      <RedotpayFees />
      <RedotpayReviews />
    </main>
  );
}
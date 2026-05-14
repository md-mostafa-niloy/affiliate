/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 1. Shudhu /webitpay te gele Rizon er home page asbe
      {
        source: '/webitpay',
        destination: 'https://webitpay.vercel.app/',
      },
      // 2. /webitpay/ er vitorer shobkichu (CSS, JS, Images, onnanno page) load hobe
      {
        source: '/webitpay/:path*',
        destination: 'https://webitpay.vercel.app/:path*',
      },
    ];
  },
};

export default nextConfig;

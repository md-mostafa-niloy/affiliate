/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        // Jodi keu affiliate.visernic.com/webitpay te jay
        source: '/webitpay',
        destination: 'https://webitpay.vercel.app/webitpay',
      },
      {
        // Jodi keu webitpay er vitorer kono page e jay (e.g. /webitpay/about)
        source: '/webitpay/:path*',
        destination: 'https://webitpay.vercel.app/webitpay/:path*',
      },
    ];
  },
};

export default nextConfig;

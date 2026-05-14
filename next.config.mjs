/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/webitpay',
        destination: 'https://webitpay.vercel.app/webitpay',
      },
      {
        source: '/webitpay/:path*',
        destination: 'https://webitpay.vercel.app/webitpay/:path*',
      },
    ];
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/webitpay',
        destination: 'https://webitpay.vercel.app/webitpay',
      },
      {
        // Ekhane * er bodole + deya hoyeche jate CSS theek vabe load hoy
        source: '/webitpay/:path+',
        destination: 'https://webitpay.vercel.app/webitpay/:path+',
      },
    ];
  },
};

export default nextConfig;

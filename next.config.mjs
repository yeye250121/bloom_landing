/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.namu.wiki',
      },
      {
        protocol: 'https',
        hostname: 'www.kpscctv.co.kr',
      },
      {
        protocol: 'https',
        hostname: 'cdn.ajd.kr',
      },
    ],
  },
};

export default nextConfig;

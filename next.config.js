/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ["localhost", "https://img.clerk.com", "img.clerk.com"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        pathname: '**'
      },
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
        pathname: '**'
      },
    ]
  },
};

module.exports = nextConfig;
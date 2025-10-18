import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['images.unsplash.com', 'newssiteimages.timesmed.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'newssiteimages.timesmed.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

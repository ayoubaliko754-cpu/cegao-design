import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'www.ytcegao.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'taur4gphx.hb-bkt.clouddn.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone',
  // Uncomment when using Contentlayer
  // experimental: {
  //   serverComponentsExternalPackages: ['contentlayer'],
  // },
};

export default nextConfig;

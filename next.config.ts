import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/moonple',
  assetPrefix: '/moonple',
  images: {
    unoptimized: true,
  },
  devIndicators: false,
};

export default nextConfig;

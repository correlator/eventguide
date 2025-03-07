import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/eventguide' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/eventguide/' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

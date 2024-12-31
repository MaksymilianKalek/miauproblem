import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/miauproblem/' : '',
  basePath: isProd ? '/miauproblem' : '',
  output: 'export',
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;

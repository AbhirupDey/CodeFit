import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'img.clerk.com',
      'i.pinimg.com',
      'encrypted-tbn0.gstatic.com'
    ],
  },
};

export default nextConfig;

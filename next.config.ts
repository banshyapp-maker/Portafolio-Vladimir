import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    // UI screenshots need q>75 or text turns to mush
    qualities: [75, 95],
  },
};

export default nextConfig;

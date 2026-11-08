import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // 90 is for the hero portrait, the focal point of the page.
    qualities: [75, 90],
  },
};

export default nextConfig;

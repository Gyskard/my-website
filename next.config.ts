import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bemefwpbgjmfyt0s.public.blob.vercel-storage.com"
      },
    ],
  },
};

export default nextConfig;

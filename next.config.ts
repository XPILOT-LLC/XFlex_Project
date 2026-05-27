import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  outputFileTracingRoot: path.join(__dirname),
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cms.xflex.ae",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "www.figma.com",
        pathname: "/api/mcp/asset/**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    if (isServer && config.output) {
      config.output.chunkFilename = "chunks/[id].js";
    }

    return config;
  },
};

export default nextConfig;

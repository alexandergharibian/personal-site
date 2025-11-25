import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Empty basePath for GitHub Pages user/organization site (alexandergharibian.github.io)
  basePath: "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

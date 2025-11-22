import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // If using a custom domain, set basePath to "" or remove this line
  // For GitHub Pages with repo name, use: basePath: "/personal-site"
  basePath: process.env.NODE_ENV === "production" ? "/personal-site" : "",
  images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;

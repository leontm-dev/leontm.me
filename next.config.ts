import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typedRoutes: true,
  experimental: {
    typedEnv: true,
    optimisticClientCache: true,
    optimizeCss: true,
    optimizeServerReact: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "services.find-a.app",
        port: "",
        pathname: "/api/assets/icon/**",
      },
    ],
  },
  compress: true,
  logging: {
    fetches: { fullUrl: true, hmrRefreshes: false },
    incomingRequests: true,
  },
  output: "standalone",
  reactCompiler: true,
  turbopack: {
    rules: {
      "*.svg": {
        loaders: ["@svgr/webpack"],
        as: "*.js",
      },
    },
    root: "./",
  },
};

export default nextConfig;

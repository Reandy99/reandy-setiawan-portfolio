import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
      {
        protocol: "https",
        hostname: "whitepaper.my.id",
      },
      {
        protocol: "https",
        hostname: "www.jiaphotography.site",
      },
      {
        protocol: "https",
        hostname: "image.thum.io",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/projects",
        destination: "/work",
        permanent: true,
      },
      {
        source: "/projects/:slug",
        destination: "/work/:slug",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/#contact",
        permanent: false,
      },
      {
        source: "/id",
        destination: "/",
        permanent: false,
      },
      {
        source: "/id/:path*",
        destination: "/:path*",
        permanent: false,
      },
      {
        source: "/en",
        destination: "/",
        permanent: false,
      },
      {
        source: "/en/:path*",
        destination: "/:path*",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;

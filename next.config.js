/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["infura-ipfs.io", "cyclone-nft-marketplace.infura-ipfs.io"],
  },

  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/:path*",
  //       destination: "http://localhost:8080/:path*",
  //     },
  //   ];
  // },
};

module.exports = nextConfig;

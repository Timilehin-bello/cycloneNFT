/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: ["infura-ipfs.io", "cyclone-nft-marketplace.infura-ipfs.io"],
  },
};

module.exports = nextConfig;

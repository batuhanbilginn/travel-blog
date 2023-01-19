/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ["images.unsplash.com", "r2v6abm8.directus.app"],
  },
};

module.exports = nextConfig;

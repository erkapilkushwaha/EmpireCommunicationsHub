/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    allowedDevOrigins: [
      "*.replit.dev",
      "*.pike.replit.dev",
      "693a4034-4aac-4902-ade2-4168ae30e57b-00-wek2nf0qok06.pike.replit.dev",
      "localhost:3000",
      "localhost:19304",
    ],
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    // Add your API URL here
    apiUrl: process.env.API_URL || "http://localhost:3000",
  },
};

module.exports = nextConfig;

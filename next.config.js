/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "img.freepik.com",
      },
    ],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;

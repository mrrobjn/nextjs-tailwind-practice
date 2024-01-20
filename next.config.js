/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: process.env.BASE_URL },
          { key: "Access-Control-Allow-Methods", value: "GET,POST,PUT,DELETE" },
        ],
      },
    ];
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    MONGODB_URL: process.env.MONGODB_URL,
  },
};

module.exports = nextConfig;

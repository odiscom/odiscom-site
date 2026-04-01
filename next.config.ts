/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ["10.0.0.42"],
};

module.exports = nextConfig;

module.exports = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "odiscom.com",
          },
        ],
        destination: "https://www.odiscom.com/:path*",
        permanent: true,
      },
    ];
  },
};
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  typescript: { ignoreBuildErrors: true },
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products-csr",
        permanent: true,
      },
    ];
  },
  env: {
    DB_HOST: "http://localhost:4000",
  },
};

module.exports = nextConfig;

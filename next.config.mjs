/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      // Browsers still request /favicon.ico by default; we only ship /tab.jpg in metadata.
      { source: "/favicon.ico", destination: "/tab.jpg" },
    ];
  },
};

export default nextConfig;

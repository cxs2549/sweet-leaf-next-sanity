/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  images: {
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920, 2048, 3840],
  },
}

module.exports = nextConfig

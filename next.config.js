/** @type {import('next').NextConfig} */
// const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    GOOGLE_CLIENT_ID: '517175235469-bvohfp6e8oruftjtfoiblipr59o2luc2.apps.googleusercontent.com',
  },
}

module.exports = nextConfig

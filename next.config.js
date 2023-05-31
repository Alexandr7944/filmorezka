/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  }
}

module.exports = withVideos(nextConfig)

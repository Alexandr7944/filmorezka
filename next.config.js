/** @type {import('next').NextConfig} */
// const withVideos = require('next-videos')
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    GOOGLE_CLIENT_ID: '517175235469-bvohfp6e8oruftjtfoiblipr59o2luc2.apps.googleusercontent.com',
    VK_AUTH_URL: 'https://oauth.vk.com/authorize?client_id=51666090&display=popup&redirect_uri=http://localhost:5010/auth/vkontakte/login&display=popup&response_type=code&revoke=1&scope=phone_number,email'
  },
  async rewrites() {
    return [
      {
        source: '/:lang(en|ru)/:path*',
        destination: '/:path*',
        locale: false,
      },
      {
        source: '/:lang(en|ru)',
        destination: '/',
        locale: false,
      },
    ];
  },
  i18n
}

module.exports = nextConfig
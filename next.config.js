const { truncateSync } = require('fs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: truncateSync
  },
  reactStrictMode: true,
}

module.exports = nextConfig

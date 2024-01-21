const { withContentlayer } = require('next-contentlayer');

/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  reactStrictMode: true, 
  swcMinify: true 
};

module.exports = withContentlayer(nextConfig);
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['res.cloudinary.com']
      },
      experimental: {
        serverActions: true
      }
}

module.exports = nextConfig

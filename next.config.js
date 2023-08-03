/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: ['res.cloudinary.com']
      },
    experimental: {
      appDir: true,
    }
}

module.exports = nextConfig

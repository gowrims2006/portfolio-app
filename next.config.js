/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ← ITHU VENAM
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
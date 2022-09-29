/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
    images: {
      domains: [
        'media0.giphy.com',
        'giphy.com','media.giphy.com', 
        'media1.giphy.com', 
        'media3.giphy.com'
      ],
    },
    nextConfig
};

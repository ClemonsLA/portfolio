/** @type {import('next').NextConfig} */
const nextConfig = {}


module.exports = nextConfig

module.exports = {
    async redirects() {
        return [
          {
            source: '/',
            destination: '/home',
            permanent: true,
          }]},
    images: {
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    
    domains: ['res.cloudinary.com'],
    },
};



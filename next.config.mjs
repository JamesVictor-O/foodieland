/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'www.themealdb.com',
            port: '',
            pathname:'/images/media/meals/**',
          },
        ],
      },
};

export default nextConfig;


// const nextConfig = {
//     images: {
//       domains: ['www.themealdb.com'], // Add the hostname here
//     },
//   };
  
//   module.exports = nextConfig;
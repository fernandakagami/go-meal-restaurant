const nextConfig = {
  async redirects() {
    return [      
      {
        source: '/',
        destination: '/Home',
        permanent: true,
      }      
    ]
  },
  images: { domains: ['127.0.0.1'], },
};

export default nextConfig;
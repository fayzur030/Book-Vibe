import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  //covers.openlibrary.org/b/isbn/9780743273565-M.jpg
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
        port: '',
        pathname: '**',
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co.com',
      },
      {
        protocol: 'https',
        hostname: 'covers.openlibrary.org',
      },
    ],
  },
}

export default nextConfig

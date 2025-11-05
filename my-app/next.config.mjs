/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dotcomkings.com',
        port: '',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'nexusgroup.org',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'dukhotfc1pmre.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.godigitify.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'techlearns.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dfwelectricianhvac.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bmnmsbiymz.ufs.sh',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bhanzu.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.sarvam.ai',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'jarapp.in',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cdn-ileeadl.nitrocdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.solulab.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'eqk4booyvjq.exactdn.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'floridapolitics.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;

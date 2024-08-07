const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: 'markdown-loader',
    });
    return config;
  },
  productionBrowserSourceMaps: true,
  sassOptions: {
    prependData: `
      @use 'styles/vars' as *;
      @use 'styles/breakpoints' as bp;
      @use 'styles/typography' as type;
      @use 'styles/colours' as col;
      @use 'styles/utilities' as util;
      @use 'styles/animations' as animate;
    `,
  },
  images: {
    remotePatterns: [
      {
        // Sanity
        protocol: 'https',
        hostname: 'cdn.sanity.io',
        port: '',
        pathname: '/**',
      },
      {
        // AWS S3
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex',
          },
        ],
      },
    ];
  }
};

// Wrapping the configuration with Bundle Analyzer
module.exports = withBundleAnalyzer(nextConfig);

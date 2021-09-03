/* eslint-disable global-require */


const { withPlugins, optional } = require('next-compose-plugins');
const { PHASE_PRODUCTION_BUILD, PHASE_DEVELOPMENT_SERVER } = require('next/constants');

const DEFAULT_LOCALE = 'en';

const nextConfig = {
  trailingSlash: true,
  sassOptions: {
    prependData: `
    @import "src/styles/mixins/index.scss"; 
    @import "src/styles/variables/index.scss";`,
  },
  webpack: (config) => {
    config.module.rules.unshift({
      test: /\.svg$/,
      use: [
        '@svgr/webpack',
        {
          loader: 'url-loader',
          options: {
            publicPath: '/_next/static/images',
            outputPath: 'static/images/',
            name: '[name]-[hash].[ext]',
            limit: 8192,
            fallback: require.resolve('file-loader'),
          },
        },
      ],
    });
    return config;
  },
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: `/${DEFAULT_LOCALE}/news`,
          has: [
            {
              type: 'query',
              key: 'lang',
              value: 'en',
            },
          ],
        },
      ]
    }
  }
};

module.exports = withPlugins(
  [
    [
      optional(() => require('next-optimized-images')),
      {
        optimizeImages: false,
        handleImages: ['jpeg', 'png', 'webp', 'gif'],
      },
      [PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD],
    ],
    process.env.ANALYZE === 'true'
      ? [
          optional(() =>
            require('@next/bundle-analyzer')({
              enabled: true,
            }),
          ),
          [PHASE_PRODUCTION_BUILD],
        ]
      : null,
  ].filter(Boolean),
  nextConfig,
);

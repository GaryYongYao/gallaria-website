/* eslint-disable */
const withImages = require('next-images')
const path = require('path')

module.exports = withImages({
  future: {
    webpack5: false,
  },
  reactStrictMode: false,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  /* exportPathMap: async (defaultPathMap) => {
    return {
      '/': { page: '/' }
    }
  }, */
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Note: we provide webpack above so you should not `require` it
    // Perform customizations to webpack config
    config.resolve = {
      ...config.resolve,
      alias: {
        ...config.resolve.alias,
        ...{
          'components': path.resolve(__dirname, 'components/'),
          'sections': path.resolve(__dirname, 'sections/*'),
          'styles': path.resolve(__dirname, 'styles/*'),
          'utils': path.resolve(__dirname, 'utils/*')
        },
      },
      modules: [path.resolve(__dirname, './'), 'node_modules']
    }
    config.module.rules.push({
      test: /\.pdf$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[path][name].[ext]"
        }
      }
    })

    // Important: return the modified config
    return config
  }
})
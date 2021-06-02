/* eslint-disable */
const withImages = require('next-images')
const sitemap = require('nextjs-sitemap-generator')
const path = require('path')

module.exports = withImages({
  generateBuildId: async () => 'my-build-id',
  future: {
    webpack5: true,
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

    sitemap({
      baseUrl: 'https://www.gallaria.com.au',
      pagesDirectory: __dirname + "/pages",
      targetDirectory: 'public/',
      nextConfigPath: __dirname + "/next.config.js",
      ignoreIndexFiles: true,
      ignoredPaths: ["[id]", "[code]"]
    })
    
    // Important: return the modified config
    return config
  }
})

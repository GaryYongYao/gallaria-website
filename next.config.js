/* eslint-disable */
const withImages = require('next-images')
const sitemap = require('nextjs-sitemap-generator')
const path = require('path')
const axios = require('axios')

function request(gql = null, params) {
  const promise = new Promise((resolve, reject) => {
    const perms = {
      url: process.env.NEXT_PUBLIC_SITE_API,
      method: 'post',
      responseType: 'json',
      data: {
        query: gql,
        variables: params
      }
    }

    axios(perms)
      .then(successHandler(resolve, reject))
      .catch(errorHandler(resolve, reject))
  })
  return promise
}

function successHandler(resolve) {
  return (response) => {
    resolve(response)
  }
}

function errorHandler(resolve, reject) {
  return (error) => {
    reject(error.response.data)
  }
}

sitemap({
  baseUrl: 'https://www.gallaria.com.au',
  pagesDirectory: __dirname + "/pages",
  targetDirectory: 'public/',
  nextConfigPath: __dirname + "/next.config.js",
  ignoreIndexFiles: true
})

module.exports = withImages({
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
    // Important: return the modified config
    return config
  }
})

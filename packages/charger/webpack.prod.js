const UglifyJsWebpackPluginBeta = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const config = {
  plugins: [
    new UglifyJsWebpackPluginBeta({
      sourceMap: true
    }),
    new CompressionWebpackPlugin({ // https://github.com/webpack-contrib/compression-webpack-plugin#usage
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|html|css)$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ]
}

module.exports = config

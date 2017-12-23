const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
const UglifyJsWebpackPluginBeta = require('uglifyjs-webpack-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')

const extractTextStyleLoader = {
  test: /\.css/,
  use: ExtractTextWebpackPlugin.extract({
    fallback: 'style-loader',
    use: 'css-loader' // Use `use` instead of `loader` https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/569
  })
}

const config = {
  devtool: 'eval-source-map',
  module: {
    rules: [extractTextStyleLoader]
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.css'),
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

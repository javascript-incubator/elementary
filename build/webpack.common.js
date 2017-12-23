const { outputPath } = require('./commonpaths')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const jsLoader = require('./loaders/jsloader')

const config = {
  entry: ['@babel/polyfill', './src/'],
  output: {
    filename: '[chunkhash].bundle.js',
    path: outputPath
  },
  module: {
    rules: [jsLoader]
  },
  plugins: [
    new webpack.ProgressPlugin(),
  ]
}

module.exports = config

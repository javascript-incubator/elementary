const webpack = require('webpack')
const jsLoader = require('./loaders/jsloader')
const nodeExternals = require('webpack-node-externals')

const config = (entry, output) => ({
  entry,
  output,
  module: {
    rules: [jsLoader]
  },
  plugins: [
    new webpack.ProgressPlugin()
  ],
  externals: [nodeExternals()]
})

module.exports = config

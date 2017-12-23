const styleLoader = {
  test: /\.css/,
  use: [
    'style-loader',
    'css-loader'
  ]
}

const config = {
  devtool: 'source-map', // https://webpack.js.org/configuration/devtool/
  module: {
    rules: [styleLoader]
  }
}

module.exports = config

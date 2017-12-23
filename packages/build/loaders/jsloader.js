const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: require.resolve('babel-loader'),
  query: {
    presets: [
      [require.resolve('@babel/preset-env')]
    ]
  }
}

module.exports = jsLoader

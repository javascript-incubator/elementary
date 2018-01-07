const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: require.resolve('babel-loader'),
  query: {
    plugins: [
      [require.resolve('@babel/plugin-proposal-class-properties')],
      [require.resolve('@babel/plugin-proposal-object-rest-spread')]
    ],
    presets: [
      [require.resolve('@babel/preset-env')],
      [require.resolve('@babel/preset-react')]
    ]
  }
}

module.exports = jsLoader

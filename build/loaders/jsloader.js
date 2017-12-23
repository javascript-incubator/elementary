const jsLoader = {
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader',
  query: {
    presets: [
      ['@babel/preset-env', {
        'targets': {
          'browsers': ['last 2 versions', 'safari >= 7']
        }
      }]
    ],
    plugins: []
  }
}

module.exports = jsLoader

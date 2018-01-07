const path = require('path')

const output = {
  library: '@elementary/standard',
  path: path.resolve(__dirname, './', 'lib'),
  filename: '[name].js',
  libraryTarget: 'commonjs2'
}

module.exports = {
  output,
  entry: {
    index: path.resolve(__dirname, './', 'src', 'index.js'),
    styles: path.resolve(__dirname, './', 'src', 'styles.js')
  }
}

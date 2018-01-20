const path = require('path')

const output = {
  library: '@elementary/exceptional',
  path: path.resolve(__dirname, './', 'lib'),
  filename: 'main.js',
  libraryTarget: 'commonjs2'
}

module.exports = {
  output,
  entry: path.resolve(__dirname, './', 'src', 'index.js')
}

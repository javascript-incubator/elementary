const path = require('path')

const output = {
  library: '@elementary/system',
  path: path.resolve(__dirname, './', 'dist'),
  filename: 'main.js',
  libraryTarget: 'commonjs2'
}

module.exports = {
  output,
  entry: path.resolve(__dirname, './', 'src', 'index.js')
}

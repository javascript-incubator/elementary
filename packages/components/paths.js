const path = require('path')

module.exports = {
  output: path.resolve(__dirname, './', 'dist'),
  filename: 'main.js',
  entry: path.resolve(__dirname, './', 'src', 'index.js')
}

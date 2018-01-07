const path = require('path')

const output = {
  library: '@elementary/components',
  path: path.resolve(__dirname, './', 'lib'),
  filename: '[name].js',
  libraryTarget: 'commonjs2'
}

module.exports = {
  output,
  entry: {
    index: path.resolve(__dirname, './', 'src', 'index.js'),
    components: path.resolve(__dirname, './', 'src', 'components.js')
  }
}

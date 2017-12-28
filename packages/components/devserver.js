const Webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfig = require('@elementary/build')
const paths = require('./paths')

const compiler = Webpack(webpackConfig({ env: process.env.ENV }, paths.entry, paths.output))
const devServer = new WebpackDevServer(compiler, { stats: { colors: true } })

devServer.listen(process.env.PORT || 3500, '127.0.0.1', _ => console.log(`Server started at Port ${process.env.PORT || 3500}`))

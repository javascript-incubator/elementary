const commonConfig = require('./webpack.common')
const wpmerge = require('webpack-merge')

// Webpack config as a function of env
module.exports = (env, entry, output) => {
  const envConfig = require(`./webpack.${env.env}`)
  console.log(wpmerge(commonConfig(entry, output), envConfig))
  return wpmerge(commonConfig(entry, output), envConfig)
}

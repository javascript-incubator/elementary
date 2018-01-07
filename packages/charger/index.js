const buildConfig = require('./config')
const webpack = require('webpack')
const rimraf = require('rimraf')

const WebpackPromise = (env, paths) => new Promise((resolve, reject) => {
  if (!env.env) {
    reject(Error('Cannot find ENV'))
    return
  }
  webpack(buildConfig(env, paths.entry, paths.output), function (err, stats) {
    if (err) {
      reject(err)
      return
    }
    resolve(stats)
  })
})

const RimrafPromise = dir => new Promise((resolve, reject) => {
  rimraf(dir, function (err, done) {
    if (err) {
      reject(err)
      return
    }

    resolve(done)
  })
})

module.exports = (paths) => RimrafPromise(paths.output.path)
  .then(_ => WebpackPromise({ env: process.env.ENV }, paths))
  .then(stats => {
    console.log('[webpack]', stats.toString({
      colors: true
    }))
  })
  .catch(e => console.log(e))

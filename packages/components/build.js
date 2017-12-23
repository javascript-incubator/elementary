const buildConfig = require('@elementary/build')
const webpack = require('webpack')
const rimraf = require('rimraf')
const paths = require('./paths')

const WebpackPromise = env => new Promise((resolve, reject) => {
  if (!env.env) {
    reject(Error('Cannot find ENV'))
    return
  }
  webpack(buildConfig(env, paths.entry, { path: paths.output, filename: paths.filename }), function (err, stats) {
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

RimrafPromise(paths.output)
  .then(_ => WebpackPromise({ env: process.env.ENV }))
  .then(stats => {
    console.log('[webpack]', stats.toString({
      colors: true
    }))
  })
  .catch(e => console.log(e))

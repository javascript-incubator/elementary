const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// "build:dev:bundleanalyzer": "yarn build:dev --env.addons=bundleanalyzer",
module.exports = {
  plugins: [
    new WebpackBundleAnalyzer()
  ]
}

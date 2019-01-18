const Lectro = require('@lectro/core');
const BuildUtils = require('@lectro/enhancer-buildutils');
const CommonUtils = require('@lectro/enhancer-commonutils');
const path = require('path');

new Lectro()
  .use(BuildUtils)
  .use(CommonUtils)
  .setEntry(path.resolve(__dirname, './', 'src', 'index.js'))
  .tap(
    self =>
      (self.output = {
        library: '@elementary/components',
        path: path.resolve(__dirname, './', 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
      }),
  )
  .devtool('none')
  .build();

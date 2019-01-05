const Lectro = require('@lectro/core');
const BuildUtils = require('@lectro/enhancer-buildutils');
const path = require('path');

new Lectro()
  .use(BuildUtils)
  .setEntry(path.resolve(__dirname, './', 'src', 'index.js'))
  .tap(
    self =>
      (self.output = {
        library: '@elementary/standard',
        path: path.resolve(__dirname, './', 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
      }),
  )
  .devtool('none')
  .build();

new Lectro()
  .use(BuildUtils)
  .setEntry(path.resolve(__dirname, './', 'src', 'styles.js'))
  .tap(
    self =>
      (self.output = {
        library: '@elementary/standard',
        path: path.resolve(__dirname, './', 'lib'),
        filename: 'styles.js',
        libraryTarget: 'commonjs2',
      }),
  )
  .devtool('none')
  .build();

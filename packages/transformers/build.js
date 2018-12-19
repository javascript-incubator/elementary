const Lectro = require('@lectro/core');
const BuildUtils = require('@lectro/enhancer-buildutils');
const path = require('path');

new Lectro()
  .use(BuildUtils)
  .setEntry(path.resolve(__dirname, './', 'src', 'index.js'))
  .tap(
    self =>
      (self.output = {
        library: '@elementary/transformer',
        path: path.resolve(__dirname, './', 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2',
      }),
  )
  .devtool('none')
  .build();

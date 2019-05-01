import test from 'ava';

const { themeTransformer } = require('../build/main');
const Standard = require('../build/main');

const { breakpoints } = themeTransformer({ breakpoints: ['700px'] });

test('Generated style', t => {
  const style = Standard.flexContainer({
    justifyContent: breakpoints(['center', 'left']),
    alignItems: breakpoints(['center', 'left']),
  });

  t.deepEqual(style, {
    justifyContent: 'center',
    alignItems: 'center',
    '700px': { justifyContent: 'left', alignItems: 'left' },
  });
});

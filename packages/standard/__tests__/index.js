import test from 'ava';

const { themeTransformer } = require('../build/main');
const Standard = require('../build/main');

const { breakpoints } = themeTransformer({ breakpoints: ['md'] });

Standard.flexContainer({
  justifyContent: breakpoints(['md', 'sm']),
  alignItems: breakpoints(['md', 'sm']),
});

test('Dummy Test', t => t.pass());

// console.log(
//
// );

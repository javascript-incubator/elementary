const { themeTransformer } = require('../build/main');
const Standard = require('../build/main');

const { breakpoints } = themeTransformer({ breakpoints: ['md'] });

console.log(
  Standard.flexContainer({
    justifyContent: breakpoints(['md', 'sm']),
    alignItems: breakpoints(['md', 'sm']),
  }),
);

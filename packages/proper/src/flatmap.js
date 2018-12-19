import { uncurry } from '@elementary/core';

const flatMap = uncurry(transformer => arr =>
  arr.reduce((acc, x) => [...acc, ...transformer(x)], []),
);

export default flatMap;

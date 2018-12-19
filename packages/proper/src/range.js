import { uncurry } from '@elementary/core';

const range = uncurry(initial => final =>
  (Array(final - initial) + '').split(',').map((_, i) => i + initial),
);

export default range;

import { uncurry } from '@elementary/core';

const concat = uncurry(partial => object => {
  if (typeof object.concat === 'function') {
    return object.concat(partial);
  }
  return { ...object, ...partial };
});

export default concat;

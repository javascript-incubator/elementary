import { uncurry } from '@elementary/core';

// Taken from 'Ramda' https://github.com/ramda/ramda/blob/v0.25.0/source/pick.js
const pick = uncurry(keys => obj => {
  var result = {};
  var idx = 0;
  while (idx < keys.length) {
    if (keys[idx] in obj) {
      result[keys[idx]] = obj[keys[idx]];
    }
    idx += 1;
  }
  return result;
});

export default pick;

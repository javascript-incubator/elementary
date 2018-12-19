import { rcompose } from '@elementary/core';

const binder = function(fns = []) {
  function add(fn) {
    return binder(fns.concat(fn));
  }

  function invoke(args) {
    return rcompose(...fns)(args);
  }

  return { add, invoke };
};

export default binder;

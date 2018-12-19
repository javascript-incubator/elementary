const uncurry = F => (...args) => {
  return args.reduce((acc, x) => {
    if (typeof acc !== 'function') {
      throw new Error(
        'Function is already exhausted, extra arguments supplied',
      );
    }
    return acc(x);
  }, F);
};

export default uncurry;

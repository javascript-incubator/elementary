const create = method => (...args) => object => {
  if (!object[method]) {
    throw new Error(method + ' not implemented');
  }

  return object[method](...args);
};

export default create;

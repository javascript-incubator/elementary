const last = objectOrArray => {
  if (
    objectOrArray.length
      ? objectOrArray.length === 0
      : Object.keys(objectOrArray).length === 0
  ) {
    return null;
  }

  const lastIndex = objectOrArray.length
    ? objectOrArray.length - 1
    : Object.keys(objectOrArray).length - 1;

  if (Array.isArray(objectOrArray)) {
    return objectOrArray[lastIndex];
  }

  return {
    [Object.keys(objectOrArray)[lastIndex]]:
      objectOrArray[Object.keys(objectOrArray)[lastIndex]],
  };
};

export default last;

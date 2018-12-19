const first = objectOrArray => {
  if (
    objectOrArray.length
      ? objectOrArray.length === 0
      : Object.keys(objectOrArray).length === 0
  ) {
    return null;
  }

  if (Array.isArray(objectOrArray)) {
    return objectOrArray[0];
  }

  return {
    [Object.keys(objectOrArray)[0]]:
      objectOrArray[Object.keys(objectOrArray)[0]],
  };
};

export default first;

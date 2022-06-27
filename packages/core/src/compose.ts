export default (...fns: Array<any>) =>
  fns.reduce(
    (acc, x) => acc(x),
    (_: any) => _,
  );

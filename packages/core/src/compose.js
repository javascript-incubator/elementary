export default (...fns) => (
  fns.reduce((acc, x) => acc(x), _ => _)
)

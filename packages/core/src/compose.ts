const compose: Function = (...fns: Function[]) => (
  fns.reduce((acc, x) => acc(x), _ => _)
)

export default compose
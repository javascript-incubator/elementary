function Maybe (x) {
  const of = x => Maybe(x)
  const isNothing = () => (x === null || x === undefined)
  const map = f => Maybe(x).isNothing() ? Maybe(null) : Maybe(f(x))
  const get = () => x
  return { of, map, isNothing, get }
}

export default Maybe

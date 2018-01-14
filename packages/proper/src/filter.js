import { uncurry } from '@elementary/core'

const filter = uncurry(
  predicate => (obj) => Object.keys(obj).filter(x => predicate(obj[x])).reduce((acc, x) => ({ ...acc, [x]: obj[x] }), {})
)

export default filter

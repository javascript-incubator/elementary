import { uncurry } from '@elementary/core'

const map = uncurry(
  transformer => (obj) => Object.keys(obj).reduce((acc, x) => ({ ...acc, [x]: transformer(obj[x]) }), {})
)

export default map

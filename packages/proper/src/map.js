import { uncurry } from '@elementary/core'

const map = uncurry(
  transformer => (obj) => {
    if (obj.map) {
      return obj.map(transformer)
    }
    return Object.keys(obj).reduce((acc, x) => ({ ...acc, [x]: transformer(obj[x]) }), {})
  }
)

export default map

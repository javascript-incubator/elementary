import { uncurry } from '@elementary/core'

const concat = uncurry(partial => object => {
  if (object.concat) {
    return object.concat(partial)
  }
  return {...object, ...partial}
})

export default concat

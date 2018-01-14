import { uncurry } from '@elementary/core'

const concat = uncurry(partial => object => ({...object, ...partial}))

export default concat

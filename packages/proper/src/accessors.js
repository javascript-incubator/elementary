import { Maybe, uncurry } from '@elementary/core'
import { getProp } from './index'
// import { chain } from '@elementary/pointfree'

const callTimes = (fn, ...args) => (monad) => args.reduce((acc, x) => acc[fn](y => getProp(x)(y)), monad)

const accessRaw = uncurry((accessorString) => object => callTimes('chain', ...accessorString.split('.'))(Maybe(object)))

const access = uncurry((string) => (obj) => accessRaw(string)(obj).get())

export default { access, accessRaw }

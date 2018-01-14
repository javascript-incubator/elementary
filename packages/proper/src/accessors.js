import { Maybe } from '@elementary/core'
import { getProp } from './index'
// import { chain } from '@elementary/pointfree'

const callTimes = (fn, ...args) => (monad) => args.reduce((acc, x) => acc[fn](y => getProp(x)(y)), monad)

const accessRaw = (accessorString) => object => callTimes('chain', ...accessorString.split('.'))(Maybe(object))

const access = accessRaw.get()

export default { access, accessRaw }

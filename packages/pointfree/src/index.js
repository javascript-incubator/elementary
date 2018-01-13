import methodRegsitry from './methodregistry'
import create from './create'

const pointfree = methodRegsitry.reduce((acc, x) => ({ ...acc, [x]: create(x) }), {})

export default pointfree
export { default as create } from './create'

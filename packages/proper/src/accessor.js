// import { Maybe } from '@elementary/core'
// import { getProp } from './index'
// import { chain } from '@elementary/pointfree'
const { Maybe } = require('@elementary/core')
const getProp = require('./index')

const callTimes = (fn, ...args) => (monad) => args.reduce((acc, x) => acc[fn](y => getProp(x)(y)), monad)

const accessor = (accessorString) => object => callTimes('chain', ...accessorString.split('.'))(Maybe(object)).get()

const dumas = {
  object: {
    deepObject: {
      musketeers: 3
    }
  }
}

console.log(accessor('object.deepObject.musketeers')(dumas))

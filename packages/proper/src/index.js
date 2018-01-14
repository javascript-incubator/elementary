import { Maybe, uncurry } from '@elementary/core'
import accessors from './accessors'

export const getProp = uncurry(prop => object => Maybe(object[prop]))

export const { access, accessRaw } = accessors
export { default as omit } from './omit'
export { default as pick } from './pick'

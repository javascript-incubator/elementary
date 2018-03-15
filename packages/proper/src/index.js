import { Maybe, uncurry } from '@elementary/core'
import accessors from './accessors'
import toArray from './toArray'

export const getProp = uncurry(prop => object => Maybe(object[prop]))
export const { toValueArray, toKeyArray } = toArray
export const { access, accessRaw } = accessors
export { default as omit } from './omit'
export { default as pick } from './pick'
export { default as concat } from './concat'
export { default as map } from './map'
export { default as filter } from './filter'
export { default as empty } from './empty'
export { default as fromNullable } from './fromNullable'
export { default as first } from './first'
export { default as last } from './last'
export { default as range } from './range'
export { default as flatMap } from './flatmap'

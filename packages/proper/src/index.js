import { Maybe, uncurry } from '@elementary/core'
import accessors from './accessors'

export const getProp = uncurry(prop => object => Maybe(object[prop]))

export const { access, accessRaw } = accessors

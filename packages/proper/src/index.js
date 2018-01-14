import { Maybe } from '@elementary/core'
import accessors from './accessor'

export const getProp = (prop) => object => Maybe(object[prop])
export const { access, accessRaw } = accessors

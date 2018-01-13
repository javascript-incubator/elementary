import { Maybe } from '@elementary/core'

export const getProp = (prop) => object => Maybe(object[prop])

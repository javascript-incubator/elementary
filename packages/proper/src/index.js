// import { Maybe } from '@elementary/core'
const { Maybe } = require('@elementary/core')
const getProp = (prop) => object => Maybe(object[prop])
module.exports = getProp

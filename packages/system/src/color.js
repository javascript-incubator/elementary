const { get, breaks, merge, arr, dec, media } = require('./util')

const REG = /^color|bg$/

module.exports = props => {
  const keys = Object.keys(props).filter(key => REG.test(key))
  const bp = breaks(props)
  const palette = get(props, 'theme.colors', {})
  const colorReturn = keys.map(key => {
    const val = props[key]
    const prop = properties[key] || key
    if (!Array.isArray(val)) {
      return {
        [prop]: cx(palette)(val)
      }
    }

    const returnVal = val
      .map(cx(palette))
      .map(dec(prop))
      .map(media(bp))
      .reduce(merge, {})
    return returnVal
  }).reduce(merge, {})
  return colorReturn
}

const cx = obj => n => get(obj, n + '', n)

const properties = {
  bg: 'backgroundColor'
}

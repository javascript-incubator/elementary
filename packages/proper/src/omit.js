import { uncurry } from '@elementary/core'

// Taken from 'Ramda' https://github.com/ramda/ramda/blob/v0.25.0/source/omit.js
const omit = uncurry(names => obj => {
  var result = {}
  var index = {}
  var idx = 0
  var len = names.length

  while (idx < len) {
    index[names[idx]] = 1
    idx += 1
  }

  for (var prop in obj) {
    if (!index.hasOwnProperty(prop)) {
      result[prop] = obj[prop]
    }
  }
  return result
})

export default omit

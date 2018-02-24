// or coyoneda compose
import coyoneda from './coyoneda'

// const coyoneda = require('./coyoneda')

function compose (...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return (...args) => funcs.reduce((a, b) => a.map(b), coyoneda(...args)).drop()
}

export default compose

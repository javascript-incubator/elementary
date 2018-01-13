const tic = require('node-tictoc')

tic.tic()
function Maybe (val) {
  function map (f = x => x) {
    return isNothing() ? Maybe(null) : Maybe(f(val))
  }

  function isNothing () {
    return (val !== undefined || val !== null)
  }

  function get () {
    return val
  }

  return { map, isNothing, get }
}

console.log(Maybe(null).map(x => x * 2).map().get())

tic.toc()

tic.tic()
var Maybe2 = function (x) {
  this.__value = x
}

Maybe2.of = function (x) {
  return new Maybe2(x)
}

Maybe2.prototype.isNothing = function () {
  return (this.__value === null || this.__value === undefined)
}

Maybe2.prototype.get = function () {
  return this.__value
}

Maybe2.prototype.map = function (f) {
  return this.isNothing() ? Maybe2.of(null) : Maybe2.of(f(this.__value))
}

console.log(Maybe2.of(null).map(x => x * 2).map().get())
tic.toc()

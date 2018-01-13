function Maybe (x) {
  const of = x => Maybe(x)
  const isNothing = () => (x === null || x === undefined)
  const map = f => Maybe(x).isNothing() ? Maybe(null) : Maybe(f(x))
  const get = () => Maybe(x).isNothing() ? null : x
  const join = () => Maybe(x).isNothing() ? Maybe(null) : x
  const chain = f => Maybe(x).map(f).join()
  return { of, map, isNothing, get, join, chain }
}

// function Maybe (x) {
//   this.__value = x
// }
//
// Maybe.of = function (x) {
//   return new Maybe(x)
// }
//
// Maybe.prototype.isNothing = function () {
//   return (this.__value === null || this.__value === undefined)
// }
//
// Maybe.prototype.map = function (f) {
//   return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
// }
//
// Maybe.prototype.get = function () {
//   return this.__value
// }
//
// Maybe.prototype.join = function () {
//   return this.isNothing() ? Maybe.of(null) : this.__value
// }

export default Maybe

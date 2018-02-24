// Taken from https://gist.github.com/DrBoolean/c0204ed57cf63a70dfe0
/*

var compose = function(f,g) {
  return function(x) {
    return f(g(x))
  }
}

var id = function(x) { return x }

*/
const compose = (f, g) => x => f(g(x))
const id = x => x

/* Define Coyoneda
var _Coyoneda = function(f, fa) {
  this.f = f;
  this.val = fa;
}
var Coyoneda = function(f, fa){ return new _Coyoneda(f, fa); } */
function Coyoneda (f, x) {
  /* _Coyoneda.prototype.map = function(f) {
     return Coyoneda(compose(f, this.f), this.val)
  } */
  const map = g => Coyoneda(compose(f, g), x)
  // _Coyoneda.prototype.lower = function() { return this.val.map(this.f); }
  const drop = _ => x.map(f)
  return { map, drop }
}

// Coyoneda.lift = function(x){ return Coyoneda(id, x); }
const coyoneda = x => Coyoneda(id, x)

module.exports = coyoneda

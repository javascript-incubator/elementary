import compose from './compose'
import identity from './identity'

type Functor<T> = {
  map<U>(f: (x: T) => U): Functor<U>
}

type Coyoneda<T> = {
  map<U>(f: (x: T) => U): Coyoneda<U>,
  drop(_: unknown): Functor<T>
}

function coyoneda<T>(f: Function, x: Functor<T>): Coyoneda<T> {
  function map<U>(g) {
    return coyoneda<U>(compose(f, g), x);
  }

  const drop = _ => x.map(f);
  return { map, drop };
}



// Coyoneda.lift = function(x){ return Coyoneda(id, x); }
// const coyoneda = x => Coyoneda(identity, x);

module.exports = coyoneda;

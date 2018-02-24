// import test from 'ava'

const { ccompose } = require('../core/lib/main')

const map = f => object => object.map(f)

const object = val => {
  console.log('logged')
  return {
    map: (f) => {
      return object(f(val))
    },
    prj: () => val
  }
}

console.log(ccompose(
  x => 3+x,
  x => 4+x,
  x => 5+x
)(object(4)).prj())

// test(t => t.is(
//   String(compose(map(x => 3+x), map(x => 4+x), map(x => 5+x)(object(4)))),
//   16
// ))

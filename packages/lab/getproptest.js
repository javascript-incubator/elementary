import test from 'ava'
const { compose, Maybe } = require('../core/lib/main')
const { getProp } = require('../proper/lib/main')
const { map, join, chain, concat } = require('../pointfree/lib/main')

const b = {
  key: {
    key2: {
      name: 2
    }
  }
}

const c = {
  name: 'Test'
}

// One Map only
test(t => t.is(compose(map(x => getProp('name')(x).get()), map(x => getProp('key2')(x).get()), getProp('key'))(b).get(), 2))
// Multiple Maps to get the value
test(t => t.is(compose(map(map(getProp('name'))), map(getProp('key2')), getProp('key'))(b).get().get().get(), 2))
// Map and Joins
test(t => t.is(compose(join(), map(getProp('name')), join(), map(getProp('key2')), getProp('key'))(b).get(), 2))
// Chain
test(t => t.is(compose(chain(getProp('name')), chain(getProp('key2')), getProp('key'))(b).get(), 2))
// Chain's Magic
test(t => t.is(compose(chain(getProp('name')), chain(getProp('key2')), chain(getProp('key')))(Maybe(b)).get(), 2))
// Chain and Map
test(t => t.is(compose(chain(concat('x')), chain(getProp('name')))(Maybe(c)), compose(map(concat('x')), chain(getProp('name')))(Maybe(c)).get()))

import test from 'ava'
// import { concat } from '../pointfree/lib/main'
// import { Maybe } from '../core/lib/main'
const { Maybe } = require('../core/lib/main')
// test(t => t.deepEqual(create('lambda')(x => x)([1, 2, 3]), [1, 2, 3]))

// test(t => t.is(compose(concat('1'), concat('2'), concat('3'))(''), '321'))
test(t => t.is(Maybe(4).map(x => x / 2).map(x => x / 2).map(x => x / 2).map(x => x / 2).map(x => x / 2).get(), 0.125))

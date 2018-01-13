import test from 'ava'
import { concat } from '../pointfree/lib/main'
import { compose } from '../core/lib/main'

// test(t => t.deepEqual(create('lambda')(x => x)([1, 2, 3]), [1, 2, 3]))

test(t => t.is(compose(concat('1'), concat('2'), concat('3'))(''), '321'))

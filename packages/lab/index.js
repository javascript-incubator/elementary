import test from 'ava'
import { create } from '../pointfree/lib/main'

test(t => t.deepEqual(create('lambda')(x => x)([1, 2, 3]), [1, 2, 3]))

import test from 'ava'
import { access } from '../proper/lib/main'

const dumas = {
  object: {
    deepObject: {
      musketeers: 3
    }
  }
}

test(t => t.is(access('object.deepObject.musketeers')(dumas), access('object.deepObject.musketeers', dumas)))

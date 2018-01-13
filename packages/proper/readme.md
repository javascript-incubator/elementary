# Proper

_Play with Object Properties_

### Example
```js
const dumas = {
  object: {
    deepObject: {
      musketeers: 3
    }
  }
}

const TVs = {
  name: 'Docter'
}

// One Map only
compose(map(x => getProp('musketeers')(x).get()), map(x => getProp('deepObject')(x).get()), getProp('object'))(dumas).get() //=> 2
// Multiple Maps to get the value
compose(map(map(getProp('musketeers'))), map(getProp('deepObject')), getProp('object'))(dumas).get().get().get() //=2
// Map and Joins
compose(join(), map(getProp('musketeers')), join(), map(getProp('deepObject')), getProp('object'))(dumas).get() //=> 2
// Chain
compose(chain(getProp('musketeers')), chain(getProp('deepObject')), getProp('object'))(dumas).get() //=> 2
// Chain's Magic
compose(chain(getProp('musketeers')), chain(getProp('deepObject')), chain(getProp('object')))(Maybe(dumas)).get() //=> 2
// Chain and Map
compose(chain(concat(' who')), chain(getProp('name')))(Maybe(TVs)) === compose(map(concat(' who')), chain(getProp('name')))(Maybe(TVs)).get() //=> true, both 'Docter who'

```

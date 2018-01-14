# Proper 

_Play with Object Properties_

### Example

###### Low Level API
```js
import { getProp } from '@elementary/proper'

const dumas = {
  object: {
    deepObject: {
      musketeers: 3
    }
  }
}

// With Map 
compose(
  map(map(getProp('musketeers'))), 
  map(getProp('deepObject')), 
  getProp('object')
)(dumas).get().get().get() //=> 3

// With Chain
compose(
  chain(getProp('musketeers')), 
  chain(getProp('deepObject')), 
  chain(getProp('object'))
)(Maybe(dumas)).get() //=> 3
```

###### High Level API

```js
import { access } from '@elementary/proper'

const dumas = {
  object: {
    deepObject: {
      musketeers: 3
    }
  }
}

access('object.deepObject.musketeers')(dumas) //=> 3
access('object.deepObject.samurais')(dumas) //=> null
access('object.noObject.musketeers')(dumas) //=> null
```
Also includes `omit` and `pick` functions from Ramda

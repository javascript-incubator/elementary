# Elementary Core

_Core Typeclasses and Functions governing the development of Elementary/Components_


### Get Started

```bash
# Install Core
$ yarn add @elementary/core
```

### Usage

#### Compose

```js
import { compose } from '@elementary/core'
compose(f, g)(val) === f(g(val)) //true
```

#### Ccompose

```js
import { ccompose } from '@elementary/core'
compose(f, g)(functor) === functor.map(f).map(g) //true and will be iterated once only
```

#### Maybe

```js 
import { Maybe } from '@elementary/core'

Maybe().of(1).map(x => x/2) //=> 0.5
Maybe().of(null).map(x => x/2) //=> null
```

** Api is still experimental, please don't use core's apis directly**

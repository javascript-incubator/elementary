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

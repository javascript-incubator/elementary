# Pointfree

_Helper Functions to turn your Pointfull Code to Pointfree Code_

### _Install_
```bash
$ npm i @elementary/pointfree
```
### _Before Pointfree_
```js
PromiseA().then(x => PromiseB(x)).then(y => PromiseC(y)).then(......)
```

_Is there any way so that I can remove those `.` 😕_

### _After Pointfree_

```js 
import { then } from '@elementary/pointfree'
import { compose } from '@elementary/core'

compose(PromiseA, then(x => PromiseB(x)), then(x => PromiseC(x)), then(......))
```
_Yay, Thank you Pointfree 😃_

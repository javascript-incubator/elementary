import hoc from './styletransformer'
import { space } from './constants'

export default hoc(
  {
    is: 'p',
    margin: space[0],
  },
  {},
  ['text'],
)

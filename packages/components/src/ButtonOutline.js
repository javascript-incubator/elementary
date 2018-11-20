import { darken } from './utils'
import hoc from './styletransformer'
import Button from './Button'

export default hoc(
  {
    is: Button,
    bg: 'transparent',
    boxShadow: `inset 0 0 0 2px`,
    hover: props => ({
      backgroundColor: props.color,
    }),
    focus: { boxShadow: `inset 0 0 0 2px, 0 0 0 2px` },
    active: props => ({
      backgroundColor: props.color,
      boxShadow: `inset 0 0 0 2px ${props.color}, inset 0 0 8px ${darken(
        1 / 4,
      )}`,
    }),
  },
  {},
  ['text'],
)

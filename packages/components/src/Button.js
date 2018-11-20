import { fontSizes, space } from './constants'
import { darken } from './utils'
import hoc from './styletransformer'

export default hoc(
  {
    is: 'button',
    f: fontSizes[0],
    margin: space[0],
    pl: space[3],
    pr: space[3],
    pt: space[2],
    pb: space[2],
    hover: { boxShadow: `inset 0 0 0 999px ${darken(1 / 8)}` },
    focus: { outline: 0 },
    active: { borderStyle: 'inset', backgroundColor: darken(3 / 4) },
    disabled: { opacity: 1 / 4 },
    display: 'inline-block',
  },
  props => ({
    fontFamily: 'inherit',
    lineHeight: 16 / 14,
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    border: 0,
    appearance: 'none',
  }),
  ['text'],
)

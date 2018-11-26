import hoc from './styletransformer'

export default hoc({
  name: 'Button',
  type: 'button',
  style: props => ({
    margin: '0px',
    display: 'inline-block',
    fontFamily: 'inherit',
    lineHeight: 16 / 14,
    verticalAlign: 'middle',
    textAlign: 'center',
    textDecoration: 'none',
    border: 0,
    appearance: 'none',
  }),
  extras: ['text'],
})('button')

import hoc from './styletransformer'

export default hoc({
  name: 'Relative',
  type: 'div',
  style: props => ({
    zIndex: 99,
    position: 'relative',
  }),
})('div')

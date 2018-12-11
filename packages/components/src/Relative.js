import hoc from './styletransformer'

export default hoc({
  name: 'Relative',
  type: 'div',
  extras: ['position'],
  style: props => ({
    zIndex: 99,
    position: 'relative',
  }),
})('div')

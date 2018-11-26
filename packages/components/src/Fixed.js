import hoc from './styletransformer'

export default hoc({
  name: 'Fixed',
  type: 'div',
  style: props => ({
    zIndex: 99,
    position: 'fixed',
  }),
  extras: ['position'],
})('div')

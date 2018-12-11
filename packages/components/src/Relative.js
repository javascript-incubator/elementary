import hoc from './styletransformer'

export default hoc({
  name: 'Relative',
  type: 'div',
  extras: ['position'],
  style: props => ({
    position: 'relative',
  }),
})('div')

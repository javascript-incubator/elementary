import hoc from './styletransformer'

export default hoc({
  name: 'Box',
  type: 'div',
  extras: ['flexContainer', 'flexBox'],
  style: { boxSizing: 'border-box' },
})('div')

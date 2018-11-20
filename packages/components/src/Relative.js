import hoc from './styletransformer'

export default hoc(
  {
    z: 99,
    is: 'div',
  },
  props => ({
    position: 'relative',
  }),
  ['position'],
)

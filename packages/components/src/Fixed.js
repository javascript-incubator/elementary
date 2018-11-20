import hoc from './styletransformer'

export default hoc(
  {
    z: 99,
    is: 'div',
  },
  {
    position: 'fixed',
  },
  ['position'],
)

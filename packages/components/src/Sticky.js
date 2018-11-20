import hoc from './styletransformer'

export default hoc(
  {
    z: 99,
    is: 'div',
  },
  props => `
      position: -webkit-sticky;
      position: sticky;
  `,
  ['position'],
)

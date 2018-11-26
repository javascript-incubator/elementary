import hoc from './styletransformer'

export default hoc({
  name: 'Sticky',
  type: 'div',
  style: props => `
      position: -webkit-sticky;
      position: sticky;
      z-index: 99;
    `,
})('div')

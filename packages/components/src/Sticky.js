import hoc from './styletransformer';

export default hoc({
  name: 'Sticky',
  type: 'div',
  extras: ['position'],
  style: props => `
      position: -webkit-sticky;
      position: sticky;
      z-index: 99;
    `,
})('div');

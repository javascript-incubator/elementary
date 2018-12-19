import hoc from './styletransformer';

export default hoc({
  name: 'Absolute',
  type: 'div',
  style: props => ({
    zIndex: 99,
    position: 'absolute',
  }),
  extras: ['position'],
})('div');

import hoc from './styletransformer';

export default hoc({
  name: 'Grid',
  type: 'div',
  extras: ['gridContainer'],
  style: { display: 'grid' },
})('div');

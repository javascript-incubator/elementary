import hoc from './styletransformer';

export default hoc({
  name: 'Flex',
  type: 'div',
  extras: ['flexContainer', 'flexBox'],
  style: { display: 'flex' },
})('div');

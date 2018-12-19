import hoc from './styletransformer';

export default hoc({
  name: 'Link',
  type: 'a',
  style: {
    color: 'blue',
  },
  extras: ['text'],
})('a');

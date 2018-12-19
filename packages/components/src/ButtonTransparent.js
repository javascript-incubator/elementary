import hoc from './styletransformer';
import Button from './Button';

export default hoc({
  name: 'ButtonTransparent',
  type: 'Button',
  style: props => ({
    color: 'inherit',
    backgroundColor: 'transparent',
  }),
  extras: ['text'],
})(Button);

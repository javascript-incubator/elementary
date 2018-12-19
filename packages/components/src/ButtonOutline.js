import hoc from './styletransformer';
import Button from './Button';

export default hoc({
  name: 'ButtonOutline',
  type: 'Button',
  style: props => ({
    boxShadow: `inset 0 0 0 2px`,
    backgroundColor: 'transparent',
  }),
  extras: ['text'],
})(Button);

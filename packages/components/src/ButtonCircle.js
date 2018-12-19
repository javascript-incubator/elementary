import hoc from './styletransformer';
import Button from './Button';

export default hoc({
  name: 'ButtonCircle',
  type: 'Button',
  style: props => ({
    borderRadius: '99999px',
  }),
  extras: ['text'],
})(Button);

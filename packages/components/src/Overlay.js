import hoc from './styletransformer';
import { darken } from './utils';

export default hoc({
  name: 'Overlay',
  type: 'div',
  style: props => ({
    backgroundColor: 'white',
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maxWidth: '100vw',
    maxHeight: '100vh',
    overflow: 'auto',
    boxShadow: `0 0 0 60vmax ${darken(1 / 2)}, 0 0 32px ${darken(1 / 4)}`,
  }),
})('div');

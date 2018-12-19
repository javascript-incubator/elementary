import hoc from './styletransformer';
import Flex from './Flex';

export default hoc({
  name: 'Row',
  type: 'Flex',
  style: {
    flexDirection: 'row',
  },
})(Flex);

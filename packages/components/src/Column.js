import hoc from './styletransformer'
import Flex from './Flex'

export default hoc({
  name: 'Column',
  type: 'Flex',
  style: {
    flexDirection: 'column',
  },
})(Flex)

import hoc from './styletransformer'
import Text from './Text'

export default hoc({
  name: 'Truncate',
  type: 'Text',
  style: {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
})(Text)

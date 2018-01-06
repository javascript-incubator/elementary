import { RegistryManager } from './utils'
import spaceStyleGroupFrame from './space'
import borderStylePropFrame from './border'

const registry = {
  color: {
    styles: [['color'], ['bg', 'backgroundColor']]
  },
  borderRadius: {
    styles: [['borderRadius']]
  },
  space: {
    styles: spaceStyleGroupFrame
  },
  border: {
    styles: borderStylePropFrame
  },
  boxShadow: {
    styles: [['boxShadow']]
  },
  flexContainer: {
    styles: [['direction', 'flexDirection'], ['flexWrap'], ['flexFlow'], ['justifyContent'], ['alignItems'], ['alignContent']]
  },
  flexBox: {
    styles: [['order'], ['flexGrow'], ['flexShrink'], ['flexBasis'], ['flex'], ['alignSelf']]
  },
  text: {
    styles: [['f', 'fontSize'], ['fontWeight'], ['letterSpacing'], ['lineHeight'], ['textAlign'], ['tt', 'textTransform'], ['textDecoration']]
  },
  dimensions: {
    styles: [['w', 'width'], ['h', 'height'], ['mw', 'maxWidth'], ['mh', 'maxHeight']]
  },
  position: {
    styles: [['t', 'top'], ['r', 'right'], ['b', 'bottom'], ['l', 'left'], ['z', 'zIndex']]
  },
  states: {
    pseudoStyles: [['active'], ['hover'], ['focus'], ['visited']]
  }
}

export default RegistryManager(registry)

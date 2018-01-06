import styleLens from './styleLens'
import pseudoStyleLens from './pseudoStyleLens'
import { StyleLensManager, StyleGroup } from './utils'
import registry from './styleRegistery'

const getStyleOrPseudoStyle = (x) => {
  return x.styles ? x.styles.map(y => styleLens(...y)) : x.pseudoStyles.map(y => pseudoStyleLens(...y))
}
const Registry = registry.map(x => StyleLensManager(
  getStyleOrPseudoStyle(x)
).fold((acc, x) => acc.concat(x), StyleGroup().empty()))

const styles = Registry.getRegistry()

export default styles

export const props = registry.toPropArray()

export const { color, borderRadius, space, border, boxShadow, flexContainer, flexBox, text, dimensions, states } = styles

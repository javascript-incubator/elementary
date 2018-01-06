import styleLens from './styleLens'
import { StyleLensManager, StyleGroup } from './utils'
import registry from './styleRegistery'

const Registry = registry.map(x => StyleLensManager(x.styles.map(y => styleLens(...y))).fold((acc, x) => acc.concat(x), StyleGroup().empty())).getRegistry()

export default Registry

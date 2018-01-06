import { RegistryManager } from './utils'

const registry = {
  color: {
    styles: [['color'], ['bg', 'backgroundColor']]
  }
}

export default RegistryManager(registry)

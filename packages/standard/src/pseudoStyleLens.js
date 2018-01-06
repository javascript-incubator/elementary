import { StyleGroup } from './utils'

// Semigroup S, Props P => (String, String) -> P -> S
const pseudoStyleLens = (prop, cssProperty) => props => {
  if (props[prop] === undefined || props[prop] === null) {
    return StyleGroup().empty()
  }

  return StyleGroup({
    ['&:' + (cssProperty || prop)]: typeof props[prop] === 'function' ? props[prop](props) : props[prop]
  })
}

export default pseudoStyleLens

import hoc from './styletransformer'

const createComponent = (config, components = {}) => {
  const { type, props, style, propTypes = {}, extras = [], name } = config
  if (!config || !type || !style) return null

  const _tag = components[type] || type

  const Component = hoc(style, props, extras)(_tag)
  Component.displayName = name
  Component.propTypes = propTypes
  Component.defaultProps = config.defaultProps || {}

  return Component
}

export default createComponent

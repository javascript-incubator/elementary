import styled from 'styled-components'
import styles, {
  props as blacklist,
  space,
  color,
  dimensions,
  borderRadius,
  states,
  props,
  transition,
  border,
  transform,
  boxShadow,
} from '@elementary/standard/lib/styles'

import { oneOfType, number, string, func, object } from 'prop-types'
import { createElement, propHunter } from '@elementary/transformers'

const prop = oneOfType([number, string, func, object])

const propTypes = props.reduce((acc, x) => ({ ...acc, [x]: prop }), {})

const withStyle = (style, props, extras = []) => Component => {
  const Base = styled(Component)(
    [],
    style,
    space,
    dimensions,
    color,
    borderRadius,
    states,
    transition,
    border,
    transform,
    boxShadow,
    ...extras.map(x => styles[x]),
  )

  Base.propTypes = propTypes

  // Clean this up after styled-components removes whitelisting
  const Comp = styled(Base).attrs(props)([])
  return Comp
}

export const removeProps = propHunter(blacklist)

const hoc = (style, props, extras) => Element =>
  Element
  |> createElement
  |> propHunter(blacklist)
  |> withStyle(style, props, extras)

export default hoc

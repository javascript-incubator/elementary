import { compose } from '@elementary/core'
import styled from 'styled-components'

import styles, { space, color, dimensions, borderRadius, states, props } from '@elementary/standard/lib/styles'

import {
  oneOfType,
  number,
  string,
  func,
  object
} from 'prop-types'
import { createElement, propHunter } from '@elementary/higherorder-components'
import blacklist from './blacklist'

const prop = oneOfType([
  number,
  string,
  func,
  object
])

const propTypes = props.reduce((acc, x) => ({...acc, [x]: prop}), {})

const withStyle = (style, props, extras = []) => Component => {
  const Base = styled(Component)([],
    space,
    dimensions,
    color,
    borderRadius,
    states,
    ...extras.map(x => styles[x])
  )

  Base.propTypes = propTypes

  // Clean this up after styled-components removes whitelisting
  const Comp = styled(Base).attrs(props)([], style)
  return Comp
}

export const removeProps = propHunter(blacklist)

const hoc = (style, props, extras) => compose(
  withStyle(style, props, extras),
  removeProps,
  createElement
)

export default hoc

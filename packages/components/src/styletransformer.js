import styled from 'styled-components'
import React from 'react'

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

const prop = oneOfType([number, string, func, object])

const propTypes = props.reduce((acc, x) => ({ ...acc, [x]: prop }), {})

const createElement = type => {
  const Base = props => {
    const isEl = typeof type === 'string'
    const Comp = isEl ? props.is || type : type
    const next = { ...props }

    if (isEl) delete next.is

    return <Comp {...next} />
  }

  Base.displayName =
    typeof type === 'string' ? `Created(${type})` : 'CreateElementWrapper'

  Base.propTypes = {
    is: string,
  }

  return Base
}

const propHunter = (blacklist = []) => Com => {
  const clean = huntProps(blacklist)
  const PropHunterElement = props => <Com {...clean(props)} />
  PropHunterElement.displayName = 'PropHunterElement'
  return PropHunterElement
}

export const huntProps = blacklist => props => {
  const next = {}
  for (let key in props) {
    if (blacklist.includes(key)) continue
    next[key] = props[key]
  }
  return next
}

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

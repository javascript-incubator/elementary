import { compose } from '@elementary/core'
import styled from 'styled-components'
import standard, {
  space,
  width,
  fontSize,
  color,
  borderRadius,
  hover,
  focus,
  active,
  disabled
} from '@elementary/standard'

import {
  arrayOf,
  oneOfType,
  number,
  string
} from 'prop-types'
import { createElement, propHunter } from '@elementary/higherorder-components'
import blacklist from './blacklist'

const prop = oneOfType([
  number,
  string,
  arrayOf(oneOfType([
    number,
    string
  ]))
])

const propTypes = {
  width: prop,
  w: prop,
  fontSize: prop,
  f: prop,
  color: prop,
  bg: prop,
  m: prop,
  mt: prop,
  mr: prop,
  mb: prop,
  ml: prop,
  mx: prop,
  my: prop,
  p: prop,
  pt: prop,
  pr: prop,
  pb: prop,
  pl: prop,
  px: prop,
  py: prop
}

const withStyle = (style, props, extras = []) => Component => {
  const Base = styled(Component)([],
    space,
    width,
    fontSize,
    color,
    borderRadius,
    hover,
    focus,
    active,
    disabled,
    ...extras.map(x => standard[x])
  )

  Base.propTypes = propTypes

  // Clean this up after styled-components removes whitelisting
  const Comp = styled(Base).attrs(props)([], style)
  return Comp
}

const removeProps = propHunter(blacklist)

const hoc = (style, props, extras) => compose(
  withStyle(style, props, extras),
  removeProps,
  createElement
)

export default hoc

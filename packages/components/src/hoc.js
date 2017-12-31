import { compose } from '@elementary/core'
import styled from 'styled-components'
import {
  space,
  width,
  fontSize,
  color,
  borderRadius,
  hover,
  focus,
  active,
  disabled
} from 'styled-system'

import {
  arrayOf,
  oneOfType,
  number,
  string
} from 'prop-types'
import { propHunter } from '@elementary/higherorder-components'
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

const withStyle = (style, props) => Component => {
  const Base = styled(Component)([],
    space,
    width,
    fontSize,
    color,
    borderRadius,
    hover,
    focus,
    active,
    disabled
  )

  Base.propTypes = propTypes

  // Clean this up after styled-components removes whitelisting
  const Comp = styled(Base).attrs(props)([], style)

  return Comp
}

const Tag = propHunter(blacklist)

const hoc = (style, props) => compose(
  withStyle(style, props),
  Tag
)

export default hoc

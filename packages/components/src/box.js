import styled from 'styled-components'
import { space, width, responsiveStyle } from 'styled-system'
import { number, string, array, oneOfType } from 'prop-types'
import { propHunter } from '@elementary/higherorder-components'
import propTypes from './proptypes'
import removeProps from './removeprops'

export const flex = responsiveStyle('flex')
export const order = responsiveStyle('order')

const Tag = propHunter(removeProps)
const Base = Tag('div')

const Box = styled(Base)([],
  { boxSizing: 'border-box' },
  width,
  space,
  flex,
  order
)

Box.displayName = 'Box'

const responsivePropType = oneOfType([
  number,
  string,
  array
])

Box.propTypes = Object.assign({}, propTypes, {
  flex: responsivePropType,
  order: responsivePropType
})

export default Box

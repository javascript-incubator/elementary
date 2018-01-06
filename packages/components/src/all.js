import { color, borderRadius, space, border, boxShadow, flexContainer, flexBox, text, dimensions, states } from '@elementary/standard/lib/styles'
import styled from 'styled-components'
import { createElement } from '@elementary/higherorder-components'
import { compose } from '@elementary/core'
import { removeProps } from './hoc'

export default compose(component => styled(component)([], color, borderRadius, space, border, boxShadow, flexContainer, flexBox, text, dimensions, states), removeProps, createElement)

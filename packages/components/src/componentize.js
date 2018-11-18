import {
  color,
  borderRadius,
  space,
  border,
  boxShadow,
  flexContainer,
  flexBox,
  text,
  dimensions,
  states,
  transition,
  transform,
  display,
} from '@elementary/standard'
import styled from 'styled-components'
import { createElement } from '@elementary/transformers'
import { compose } from '@elementary/core'
import { removeProps } from './styletransformer'

export default compose(
  component =>
    styled(component)(
      [],
      color,
      borderRadius,
      space,
      border,
      boxShadow,
      flexContainer,
      flexBox,
      text,
      dimensions,
      states,
      transition,
      transform,
      display,
    ),
  removeProps,
  createElement,
)

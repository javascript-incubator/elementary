import _Box from './box'
import _Flex from './flex'
import styled from 'styled-components'
import {
  fontSize,
  color
} from 'styled-system'

export const Flex = styled(_Flex)([], fontSize, color)
export const Box = styled(_Box)([], fontSize, color)

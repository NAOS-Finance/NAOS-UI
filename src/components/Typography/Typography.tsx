import React from 'react'
import styled from 'styled-components'
import { BasicDivStyled } from '../Basic/Basic'
import { fontVariant } from '../../utils/fontVariant'

const TypographyStyled = styled(BasicDivStyled)<{
  variant?: string
  color?: string
  align?: string
}>`
  ${(props) => fontVariant(props.variant === undefined ? '' : props.variant)})};
  color: ${(props) => (props.color === undefined ? props.theme?.textColor?.primary : props.color)};
  text-align: ${(props) => (props.align === undefined ? 'center' : props.align)};
`

export interface TypographyProps {
  children?: React.ReactNode
  variant?: string
  color?: string
  align?: string
}

const Typography = ({children = '', variant, color, align}:TypographyProps) => {
  return <TypographyStyled>{children}</TypographyStyled>
}

export default Typography

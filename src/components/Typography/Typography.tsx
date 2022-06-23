import React from 'react'
import styled from 'styled-components'
import { BasicProps, BasicDivStyled } from '../Basic/Basic'
import { fontVariant } from '../../utils/fontVariant'

interface TypographyStyledProps extends BasicProps {
  variant?: string
  color?: string
  align?: string
  padingTop?: string
  padingRight?: string
  padingBottom?: string
  padingLeft?: string
}

const TypographyStyled = styled(BasicDivStyled)<TypographyStyledProps>`
  width: ${(props) => (props.width === undefined ? 'auto' : props.width)};
  height: ${(props) => (props.height === undefined ? '24px' : props.height)};
  ${(props) => fontVariant(props.variant === undefined ? '' : props.variant)})};
  color: ${(props) => (props.color === undefined ? props.theme?.textColor?.primary : props.color)};
  text-align: ${(props) => (props.align === undefined ? 'center' : props.align)};
  padding-top: ${(props) => (props.padingTop === undefined ? '0' : props.padingTop)};
  padding-right: ${(props) => (props.padingRight === undefined ? '16px' : props.padingRight)};
  padding-bottom: ${(props) => (props.padingBottom === undefined ? '0' : props.padingBottom)};
  padding-left: ${(props) => (props.padingLeft === undefined ? '16px' : props.padingLeft)};
`

export interface TypographyProps extends TypographyStyledProps {
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Typography = ({ style, children, ...rest }: TypographyProps) => {
  return (
    <TypographyStyled {...rest} style={style}>
      {children}
    </TypographyStyled>
  )
}

export default Typography

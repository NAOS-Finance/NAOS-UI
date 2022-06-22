import React from 'react'
import styled, {ThemeProps} from 'styled-components'
import { BasicButtonStyled } from '../Basic/Basic'

const ButtonStyled = styled(BasicButtonStyled)<{
  radius?: string
  isActive?: boolean
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: none;
  border-radius: ${(props) => props.radius === undefined ? '50%' : props.radius};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? props.theme?.bgColor?.active : props.theme?.bgColor?.inactive)};
  margin-top: ${(props) => (props.marginTop === undefined ? '0' : props.marginTop)};
  margin-right: ${(props) => (props.marginRight === undefined ? '0' : props.marginRight)};
  margin-bottom: ${(props) => (props.marginBottom === undefined ? '0' : props.marginBottom)};
  margin-left: ${(props) => (props.marginLeft === undefined ? '0' : props.marginLeft)};
`

export interface ButtonProps {
  radius?: string
  isActive?: boolean
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Button = ({radius, isActive, style, children}: ButtonProps) => {
  return <ButtonStyled radius={radius} isActive={isActive} style={style}>{children}</ButtonStyled>
}

export default Button

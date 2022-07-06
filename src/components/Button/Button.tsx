import React from 'react'
import styled from 'styled-components'
import { BasicProps, BasicButtonStyled } from '../Basic/Basic'

export interface ButtonStyledProps extends BasicProps {
  radius?: string
  isActive?: boolean
}

const ButtonStyled = styled(BasicButtonStyled)<ButtonStyledProps>`
  border: none;
  border-radius: ${(props) => (props.radius === undefined ? '0px' : props.radius)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => (props.isActive ? props.theme?.bgColor?.active : props.theme?.bgColor?.inactive)};
`

export interface ButtonProps {
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Button = ({ style, children, ...rest }: ButtonProps & ButtonStyledProps) => {
  return (
    <ButtonStyled {...rest} style={style}>
      {children}
    </ButtonStyled>
  )
}

export default Button

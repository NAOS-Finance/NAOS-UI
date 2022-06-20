import React from 'react'
import styled from 'styled-components'

// export const ButtonStyled = styled.button<{
//   width: string
//   height: string
//   radius: string
//   isActive?: boolean
//   marginTop?: string
//   marginRight?: string
//   marginBottom?: string
//   marginLeft?: string
// }>`
//   width: ${(props) => props.width};
//   height: ${(props) => props.height};
//   border: none;
//   border-radius: ${(props) => props.radius};
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: ${(props) => (props.isActive ? theme.bgColor.active : theme.bgColor.inactive)};
//   margin-top: ${(props) => (props.marginTop === undefined ? '0' : props.marginTop)};
//   margin-right: ${(props) => (props.marginRight === undefined ? '0' : props.marginRight)};
//   margin-bottom: ${(props) => (props.marginBottom === undefined ? '0' : props.marginBottom)};
//   margin-left: ${(props) => (props.marginLeft === undefined ? '0' : props.marginLeft)};
// `

export interface ButtonProps {
  label: string
}

const Button = (props: ButtonProps) => {
  return <button>{props.label}</button>
}

export default Button

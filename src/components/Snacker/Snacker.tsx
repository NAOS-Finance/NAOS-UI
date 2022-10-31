import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { BasicDivStyled, BasicProps } from '../Basic/Basic'

export interface ModalStyledProps extends BasicProps {
  maxWidth?: string
  minHeight?: string
}

const SnackerStyled = styled(BasicDivStyled)<{
  open?: boolean
}>`
  ${({ open, theme }) =>
    open ? `
      width: 448px;
      background-color: ${theme?.colors?.backgroundColor ? theme?.colors?.backgroundColor : 'white'};
      border-radius: 15px;
      display: flex;
      margin-bottom: 20px;
      padding: 0;
      display: block;
      float: right;
      right: 0;
      top: 0;` : `display: none;`}
`

const SnackerContainer = styled(BasicDivStyled)<{}>`
  width: 448px;
  position: fixed;
  float: right;
  top: 10px;
  right: 10px;
  z-index: 10;
`

const Snacker = ({
  children,
  style,
  backgroundStyle,
  onContainerClick,
  open,
  ...rest
}: {
  style?: React.CSSProperties
  children?: React.ReactNode
  backgroundStyle?: React.CSSProperties
  onContainerClick?: Function
  open?: Boolean
} & ModalStyledProps) => {

  return (
    <SnackerContainer {...rest} open style={backgroundStyle} onClick={onContainerClick}>
      <SnackerStyled {...rest} open style={style}>
        {children}
      </SnackerStyled>
    </SnackerContainer>
  )
}

export default Snacker

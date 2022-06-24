import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { BasicDivStyled, BasicProps } from '../Basic/Basic'

export interface CardStyledProps extends BasicProps {
  minWidth?: string
  minHeight?: string
}

const CardStyled = styled(BasicDivStyled)<CardStyledProps>`
  background: ${({ theme }) => theme?.colors?.backgroundColor ?? '#F6F6F6'};
  min-width: ${({ minWidth }) => minWidth ?? '300px'};
  min-height: ${({ minHeight }) => minHeight ?? '168px'};
  display: flex;
`

const Card = ({
  children,
  style,
  ...rest
}: {
  style?: React.CSSProperties
  children?: React.ReactNode
} & CardStyledProps) => {
  return (
    <CardStyled {...rest} style={style}>
      {children}
    </CardStyled>
  )
}

export default Card

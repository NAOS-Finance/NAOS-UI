import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { BasicDivStyled, BasicProps } from '../Basic/Basic'

export interface CardStyledProps extends BasicProps {
  maxWidth?: string
  minHeight?: string
}

enum CardSize {
  SMALL,
  MEDIUM,
  LARGE,
}

/**
 * different card size mapping different
 */
const DefaultCardSetting: Map<CardSize, CardStyledProps> = new Map([
  [
    CardSize.SMALL,
    {
      maxWidth: '100px',
      minHeight: '100px',
    },
  ],
  [
    CardSize.MEDIUM,
    {
      maxWidth: '300px',
      minHeight: '168px',
    },
  ],
  [
    CardSize.LARGE,
    {
      maxWidth: '500px',
      minHeight: '268px',
    },
  ],
])

const CardStyled = styled(BasicDivStyled)<CardStyledProps>`
  background: ${({ theme }) => theme?.colors?.backgroundColor ?? '#F6F6F6'};
  max-width: ${({ maxWidth }) => maxWidth ?? '300px'};
  min-height: ${({ minHeight }) => minHeight ?? '168px'};
  display: flex;
`

const Card = ({
  children,
  style,
  size = CardSize.MEDIUM,
  ...rest
}: {
  style?: React.CSSProperties
  children?: React.ReactNode
  size?: CardSize
} & CardStyledProps) => {
  let setting = DefaultCardSetting.get(size)
  if (!setting) {
    console.warn('Component/Card: setting error')
    return null
  }
  setting = { ...setting, ...rest }
  return (
    <CardStyled {...setting} style={style}>
      {children}
    </CardStyled>
  )
}

export default Card

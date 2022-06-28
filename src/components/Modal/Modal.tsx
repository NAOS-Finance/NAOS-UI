import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { BasicDivStyled, BasicProps } from '../Basic/Basic'

export interface ModalStyledProps extends BasicProps {
  maxWidth?: string
  minHeight?: string
}

export enum ModalSize {
  SMALL,
  MEDIUM,
  LARGE,
}

/**
 * different card size mapping different
 */
const DefaultCardSetting: Map<ModalSize, ModalStyledProps> = new Map([
  [
    ModalSize.SMALL,
    {
      maxWidth: '100px',
      minHeight: '100px',
    },
  ],
  [
    ModalSize.MEDIUM,
    {
      maxWidth: '300px',
      minHeight: '168px',
    },
  ],
  [
    ModalSize.LARGE,
    {
      maxWidth: '500px',
      minHeight: '268px',
    },
  ],
])

const ModalStyled = styled(BasicDivStyled)<ModalStyledProps>`
  background: ${({ theme }) => theme?.colors?.backgroundColor ?? '#F6F6F6'};
  max-width: ${({ maxWidth }) => maxWidth ?? '300px'};
  min-height: ${({ minHeight }) => minHeight ?? '168px'};
  display: flex;
`

const Modal = ({
  children,
  style,
  size = ModalSize.MEDIUM,
  ...rest
}: {
  style?: React.CSSProperties
  children?: React.ReactNode
  size?: ModalSize
} & ModalStyledProps) => {
  let setting = DefaultCardSetting.get(size)
  if (!setting) {
    console.warn('Component/Modal: setting error')
    return null
  }
  setting = { ...setting, ...rest }
  return (
    <ModalStyled {...setting} style={style}>
      {children}
    </ModalStyled>
  )
}

export default Modal

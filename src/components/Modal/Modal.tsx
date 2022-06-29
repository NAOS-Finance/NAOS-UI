import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { BasicDivStyled, BasicProps } from '../Basic/Basic'

export interface ModalStyledProps extends BasicProps {
  maxWidth?: string
  minHeight?: string
}

export enum ModalSize {
  SMALL = 'sm',
  MEDIUM = 'm',
  LARGE = 'l',
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
  background: ${({ theme }) => (theme?.colors?.text ? theme?.colors?.text : 'white')};
  max-width: ${({ maxWidth }) => maxWidth ?? '300px'};
  min-height: ${({ minHeight }) => minHeight ?? '168px'};
  padding: 5px;
`

const ModalBackground = styled('div')<{}>`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
`

const Modal = ({
  children,
  style,
  backgroundStyle,
  backroundClickEvent,
  size = ModalSize.MEDIUM,
  ...rest
}: {
  style?: React.CSSProperties
  children?: React.ReactNode
  size?: ModalSize
  backgroundStyle?: React.CSSProperties
  backroundClickEvent?: Function
} & ModalStyledProps) => {
  let setting = DefaultCardSetting.get(size)

  if (!setting) {
    console.warn('Component/Modal: setting error')
    return null
  }
  setting = { ...setting, ...rest }

  const handleBackgroundClick = () => {
    backroundClickEvent?.()
  }

  return (
    <ModalBackground style={backgroundStyle} onClick={handleBackgroundClick}>
      <ModalStyled {...setting} style={style}>
        {children}
      </ModalStyled>
    </ModalBackground>
  )
}

export default Modal

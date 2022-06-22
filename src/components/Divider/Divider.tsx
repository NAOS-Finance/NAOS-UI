import React from 'react'
import styled, { ThemeProps } from 'styled-components'

const DividerStyled = styled.div`
  background: ${({ theme }) => (theme?.colors?.text ? theme?.colors?.text : 'gray')};
  height: 1px;
  width: 80%;
  margin: 50px auto;
`

export interface DividerProps {
  style?: React.CSSProperties
}

const Divider = ({ style }: DividerProps) => {
  return <DividerStyled style={style}></DividerStyled>
}

export default Divider

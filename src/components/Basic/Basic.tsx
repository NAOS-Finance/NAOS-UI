import React from 'react'
import styled from 'styled-components'

export interface BasicProps {
  width?: string
  height?: string
  marginTop?: string
  marginRight?: string
  marginBottom?: string
  marginLeft?: string
  onClick?: () => void
}

export const BasicDivStyled = styled.div<BasicProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: transparent;
    margin-top: ${(props) => (props.marginTop === undefined ? '0' : props.marginTop)};
    margin-right: ${(props) => (props.marginRight === undefined ? '0' : props.marginRight)};
    margin-bottom: ${(props) => (props.marginBottom === undefined ? '0' : props.marginBottom)};
    margin-left: ${(props) => (props.marginLeft === undefined ? '0' : props.marginLeft)};
`

export const BasicButtonStyled = styled.button<BasicProps>`
    width: ${(props) => props.width};
    height: ${(props) => props.height};
    background-color: transparent;
    margin-top: ${(props) => (props.marginTop === undefined ? '0' : props.marginTop)};
    margin-right: ${(props) => (props.marginRight === undefined ? '0' : props.marginRight)};
    margin-bottom: ${(props) => (props.marginBottom === undefined ? '0' : props.marginBottom)};
    margin-left: ${(props) => (props.marginLeft === undefined ? '0' : props.marginLeft)};
`
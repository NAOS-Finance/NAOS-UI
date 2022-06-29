import React, { useContext } from 'react'
import styled from 'styled-components'
import { BasicProps, BasicDivStyled } from '../Basic/Basic'
import { Variant } from '../../core/styles/createTypography'
import createTheme, { Theme } from '../../core/styles/createTheme'

const defaultTheme = createTheme()

interface TypographyStyledProps extends BasicProps {
  themeStyle: Theme
  variant?: Variant
  color?: string
  align?: string
  padingTop?: string
  padingRight?: string
  padingBottom?: string
  padingLeft?: string
}

const TypographyStyled = styled(BasicDivStyled)<TypographyStyledProps>((props) => {
  if (props.variant === undefined) {
    return {
      width: props.width === undefined ? 'auto' : props.width,
      height: props.height === undefined ? '24px' : props.height,
      color: props.color === undefined ? props.theme?.textColor?.primary : props.color,
      textAlign: props.align === undefined ? ('center' as 'center') : (props.align as 'center' | 'right' | 'left'),
      paddingTop: props.padingTop === undefined ? '0' : props.padingTop,
      paddingRight: props.padingRight === undefined ? '16px' : props.padingRight,
      paddingBottom: props.padingBottom === undefined ? '0' : props.padingBottom,
      paddingLeft: props.padingLeft === undefined ? '16px' : props.padingLeft,
      fontFamily: props.themeStyle.typography.fontFamily,
      fontSize: props.themeStyle.typography.fontSize,
      fontWeight: props.themeStyle.typography.fontWeightLight,
    }
  } else {
    const typographyStyledObject: Record<string, string | number> = {}
    Object.keys(props.themeStyle.typography[props.variant]).forEach((key) => {
      typographyStyledObject[key] = props.themeStyle.typography[props.variant as Variant][key] as string | number
    })

    return {
      width: props.width === undefined ? 'auto' : props.width,
      height: props.height === undefined ? '24px' : props.height,
      color: props.color === undefined ? props.theme?.textColor?.primary : props.color,
      textAlign: props.align === undefined ? ('center' as 'center') : (props.align as 'center' | 'right' | 'left'),
      paddingTop: props.padingTop === undefined ? '0' : props.padingTop,
      paddingRight: props.padingRight === undefined ? '16px' : props.padingRight,
      paddingBottom: props.padingBottom === undefined ? '0' : props.padingBottom,
      paddingLeft: props.padingLeft === undefined ? '16px' : props.padingLeft,
      ...typographyStyledObject,
    }
  }
})

export interface TypographyProps extends Omit<TypographyStyledProps, 'typographyStyle'>  {
  themeContext?: React.Context<Theme>
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Typography = ({ style, children, themeContext, ...rest }: TypographyProps) => {
  if (themeContext !== undefined) {
    const theme: Theme = useContext<Theme>(themeContext)

    return (
      <TypographyStyled {...rest} style={style} themeStyle={theme}>
        {children}
      </TypographyStyled>
    )
  }

  return (
    <TypographyStyled {...rest} style={style} themeStyle={defaultTheme}>
      {children}
    </TypographyStyled>
  )
}

export default Typography

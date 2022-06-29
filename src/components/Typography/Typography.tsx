import React, { useContext } from 'react'
import styled from 'styled-components'
import { BasicProps, BasicDivStyled } from '../Basic/Basic'
import createTypography, { Typography, Variant } from '../../core/styles/createTypography'

const defaultTypographyTheme = createTypography({})

interface TypographyStyledProps extends BasicProps {
  typographyStyle: Typography
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
      fontFamily: props.typographyStyle.fontFamily,
      fontSize: props.typographyStyle.fontSize,
      fontWeight: props.typographyStyle.fontWeightLight,
    }
  } else {
    const typographyStyledObject: Record<string, string | number> = {}
    Object.keys(props.typographyStyle[props.variant]).forEach((key) => {
      typographyStyledObject[key] = props.typographyStyle[props.variant as Variant][key] as string | number
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

export interface TypographyProps extends TypographyStyledProps {
  themeContext?: React.Context<Typography>
  style?: React.CSSProperties
  children?: React.ReactNode
}

const Typography = ({ style, children, themeContext, ...rest }: TypographyProps) => {
  if (themeContext) {
    const theme: Typography = useContext<Typography>(themeContext)

    return (
      <TypographyStyled {...rest} style={style} typographyStyle={theme}>
        {children}
      </TypographyStyled>
    )
  }

  return (
    <TypographyStyled {...rest} style={style} typographyStyle={defaultTypographyTheme}>
      {children}
    </TypographyStyled>
  )
}

export default Typography

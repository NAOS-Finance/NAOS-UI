import { TypographyFull, TypographyOptions } from './createTypography'
import createTypography from './createTypography'

export interface ThemeOptions {
  // palette: Partial<Record<string, Record<string, string> | string>>
  typography: TypographyOptions
}

export interface Theme {
  // palette: Record<string, Record<string, string> | string>
  typography: TypographyFull
}

export default function createTheme(options?: ThemeOptions, ...args: object[]): Theme {
  // const palette = options?.palette ?? {}
  const typography = createTypography(options?.typography ?? {})
  // const typography = createTypography(options?.typography, ...args)
  // return { palette, typography }

  return { typography }
}

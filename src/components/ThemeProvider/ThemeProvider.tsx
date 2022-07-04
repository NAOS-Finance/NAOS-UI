import React, { createContext } from 'react'
import createTheme, { Theme } from '../../core/styles/createTheme'

const defaultTheme = createTheme()

export const ThemeContext = createContext<Theme>(defaultTheme)

export interface ThemeProviderProps {
  theme?: Theme
  children?: React.ReactNode
}

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme ?? defaultTheme}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

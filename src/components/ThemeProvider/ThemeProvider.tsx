import React, { createContext } from 'react'
import { Theme } from '../../core/styles/createTheme'

export const ThemeContext = createContext<Theme | null>(null)

export interface ThemeProviderProps {
  theme?: Theme
  children?: React.ReactNode
}

const ThemeProvider = ({ children, theme }: ThemeProviderProps) => {
  return <ThemeContext.Provider value={theme ?? null}>{children}</ThemeContext.Provider>
}

export default ThemeProvider

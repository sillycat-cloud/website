import { createContext, useContext, useEffect, useState } from 'react'

interface ThemeContextType {
  isDark: boolean
  setIsDark: (value: boolean) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  setIsDark: () => {},
})

export function useThemeProvider() {
  const [isDark, setIsDark] = useState<boolean>(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark)
  }, [isDark])

  return { isDark, setIsDark }
}

export function useTheme() {
  return useContext(ThemeContext)
}

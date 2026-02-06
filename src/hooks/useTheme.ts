// src/hooks/useTheme.ts
import { useEffect, useState } from 'react'

export function useTheme() {
  const [isDark, setIsDark] = useState<boolean>(() => localStorage.getItem('theme') === 'dark')

  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', isDark) // optional: tailwind dark class
  }, [isDark])

  return { isDark, setIsDark }
}
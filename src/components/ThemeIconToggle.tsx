import { useTheme } from '../hooks/useTheme'

export default function ThemeIconToggle() {
  const { isDark, setIsDark } = useTheme()
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className="mt-4 px-4 py-2 rounded-lg bg-gray-800 text-white cursor-pointer"
    >
      {isDark ? 'Light Mode' : 'Dark Mode'}
    </button>
  )
}
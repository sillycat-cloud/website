import { useTheme } from '../hooks/useTheme'

export default function ThemeIconToggle() {
  const { isDark, setIsDark } = useTheme()
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      aria-label="Toggle theme"
      className={`${isDark ? 'bg-yellow-50 text-gray-900' : 'bg-gray-900 text-yellow-50'} mt-4 px-4 py-2 rounded-lg cursor-pointer active:scale-95 transition-transform duration-100`}    >
      {isDark ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
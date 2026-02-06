import ThemeIconToggle from "./components/ThemeIconToggle"
import lightIcon from "./assets/light_mode_icon.png"
import darkIcon from "./assets/dark_mode_icon.png"
import { useTheme } from "./hooks/useTheme"

function App() {
  const { isDark } = useTheme()
  return (
    <div className={`${isDark ? 'bg-gray-900' : 'bg-yellow-50'} text-center min-h-screen`}>
      <img src={isDark ? darkIcon : lightIcon} className="size-25 rounded-4xl shadow-black-5 inline-block" />
      <ThemeIconToggle />
    </div>
  )
}

export default App
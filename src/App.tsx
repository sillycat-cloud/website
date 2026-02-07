import ThemeIconToggle from "./components/ThemeIconToggle"
import lightIcon from "./assets/light_mode_icon.png"
import darkIcon from "./assets/dark_mode_icon.png"
import { useTheme } from "./hooks/useTheme"
import H1Text from "./components/h1_text"

function App() {
  const { isDark } = useTheme()
  
  return (
    <div className={`${isDark ? 'bg-gray-900 text-yellow-50' : 'bg-yellow-50 text-black'} min-h-screen text-center gap-y-6 pt-3`}>
      <img 
        src={isDark ? darkIcon : lightIcon} 
        className="w-24 h-24 rounded-3xl shadow-lg inline-block" 
      />
      <ThemeIconToggle />
    <div className="flex flex-col gap-y-5 w-screen bottom-5 items-center pt-15">
      <H1Text>Welcome to the WIP Silly Cat Cloud homepage!</H1Text>
      <button data-tally-open="pbBx1b" className="bg-blue-500 px-6 py-3 rounded text-white">
        Join Waitlist
      </button>
      <button className="bg-green-500 py-4 rounded w-33 text-white">
        Learn More
      </button>
      </div>
    </div>
  )
}

export default App
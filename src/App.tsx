import ThemeIconToggle from "./components/ThemeIconToggle"
import lightIcon from "./assets/light_mode_icon.png"
import darkIcon from "./assets/dark_mode_icon.png"
import { useTheme } from "./hooks/useTheme"
import H1Text from "./components/h1_text"
import H2Text from "./components/h2_text"
import H3Text from "./components/h3_text"
import { motion } from "motion/react"
import { Turnstile } from 'react-turnstile'
import { useState } from 'react'

function App() {
  const { isDark } = useTheme()
  const [token, setToken] = useState('')
  
  const handleJoinWaitlist = () => {
    if (!token) {
      alert('Please complete the challenge first!')
      return
    }
  }
  const handleDiscord = () => {
    if (token) {
      window.open("https://discord.gg/sZxmbu4ZrG")
      return
  } else {
    alert("Please complete the challenge first!")
    return
  }
}

  return (
    <div className={`${isDark ? 'bg-gray-900 text-yellow-50' : 'bg-yellow-50 text-black'} min-h-auto text-center gap-y-6 pt-3`}>
      <img 
        src={isDark ? darkIcon : lightIcon} 
        className="w-24 h-24 rounded-3xl shadow-lg inline-block" 
      />
      <ThemeIconToggle />
      <div id="google_translate_element" className="text-white"></div>
      <div className="flex flex-col gap-y-5 w-screen bottom-5 items-center pt-15">
        <H1Text>Welcome to the WIP Silly Cat Cloud homepage!</H1Text>
        <H2Text>The project and the homepage itself is still in beta and WIP access. But,</H2Text>
        <H2Text>you can always join the waitlist to wait at any time below:</H2Text>
        
        {/* Turnstile Challenge */}
        <div className="flex justify-center">
          <Turnstile
            sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '3x00000000000000000000FF'}
            onVerify={(token) => setToken(token)}
            onExpire={() => setToken('')}
            theme={isDark ? 'dark' : 'light'}
            appearance="interaction-only"
            refreshExpired="auto"
          />
        </div>
        
        <motion.button
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded text-white ${
            !token ? 'bg-gray-400 cursor-not-allowed' : 'bg-cyan-500'
          }`}
          data-tally-open={token ? "pbBx1b" : undefined}
          onClick={handleJoinWaitlist}
          disabled={!token}
        >
          Join Waitlist
        </motion.button>
        
        <H2Text>If you want updates about our service, you can always join our official discord:</H2Text>

        <motion.button
          whileHover={{ scale: 1.1, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded text-white ${
            !token ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-500'
          }`}
          onClick={handleDiscord}
          disabled={!token}
        >
          Join the Discord
        </motion.button>

        <H1Text>FAQ:</H1Text>

        <H1Text>What is Silly Cat Cloud?</H1Text>
        <H3Text>Silly Cat Cloud is a very silly, cat related cloud provider/service i guess,</H3Text>
        <H3Text>I was randomly bored one day and thought about making a silly cloud provider.</H3Text>
        
        <H1Text>Is it going to be any good?</H1Text>
        <H3Text>So far it isnt finished at all, so I really don't know yet. It's my first ever big project so I don't really know what im doing sometimes. But it'll be the best I can do I guess.</H3Text>
        
        <H1Text>Is it going to be free?</H1Text>
        <H3Text>Most probably. I don't really like paywalls since most of the time, they're very expensive. So, I'll do what I can do with free tiers I guess (except for the domain of course).</H3Text>
        
        <H1Text>Did you work the entire day while writting this..?</H1Text>
        <H3Text>Yes, and I have a headache.</H3Text>
      </div>
    </div>
  )
}

export default App

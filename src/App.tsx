import { Analytics } from '@vercel/analytics/react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import PipesDiagram from './components/PipesDiagram'
import DiscordCTA from './components/DiscordCTA'
import FAQ from './components/FAQ'
import { PfpCredit, Footer } from './components/FooterBits'
import UnavailableLangPopup from './components/UnavailableLangPopup'

function App() {
  return (
    <div className="sc-page" id="top">
      <NavBar />
      <main>
        <Hero />
        <div id="what">
          <PipesDiagram />
        </div>
        <DiscordCTA />
        <FAQ />
      </main>
      <PfpCredit />
      <Footer />
      <UnavailableLangPopup />
      <Analytics />
    </div>
  )
}

export default App

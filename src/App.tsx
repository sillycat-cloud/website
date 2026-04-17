import NavBar from './components/NavBar'
import Hero from './components/Hero'
import PipesDiagram from './components/PipesDiagram'
import DiscordCTA from './components/DiscordCTA'
import FAQ from './components/FAQ'
import { PfpCredit, Footer } from './components/FooterBits'

function App() {
  return (
    <div className="sc-page" id="top">
      <NavBar />
      {/* the weird and ugly google translation widget */}
      <div id="google_translate_element" style={{ textAlign: 'center', padding: '6px 0' }} />
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
    </div>
  )
}

export default App

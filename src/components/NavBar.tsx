import { useTheme } from '../hooks/useTheme'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'

export default function NavBar() {
  const { isDark, setIsDark } = useTheme()
  const logo = isDark ? logoDark : logoLight
  return (
    <nav className="sc-nav">
      <a href="#top" className="sc-nav-brand">
        <img src={logo} alt="SillyCat Cloud logo" />
        <span className="sc-nav-word">
          sillycat<span className="sc-nav-dot">.</span>cloud
        </span>
        <span className="sc-nav-tag">BETA</span>
      </a>
      <div className="sc-nav-links">
        <a href="#what">what is this</a>
        <a href="#pipes">how it works</a>
        <a href="#faq">faq</a>
        <a href="https://discord.gg/sZxmbu4ZrG" target="_blank" rel="noreferrer">discord</a>
      </div>
      <button
        className="sc-theme-btn"
        onClick={() => setIsDark(!isDark)}
        aria-label="Toggle theme"
      >
        <span>{isDark ? '☀️' : '🌙'}</span>
        <span>{isDark ? 'Light' : 'Dark'}</span>
      </button>
    </nav>
  )
}

import { useTheme } from '../hooks/useTheme'
import { useI18n } from '../i18n/I18nProvider'
import logoLight from '../assets/logo-light.png'
import logoDark from '../assets/logo-dark.png'
import LanguageSwitcher from './LanguageSwitcher'

export default function NavBar() {
  const { isDark, setIsDark } = useTheme()
  const { t } = useI18n()
  const logo = isDark ? logoDark : logoLight
  return (
    <nav className="sc-nav">
      <a href="#top" className="sc-nav-brand">
        <img src={logo} alt="SillyCat Cloud logo" />
        <span className="sc-nav-word">
          sillycat<span className="sc-nav-dot">.</span>cloud
        </span>
        <span className="sc-nav-tag">{t('nav.beta')}</span>
      </a>
      <div className="sc-nav-links">
        <a href="#what">{t('nav.what')}</a>
        <a href="#pipes">{t('nav.how')}</a>
        <a href="#faq">{t('nav.faq')}</a>
        <a href="https://discord.gg/sZxmbu4ZrG" target="_blank" rel="noreferrer">{t('nav.discord')}</a>
      </div>
      <div className="sc-nav-actions">
        <LanguageSwitcher />
        <button
          className="sc-theme-btn"
          onClick={() => setIsDark(!isDark)}
          aria-label={t('nav.themeAriaLabel')}
        >
          <span>{isDark ? '☀️' : '🌙'}</span>
          <span>{isDark ? t('nav.themeLight') : t('nav.themeDark')}</span>
        </button>
      </div>
    </nav>
  )
}

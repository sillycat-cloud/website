import { useState } from 'react'
import { Turnstile } from 'react-turnstile'
import { motion } from 'motion/react'
import { useTheme } from '../hooks/useTheme'
import { useI18n } from '../i18n/I18nProvider'
import piskelCat from '../assets/piskel-cat.png'

export default function Hero() {
  const { isDark } = useTheme()
  const { t } = useI18n()
  const [token, setToken] = useState('')
  const [joined, setJoined] = useState(false)

  const handleJoinWaitlist = () => {
    if (!token) {
      alert('Please complete the challenge first.')
      console.log("YOU didnt complete the challange!!11!1! (no waitlist for u until completion >:DD)")
      return
    }
    setJoined(true)
  }

  return (
    <section className="sc-hero">
      <div className="sc-hero-bg" />
      <div className="sc-hero-inner">
        <div className="sc-hero-copy">
          <span className="sc-eyebrow">{t('hero.eyebrow')}</span>
          <h1
            className="sc-h1 sc-hero-title"
            dangerouslySetInnerHTML={{ __html: t('hero.titleHtml') }}
          />
          <p className="sc-lede sc-hero-lede">{t('hero.lede')}</p>

          {joined ? (
            <div className="sc-waitlist-done">
              <img src={piskelCat} alt="" className="sc-mascot-mini" />
              <div>
                <b>{t('hero.joinedTitle')}</b>
                <div className="sc-p" style={{ margin: 0 }}>{t('hero.joinedBody')}</div>
              </div>
            </div>
          ) : (
            <div className="sc-waitlist">
              <span className="sc-eyebrow">{t('hero.waitlistEyebrow')}</span>
              <div className="sc-turnstile-wrap">
                <Turnstile
                  sitekey={import.meta.env.VITE_TURNSTILE_SITE_KEY || '3x00000000000000000000FF'}
                  onVerify={(tk) => setToken(tk)}
                  onExpire={() => setToken('')}
                  theme={isDark ? 'dark' : 'light'}
                  appearance="interaction-only"
                  refreshExpired="auto"
                />
              </div>

              <div className="sc-cta-row">
                <motion.button
                  whileHover={token ? { scale: 1.04 } : undefined}
                  whileTap={token ? { scale: 0.96 } : undefined}
                  className="sc-btn sc-btn-primary"
                  data-tally-open={token ? 'pbBx1b' : undefined}
                  onClick={handleJoinWaitlist}
                  disabled={!token}
                >
                  {t('hero.joinWaitlist')}
                </motion.button>
                <span className="sc-p sc-cta-note">
                  {token ? t('hero.ctaNoteReady') : t('hero.ctaNoteNotReady')}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="sc-hero-mascot">
          <div className="sc-hero-card">
            <span className="sc-eyebrow">{t('hero.statusEyebrow')}</span>
            <div className="sc-status-list">
              <div className="sc-status"><span className="sc-dot sc-dot-lime" />{t('hero.statusWebsite')}</div>
              <div className="sc-status"><span className="sc-dot sc-dot-yellow" />{t('hero.statusFileHosting')}</div>
              <div className="sc-status"><span className="sc-dot sc-dot-yellow" />{t('hero.statusGameServers')}</div>
              <div className="sc-status"><span className="sc-dot sc-dot-rose" />{t('hero.statusSleep')}</div>
            </div>
          </div>
          <img src={piskelCat} alt="pixel cat mascot" className="sc-hero-cat" />
        </div>
      </div>
    </section>
  )
}
